---
id: "04-budget-brief"
title: "Write, Save, and Test Your Skill"
estimated_minutes: 28
discovery_moment: true
steps:
  - index: 0
    label: "Open a skill you already have"
    type: "workspace"
    instruction: |
      Before writing one, read one. Send Claude the prompt below.

      Look at what arrives. Each is a Markdown file with two lines at the top between two rows of dashes, then ordinary prose headings and numbered instructions. That is the whole format:

      ```
      ---
      name: practice-library-reference-interview
      description: Role-play and debrief a simulated research-library reference interview. Use when a librarian, library student, or workshop participant wants to practice question negotiation, clarify a research request, identify search-changing details...
      ---

      # Practice a Library Reference Interview

      Play a simulated patron while the learner practices the interview...
      ```

      Now read the two `description` lines side by side and notice what they are doing. Neither one describes the steps the skill performs. Both describe the situations in which the skill applies — "use when a librarian... wants to practice question negotiation," "use when a research librarian... asks to inspect a research report, search plan, citation list." They are lists of circumstances, written in the words someone would actually use when they had that problem.

      That is not a stylistic choice. The `description` is the only part Claude reads when deciding whether to load the skill.
    prompt_text: |
      Show me the SKILL.md file for the reference-interview practice skill I installed, exactly as it is written. Then show me the one for the review-ai-research-output skill.
    checkpoint: "You have read both SKILL.md files and can name the two frontmatter fields and say which one determines whether the skill triggers."
    facilitator_note: "Spend real time here — two or three minutes of reading buys back ten minutes of debugging later. The insight to land is descriptions describe situations, not procedures. If anyone asks about YAML, tell them the format is a name and a description between two rows of dashes and move on. Nobody needs the specification."
  - index: 1
    label: "Write your description first"
    type: "workspace"
    instruction: |
      You are going to build a skill out of `outputs/workflow.md` — the workflow you designed in the first exercise. Start with the description, because it is the part that decides whether the skill ever runs.

      Write two or three sentences yourself, in your own words. Answer only this: in what situations should Claude reach for this? Think about how a colleague would phrase the request — "I've got a faculty literature request and I need a search record I can hand over," not "executes a thirteen-stage reproducible research workflow."

      List several situations rather than one. Include the words people actually say: reproducible search, evidence scan, literature request, handoff, search log, methods note.

      Then send Claude the prompt below and paste your draft after it.
    prompt_text: |
      Here is a draft skill description. Does it describe situations someone would find themselves in, or does it describe steps the skill performs? Rewrite it as situations if I have got that wrong, and tell me which realistic requests it would fail to catch.
    checkpoint: "You have a description written in situational language, naming several distinct circumstances, in the vocabulary a colleague would use."
    facilitator_note: "Almost everyone writes a procedure description on the first attempt — 'this skill takes a request and produces a search log.' That is the mistake worth making here rather than at step four. Do not correct it for them; let Claude's rewrite show the difference."
  - index: 2
    label: "Build the skill file"
    type: "prompt"
    instruction: "Now the instructions. Your workflow file already contains them — stages, inputs, outputs, stop conditions. That is what a skill body is."
    prompt_text: |
      Read outputs/workflow.md from the connected folder. Turn it into a skill.

      Write outputs/reproducible-search-handoff/SKILL.md with frontmatter containing exactly two fields, name and description. Use name: reproducible-search-handoff. For description, use the wording I gave you, unchanged — do not improve it.

      Below the frontmatter, write the instructions as prose and numbered steps, addressed to you rather than to me: what to read, what to produce, which file each stage writes, where to stop and ask, and which decisions to hand back to the librarian. Carry across every stop-or-escalate condition and every human-only marking from outputs/workflow.md. Do not soften them.

      Include a final section instructing you to assemble a handoff package, with the sections named in the workflow, marking anything not completed as pending rather than filling it in.

      Then package the folder as outputs/reproducible-search-handoff.skill so I can install it.
    checkpoint: "SKILL.md exists with a name and a description, its body carries your stop conditions and human-only markings intact, and a .skill file has been created."
    facilitator_note: "Two failure modes: the description gets silently rewritten (check it against what they wrote in the previous step), and the stop conditions get diluted into advice. Have them open the file and compare. If the .skill packaging fails, they can still test by asking Claude to treat the SKILL.md as the instructions, but the install path is worth getting working."
  - index: 3
    label: "Install it"
    type: "workspace"
    instruction: |
      Open `outputs/reproducible-search-handoff.skill` — the same way you opened the two skills your facilitator sent you during setup. Claude shows a card for the file with a **Save skill** button.

      Before you click it, read the card. It is telling you what you are about to give standing availability to, and it is your own file, so this is the one time you know exactly what is in it.

      Click **Save skill**. It is now available in every conversation, including ones already open.
    checkpoint: "The skill is saved and appears among your available skills."
    facilitator_note: "If no Save skill button appears, the packaging is wrong rather than the skill. Have Claude repackage. This is the same flow as setup Step 8, so most people will recognise it."
  - index: 4
    label: "Test whether it triggers"
    type: "workspace"
    instruction: |
      A saved skill that never loads is worse than no skill, because you will assume it ran. So test it, and test it the way it will actually be used.

      Start a **fresh conversation**. Not a new message in this one — the context here would help it along and tell you nothing. The link below opens one.

      Then describe the task in ordinary words, as a colleague would, and do not name the skill or the file. The prompt below is written that way.

      Watch what happens. You are looking for two things: whether Claude loaded your skill at all, and whether what it then did resembles your workflow — the same stages, the same files, and crucially the same places where it stops and asks you.
    prompt_text: |
      A faculty member has sent me a literature request and I need to produce a search record I can hand to another librarian.
    checkpoint: "You have run a plainly worded request in a fresh conversation and can say whether the skill loaded and whether its behaviour matched your workflow."
    facilitator_note: "Insist on the fresh conversation; testing in context is the mistake that makes people think a broken skill works. Expect roughly half the room to see it fail to trigger. That is a good outcome and the next step is the most valuable minutes of the course — do not rescue anyone here."
  - index: 5
    label: "Fix the description"
    type: "workspace"
    instruction: |
      If it did not trigger, the problem is almost certainly your description, not your instructions. This is the most common way an authored skill fails, and it fails silently — Claude answers helpfully from general knowledge and nothing tells you the skill sat unused.

      Diagnose it. Send the prompt below — it only has to read your description, so it works in the conversation where the skill failed or in a fresh one.

      Then revise the description in `outputs/reproducible-search-handoff/SKILL.md` — usually by adding the plain vocabulary you actually used and the neighbouring situations you did not think of. Repackage, save the skill again, start another fresh conversation, and test again with *different* wording than last time.

      If it triggered the first time, do not stop. Test it with a request that should *not* match — ask for help finding a book on the shelf — and confirm it stays out of the way. A description broad enough to catch everything is its own failure.
    prompt_text: |
      Read my reproducible-search-handoff skill's description. I asked you for help with a faculty literature request and a search record, and the skill did not load. Which words in my request should have matched, and what is the description missing?
    checkpoint: "You have revised the description and retested in a fresh conversation, and you can name the specific change that fixed the triggering, or confirm the skill correctly stays out of an unrelated request."
    facilitator_note: "The durable lesson of the whole course is here: authoring a skill is a test-and-revise loop, and the description is the part under test. Timebox to about five minutes and accept a skill that triggers unreliably — knowing why is worth more than a working artifact. Ask two or three people to read out the words they had to add."
  - index: 6
    label: "Run it for real"
    type: "prompt"
    instruction: "Now use the thing you built, on the request you have worked all day, and let it produce the handoff."
    prompt_text: |
      Using my reproducible-search-handoff skill, assemble the handoff package for the workshop request and write it to outputs/handoff-package.md.

      Read what we already have: outputs/research-brief.md, outputs/concept-map.xlsx, outputs/search-translation-log.xlsx, outputs/claim-ledger.xlsx, outputs/synthesis.md, and outputs/session-log.md. Use the sections my skill specifies. Mark every section we did not complete as pending and every section that does not apply as not applicable. Do not fill a gap with anything plausible.

      Then add two short pieces at the end:
      1. an AI-use disclosure written for the patron, in plain language, saying which tasks Claude assisted with and which a librarian verified;
      2. a methods note written for another librarian, naming the tool and configuration, the connected folder, which files were supplied, whether external sources were available, and the known limits on reproducing this. Draw on outputs/session-log.md for what actually happened, and use placeholders where we never recorded a value.
    checkpoint: "outputs/handoff-package.md exists, distinguishes completed from pending from not-applicable, and contains both a patron-facing disclosure and an operational methods note."
    facilitator_note: "This is the first time the learner's own skill does work for them, and the moment usually lands. If the skill does not produce all sections, that is diagnostic information about their instructions, not a failure of the exercise — note it and move on rather than repairing the skill."
  - index: 7
    label: "Run the final review gate"
    type: "observe"
    instruction: "Open outputs/handoff-package.md and read it yourself, in full. Nothing in it has been reviewed until you have done this, and the skill you wrote cannot do it for you."
    observe_items:
      - "Every material citation and calculation has a recorded verification status, and nothing unchecked has been recorded as supported"
      - "Search syntax, dates, and result counts are sufficient for another librarian to rerun the search"
      - "No private, licensed, or unpublished content has been carried into the package"
      - "AI assistance is disclosed in a form your local policy would accept"
      - "Limitations, omissions, and unresolved items are visible rather than absent"
      - "A named human owns the final review, and today that is you"
  - index: 8
    label: "Decide what is kept and what is deleted"
    type: "workspace"
    instruction: |
      Close the work deliberately. Two decisions, and both should be conscious rather than default.

      **The files.** The connected folder is on your own disk and everything in `outputs/` is yours to keep. Decide, file by file, which belongs in your institution's designated repository, which is working material to discard, and — for anything you keep — how long it is retained and by whom. Record that decision in `outputs/session-log.md`.

      **The conversation.** Follow your local retention policy. Remove connected-folder access you no longer need. Delete the conversation if the record does not need to remain in the system; otherwise move the approved record to the repository and document the retention period.

      Deleting a local file does not delete a provider-side copy or a log. Use the product's own data controls and your institution's approved procedure, and do not assume the two are the same thing.

      Your skill is a separate decision. It stays installed until you remove it, and it will keep loading on requests that match its description. If you would not want it running on real patron work in its current state, remove it now and rebuild it when you would.
    checkpoint: "Retention and deletion have been decided deliberately for the files, the conversation, and the skill, and the decision is written into outputs/session-log.md."
    facilitator_note: "The skill-retention point is easy to skip and worth making. Participants leave with an installed skill built on simulated data and untested stop conditions; someone will otherwise use it on real work on Monday. Give them explicit permission to uninstall it."
  - index: 9
    label: "Reflect on the course"
    type: "reflect"
    instruction: |
      You began the day connecting a folder and reading an action before approving it. You are ending it having written a skill, watched it fail to trigger, worked out why, and fixed it.

      The skill is not the durable thing. The durable thing is that you can now write down how your work should be done, hand it to a tool, and check whether it did that — and that you know the checking is the part that cannot be delegated.
    reflection_prompt: "Which part of this workflow will you adopt, limit, or refuse in your own practice, and what evidence — not impression — will tell you whether that was right?"
