---
id: "01-orient"
title: "Open the Scan and Size the Task"
estimated_minutes: 15
discovery_moment: false
steps:
  - index: 0
    label: "Read the scan yourself first"
    type: "workspace"
    instruction: |
      Open `sample-data/research-scan-draft.md` from the connected folder and read it end to end before you ask Claude anything about it. It is a simulated AI research output, produced for the same faculty request you worked from in Module 1, and no librarian has checked it.

      Read the banner at the top, then the run statistics line under the prompt — the mode, the number of sources consulted, the number of searches, the elapsed time. Then read the body and the source table.

      Read it the way you would read a draft handed to you by a colleague whose work you do not yet know.
    checkpoint: "You have read the whole file yourself, and you can state what it was asked to do, what it reports doing, and how long it says it took."
    facilitator_note: "Insist on reading before prompting. Learners who ask Claude to summarize the scan first will spend the rest of the module auditing a summary instead of the artifact. Five minutes of silent reading is time well spent here."
  - index: 1
    label: "Inventory what it claims"
    type: "prompt"
    instruction: "Turn the prose into a list of claims. This is bookkeeping, not judgment — the judgment comes later, and it comes from you."
    prompt_text: |
      Read sample-data/research-scan-draft.md from the connected folder. List every material factual claim the body makes, in the order it makes them. For each one give:
      - the claim in the file's own words,
      - the section it appears in,
      - the source ID cited for it, or "no source cited".

      Do not evaluate the claims, do not check anything, and do not add anything from your own knowledge. If the same claim appears in more than one section, note both.

      Append the list to outputs/session-log.md under a new heading "Module 2 - claims in the scan".
    checkpoint: "The list distinguishes claims that cite a source from claims that cite none, and nothing in it is marked verified."
    facilitator_note: "This list is the raw material for the claim ledger in exercise 4. A learner who skips it will rebuild it under time pressure later."
  - index: 2
    label: "Size the machinery to the task"
    type: "workspace"
    instruction: |
      An agentic run is one setting among several, not an upgrade. Part of using these tools well is deciding how much machinery a task deserves.

      Decide for yourself, before asking, which of these three each task needs — an ordinary conversation, one file read, or a long multi-step run that searches and synthesizes on its own:

      - **A.** Rewrite a paragraph you supplied so it reads at a general-audience level.
      - **B.** Pull the date range, geography, and requested deliverable out of `sample-data/research-request.txt`.
      - **C.** Produce the scan you just read.

      Then ask Claude for its own three answers and its reasoning, and ask it what the cost of choosing more machinery than a task needs would be. Where you disagree with it, say so and keep your own answer.

      Finish by asking Claude to append your three classifications, and any disagreement, to `outputs/session-log.md` under the heading "Module 2 - sizing the task".
    checkpoint: "The session log records your classification of all three tasks, and you can name at least one cost of overshooting that is not the price of the tokens."
    facilitator_note: "Task C is the one to draw out. The interesting answer is not 'a long run' but 'a long run supervised by someone who knows the literature'. Let learners argue about it."
  - index: 3
    label: "Test the file against its own banner"
    type: "observe"
    instruction: "You now know what the scan says about itself. Check what it actually gives you, working only from the file in front of you."
    observe_items:
      - "You can name what produced this file - the prompt submitted, the mode used, and the run statistics it reports"
      - "You can tell, from the file alone, which of its claims a qualified human has checked"
      - "Every number in the executive summary traces to a source ID in the table"
      - "The scan's closing recommendation answers the question the faculty request actually asked"
      - "The stated limitations tell you which specific claims are affected by them"
    reflection_prompt: "Which of these did the scan's polish make you slower to notice?"
  - index: 4
    label: "Reflect on what citation proves"
    type: "reflect"
    instruction: "Citations make verification possible. They are not verification, and a source table is not a checked source table."
    reflection_prompt: "The scan reports eleven sources and six searches in seven minutes and forty-one seconds. What would the same work have cost you, and what does that gap tell you about what the run did and did not do?"
---

## Open the Scan and Size the Task

Module 1 set the boundary and built the brief. This module takes a finished AI research output and
audits it — the work a librarian is most likely to be handed and least likely to be given time for.

The scan in your folder was produced by a long agentic run: many steps, many searches, one polished
report at the end. That mode is genuinely useful for exploratory work, and it is also where the most
expensive mistakes happen, because a long run produces something that looks finished. Nothing about
the way the scan reads tells you whether it is right. That is what the next three exercises are for.

Two habits start here. The first is reading the artifact before asking anything about it. The second
is treating the amount of machinery as a decision — an ordinary conversation, one file read, and a
seven-minute autonomous run are three different things with three different failure modes, and
choosing among them is professional judgment, not a settings question.

## Archives track

**Unverified description asserted with confidence is the same failure mode as an unverified
citation.** That sentence is the whole of the parallel. A finding aid is a claim structure: a scope
note, a biographical note, a date range, an extent, a restriction, a rights statement, and a
container list are all assertions, and each one is either checkable against the records or it is not.
A legacy aid retyped for the web asserts them all in the same flat voice — and so does the scan's
source table. In both files, one confident register covers work that was checked closely, checked
loosely, and not checked at all, and the register itself gives you no way to tell which is which.

Your audit objects are `sample-data/archives/finding-aid-draft.md` and
`sample-data/archives/digitization-inventory.csv`. Read them both yourself, end to end, before you
prompt anything — including the note at the end of the finding aid about how the guide was produced.
That note is this file's equivalent of the scan's run statistics.

Substitute this for step 1:

`Read sample-data/archives/finding-aid-draft.md from the connected folder. List every assertion the finding aid makes about the collection, in the order it makes them. For each one give: the assertion in the file's own words; the element it appears in; and what it would have to be checked against — the containers, an external source, a donor agreement, an authority file, or nothing available. Do not evaluate the assertions, do not check anything, and do not add anything from your own knowledge. Append the list to outputs/session-log.md under a new heading "Module 2 - assertions in the finding aid".`

Keep step 2 as written but change the three tasks: **A.** reformat a container list you supply into a
table. **B.** pull the stated date range, extent, and restriction out of the finding aid. **C.**
produce a collection-level description for an unprocessed 212-foot accession from
`sample-data/archives/accession-note.txt`. Task C is the interesting one for the same reason.

Then run step 3's checks against the finding aid rather than the scan: can you name what produced
this file and when; can you tell from the file alone which of its statements anyone has verified;
does every element trace to something; does the description answer the question a researcher would
bring to it.

## Discussion

- What in the scan made it read as authoritative, before you checked anything?
- Which tasks in your own work would be made worse by handing them to a long autonomous run?
- Who in your library would be asked to check a report like this, and with what time?
- What would you need recorded in a file like this before you were willing to build on it?
