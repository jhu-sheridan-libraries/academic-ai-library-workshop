---
id: "02-patron-query"
title: "Turn a Request into a Research Brief"
estimated_minutes: 20
discovery_moment: true
steps:
  - index: 0
    label: "Write the brief to a file"
    type: "prompt"
    instruction: "Structure the request without answering it, and keep the result as a file you will use for the rest of the day."
    prompt_text: |
      Read sample-data/research-request.txt and write a research brief to outputs/research-brief.md in the connected folder. Use these headings: Decision or use; Population or context; Core concept; Outcomes; Date range; Geography; Evidence types; Access needs; Known ambiguities; Missing information.

      Use only the request file. Mark anything absent as "ask the researcher" rather than guessing. Show me the file when it is written.
    checkpoint: "outputs/research-brief.md exists and distinguishes supplied facts from missing information."
    facilitator_note: "Every later exercise reads this file. If a learner falls behind, the brief is the one artifact they cannot skip."
  - index: 1
    label: "Practise the interview"
    type: "workspace"
    instruction: |
      A brief built from a written request is missing whatever the requester did not think to write down. Recovering that is the reference interview, and it is a conversation, not a form.

      Ask for the role-play in your own words, or send the prompt below as it stands. The reference-interview practice skill you installed during setup will pick it up either way. Claude plays a patron who volunteers only what a real patron would volunteer. Interview them, then read the debrief it gives you.
    prompt_text: |
      Practise a reference interview with me. Intermediate difficulty, about six minutes.
    checkpoint: "You completed a role-played interview and received a debrief naming at least one question that came too late or went unasked."
    facilitator_note: "This is a skill, not a scripted prompt, so no two runs are identical — that is the point. If the skill does not trigger, have the learner say 'use the reference interview practice skill'. Timebox firmly; the role-play is absorbing and will overrun."
  - index: 2
    label: "Generate questions for the real request"
    type: "prompt"
    instruction: "Now apply what the role-play surfaced to the actual workshop request."
    prompt_text: |
      Read outputs/research-brief.md. Draft five concise follow-up questions for the faculty member who submitted this request. Prioritize questions whose answers would materially change the search strategy. For each, add a short note explaining which search decision it affects.

      Append these to outputs/research-brief.md under a new heading "Questions for the requester."
    checkpoint: "The questions address outcome definitions, intended use, disciplinary scope, and acceptable evidence, and they are saved into the brief."
  - index: 3
    label: "Audit the questions"
    type: "observe"
    instruction: "Read the appended questions as if you were about to send them."
    observe_items:
      - "Questions do not ask for information already in the request"
      - "Questions avoid collecting unnecessary personal or sensitive data"
      - "At least one question distinguishes scholarly citation from policy or practical use"
      - "The librarian, not the AI, decides which questions to ask"
  - index: 4
    label: "Handle a high-risk variation"
    type: "prompt"
    instruction: "Test whether the boundary holds when you offer to widen it."
    prompt_text: |
      Suppose I offer to copy the faculty member's full email thread, their unpublished grant draft, and a spreadsheet of collaborator names into the connected folder. Explain which of these should not go into the folder under WORKSPACE-BRIEF.md, and propose a de-identified alternative that preserves what search planning actually needs.
    checkpoint: "The response recommends data minimization rather than accepting the material, and treats the folder as the boundary."
  - index: 5
    label: "Reflect on professional judgment"
    type: "reflect"
    instruction: "AI can organize a question. It cannot do the relational work of a reference interview — reading hesitation, noticing what someone is reluctant to say, deciding what not to ask."
    reflection_prompt: "Which follow-up question requires the most librarian judgment, and why?"
---

## Turn a Request into a Research Brief

Research requests arrive as topics. Good searches are built around decisions, concepts, outcomes,
constraints, and acceptable evidence. This exercise does the decomposition in a file you keep, then
practises the part that cannot be done from a file at all.

The written request is the easy half. The interview is where you find out that "reach" means four
different things to the person asking, and that they only need one of them.

## Archives track

Same concept, different unit of failure. A reference request that names a topic can still be
searched badly; a reading room request names a collection, and that name carries assumptions about
who created the records and where they ended up. Those assumptions are worth establishing before
anyone pulls a box, because a request aimed at the wrong unit of description cannot be searched at
all. Work from
`sample-data/archives/collection-request.txt` and write to
`outputs/archives-request-brief.md` — this is your equivalent of the research brief, and the rest of
the archives track reads it.

Substitute this for step 0:

```cowork-prompt
Read sample-data/archives/collection-request.txt and write a reading room request brief to outputs/archives-request-brief.md in the connected folder. Use these headings: Deliverable; Subject as stated; Candidate units of description; Creator or provenance in question; Date range; Formats needed; Access conditions to check; Reproduction and rights needs; Requester's assumptions to correct; Known ambiguities; Missing information. Under candidate units, list every kind of holding the subject could be documented in and do not choose between them. Use only the request file. Mark anything absent as "ask the researcher."
```

Then run the interview role-play in step 1 exactly as written — question negotiation is question
negotiation, and the practice skill plays a patron rather than a discipline. For step 2, generate
your five follow-up questions against `outputs/archives-request-brief.md`. Prioritize the questions
whose answers would change which collection you pull, not which folder.

## Discussion

- What did the role-played patron withhold until you asked directly?
- Which missing detail would change the search most?
- How does a brief held as a file, rather than as chat history, change a handoff between colleagues?
- What should never be inferred from a patron's request?
