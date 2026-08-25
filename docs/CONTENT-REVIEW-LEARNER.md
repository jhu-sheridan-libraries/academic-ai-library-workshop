# Content Review — The Self-Paced Learner

**Date:** 2026-08-24. **Scope:** the four `module.md` files, all sixteen exercises,
`WORKSPACE-BRIEF.md`, and the `sample-data/` fixtures the exercises send learners into.

**Lens:** one person alone at a desk with the app in one window and Claude in another, for several
hours, with nobody to ask. Not the code, not the schema, not the facilitator. The questions asked of
every page were: does it flow, are the instructions logical, does it do what the module says it will
do, and is any of it work that produces nothing.

**Caveat:** this document names specific fixture content, including some of what the fixtures get
wrong. It is internal. It should not be synced into the learner-coaching skill.

## Summary

The curriculum is in good shape and the writing is better than good. The epistemic discipline that
the earlier evaluation praised is intact, the conversion to files worked, and the skills ladder is
real rather than announced: by the time a learner writes a description in Module 4 they have opened
the format three times, and the capstone genuinely lands because `outputs/workflow.md` already
contains the instructions. Nothing in this review argues with the design.

The problems are almost all of one kind. **The course was written for a room and is being delivered
to a person.** The pacing, the permission to stop, the reassurance that a dead end is a legitimate
result, and the instruction to argue rather than accept — a great deal of that lives in
`facilitator_note`, which the learner page never renders. A facilitated cohort would be fine. A
self-paced participant hits the same steps without any of the guidance that makes them survivable.

The second cluster is smaller and sharper: three places where the app's step mechanics and the
content's intent are pulling against each other, one of which asks the learner to certify statements
the material is designed to make false.

Findings are ordered by how likely each is to stall or mislead someone working alone.

---

## 1. The learner is asked to tick boxes that are not true

`02-cataloging/01-orient.md` step 3 and `03-collection-dev/01-orient.md` step 4 are `observe`
steps, and `ObserveStep` requires every checkbox to be ticked before the Mark Complete button
enables. That is right for a checklist against something the learner produced. Both of these are
something else.

The Module 2 items are diagnostic tests the scan is built to fail — "Every number in the executive
summary traces to a source ID in the table," "You can tell, from the file alone, which of its claims
a qualified human has checked." The correct answer is no. The learner must nevertheless assert all
five to continue, which teaches the opposite of the module. The Module 3 items are conditional and
mutually exclusive — "If it named the gap…" against "If it hedged or filled the gap…" — so at most
half can be honestly ticked and the learner is stuck at a disabled button wondering what they missed.

The convention is sound (`observe` is "a checklist against something already produced"); these two
steps are simply the wrong type for the work. **Fixed**: the Module 2 items are reworded as checks
the learner performs and records rather than facts they certify; the Module 3 step is converted to
`workspace` with the conditional reasoning kept in the instruction.

## 2. Three reflection questions are written and never displayed

`ObserveStep.svelte` renders `instruction`, `observe_items`, and `checkpoint`. It ignores
`reflection_prompt`. Three observe steps carry one, so the questions were written and are invisible:

- `01-reference/01-orient.md` step 1 — "If you connected a folder from your real work tomorrow, what
  would be in it that should not be?" This is the best question in the exercise.
- `02-cataloging/01-orient.md` step 3 — "Which of these did the scan's polish make you slower to
  notice?"
- `03-collection-dev/01-orient.md` step 4 — "How much of the rest of the output does that answer
  actually cover?"

**Fixed** by folding each into the step's `instruction`, which does render. The alternative — teach
`ObserveStep` to display it — is a code change and would surface all three at once; worth doing
later, but the content should not depend on it.

## 3. Pacing and permission are invisible to the person who needs them most

The facilitator notes are full of exactly what a self-paced learner is missing: *timebox firmly,
take three revisions rather than five, hold them to four sources and move on, budget eight minutes
and expect it to run long, a clean result is a real finding, accept a skill that triggers
unreliably, do not rescue anyone here.* None of it reaches the learner page.

