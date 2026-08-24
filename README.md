# Agents and Skills with Claude — A Walkthrough

A self-paced workshop for library staff on what an agentic desktop can actually do for research
support and archives work, and how to build one of your own tools for it. No programming experience
is required, and you will not write code.

## Who this is for

Reference and liaison librarians, research support staff, archivists, catalogers, and anyone in a
library who has been told they should be doing something with AI and would like a clear-eyed look at
what that would mean for their own work. The exercises run on two tracks. The default track follows
a faculty research request through scoping, searching, verification, and handoff. The archives
track teaches the same material on archival description, finding aids, and digitization workflows —
you will find it in each exercise under a heading of its own, so you can switch at any point.

You need to be able to read critically and notice when something is wrong. That is the actual
prerequisite, and you already have it.

## What you will be able to do afterward

Two things, stated plainly.

**You will understand what an agentic desktop can do.** Not in the abstract — you will have watched
one read a folder of files, propose changes, wait for your approval, and write finished documents
you can open in Word and Excel afterward. You will know how that differs from pasting text into a
chat window, where it helps, and where it quietly fails. You will have seen it produce confident,
well-formatted work that was wrong, and you will have caught it.

**You will have composed a custom Skill.** A skill is a reusable set of instructions the tool loads
by itself when it recognizes the kind of task you are describing. By the end you will have written
one, saved it, and tested it. It will be small and it will be yours — a workflow you already do,
written down well enough that a colleague could load it and get your judgment rather than the
tool's defaults. Building it is the capstone of the course, in Module 4, and the first three modules
are arranged so that you arrive at it having already used, read, and modified skills rather than
meeting the format cold.

Modest claims deliberately. You will not become an expert, you will not automate your job, and
nothing here will make you faster at anything on the first try. What you will have is a working
mental model and one artifact you built.

## Learning objectives

By the end of the course you should be able to:

1. Scope a connected folder deliberately, state what an agent can and cannot reach, and read a
   proposed action before approving it.
2. Use an agent to structure a research or reference request without handing over the professional
   judgment in it.
3. Separate a source's identity from its fit to the claim attached to it, and record what you
   checked, what you could not reach, and what remains unverified.
4. Build a claim ledger or evidence matrix in which "not checked" never drifts into "supported."
5. Require formulas, denominators, and stated assumptions in a data analysis, and spot-check the
   arithmetic yourself.
6. Recognise instructions hidden in a document or a retrieved page, and explain why a credible
   source is not therefore a safe one.
7. Define an AI-assisted workflow with review points, stop conditions, and a working non-AI path.
8. Compose a Skill of your own: write it, save it, test whether it triggers, and fix its description
   when it does not.
9. Decide where AI assistance belongs in your own practice, and defend limiting or refusing it.

Per module, in the order you meet them:

- **Module 1 — Connect, Scope, and Ask.** What a connected folder grants; checking the data boundary;
  supporting rather than replacing the reference interview; separating concepts from controlled
  vocabulary; disclosing AI assistance. You *use* a skill.
- **Module 2 — Audit an AI Research Scan.** Choosing the right amount of machinery for a task;
  reconstructing the plan behind a finished report; source identity versus claim fit; honest
  verification levels; reading what a report leaves out. You *read* a skill critically.
- **Module 3 — Evidence Synthesis and Data.** Keeping analysis inside supplied evidence and testing
  where that boundary sits; verification statuses that mean one thing throughout; direct evidence
  versus proxies for attention and access; preserving disagreement; transparent calculation. You
  *modify* a skill.
- **Module 4 — Compose a Skill of Your Own.** Workflow design with stop conditions; verifying search
  syntax against documentation rather than trusting a draft; teaching critical use to patrons;
  packaging a defensible handoff; and the capstone — writing, saving, and testing your own Skill.
  You *compose* a skill.

Each module page repeats its own objectives, so you do not need to hold this list in your head.

## What it costs you

Four modules, four short exercises each, and every exercise ends with a file on your disk. Stop
whenever you like and pick it up later — your work is saved as ordinary files in a folder, so there
is nothing to lose by closing the application in the middle. Doing one module a week is a perfectly
sensible way to take this.

On time, honestly: the full course runs about four and three-quarter hours if you do every exercise,
which is longer than the two-to-four hours advertised. The estimate printed on each module is
realistic, so you can plan from it.

If you have less time, there is a shorter path of roughly two hours and twenty minutes that keeps
the spine of the course and still ends with you writing a Skill: Module 1 exercises 1 and 2, Module 2
exercises 3 and 4, Module 3 exercise 2, then Module 4 exercises 1 and 4. Spend five minutes reading
`sample-data/research-scan-draft.md` before you start Module 2 exercise 3, since you will be
auditing a file you skipped the introduction to. What you give up is most of the practice — the
concept mapping, the synthesis, the arithmetic checking, and the prompt-injection lesson in Module 4
exercise 3, which is the one omission worth coming back for.

Whatever you do, do not skip Module 4 exercise 4. That is the capstone and the reason the rest of
the course exists.

## What you need

