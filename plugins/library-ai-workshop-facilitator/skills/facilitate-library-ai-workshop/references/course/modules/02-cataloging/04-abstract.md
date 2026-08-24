---
id: "04-abstract"
title: "Build a Claim Ledger, Then Read the Skill"
estimated_minutes: 20
discovery_moment: true
steps:
  - index: 0
    label: "Build the claim ledger"
    type: "prompt"
    instruction: "One row per claim, with the verification status kept separate from the claim itself. This is the artifact a release decision is actually made from."
    prompt_text: |
      Read sample-data/research-scan-draft.md and outputs/source-inventory.xlsx from the connected folder. Write outputs/claim-ledger.xlsx, one row for each material factual claim in the scan.

      Columns: claim as written; section; source ID cited; what that source would have to show for the claim to hold as written; my verification level for that source from the inventory; status; smallest accurate revision.

      Use only these statuses: supported; partly supported; unsupported; citation mismatch; inaccessible; not yet checked. Do not use "supported" anywhere - I have not told you that I confirmed any claim against a full text. Leave "smallest accurate revision" empty.

      Where a claim in the summary restates a claim from the body in stronger terms, give it its own row.
    checkpoint: "Every material claim has a row, no claim is marked supported, and the column stating what the source would need to show is filled in for each one."
    facilitator_note: "Module 4 exercise 4 reads this file. If a learner is behind, this is the step to protect and the record checks in exercise 3 are the ones to shorten."
  - index: 1
    label: "Set the statuses yourself"
    type: "workspace"
    instruction: |
      Open `outputs/claim-ledger.xlsx` and take over the status column for the claims that cite the five sources you cross-checked in the previous exercise.

      For each, set the status from what you actually saw — not from what the scan asserts and not from what you assume is true about the literature. The records are still in `sample-data/mock-sources/`, so open the file for a source again whenever you need to. Before you judge whether a source fits a claim, satisfy yourself that the record in front of you is the one the citation names: the author, the year, and the venue in the record should match the citation that pointed at it. Where they do not, "citation mismatch" is the status, and it is a different problem from a source that does not fit.

      Then write the smallest accurate revision for any claim you did not mark supported: the narrowest wording the evidence you personally saw would carry. If the evidence you saw carries nothing, say that.

      Add no evidence. The revision has to be a subtraction.
    checkpoint: "You set the statuses for the cross-checked claims yourself, you checked each record's identity against the citation before judging fit, and every revision you wrote narrows a claim rather than replacing its support."
    facilitator_note: "Learners find subtraction harder than rewriting and will drift into producing better-sourced versions of the claims. Redirect: the task is to say the least the evidence permits, which is sometimes nothing."
  - index: 2
    label: "Run the review skill on the scan"
    type: "prompt"
    instruction: "Now bring in the review skill the facilitator plugin installed, and see what it finds without showing it your work."
    prompt_text: |
      Use the review-ai-research-output skill on sample-data/research-scan-draft.md.

      Context it needs: this is a cited AI research scan, produced for the request in sample-data/research-request.txt, and the deliverable the faculty member asked for is a short evidence map for grant planning. I have not verified anything against full text beyond a handful of identity checks.

      I have my own claim ledger in outputs/claim-ledger.xlsx. Do not read it.

      Give me the review as the skill defines it, including its provisional state and what it could not check.
    checkpoint: "The review states a provisional release state, orders its findings by consequence, and names what the available evidence did not let it check - rather than scoring the scan."
    facilitator_note: "If the skill does not trigger, have the learner say 'use the review-ai-research-output skill'. Runs vary; two learners will get differently ordered findings from the same file, and that variation is worth surfacing rather than smoothing over."
  - index: 3
    label: "Compare the review with your ledger"
    type: "prompt"
    instruction: "Two independent audits of the same artifact. The interesting material is where they diverge."
    prompt_text: |
      Add a sheet named "Review comparison" to outputs/claim-ledger.xlsx with three sections:
      1. findings the review and my ledger agree on;
      2. findings the review made that my ledger does not contain;
      3. rows in my ledger that the review does not address.

      For section 3, do not defend the review and do not defend me. Just record what it did not reach and, where you can tell, why.
    checkpoint: "All three sections are populated, and section 3 is not empty."
    facilitator_note: "Section 3 is the point of the step. If a learner reports it as empty, ask them to check the records they opened in exercise 3 against the review, then move on - do not manufacture entries."
  - index: 4
    label: "Read the skill"
    type: "workspace"
    instruction: |
      A skill is a document, not a feature. You can read this one.

      If the facilitator plugin is installed on your machine, the file is at `plugins/library-ai-workshop-facilitator/skills/review-ai-research-output/SKILL.md`, with `references/REVIEW-RUBRIC.md` beside it. If you cannot find it on disk, ask Claude to show you the skill's own instructions and its rubric.

      Read for four things:

      1. what the skill refuses to do,
      2. what it insists must stay recorded as unchecked,
      3. what it treats as untrusted content,
      4. the point at which it stops and hands the decision back to a person.

      Find the specific sentences that do the fourth. There is more than one.
    checkpoint: "You can quote at least one place where the skill declines to decide, and say who it expects to decide instead."
    facilitator_note: "First time learners read a skill as a document rather than using one. Module 3 modifies a rubric and Module 4 authors a skill, so this is a dependency, not a digression. Point out that it is plain prose with a short header and no code."
  - index: 5
    label: "Run the release gate"
    type: "observe"
    instruction: "Decide whether anything in this folder is ready to go to the faculty member."
    observe_items:
      - "Every material claim has a status set by a person, or is visibly labeled as not yet checked"
      - "Claims whose sources you could not reach are not presented as verified"
      - "The revisions narrow claims rather than adding support that nobody confirmed"
      - "The distinctions between attention, access, use, and effect survive in the wording"
      - "Coverage gaps, unused sources, and access failures are visible in the deliverable itself"
      - "The deliverable is labeled an unverified scan, with a named person owning the remaining checks"
      - "Nothing in the deliverable recommends a decision the request did not ask about"
  - index: 6
    label: "Reflect on divided labor"
    type: "reflect"
    instruction: "The skill found things you did not. You found things it did not, and it was written to stop before some of them on purpose."
    reflection_prompt: "Which of your findings could no skill have made for you, however well written?"