The consequence is predictable and specific. `02-cataloging/03-subject-headings.md` step 1 and
`03-collection-dev/04-usage-analysis.md` step 3 are named in their own notes as the highest-dropout
steps in the course. `04-leadership/01-orient.md` asks for a thirteen-stage workflow in eighteen
minutes and the permission to cut stages exists only in the note. `04-leadership/04-budget-brief.md`
step 5 expects roughly half the room to see the skill fail to trigger — a fact that reads as
reassurance in a room and as personal failure at a desk.

**Fixed** for five steps by adding one learner-visible sentence each: how long it should take, and
what "enough" looks like. This is the single highest-value change in the review and it is worth
extending to the rest of the course as a pass of its own.

## 4. Learners are sent to a folder most of them do not have

`docs/PARTICIPANT-SETUP.md` Step 8 has the facilitator send two `.skill` files, which the
participant opens and saves. Participants do not install the facilitator plugin and have no
`plugins/` directory. But `02-cataloging/04-abstract.md` step 2 credits the review skill to "the
facilitator plugin," and step 4 sends the learner to
`plugins/library-ai-workshop-facilitator/skills/review-ai-research-output/SKILL.md`, with "ask
Claude to show you the skill's own instructions" only as the fallback. For nearly every participant
the fallback is the path and the first instruction is a wild goose chase — in an exercise whose
entire point is reading the skill.

`03-collection-dev/02-selection.md` gets this right (it asks the skill to show its own contents) and
`04-leadership/04-budget-brief.md` step 0 gets it right too. **Fixed** in both the numbered steps
and the archives section of Module 2 exercise 4: lead with the prompt, keep the on-disk path as a
parenthetical for anyone who has the plugin.

## 5. Module 2 asks for the same enumeration twice

Exercise 1 step 1 has the learner list every material claim in the scan, with section and cited
source ID, into `outputs/session-log.md`. The facilitator note says this is "the raw material for
the claim ledger in exercise 4." Exercise 4 step 0 then builds the ledger by reading the scan and
the source inventory — not the session log. The list is enumerated twice, forty minutes apart, and
the first copy is never read again.

**Fixed**: exercise 4 step 0 now reads the "Module 2 - claims in the scan" section it was always
supposed to be built on, and falls back to the scan if the section is absent. This also repays the
learner for having done the bookkeeping, which is the thing that makes step 1 feel like work rather
than filler.

## 6. A column asked for and never filled

`01-reference/03-synthesize.md` step 0 ends "leave verification status blank for me to fill in." No
step in the course ever fills it. Module 4 exercise 2 returns to the same workbook, checks every
proposed controlled term against the supplied thesaurus, and writes the findings into a different
file. The learner is left with an empty column and an unkept promise, which is exactly the kind of
detail that makes a careful person wonder what else they missed.

**Fixed** at both ends: Module 1 says when the column gets filled, and Module 4 exercise 2 step 2
fills it.

## 7. The divide-by-zero may never happen

`03-collection-dev/04-usage-analysis.md` step 2 asks for "the ratio between the two numeric columns"
without naming a direction. `usage-report.csv` has one row with `TR_B1 = 0`. Taken one way the ratio
is `0`; taken the other it is undefined. The step's own checkpoint ("handles the undefined case
explicitly rather than printing a number"), the observe item ("The undefined ratio is shown as
undefined rather than as a number"), and step 3's instruction to recalculate "the row with a zero"
all assume the second reading. Half of learners will get `0.00`, look for the undefined case, and
not find it.

**Fixed** by naming the direction in the prompt. The fixture is untouched.

## 8. Two fixtures answer the exercise built on them

`research-request.txt` closes with a line headed **Known ambiguity** that names the ambiguity in
plain words and states that the outcomes should not be treated as interchangeable.
`01-reference/01-orient.md` step 2 asks the learner to find "one ambiguity in the request," and its
facilitator note says: "The intended ambiguity is the meaning of reach. Do not name it for the
learner; the next three exercises depend on them finding it." The file names it. The discovery is a
transcription.