- **An agentic desktop.** The course is written for Claude Desktop with Cowork, which requires a
  paid Claude plan (Pro, Max, Team, or Enterprise). Cowork is the part of the application that reads
  and writes files in a folder you choose, and it is where the exercises take place. If you are on
  another agentic platform such as ChatGPT Codex or Kiro, read `docs/OTHER-PLATFORMS.md` before you
  start; most of the course transfers, and that file says honestly which parts do not.
- **The workshop folder**, which your facilitator will send you. It holds the workspace brief, the
  simulated data the exercises use, and it is where your own output lands.
- **Two practice skills**, sent as separate files. They run two of the exercises for you, and they
  are the worked examples you learn the format from.

`docs/PARTICIPANT-SETUP.md` is the actual installation guide — downloading the application,
connecting to the workshop's account, connecting the folder, and installing the two skills. Set
aside about twenty minutes for it, most of which is waiting on a download. Do not duplicate effort
by trying to piece setup together from this page; go there.

## The walkthrough and office hours

Both are optional. The course is designed to be done alone.

**A one-hour walkthrough on August 26, 2026, 3:00–4:00 pm.** If you do not have access to any of
these tools and are curious what the fuss is about, this is the right place to start. You will see
the thing working without having to install, license, or configure anything, and you can decide
afterward whether it is worth your two to four hours. Come with no setup and no preparation.

**Office hours on Fridays, 2:30–3:15 pm, through September 4, 2026.** Bring a stuck exercise, a
setup problem, a skill that will not trigger, or an argument about whether any of this belongs in a
library. All four are welcome.

Instructor: Steven Miklovic.

## The four modules

**1. Connect, Scope, and Ask.** You connect the folder and find out exactly what the tool can and
cannot reach, watch it propose a change to a file and read that proposal before approving it, then
turn a vague faculty request into a research brief and a search concept map. You finish by drafting a
patron handoff that discloses what AI contributed. This module *uses* a skill: the reference
interview practice skill runs one of the exercises, so you feel what a skill does before you think
about how one is made.

**2. Search & Source Verification.** You audit a simulated AI-generated research scan that has
things wrong with it. You check its claims against the librarian's own evidence log, inventory what
it cited, and build a ledger recording which claims are actually supported, which are not, and which
you could not check. This module asks you to *read* a skill critically — to open the review skill,
see what it checks, and find where its judgment stops and yours has to start.

**3. Evidence Synthesis & Data.** You build a claim-evidence matrix from a deliberately incomplete
evidence log, write a synthesis that preserves disagreement instead of smoothing it into a tidy
narrative, and check arithmetic on a serials usage report rather than trusting it. This module asks
you to *modify* a skill: take a rubric or a brief and adapt it into a local variant that reflects
how your library actually works.

**4. Reproducible Research Support.** You write down the workflow you have been using, test search
syntax instead of assuming it is valid, work through what happens when a retrieved web page contains
instructions aimed at your AI tool, and package a handoff another librarian could audit. Then the
capstone: you *compose* a skill of your own, save it, and test it.

## About the data

Everything in the workshop folder is invented. The faculty request, the evidence log, the usage
report, the draft research scan, the retrieved web page — all simulated, written for teaching, with
deliberate flaws in places so the lessons fire reliably.

**Do not put real patron data into these exercises.** No reference transcripts, no circulation or
reading history, no student records, no health information, no unpublished manuscripts, no
credentials, no licensed full text. The exercises are built so you never need to. When you want to
work with material of your own, use something genuinely public. A connected folder grants standing
read and write access to everything inside it, including files you forgot were there, which is
exactly why the first exercise makes you look.

## Deciding to use less of this, or none of it

Finishing the course and concluding that agentic AI does not belong in some part of your work is a
legitimate professional outcome and the course treats it as one. So is deciding it belongs in a
narrow slice and nowhere else, or that it belongs only where a colleague reviews the output, or that
your institution needs a policy before you touch it with anything real.

None of that is failure or a sign you did the exercises wrong. The reflection questions have no
right answers and the course does not supply any. A librarian who can explain precisely why they
declined to use a tool for a particular task has learned more than one who used it everywhere
without asking.

The practice baseline for the course comes from the
[ACRL AI Competencies for Academic Library Workers](https://www.ala.org/acrl/standards/ai) and the
[ALA Guidance on the Use of Artificial Intelligence in Libraries](https://www.ala.org/sites/default/files/2026-06/ALA%20CD%2044.2%20AI%20Guidance%20Document%20-%20Final.pdf).
AI output is treated throughout as draft material requiring meaningful human review.

## One honest note

This is a workshop about judgment, not a product tutorial. The specific menus, model names, and
features will have changed by the time you read this — they change monthly, and any course built
around them is stale before it ships. What does not change as fast is the set of questions worth
asking: what can this thing see, what did it actually verify, what is it filling in from memory, who
is accountable for the output, and what should I not hand it at all.

The tool is the occasion. The questions are the course.

---

Facilitating a cohort? See `FACILITATOR.md`.

Running or deploying the app yourself? See `docs/DEPLOYMENT.md`.

Editing the exercises? See `docs/AUTHORING-CONVENTIONS.md`.

## License

Copyright (c) 2026 Steven J. Miklovic. Licensed under the
[Mozilla Public License 2.0](LICENSE).
