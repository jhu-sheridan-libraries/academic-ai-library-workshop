---
id: "03-collection-dev"
title: "Evidence Synthesis & Data"
tagline: "Synthesize evidence and analyze data without hiding gaps"
icon: "chart-bar"
estimated_minutes: 70
role_tags: ["assessment", "data"]
exercises:
  - id: "01-orient"
    title: "Bound the Evidence and Test the Edge"
    estimated_minutes: 15
  - id: "02-selection"
    title: "Adapt the Rubric, Then Build the Matrix"
    estimated_minutes: 20
  - id: "03-evaluate"
    title: "Synthesize Disagreement and Gaps"
    estimated_minutes: 15
  - id: "04-usage-analysis"
    title: "Analyze Data Without Hiding Assumptions"
    estimated_minutes: 20
---

## About This Module

An agent with a connected folder can compare documents, build a matrix, and compute on a
spreadsheet - and it will do all three fluently. But synthesis still fails in two predictable ways:
a gap in the evidence gets filled with something the evidence never said, or a clean narrative
smooths over the disagreements that made the evidence worth reading.

This module works from a deliberately incomplete evidence log and a single year of usage data. The
files are small enough to hold in your head, so you can tell when the agent's description of them is
wrong. Everything you produce is saved as a file, so the analysis can be audited row by row by
someone who was not part of the conversation.

If you audited the research scan in Module 2, you have already encountered these records from a
different angle. That experience carries forward here.

## What You'll Learn

- How to keep an analysis grounded in the supplied evidence, and how to test where the agent goes beyond it
- How to use one boundary test to judge how much of the rest of an output you can trust
- How to build a claim-evidence matrix with consistent verification statuses throughout
- How to distinguish direct evidence of use from indirect measures like page views or downloads
- How to preserve disagreement, variation, and missing perspectives in a synthesis
- How to require that data analyses show their formulas and assumptions, and how to spot-check the math yourself
- Why an accurate description of what the data shows is more useful than a recommendation the data cannot support

## Skills in This Module

You will **modify** a skill. The `review-ai-research-output` skill you used in Module 2 contains a
short controlled vocabulary of verification statuses. In the second exercise you extract those
statuses, trim them to language your team would actually use, add the categories this evidence log
needs, and save the result as a file in the connected folder. Everything after that builds on your
version rather than the original.

The point is how little effort this takes. A skill is Markdown - headings, lists, and definitions in
plain sentences - and adapting one requires only a text editor and a sense of how your colleagues
talk. In Module 4 you will write one from scratch, and this exercise makes that feel like a small step
rather than a blank page.

## Archives track

Archives staff work the same three problems - bounded evidence, a synthesis that keeps its
disagreements, and arithmetic with its assumptions on the surface. The fixtures are
`sample-data/archives/accession-note.txt` throughout, with
`sample-data/archives/finding-aid-draft.md` for the boundary test,
`sample-data/archives/collection-request.txt` for the demand side of the priority ranking, and
`sample-data/archives/digitization-inventory.csv` for the arithmetic. You will appraise the accession
note one body of material at a time, separating what it establishes from what it leaves open, and build
a processing plan that stays defensible without pretending the open questions are settled. You will
count the digitization inventory, compute on it with every formula and denominator shown, and reproduce
some of that arithmetic yourself with a calculator - the one check nobody can delegate.

Your outputs are `outputs/archives-description-standard.md` (the rubric you edit yourself),
`outputs/archives-evidence-matrix.xlsx`, `outputs/archives-processing-plan.md`, and
`outputs/archives-digitization-analysis.md`, plus entries appended to `outputs/session-log.md`. Follow
the **Archives track** card under the steps in each exercise; each one runs on its own without the
numbered steps. Mark the numbered steps complete as you go anyway - that is how the site records your
progress and offers you the next exercise.

## Before You Begin

Open your workshop project, with the workshop folder attached. `sample-data/evidence-notes.csv` and
`sample-data/usage-report.csv` are already there - there is nothing to upload. Both are simulated
workshop data. You should also have `outputs/session-log.md` from Module 1, since you will append to
it here.

Self-paced, as in Module 1. Two steps here are checks nobody else can do for you - recalculating rows
by hand, and editing the rubric yourself - and both say how long they should take. A clean result on
either is a finding, not a wasted step.

Working on a different agentic desktop? See `docs/OTHER-PLATFORMS.md`.
