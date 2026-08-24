# Authoring Conventions

Internal reference for anyone editing `src/content/`. Written 2026-08-24 during the Cowork
conversion. Read this before changing an exercise.

## What the course is

A self-paced module, roughly 2–4 hours, titled "Agents and Skills with Claude." Two headline
objectives: what an agentic desktop can do, and **how to compose custom Skills with no programming
experience**. Delivered primarily in Claude Cowork with a connected folder. A one-hour optional
walkthrough and Friday office hours support it.

Composing a skill is the **capstone**, in Module 4. The earlier modules build toward it so that the
capstone is achievable rather than a cold start — but they do not ask the learner to author
anything:

| Module | Skills objective |
|---|---|
| 1 | **Use** a skill — the reference-interview practice skill runs an exercise |
| 2 | **Read** a skill critically — inspect what the review skill does, and where its judgment stops |
| 3 | **Modify** a skill — adapt a rubric or brief into a local variant |
| 4 | **Compose** a skill — the capstone: author, save, and test one of your own |

Keep the first three light. Their job is to make skills familiar, so that by Module 4 the learner
is editing a format they have already read three times rather than meeting it for the first time.

## Platform stance

Cowork-first, not product-neutral. Write exercises natively for a connected folder. Do not
reintroduce "your AI tool," "project or notebook," "upload," or menu-name hedging.

Portability to other agentic desktops (Codex, Kiro) is handled in one place —
`docs/OTHER-PLATFORMS.md` — and nowhere else. Do not scatter alternatives through the exercises.

Keep the no-premium and non-AI fallbacks. Those serve equity, not neutrality, and they stay.

## No outside dependencies

Standing rule: **no exercise may require web access, a login, a subscription, an account, an API key
beyond the workshop's own setup, or a live lookup of any kind.** Participants routed through Bedrock
have no web search, and a captured fixture also means every learner in a cohort meets the same
result. Everything a learner reads must be in the connected folder.

If a new exercise needs a source record, a DOI, a landing page, a database help page, a thesaurus,
an authority file, or a catalogue result, the need is met with a fixture in `sample-data/` — not
with an instruction to go and look. Extend an existing fixture before adding one. Reflecting on
what a librarian *would* check outside the folder is fine and is often the point; being told to go
and check it is not. Local, non-networked work — a calculator, a spreadsheet, a text editor, a file
the learner produced — is always fine.

## Cowork vocabulary

| Do not write | Write |
|---|---|
| upload the file | read `sample-data/x.csv` from the connected folder |
| attach both files | the files are already in the folder |
| start a new project or notebook | start a new conversation |
| your AI tool | Claude, or Cowork |
| the tool's research mode | (removed — Module 2 audits a fixture) |
| copy this table into a spreadsheet | write it to `outputs/x.xlsx` |

## Every deliverable is a file

A step that produces something must name the file it produces, under `outputs/`. Chat-only
deliverables are the defect this conversion exists to fix.

Canonical filenames — do not invent variants, and do not reference a file another module has not
created yet:

| File | Created | Later used by |
|---|---|---|
| `outputs/session-log.md` | M1 e1 | appended in every module; becomes the methods record in M4 e4 |
| `outputs/research-brief.md` | M1 e2 | M1 e3, M1 e4, M2 e2, M4 e1, M4 e4 |
| `outputs/concept-map.xlsx` | M1 e3 | M1 e4, M2 e2, M4 e2 adds tested syntax, M4 e4 |
| `outputs/patron-followup.md` | M1 e4 | — |
| `outputs/source-inventory.xlsx` | M2 e3 | M2 e4 |
| `outputs/claim-ledger.xlsx` | M2 e4 | M4 e4 |
| `outputs/local-verification-standard.md` | M3 e2 | M3 e2 matrix — the learner's modified rubric |
| `outputs/claim-evidence-matrix.xlsx` | M3 e2 | M3 e3 |
| `outputs/synthesis.md` | M3 e3 | M4 e4 |
| `outputs/usage-analysis.md` | M3 e4 | — |
| `outputs/workflow.md` | M4 e1 | becomes the authored skill in M4 |
| `outputs/search-translation-log.xlsx` | M4 e2 | M4 e4 |
| `outputs/mini-lesson.md` | M4 e3 | — |
| `outputs/handoff-package.md` | M4 e4 | — |
| `outputs/reproducible-search-handoff/SKILL.md` and `.skill` | M4 e4 | the capstone artifact the learner installs and tests |

