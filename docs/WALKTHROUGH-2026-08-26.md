# Walkthrough Run-Sheet — August 26, 2026, 3:00–4:00 pm

One hour, optional, online. Instructor: Steven Miklovic.

This is the run-sheet for the walkthrough session that supports the self-paced module *Agents and
Skills with Claude*. The facilitation guidance for the module itself is in `/FACILITATOR.md`.

---

## What this hour is for

The published description sets the purpose narrowly, and it is worth reading literally:

> The walkthrough will help you start if you don't have access to one and are interested in trying
> it.

So the goal is not coverage. The self-paced module is roughly four and a half hours of work; one hour
cannot compress it and should not try. The goal is that everyone leaves having seen an agentic
desktop do something real, knowing whether they can get access, and knowing exactly what their next
step is.

**The audience is mixed by design.** Three groups will be present:

- **Set up and ready** — installed Claude, Bedrock configured, folder connected. They want to start.
- **Has Claude, cannot attach a folder** — an account on the wrong plan, or the capability not
  enabled by an administrator. They think they are set up and are about to find out they are not.
- **No access at all** — curious, possibly deciding whether to ask for a license. They cannot do a
  single hands-on step and must not spend an hour watching other people work.

Design every segment so the third group has something to do or something to decide.

**One measurable outcome.** Everyone leaves with either (a) a working setup and the first exercise
started, or (b) a written next action naming a specific person to ask for access. Nothing else is
required for the hour to have worked.

---

## Pre-session checklist

### The day before

- [ ] Rehearse the five-minute demo end to end, twice, on the machine you will present from. Not the
      whole hour — just that.
- [ ] Create a **clean copy of the simulated workshop folder** at a shallow path with a boring name,
      for example `~/workshop-demo/`. This is the only folder you will connect while sharing a
      screen.
- [ ] Confirm nothing personal is in that folder or its parent. Claude shows paths, and a file tree
      is legible at a glance to forty people.
- [ ] Confirm the two practice `.skill` files are packaged, current, and available as download links.
- [ ] Have spare credential cards ready — bearer token, region, model card identifier — for people
      who never received one. Check the card against Step 5 of `docs/PARTICIPANT-SETUP.md` before you
      print it; the panel's field names and the model card have both changed between releases.
- [ ] Prepare a single follow-up message you can send within the hour: workshop folder link, both
      `.skill` links, `docs/PARTICIPANT-SETUP.md`, the module URL, `docs/OTHER-PLATFORMS.md`, and the
      office-hours time.
- [ ] Decide what you will do if the model is slow or Bedrock throttles. Have one pre-run
      conversation open in another window that you can switch to and narrate.

### Thirty minutes before

- [ ] Quit every application you are not presenting from. Notifications off. Second monitor cleared.
- [ ] Sign out of anything personal in the browser you will show.
- [ ] Reset the demo folder to its clean state — delete anything in `outputs/` left from rehearsal,
      so the demo actually creates a file rather than overwriting one.
- [ ] Send `Reply with the single word: connected.` through your own Bedrock configuration to confirm
      the account is live.
- [ ] Open the chat or Q&A panel and pin one message: *"Two questions to answer in chat: do you have
      can you attach a folder on your own computer to a project in Claude, yes or no? And are you
      research support or archives?"*

### Screen-sharing caution

Share **one window**, never the whole desktop. When you connect a folder, everyone in the session can
read every filename in it, and a connected folder is precisely the kind of thing people connect to
their real work. Use only the simulated workshop folder. If you would not put a file tree on a slide,
do not connect the folder that contains it.

Say this out loud while you do it. The narrowest-folder habit is a genuine lesson, and demonstrating
it deliberately teaches more than mentioning it later.

---

## Minute-by-minute shape

Timings are a plan, not a contract. The two segments to protect are the demo at 0:05 and the hands-on
at 0:20. Everything else can be cut.

### 0:00–0:05 — Open, and sort the room

State the frame in one sentence:

> This is not a tour of a menu. It is a working folder on your own disk that an assistant can read
> and write, and by the end of the self-paced module you will have written a small instruction file
> of your own that it loads without being asked.

Then sort the room with the two pinned chat questions — can you attach a local folder to a project,
yes or no, and research support or archives. You need the count before minute twenty. Say plainly that some people here have no access
and that the session is built for them too; there is a segment where they get a decision to take
away rather than a task to fail at.

Set the honest expectation about scope: the self-paced module is about four and a half hours, there
is a two-and-a-half-hour short path, and neither is happening in this room.

### 0:05–0:10 — The demo (see below)

Five minutes, uninterrupted, no questions taken. Hold questions to 0:45.

### 0:10–0:20 — What just happened, and why it is different

Three points, in this order, all grounded in what they just watched:

