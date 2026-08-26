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

      Now read the two `description` lines side by side and notice what they are doing. Neither one describes the steps the skill performs. Both describe the situations in which the skill applies - "use when a librarian... wants to practice question negotiation," "use when a research librarian... asks to inspect a research report, search plan, citation list." They are lists of circumstances, written in the words someone would actually use when they had that problem.

      That is not a stylistic choice. The `description` is the only part Claude reads when deciding whether to load the skill.
    prompt_text: |
      Show me the SKILL.md file for the reference-interview practice skill I installed, exactly as it is written. Then show me the one for the review-ai-research-output skill.
    checkpoint: "You have read both SKILL.md files and can name the two frontmatter fields and say which one determines whether the skill triggers."
    facilitator_note: "Two or three minutes of reading here buys back ten minutes of debugging at step 4, and the step says so. The insight is that descriptions describe situations, not procedures - the single most useful thing to repeat in the walkthrough and in every office hours before the capstone. If anyone asks about YAML, the answer is a name and a description between two rows of dashes; nobody needs the specification."
  - index: 1
    label: "Write your description first"
    type: "workspace"
    instruction: |
      You are going to build a skill out of `outputs/workflow.md` - the workflow you designed in the first exercise. Start with the description, because it is the part that decides whether the skill ever runs.

      Write two or three sentences yourself, in your own words. Answer only this: in what situations should Claude reach for this? Think about how a colleague would phrase the request - "I've got a faculty literature request and I need a search record I can hand over," not "executes a thirteen-stage reproducible research workflow."

      List several situations rather than one. Include the words people actually say: reproducible search, evidence scan, literature request, handoff, search log, methods note.

      Then send Claude the prompt below and paste your draft after it.
    prompt_text: |
      Here is a draft skill description. Does it describe situations someone would find themselves in, or does it describe steps the skill performs? Rewrite it as situations if I have got that wrong, and tell me which realistic requests it would fail to catch.
    checkpoint: "You have a description written in situational language, naming several distinct circumstances, in the vocabulary a colleague would use."
    facilitator_note: "Almost everyone writes a procedure description on the first attempt - 'this skill takes a request and produces a search log' - and that is the mistake worth making here rather than at step 4. The step hands the correction to Claude rather than to you, which is the right arrangement when you are not in the room: the rewrite arrives in seconds and it arrives for everyone."
  - index: 2
    label: "Build the skill file"
    type: "prompt"
    instruction: "Now the instructions. Your workflow file already contains them - stages, inputs, outputs, stop conditions. That is what a skill body is."
    prompt_text: |
      Read outputs/workflow.md from the connected folder. Turn it into a skill.

      Write outputs/reproducible-search-handoff/SKILL.md with frontmatter containing exactly two fields, name and description. Use name: reproducible-search-handoff. For description, use the wording I gave you, unchanged - do not improve it.

      Below the frontmatter, write the instructions as prose and numbered steps, addressed to you rather than to me: what to read, what to produce, which file each stage writes, where to stop and ask, and which decisions to hand back to the librarian. Carry across every stop-or-escalate condition and every human-only marking from outputs/workflow.md. Do not soften them.

      Include a final section instructing you to assemble a handoff package, with the sections named in the workflow, marking anything not completed as pending rather than filling it in.

      Then package the folder as outputs/reproducible-search-handoff.skill so I can install it.
    checkpoint: "SKILL.md exists with a name and a description, its body carries your stop conditions and human-only markings intact, and a .skill file has been created."
    facilitator_note: "Two failure modes, both silent: the description gets rewritten despite the instruction, and the stop conditions get diluted into advice. The step tells the learner to open the file and compare, which is the only check available when nobody is looking over their shoulder. If the .skill packaging fails they can still test by asking Claude to treat the SKILL.md as the instructions - but the install path is worth a support message, because the next two steps depend on it."
  - index: 3
    label: "Install it"
    type: "workspace"
    instruction: |
      Open `outputs/reproducible-search-handoff.skill` - the same way you opened the two skills from the `skills/` folder during setup. Claude shows a card for the file with a **Save skill** button.

      Before you click it, read the card. It is telling you what you are about to give standing availability to, and it is your own file, so this is the one time you know exactly what is in it.

      Click **Save skill**. It is now available in every conversation, including ones already open.
    checkpoint: "The skill is saved and appears among your available skills."
    facilitator_note: "If no Save skill button appears, the packaging is wrong rather than the skill, and asking Claude to repackage fixes it. Same flow as setup Step 8, so most people will recognise it - the ones who do not are the ones whose facilitator installed the skills for them, and they will need the two sentences of the participant guide that describe the card."
  - index: 4
    label: "Test whether it triggers"
    type: "workspace"
    instruction: |
      A skill that never loads is worse than no skill, because you may assume its instructions ran. Test it in the way people will actually use it.

      Start a **fresh conversation**. Not a new message in this one - the context here could help it along and tell you nothing. The link below opens one.

      Then describe the task in ordinary words, as a colleague would, and do not name the skill or the file. The prompt below is written that way.

      Watch what happens. You are looking for two things: whether Claude loaded your skill at all, and whether what it then did resembles your workflow - the same stages, the same files, and crucially the same places where it stops and asks you.
    prompt_text: |
      A faculty member has sent me a literature request and I need to produce a search record I can hand to another librarian.
    checkpoint: "You have run a plainly worded request in a fresh conversation and can say whether the skill loaded and whether its behaviour matched your workflow."
    facilitator_note: "The fresh conversation is not optional: testing in context is the mistake that makes people think a broken skill works. Roughly half will see it fail to trigger, which is a good outcome - and the step says so plainly, because a learner alone reads a failure as their own. Do not rescue anyone here; the next step is the most valuable five minutes of the course. If someone messages for help, send them to step 5 rather than fixing their description for them."
  - index: 5
    label: "Fix the description"
    type: "workspace"
    instruction: |
      If it did not trigger, the problem is probably the description rather than the instructions. This is the most common failure when authoring a skill: Claude answers from general knowledge, but does not tell you that it never loaded your skill.

      Diagnose it. Send the prompt below - it only has to read your description, so it works in the conversation where the skill failed or in a fresh one.

      Then revise the description in `outputs/reproducible-search-handoff/SKILL.md` - usually by adding the plain vocabulary you actually used and the neighbouring situations you did not think of. Repackage, save the skill again, start another fresh conversation, and test again with *different* wording than last time.

      If it triggered the first time, do not stop. Test it with a request that should *not* match - ask for help finding a book on the shelf - and confirm the skill does not load. A description that matches every request is also a failure.

      Give this about five minutes and then stop, even if the skill still triggers unreliably. Roughly half the people who do this exercise see it fail to load, and knowing why it failed is worth more than leaving with a skill that always fires. Understanding the loop is the outcome; a perfect artifact is not.
    prompt_text: |
      Read my reproducible-search-handoff skill's description. I asked you for help with a faculty literature request and a search record, and the skill did not load. Which words in my request should have matched, and what is the description missing?
    checkpoint: "You have revised the description and retested in a fresh conversation, and you can name the specific change that fixed the triggering, or confirm the skill correctly stays out of an unrelated request."
    facilitator_note: "The durable lesson of the whole course is here: authoring a skill is a test-and-revise loop, and the description is the part under test. The five-minute limit and the permission to leave with an unreliable skill are now in the step. The words people had to add are the best single artifact the course produces and they differ every time - ask for them in office hours, and keep the good ones for the next cohort's walkthrough."
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
    facilitator_note: "First time the learner's own skill does work for them, and the moment lands even without anyone there to see it. A skill that does not produce all the sections is diagnostic information about their instructions rather than a failure of the exercise - worth saying if someone reports it, and worth resisting the urge to repair the skill for them by message."
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

      **The files.** The connected folder is on your own disk and everything in `outputs/` is yours to keep. Decide, file by file, which belongs in your institution's designated repository, which is working material to discard, and - for anything you keep - how long it is retained and by whom. Record that decision in `outputs/session-log.md`.

      **The conversation.** Follow your local retention policy. Remove connected-folder access you no longer need. Delete the conversation if the record does not need to remain in the system; otherwise move the approved record to the repository and document the retention period.

      Deleting a local file does not delete a provider-side copy or a log. Use the product's own data controls and your institution's approved procedure, and do not assume the two are the same thing.

      Your skill is a separate decision. It stays installed until you remove it, and it will keep loading on requests that match its description. If you would not want it running on real patron work in its current state, remove it now and rebuild it when you would.
    checkpoint: "Retention and deletion have been decided deliberately for the files, the conversation, and the skill, and the decision is written into outputs/session-log.md."
    facilitator_note: "The skill-retention point is the last thing anyone will read and the one with real consequences: participants finish with an installed skill built on simulated data and untested stop conditions, and someone will use it on real work on Monday. The step gives explicit permission to uninstall. Worth repeating in the closing cohort message, because this is the step people skip when they have finished and closed the tab."
  - index: 9
    label: "Reflect on the course"
    type: "reflect"
    instruction: |
      You began the day connecting a folder and reading an action before approving it. You are ending it having written a skill, watched it fail to trigger, worked out why, and fixed it.

      The lasting lesson is not the skill file itself. It is the ability to describe how work should be done, give those instructions to a tool, and check whether the tool followed them. That checking is the part you cannot delegate.
    reflection_prompt: "Which part of this workflow will you adopt, limit, or refuse in your own practice, and what evidence - not impression - will tell you whether that was right?"
