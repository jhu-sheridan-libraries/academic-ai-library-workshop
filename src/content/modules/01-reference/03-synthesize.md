---
id: "03-synthesize"
title: "Build a Search Concept Map"
estimated_minutes: 15
discovery_moment: false
steps:
  - index: 0
    label: "Draft concepts and synonyms"
    type: "prompt"
    instruction: |
      Build on the brief you wrote, and keep the map as a spreadsheet you can hand to a colleague.

      The verification status column stays empty for now. You fill it in yourself in Module 4, when you check each candidate term against the platform's thesaurus — so leaving it blank is the point rather than an omission.
    prompt_text: |
      Read outputs/research-brief.md. Build a search concept map and write it to outputs/concept-map.xlsx in the connected folder, one row per concept. Cover at least:
      - open-access publishing,
      - public-health research,
      - research reach or use.

      Columns: concept, keywords, spelling and regional variants, candidate controlled vocabulary, verification status. Label every controlled term "candidate — verify in the database thesaurus" and leave verification status blank for me to fill in. Do not write database syntax yet.
    checkpoint: "outputs/concept-map.xlsx exists, separates concepts by row, and does not present candidate subject terms as verified headings."
    facilitator_note: "A spreadsheet rather than a chat table is deliberate: Module 4 adds tested syntax, result counts, and thesaurus findings to this same file. A learner who produces Markdown instead has not done anything wrong but will retype it in Module 4 — cheap to mention in a cohort message, awkward to discover on their own at the end of the day."
  - index: 1
    label: "Map ambiguous outcomes"
    type: "prompt"
    instruction: "Prevent the search from collapsing distinct ideas into one metric."
    prompt_text: |
      Split "reach or use" into distinct outcome families: scholarly attention, public attention, policy use, practitioner access, and practical uptake. For each family, suggest observable indicators and one warning about what the indicator cannot prove.

      Add these as a second sheet in outputs/concept-map.xlsx named "Outcome families."
    checkpoint: "The workbook has a second sheet, and it notes for example that downloads do not prove reading or application."
    facilitator_note: "These five families recur in Modules 2 and 3, and the distinction drawn here is what makes a later failure visible at all. A learner who skips this sheet will get through Module 2 exercise 2 without noticing anything — so if someone reports that the scan looked fine, check whether they built this sheet before concluding anything about their reading."
  - index: 2
    label: "Choose source types"
    type: "prompt"
    instruction: "Ask for a source plan, not a list of invented subscriptions."
    prompt_text: |
      Recommend a source plan using categories rather than assuming our subscriptions. Include:
      1. two subject-database categories,
      2. one citation or bibliometric source category,
      3. one policy or gray-literature source category,
      4. one repository or open-discovery route.

      Explain what each contributes and what it may miss. Mark local access as "verify." Add this as a third sheet named "Source plan."
    checkpoint: "Each source category has a purpose and a stated limitation, saved in the workbook."
  - index: 3
    label: "Check the concept map"
    type: "observe"
    instruction: "Open outputs/concept-map.xlsx yourself and review it before translating anything into database syntax."
    observe_items:
      - "Synonyms are grouped by concept rather than placed in one long query"
      - "Controlled vocabulary is labeled for database-specific verification"
      - "Outcome indicators are not treated as interchangeable"
      - "The plan includes gray literature and open discovery"
  - index: 4
    label: "Reflect on search design"
    type: "reflect"
    instruction: "A polished AI query can still be conceptually weak."
    reflection_prompt: "Which concept would you test first in a real database, and what would make you revise it?"
  - index: 5
    label: "One question to take further"
    type: "reflect"
    instruction: "The question this exercise raises and cannot answer. Write it down here if you want it recorded, or save it for office hours — a vocabulary question is one of the better things to bring to someone else."
    reflection_prompt: "Which of the terms in your map reflect dominant scholarly language, and whose perspective is missing from the vocabulary you were handed?"
---

## Build a Search Concept Map

AI is useful for expanding vocabulary, but search quality depends on concept boundaries and
database-specific verification. Build the map first; translate it into each database's syntax later.

The map is a spreadsheet rather than a chat response because it is not finished. You will add tested
syntax, result counts, and revisions to it in Module 4, and a colleague reproducing your search will
read this file rather than your conversation.

## Archives track

The concept is identical: build the conceptual map before you touch any system's syntax, and keep
candidate vocabulary labeled as candidate. What changes is that archival access points are not only
subject terms. They are creators, corporate bodies, functions, places, formats, and dates, and a
researcher who asks by subject has to be answered through whichever of those the description
actually supports.

Build the access point map first:

```cowork-prompt
Read outputs/archives-request-brief.md, sample-data/archives/finding-aid-draft.md, and sample-data/archives/accession-note.txt. Build an access point map and write it to outputs/archives-access-points.xlsx in the connected folder, one row per access point. Columns: access point; type (person, corporate body, place, subject, function, format, date); which of the three source files supports it and in what words; candidate authorized form; verification status. Label every authorized form "candidate — verify in the authority file" and leave verification status blank for me to fill in. Do not supply an authority record identifier for anything.
```

Next, split the subject into the units the inquiry cannot distinguish between:

```cowork-prompt
Add a sheet named "Candidate units" to outputs/archives-access-points.xlsx listing every unit of description the inquiry could mean. For each, give: the creator, the state of processing, what it would show that the others would not, what it cannot show, and one warning about treating it as equivalent to the others.
```

Then plan the discovery route. An archival question is not answered out of database categories; it is
answered out of the finding aid, the accession record, the authority file, the item-level photographic
inventory, and sources that sit outside the repository altogether.

```cowork-prompt
Add a sheet named "Discovery plan" to outputs/archives-access-points.xlsx. One row per place a researcher's question could be answered from: the finding aid, the accession record, the authority file, the item-level photographic inventory, and sources outside this repository. For each, state what it can establish, what it cannot establish, and what would have to be checked before anyone relies on it. Mark every access condition and rights position as "verify".
```

Finally, open `outputs/archives-access-points.xlsx` yourself and read all three sheets before any of
it drives a search. Check that access points are grouped by type rather than run together, that every
authorized form is still labeled for verification, that the candidate units are not presented as
interchangeable, and that nothing in the workbook states an access condition or a rights position as
settled. Module 4 adds tested authority forms to this same workbook.

## Discussion

- Where did the tool suggest too many synonyms?
- Which terms reflect dominant scholarly language, and which perspectives may be missing?
- How would you document changes after a pilot search?
