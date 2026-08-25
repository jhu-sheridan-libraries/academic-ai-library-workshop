---
id: "02-marc-record"
title: "Reconstruct the Research Plan"
estimated_minutes: 15
discovery_moment: false
steps:
  - index: 0
    label: "Work backwards to the plan"
    type: "prompt"
    instruction: "Nobody showed you the plan behind this run. Recover it from the artifact — a report tells you what it searched for whether or not it means to."
    prompt_text: |
      Read sample-data/research-scan-draft.md and outputs/research-brief.md from the connected folder.

      Working backwards from the scan alone, reconstruct the research plan it implies:
      - the distinct searches it must have run to produce these sections,
      - the source types and publication venues it favoured,
      - the date, language, geography, and access limits it appears to have applied,
      - the concepts it treated as a single idea.

      Mark every item "stated in the file" or "inferred". Do not fill gaps from your own knowledge of the literature. Where the scan gives you no basis to tell, say so.

      Append the reconstruction to outputs/session-log.md under a new heading "Module 2 - reconstructed plan".
    checkpoint: "The reconstruction separates what the file states from what you inferred, and marks at least one element of the plan as unrecoverable from the file."
    facilitator_note: "Learners expect this to be impossible and find it easier than they thought, but the ones who stall stall at the very start. The unsticking hint, if someone asks: the section headings and the source table are the two clearest traces of the plan. Cheap to send, and it costs nothing pedagogically."
  - index: 1
    label: "Check the plan against the outcome families"
    type: "prompt"
    instruction: "You already did the conceptual work this plan needed. Bring it back and hold the scan to it."
    prompt_text: |
      Read the "Outcome families" sheet of outputs/concept-map.xlsx and the body of sample-data/research-scan-draft.md.

      For each of the five outcome families, state whether the scan treats it as a distinct outcome, merges it with another, or leaves it out. Cite the section and sentence you are judging from. Where two families are handled as one, quote the wording that does the merging.

      Do not decide whether the scan is right about anything. Report only how it divided the question.

      Append this to outputs/session-log.md under a new heading "Module 2 - outcome coverage".
    checkpoint: "All five families are accounted for, each judgment cites a specific passage, and merged or missing families are named as such."
    facilitator_note: "This step depends on Module 1 exercise 3, and it is the most likely cross-module break in the course. Anyone without concept-map.xlsx should read the five families out of that exercise and carry on rather than rebuilding the workbook now — say that in reply to the support question, which will arrive worded as 'the prompt cannot find my file'."
  - index: 2
    label: "Write the revisions you would have required"
    type: "workspace"
    instruction: |
      This is the step you would have taken if anyone had shown you the plan before the run started. Do it now, in your own words, as the librarian on the request.

      Decide on three to five changes you would have required before allowing this search to run. For each one, name what it would have prevented. Think about geography, publication model, contrary and null findings, what counts as an acceptable source, and what must be recorded as the run proceeds.

      Three revisions in five minutes is a complete answer to this step. Five is a ceiling, not a target.

      Then send Claude the prompt below, and give it your list.
    prompt_text: |
      Record the following under a new heading "Module 2 - plan revisions I would have required" in outputs/session-log.md. Copy my wording exactly. Do not improve it, expand it, or add revisions of your own.
    checkpoint: "The file holds your revisions in your own words, and each one names the specific weakness it would have addressed."
    facilitator_note: "The verbatim instruction is the point, and working alone makes it easy to let Claude draft the revisions instead — so the step says three in five minutes is a complete answer. What to do with this remotely: the session log holds the learner's own wording beside the model's, which is the sharpest artifact in the module to read aloud from in office hours, with permission."
  - index: 3
    label: "Compare plan with execution"
    type: "observe"
    instruction: "Read your reconstruction and your revisions side by side with the scan."
    observe_items:
      - "Every section of the scan corresponds to a search the plan would have called for"
      - "Contrary, null, and mixed findings are either present in the scan or named as absent"
      - "The scan records where it searched, in enough detail for a colleague to repeat it"
      - "Access failures during the run are visible and attached to specific sources"
      - "The claims about particular regions rest on sources appropriate to those regions"
      - "Nothing in the scan's conclusion exceeds what its plan was designed to establish"
  - index: 4
    label: "Reflect on the point of intervention"
    type: "reflect"
    instruction: "A plan is only useful if someone can change it while changing it is still cheap. After the report is written, every correction costs more than the run did."
    reflection_prompt: "Which of your revisions would the tool never have made on its own, and why not?"
  - index: 5
    label: "One question to take further"
    type: "reflect"
    instruction: "The question this exercise exists to raise about your own work rather than about the scan. Record it here, or take it to office hours."
    reflection_prompt: "Where in your own workflow is the last moment a scope decision is still cheap to change, and who is consulted before it passes?"