---

## Write, Save, and Test Your Skill

This is the capstone, and the objective the course exists for: you will compose a skill of your own,
with no programming.

Here is what that means concretely. A skill is a Markdown file. At the top, between two rows of
dashes, are two lines - a `name` and a `description`. Below that, ordinary prose telling Claude how to
do a piece of work. That is all. You have used one in Module 1, read one closely in Module 2, and
modified one in Module 3 - you already know this format, even if nobody has yet said so plainly.

The instructions are the easy half, and you wrote them this morning. `outputs/workflow.md` is already
a set of instructions: stages, inputs, outputs, the decisions that stay with a person, the conditions
that stop the work.

The `description` is the half that decides whether any of it ever runs. Claude reads descriptions to
work out which skill fits the request in front of it, so a description has to describe *situations* -
the circumstances in which someone needs this - and not the procedure the skill carries out. Open the
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

The capstone is the same capstone. You compose a skill from the workflow you designed at the start of
this module, and the only thing that changes is what the skill does.

Read one before writing one:

```cowork-prompt
Show me the SKILL.md file for the reference-interview practice skill I installed, exactly as it is written. Then show me the one for the review-ai-research-output skill.
```

Each is a Markdown file with a `name` and a `description` between two rows of dashes, then ordinary
prose. Read the two `description` lines side by side: neither describes what the skill does. Both
describe the situations in which it applies, in the words someone with that problem would use. The
`description` is the only part Claude reads when deciding whether to load a skill.