---

## Write, Save, and Test Your Skill

This is the capstone, and the objective the course exists for: you will compose a skill of your own,
with no programming.

Here is what that means concretely. A skill is a Markdown file. At the top, between two rows of
dashes, are two lines — a `name` and a `description`. Below that, ordinary prose telling Claude how to
do a piece of work. That is all. You have used one in Module 1, read one closely in Module 2, and
modified one in Module 3 — you already know this format, even if nobody has yet said so plainly.

The instructions are the easy half, and you wrote them this morning. `outputs/workflow.md` is already
a set of instructions: stages, inputs, outputs, the decisions that stay with a person, the conditions
that stop the work.

The `description` is the half that decides whether any of it ever runs. Claude reads descriptions to
work out which skill fits the request in front of it, so a description has to describe *situations* —
the circumstances in which someone needs this — and not the procedure the skill carries out. Open the
two skills you installed during setup and read their descriptions. Both are lists of occasions,
phrased in the words a person with that problem would use. That is the pattern to copy.

Then you test it, which matters more than writing it. You start a fresh conversation, say what you
need in ordinary words, and find out whether your skill loads. Often it will not. The description was
too narrow, or too abstract, or written in vocabulary nobody uses out loud. Fixing that is the single
most useful thing you will learn today, because it is the failure that hides itself: Claude answers
your question perfectly well from general knowledge, and nothing tells you your skill sat there
unused.