`archives/collection-request.txt` goes further. Its staff intake notes carry a **Known ambiguity**
paragraph and a **Points that will need correcting** list, which together pre-answer Module 1
exercises 2 and 4 on the archives track — including `04-followup.md`'s "state plainly which of the
requester's stated assumptions we will need to correct."

This one is **not fixed**, because it is a judgment call with consequences. A real intake record
plausibly does contain a triage note, and the same lines are what let a learner who is lost in the
archives track recover. But as written, the two requests hand over the finding that Module 1 is
built to produce, and the facilitator note is evidence that this was not intended. Three options:
move the analysis into the fixture keys and leave the requests as the requester wrote them; keep the
note but demote it to something less conclusive (a queue tag, an unresolved question to the
supervisor); or accept it and rewrite step 2 so the task is to *test* the stated ambiguity against
the request rather than find it. My preference is the first for the research request and the second
for the archives one, whose intake notes are otherwise the most realistic thing in the fixture set.

## 9. The archives track cannot record progress, and the research track has to read it anyway

Both tracks are affected by the same structural decision, which is a sound one — the archives
variant lives in the body, so no schema change was needed — but it has two learner-facing costs that
nothing currently acknowledges.

An archives learner is told to "work that section top to bottom instead of the numbered steps." The
app records progress only from the numbered steps, and the Next Exercise button does not appear
until every one of them is marked complete. So an archives learner either marks research-track steps
they did not do, or completes nothing all day and shows as stalled on the facilitator dashboard from
the first exercise. Nothing tells them which. **Partly fixed**: each module now says plainly to mark
the numbered steps complete as you go, to record progress.

A research-track learner, meanwhile, used to read the entire archives section — up to five prompts and
several hundred words scripting a different scenario — before reaching step 0, because the body
rendered above the steps and the archives heading sat inside it. **Fixed**: the exercise page now
splits the body on that heading and renders the section in an `ArchivesBonus` card *below* the
numbered steps, folded shut, never locked, with no completion gate. The content did not move in the
files; only where it renders changed. Both audiences gain — the exercise reads as one flow for the
majority, and an archives learner meets the alternative after seeing what it is an alternative to.

## 10. Smaller things

`02-cataloging/02-marc-record.md` opens its body with "The original version of this exercise asked
you to review a research plan before letting the search run. You cannot do that here." The learner
has never seen an original version and has no idea what was cut; it reads as an apology from the
author to the author. The point underneath it is a good one and survives being said forward.
**Fixed.**

`02-cataloging/module.md` tells archives learners that "the third and fourth exercises also read the
access point workbook you built in Module 1." It is the second exercise that reads it; the third and
fourth do not. **Fixed.**

`03-collection-dev/02-selection.md` step 4 builds a "Verification priority" sheet that no later
exercise opens. It is defensible as judgment practice and I have left it, but if a step has to go
for time, this is the one — which is worth saying to the learner rather than only to the facilitator.

`usage-report.csv` is seven-tenths library and information science journals. For an exercise whose
whole subject is not over-reading a number, a renewal profile no library would recognise quietly
tells the learner the data is fake and lowers the stakes. Replacing it with a plausible mixed
profile costs nothing pedagogically and is worth doing before the next cohort.

Module 1 and Module 3 have a "Before You Begin" section; Modules 2 and 4 do not. Module 2 covers the
same ground in its body, so this is cosmetic — but the four module pages are the only place a
returning learner re-orients, and consistency there is cheap.

## Addendum — the recast, completed the same day

The finding above that the course is written for a room and delivered to a person was then acted on
across the whole course rather than in the five steps the first pass touched. What changed:

