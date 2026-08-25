---
id: "01-orient"
title: "Design the Workflow You Will Build Into a Skill"
estimated_minutes: 18
discovery_moment: false
steps:
  - index: 0
    label: "Map the workflow to a file"
    type: "prompt"
    instruction: |
      This is the raw material for the skill you will write in the last exercise, so it goes into a file rather than a conversation. Write it as though a colleague who was not here today has to follow it.

      Thirteen stages is a full version. If you are short of time, drop stages rather than dropping the input, output, and stop-or-escalate detail on the ones you keep — that structure is what becomes the skill's instructions, and eight well-specified stages make a better skill than thirteen thin ones.
    prompt_text: |
      Read outputs/research-brief.md and sample-data/research-request.txt from the connected folder. Then write an AI-assisted workflow to outputs/workflow.md, one section per stage, covering these stages in order: intake, privacy and folder review, question scoping, concept mapping, database selection, syntax translation, test searches, source screening, evidence extraction, synthesis, citation audit, patron handoff, and retention or deletion.

      For each stage give: the input file or material, the output file it produces, whether AI is optional or excluded at that stage, the human expertise required, and one stop-or-escalate condition.

      Where a stage produces a file we have already made today, name that file. Do not invent work we did not do.
    checkpoint: "outputs/workflow.md exists, names a file for each stage that produces one, and every stage has a stop-or-escalate condition."
    facilitator_note: "This file is the input to the capstone in exercise 4, and a learner who skips it arrives there with nothing to turn into a skill. The permission to cut stages rather than detail is now in the step. If the dashboard shows someone entering Module 4 without this exercise, that is the one message worth sending all day: do this one first, even out of order."
  - index: 1
    label: "Mark the human-only decisions yourself"
    type: "workspace"
    instruction: |
      Open outputs/workflow.md and read it. Claude has proposed where AI is optional. That proposal is a suggestion, not a finding — you are the one who knows which judgments your library will not delegate.

      Edit the file yourself, or tell Claude exactly which stages to change. At minimum, decide for each stage whether AI is optional, assistive-only, or excluded, and mark at least two stages as human-only.

      When your markings are in the file, send Claude the prompt below and read what it pushes back on.
    prompt_text: |
      Read outputs/workflow.md again and tell me which of my human-only markings would be expensive to honour in practice, and why.
    checkpoint: "At least two stages are marked human-only by you, and you can say what enforcing those markings costs."
    facilitator_note: "Learners defer to the model's allocation, and the step asks them to overrule it at least twice for that reason. The friction Claude names in the second half is the useful part, because it surfaces where local policy and local workload conflict — which is the most productive thing anyone can bring to office hours, and the part no fixture can supply."
  - index: 2
    label: "Make review operational"
    type: "prompt"
    instruction: "Review that is not specified about who, when, and with what evidence is decoration. Make it concrete and append it to the file."
    prompt_text: |
      Append a section to outputs/workflow.md called "Meaningful human review." For each review point in the workflow, state: who reviews, what artifact they open, at what moment, what evidence they need in hand, and whether they may correct, reject, or escalate.

      Then distinguish two risk tiers — a routine reference scan and a systematic review search — and show how the reviewer's required expertise and authority differ between them.
    checkpoint: "Review authority and required expertise scale with task risk, and each review point names an artifact the reviewer actually opens."
  - index: 3
    label: "Add the non-AI path"
    type: "prompt"
    instruction: "The workflow has to work when the patron declines AI, when the tool is unavailable, or when you judge it inappropriate. That path is part of the service, not a contingency."
    prompt_text: |
      Append a section to outputs/workflow.md called "Non-AI path." Give an equivalent route through the same request using a reference interview, database thesauri, a search log, a spreadsheet evidence matrix, and librarian-authored synthesis.

      For each of time, documentation quality, and privacy exposure, say plainly what changes — including anything that gets better without AI. Do not describe this path as a fallback, a compromise, or a reduced service.
    checkpoint: "The non-AI path is viable on its own terms and names at least one respect in which it is stronger."
    facilitator_note: "Watch for hedged language that treats non-use as failure; the step tells the learner to reject the output and ask again if it apologizes for the non-AI path, because the tone matters more than the content here. Anyone in the cohort who is sceptical about AI will judge the whole course by this section, so it is worth reading a few learners' versions before office hours."
  - index: 4
    label: "Read the workflow as a colleague would"
    type: "observe"
    instruction: "Open outputs/workflow.md and read the whole file, not the chat summary of it. In the last exercise this becomes a skill, and anything vague here becomes vague instructions there."
    observe_items:
      - "Every stage that produces something names the file it produces"
      - "AI is optional or excluded at multiple stages, by your decision rather than the model's"
      - "Search and appraisal decisions remain with qualified people"
      - "Stop conditions include unsupported claims, privacy risk, and scope drift"
      - "The patron retains access to human assistance throughout"
      - "A colleague who was not here today could follow it without asking you a question"
  - index: 5
    label: "Reflect on adoption"
    type: "reflect"
    instruction: "Choosing limited use, or non-use, can be the responsible professional decision. A workflow that cannot express that is not finished."
    reflection_prompt: "Which single stage would you pilot first in your own service, and what evidence — not impression — would tell you to continue, change, or stop?"
  - index: 6
    label: "One question to take further"
    type: "reflect"
    instruction: "The question a written workflow raises that the workflow itself cannot answer. Worth recording here, and worth raising in office hours — it is the one your colleagues will ask you about first."
    reflection_prompt: "Which stage of your workflow carries the highest risk of deskilling someone, and what would you do about it?"