A research-support task is not complete when the generating stops. It is complete when there is a
usable handoff, a transparent method, a human who reviewed it, and a deliberate decision about what
is kept. Your skill produces the first two. You do the third. This exercise finishes with the fourth.

## Archives track

Compose your skill from your own workflow. Everything in this exercise transfers unchanged — the
format, the description-writing, the packaging, the fresh-conversation test, the failure to trigger,
and the fix — and the only thing that changes is what the skill does.

Do step 0 as written: read the two installed skills before you write anything. Then write your
description in step 1 for the workflow you chose in exercise 1, and think hard about the vocabulary. A
colleague would say "this finding aid needs remediating before it goes back on the web" or "I have a
digitization batch and I need to know what we can actually publish" — not "performs a twelve-stage
descriptive audit."

For step 2, substitute:

```cowork-prompt
Read outputs/archives-workflow.md from the connected folder. Turn it into a skill. Write outputs/description-remediation-review/SKILL.md with frontmatter containing exactly two fields, name and description. Use name: description-remediation-review. For description, use the wording I gave you, unchanged — do not improve it. Below the frontmatter, write the instructions as prose and numbered steps, addressed to you rather than to me: what to read, what to produce, which file each stage writes, where to stop and ask, and which decisions to hand back to the archivist. Carry across every stop-or-escalate condition and every human-only marking from outputs/archives-workflow.md. Do not soften them. Include a final section instructing you to assemble a review package with the sections named in the workflow, marking anything not completed as pending rather than filling it in. Then package the folder as outputs/description-remediation-review.skill so I can install it.
```

