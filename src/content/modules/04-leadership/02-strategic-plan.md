---
id: "02-strategic-plan"
title: "Translate and Test Search Syntax"
estimated_minutes: 16
discovery_moment: false
steps:
  - index: 0
    label: "Build concept lines from the map"
    type: "prompt"
    instruction: "Return to the concept map you built in Module 1. It is a file, so there is nothing to retype."
    prompt_text: |
      Read outputs/concept-map.xlsx from the connected folder. Convert it into a line-by-line search strategy: one numbered line per concept, OR inside a concept line, AND between concept lines, quotation marks only where a phrase is genuinely a phrase, and an explicit placeholder wherever a controlled vocabulary term must be supplied.

      Keep date, language, and document-type limits out of the concept logic and list them separately.

      Add this as a new sheet in outputs/concept-map.xlsx named "Concept lines."
    checkpoint: "The logic is readable as concepts before any platform-specific syntax is added, and it is saved into the workbook."
    facilitator_note: "This extends the Module 1 workbook rather than starting a new file, which is the point of having used .xlsx there. If a learner made a Markdown concept map instead, they will retype now — note it rather than fixing it."
  - index: 1
    label: "Get an unverified draft translation"
    type: "prompt"
    instruction: |
      The platform for this exercise is supplied: the Wexford Abstracts and Index on the Perihelion 6 interface. It is fictional, its documentation is in the connected folder, and nobody has to sign into anything.

      What you want from this step is an ordinary unverified draft — the thing you would get if you asked and then stopped. So the prompt tells Claude not to open the platform's documentation. Do not remove that line; the draft is the specimen you are about to examine.
    prompt_text: |
      Read the "Concept lines" sheet of outputs/concept-map.xlsx and translate the strategy into search lines for the Wexford Abstracts and Index on the Perihelion 6 interface.

      Do not read sample-data/mock-database/HELP-syntax-reference.md or any other file in that folder. Draft from general bibliographic search conventions only, so that I have an unverified draft to examine.

      Cover field codes, phrase searching, truncation, proximity, nesting and operator precedence, controlled vocabulary, date limits, and export. Mark every element "unverified — check against platform documentation." Do not state that any syntax is valid.

      Write this to outputs/search-translation-log.xlsx with columns: platform and interface, date checked, draft line, what the documentation says, checked line, result count, what happened, change made, reason, reviewer initials. Fill in only the draft-line column and leave the rest blank for me.
    checkpoint: "outputs/search-translation-log.xlsx exists, has a draft line for every concept line, and claims nothing about validity."
    facilitator_note: "Learners sometimes delete the do-not-read instruction to be helpful. If a draft comes back already correct, that is what happened — have them start a fresh conversation and rerun the prompt as written."
  - index: 2
    label: "Check the draft against the documentation"
    type: "workspace"
    instruction: |
      This step is yours, not Claude's. Asking the model to check its own draft gets you a second draft. Open the documentation and read it.

      Open sample-data/mock-database/HELP-syntax-reference.md beside the draft lines in your log. Work through the draft one element at a time — every field code, the phrase rule, the truncation and wildcard characters, the proximity form, the nesting and precedence rule, the date limit, the thesaurus convention, the export behaviour — and for each one decide: confirmed by the documentation, contradicted by it, or not addressed at all.

      Then open sample-data/mock-database/thesaurus-extract.md and check every controlled term the draft proposed. A term is a descriptor, a non-preferred form with a pointer, or absent. Those are three different findings and they call for three different lines in the log.

      Write the checked line yourself, in the platform's own syntax, and write what the documentation said next to it. Quote the documentation rather than paraphrasing it.
    checkpoint: "For every draft element you have recorded confirmed, contradicted, or not addressed, with the documentation's own wording against the contradicted ones — and at least one controlled term has been reclassified."
    facilitator_note: "The exercise turns on this step and it is the one that gets compressed for time. Timebox step 1 hard to protect it. Watch for learners who hand the help file to Claude and accept a summary; ask them to point to the sentence in the documentation that settles a specific element. A learner who finds a drafted element the platform does not support has the lesson, and should say it to the group."
  - index: 3
    label: "Read the session history"
    type: "workspace"
    instruction: |
      Documentation tells you what the platform supports. It does not tell you what your search retrieved.

      Open sample-data/mock-database/search-session-transcript.md. It is a record of a session on this platform: the lines as submitted, the counts they returned, and the flags and errors the interface produced.

      Take it line by line and account for each one. What was submitted, what came back, and why the count is what it is. Some lines did what the searcher intended. Some did not. One did not run. Use the documentation from step 2 to explain the difference, and pay as much attention to the counts that look plausible as to the ones that look wrong.

      Record the result count and what happened against the matching row of your log. Where the session shows an outcome your checked line would also have produced, change the checked line and record why.
    checkpoint: "Every line of the session is accounted for in your log, including the failures, and at least one of your checked lines changed because of something the session revealed rather than something the documentation said."
    facilitator_note: "Expect the room to move at very different speeds here. If time is short, assign lines across the group and pool the accounts rather than letting anyone stop halfway. The lines whose counts look unremarkable are the ones worth surfacing in discussion."
  - index: 4
    label: "Finish the log"
    type: "prompt"
    instruction: |
      Now Claude is useful again: you have the findings, and it can put them in order. Dictate what you found rather than asking it to work it out.

      Keep licensed full text and patron data out of the conversation. Search lines, counts, documentation quotations, and your own notes are fine.
    prompt_text: |
      Open outputs/search-translation-log.xlsx. I am going to give you my findings for each line and I want you to record them exactly as I state them, without correcting my syntax or my counts.

      For every row, fill: platform and interface, date checked, what the documentation says, checked line, result count, what happened, change made, reason, my initials.

      Where I recorded no result for a line, write "no result recorded" rather than leaving the cell blank or supplying an estimate. Add a final sheet named "Unresolved" listing every element the documentation did not address.
    checkpoint: "The log distinguishes draft lines from checked lines throughout, and no cell contains a count or a finding you did not supply."
  - index: 5
    label: "Check the log against reproducibility"
    type: "observe"
    instruction: "Open outputs/search-translation-log.xlsx and read it as a peer reviewer who has to rerun this search next year."
    observe_items:
      - "Every checked line has a date and a result count"
      - "Draft lines and checked lines are still distinguishable from each other"
      - "The documentation column quotes the platform rather than summarising it"
      - "Changes have a recorded reason, not only a record that they happened"
      - "Errors and flags are recorded in the interface's own wording"
      - "Controlled terms are marked as descriptor, non-preferred, or absent"
      - "A named reviewer's initials appear against the checked lines"
  - index: 6
    label: "Reflect on reproducibility"
    type: "reflect"
    instruction: "A query can be syntactically perfect and retrieve the wrong literature. Only the platform can tell you which you have."
    reflection_prompt: "Which revisions came from the documentation, which came from the session history, and where will that record live once this workshop folder is gone?"