---

## Design the Workflow You Will Build Into a Skill

A reusable workflow says where AI may help, where professional judgment is mandatory, and what stops
the work. Written down, it also makes non-use, rejection, and escalation ordinary outcomes rather
than exceptions someone has to justify.

This exercise produces `outputs/workflow.md`, and that file is the raw material for the capstone. In
the last exercise you will turn it into a working skill — a Markdown file Claude loads by itself when
it recognises this kind of request. That is worth knowing now, because it changes how you write.
Instructions you would give a competent colleague are exactly the right register. Vague stages
produce a vague skill.

## Archives track

Write your own workflow, not a translation of someone else's, because this file becomes your skill in
the last exercise. Save it as `outputs/archives-workflow.md`.

Choose one of the two workflows the archives track has been building toward, and write only that one.
Pick the one you would actually use.

**Description remediation review** — stages: intake of the existing description; provenance of the
description itself; check against the containers; extent and date reconciliation; assertion inventory;
language review; authority and access point verification; restriction review; rights review; decision
on interim public status; revision; recording what changed and why; publication.

**Digitization rights triage** — stages: batch intake; item metadata inventory; condition and format
screening; creator and date verification; rights determination; documented rights search where the
rightsholder is unclear; access condition decision; description review before publication; publication;
takedown route and who may authorize it; recording the determination.

```cowork-prompt
Read outputs/archives-request-brief.md and sample-data/archives/accession-note.txt from the connected folder. Then write an AI-assisted workflow to outputs/archives-workflow.md, one section per stage, using the stages I give you in this order: [paste your chosen stage list]. For each stage give: the input file or material, the output file it produces, whether AI is optional, assistive-only, or excluded at that stage, the human expertise required, and one stop-or-escalate condition. Where a stage produces a file we have already made today, name that file. Do not invent work we did not do.
```

**Then overrule it.** Open `outputs/archives-workflow.md` and read what Claude proposed about where AI
is optional. That proposal is a suggestion, not a finding — you are the one who knows which judgments
your repository will not delegate. Decide for each stage yourself whether AI is optional,
assistive-only, or excluded, and mark at least two stages human-only. Rights determination and the
language review are the obvious candidates, and overruling the model on at least one of them is the
point. Then dictate your markings into the file:

```cowork-prompt
Update outputs/archives-workflow.md so that each stage carries the AI allocation I dictate below — optional, assistive-only, or excluded — replacing whatever you proposed. Change nothing else in the file. Then tell me which of my human-only markings would be expensive to honour in practice, and why.
```

The friction Claude names in the second half is the useful part; it is where policy and workload
conflict.

Then make review operational, because review that is not specified about who, when, and with what
evidence is decoration:

```cowork-prompt
Append a section to outputs/archives-workflow.md called "Meaningful human review." For each review point in the workflow, state: who reviews, what artifact they open, at what moment, what evidence they need in hand, and whether they may correct, reject, or escalate. Then distinguish two risk tiers — a routine finding aid refresh, and description of material containing personal information about identifiable living people — and show how the reviewer's required expertise and authority differ between them.
```

And add the route that does not use AI at all. In archives this is not hypothetical: it is how this
work was done until recently and how much of it is still done.

```cowork-prompt
Append a section to outputs/archives-workflow.md called "Non-AI path." Give an equivalent route through the same work using the accession and processing records, the containers themselves, printed or local descriptive standards, an authority file, a spreadsheet, and archivist-authored description. For each of time, documentation quality, and privacy exposure, say plainly what changes — including anything that gets better without AI. Do not describe this path as a fallback, a compromise, or a reduced service.
```

If what comes back apologizes for the non-AI path, reject it and ask again. The tone matters more than
the content here.

Then read the whole file as a colleague who was not here today would, and check that every stage
producing something names the file it produces, that search and appraisal decisions stay with qualified
people, that the stop conditions include unsupported assertions, personal information, and rights
questions, and that nothing in it is too thin to follow without asking you a question. Anything vague
here becomes vague instructions in the skill you build from it.

## Discussion

- Which stage carries the highest risk of deskilling, and what would you do about it?
- What would you measure in a pilot besides time saved?
- Reading the file as instructions rather than as documentation, where is it too thin to follow?
