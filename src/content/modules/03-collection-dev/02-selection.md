---
id: "02-selection"
title: "Adapt the Rubric, Then Build the Matrix"
estimated_minutes: 20
discovery_moment: false
steps:
  - index: 0
    label: "Get the rubric out of the skill and into a file"
    type: "prompt"
    instruction: |
      In Module 2 you read the review-ai-research-output skill rather than just running it. One thing inside it was a list of verification statuses — a short controlled vocabulary for saying how far a claim has actually been checked.

      A skill is not a program. It is a folder of Markdown files that Claude reads when the task calls for it, which means the vocabulary inside it is a text file you can copy and change. Get a copy.
    prompt_text: |
      Use the review-ai-research-output skill. Show me its verification statuses exactly as the skill defines them, including the rule about what must not be collapsed into what, and write them to outputs/local-verification-standard.md in the connected folder.

      Copy them; do not improve, reorder, or rename them. Add nothing of your own. Then tell me which file in the skill they came from.
    checkpoint: "outputs/local-verification-standard.md exists and reproduces the skill's statuses unchanged, and you know which file inside the skill they came from."
    facilitator_note: "If the skill does not trigger, have the learner say 'use the review-ai-research-output skill' — the exact name, which is also the fix they will need in Module 4. Some learners are surprised that a skill can be asked to show its own contents — let that surprise land, because Module 4 depends on skills feeling editable rather than sealed."
  - index: 1
    label: "Make it yours"
    type: "workspace"
    instruction: |
      Open `outputs/local-verification-standard.md` and edit it yourself. You are adapting a general standard into one narrow enough to use on this evidence log today. Make four changes:

      1. Add a first line saying what this version is for — one sentence, naming the artifact type and who uses it.
      2. Keep, cut, or rename statuses so the list fits how your team actually talks. If "citation mismatch" is not language your colleagues would use, change the label and leave the definition intact.
      3. Add a short mapping table from the three values in `evidence-notes.csv` — `metadata-only`, `full-text-checked`, `citation-unverified` — to your statuses. Mapping upward is the failure mode: nothing that has not been opened may land on a status meaning it was.
      4. Keep the rule about not collapsing unchecked or inaccessible material into supported, in whatever words you prefer. That rule is the reason the vocabulary exists.

      This is the whole of what modifying a skill amounts to. No code, no syntax, no programming — a Markdown file with headings and a list, edited by the person who has to live with it.
    checkpoint: "The file has a stated purpose, your own status list, a mapping from the log's three values that never maps upward, and the no-collapsing rule preserved."
    facilitator_note: "Timebox to five minutes; the temptation is to redesign the whole rubric. What matters is that a non-programmer has now edited a skill artifact and can see there was nothing to it. Anyone who maps 'metadata-only' onto a supported status has produced the most useful discussion material in the exercise — surface it without correcting it first."
  - index: 2
    label: "Build the matrix on your own vocabulary"
    type: "prompt"
    instruction: "Now use the standard you just wrote as the controlled vocabulary for the matrix, so the statuses in the deliverable are the ones your team agreed to."
    prompt_text: |
      Read sample-data/evidence-notes.csv and outputs/local-verification-standard.md from the connected folder. Build a claim-evidence matrix and write it to outputs/claim-evidence-matrix.xlsx, one row per source.

      Columns: source ID, source type, year, geography, reported outcome, what this record may support, what this record cannot support, verification status, next verification action.

      For verification status use only the statuses defined in outputs/local-verification-standard.md, applying the mapping in that file. Use only these two files. Quote no text that is not in the evidence log, and add no bibliographic detail of any kind.
    checkpoint: "outputs/claim-evidence-matrix.xlsx exists, every row states both what the record may support and what it cannot, and every status value comes from your standard."
    facilitator_note: "This file is read by both remaining exercises in the module. A learner who falls behind can cut anything else here, but not this."
  - index: 3
    label: "Separate the outcome from the proxy"
    type: "prompt"
    instruction: |
      This is the distinction the whole module turns on. Downloads are a record of retrieval. Citations are a record of scholarly attention. Neither is a record of anyone reading, applying, or being helped by anything. The five records in the log mix all three levels and use the language of the strongest one.
    prompt_text: |
      Add a column to outputs/claim-evidence-matrix.xlsx classifying each reported outcome as one of: direct evidence of use, a proxy for attention, a proxy for access, or unclear.

      Justify each classification in no more than fifteen words, using the wording of the record itself. Do not upgrade downloads, requests, or citations into practical use or into impact. Where the record's own note contradicts its reported outcome label, say so in the justification.
    checkpoint: "Attention and access proxies are classified separately from direct use, and no justification silently promotes a proxy."
    facilitator_note: "The five outcome families from Module 1 exercise 3 are the vocabulary here. Learners who built that sheet should be told to open it alongside the matrix."
  - index: 4
    label: "Rank what to verify first"
    type: "prompt"
    instruction: "Verification effort is finite. Spend it where being wrong costs the most, not where checking is easiest."
    prompt_text: |
      Rank the five records for verification priority. Score each on three criteria: importance to the research question in sample-data/research-request.txt, risk of the record being misread by a non-specialist, and current verification status under outputs/local-verification-standard.md.

      Show every criterion score, not just the total, and explain any tie. Add this as a second sheet named "Verification priority."
    checkpoint: "The scores are visible per criterion, and the ranking is driven by evidentiary risk rather than by publication date or convenience."
  - index: 5
    label: "Review the matrix"
    type: "observe"
    instruction: "Open outputs/claim-evidence-matrix.xlsx yourself. You are checking whether this file could safely be handed to a colleague who has not read the evidence log."
    observe_items:
      - "No row has acquired a title, author, publisher, DOI, or link that is not in the evidence log"
      - "Every status value appears in your local standard, and nothing was mapped upward from the log's original value"
      - "Attention and access proxies are visibly distinct from direct evidence of use"
      - "Each row's limitation is specific to that record rather than a generic caution repeated five times"
      - "Priority reflects the cost of being wrong, not the ease of checking"
  - index: 6
    label: "Reflect on the standard you wrote"
    type: "reflect"
    instruction: "You changed a vocabulary that came out of a skill, and then a deliverable was built on your version rather than the original. That is a small act with a long reach."
    reflection_prompt: "Who in your library would have to agree to your version of these statuses before it could be used on real work, and what in it would they argue with first?"
