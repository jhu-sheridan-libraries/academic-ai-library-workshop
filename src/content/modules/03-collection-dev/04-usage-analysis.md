---
id: "04-usage-analysis"
title: "Analyze Data Without Hiding Assumptions"
estimated_minutes: 20
discovery_moment: true
steps:
  - index: 0
    label: "Read the file before anyone calculates on it"
    type: "workspace"
    instruction: |
      Open `sample-data/usage-report.csv` from the connected folder yourself. Ten titles, one reporting period, and eight columns.

      Look hard at the two numeric column headers. They are report identifiers from a usage-reporting standard, not descriptions of what was counted. A header does not define its own metric, and a ratio built from two columns is only as sound as your account of what each column measures. Write down, on paper or in a scratch note, what you believe each of the two numeric columns counts and how confident you are.
    checkpoint: "You can name the ten titles' shared reporting period, and you have written down what you think each numeric column counts and how sure you are."
    facilitator_note: "Most learners read the headers as self-explanatory, and the next step is built so that the assumption gets written down and becomes checkable rather than corrected. Anyone who already knows the reporting standard loses nothing by doing it anyway. If this comes up in office hours before people have done step 1, do not settle what the columns mean — that is the exercise."
  - index: 1
    label: "Profile the data and surface the assumptions"
    type: "prompt"
    instruction: "Description before arithmetic. Ask what is in the file and what has been assumed about it, with nothing computed yet."
    prompt_text: |
      Read sample-data/usage-report.csv from the connected folder. Report the row count, the column names, the range of each numeric column, the reporting period, and any zero, missing, or unusual values.

      Then state explicitly what you are assuming each numeric column measures, on what basis, and what would have to be checked to confirm it. If a column name is a report identifier rather than a metric description, say so.

      Do not calculate anything yet, and do not compare titles.
    checkpoint: "The profile names the zero value and the extreme values, and states the column-meaning assumptions as assumptions rather than as facts."
    facilitator_note: "The learner compares what came back with what they wrote down in step 0, and where the two differ the disagreement is the lesson: nobody can settle it from the file, which is exactly what makes it an assumption to verify against the platform's documentation. In office hours, asking what people wrote in step 0 makes the point faster than any explanation — the answers will not match."
  - index: 2
    label: "Require formulas with every number"
    type: "prompt"
    instruction: "Now the arithmetic, into a file, with every derivation shown. A number without its formula cannot be checked, and a number nobody checks is not evidence."
    prompt_text: |
      Analyze sample-data/usage-report.csv and write the analysis to outputs/usage-analysis.md in the connected folder.

      Show the formula, the inputs, the denominator, and the rounding for every derived metric. Identify the three highest and three lowest titles on each numeric column, and compute for every title the ratio of the second numeric column to the first — the second column divided by the first, in that order, so the first column is the denominator. Flag every row where that denominator is zero or the ratio is undefined.

      Label the ratio with the assumption it depends on, in the same line as the number. Add three data-quality cautions specific to this file. Do not recommend cancelling, retaining, or renewing anything.
    checkpoint: "outputs/usage-analysis.md shows a formula for every derived figure, handles the undefined case explicitly rather than printing a number, and contains no collection recommendation."
    facilitator_note: "The thing to look for is a zero denominator silently rendered as 0, blank, or dropped from the table — the failure a reader cannot see, and one the learner will only catch in the next step. Worth asking about directly in office hours, since a learner who did not notice will not report it."
  - index: 3
    label: "Recalculate three rows yourself"
    type: "workspace"
    instruction: |
      Pick at least three titles and recalculate their ratios independently — a calculator, a phone, or a spreadsheet of your own. Include the row with a zero and the row with the most extreme values. Do not ask Claude to check its own work; that is not an independent check.

      Compare your figures with the file. Then open `outputs/usage-analysis.md` and add a section called `Spot check` in your own words, recording for each row you checked: your value, the file's value, the difference, and — where they differ — whether the cause was rounding, a divide-by-zero, a column selection error, or something else.

      Append one line to `outputs/session-log.md` naming what you checked and what you found, including "no discrepancies" if that is the honest answer. A clean result is a real finding and this step is done when you have three rows checked — about five minutes — whether or not anything turned out to be wrong.
    checkpoint: "At least three rows including the zero and the extreme have been recalculated by you, and the result is written into both files."
    facilitator_note: "Highest dropout and highest value in the module, and the one step that is entirely on the learner's honour when there is nobody in the room. The step now says three rows in five minutes is complete and that a clean result is a finding. For anyone who found nothing, the follow-up question is what a discrepancy would have looked like and whether they would have noticed — that is worth asking in office hours whatever their spot check says."
  - index: 4
    label: "Challenge the interpretation"
    type: "prompt"
    instruction: |
      The arithmetic can be right and the decision still wrong. Low usage is a measurement, and it is consistent with a title being unneeded, badly discovered, newly acquired, mid-migration, taught from a different edition, or serving three people who cannot work without it. Nothing in this file distinguishes those.
    prompt_text: |
      For each pattern you flagged in outputs/usage-analysis.md, give at least two plausible explanations that the data cannot distinguish between. Then list what would be needed before any renewal decision: multi-year trend, cost and cost-per-use, access and licence model, turnaways, interlibrary-loan and document-delivery volume, curriculum and programme relevance, faculty research dependence, embargo or platform changes, and any known change in reporting definitions during the period.

      Mark each item as present in this file, obtainable locally, or requiring someone outside the library. Keep measured facts and hypotheses in separate sections, and append the result to outputs/usage-analysis.md.
    checkpoint: "Low usage is not treated as a cancellation argument, and every item on the decision list is marked for where it would have to come from."
  - index: 5
    label: "Review the analysis"
    type: "observe"
    instruction: "Open outputs/usage-analysis.md and read it as the person who would have to defend it in a collections meeting."
    observe_items:
      - "Every derived number is accompanied by its formula, inputs, and rounding"
      - "The assumption about what each column measures is stated wherever a ratio depends on it"
      - "The undefined ratio is shown as undefined rather than as a number"
      - "Your spot check is in the file, including any row where you found nothing wrong"
      - "Descriptive findings and hypotheses are in separate sections and read differently"
      - "No sentence converts a usage figure into a recommendation about a subscription"
      - "The file says what a decision would need that this data cannot supply"
  - index: 6
    label: "Reflect on data review"
    type: "reflect"
    instruction: "A correct calculation can support a bad decision, and it is more persuasive than a wrong one. The judgment about which titles matter to which programmes is not in this file and cannot be derived from it."
    reflection_prompt: "Which part of this analysis needed subject or curriculum expertise rather than arithmetic, and who in your library would have to sign off on it?"