**Write your description yourself**, before anything else, for the workflow you chose earlier -
description remediation review, or digitization rights triage. Two or three sentences answering only
this: in what situations should Claude reach for it? Name several circumstances, in the vocabulary a
colleague actually uses. Someone would say "this finding aid needs remediating before it goes back on
the web" or "I have a digitization batch and I need to know what we can actually publish" - not
"performs a twelve-stage descriptive audit." Then check it:

```cowork-prompt
Here is a draft skill description. Does it describe situations someone would find themselves in, or does it describe steps the skill performs? Rewrite it as situations if I have got that wrong, and tell me which realistic archival requests it would fail to catch.
```

Now build the skill from your workflow file:

```cowork-prompt
Read outputs/archives-workflow.md from the connected folder. Turn it into a skill. Write outputs/description-remediation-review/SKILL.md with frontmatter containing exactly two fields, name and description. Use name: description-remediation-review. For description, use the wording I gave you, unchanged - do not improve it. Below the frontmatter, write the instructions as prose and numbered steps, addressed to you rather than to me: what to read, what to produce, which file each stage writes, where to stop and ask, and which decisions to hand back to the archivist. Carry across every stop-or-escalate condition and every human-only marking from outputs/archives-workflow.md. Do not soften them. State two stop conditions explicitly: you may not determine a rights position, and you may not propose replacement wording for language requiring remediation. Include a final section instructing you to assemble a review package with the sections named in the workflow, marking anything not completed as pending rather than filling it in. Then package the folder as outputs/description-remediation-review.skill so I can install it.
```