Use `.xlsx` where the artifact is a table a colleague will filter, sort, or extend — matrices,
inventories, ledgers, logs. Use `.md` for prose.

Archives track filenames, established the same way and subject to the same rule — do not invent
variants, and do not reference a file another module has not created yet:

| File | Created | Later used by |
|---|---|---|
| `outputs/session-log.md` | M1 e1 | shared with the research track; both tracks append to the same file |
| `outputs/archives-request-brief.md` | M1 e2 | M1 e3, M1 e4, M2 e2, M4 e1 |
| `outputs/archives-access-points.xlsx` | M1 e3 | M1 e4, M2 e2, M4 e2, M4 e4 |
| `outputs/archives-researcher-followup.md` | M1 e4 | — |
| `outputs/archives-description-inventory.xlsx` | M2 e3 | M2 e4 |
| `outputs/archives-description-ledger.xlsx` | M2 e4 | M3 e2, M4 e4 |
| `outputs/archives-description-standard.md` | M3 e2 | M3 e2 matrix — the learner's modified rubric |
| `outputs/archives-evidence-matrix.xlsx` | M3 e2 | M3 e3 |
| `outputs/archives-processing-plan.md` | M3 e3 | M4 e4 |
| `outputs/archives-digitization-analysis.md` | M3 e4 | — |
| `outputs/archives-workflow.md` | M4 e1 | becomes the authored skill in M4 e4 |
| `outputs/archives-authority-check-log.xlsx` | M4 e2 | M4 e4 |
| `outputs/archives-mini-lesson.md` | M4 e3 | — |
| `outputs/archives-handoff-package.md` | M4 e4 | — |
| `outputs/description-remediation-review/SKILL.md` and `.skill` | M4 e4 | the archives capstone artifact |
| `outputs/digitization-rights-triage/SKILL.md` and `.skill` | M4 e4 | the alternative archives capstone artifact — the learner picks one of the two in M4 e1 |

## Sample data

Everything the learner reads lives in `sample-data/` and is simulated. Existing files:

- `research-request.txt` — the faculty request driving most exercises
- `evidence-notes.csv` — the librarian's evidence log, rows A–E
- `usage-report.csv` — serials usage data
- `research-scan-draft.md` — **the Module 2 fixture**: a simulated AI research scan with seeded
  defects. Module 2 audits this instead of running a live search, because participants routed
  through Bedrock have no web search and because seeded defects make the lesson fire reliably.
  Its sources A1–E1 correspond deliberately to rows A–E of `evidence-notes.csv` and contradict them.
- `harvested-source-page.md` — a simulated retrieved page carrying an embedded prompt injection,
  used in M4 e3.
- `mock-sources/` — eleven simulated retrieval results, `A1.md` to `K1.md`, one per citation in the
  scan's source table, plus a learner-facing `index.md` stating what each returned. M2 e3 and e4 do
  their identity checks by opening these files. Nobody has web search, and captured results also mean
  every learner in a cohort audits the same eleven outcomes. Never send a learner to a browser, a
  DOI resolver, or a live discovery layer for these.
- `mock-database/` — **the Module 4 e2 fixture**: a fictional platform, the Wexford Abstracts and
  Index on the Perihelion 6 interface, in four files. `HELP-syntax-reference.md` is the syntax
  documentation a drafted translation is checked against; `search-session-transcript.md` is a
  session history with counts, flags, and one line that did not run; `thesaurus-extract.md` holds
  the controlled vocabulary plus, in its last section, the subject-authority terms the archives
  track checks against; `mock-authority-file.md` is a regional name authority file covering every
  name in `archives/finding-aid-draft.md`. The syntax is deliberately not any real platform's, so
  a learner cannot pass the step from prior knowledge. Never send a learner to a real database,
  a vendor help page, a live thesaurus, or a live authority file for these.

