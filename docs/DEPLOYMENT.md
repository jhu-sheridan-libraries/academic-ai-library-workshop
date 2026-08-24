# Running and Deploying the Workshop App

This file is for whoever hosts the learner-facing web app and the facilitator dashboard. Learners
do not need any of it. If you are a participant, start with the README and then
`docs/PARTICIPANT-SETUP.md`.

The workshop content itself is plain markdown and can be read straight from the repository or the
connected folder, so hosting the app is optional. You need it if you want progress tracking and the
cohort dashboard.

---

## Prerequisites

- Node.js 20 or later (the GitHub Pages workflow pins Node 26)
- For the Node deployment with progress tracking: an AWS account with DynamoDB access
- The `src/content/library-context/` folder made available to participants

---

## Install

```bash
npm install
```

## Configure

```bash
cp .env.example .env
```

The full set of variables, as shipped in `.env.example`:

```
# WORKSHOP_PERSISTENCE=dynamodb
AWS_REGION=us-east-1
AWS_ROLE_ARN=arn:aws:iam::123456789012:role/LibraryWorkshopRole
AWS_ROLE_SESSION_NAME=library-workshop-session
DYNAMODB_TABLE=LibraryWorkshop
FACILITATOR_TOKEN=changeme
PUBLIC_COHORT=fall2026
```

Set `FACILITATOR_TOKEN` to something you choose rather than leaving it at `changeme`.

## Persistence is optional

**Nothing below is required to run the workshop.** By default the app stores learner sessions,
progress, and notes in the server process — no AWS account, no table, no credential. This is
deliberate: the course is self-paced, and a librarian who wants to work through it on their own
machine should not need cloud infrastructure to start an exercise. Run `npm run dev` with no `.env`
at all and it works.

Set `WORKSHOP_PERSISTENCE=dynamodb` when you are facilitating a group and want two things the
in-process store cannot give you: progress that survives a restart or a deploy, and a facilitator
dashboard showing the whole cohort rather than only the learners who happened to hit this process.

There is also a safety net. If persistence is switched on but DynamoDB turns out to be unreachable —
a missing credential, a table that does not exist, a denied role — the app logs a warning once and
falls back to the in-process store for the rest of the run, rather than returning an error to a
learner who only wanted to begin. You will see this in the server log:

```
[workshop] DynamoDB is unavailable (CredentialsProviderError). Falling back to in-process storage...
```

If you see that and you *wanted* real persistence, fix the credential chain below. If you did not,
you can ignore it or unset `WORKSHOP_PERSISTENCE`.

The static build never persists, since there is no server to persist from.

### Running a tracked cohort (the intended setup)

Participants visit a URL. They need no AWS account, no API key for this app, and no configuration —
the Bedrock key in their Claude desktop app is unrelated and grants nothing here. All credentials
stay on your server.

```bash
npm ci
npm run build
npm run start          # node --env-file=.env build/index.js
```

With `.env` holding `AWS_REGION`, `AWS_PROFILE=drcc-ai`, `DYNAMODB_TABLE=LibraryWorkshop`,
`FACILITATOR_TOKEN`, and `PUBLIC_COHORT`, persistence switches on automatically and
`/facilitator?token=…` shows the live cohort.

Two things to verify before a session, because both fail quietly:

1. **The GSI exists.** The dashboard queries `cohort-lastSeen-index`. Without it every dashboard load
   raises `ResourceNotFoundException`. The `aws dynamodb` command to create it is below.
2. **The dashboard header reads "Live".** If it reads **Not recording**, the app is running on
   in-process storage and saving nothing — the banner names the cause. If it reads **In-memory only**,
   persistence was never detected, usually a missing environment.

A note on where to host: if you run this from a laptop over SSO, the session expires and the app
latches into fallback until you restart it. For anything longer than a single session, prefer a host
with an instance profile or task role so credentials refresh on their own.

### Two published versions — do not confuse them

The GitHub Pages workflow publishes a **static** build. Static mode has no server, so it never
tracks progress: `+layout.server.ts` returns `learner: null` and the API routes are absent. It is
useful as a public, readable copy of the course.

The consequence to plan around: if participants use the Pages URL, their progress is not recorded and
your dashboard stays empty even though everything is configured correctly. Send the cohort the hosted
URL, and treat Pages as the shop window. If you do not want two versions in circulation, disable the
workflow.

