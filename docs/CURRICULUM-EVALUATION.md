> **Status: largely superseded, kept as a record.** This assessment was written on 2026-08-24 and
> most of its recommendations were implemented the same day — the Module 2 fixture, file deliverables,
> the skills ladder with the Module 4 capstone, the archives track, the Cowork conversion, and the
> timing reconciliation. Read `docs/AUTHORING-CONVENTIONS.md` for the course's current design. What
> remains open here is the JHU localization: the local-policy annex and the named ILS, liaison
> structure, and unit detail, all of which still need input from Sheridan. See the gap list near the
> end.

# Curriculum Evaluation

**Scope:** the 16 exercises in `src/content/modules/`, the shared `WORKSPACE-BRIEF.md`, the four
plugin skills, `FACILITATOR.md`, and `docs/PARTICIPANT-SETUP.md`.

**Evaluated against two questions:** does the course teach the core concepts a Claude Cowork user
actually needs, and does it reflect Johns Hopkins Sheridan Libraries work rather than generic
academic-library material?

**Date:** 2026-08-24

**Standing assumption:** this repository has been forked to
`jhu-sheridan-libraries/academic-ai-library-workshop` specifically so it can commit to Claude and to
Sheridan Libraries. Product neutrality and the "hypothetical research library" framing are therefore
treated below as inherited scaffolding to be removed, not as design constraints to be weighed. Every
finding about tool-neutral vocabulary or generic library content is work to do, not a trade-off to
adjudicate.

---

## Summary judgment

The curriculum is unusually strong at the thing most AI-literacy training is weakest at: epistemic
discipline. The claim-citation ledger in `02-cataloging/04-abstract.md`, the instruction to state
"the smallest accurate revision that the checked source would support," the insistence on separating
attention, access, and use proxies rather than collapsing them into one outcome, the requirement to
produce an evidence-constrained alternative reading, and the framing of the non-AI path as
legitimate rather than remedial are all better than the field norm. The refusal to grade learners
and the explicit permission to "use, limit, or refuse AI without shame" are the right posture for a
staff cohort with mixed enthusiasm. None of that needs defending and none of it should be lost in
revision.

The problems are not with the reasoning the course teaches. They are that the course teaches it
against a generic tool and for a generic library — which is exactly what the fork exists to fix.

On the Cowork axis, the curriculum is written for a single-turn chat product with a file-upload
button. Its operating vocabulary is projects, notebooks, uploads, and research modes. Cowork's
actual primitives — a connected folder, files written to disk, skills, delegated agents, scheduled
work, governed connectors — appear nowhere in the 16 exercises. The word Cowork does not occur once
in `src/content/`. Of the twenty-odd deliverables the course asks learners to produce, nearly all
are left sitting in a chat window. In Cowork nearly all of them would be files.

On the JHU axis, the institution is present as branding and absent as curriculum. `src/app.css` and
`tailwind.config.ts` carry the JHU palette and the landing page says "Johns Hopkins University
Libraries," but
`WORKSPACE-BRIEF.md` describes "This hypothetical research library" and no exercise names a Hopkins
school, system, collection, unit, or policy. The course would run unchanged at any ARL library.

There is also one operational defect that outranks both axes: **Module 2 cannot be completed with
the setup the participants are told to build.** Details below.

---

## Blocking issue: Module 2 requires a capability the prescribed setup does not have

`docs/PARTICIPANT-SETUP.md` Step 5 routes participants through Amazon Bedrock, and Step 6 states
plainly that "web search is not included automatically. It reaches Claude through Anthropic's own
infrastructure, which you are now bypassing." It then reassures the reader: "None of this blocks the
workshop exercises, which use the simulated files in the workshop folder rather than live web
results."