Archives fixtures, all under `sample-data/archives/` and all fictional (Calderwood Institute, Weldon
Harbor, the Tidal Flats — no real repository, collection, or person):

- `collection-request.txt` — the reading room inquiry driving the archives track, parallel in role to
  `research-request.txt`. Its ambiguity is the unit of description, not the meaning of an outcome.
- `finding-aid-draft.md` — **the Module 2 audit object for archives**: a legacy finding aid retyped for
  the web, with seeded defects.
- `digitization-inventory.csv` — item metadata for a digitization batch, the second Module 2 audit
  object and the data file for M3 e4.
- `accession-note.txt` — an accession and preliminary appraisal record; supplies the counter-evidence
  in M2 e3 and the material for M3 e2, M3 e3, and M4 e1.

The three files describe overlapping photographic material and disagree about creator, date, and
rights. That disagreement is the archives analogue of the scan/evidence-log contradiction and is where
the module's strongest discussion comes from.

The defect inventories are facilitator-only, at
`plugins/library-ai-workshop-facilitator/skills/run-library-ai-workshop-cohort/references/FIXTURE-KEY.md`
and `.../references/ARCHIVES-FIXTURE-KEY.md`.
Never restate a seeded defect in an exercise, a checkpoint, or a learner-visible body. Checkpoints
must describe the *kind* of finding, not the finding.

This extends to `FACILITATOR.md`. `sync_course_content.mjs` copies the root `FACILITATOR.md` into
*both* skills' references, including `facilitate-library-ai-workshop`, which coaches learners. The
keys are copied into neither — they are hand-maintained in the cohort skill only. So fixture
analysis, headline findings, and answer-shaped discussion questions belong in a key, and
`FACILITATOR.md` gets a pointer.

## Adaptivity: the archives track

The published description promises the module "adapts to learners and presents scenarios and
workflows in which the tool can be used." Two tracks exist:

- **Research support** (default) — the open-access / public-health request.
- **Archives** — archival description and finding aids, and digitization and digital collections.

The archives variant lives in each exercise's body markdown under a `## Archives track` heading, so
it renders for the learner without any schema change. It teaches the same concept on archival
material. Do not fork the frontmatter steps; the steps stay research-support and the body offers the
alternative.

Placement: after the main body prose and *before* `## Discussion`, so discussion still closes the
page. Every section names the fixture it reads and the output file it writes. All sixteen exercises
carry one. Two of them — M1 e1 and M4 e3 — say plainly that the default exercise already serves
archives staff and give only the substitutions, because the concept in both is domain-neutral. Say
that when it is true; a forced variant is worse than none.

## Schema constraints

`src/lib/content/types.ts` defines the only permitted step fields:

```
index, label, type, instruction, prompt_text?, checkpoint?, facilitator_note?,
reflection_prompt?, observe_items?
```

`type` is exactly one of `workspace | prompt | observe | reflect`. Adding a field requires a code
change and a rebuild — avoid it. Module frontmatter needs `id, title, tagline, icon,
estimated_minutes, role_tags, exercises[]`, and `estimated_minutes` on the module must equal the sum
of its exercises.

Step conventions: `workspace` for anything the learner does themselves, including opening a file,
checking arithmetic, or approving an action. `prompt` when a prompt is supplied verbatim. `observe`
for a checklist against something already produced. `reflect` for a question with no right answer —
never supply the answer.

## Facilitator notes

`facilitator_note` is internal and must not read as an answer key. Use it for what a facilitator
needs to *do*: where learners stall, what to timebox, which dependency breaks if the step is
skipped, what a good failure looks like. Never restate a fixture defect.

## Tone

Address the learner directly. Assume professional competence and no programming background. Do not
frame AI use as inevitable or refusal as failure. Keep the existing register — plain, specific, not
promotional.
