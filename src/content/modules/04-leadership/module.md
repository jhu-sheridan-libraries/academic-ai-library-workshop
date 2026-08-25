---
id: "04-leadership"
title: "Compose a Skill of Your Own"
tagline: "Package your workflow into a reusable AI skill"
icon: "briefcase"
estimated_minutes: 76
role_tags: ["instruction", "research_support"]
exercises:
  - id: "01-orient"
    title: "Design the Workflow You Will Build Into a Skill"
    estimated_minutes: 18
  - id: "02-strategic-plan"
    title: "Translate and Test Search Syntax"
    estimated_minutes: 16
  - id: "03-assessment-narrative"
    title: "Teach Critical AI Research Use"
    estimated_minutes: 14
  - id: "04-budget-brief"
    title: "Write, Save, and Test Your Skill"
    estimated_minutes: 28
---

## About This Module

Research support becomes defensible when another librarian can see what was supplied, what was
searched, which decisions were made, what AI contributed, and what a human verified. Over three
modules you have produced that record as files. This module turns it into something reusable.

The first exercise writes your workflow down properly — every stage, its inputs and outputs, the
decisions no tool may make, and the conditions that stop the work. The middle two exercises harden
two stages of it against the ways they actually fail: untested database syntax, and source documents
that carry instructions aimed at the assistant rather than at you. The last exercise is the
capstone, and it is the reason this course exists.

## What You'll Learn

- How to define an AI-assisted workflow with review points, stop conditions, and a non-AI path
- How to translate search logic and then verify it against the platform's own documentation rather than trusting a draft
- How to teach patrons about source boundaries, citation checks, and instructions hidden in documents
- How to package methods, limitations, disclosure, and verification into a handoff a colleague can use
- How to write a skill, save it, test whether it triggers, and fix its description when it does not

## Skills in This Module

You will **compose** a skill. This is the capstone and the headline objective of the course: by the
end of the last exercise you will have written a working skill of your own, saved it so Claude loads
it without being asked, and confirmed by testing that it actually triggers.

Nothing in that requires programming. A skill is a Markdown file with a few lines of frontmatter at
the top — a `name` and a `description` — followed by instructions written in ordinary prose. You have
already met the format three times: you **used** a skill in Module 1, **read** one critically in
Module 2, and **modified** one in Module 3. Module 4 asks you to write one from your own workflow.

The part that decides whether a skill works is the `description`, and it is the part most often
written badly. You will write it, test it against a plainly worded request, and revise it when it
fails to fire.

## Archives track

Archives staff compose a skill for their own workflow rather than for the research handoff. In the
first exercise you choose one of two — description remediation review, or digitization rights triage —
and write it to `outputs/archives-workflow.md`, working from `outputs/archives-request-brief.md` and
`sample-data/archives/accession-note.txt`; in the last you turn that file into a working skill, saved as
`outputs/description-remediation-review/SKILL.md` and its `.skill` package, or
`outputs/digitization-rights-triage/` if that is the one you chose. You install it, test whether it
triggers, and fix the description when it does not. The capstone is the same capstone. Only the workflow
differs.

Along the way, where the research track checks search syntax against the supplied platform
documentation, you check the access points in `outputs/archives-access-points.xlsx` against the supplied
authority file and thesaurus in `sample-data/mock-database/`, doing that comparison yourself and
recording what you find in `outputs/archives-authority-check-log.xlsx`. You write the mini-lesson for
your own audience (`outputs/archives-mini-lesson.md`) from the shared
`sample-data/harvested-source-page.md`, and the final handoff is
`outputs/archives-handoff-package.md`. Nothing here needs a login or a live lookup. Follow the
**Archives track** card under the steps in each exercise; each one runs on its own without the numbered
steps. Mark the numbered steps complete as you go anyway — that is how the site records your progress
and offers you the next exercise.

## Practice Baseline

ACRL's 2025 competencies emphasize ethical consideration, technical understanding, critical
evaluation, and responsible application. ALA's June 2026 guidance adds data minimization, meaningful
human review, clear disclosure, and a human or non-AI path. Those principles define completion.

Self-paced, as in Module 1, with one thing worth knowing before you start the capstone: about half of
the people who write a skill find it does not load the first time they test it. That is the exercise
working, not you failing, and the step that follows it is the most useful five minutes in the course.
Leaving with a skill that triggers unreliably and a clear idea of why is a complete result.

Working on a different agentic desktop? See `docs/OTHER-PLATFORMS.md`.