---

## Analyze Data Without Hiding Assumptions

Claude can compute on a spreadsheet in the connected folder and write the result back as a file. That
is genuinely useful, and it is useful on exactly one condition: the file shows the formulas and you
have independently reproduced some of them. Analysis you cannot check is not analysis, however
cleanly it is formatted.

Two things are outside the file and stay outside it. The first is what the columns mean — the headers
here are reporting-standard identifiers, and any ratio you build depends on an account of the metrics
that has to come from the platform's documentation rather than from the data. The second is the
decision. Usage data describes what was retrieved in one period on one platform. It does not know
about cost, licence terms, turnaways, interlibrary loan, a course that runs every other year, or the
one researcher whose work depends on the title with three requests.

So this exercise stops short of a recommendation on purpose. The deliverable is a defensible
description with its assumptions on the surface and a list of what a decision would still require.
Handing that to a collections group is a stronger contribution than handing them a ranked
cancellation list built from a single year of one report.

## Archives track

The lesson transfers exactly. A digitization batch looks like a countable thing, and a completion
rate looks like a fact about progress. Both depend on an account of what the columns hold and of what
belongs in the batch at all — and that account has to come from somewhere other than the spreadsheet.

Open `sample-data/archives/digitization-inventory.csv` yourself first, and before you prompt anything,
write down on paper or in a scratch note two things: how many items you think are in the batch, and
what you think "complete" means in the transcription column. Both of those are assumptions, and this
exercise is about the difference between an assumption you have written down and one you have not.

Then ask for a description of the file with nothing computed:

```cowork-prompt
Read sample-data/archives/digitization-inventory.csv from the connected folder. Report the row count, the column names, every distinct value in each of the date, condition, rights, access, and transcription columns, and any empty fields. Then state explicitly which column identifies an item, how a count of the items in this batch would be derived from the file, and what you are assuming the transcription status column measures — on what basis, and what would have to be checked to confirm it. Do not calculate anything and do not normalize any value.
```

Compare what came back with what you wrote down. Where the two differ, nothing in the file can settle
it — not for you and not for anyone else who opens it — and that is exactly what makes it an
assumption to be verified rather than a fact to be used.

Now the arithmetic, into a file, with every derivation shown:

```cowork-prompt
Analyze sample-data/archives/digitization-inventory.csv and write the analysis to outputs/archives-digitization-analysis.md in the connected folder. Show the formula, the inputs, the denominator, and the rounding for every figure: the transcription completion rate, stated together with the denominator it was computed on and why that is the right count of the batch; the distribution of rights statements; the number of items whose recorded condition or format raises a handling question; and, row by row, what each rights statement rests on in that row's own notes. Label every figure with the assumption it depends on, in the same line as the number. Flag every row where a figure cannot be computed rather than computing it anyway. Add three data-quality cautions specific to this file. Do not recommend digitizing, publishing, or taking anything down.
```

**Now check the arithmetic yourself.** Pick at least three figures, including the completion rate, and
recalculate them independently — a calculator, a phone, or a spreadsheet of your own. For the
completion rate, derive the denominator from the file rather than accepting the one you were handed.
Do not ask Claude to check its own work; that produces a second answer, not an independent check.

When you have your own figures, dictate the result rather than accepting a recomputation:

```cowork-prompt
Add a section called "Spot check" to outputs/archives-digitization-analysis.md, recording exactly what I dictate below and nothing else. For each figure I checked: my value, the file's value, the difference, and where they differ, the cause I identified. Do not recompute anything, do not correct my figures, and do not add rows I did not give you. Then append one line to outputs/session-log.md naming what I checked and what I found.
```

If you found no discrepancies, dictate that. "No discrepancies" is a finding and it belongs in the file.

Then challenge the interpretation, because the arithmetic can be right and the decision still wrong:

```cowork-prompt
For each pattern flagged in outputs/archives-digitization-analysis.md, give at least two plausible explanations that this data cannot distinguish between. Then list what would be needed before any publication decision: a signed deed of gift, a documented rights search, a conservation assessment, a curatorial review of the description, provenance for items with no accession record, and a route for taking material down together with who may authorize it. Mark each item as present in this file, obtainable locally, or requiring someone outside the archives. Keep measured facts and hypotheses in separate sections, and append the result to outputs/archives-digitization-analysis.md.
```

## Discussion

- Which calculated pattern was easiest to overinterpret, and what made it tempting?
- Did your spot check disagree with the file, and what was the cause?
- What did you assume the two numeric columns measured before you asked, and how would you settle it
  for real?
- What would make this analysis decision-ready, and who would have to supply it?
- When should this work move out of an AI tool and into a spreadsheet or a statistical tool
  altogether?