That reassurance is incorrect for a quarter of the course. Module 2 is built on a live research run
and the report it produces. `02-cataloging/02-marc-record.md` step 2 instructs the learner to "Start
or continue the research" and ends with the checkpoint "You have a cited report and can open its
source list or citation links." `03-subject-headings.md` then asks for "a source inventory for every
source cited in the report" and requires the learner to open at least five live URLs.
`04-abstract.md` builds a claim-citation ledger on the same report. There is no report fixture
anywhere in the repository — `sample-data/` contains only `research-request.txt`,
`evidence-notes.csv`, and `usage-report.csv`. The facilitator fallback in `FACILITATOR.md` ("Use
quick web search or a browser to locate five sources") also presumes search, and in any case
substitutes a manual scavenger hunt for the lesson.

The fix is straightforward and improves the pedagogy independently of the Bedrock question: ship a
pre-generated cited research scan as a fixture, with defects deliberately seeded into it. One
fabricated DOI. One real source misattributed to a claim it does not support. One paywalled item
presented as verified. One download count silently upgraded to evidence of practical use. A
geographic skew toward North America and Europe. Module 2 then runs offline, runs identically for
every cohort, and — critically — is guaranteed to produce the discovery moment the module is built
around.

That determinism matters more than it first appears, because two exercises currently stake their
payload on the model misbehaving. `03-collection-dev/01-orient.md` step 2 asks for "the full APA
citation and DOI for source C," a record the CSV marks `citation-unverified`, and the facilitator
note says "If it invents a citation, preserve the output for discussion and start a clean correction
prompt." With `WORKSPACE-BRIEF.md`
loaded and its rule against inventing citations, a current model will very likely decline. The
learner then experiences the lesson as "the tool behaved correctly" and never sees a fabrication.
Seeded-defect fixtures move the failure from the model's behavior, which the course cannot control,
into the material, which it can.

---

## Axis 1: coverage of Cowork core concepts

| Concept a Cowork user needs | Where it appears | Verdict |
|---|---|---|
| Connected folder as the working surface | `PARTICIPANT-SETUP.md` Step 7 only | Absent from curriculum. Exercises use upload/attach/project-or-notebook language 32 times across 9 files. |
| Files written to disk as the deliverable | Nowhere | Absent. All 15+ deliverables stay in chat. The largest missed opportunity. |
| Skills as reusable practice | `PARTICIPANT-SETUP.md` Step 8 only | Installed, then never used. No exercise invokes either practice skill; none teaches authoring one. |
| Agentic mental model, untrusted content | `04-leadership/03-assessment-narrative.md` steps 0–1 | Genuinely good on prompt injection. Silent on approving actions, scoping writes, reviewing a plan before execution. |
| Connectors / MCP | Six-plus instructions to keep them off | Taught only as hazard. Defensible for a first session; means no one learns governed integration. |
| Memory and persistence | `01-reference/01-orient.md` steps 0 and 4 | Framed purely as privacy exposure. Never as a capability to configure deliberately. |
| Delegated agents / parallel work | Nowhere | Absent. |
| Scheduled recurring work | Nowhere | Absent, despite obvious fits (monthly usage reporting, new-title alerts). |
| Live artifacts / persistent views | Nowhere | Absent. `04-budget-brief.md` uses "artifacts" in the ordinary English sense, not the Cowork one. |

The capability map on the "Pick your AI tool" page (`src/routes/terminal-primer/+page.svelte`) makes
the mismatch concrete. Its five rows are project-or-notebook, standing brief, quick web search,
research mode, and connected source. For a Cowork cohort the rows should be connected folder, skill,
file output, action approval, and connector — a different mental model, not a renamed one.

Two structural consequences follow.

**The course produces almost no artifacts.** Across sixteen exercises learners generate a research
brief, a set of interview questions, a concept map, an outcome-family breakdown, a source plan, an
evidence boundary, a research plan, a source inventory, an appraisal checklist, a claim-citation
ledger, a claim-evidence matrix, a synthesis and an alternative reading, a gap map, a data analysis,
a workflow design, a platform-neutral search strategy, a search translation log, a mini-lesson, a
patron email, a task record, a handoff package template, a disclosure note, and a methods note. Two
steps send work outside the chat — `04-budget-brief.md` moves an approved record to a designated
repository, and the spot-check steps in `03-collection-dev/04-usage-analysis.md` and
`04-leadership/02-strategic-plan.md` require a spreadsheet and a live database. Everything else is
chat output. In Cowork nearly all of it would be a file in the connected
folder, and several want to be a spreadsheet rather than a Markdown table — the claim-evidence
matrix and the search translation log especially, since `03-collection-dev/02-selection.md` itself
asks "When should the matrix be maintained outside the AI tool?" and `04-budget-brief.md` asks
"Which artifacts should be retained outside the AI platform?" The course poses the question and the
tool answers it, but the exercises never close the loop. Rewriting these steps to say "write this to
`outputs/claim-evidence-matrix.xlsx` in the workshop folder" costs almost nothing and converts the
course from a chat demo into a workflow the learner leaves with.

**The reproducible-workflow exercise stops one step short of its own conclusion.**
`04-leadership/01-orient.md` has learners design a thirteen-stage AI-assisted workflow with inputs,
outputs, required expertise, and stop conditions, then define who reviews what with what authority.
That is precisely the content of a skill. As written it ends as prose in a chat. The natural
capstone is for the learner to save it as a skill, at which point the entire course becomes durable
institutional practice rather than a day of exercises — and the learner has learned the one Cowork
concept with the highest leverage for a library. Relatedly, `WORKSPACE-BRIEF.md` is itself a skill
wearing a different hat; the course could say so.

**A note on the two installed practice skills.** `practice-library-reference-interview` and
`review-ai-research-output` are the strongest assets in the repository. The interview skill's
instruction to "volunteer only what a real patron would naturally volunteer" and to introduce at
most one twist after the core need is established is a well-designed simulation. The review skill's
three-state verdict (Hold / Revise and verify / Ready for human decision) and its rule to "never
convert 'not checked' into 'supported'" are exactly the discipline Module 2 is trying to build by
hand. Participants install both at Step 8 and the curriculum then never mentions them. Module 1
exercise 2 is a reference-interview exercise that should hand off to the interview skill; Module 2
exercise 4 is a manual version of what the review skill does. Wiring them in would both shorten
those exercises and teach, by demonstration, what a skill is for.

---

## Axis 2: JHU Sheridan specificity

### What is actually JHU

In the learner-facing curriculum: brand colors in `src/app.css`, `tailwind.config.ts`, and
`ModuleCard.svelte`; a heading on the landing page; and one incidental row in `usage-report.csv` —
`Portal: Libraries and the Academy,Johns Hopkins UP,Project MUSE`. That is the whole of it.
`WORKSPACE-BRIEF.md` says "This hypothetical research library." The phrase "clinicians, and
community borrowers" in the same sentence gestures at a Hopkins-shaped service profile without
naming anything.

The root `FACILITATOR.md` is the exception, and it is worth noting because it shows the localization
work has begun somewhere. Its distribution section names the JHU Sheridan Libraries
`agentic-skill-library`, explains the `jhu-main` branch trap, and documents the deliberate split
between the two participant-facing `.skill` files and the two facilitator skills. That is real
institutional knowledge. None of it has reached the curriculum the participants actually work
through.

### The single scenario

Fourteen of the sixteen exercises run on one request: whether open-access publishing affects the
reach and use of public-health research outside universities. Only two sit outside it —
`03-collection-dev/04-usage-analysis.md`, which uses the serials data, and
`04-leadership/03-assessment-narrative.md`, which designs a generic mini-lesson. Even
`evidence-notes.csv` is the same scenario in another form, since its rows are that question's
outcome families. It is a well-built scenario — the seeded ambiguity around "reach" pays off
repeatedly, and the requester profile plausibly evokes Bloomberg School work. But it is one scenario
carrying almost the whole course, and it is a scholarly-communication and bibliometrics question. It is not the daily work of most Sheridan staff, and a participant in
technical services, special collections, or digital scholarship will finish the day without having
practiced on anything resembling their own queue.

### Coverage lost in a previous rewrite

The directory and file names preserve an earlier version of this course. Module `02-cataloging`
contains exercises named `02-marc-record`, `03-subject-headings`, and `04-abstract` whose actual
content is about research modes and source verification. Module `03-collection-dev` contains
`02-selection` and `03-evaluate`, which are now a claim-evidence matrix and a synthesis exercise.
Module `04-leadership` contains `02-strategic-plan`, `03-assessment-narrative`, and `04-budget-brief`,
which are now search-syntax translation, instruction design, and a handoff package. Module 1 is
mostly intact, though `01-reference/03-synthesize.md` is titled "Build a Search Concept Map" while
the actual synthesis exercise now lives at `03-collection-dev/03-evaluate.md` — so the two most
confusable names are also swapped.

Beyond the maintenance confusion, this reveals something about scope: the course was retargeted from
cataloging, collections, and administration onto research support, and the earlier material was not
replaced. Nothing in the current curriculum touches metadata and authority work, archival
description or finding aids, dataset curation, or budget and licensing analysis — all of which are
real Sheridan staffing. The `role_tags` in the module frontmatter tell the same story: reference,
liaison, research_support, systematic_review, assessment, data, instruction, and
scholarly_communication, with no technical-services or special-collections tag anywhere.

### Where the course asks the learner a question it should be answering

The reflection prompts repeatedly defer to the institution. `01-reference/01-orient.md` asks "What
would you need to confirm with your institution before using this setup with a real consultation?"
`01-reference/04-followup.md` asks "What level of AI-use disclosure does your institution require,
and where should it appear?" `04-budget-brief.md` closes the entire course with "What is your first
local policy question after this workshop?" These are the right questions for a vendor-neutral
course sold to many libraries. For a Sheridan cohort they are the questions the workshop exists to
answer. A one-page local annex — data classification tiers and which tier the workshop tool is
cleared for, the disclosure language actually approved for patron-facing communication, who holds
authority to reject or escalate an AI-assisted output in each unit, and the boundary between
Sheridan and the medical libraries for anything touching PHI — would convert every one of those
prompts from homework into a check.

Similarly, `04-leadership/02-strategic-plan.md` step 1 contains a literal `[DATABASE AND INTERFACE]`
placeholder and instructs the learner to "Choose a database your institution provides and name it in
the prompt." That is the single clearest localization point in the course, and it is currently a
blank the learner fills in.

### Gaps to fill locally, stated as categories

I have not invented Sheridan specifics. These are the slots that need local input, and each is a
question for you or a Sheridan contact rather than something to research from outside:

1. Which discovery layer, ILS, and two or three named databases should replace the placeholder in
   `04-leadership/02-strategic-plan.md`, and which are the ones staff actually struggle to translate
   syntax between?
2. Which schools and divisions does the liaison structure cover, and where does the boundary sit
   with the medical library system? This determines whether the review-authority exercise in
   `04-leadership/01-orient.md` can be answered concretely.
3. What is the institutional data classification scheme, which tier does the workshop's Bedrock
   configuration sit in, and what is the approved AI-disclosure language?
4. Should the JHU Press, Project MUSE, and open-access agreement context be used deliberately? It is
   an unusual publisher-adjacent position for a university library and currently appears only as an
   accident in a CSV.
5. Which units are in the cohort? If technical services, archives, or digital scholarship are
   attending, the course needs at least one scenario per unit rather than one scenario total.
6. Should `usage-report.csv` be replaced? Seven of its ten rows are library-science journals, which
   is an implausible profile for a real renewal decision and quietly signals to participants that
   the data is fake.

---

## Other defects found

**Timing contradiction.** Every `module.md` declares `estimated_minutes: 60`, and the four
exercises within each sum to 60. `FACILITATOR.md` declares a total duration of 3 hours 15 minutes
built from "four 40-minute modules." A facilitator planning from the application's numbers will
overrun the published schedule by eighty minutes. Module 2 is the worst case, since forty minutes
must also absorb the wall-clock time of a research run.

**A split between the setup and the curriculum, though not between the two guides.** The
installation paths are in fact reconciled: root `FACILITATOR.md` documents the Codex route, a
`claude-code` plugin route, and the participant `.skill` distribution, and it cross-references
`PARTICIPANT-SETUP.md` Step 8 directly. The unreconciled part is the curriculum itself.
`FACILITATOR.md` still declares supported products as ChatGPT, Claude, Gemini, and Microsoft 365
Copilot and instructs facilitators not to require identical menus, while `PARTICIPANT-SETUP.md`
walks every participant into one specific configuration — Claude desktop, Bedrock, Cowork, a
connected folder, and two saved skills. Neutrality is a real cost once the cohort is standardized:
it is why the exercises say "upload" to people who have a connected folder.

**A promise the curriculum does not keep.** `PARTICIPANT-SETUP.md` line 225 tells participants that
"Two of the workshop exercises are run by *skills* rather than by instructions you read off a page."
No such exercises exist. Participants are told to expect skill-driven exercises, install the two
skills, and then work through sixteen exercises that never mention them.

**External references check out.** Both cited authorities resolve: `https://www.ala.org/acrl/standards/ai`
returns the ACRL AI Competencies for Academic Library Workers, approved October 2025, and the
`2026-06`-dated ALA guidance path returns a valid 19-page PDF. Nothing to fix here. Worth
re-checking before each cohort, since the course leans on both, but they are sound today.

**A checkpoint that leaks its answer.** `01-reference/01-orient.md` step 3 has the checkpoint "The
response cites the supplied files and identifies the ambiguity around the meaning of reach." Since
the facilitator skill is instructed to keep facilitator notes internal but checkpoints are learner-
visible in the application, this hands over the discovery the next several exercises are built on.

---

## Recommendations, in priority order

1. **Build the seeded-defect research-scan fixture** and rewrite Module 2 to audit it rather than
   generate it. This unblocks Module 2 under Bedrock, makes the module deterministic across cohorts,
   and guarantees the discovery moment. Highest value per hour of work in this list.
2. **Correct the false reassurance** in `PARTICIPANT-SETUP.md` Step 6 about web search not blocking
   the exercises, once the fixture exists and the statement becomes true.
3. **Convert deliverables to files.** Add an explicit output path to every step that currently ends
   in a chat table. Make the claim-evidence matrix and the search translation log spreadsheets.
4. **Make the Module 4 workflow exercise end in a saved skill.** This is the course's natural
   capstone and the single highest-leverage Cowork concept for a library.
5. **Wire the two practice skills into the curriculum** at Module 1 exercise 2 and Module 2
   exercise 4.
6. **Replace the tool-neutral vocabulary** in the exercise instructions with Cowork's, and rebuild
   the capability map on the primer page around connected folder, skill, file output, action
   approval, and connector.
7. **Write the one-page JHU local annex** and rewrite the deferring reflection prompts to check it.
8. **Resolve the timing contradiction** between the module frontmatter and `FACILITATOR.md`.
9. **Retire the product-neutral framing** now that the fork has decided the question. Change the
   supported-products line in `FACILITATOR.md`, the "Pick your AI tool" page, the tool-comparison
   links, and the "Tool-Neutral Setup" section of `WORKSPACE-BRIEF.md`. Keep the no-premium and
   non-AI fallbacks — those serve equity and are worth preserving on their own merits — but stop
   paying the vocabulary cost of supporting four products the cohort will not use.
10. **Rename the vestigial directories and files** so that names match content.
11. **Add one scenario per attending unit**, once the cohort composition is known.
12. **Consider a light agentic module** covering action approval, folder scoping, and one scheduled
    recurring task. The course currently teaches learners to verify text; Cowork also requires them
    to verify actions.

Items 1 through 5 are worth doing before the next cohort regardless of how the JHU questions are
answered. Items 7 and 11 depend on local input that has to come from Sheridan.
