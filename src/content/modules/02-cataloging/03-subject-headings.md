---
id: "03-subject-headings"
title: "Inventory the Sources Yourself"
estimated_minutes: 20
discovery_moment: true
steps:
  - index: 0
    label: "Build the source inventory"
    type: "prompt"
    instruction: "Turn the scan's source table into a workbook you can sort, filter, and hand to a colleague. Transcription only at this stage — no corrections, no additions."
    prompt_text: |
      Read sample-data/research-scan-draft.md from the connected folder and write outputs/source-inventory.xlsx, one row for each of the eleven sources in its source table.

      Columns: source ID; author or organization; title; venue or publisher; year; source type; DOI or URL; access status as stated in the scan; the exact claim in the body that cites this source, or "not cited in the body" if the body never uses it; my verification level; my note.

      Copy the metadata exactly as the file gives it, including anything that looks incomplete or odd. Do not correct it, do not complete it from your own knowledge, and do not add sources. Leave "my verification level" and "my note" empty for me to fill in.

      Tell me how many of the eleven sources the body actually cites.
    checkpoint: "The workbook has one row per source, the metadata matches the file exactly, every row records either the claim it supports or that the body never uses it, and the two verification columns are empty."
    facilitator_note: "The last line of the prompt produces a count learners will want to discuss immediately. Let them, briefly, then move on - step 2 is where it pays off. If a model tidies the metadata despite the instruction, that is worth naming as its own finding."
  - index: 1
    label: "Open a sample of the records yourself"
    type: "workspace"
    instruction: |
      Claude cannot make this judgment for you, and nobody in this workshop has web search. So the retrieval has already been done and captured in `sample-data/mock-sources/` — one file per cited source, named by the ID the scan gives it, so that all eleven results are the same for every learner. What has not been done is the judgment.

      Read `sample-data/mock-sources/index.md` first. Then choose at least four sources and open their records yourself:

      - the source behind the headline number in the executive summary,
      - one policy or organizational report,
      - one source from outside North America and Europe,
      - one source that the table lists but the body never cites.

      For each, open the matching file in `sample-data/mock-sources/` and read it against the row you transcribed in step 0, field by field: author, title, venue, year, identifier. Then fill in "my verification level" in `outputs/source-inventory.xlsx` yourself, using exactly one of: identity confirmed; metadata mismatch; could not locate; full text inaccessible; not checked.

      Where a record came back with nothing, or came back and does not match the citation, that is a finding and not a mistake on your part. Record it and move on. Do not repair the citation, and do not let Claude repair it either.
    checkpoint: "You have personally opened at least four records, compared each one against the citation that pointed at it, and every verification level in the workbook records what you saw rather than what the scan asserted."
    facilitator_note: "Budget eight minutes and expect this to run long. Learners will want reassurance that a record that gives them nothing is a legitimate result to record rather than a task to keep grinding at. It is - hold them to four sources and move on. If a learner asks whether more than one verification level could apply to a row, have them pick the one that most limits what the source can support."
  - index: 2
    label: "Cross-check against the library's own evidence log"
    type: "prompt"
    instruction: "You are not the first person to look at these sources. Your library kept a log."
    prompt_text: |
      Read sample-data/evidence-notes.csv from the connected folder. It is the librarian's own evidence log for this request, recorded before the scan was run. Its rows A to E describe the same five sources as the scan's A1 to E1, matched by outcome.

      Add a sheet named "Cross-check" to outputs/source-inventory.xlsx. One row per source, with these columns side by side: source ID; the outcome at issue; the access status the scan gives it; the claim the scan uses it for; the log's verification_status; the log's librarian_note; and a final column reading "agrees", "disagrees", or "cannot tell".

      Fill the final column only from these two files. Do not reason about who is more likely to be right, and do not resolve any disagreement you find. Report it.
    checkpoint: "The sheet places the scan and the log side by side for all five sources, and every comparison is traceable to a cell in one of the two files."
    facilitator_note: "This is the module's central step and its discovery moment. If time is short anywhere else, protect this one. Read the comparison column aloud in the debrief before discussing anything else."
  - index: 3
    label: "Audit the inventory"
    type: "observe"
    instruction: "Open outputs/source-inventory.xlsx yourself and read both sheets before you go on."
    observe_items:
      - "Every row records either the claim it supports or the fact that the body never uses it"
      - "Your verification levels reflect the records you opened yourself, not what the scan asserted"
      - "The access status the scan gives a source and whether any claim was checked against it are held in separate columns"
      - "Where the scan and the evidence log disagree, the disagreement is recorded rather than settled"
      - "No metadata was corrected, completed, or improved on its way into the workbook"
      - "The geographic, language, and source-type coverage of the set is visible from the table"
  - index: 4
    label: "Reflect on what looked safe"
    type: "reflect"
    instruction: "A record that comes back proves that something exists. It does not prove that the source is what the citation says it is, that it is appropriate to the claim, or that anyone read it."
    reflection_prompt: "Which of the sources would you have accepted without checking, and what specifically made it look safe?"