### Who needs credentials

Only the facilitator. Participants have no AWS account and need none — they get the in-process store
automatically, because they have neither `DYNAMODB_TABLE` nor any AWS credential set. Nothing in the
participant setup guide mentions AWS for this reason.

### A trap worth knowing: the built server does not read `.env`

`vite dev` and `vite preview` load `.env` for you. A production Node server started directly does
not, so `AWS_PROFILE` and `DYNAMODB_TABLE` are simply absent from `process.env`, credential
resolution finds nothing, and you get:

```
CredentialsProviderError: Could not load credentials from any providers
```

Use the provided script, which passes the file explicitly (Node 20.6+):

```bash
npm run build
npm run start        # node --env-file=.env build/index.js
```

Or export the variables into the environment yourself. If you see the credentials error while your
profile works fine in the AWS CLI, this is almost always the cause; the second most common is an
expired SSO session, fixed with `aws sso login --profile <name>`.

As of the change described above this error no longer breaks a learner's session — the app degrades
to in-process storage and logs a warning — but it does mean nothing is being recorded.

## AWS credentials

Only relevant when persistence is on.

The app assumes the role named in `AWS_ROLE_ARN` via STS on startup, using
`fromTemporaryCredentials` in `src/lib/db/client.ts`. The credentials used to *call* AssumeRole come
from the ambient AWS credential chain — an EC2 or ECS instance profile, EKS pod identity, an
`~/.aws/credentials` named profile, or `AWS_PROFILE`. No static `AWS_ACCESS_KEY_ID` /
`AWS_SECRET_ACCESS_KEY` is used or expected.

## Create the DynamoDB table

One table, single-table design. Name it `LibraryWorkshop`, or whatever you set `DYNAMODB_TABLE` to.

- **Partition key**: `pk` (String)
- **Sort key**: `sk` (String)
- **Billing mode**: on-demand (`PAY_PER_REQUEST`)
- **TTL attribute**: `expiresAt`
- **Global secondary index**: name `cohort-lastSeen-index`, partition key `cohort` (String), sort key
  `lastSeen` (String), projection ALL

Via the CLI:

```bash
aws dynamodb create-table \
  --table-name LibraryWorkshop \
  --attribute-definitions \
    AttributeName=pk,AttributeType=S \
    AttributeName=sk,AttributeType=S \
    AttributeName=cohort,AttributeType=S \
    AttributeName=lastSeen,AttributeType=S \
  --key-schema \
    AttributeName=pk,KeyType=HASH \
    AttributeName=sk,KeyType=RANGE \
  --billing-mode PAY_PER_REQUEST \
  --global-secondary-indexes '[
    {
      "IndexName": "cohort-lastSeen-index",
      "KeySchema": [
        {"AttributeName":"cohort","KeyType":"HASH"},
        {"AttributeName":"lastSeen","KeyType":"RANGE"}
      ],
      "Projection": {"ProjectionType":"ALL"}
    }
  ]'
```

Then enable TTL:

```bash
aws dynamodb update-time-to-live \
  --table-name LibraryWorkshop \
  --time-to-live-specification "Enabled=true, AttributeName=expiresAt"
```

## Key patterns

- Learner: `pk=learner#<uuid>` / `sk=META`
- Progress: `pk=learner#<uuid>` / `sk=progress#<moduleId>#<exerciseId>#<padded-stepIndex>`
- Note: `pk=learner#<uuid>` / `sk=note#<moduleId>#<exerciseId>`

The `cohort-lastSeen-index` GSI backs the facilitator queries.

Learner identity is cookie-based: `wid=<uuid>`, 24 hours, created by `POST /api/session`. There is
no authentication.

---

## Development commands

```bash
npm run dev          # Vite dev server at http://localhost:5173
npm run check        # svelte-kit sync + svelte-check against tsconfig.json
npm run check:watch  # the same, in watch mode
npm run build        # production build
npm run build:static # static build (PUBLIC_STATIC=true) into build-static/
npm run preview      # preview a production build
npm run sync:facilitator-plugin  # refresh the references bundled in the facilitator plugin
```

---

## Production deployment

