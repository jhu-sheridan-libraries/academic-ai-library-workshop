# Working Through This Course on Another Platform

The exercises are written for Claude, working against a folder attached to a project. That is a deliberate choice: writing them for one tool
lets them say "read `sample-data/evidence-notes.csv` from the connected folder" instead of "attach
or upload your file, or open your project, depending on which product you are using." Hedged
instructions are harder to follow, not more inclusive.

This file is the single place the course accounts for other platforms. If you are working on
ChatGPT Codex, Kiro, or something else, read this once before you start and then follow the
exercises as written, translating as you go. You will not find alternatives scattered through the
individual exercises, and that is on purpose.

---

## What the course actually assumes

Not "an AI tool." Three specific capabilities:

**A working folder the tool can read and write.** You point the tool at a folder once, and from then
on it can see everything inside — including files you add later — and can create new files there.
The workshop material lives in that folder and your output accumulates in it. No step in this course
asks you to upload anything.

**Multi-step actions that you approve.** The tool proposes something concrete — write this file,
change that line — and waits. You read the proposal, then approve or refuse it. The habit of reading
before approving is taught explicitly in the first exercise and relied on afterward.

**Reusable instruction bundles, which Claude calls skills.** A named set of instructions the tool
loads by itself when it recognizes the kind of task you are describing. You do not paste them in
each time and you do not have to remember they exist.

Anything with those three things will carry this course, whatever the vendor calls them.

## If all you have is a chat window with an upload button

Be candid with yourself: a lot of this course will not work, and the parts that do will teach you
something narrower than what was intended.

What still works reasonably well: the reference interview practice, the source verification and
citation auditing in Module 2, the claim-evidence matrix in Module 3, and every reflection question
in the course. The critical-reading skills are the point, and they are portable to any AI tool or to
no AI tool at all.

What degrades:

- **The boundary lesson in Module 1 loses its subject.** The exercise is about the difference between
  granting standing access to a folder and choosing a file per message. Without the folder there is
  no folder-scope decision to examine, though the reflection question — what would be in a folder
  from your real work that should not be — is still worth sitting with.
- **The approval habit has nothing to practice on.** A chat window does not propose actions and wait
  for you; it just answers. You can read about the habit here but you cannot build it.
- **The output files stop being files.** Every deliverable in this course is a document under
  `outputs/`. In a chat window each one becomes a block of text you must copy out before you lose the
  conversation. Do it anyway — the accumulating record is what Module 4 packages — but budget for the
  copying, and expect the spreadsheet deliverables (`.xlsx` matrices, ledgers, inventories) to become
  tables you paste into a spreadsheet by hand.
- **Later exercises reference earlier files by name.** Module 4 assembles the handoff package from
  `outputs/claim-ledger.xlsx` and `outputs/synthesis.md`, among others. Keep a folder on your own
  disk with those exact filenames and paste the content in as you go, or the last module will not
  have anything to work from.
- **The capstone changes shape.** See below.

## Concept mapping

Treat this as orientation, not documentation. These products change monthly and I am not going to
give you a menu path I cannot verify today.

| In Claude | On ChatGPT Codex | In Kiro | In a plain chat window |
|---|---|---|---|
| Connected folder — standing read and write access to a folder you choose | A workspace or repository the agent operates in. Roughly equivalent in effect, though it is oriented around code repositories rather than a folder of documents | The project or workspace the IDE has open. Roughly equivalent in effect, same code-first orientation | No equivalent. Per-message uploads only |
| File outputs — the tool writes real files into the folder, which you open afterward | Supported; the agent writes files in its workspace. How you get them back onto your own machine depends on whether you are running locally or in a hosted environment — check before you rely on it | Supported; files land in the open project on your own disk | No equivalent. Output is text in the conversation |
| Skills — named, reusable instruction bundles the tool loads when it recognizes the task | Closest equivalent is a directory containing an instruction file, plus an `AGENTS.md` for standing project instructions. This repo already carries `agents/openai.yaml` files for Codex alongside each skill. Whether these load automatically the way a Claude skill does is something to verify on your own installation rather than assume | Kiro has its own structured-document conventions — specs and steering files kept under `.kiro/` — which serve a similar purpose of standing, reusable instructions. The format is not the same and I would not promise automatic invocation. There is a `kiro-specs` skill available in some Claude environments that reads and writes those specs, which is a useful bridge if you have it | No equivalent. Paste your instructions at the top of each conversation and keep them in a text file you reuse |
| Action approval — the tool shows what it intends to do and waits | Codex has approval controls over the actions it takes. The granularity and defaults differ from Claude's and have changed across versions, so look at what your installation is actually configured to ask about before you assume it will stop and check with you | Kiro asks before applying changes in the IDE. The specifics depend on version and settings | No equivalent |
| `WORKSPACE-BRIEF.md` in the connected folder, setting the standards the tool works to | Put the same content in `AGENTS.md` at the root of the workspace, or point the agent at the brief directly | Put the same content wherever your setup keeps standing project instructions, or point Kiro at the brief directly | Paste the brief at the start of every conversation. Tedious, and worth doing |