---

## Reconstruct the Research Plan

The best moment to review a search is before it runs. You do not get that moment here: the run
already happened, without you. That is also the more common situation. Reports arrive finished, from
colleagues, from faculty, from vendors, and the plan behind them is never attached.

So recover it. A report is evidence about its own method: the sections tell you what it searched
for, the source table tells you where it was willing to look, and the shape of the conclusion tells
you what it was optimizing for. What it does not contain is evidence too. A plan you can reconstruct
is a plan you can critique, and a plan you can critique is one you could have corrected.

Keep your reconstruction. Exercises 3 and 4 test it against the sources themselves.

## Archives track

A finding aid is evidence about its own processing, in the same way a report is evidence about its
own method. Nobody wrote down the arrangement decisions, the appraisal decisions, or the point at
which the original processor ran out of time — but the description records all three whether it
means to or not. Granularity is the clearest trace: how finely each series is described tells you what
the processor thought mattered, and it also tells you where they stopped.

So recover them:

```cowork-prompt
Read sample-data/archives/finding-aid-draft.md and outputs/archives-request-brief.md from the connected folder. Working backwards from the finding aid alone, reconstruct the processing decisions it implies: the arrangement scheme chosen and what it privileges; where the description is granular and where it is not, series by series; what appears to have been appraised, retained, or left unexamined; the descriptive standard and period the language belongs to; and which parts of the collection a researcher cannot discover from this file at all. Mark every item "stated in the file" or "inferred". Do not fill gaps from your own knowledge of archival practice or of this period. Append the reconstruction to outputs/session-log.md under a new heading "Module 2 - reconstructed processing decisions".
```

Then hold the finding aid to the map you already built:

```cowork-prompt
Read the "Candidate units" sheet and the access point rows of outputs/archives-access-points.xlsx, then read sample-data/archives/finding-aid-draft.md. For each access point and each candidate unit, state whether the finding aid makes it findable, buries it somewhere a researcher would not look, or omits it entirely — citing the element you are judging from. Do not decide whether the finding aid is correct about anything; report only what it makes discoverable. Append this to outputs/session-log.md under a new heading "Module 2 - discoverability check".
```

Now the part that has to be yours. Decide on three to five changes you would have required before this
guide was published to the web, and for each one name what it would have prevented. Think about
extent, dates, granularity, restrictions, rights, and whose voice the description is written in. Write
them in your own words, then have them recorded without improvement:

```cowork-prompt
Record the following under a new heading "Module 2 - description revisions I would have required" in outputs/session-log.md. Copy my wording exactly. Do not improve it, expand it, or add revisions of your own.
```

Finish by reading your reconstruction and your revisions beside the finding aid, and check for
yourself: is each series described well enough for a researcher to decide whether to request it; are
the restriction and rights statements specific enough for a reading room to act on; does anything in
the description claim more than the container list could support?

## Discussion

- Which parts of this search could a colleague reproduce from the file alone?
- What does the source table tell you about where the run was willing to look?
- If a vendor handed you this report, what would you ask for before reading it?
- Where in your own workflow is the last moment a scope decision is still cheap to change?