---

## Adapt the Rubric, Then Build the Matrix

A claim-evidence matrix is the bridge between source notes and narrative. It holds the origin, the
status, and the limits of each claim in one place, so that prose written later can be audited a row
at a time instead of rewritten whole.

That only works if "verified" means one thing across the table. So this exercise starts a step
earlier than the matrix, with the vocabulary. The review-ai-research-output skill already carries a set of
verification statuses; you take them out of the skill, cut them down to what your team would
actually say, and add the mapping this evidence log needs. Then the matrix gets built on your
version.

Doing it in that order shows you something about skills that is easy to miss while you are using
them. The rubric inside a skill is not machinery. It is a Markdown file — headings, a list,
definitions in plain sentences — and editing it needs nothing but a text editor and a view about
how your colleagues talk. In Module 4 you will write one from nothing. This is the intermediate
step: taking something that already works and making it fit.

## Archives track

This is the exercise where the archives track most needs its own vocabulary, because the statuses a
research reviewer uses do not fit description. "Citation mismatch" has no archival meaning. The
judgments description actually calls for — about whose voice a statement is written in, and about how
far a rights position has been established — have no research-review equivalent at all.

Do step 0 as written — get the skill's statuses out of the skill and into a file — but save it as
`outputs/archives-description-standard.md`. Then make the same four changes in step 1, with this
substitution: derive the statuses description requires rather than taking them from a list. Work back
through `outputs/archives-description-ledger.xlsx` row by row, and wherever your cut-down vocabulary
cannot carry a row's judgment without distorting it, write the status that row needs and define it in
a sentence. Then add a mapping from the statuses you used in the ledger to this standard. Keep the
no-mapping-upward rule: nothing unresolved may land on a status meaning cleared, and nothing
unmeasured may land on a status meaning measured.

Then build the matrix at the level archives decisions are actually made at — the accession, not the
item:

```cowork-prompt
Read sample-data/archives/accession-note.txt and outputs/archives-description-standard.md from the connected folder. Build an appraisal and processing matrix and write it to outputs/archives-evidence-matrix.xlsx, one row per body of material the accession note distinguishes. Columns: material; extent as stated in the note; whether that extent was measured or estimated; formats; what the note establishes about it; what the note explicitly does not establish; donor condition attached, if any; access status; status from my standard; next action. Use only these two files. Do not total any extent the note does not total, do not estimate an unmeasured extent, and add no fact about the records that the note does not state.
```

For step 3, the distinction the module turns on has an exact archival form. Add a column classifying
each row as: a rights position established by an agreement; a rights position asserted without one; an
access condition set by the repository; an access condition requested by the donor and not yet agreed;
or unclear. Justify each in fifteen words from the note's own wording, and do not upgrade a request
into an agreement.

Then rank for processing priority as step 4 does, scoring on researcher demand, risk of harm if the
material stays undescribed, risk of harm if it is opened without survey, and current status under your
standard. Save it as a second sheet named "Processing priority."

## Discussion

- What did you cut from the rubric's status list, and what did cutting it cost?
- Where does `metadata-only` belong, and did the group agree?
- What belongs at the source level in a matrix, and what belongs at the claim level?
- When should a matrix like this be maintained outside the AI tool entirely?