Where a cell hedges, the hedge is the honest answer. If you know your platform well and find that
something here is out of date, tell the facilitator rather than working around it silently.

## What specifically will not work outside Claude

**The two `.skill` files.** A `.skill` file is a zip archive containing a `SKILL.md`, and the Claude
desktop application is what renders it as a card with a Save skill button. Nothing else does. On
another platform you cannot install them the intended way.

You can still use them, though, because the substance is a markdown file. Unzip each `.skill` file
and open the `SKILL.md` inside. It is plain instructions, readable by a person. Point your tool at it
and ask it to follow those instructions, or paste the contents in. This is clumsier and you lose
automatic invocation, but the reference interview practice and the output review both work perfectly
well when you hand the tool the instructions explicitly. Module 2 asks you to read a skill
critically anyway, so opening it up early costs you nothing pedagogically.

**Codex has some support already.** Each skill in
`plugins/library-ai-workshop-facilitator/skills/` carries an `agents/openai.yaml`, and there is a
Codex plugin manifest at `plugins/library-ai-workshop-facilitator/.codex-plugin/plugin.json`. These
were written for Codex and give it a display name and a default prompt for each skill. They are
excluded from the participant `.skill` files, since Claude does not read them, so if you are on Codex
work from the repository rather than from the two files the facilitator sends.

**Kiro is partially covered.** The repository does contain a `.kiro/` directory, but it is developer
tooling for the people who build this app, not learner support. What Kiro does bring is its own
conventions for structured, reusable instruction documents, which map onto the skills concept closely
enough to be useful. Expect to translate rather than install.

**Anything Bedrock-related in the setup guide.** `docs/PARTICIPANT-SETUP.md` covers Developer Mode
and third-party inference configuration, which exist to route the Claude desktop application through
the workshop's Amazon account. On another platform none of that applies, and you will be using your
own account and your own credentials. Skip Steps 1 through 8 of that guide entirely; you need only
the workshop folder itself.

## The Module 4 capstone on another platform

The capstone asks you to compose a skill: take the workflow you wrote down in
`outputs/workflow.md`, turn it into a reusable set of instructions, save it, and test it by
describing a task and watching it get picked up.

The concept transfers cleanly even where the file format does not. What you are actually learning is
this: a good skill states what the task is, what the tool must always do, what it must never do,
where it must stop and ask a human, and what it should hand back. That is a professional judgment
written down precisely enough to be executed by something with no judgment of its own. The container
matters much less than the content.

So write the same document, in whatever your platform's equivalent container is. If you are unsure
what that container should be, do this instead, which works everywhere:

1. Write your workflow as a markdown file named `SKILL.md`, in a folder named for what it does — for
   example `audit-research-scan/SKILL.md`. Use one of the two practice skills as your model; you have
   read at least one of them by Module 2. Give it a short description of when it applies, then the
   instructions themselves.
2. Test it by starting a fresh conversation, pointing your tool at that file, and giving it a real
   task the skill should cover. Watch where it goes wrong. That is the exercise — not the saving, the
   testing.
3. Revise it based on what went wrong. A skill that survives one revision is worth more than one that
   was never tested.
4. If you later get access to Claude Desktop, zip that folder and rename it with a `.skill`
   extension. It will install. The format is that thin.

Then finish Module 4 as written. The remaining exercises — the search syntax translation, the
prompt-injection exercise, the handoff package — do not depend on how the skill was packaged.

## No access to any of this?

Come to the walkthrough on August 26, 2026, 3:00–4:00 pm. It exists precisely for this. You will see
an agentic desktop working on the workshop material without installing, licensing, or configuring
anything, and you can decide afterward whether it is worth pursuing access. Bring nothing.

Friday office hours run 2:30–3:15 pm through September 4, 2026, and questions about a platform not
covered here are a good use of them. If you get something working on a platform this file does not
mention, that is worth reporting — it belongs in this file for the next person.
