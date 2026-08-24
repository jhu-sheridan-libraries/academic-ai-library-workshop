---
id: "04-leadership"
title: "Compose a Skill of Your Own"
tagline: "Turn the day's workflow into something a colleague can load and run"
icon: "briefcase"
estimated_minutes: 76
role_tags: ["research_support", "systematic_review", "instruction", "scholarly_communication", "archives"]
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
and write it to `outputs/archives-workflow.md`; in the last you turn that file into a working skill,
install it, and test whether it triggers. The capstone is the same capstone. Only the workflow differs.

Along the way, where the research track checks search syntax against the supplied platform
documentation, you check access points against the supplied authority file in
`sample-data/mock-database/`, recording what you find in
`outputs/archives-authority-check-log.xlsx`. You write the mini-lesson for your own audience
(`outputs/archives-mini-lesson.md`), and the final handoff is
`outputs/archives-handoff-package.md`. Nothing here needs a login or a live lookup. Follow the
`## Archives track` section in each exercise.

## Practice Baseline

ACRL's 2025 competencies emphasize ethical consideration, technical understanding, critical
evaluation, and responsible application. ALA's June 2026 guidance adds data minimization, meaningful
human review, clear disclosure, and a human or non-AI path. Those principles define completion.

Working on a different agentic desktop? See `docs/OTHER-PLATFORMS.md`.