If you chose digitization rights triage, use `outputs/digitization-rights-triage/SKILL.md`, the matching
name, and `outputs/digitization-rights-triage.skill`. Either way those two stop conditions have to
survive into the skill intact. Determining a rights position and rewording description requiring
remediation are archivist decisions with institutional consequences, and a skill that makes them is
worse than no skill. Open the file and confirm both are still there in the words you meant, and that
your description was not quietly improved.

**Install it.** Open the `.skill` file, the same way you opened the two skills from the `skills/` folder
during setup. Claude shows a card with a **Save skill** button. Read the card before you click it - this
is the one time you know exactly what you are giving standing availability to, because you wrote it.
Then click **Save skill**.

**Test whether it triggers.** Start a fresh conversation, not a new message in this one; the context
here would help it along and tell you nothing. Then describe the task in ordinary words, without naming
the skill or the file:

```cowork-prompt
A researcher has asked about a collection and the finding aid needs work before I can point anyone at it. I need a record of what I changed and what I could not decide.
```

If you chose rights triage, describe that task instead, in your own plain words. Watch two things:
whether your skill loaded at all, and whether what followed resembles your workflow - the same stages,
the same files, and the same places where it stops and asks you.

**Fix the description.** Expect it not to trigger. That happens to about half the people who do this
exercise, and it is the most valuable part of it. The failure is almost always the description rather than the
instructions, and it fails silently - Claude answers helpfully from general knowledge and nothing tells
you the skill sat unused. Diagnose it:

```cowork-prompt
Read my skill's description. I asked you for help with a finding aid that needs remediating and a record of what changed, and the skill did not load. Which words in my request should have matched, and what is the description missing?
```

Then revise the description in your `SKILL.md` yourself - usually by adding the plain vocabulary you
actually used and the neighbouring situations you did not think of. Repackage, save the skill again,
start another fresh conversation, and test with *different* wording than last time. If it triggered
first time, do not stop: ask for something that should not match - help finding a book on the shelf -
and confirm it stays out of the way. A description broad enough to catch everything is its own failure.

Then run it for real:

```cowork-prompt
Using my skill, assemble the handoff package for the workshop request and write it to outputs/archives-handoff-package.md. Read what we already have: outputs/archives-request-brief.md, outputs/archives-access-points.xlsx, outputs/archives-authority-check-log.xlsx, outputs/archives-description-ledger.xlsx, outputs/archives-processing-plan.md, and outputs/session-log.md. Use the sections my skill specifies. Mark every section we did not complete as pending and every section that does not apply as not applicable. Do not fill a gap with anything plausible. Then add two short pieces at the end: an AI-use disclosure written for the researcher, in plain language, saying which tasks Claude assisted with and which an archivist verified; and an internal methods note for the next archivist to pick this up, naming the tool and configuration, the connected folder, which files were supplied, whether external sources were available, and the known limits on reproducing this. Draw on outputs/session-log.md for what actually happened, and use placeholders where we never recorded a value.
```

Open it and read it in full yourself. Nothing in it has been reviewed until you have, and the skill you
wrote cannot do that for you.

Then close the work deliberately. Decide yourself, file by file, which of your outputs belongs in your
institution's designated repository, which is working material to discard, and how long anything you
keep is retained and by whom. Then record the decision:

```cowork-prompt
Append a section to outputs/session-log.md called "Retention decision" recording exactly what I dictate below: for each file in outputs/, whether it goes to the repository, is discarded, or is retained locally, with a retention period and an owner where I give one. Then record my decision about the conversation itself and my decision about the skill. Record what I state and do not propose retention periods of your own.
```

The skill is the decision easiest to skip, and it matters more on this track than on the research one,
for a specific reason: your skill was written against simulated material, and its stop conditions have
never been tested on a collection with a living donor, an unsigned deed, or personal information about
identifiable people. It stays installed until you remove it, and it will keep loading on requests that
match its description. If you would not want it running on that on Monday, uninstall it now and rebuild
it when you would.

## Discussion

- What did you have to add to your description before the skill triggered, and why did you not think
  of those words the first time?
- What belongs in the patron-facing package, and what belongs only in the internal methods record?
- Which of today's artifacts should be retained outside the AI platform entirely?
- Would you let a colleague use your skill on a real request tomorrow? What would have to change first?
- What is your first local policy question after this workshop?
