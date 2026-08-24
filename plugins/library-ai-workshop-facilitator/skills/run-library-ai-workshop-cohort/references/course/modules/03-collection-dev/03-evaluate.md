---
id: "03-evaluate"
title: "Synthesize Disagreement and Gaps"
estimated_minutes: 15
discovery_moment: true
steps:
  - index: 0
    label: "Draft a cautious synthesis to a file"
    type: "prompt"
    instruction: "The matrix is now the evidence base. Not the topic, not the request, not anything Claude knows about open access — the nine columns and five rows you just built."
    prompt_text: |
      Read outputs/claim-evidence-matrix.xlsx from the connected folder and write a synthesis to outputs/synthesis.md. Keep it to about 180 words.

      Organize by outcome type rather than by source. State where the records point in the same direction, where the outcomes are not comparable to each other, and where verification gaps prevent any conclusion at all. Refer to sources by their bracketed IDs.

      Use only the matrix. Do not consult the original evidence log, your own knowledge of this literature, or anything outside the connected folder.
    checkpoint: "outputs/synthesis.md exists and does not turn five incomplete records into a finding about a field."
    facilitator_note: "Word limits do real work here — a short synthesis has to choose what to drop, and what gets dropped first is usually the uncertainty. Have a couple of learners read theirs aloud and ask the group what went missing."
  - index: 1
    label: "Ask for the strongest alternative reading"
    type: "prompt"
    instruction: |
      A synthesis is a set of weighting decisions presented as prose, and the decisions are invisible once the prose is smooth. The way to make them visible is to ask for a different set of weights applied to the same five rows.

      The constraint matters more than the request. An alternative reading that contradicts the records is worthless; one that stays inside them and still lands somewhere else tells you exactly how load-bearing your weighting was.
    prompt_text: |
      Write the strongest plausible alternative interpretation of the same matrix, and append it to outputs/synthesis.md under the heading "Alternative reading."

      Contradict nothing in the records. Show how different weighting of geography, of outcome definitions, or of verification status could shift the emphasis. After it, add two or three sentences naming which specific weighting choices separate the two readings.
    checkpoint: "The alternative reading is constrained by the same five records, and the file names the weighting choices that distinguish the two versions."
    facilitator_note: "The failure mode is a contrarian rewrite that quietly invents a sixth consideration. Ask learners to point at the row each claim in the alternative reading rests on; anything that cannot be pointed at is the finding."
  - index: 2
    label: "Map the gaps as next actions"
    type: "prompt"
    instruction: "A limitation you cannot act on is decoration. Convert each one into something a librarian could do on Monday."
    prompt_text: |
      Append a gap map to outputs/synthesis.md under the heading "Gaps and next actions", in four categories: missing populations or regions, missing outcome measures, missing study designs, and verification gaps.

      For each gap give one concrete next action, and state what it requires — a licensed database, a repository or registry, a publisher or index record, correspondence with an author, or human subject expertise. Mark separately any action that cannot be done from this connected folder at all.
    checkpoint: "Each gap has one specific next action, and actions requiring resources outside the folder are marked as such."
  - index: 3
    label: "Check every ID against the matrix"
    type: "workspace"
    instruction: |
      Open `outputs/synthesis.md` and `outputs/claim-evidence-matrix.xlsx` side by side. Take every bracketed source ID in the synthesis and confirm three things against the matrix row it points to: the outcome is described at the same strength, the proxy classification has not been dropped, and the verification status has not been quietly upgraded.

      Then append two lines to `outputs/session-log.md`: which claim in the synthesis was strongest in the prose and weakest in the matrix, and what you changed or would change as a result.
    checkpoint: "Every bracketed ID resolves to a row that supports the claim at that strength, and your session log records the widest gap you found between prose and matrix."
    facilitator_note: "This is the step that catches the drift the previous three steps introduce. It is also the step learners skip when time is short, so protect it — cut the gap map instead if you must."
  - index: 4
    label: "Check the synthesis"
    type: "observe"
    instruction: "Read the finished file as the faculty member would, then as a reviewer would."
    observe_items:
      - "Agreement is not claimed across outcomes that measure different things"
      - "A global or field-wide conclusion is not drawn from geographically narrow evidence"
      - "The record with no located citation is not doing decisive work anywhere in the prose"
      - "Downloads, requests, and citations still read as attention or access, not as use"
      - "The alternative reading rests on the same five rows as the first reading"
      - "Heterogeneity and disagreement are visible in the body, not only in a closing caveat"
  - index: 5
    label: "Reflect on synthesis"
    type: "reflect"
    instruction: "Fluent prose is a compression, and compression is where methodological conflict goes to die. The question is never whether to simplify but which distinctions survive the simplification."
    reflection_prompt: "Which single caveat has to appear in the body for your intended reader, and which ones honestly belong in a methods note they will not read?"
---

## Synthesize Disagreement and Gaps

Responsible synthesis keeps distinctions intact: between outcome definitions, between populations,
between study designs, and between levels of verification. The pressure runs the other way. A
summary that says five sources broadly agree is easier to write and easier to read than one that
says three of them measure incompatible things and a fourth has never been located.

Two habits push back. The first is asking for an alternative reading built from the same evidence,
which exposes how much of the conclusion was weighting rather than data. The second is checking the
prose back against the matrix, ID by ID, because that is where a hedged row becomes a confident
sentence.

Both of these produce files. The synthesis is a document you will carry into Module 4 as part of a
handoff package, and a colleague picking it up then will read the file rather than reconstruct your
conversation.

## Archives track

Same pressure, different prose. A processing proposal that says the accession is large, sensitive, and
partly unreadable, and that these problems interact, is harder to write and harder to read than one
that says the collection will be processed at series level over eighteen months. The second version is
the one that gets approved and the one that fails.

Write `outputs/archives-processing-plan.md` from the matrix and nothing else:

`Read outputs/archives-evidence-matrix.xlsx from the connected folder and write a processing proposal to outputs/archives-processing-plan.md. Keep it to about 220 words. Organize by decision rather than by material: what can be described now, what cannot be described until something else is resolved, what cannot be opened until it is surveyed, and what no amount of processing will settle. Refer to each body of material as the matrix names it. Use only the matrix — not the accession note, not your own knowledge of archival practice, and nothing outside the connected folder. Do not propose a timeline the matrix gives you no basis for.`

Then ask for the strongest alternative reading, as step 1 does — a different order of priorities built
from the same rows, contradicting nothing, and a short statement of which weighting choices separate
the two. Researcher demand against risk of harm is the weighting that will do the most work, and it is
the one worth arguing about in the room.

Append the gap map as step 2 does, in four categories: unmeasured extent, unsurveyed content,
unresolved rights and conditions, and unreadable formats. Give each one concrete next action and name
what it requires — a conservator, a records survey, the donor, counsel, imaging equipment, or a
decision by someone above you. Mark separately anything that cannot be done from the connected folder
at all, which here will be most of it.

Then do step 3's check, which is where the drift shows: read the plan against the matrix row by row and
confirm that nothing described as processable in the prose is marked unresolved in the matrix, and that
no donor request has become a donor agreement on its way into a sentence.

## Discussion

- Where did the two readings genuinely diverge, and which weighting choice was responsible?
- Which claim in your synthesis was strongest in the prose and weakest in the matrix?
- How do you communicate uncertainty to a faculty member without making the synthesis unusable?
- When does an alternative interpretation improve rigor, and when is it just hedging twice?
