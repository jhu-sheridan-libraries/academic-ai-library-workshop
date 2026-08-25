---
id: "03-evaluate"
title: "Synthesize Disagreement and Gaps"
estimated_minutes: 15
discovery_moment: true
steps:
  - index: 0
    label: "Draft a cautious synthesis to a file"
    type: "prompt"
    instruction: "Use the matrix as your only evidence base. Do not rely on the topic, the original request, or Claude's general knowledge about open access."
    prompt_text: |
      Read outputs/claim-evidence-matrix.xlsx from the connected folder and write a synthesis to outputs/synthesis.md. Keep it to about 180 words.

      Organize by outcome type rather than by source. State where the records point in the same direction, where the outcomes are not comparable to each other, and where verification gaps prevent any conclusion at all. Refer to sources by their bracketed IDs.

      Use only the matrix. Do not consult the original evidence log, your own knowledge of this literature, or anything outside the connected folder.
    checkpoint: "outputs/synthesis.md exists and does not turn five incomplete records into a finding about a field."
    facilitator_note: "Word limits do real work here - a short synthesis has to choose what to drop, and what gets dropped first is usually the uncertainty. Sixteen learners produce sixteen different 180-word syntheses of the same five rows, which is the most persuasive thing you can show a cohort: ask two people to paste theirs into office hours and let everyone see what went missing from each."
  - index: 1
    label: "Ask for the strongest alternative reading"
    type: "prompt"
    instruction: |
      A synthesis reflects choices about which evidence to emphasize, but those choices can disappear when the writing is polished. Make them visible by asking for a second interpretation of the same five rows.

      The second interpretation must use the same evidence. If it contradicts the records, it is not useful; if it stays within the records and reaches a different emphasis, it shows which weighting choices shaped the first synthesis.
    prompt_text: |
      Write the strongest plausible alternative interpretation of the same matrix, and append it to outputs/synthesis.md under the heading "Alternative reading."

      Contradict nothing in the records. Show how different weighting of geography, of outcome definitions, or of verification status could shift the emphasis. After it, add two or three sentences naming which specific weighting choices separate the two readings.
    checkpoint: "The alternative reading is constrained by the same five records, and the file names the weighting choices that distinguish the two versions."
    facilitator_note: "The failure mode is a contrarian rewrite that quietly invents a sixth consideration. The self-check to hand anyone who asks: point at the row each claim in the alternative reading rests on, and treat anything that cannot be pointed at as the finding rather than as a problem with the prompt."
  - index: 2
    label: "Map the gaps as next actions"
    type: "prompt"
    instruction: "A limitation is useful only when it leads to a possible next step. Turn each limitation into a concrete action a librarian could take."
    prompt_text: |
      Append a gap map to outputs/synthesis.md under the heading "Gaps and next actions", in four categories: missing populations or regions, missing outcome measures, missing study designs, and verification gaps.

      For each gap give one concrete next action, and state what it requires - a licensed database, a repository or registry, a publisher or index record, correspondence with an author, or human subject expertise. Mark separately any action that cannot be done from this connected folder at all.
    checkpoint: "Each gap has one specific next action, and actions requiring resources outside the folder are marked as such."
  - index: 3
    label: "Check every ID against the matrix"
    type: "workspace"
    instruction: |
      Open `outputs/synthesis.md` and `outputs/claim-evidence-matrix.xlsx` side by side. Take every bracketed source ID in the synthesis and confirm three things against the matrix row it points to: the outcome is described at the same strength, the proxy classification has not been dropped, and the verification status has not been quietly upgraded.

      Then append two lines to `outputs/session-log.md`: which claim in the synthesis was strongest in the prose and weakest in the matrix, and what you changed or would change as a result.
    checkpoint: "Every bracketed ID resolves to a row that supports the claim at that strength, and your session log records the widest gap you found between prose and matrix."
    facilitator_note: "This step catches the drift the previous three introduce, and it is also the one learners drop when they are running out of day - so tell them which to drop instead: the gap map. What they record in the session log here, the widest gap between prose and matrix, is the single most quotable line the module produces and worth asking for in office hours."
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
    instruction: "Fluent prose compresses information, and compression is where methodological nuance disappears. The question is never whether to simplify - it is which distinctions survive."
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

```cowork-prompt
Read outputs/archives-evidence-matrix.xlsx from the connected folder and write a processing proposal to outputs/archives-processing-plan.md. Keep it to about 220 words. Organize by decision rather than by material: what can be described now, what cannot be described until something else is resolved, what cannot be opened until it is surveyed, and what no amount of processing will settle. Refer to each body of material as the matrix names it. Use only the matrix - not the accession note, not your own knowledge of archival practice, and nothing outside the connected folder. Do not propose a timeline the matrix gives you no basis for.
```

Then ask for the strongest alternative reading - a different order of priorities built from the same
rows, contradicting nothing:

```cowork-prompt
Write the strongest plausible alternative ordering of priorities from the same matrix, and append it to outputs/archives-processing-plan.md under the heading "Alternative reading." Contradict nothing in the matrix rows. Show how different weighting of researcher demand, of risk of harm from leaving material undescribed, and of risk of harm from opening material unsurveyed could shift the order. After it, add two or three sentences naming which specific weighting choices separate the two versions.
```

Researcher demand against risk of harm is the weighting that will do the most work here, and it is the
one worth arguing out properly - with yourself on paper now, and with whoever would have to approve
the plan afterwards.

Then convert the limitations into things somebody could act on:

```cowork-prompt
Append a gap map to outputs/archives-processing-plan.md under the heading "Gaps and next actions", in four categories: unmeasured extent, unsurveyed content, unresolved rights and conditions, and unreadable formats. For each gap give one concrete next action, and state what it requires - a conservator, a records survey, the donor, counsel, imaging equipment, or a decision by someone with more authority than the processing archivist. Mark separately every action that cannot be done from this connected folder at all.
```

Then do the check that catches the drift the last three prompts introduced, and do it yourself: open
`outputs/archives-processing-plan.md` and `outputs/archives-evidence-matrix.xlsx` side by side and read
the plan against the matrix row by row. Confirm that nothing described as processable in the prose is
marked unresolved in the matrix, that no extent has acquired a total the matrix does not give it, and
that no donor request has become a donor agreement on its way into a sentence. Then record what you
found:

```cowork-prompt
Append two lines to outputs/session-log.md, under a heading "Module 3 archives plan check", recording exactly what I dictate below: which claim in outputs/archives-processing-plan.md was strongest in the prose and weakest in the matrix, and what I changed or would change as a result. Record it as I state it and do not add a third line of your own.
```

## Discussion

- Where did the two readings genuinely diverge, and which weighting choice was responsible?
- Which claim in your synthesis was strongest in the prose and weakest in the matrix?
- How do you communicate uncertainty to a faculty member without making the synthesis unusable?
- When does an alternative interpretation improve rigor, and when is it just hedging twice?
