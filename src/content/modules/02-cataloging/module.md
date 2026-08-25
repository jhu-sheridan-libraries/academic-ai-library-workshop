---
id: "02-cataloging"
title: "Audit an AI Research Scan"
tagline: "Verify an AI-generated research report before sharing it"
icon: "tag"
estimated_minutes: 70
role_tags: ["research_support", "liaison"]
exercises:
  - id: "01-orient"
    title: "Open the Scan and Size the Task"
    estimated_minutes: 15
  - id: "02-marc-record"
    title: "Reconstruct the Research Plan"
    estimated_minutes: 15
  - id: "03-subject-headings"
    title: "Inventory the Sources Yourself"
    estimated_minutes: 20
  - id: "04-abstract"
    title: "Build a Claim Ledger, Then Read the Skill"
    estimated_minutes: 20
---

## About This Module

Your connected folder contains `sample-data/research-scan-draft.md` - a simulated AI research scan
produced for the same faculty request you worked from in Module 1. The agent ran autonomously: eleven
sources, six searches, one polished report in under eight minutes. No librarian has checked it.

This module audits that file. You will not run a search of your own; you will do the verification
work that arrives after someone else's search - the kind most likely to land on a librarian's desk
with no time attached. By the end you will have a source inventory and a claim ledger, and you will
be able to say whether any of this report can be shared with the person who asked for it.

The scan contains deliberate errors. Finding them is the exercise, so read the scan before you read
anything about it.

## What You'll Learn

- How to choose between quick manual checks and a full autonomous run, and when more automation is not better
- How to reconstruct and critique the research plan behind a finished report
- How to evaluate each source on its own terms before judging whether it supports the claim attached to it
- How to record verification levels honestly, including for sources you could not access
- How to build a claim ledger that keeps "not yet checked" clearly distinct from "supported"
- How to spot what a report omits - unused sources, erased disagreement, and missing limitations

## Skills in This Module

You will **read** a skill. In Module 1 you used one; here you run the `review-ai-research-output`
skill over the scan, compare its findings with your own, and then open its instructions and read
them as a document. Look for the places where it deliberately stops - where it refuses to draw a
conclusion, keeps something marked as unchecked, or hands the decision back to a named person.
That built-in restraint is worth studying, because in Module 4 you will write similar guardrails
yourself.

## Archives track

Archives staff audit a different artifact and learn the same thing. Your objects are
`sample-data/archives/finding-aid-draft.md` - a legacy finding aid retyped for the web - and
`sample-data/archives/digitization-inventory.csv`, item metadata for a digitization batch. Neither has
been checked, and both assert a great deal.

The parallel is exact and worth stating plainly at the start: **unverified description asserted with
confidence is the same failure mode as an unverified citation.** A scope note, a date range, an extent,
a restriction, a rights statement, and a creator attribution are all claims. A finding aid states them
all in one flat voice, and so does the scan's source table - one register for claims that were checked
to very different depths. You will build `outputs/archives-description-inventory.xlsx` and
`outputs/archives-description-ledger.xlsx`, reading both against
`sample-data/archives/accession-note.txt`, the repository's own record of related material, and
appending your working notes to the shared `outputs/session-log.md`. The second exercise also reads
the access point workbook you built in Module 1, `outputs/archives-access-points.xlsx`.

Open the **Archives track** card under the steps in each exercise and work it top to bottom instead of
the numbered steps. The numbered steps stay on the research scan; the card is a complete alternative,
with a prompt for every file it produces and the checks it expects you to make yourself. Mark the
numbered steps complete as you go anyway - that is how the site records your progress and offers you
the next exercise.

Self-paced, as in Module 1: each step names its own time budget and what counts as enough, several
steps are designed to come back empty, and the closing question of each exercise is the one to save
for office hours if you want a second opinion on it.

Working on a different agentic desktop? See `docs/OTHER-PLATFORMS.md`.
