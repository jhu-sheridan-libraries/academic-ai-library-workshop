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
    facilitator_note: "This extends the Module 1 workbook rather than starting a new file, which is the point of having used .xlsx there. A learner who made a Markdown concept map retypes it here; that is a consequence rather than a failure, and it is the clearest example in the course of why the deliverable format matters - worth naming in office hours if anyone hits it."
  - index: 1
    label: "Get an unverified draft translation"
    type: "prompt"
    instruction: |
      The platform for this exercise is supplied: the Wexford Abstracts and Index on the Perihelion 6 interface. It is fictional, its documentation is in the connected folder, and nobody has to sign into anything.

      This step creates a deliberately unverified draft: the kind of search syntax you would receive if you asked an AI tool for a translation and did not check its work. The prompt tells Claude not to open the platform's documentation. Keep that instruction; you will compare the draft with the documentation in the next step.
    prompt_text: |
      Read the "Concept lines" sheet of outputs/concept-map.xlsx and translate the strategy into search lines for the Wexford Abstracts and Index on the Perihelion 6 interface.

      Do not read sample-data/mock-database/HELP-syntax-reference.md or any other file in that folder. Draft from general bibliographic search conventions only, so that I have an unverified draft to examine.

      Cover field codes, phrase searching, truncation, proximity, nesting and operator precedence, controlled vocabulary, date limits, and export. Mark every element "unverified - check against platform documentation." Do not state that any syntax is valid.

      Write this to outputs/search-translation-log.xlsx with columns: platform and interface, date checked, draft line, what the documentation says, checked line, result count, what happened, change made, reason, reviewer initials. Fill in only the draft-line column and leave the rest blank for me.
    checkpoint: "outputs/search-translation-log.xlsx exists, has a draft line for every concept line, and claims nothing about validity."
    facilitator_note: "Learners sometimes delete the do-not-read instruction to be helpful, and the step tells them what that looks like: a draft that comes back already correct, fixed by starting a fresh conversation and sending the prompt as written. This is the likeliest support question in Module 4 after the skill not triggering."
  - index: 2
    label: "Check the draft against the documentation"
    type: "workspace"
    instruction: |
      This step is yours, not Claude's. Asking the model to check its own draft gets you a second draft. Open the documentation and read it.

      Open sample-data/mock-database/HELP-syntax-reference.md beside the draft lines in your log. Work through the draft one element at a time - every field code, the phrase rule, the truncation and wildcard characters, the proximity form, the nesting and precedence rule, the date limit, the thesaurus convention, the export behaviour - and for each one decide: confirmed by the documentation, contradicted by it, or not addressed at all.

      Then open sample-data/mock-database/thesaurus-extract.md and check every controlled term the draft proposed. A term is a descriptor, a non-preferred form with a pointer, or absent. Those are three different findings and they call for three different lines in the log.

      This is also where the concept map gets finished. Open `outputs/concept-map.xlsx` and fill in the verification status you left blank in Module 1 - descriptor, non-preferred, or absent - for each candidate term you just looked up. That column has been waiting for a thesaurus since the first module.

      Write the checked line yourself, in the platform's own syntax, and write what the documentation said next to it. Quote the documentation rather than paraphrasing it.
    checkpoint: "For every draft element you have recorded confirmed, contradicted, or not addressed, with the documentation's own wording against the contradicted ones - and at least one controlled term has been reclassified."
    facilitator_note: "The exercise turns on this step and it is the one that gets compressed when the day runs long. The failure to look for is a learner who hands the help file to Claude and accepts a summary - the test is whether they can point to the sentence in the documentation that settles a specific element, which is a fair thing to ask in office hours. Anyone who found a drafted element the platform does not support has the lesson; ask them to say which one, because the answers differ."
  - index: 3
    label: "Read the session history"
    type: "workspace"
    instruction: |
      Documentation tells you what the platform supports. It does not tell you what your search retrieved.

      Open sample-data/mock-database/search-session-transcript.md. It is a record of a session on this platform: the lines as submitted, the counts they returned, and the flags and errors the interface produced.

      Take it line by line and account for each one. What was submitted, what came back, and why the count is what it is. Some lines did what the searcher intended. Some did not. One did not run. Use the documentation from step 2 to explain the difference, and pay as much attention to the counts that look plausible as to the ones that look wrong.

      Record the result count and what happened against the matching row of your log. Where the session shows an outcome your checked line would also have produced, change the checked line and record why.

      If you are short of time, start with the line that did not run and the lines whose counts look surprising, and mark the rest unexamined. Finish whichever line you are on rather than stopping inside one - a half-accounted line is worse in the log than an honestly unexamined one.
    checkpoint: "Every line of the session is accounted for in your log, including the failures, and at least one of your checked lines changed because of something the session revealed rather than something the documentation said."
    facilitator_note: "People move at very different speeds here, and alone there is no pooling lines across a group - so the step now says which lines to account for first if time is short, and to finish a line rather than stop inside one. The lines whose counts look unremarkable are the ones worth surfacing in office hours; nobody volunteers those on their own."
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
  - index: 7
    label: "One question to take further"
    type: "reflect"
    instruction: "The test this log has to pass in real work, which is not a test you can apply to your own log alone. Record your answer here, or bring the log to office hours and ask someone to try it."
    reflection_prompt: "Could a peer reviewer reproduce your final search from this log alone - and what would they have to ask you for?"