---

## Translate and Test Search Syntax

Claude can draft a translation across database interfaces quickly, and the draft is genuinely useful
— it gives you a structure and a checklist. What it cannot do is establish that a field code, a
truncation character, or a proximity operator exists on your platform, in your subscription, this
year. The platform's own documentation, its thesaurus, and what actually came back when the search
ran are the authority.

So the authority for this exercise is in the connected folder rather than behind a login. Under
`sample-data/mock-database/` there is a fictional platform — the Wexford Abstracts and Index on
Perihelion 6 — with its syntax reference, a thesaurus extract, and the history of a search session
someone ran on it. Nothing in this exercise needs a subscription, an account, or a live search, and
the syntax you are checking against is the platform's, not the one you already know.

The shape of the work is the shape it takes at your own desk. You draft, you check the draft against
the documentation element by element, you look at what the searches actually returned, and you write
down every material change and why you made it. The log is the deliverable, because the log is what
makes the search rerunnable by someone else.

## Archives track

The concept is identical and the authority is different. A drafted authorized form of a name, a
drafted subject heading, a drafted date normalization — each is a hypothesis, and no amount of
fluency establishes that the form exists in the vocabulary you are obliged to use, in the version
your system is running, this year.

Your authority files are supplied too, so this needs no external lookup:
`sample-data/mock-database/mock-authority-file.md` is an extract from a fictional regional name
authority file covering every name in the Ferris Family Papers finding aid, and the last section of
`sample-data/mock-database/thesaurus-extract.md` holds the subject-authority terms the fictional
repository assigns.

For step 0, return to `outputs/archives-access-points.xlsx` from Module 1 and add a sheet as step 0
does, turning each access point into a proposed authorized form with its vocabulary named and every
element marked "unverified — check against the authority file."

For step 1, ask for the unverified draft the same way, and tell Claude not to read the authority file
or the thesaurus extract while drafting. Then write `outputs/archives-authority-check-log.xlsx` with
columns: vocabulary and version; date checked; drafted form; form actually found; identifier of the
record found; discrepancy or unexpected outcome; change made; reason; reviewer initials. Fill in only
the drafted-form column and leave the rest for you.

Step 2 is the step to protect and it is yours. Search each drafted form in the supplied authority
file and record what came back: the established form and its identifier, a variant form with a
pointer to the form you must use instead, a referral that will not resolve until you decide something
from the material in hand, or no record at all. Record the outcome in the file's own wording,
including "no record found" — that is a result, and inventing a record rather than recording its
absence is the failure this step exists to catch. Then check every drafted subject heading against
the subject-authority section of the thesaurus extract, and note which are established, which are
non-preferred with a replacement, and which are deprecated.

The remediation cases need one extra column of your own: for any deprecated term, record whether a
current replacement is established in the vocabulary, and what you would do if it is not. Do not
paste any patron or donor information into Claude. Terms, identifiers, and your own notes are fine.

## Discussion

- Which syntax elements were drafted confidently and wrongly, and what did they have in common?
- Which of the session's counts looked fine until you worked out what produced them?
- How would a peer reviewer reproduce your final search from this log alone?
- What would you have missed if you had trusted the draft?