---

## Inventory the Sources Yourself

The scan ends with eleven sources, each carrying an access status assigned by the thing that cited
it. This exercise takes that table apart into a workbook, and then does the part no tool can do for
you: opening a sample and looking.

The looking has been made possible without leaving the folder. `sample-data/mock-sources/` holds one
file per cited source — what came back when each citation was followed. Some came back with a record,
some with an abstract and a locked door, some with nothing. Every learner sees the same eleven
results, which means the difference between two learners' inventories is entirely in the judgment.

Two things are worth separating as you work. The first is whether a source exists and is what the
citation says it is — identity. The second is whether it supports the claim attached to it — fit.
They fail independently, and a report can pass the first while failing the second everywhere.

The third thing to watch is the source set as a whole. A list of sources consulted is not
necessarily a list of sources used, and checking whether the two match is one of the more revealing
measurements you can take of an autonomous run.

Then read the library's own evidence log against the scan. Someone already did some of this work.

## Archives track

Identity and fit fail independently here too. An item record can be accurate about what the object
is and wrong about who made it, when, or whether anyone may publish it — and the fields that carry
those judgments are the ones that get indexed, harvested, and reused, while the hedge sits in a notes
column nobody exports.

Build `outputs/archives-description-inventory.xlsx`:

`Read sample-data/archives/digitization-inventory.csv from the connected folder and write outputs/archives-description-inventory.xlsx, one row per record in the file. Copy every field exactly as given, including anything incomplete, inconsistent, or contradictory. Do not correct it, do not normalize the dates, do not complete it from your own knowledge, and do not merge or drop any row. Add four empty columns for me: my verification level; what this row asserts that its own notes do not support; remediation needed; my note. Then tell me how many distinct identifiers the file contains and how many rows.`

For step 1, do your own checking without leaving the folder. Choose at least four rows and read each
one against the rest of the material: the finding aid, the accession note, and the row's own notes
column. Set "my verification level" yourself, using exactly one of: confirmed from the record itself;
supported by another file in the folder; contradicted by another file in the folder; asserted with no
support available; cannot tell from the folder. A field you cannot confirm is a finding, not a task to
keep grinding at.

For step 2, the cross-check is the point of the exercise, and everything you need to check against is
already in the folder. Three files describe photographic material from the same subject and place:
`sample-data/archives/digitization-inventory.csv`, which you have just inventoried,
`sample-data/archives/finding-aid-draft.md`, and `sample-data/archives/accession-note.txt`. Read all
three and set their descriptions beside one another:

`Add a sheet named "Cross-check" to outputs/archives-description-inventory.xlsx. Read sample-data/archives/finding-aid-draft.md and sample-data/archives/accession-note.txt. For every photographic holding described in any of the three files, put side by side: the file it comes from; the creator each file gives it; the dates each file gives it; the rights position each file takes; the access condition each file states; and a final column reading "agrees", "disagrees", or "cannot tell". Fill the final column only from these three files. Do not decide which file is right and do not resolve any disagreement. Report it.`

## Discussion

- What happened when you opened the records yourself, and what did you record?
- Your library had already assessed five of these sources and written down what it found. Compare
  the log with what the scan asserts about the same five. What became of that work?
- The scan lists more sources than it uses. What would you want to know about the ones it left out?
- Which single row of your cross-check sheet would you put in front of the faculty member first?
- If this had been checked by a colleague rather than a tool, what would you have expected to see
  that is missing here?