---

## Translate and Test Search Syntax

Claude can draft a translation across database interfaces quickly, and the draft is genuinely useful
- it gives you a structure and a checklist. What it cannot do is establish that a field code, a
truncation character, or a proximity operator exists on your platform, in your subscription, this
year. The platform's own documentation, its thesaurus, and what actually came back when the search
ran are the authority.

So the authority for this exercise is in the connected folder rather than behind a login. Under
`sample-data/mock-database/` there is a fictional platform - the Wexford Abstracts and Index on
Perihelion 6 - with its syntax reference, a thesaurus extract, and the history of a search session
someone ran on it. Nothing in this exercise needs a subscription, an account, or a live search, and
the syntax you are checking against is the platform's, not the one you already know.

The shape of the work is the shape it takes at your own desk. You draft, you check the draft against
the documentation element by element, you look at what the searches actually returned, and you write
down every material change and why you made it. The log is the deliverable, because the log is what
makes the search rerunnable by someone else.

## Archives track

The concept is identical and the authority is different. A drafted authorized form of a name, a
drafted subject heading, a drafted date normalization - each is a hypothesis, and no amount of
fluency establishes that the form exists in the vocabulary you are obliged to use, in the version
your system is running, this year.

Your authority files are supplied too, so this needs no external lookup:
`sample-data/mock-database/mock-authority-file.md` is an extract from a fictional regional name
authority file covering every name in the Ferris Family Papers finding aid, and the last section of
`sample-data/mock-database/thesaurus-extract.md` holds the subject-authority terms the fictional
repository assigns.

Start from the access points you already have:

```cowork-prompt
Read outputs/archives-access-points.xlsx from the connected folder. Add a sheet named "Proposed forms" turning each access point into a proposed authorized form: one row per access point, with columns for the access point as recorded, the kind of term it is, the vocabulary the form would have to come from, and the proposed form itself. Mark every proposed form "unverified - check against the authority file." Do not state that any form is correct.
```

Now get a deliberately unverified draft - the search syntax you would receive if you asked an AI tool for a translation and did not check its work. The prompt tells Claude not to open the platform's documentation. Keep that instruction; you will compare the draft with the documentation in the next step.

```cowork-prompt
Read the "Proposed forms" sheet of outputs/archives-access-points.xlsx. Draft, for each proposed form, the authorized form you would expect a regional name authority file or a subject thesaurus to hold, and the record identifier you would expect it to carry. Do not read sample-data/mock-database/mock-authority-file.md, sample-data/mock-database/thesaurus-extract.md, or any other file in that folder. Draft from general descriptive convention only, so that I have an unverified draft to examine. Mark every element "unverified - check against the authority file." Do not state that any form or identifier is valid. Write this to outputs/archives-authority-check-log.xlsx with columns: vocabulary and version; date checked; drafted form; form actually found; identifier of the record found; discrepancy or unexpected outcome; change made; reason; reviewer initials. Fill in only the drafted-form column and leave every other cell blank for me.
```

If a draft comes back already correct, the do-not-read line was dropped - start a fresh conversation
and send it again.

**Now check the draft yourself.** This is the part the exercise turns on and it is not delegable:
asking the model to check its own draft gets you a second draft. Open
`sample-data/mock-database/mock-authority-file.md` beside the drafted forms and look each one up.
Record what came back in the file's own wording - the established form and its identifier, a variant
form with a pointer to the form you must use instead, a referral that will not resolve until you decide
something from the material in hand, or no record at all. "No record found" is a result, and inventing
a record rather than recording its absence is the failure this step exists to catch. Then open the
subject-authority section of `sample-data/mock-database/thesaurus-extract.md` and check every drafted
subject heading: established, non-preferred with a replacement, or deprecated. Those are three
different findings calling for three different lines. Quote the authority file rather than paraphrasing
it.

For the deprecated terms you need one judgment of your own: whether a current replacement is
established in the vocabulary, and what you would do if it is not. Write that down before you record
anything.

Then have the log filled in from your findings, not from the model's:

```cowork-prompt
Open outputs/archives-authority-check-log.xlsx. I am going to give you my findings for each row and I want you to record them exactly as I state them, without correcting my forms, my identifiers, or my quotations. For every row fill: vocabulary and version, date checked, form actually found, identifier of the record found, discrepancy or unexpected outcome, change made, reason, and my initials. Where I recorded no record found, write "no record found" rather than leaving the cell blank or supplying a form. Add a column recording, for each deprecated term, whether a current replacement is established and what I decided to do where it is not. Add a final sheet named "Unresolved" listing every drafted element the authority file and the thesaurus did not address.
```

Keep patron and donor information out of the conversation entirely. Terms, identifiers, quotations from
the authority file, and your own notes are fine.

Then read the log as a colleague who has to redo this work next year: every checked form has a date and
an identifier or a recorded absence, drafted and checked forms are still distinguishable, the authority
file is quoted rather than summarised, every change has a recorded reason, and your initials appear
against the rows you checked.

## Discussion

- Which syntax elements were drafted confidently and wrongly, and what did they have in common?
- Which of the session's counts looked fine until you worked out what produced them?
- How would a peer reviewer reproduce your final search from this log alone?
- What would you have missed if you had trusted the draft?
