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

      Five minutes of your own reading, before you ask Claude anything. If you have it summarized first you will spend the rest of the module auditing the summary instead of the file, and you will not know that is what happened.
    checkpoint: "You have read the whole file yourself, and you can state what it was asked to do, what it reports doing, and how long it says it took."
    facilitator_note: "Nobody can make a remote learner read the file first, so the instruction says why it matters instead. The tell is downstream: a learner whose findings are all about tone and none about the source table probably audited a summary. Worth one line in a cohort message at the start of Module 2."
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
    facilitator_note: "This list is the raw material for the claim ledger in exercise 4, which now reads it out of the session log rather than starting again. A learner who skips this step still gets a ledger, built from the scan instead, so it is not a blocker — but they do the enumeration at the end of the module when they are tired rather than at the start when they are not."
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

      Task C is the one to think hardest about, and the interesting answer is not "a long run" — it is a long run supervised by someone who knows the literature, which is a different proposition with a different cost. If you and Claude disagree about C, write down why you are right rather than settling it.

      Finish by asking Claude to append your three classifications, and any disagreement, to `outputs/session-log.md` under the heading "Module 2 - sizing the task".
    checkpoint: "The session log records your classification of all three tasks, and you can name at least one cost of overshooting that is not the price of the tokens."
    facilitator_note: "Task C is the one that repays discussion, and the exercise now makes the supervision point itself rather than relying on a room to reach it. The session log records where a learner disagreed with the model, which makes it the best single thing to read before office hours: the disagreements are more revealing than the classifications."
  - index: 3
    label: "Test the file against its own banner"
    type: "observe"
    instruction: "You now know what the scan says about itself. These are five tests to run on it, working only from the file in front of you - not five things to agree with. Tick each one once you have looked and know your answer, and expect some of the answers to be no. Where the answer is no, note which of them the scan's polish made you slower to notice."
    observe_items:
      - "You have checked whether the file lets you name what produced it - the prompt submitted, the mode used, and the run statistics it reports"
      - "You have checked whether the file alone tells you which of its claims a qualified human has checked"
      - "You have traced every number in the executive summary to a source ID in the table, and noted any that does not trace"
      - "You have compared the scan's closing recommendation with what the faculty request actually asked for"
      - "You have checked whether the stated limitations tell you which specific claims they affect"
  - index: 4
    label: "Reflect on what citation proves"
    type: "reflect"
    instruction: "Citations make verification possible. They are not verification, and a source table is not a checked source table."
    reflection_prompt: "The scan reports eleven sources and six searches in seven minutes and forty-one seconds. What would the same work have cost you, and what does that gap tell you about what the run did and did not do?"
  - index: 5
    label: "One question to take further"
    type: "reflect"
    instruction: "This one is local, and it is the question the rest of the module keeps raising. Answer it here for the record, or bring it to office hours — it is the kind of question worth answering with a colleague rather than alone."
    reflection_prompt: "Who in your library would actually be asked to check a report like this, and with what time?"
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
prompt anything about either — including the closing note in the finding aid about how the guide was
produced. That note is this file's equivalent of a run statistics line.

Then turn the description into a list of assertions. This is bookkeeping, not judgment; the judgment
comes later and it comes from you.

```cowork-prompt
Read sample-data/archives/finding-aid-draft.md from the connected folder. List every assertion the finding aid makes about the collection, in the order it makes them. For each one give: the assertion in the file's own words; the element it appears in; and what it would have to be checked against — the containers, an external source, a donor agreement, an authority file, or nothing available. Do not evaluate the assertions, do not check anything, and do not add anything from your own knowledge. Append the list to outputs/session-log.md under a new heading "Module 2 - assertions in the finding aid".
```

Now size the machinery to the task, which is your decision rather than Claude's. Before you ask
anything, decide for yourself which of these three needs an ordinary conversation, a single file read,
or a long multi-step run that searches and synthesizes on its own:

- **A.** Reformat a container list you supply into a table.
- **B.** Pull the stated date range, extent, and restriction out of the finding aid.
- **C.** Produce a collection-level description for the unprocessed accession in
  `sample-data/archives/accession-note.txt`.

Hold your three answers, then ask for Claude's and keep the record. Where you disagree with it, say so
and keep your own answer.

```cowork-prompt
Classify these three tasks as needing an ordinary conversation, a single file read, or a long multi-step run that works on its own: A, reformatting a container list I supply into a table; B, pulling the stated date range, extent, and restriction out of sample-data/archives/finding-aid-draft.md; C, producing a collection-level description for the unprocessed accession in sample-data/archives/accession-note.txt. Give your reasoning for each, and tell me what the cost would be of choosing more machinery than a task needs. Then ask me for my three answers, and append both sets plus any disagreement between us to outputs/session-log.md under the heading "Module 2 - sizing the task".
```

Task C is the one to think hardest about. The interesting answer is not "a long run" but who would
have to supervise it, and with what time. If you disagree with Claude about C, write down why rather
than settling it.

Finish by testing the finding aid against its own account of itself, working only from the file in
front of you: can you name what produced it and when; can you tell from the file alone which of its
statements anyone has verified; does every element it states trace to something a reader could check;
does the description answer the question a researcher would actually bring to it?

## Discussion

- What in the scan made it read as authoritative, before you checked anything?
- Which tasks in your own work would be made worse by handing them to a long autonomous run?
- Who in your library would be asked to check a report like this, and with what time?
- What would you need recorded in a file like this before you were willing to build on it?