1. **The folder, not the upload.** Nobody attached anything. The files were there, the assistant read
   them in place, and the result is a file on disk that opens in Excel after the conversation is
   gone. This is the whole difference from a chat window and it is worth a full minute.
2. **The approval.** Show the action proposal again and read it aloud before approving. Say that the
   habit of reading before approving is taught in the first exercise and relied on for the rest of
   the course, and that the reason to connect the narrowest folder is that the folder is the blast
   radius.
3. **The skill.** You never named a file or pasted instructions — you described the task and the
   assistant picked up a set of instructions somebody wrote in Markdown. Show the frontmatter: a
   `name`, a `description`, then prose. Say the sentence that carries the course: *the description is
   the only part read when deciding whether to load it, and it has to describe situations, not
   procedures.* That single fact is the most useful thing you can give someone in an hour.

Do not explain the modules. Do not walk the curriculum. If you have slides, this is the only segment
that needs them.

### 0:20–0:35 — Hands-on, three tracks in parallel

Announce all three tracks at once, in one breath, then let people work. Keep talking to a minimum
during this block; the value is in people typing.

**Track A — set up and ready (you expect the smallest group).** One instruction:

> Connect the workshop folder, then ask Claude: *Read WORKSPACE-BRIEF.md and sample-data/research-request.txt
> and tell me what this request is actually asking for, and what is missing that would change my search.*

That is the opening of Module 1, exercise 2. They have started the course. Tell them so.

**Track B — has Claude, cannot attach a local folder to a project.** This diagnosis is the most
valuable thing you can do for them, because it is the blocker they would otherwise hit alone on a
Thursday night. Have them post a screenshot in chat. Two causes: a plan that does not include the
capability, or a Team/Enterprise account where an administrator has not switched it on. Neither is fixable from their own settings. Give each of them
the name or the team to ask, written down.

**Track C — no access.** Give them a task that does not need the tool and produces something they
keep. Two options, either is fine:

> Open the two practice skill files in a text editor and read the descriptions. Write down, in the
> words you would actually use out loud, the one recurring task in your own job you would want an
> assistant to do this way — and what part of it you would never hand over.

or, for someone deciding about a license:

> Write two sentences you could send to your supervisor: what this would be used for, and what data
> it would and would not touch.

Both feed directly into Module 4. Say so — this group is not being parked, they are doing the
capstone's hardest thinking without the tool.

**Circulate.** Watch chat, not your notes. Answer setup problems in chat rather than out loud so the
other tracks keep working, and pull only genuinely common problems into audio.

### 0:35–0:45 — What the course actually asks of you

Now, and only now, describe the shape of the module. Keep it to the ladder, which is one slide or one
spoken minute:

| Module | You will |
|---|---|
| 1 | **use** a skill |
| 2 | **read** one critically |
| 3 | **modify** one |
| 4 | **compose** one of your own — the capstone |

Then the three things they need to hear about doing it alone:

- **The real timing.** About four and a half hours for everything; about two and a half for the short
  path that keeps all four rungs. It is designed to be done in more than one sitting and it saves
  your place.
- **Module 2 does not run a live search.** It audits a simulated AI research report that is already
  in the folder. Two reasons: the Bedrock configuration has no web search, and a report with known
  problems in it teaches reliably where waiting for a model to misbehave does not. Say nothing about
  what is wrong with it.
- **Archives track.** Anyone doing archival description or digitization should read the
  `## Archives track` section in each exercise. Same concepts, archival material, fixtures in
  `sample-data/archives/`. Pick one track and stay in it.

Mention the two practice skills as prerequisites, not extras — three of the four rungs need them
installed.

### 0:45–0:55 — Questions

Take them live. The three you will get are below; the answers are worth rehearsing because all three
are asked in a slightly loaded way and a hedge reads as evasion.

### 0:55–1:00 — Close

Three sentences and stop:

1. Office hours are Fridays, 2:30–3:15, through September 4. Bring the thing that is stuck.
2. The follow-up message with every link is going out now.
3. One next action each — either "start Module 1 this week" or "ask [named person] by Friday about a
   plan that lets me attach a folder."

End on time. People who want to keep going will stay.

---

## The five-minute demo

For someone who has never seen an agentic desktop, the compelling thing is not fluent prose — they
have seen a chatbot. It is that **a folder on their disk changed, and they can open the result in
Excel after the conversation is gone.** Build the whole demo around producing a file.

**Recommended: the Module 3 usage analysis.** It is small, self-contained, needs nothing from earlier
modules, and it fails visibly and instructively.

1. Show the connected folder. Say the sentence about the narrowest folder while you do it. (30 s)
2. Open `sample-data/usage-report.csv` in a spreadsheet so everyone sees it is ordinary, boring, real
   data. (30 s)
3. One request, typed live so they see there is no trick to the phrasing:

   > Read `sample-data/usage-report.csv`. Tell me which titles look like cancellation candidates,
   > show every formula you used, and write the analysis to `outputs/usage-analysis.md`.

   (30 s)
