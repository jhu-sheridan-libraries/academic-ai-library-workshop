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

The first exercise writes your workflow down properly - every stage, its inputs and outputs, the
decisions only a human should make, and the conditions that stop the work. The middle two exercises
stress-test two common failure points: untested database syntax that silently returns wrong results,
and source documents that contain hidden instructions aimed at the AI rather than at you. The last
exercise is the capstone: you write, save, and test your own skill.

## What You'll Learn

- How to define an AI-assisted workflow with review points, stop conditions, and a non-AI fallback
- How to translate search logic into database syntax and verify it against the platform's own documentation
- How to teach patrons about source boundaries, citation checks, and hidden prompt-injection in documents
- How to package your methods, limitations, disclosure, and verification steps into a handoff a colleague can reuse
- How to write a skill file, save it so the agent loads it automatically, test whether it triggers, and fix its description when it does not

## Skills in This Module

You will **compose** a skill. This is the capstone of the course: by the end of the last exercise
you will have written a working skill, saved it so Claude loads it automatically, and confirmed by
testing that it actually triggers.

Nothing in that requires programming. A skill is a Markdown file with a few lines of frontmatter at
the top - a `name` and a `description` - followed by instructions written in ordinary prose. You have
already met the format three times: you **used** a skill in Module 1, **read** one critically in
Module 2, and **modified** one in Module 3. Module 4 asks you to write one from your own workflow.

The part that determines whether a skill triggers is the `description` field, and it is the part most
often written poorly. You will write it, test it against a plain request, and revise it when it
fails to trigger.

## Archives track

Archives staff compose a skill for their own workflow rather than for the research handoff. In the
first exercise you choose one of two - description remediation review, or digitization rights triage -
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
steps. Mark the numbered steps complete as you go anyway - that is how the site records your progress
and offers you the next exercise.

## Practice Baseline

ACRL's 2025 competencies emphasize ethical consideration, technical understanding, critical
evaluation, and responsible application. ALA's June 2026 guidance adds data minimization, meaningful
human review, clear disclosure, and a non-AI fallback path. Those principles define what "complete"
means here.

Self-paced, as in Module 1. One thing worth knowing before you start the capstone: about half of
participants find their skill does not load the first time they test it. That is expected - diagnosing
why and fixing it is the most useful five minutes in the course. Finishing with a skill that works
reliably, or with a clear understanding of why it does not yet, are both valid outcomes.

Working on a different agentic desktop? See `docs/OTHER-PLATFORMS.md`.