---

## Build a Claim Ledger, Then Read the Skill

The question is not whether the scan has citations. It is whether each material claim accurately
represents an identifiable source that says what the claim needs it to say. Answering that requires
a ledger — one row per claim, with the status of the claim held separately from the claim itself, so
that "we have not checked this" cannot quietly become "this is fine."

Two questions sit inside that, and they fail independently. Is this the source the citation names?
And can that source carry this claim? The records you opened in the previous exercise are still in
`sample-data/mock-sources/`, and you will want them open while you set statuses, because a claim can
fail on either question and the wording of the fix is different in each case.

Then you run the review skill over the same file and compare. Two audits of one artifact, done
independently, is a better test than either one alone, and the disagreements are the useful part.

Finally you read the skill itself. This is the first of three encounters with the format: you read
one here, you modify one in Module 3, and you write one in Module 4. What matters at this stage is
not the syntax — there is barely any — but noticing that the skill's most important sentences are
the ones where it refuses. A well-written skill is specific about where its judgment ends, and it
ends before the professional decision.

## Archives track

Build the ledger on description rather than on citations. The structure is the same and so is the
discipline: the status of an assertion is held in a different column from the assertion itself, so
that "nobody has checked this against the containers" cannot quietly become "this is the collection's
date range."

`Read sample-data/archives/finding-aid-draft.md and outputs/archives-description-inventory.xlsx from the connected folder. Write outputs/archives-description-ledger.xlsx, one row for each assertion the finding aid or the item metadata makes. Columns: assertion as written; where it appears; what it would have to be checked against for it to hold as written; whether anything in the connected folder confirms or contradicts it; status; smallest accurate revision; remediation flag. Use only these statuses: contradicted by the records; unsupported; supported by another file; cannot tell from the available material; not yet checked. Do not use a status meaning verified — I have not told you that I checked anything against the physical records. Leave "smallest accurate revision" empty. Use the remediation flag only to mark assertions whose problem is the language they are written in rather than their accuracy, and do not propose replacement wording.`

Then take over the status column yourself for the assertions you cross-checked in the previous
exercise, and write the smallest accurate revision for each — the narrowest statement the material in
the folder actually carries. In archival description the revision is usually a subtraction too. An
element the material does not support is better recorded as unknown than stated confidently, and
"unknown" is a legitimate value in every one of these fields.

Run the review skill in step 2 on `sample-data/archives/finding-aid-draft.md`, telling it that this
is a legacy finding aid retyped for web publication and that the deliverable is advice on whether it
can stay published as it stands. Compare its findings with your ledger as in step 3. Then read the
skill itself as in step 4, and note where a skill written for research output does and does not reach
a descriptive product — that gap is the material for your own skill in Module 4.

For the release gate, the question is whether this finding aid can remain on the public web
unchanged, and if not, what the minimum honest interim step is. A holding notice on a collection
description is a legitimate answer.

## Discussion

- Where did the review skill and your ledger disagree, and which of you was right?
- What did the skill decline to conclude, and what did that refusal make possible?
- Which claim in the scan would be most damaging if it reached the faculty member unchecked?
- How much of a report like this would you verify before using it in a consultation or a grant
  application, and how would you record which parts you checked?
- What would you add to the review skill if you could change one thing about it?