4. **Let the action proposal sit on screen and read it out loud before approving.** This is the beat
   people remember. It is also the honest answer to half the fears in the room: it asks, and you can
   say no. (45 s)
5. Approve. Let it run. While it runs, say what it is doing and that this is the part that feels
   different — it is working, not answering. (60 s)
6. Open `outputs/usage-analysis.md` **in a text editor, outside Claude.** Point at the file in the
   Finder or Explorer window. The file exists. It survives the conversation. Email it to a colleague.
   (45 s)
7. The turn: pick one number in the analysis and check it against the spreadsheet yourself, out loud.
   Then say — this is the sentence to land the demo on:

   > It produced this in forty seconds. Checking it is my job and takes longer than making it did.
   > The course is mostly about the checking.

   (60 s)

If Bedrock is slow, switch to your pre-run window at step 5 and narrate the completed version. Do not
fill silence for ninety seconds while a spinner turns.

**Do not demo instead:** the Module 4 capstone (too long, and it depends on a skill triggering, which
may fail live in front of people who will read it as the tool being broken rather than as the
lesson), or the Module 2 audit (you would have to say what is wrong with the fixture, which spoils it
for everyone in the room).

---

## The three questions you will be asked

Rehearse these. Hedging on any of them costs more credibility than the honest answer does.

### "What does this cost, and what plan do I need?"

Nothing. A free Claude account is enough, and model usage runs through a Bedrock account we pay for,
so the API side costs you nothing either. You are not being asked to buy a plan or to expense
anything.

The one thing that does block people is an institution-managed account with restrictions on
attaching local folders — that is a permissions question, not a billing one. If someone hits it, the
useful next step is a named person to ask, not a workaround. Say that you will help draft the ask.

### "Where does my data go, and can it see everything on my machine?"

Two separate answers, and keep them separate.

*What it can reach:* exactly the folder you connect, and the folders inside it. Nothing else. Not
your Documents folder unless you connect your Documents folder — which is why the setup guide tells
you to connect the narrowest folder that holds what you need, and why the demo folder today had four
files in it. Connecting widely is the actual risk here, not the model.

*Where it goes:* for this workshop, requests go to Bedrock under the workshop's own account rather
than to Anthropic's consumer service. That is what the Developer Mode setting in the install guide is
for, and it is the only thing that setting does.

Then say the part people are really asking about, unprompted: do not put patron identities, reference
transcripts, reading histories, student records, credentials, unpublished work, or restricted archival
material into any of this until your institution has cleared that tool for that material. Everything
in the course is simulated for exactly this reason. If someone presses on institutional policy, the
honest answer is that it is a local question with a named owner, and you can help them find out who
that is.

### "Is this going to replace my job?"

Answer it directly; deflecting confirms the fear.

What you saw it do in the demo was produce a draft in forty seconds and get a number wrong that I had
to catch. It is good at the generating and it is not accountable for anything. Every exercise in this
course ends with a person deciding something the tool is not allowed to decide — whether a source
supports a claim, whether an output can go to a patron, what is retained and what is deleted. That is
not a courtesy framing; it is a hard requirement in the ALA and ACRL guidance the course is built on,
and it is the part that has your name on it.

What does change is which part of the work is scarce. Producing a plausible draft stops being the
hard part. Verification, provenance, and knowing what a report leaves out become the scarce skills —
which, for the archivists in the room in particular, is not a new skill set at all.

And: you are allowed to adopt some of this, limit it, or refuse it. The course says so explicitly and
does not treat refusal as failure.

---

## What attendees leave with

Send within the hour, in one message:

1. The workshop folder (download link).
2. Both `.skill` files as **download links**, not attachments. Mail systems rewrite zips and a
   rewritten `.skill` file loses its Save skill button without failing loudly.
3. `docs/PARTICIPANT-SETUP.md`.
4. The self-paced module URL.
5. **The real timing and the short path** — about four and a half hours in full, about two and a half
   for the route that keeps all four rungs of the skills ladder. Written down, in the message.
6. `docs/OTHER-PLATFORMS.md`, for anyone on Codex or Kiro.
7. Office hours: Fridays, 2:30–3:15 pm, through September 4, with the joining link.
8. One line for the no-access group: who to ask, what to ask for — a Claude plan that allows a folder
   on your own computer to be attached to a project — and an offer to write the request with them.

Say in the message that office hours are the intended support channel and that turning up with
something broken is the expected use of them, not an imposition.

---

## Afterwards

Note three things while they are fresh, for the next run of this session:

- how many people could actually attach a folder, against how many thought they could;
- which of the three questions above came first, and in what wording;
- anything in the demo that did not land, or that you had to explain twice.

Then check the office-hours calendar invite is out.
