---
id: "04-followup"
title: "Draft a Transparent Patron Handoff"
estimated_minutes: 15
discovery_moment: true
steps:
  - index: 0
    label: "Draft a consultation follow-up"
    type: "prompt"
    instruction: "Turn the scoped work into a concise patron-facing message."
    prompt_text: |
      Read outputs/research-brief.md and outputs/concept-map.xlsx. Draft a 180-220 word follow-up email to the faculty member and write it to outputs/patron-followup.md.

      Summarize how the question has been scoped, list the next three librarian actions, identify the ambiguity we still need them to resolve, and offer a non-AI consultation path. Do not claim that a search has already been completed.
    checkpoint: "outputs/patron-followup.md exists and is clear about what has and has not happened."
  - index: 1
    label: "Add an AI-use disclosure"
    type: "prompt"
    instruction: "Practice concise, locally adaptable disclosure."
    prompt_text: |
      Add one plain-language sentence to outputs/patron-followup.md disclosing that an AI tool helped organize the de-identified request and that a librarian will verify the search strategy and sources. Do not name a product unless local policy requires it.
    checkpoint: "The disclosure is specific about AI's limited role and human review, and is saved into the file."
  - index: 2
    label: "Run the send gate"
    type: "observe"
    instruction: "Open outputs/patron-followup.md and read it as if it were going to a real patron."
    observe_items:
      - "No private or identifying details were added"
      - "No sources, searches, or access rights were invented"
      - "The researcher can correct the scope"
      - "AI assistance and librarian review are described accurately"
      - "A human or non-AI option is available"
  - index: 3
    label: "Create a task record"
    type: "prompt"
    instruction: "Keep a compact record for reproducibility."
    prompt_text: |
      Append a task record to outputs/session-log.md, the file created in the first exercise. Include: date, which files in the connected folder you read, which files you created, whether web research was used, decisions made, unresolved questions, and human reviewer. Use "not used" or "not yet assigned" where appropriate.
    checkpoint: "outputs/session-log.md now distinguishes inputs, outputs, settings, decisions, and review responsibility."
    facilitator_note: "The log is appended to across all four modules and becomes the methods record in the final exercise. Learners who skipped the first exercise will need to create it now."
  - index: 4
    label: "Reflect on transparency"
    type: "reflect"
    instruction: "Disclosure should inform the patron, not shift responsibility to them."
    reflection_prompt: "What level of AI-use disclosure does your institution require, and where should it appear?"
---

## Draft a Transparent Patron Handoff

ALA's June 2026 guidance calls for clear disclosure, meaningful human review, and a path to human assistance. A useful handoff makes the work visible without overstating what AI or the librarian has completed.

## Archives track

The concept is the same — a handoff that is accurate about what has and has not happened — and the
archival version carries one extra burden. A reading room request rests on assumptions about which
collection holds the material, who created it, and what may be reproduced from it. Whichever of those
your scoping work has put in question, the reply has to address politely and early, or it costs both
of you a wasted visit.

Write `outputs/archives-researcher-followup.md`:

```cowork-prompt
Read outputs/archives-request-brief.md and outputs/archives-access-points.xlsx. Draft a 200-260 word reply to the researcher and write it to outputs/archives-researcher-followup.md. Summarize how the request has been scoped, name the candidate units of description without choosing between them, state plainly which of the requester's stated assumptions we will need to correct and what the actual position is, list the next three archivist actions, and identify the one question we need them to answer before a visit is worth booking. Do not state that any material is open, digitized, or cleared for publication. Do not promise a reproduction turnaround. Offer a consultation.
```

Then add the disclosure sentence as in step 1, and run the send gate in step 2 with two items added:
nothing in the reply asserts an access condition or a rights position that the description actually
supports, and nothing in it promises a reproduction the condition of the material may not allow.
Append your task record to the shared `outputs/session-log.md` as written.

## Discussion

- What would make a disclosure informative rather than performative?
- Who is accountable if an AI-assisted search brief is wrong?
- How long should the task record be retained?