**Pacing and permission are now in the learner's text, everywhere they were only in a note.** Where a
facilitator note said timebox, hold them to four, take three not five, accept an unreliable result, or
a clean check is a real finding, the step now says it too. The notes keep saying it, for a facilitator
reading the dashboard.

**All thirty-five facilitator notes are rewritten for a remote facilitator.** Room management is gone.
Each note now points at one of the three things a remote facilitator actually has: what a stall on
this step looks like on the dashboard and what it means, what to put in a cohort message before people
reach the step, and what to ask for or open in office hours. Where a step's outcome varies between
learners — the review skill's ordering, the boundary test, the local verification standard, the words
people had to add to a description — the note now says so, because that variation is the best
office-hours material the course has and it exists *because* people work apart.

**Every exercise now ends somewhere a learner can be heard.** The eight exercises whose `## Discussion`
section is never rendered gained a closing reflect step, "One question to take further," carrying the
strongest question from that section rewritten for one person working alone. Those sections stay in the
files as the office-hours agenda. The reflect step also states, once per exercise, that anything typed
into a reflection box is saved and visible to the facilitator and that skipping is legitimate — which
is both the honest disclosure a course teaching data minimization owes its participants and the only
channel back from someone working alone.

**The remaining room language is gone from learner-facing text.** "Worth arguing about in the room,"
"nobody in the room can settle it," "roughly half the room," "say it to the group," and the discussion
questions that asked what the group assumed or agreed have all been recast for one reader.

**Learners are now told how this actually runs** — on the landing page, in a "How This Runs" section on
the Module 1 page, and in a sentence on the other three: self-paced, nobody waiting, steps carry their
own time budgets, some steps are designed to fail and say so, stopping partway is fine, the facilitator
is remote and sees completed steps and reflection notes and nothing else. The Discovery Moment
interstitial no longer says "discuss with your group."

Still open after the recast:

1. **Runtime drift.** Eight reflect steps were added without changing any `estimated_minutes`, on the
   grounds that they are optional and skippable. That is defensible but it is drift: call it ten to
   fifteen minutes against the 281 the README documents. Worth a decision, and the 141-minute short
   path should say plainly that the closing reflections are the first thing to skip.
2. **The guides.** `FACILITATOR.md`, `README.md`, and `docs/WALKTHROUGH-2026-08-26.md` were out of
   scope for this pass and are still written as though someone is running a session. They are the
   remaining half of the recast.
3. The three items from the first pass that need your judgment rather than an edit: the fixtures that
   pre-answer Module 1, the archives track's progress problem, and the `usage-report.csv` profile.

**Then the archives track moved.** It now renders in a folded, never-locked `ArchivesBonus` card
underneath the numbered steps instead of inline above step 0 — the last of the structural flow
problems, and the one that was costing both audiences at once. The four module pages describe it as a
card to open rather than a section to read, and the card itself says what the module pages say: none of
it is gated or recorded, so mark the numbered steps complete as the matching work gets done. The
progress problem underneath that — that an archives learner's day is recorded only by ticking steps
they did not do — is still open and still wants a real answer rather than a sentence.

## What was not a problem

Worth recording, because it means these can be left alone. Every prompt a learner must send is
reachable in one click, in the steps and in the archives sections alike. The output filenames are
consistent across all sixteen exercises and nothing references a file an earlier module has not
created — the dependency chain from `outputs/research-brief.md` through to
`outputs/handoff-package.md` holds. Every fixture referenced by a step exists on disk, `mock-sources`
has all eleven records plus the index, and the outcome types in that index describe what came back
without giving away what it means. `evidence-notes.csv` rows A–E line up with the scan's A1–E1 as
the cross-check step claims. The archives fixture names are internally consistent, including the
Ferris Family Papers reference in Module 4 exercise 2. Module timings sum correctly to their
exercises in all four modules, and to the 281 minutes the README documents. And the two hardest
things to get right — the refusal to treat non-use as failure, and the insistence that a dead end is
a result to record rather than a task to grind at — are consistent from Module 1 to the last
reflection.
