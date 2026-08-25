---
id: "01-orient"
title: "Connect the Folder and Check What Claude Can Access"
estimated_minutes: 15
discovery_moment: false
steps:
  - index: 0
    label: "Confirm what Claude can reach"
    type: "workspace"
    instruction: |
      Open your workshop project, with the workshop folder attached, then confirm which folder Claude actually has. The path you see should be the workshop folder itself, not your Documents folder and not your home directory.

      Then send Claude the prompt below and read the answer against what you expected. This is the data boundary, and unlike a chat window it is a boundary you set deliberately and can see.
    prompt_text: |
      List the files you can see in the connected folder, and tell me what you cannot reach.
    checkpoint: "You can state which folder Claude can read and write, and name something outside it that Claude cannot reach."
    facilitator_note: "This is where a remote cohort stalls invisibly: a learner showing no progress here almost certainly never got the folder attached, and will not say so. Treat an empty first exercise as a setup problem and send Step 7 of the participant guide rather than waiting for a question. Worth raising in office hours for anyone arriving from ChatGPT or Copilot, who will be looking for an upload button: a connected folder is standing access to everything inside it, including files added later, rather than a per-message attachment."
  - index: 1
    label: "Apply the data-minimization gate"
    type: "observe"
    instruction: "The folder scope is now the question, not the individual file. Check it before you go further. Then hold one question in mind as you work through the list: if you connected a folder from your real work tomorrow, what would be in it that should not be?"
    observe_items:
      - "Everything in the connected folder is simulated and contains no patron identifiers"
      - "No reference transcript, reading history, student record, unpublished manuscript, or licensed full text is anywhere in the folder or its subfolders"
      - "The folder contains nothing you would not want Claude to read"
      - "Your library permits this tool and this configuration for training material"
      - "A non-AI path remains available"
  - index: 2
    label: "Read the brief and the request"
    type: "prompt"
    instruction: "No upload step. The files are already there; point Claude at them."
    prompt_text: |
      Read WORKSPACE-BRIEF.md and sample-data/research-request.txt from the connected folder. Then list:
      1. the requested deliverable,
      2. two privacy or evidence rules from the brief that govern this work, and
      3. one ambiguity in the request that must be clarified before searching.

      Cite the file name after each answer. Use only these two files - no model memory, no web.
    checkpoint: "The response cites both files and identifies an ambiguity in the request."
    facilitator_note: "The intended ambiguity is the meaning of reach. Do not name it for the learner; the next three exercises depend on them finding it. If they name a different real ambiguity, accept it."
  - index: 3
    label: "Watch an action before you approve it"
    type: "workspace"
    instruction: |
      Claude can change files, so it will ask before it does. Give it something to ask about by sending the prompt below.

      Before you approve, read what it proposes to do: which file, where, and what goes in it. Approve it, then open the file yourself to confirm it says what you expected.
    prompt_text: |
      Create a file called outputs/session-log.md in the connected folder. Put today's date in it and a one-line note that I have started the workshop.
    checkpoint: "The file exists in outputs/, you read the proposed action before approving it, and its contents match what you asked for."
    facilitator_note: "First encounter with an approval prompt, and the habit being built is reading the action rather than clicking through it - which nobody can check for them at a distance. The exercise says so plainly instead. If the session log never appears for a learner, write access or approval is the likely blocker and is worth a direct message. A good office-hours opener is asking what people approved without reading; several will admit it, and the admission is the lesson."
  - index: 4
    label: "Reflect on the boundary"
    type: "reflect"
    instruction: "A connected folder is more capable than an upload button and correspondingly less forgiving. It grants standing read and write access to everything inside it, including files you add later and files you forgot were there."
    reflection_prompt: "What would you need to confirm with your institution before connecting a folder containing real consultation material?"
  - index: 5
    label: "One question to take further"
    type: "reflect"
    instruction: "Each exercise ends with a discussion question. Answer it here if you want a record of it, or bring it to office hours. Anything you type into a reflection box is saved and visible to your facilitator; anything you leave blank stays blank, and skipping is fine."
    reflection_prompt: "What is actually in the folder you connected, including anything you did not expect to find there?"
---

## Connect the Folder and Check What Claude Can Access

Working with a connected folder is different from working in a chat window, and the difference is
the first thing to understand rather than a detail to pick up later. There is no upload step. You
attach a folder once, and from then on Claude can read what is in it and write new files into it,
subject to your approval.

That is more useful than uploading - your work persists as real files you keep after the workshop -
and it moves the privacy question. In a chat product you decide, message by message, what to attach.
Here you decide once, at the folder level, and the decision covers everything inside. The
responsible first move is to know exactly what you have granted.

## Archives track

This exercise serves archives staff unchanged, and there is no useful variant to invent. Folder
scope, the approval prompt, and the difference between standing access and a per-message attachment
are properties of the tool, not of your workflow.

Two substitutions and nothing else. The first is the request you point Claude at: work from the
reading room inquiry rather than the faculty request, where the ambiguity to find is about the unit of
description rather than the meaning of an outcome.

```cowork-prompt
Read WORKSPACE-BRIEF.md and sample-data/archives/collection-request.txt from the connected folder. Then list:
1. the requested deliverable,
2. two privacy or evidence rules from the brief that govern this work, and
3. one ambiguity in the request that must be clarified before anything is pulled.

Cite the file name after each answer. Use only these two files - no model memory, no web.
```

The second is one extra item on the data-minimization checklist you work through yourself: nothing in
the folder is a record containing living people's names, addresses, household or financial details, or
health information, and nothing in it is unresolved custody, donor, or rights documentation. Archives
folders are the ones most likely to fail that test, because the restricted material is usually inside
the collection rather than beside it. The distinction to carry into your own work is between
describing such material and reproducing it: a survey note about a restricted series can safely go in
front of an assistant, and the series itself cannot.

## Discussion

- What is in the folder you connected, including anything you did not expect?
- How is folder scope a different privacy decision from choosing a file to upload?
- What does Claude retain after the session ends, and what is simply a file on your own disk?
