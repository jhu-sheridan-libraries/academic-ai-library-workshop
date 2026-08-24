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
    facilitator_note: "Most learners will read the headers as self-explanatory. Do not correct them — the next step is designed so the assumption gets stated out loud and becomes checkable. If someone already knows the standard, ask them to hold it until step 1 lands."
  - index: 1
    label: "Profile the data and surface the assumptions"
    type: "prompt"
    instruction: "Description before arithmetic. Ask what is in the file and what has been assumed about it, with nothing computed yet."
    prompt_text: |
      Read sample-data/usage-report.csv from the connected folder. Report the row count, the column names, the range of each numeric column, the reporting period, and any zero, missing, or unusual values.

      Then state explicitly what you are assuming each numeric column measures, on what basis, and what would have to be checked to confirm it. If a column name is a report identifier rather than a metric description, say so.

      Do not calculate anything yet, and do not compare titles.
    checkpoint: "The profile names the zero value and the extreme values, and states the column-meaning assumptions as assumptions rather than as facts."
    facilitator_note: "Compare the stated assumption with what learners wrote in step 0. Where the two differ, the disagreement is the lesson: nobody in the room can settle it from the file, which is what makes it an assumption to verify against platform documentation."
  - index: 2
    label: "Require formulas with every number"
    type: "prompt"
    instruction: "Now the arithmetic, into a file, with every derivation shown. A number without its formula cannot be checked, and a number nobody checks is not evidence."
    prompt_text: |
      Analyze sample-data/usage-report.csv and write the analysis to outputs/usage-analysis.md in the connected folder.

      Show the formula, the inputs, the denominator, and the rounding for every derived metric. Identify the three highest and three lowest titles on each numeric column, compute the ratio between the two numeric columns for every title, and flag every row where a denominator is zero or a ratio is undefined.

      Label the ratio with the assumption it depends on, in the same line as the number. Add three data-quality cautions specific to this file. Do not recommend cancelling, retaining, or renewing anything.
    checkpoint: "outputs/usage-analysis.md shows a formula for every derived figure, handles the undefined case explicitly rather than printing a number, and contains no collection recommendation."
    facilitator_note: "Watch for a zero denominator silently rendered as 0, blank, or omitted from the table. Any of the three is worth stopping on, because it is the failure a reader cannot see."
  - index: 3
    label: "Recalculate three rows yourself"
    type: "workspace"
    instruction: |
      Pick at least three titles and recalculate their ratios independently — a calculator, a phone, or a spreadsheet of your own. Include the row with a zero and the row with the most extreme values. Do not ask Claude to check its own work; that is not an independent check.

      Compare your figures with the file. Then open `outputs/usage-analysis.md` and add a section called `Spot check` in your own words, recording for each row you checked: your value, the file's value, the difference, and — where they differ — whether the cause was rounding, a divide-by-zero, a column selection error, or something else.

      Append one line to `outputs/session-log.md` naming what you checked and what you found, including "no discrepancies" if that is the honest answer.
    checkpoint: "At least three rows including the zero and the extreme have been recalculated by you, and the result is written into both files."
    facilitator_note: "This is the step with the highest dropout and the highest value; hold the room to it. A clean result is a real finding and should be recorded as one. If nobody found anything, ask what a discrepancy would have looked like and whether they would have noticed it."
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

Open `sample-data/archives/digitization-inventory.csv` yourself first, as step 0 asks, and write down
before you prompt anything: how many items you think are in the batch, and what you think "complete"
means in the transcription column. Both of those are the assumptions this exercise is about.

Then substitute this for step 1: `Read sample-data/archives/digitization-inventory.csv from the connected folder. Report the row count, the column names, every distinct value in each of the date, condition, rights, access, and transcription columns, and any empty fields. Then state explicitly which column identifies an item, how a count of the items in this batch would be derived from the file, and what you are assuming the transcription status column measures — on what basis, and what would have to be checked to confirm it. Do not calculate anything and do not normalize any value.`

For step 2, write the analysis to `outputs/archives-digitization-analysis.md`, showing the formula,
the inputs, and the denominator for every figure: the completion rate, stated together with the
denominator it was computed on and why that is the right count of the batch; the distribution of
rights statements; the number of items whose recorded condition or format raises a handling question;
and, row by row, what each rights statement rests on in that row's own notes. Flag every row where a
figure cannot be computed rather than computing it anyway. Do not recommend digitizing, publishing, or
taking down anything.

Then recalculate at least three figures yourself, as step 3 requires, including the completion rate —
derive its denominator from the file rather than accepting the one you were handed. Add a `Spot check`
section in your own words.

Step 4 transfers with one substitution: for each pattern you flagged, give at least two explanations
the data cannot distinguish between, then list what would be needed before any publication decision —
a signed deed, a documented rights search, a conservation assessment, a curatorial review of the
description, provenance for items with no accession record, and a decision by someone with authority
to take material down. Mark each as present in this file, obtainable locally, or requiring someone
outside the archives.

## Discussion

- Which calculated pattern was easiest to overinterpret, and what made it tempting?
- Did anyone's spot check disagree with the file, and what was the cause?
- What did your group assume the two numeric columns measured, and how would you settle it?
- What would make this analysis decision-ready, and who would have to supply it?
- When should this work move out of an AI tool and into a spreadsheet or a statistical tool
  altogether?