There are two build targets, selected by the `PUBLIC_STATIC` environment variable in
`svelte.config.js`.

### Node server (progress tracking and facilitator dashboard)

Uses `@sveltejs/adapter-node`.

```bash
npm run build
node build/index.js
```

Set the environment variables in your deployment environment rather than in `.env`.

For a single workshop, running the app on a machine on the same network as participants is a
reasonable option. Participants still need their own internet access for their AI tool and for
checking live sources.

### Static site (no database, no dashboard)

`PUBLIC_STATIC=true` swaps in `@sveltejs/adapter-static`, writing to `build-static/` with
`404.html` as the fallback and `precompress` off. `BASE_PATH` sets the base path, which GitHub
Pages needs for project pages served from `/repo-name/`; leave it unset or empty for a custom domain
or a user/org root page.

`.github/workflows/pages.yml` does this on every push to `main`: Node 26, `npm ci`, then
`npm run build:static` with `PUBLIC_STATIC=true` and `BASE_PATH=/<repository-name>`, uploading
`build-static` and deploying to the `github-pages` environment.

### Participant materials release

`.github/workflows/release-materials.yml` runs on pushes touching
`src/content/library-context/**`. It zips that folder into `library-context.zip` and replaces the
`workshop-materials` release with it, so participants always have a current download link.

---

## Facilitator dashboard

```
http://[your-url]/facilitator?token=<FACILITATOR_TOKEN>
```

The token is checked against the `FACILITATOR_TOKEN` environment variable. The dashboard refreshes
every 30 seconds. See `FACILITATOR.md` for the run-of-show guide.

---

## The facilitator plugin

The repo includes an installable plugin at `plugins/library-ai-workshop-facilitator/`, bundling four
skills:

- `facilitate-library-ai-workshop` — coaches one learner through the curriculum
- `run-library-ai-workshop-cohort` — helps a human instructor prepare, teach, and debrief a session
- `practice-library-reference-interview` — role-plays a fictional patron and debriefs, without scoring
- `review-ai-research-output` — audits AI-assisted research work against evidence and release checks

The plugin carries the course materials, simulated data, practice scenarios, and review rubric it
needs at runtime. After changing course content or `FACILITATOR.md`, refresh those bundled copies:

```bash
npm run sync:facilitator-plugin
```

The repo-local marketplace entry is `.agents/plugins/marketplace.json`. A Codex plugin manifest
lives at `plugins/library-ai-workshop-facilitator/.codex-plugin/plugin.json`, and each skill carries
an `agents/openai.yaml`.

The two participant-facing skills are packaged for distribution by
`scripts/package-workshop-skills.sh`, which writes `.skill` files to `dist-skills/` by default. Run
`npm run sync:facilitator-plugin` first so the bundled references are current. Send participants
download links rather than mail attachments; rewritten zip attachments lose the Save skill button
instead of failing loudly.

---

## Project structure

```
src/
├── lib/db/           # DynamoDB client, schema, prepared queries
├── lib/content/      # Markdown loader and TypeScript types
├── lib/stores/       # Svelte 5 $state progress cache
├── lib/utils/        # formatDuration, formatRelativeTime, renderMarkdown
├── lib/components/   # layout, modules, exercise, facilitator, ui
├── content/
│   ├── library-context/   # WORKSPACE-BRIEF.md + simulated sample data
│   └── modules/           # Exercise markdown
└── routes/           # Pages and API endpoints (session, progress, notes, modules)
```

Stack: SvelteKit 2.x and Svelte 5 in TypeScript, Tailwind CSS with
`@tailwindcss/typography`, DynamoDB through `@aws-sdk/lib-dynamodb`, and content parsed with
`gray-matter` and `marked`.

---

## Adding content

Create a directory `src/content/modules/<id>/` containing `module.md` (metadata in frontmatter, plus
an overview body) and exercise files `01-<name>.md` through `N-<name>.md`. The content loader
discovers modules at server startup, so no code change is needed.

The permitted frontmatter fields are defined in `src/lib/content/types.ts`. Read
`docs/AUTHORING-CONVENTIONS.md` before editing any exercise.

---

## Teardown

All records carry a 48-hour TTL, so the table empties itself. To remove it entirely:

```bash
aws dynamodb delete-table --table-name LibraryWorkshop
```