If you chose digitization rights triage instead, use `outputs/digitization-rights-triage/SKILL.md` and
the matching name and package. Either way, one stop condition has to survive into the skill intact: it
may not determine a rights position, and it may not propose replacement wording for language requiring
remediation. Both of those are archivist decisions with institutional consequences, and a skill that
makes them is worse than no skill.

Install and test it in steps 3 through 5 exactly as written, including the negative test — describe a
request that should not match and confirm your skill stays out of the way.

Then run it for real in step 6, writing to `outputs/archives-handoff-package.md`. Read what you
already have: `outputs/archives-request-brief.md`, `outputs/archives-access-points.xlsx`,
`outputs/archives-authority-check-log.xlsx`, `outputs/archives-description-ledger.xlsx`,
`outputs/archives-processing-plan.md`, and `outputs/session-log.md`. Mark every section you did not
complete as pending and every section that does not apply as not applicable, and add both pieces the
research version asks for: a researcher-facing disclosure and an internal methods note for the next
archivist to pick this up.

Step 8's retention decision matters more here than on the research track, and for a specific reason:
your skill was written against simulated material and its stop conditions have never been tested on a
collection with a living donor, an unsigned deed, or personal information about identifiable people. If
you would not want it running on that on Monday, uninstall it now and rebuild it when you would.

## Discussion

- What did you have to add to your description before the skill triggered, and why did you not think
  of those words the first time?
- What belongs in the patron-facing package, and what belongs only in the internal methods record?
- Which of today's artifacts should be retained outside the AI platform entirely?
- Would you let a colleague use your skill on a real request tomorrow? What would have to change first?
- What is your first local policy question after this workshop?
