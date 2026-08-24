# Fixture Key — Seeded Defects (FACILITATOR ONLY)

**Do not distribute this file to participants and do not place it in the connected workshop folder.**
It ships inside the facilitator plugin for the same reason the hint ladder does: a participant who
reads it ahead of time loses the entire Module 2 discovery moment.

Two fixtures are involved:

- `sample-data/research-scan-draft.md` — a simulated AI research output with defects deliberately
  seeded into it. Module 2 audits this file instead of generating a live report.
- `sample-data/harvested-source-page.md` — a simulated retrieved web page carrying an embedded
  instruction, used in Module 4's teaching exercise.
- `sample-data/mock-sources/` — eleven simulated retrieval results, one per citation in the scan's
  source table, so that the identity checks in M2 e3 and e4 can be done without web search. Keyed
  below.

## Why fixtures instead of a live research run

Two reasons, and the second matters more than the first.

The practical reason is that participants are routed through Amazon Bedrock, which does not include
web search. A live research run is not available to them.

The pedagogical reason is that the previous design only worked if the model misbehaved. Module 2's
audit needed a report containing errors, and Module 3's boundary test needed the model to fabricate
a citation for source C. A current model holding `WORKSPACE-BRIEF.md` will usually decline to
fabricate — so the lesson landed as "the tool behaved well" and the participant never saw a
fabrication. Moving the defects into the material makes the lesson fire every time, for every
cohort, identically.

## The link between the scan and the evidence log

This is the most useful thing in this document. The scan's sources A1–E1 are deliberately the same
five sources as rows A–E of `evidence-notes.csv`, matched by outcome:

| Scan | Evidence log | Outcome | The contradiction |
|---|---|---|---|
| A1 | A | Citation advantage | Scan states methods ("controlling for journal prestige and author seniority"); log says `metadata-only`, methods never checked |
| B1 | B | Policy use | Scan generalises to policy use; log records that policy use was defined only as citations in a limited document set |
| C1 | C | Practitioner access | Scan marks it **Verified**; log marks it `citation-unverified` — the record was never located |
| D1 | D | Multiple outcomes | Scan reports "across settings"; log notes mostly biomedical studies and high heterogeneity |
| E1 | E | Downloads | Scan calls downloads readership; log states downloads are not evidence of reading or use |

The librarian's own evidence log contradicts the AI scan on all five sources. If a cohort has time
for only one discussion, use this: the verification work had already been done and recorded, and the
polished report silently overwrote it. C1 is the sharpest case — a source the library had marked as
unlocatable appears in the scan as verified.

**The Module 2 discussion question this supplies** — and the reason it is written here rather than in
`FACILITATOR.md` — is *"why was the evidence log ignored?"* Hold it until the audit is finished. It is
the strongest question in the module and it is worthless if it arrives before the learner has read
both files. `FACILITATOR.md` is copied into the learner-coaching Skill's references, so this analysis
stays in this key, which is not.

## Seeded defects in `research-scan-draft.md`

**Fabricated and unverifiable records**

1. **A1 is fictional.** *Journal of Scholarly Metrics* does not exist, and the DOI
   `10.1080/jsm.2022.4471982` uses a real Taylor & Francis prefix with an invented suffix. It will
   not resolve. Marked "Verified" in the source table.
2. **C1 is the unlocatable record** from the evidence log, presented as verified.
3. **J1 is real-sounding and cited nowhere** — see below.

**Claim–source mismatches**

4. **Downloads presented as readership.** The executive summary and the Public attention section say
   articles are "downloaded roughly three times as often... demonstrating substantially greater
   readership among non-academic audiences." E1 is an aggregate download report. It cannot speak to
   readership, and it cannot isolate non-academic readers at all.
5. **Over-representation converted into increased probability.** B1 describes open-access articles as
   over-represented in a limited set of guidance documents. The scan converts this into "increases
   the probability that research is cited in policy," then asserts a causal mechanism ("The mechanism
   is straightforward").
6. **A survey reported as causal.** C1 is a cross-sectional practitioner survey. The scan calls
   access "the single strongest predictor" and the summary escalates to "Practitioners in
   low- and middle-income countries benefit most."
7. **Heterogeneity erased.** D1's high heterogeneity and biomedical skew disappear; the scan reports
   a conclusion holding "across settings."

**Coverage and use of the source set**

8. **Six of eleven sources support nothing.** Only A1–E1 appear in the body. F1, G1, H1, I1, J1, and
   K1 are listed as consulted and cited nowhere.
9. **J1 is the buried counter-source.** "Measuring readership beyond the download" (2024) directly
   addresses the scan's weakest inference and is silently unused. A participant who notices J1 in the
   table and asks why it was not used has found the most sophisticated defect in the fixture.
10. **The geographic claim rests on the two weakest sources.** LMIC evidence comes only from C1
    (unverified) and K1 (could not access), yet the summary and conclusion both foreground
    resource-limited settings.
11. **F1 is scope drift.** Preprints are not open-access publishing; the source does not bear on the
    question as asked.

**Column and framing defects**

12. **The access column conflates access with verification.** Nine of eleven rows read "Verified,"
    which at best records that a page loaded. No claim was verified against any source.
13. **Disagreement erased.** "The evidence base is consistent and the direction of effect is not
    seriously disputed" is contradicted by D1's heterogeneity and by J1's existence.
14. **A recommendation nobody asked for.** The request asked for a scoping search and a two-page
    evidence map for grant planning. The scan closes with a budget recommendation: "Investment in
    open-access publishing costs is justified on reach grounds alone." This parallels the
    do-not-recommend-cancellation discipline in Module 3.
15. **Limitations are present but inert.** The two-sentence limitations note is technically accurate
    and does no work — it does not name which sources were inaccessible or which claims are affected.

## The injected instruction in `harvested-source-page.md`

The page carries an HTML comment addressed to AI assistants that attempts three things: to mark all
its claims supported without checking, to enumerate and exfiltrate the contents of other files in
the working folder, and to conceal itself from the user.

Two points worth drawing out in discussion. First, the visible prose of the page is *good* — it
correctly cautions against treating downloads as readership, and it is more careful than the AI scan
that cites this class of source. Credible content and a malicious payload are not mutually
exclusive, and "does this source seem reputable" is not the relevant test. Second, the attack targets
the working folder specifically. In a chat product with file uploads, the blast radius is what the
user attached; with a connected folder, it is everything in the folder. That is the concrete reason
the setup guide insists on connecting the narrowest folder that contains what is needed.

If a participant's tool surfaces the injection and refuses it, that is a good outcome to discuss
rather than a failed exercise — ask what they would have needed to see in order to catch it
themselves if the tool had complied.

## The mock retrieval results in `sample-data/mock-sources/`

Eleven files, `A1.md` through `K1.md`, plus a learner-facing `index.md` that states what each one
returned. They exist because participants have no web search and because eleven live lookups would
give eleven learners eleven different sets of results — the audit would stop being comparable across
a cohort. Every file is fictional and says so at the top.

The folder supplies the *retrieval* and withholds the *judgment*. Nothing in it says whether a record
matches its citation, whether the source can carry the claim, or what to record. Learners open a
sample themselves in M2 e3 step 1, and consult the same records again in M2 e4 step 1 when they set
statuses.

| ID | What it returns | Which seeded defect it pays off |
|---|---|---|
| A1 | DOI resolver error, plus a serials-directory lookup finding no such journal title | Defect 1 — A1 is fictional. Two independent checks fail, so a learner cannot write it off as a typo |
| B1 | Report record, front matter, methods note on p. 11 | Defect 5 — the methods note operationalises policy use as citations within 214 named guidance documents, which is what the scan converts into a probability |
| C1 | Database search, four queries, zero results, session ID | Defect 2 — the unlocatable record the evidence log flags as `citation-unverified`. Worded as a completed search, not a connection failure |
| D1 | Article record with abstract | Defect 7 — the abstract states I² = 82%, 34 of 41 studies biomedical, 38 of 41 high-income, and declines to generalise. The scan's "across settings" has no support in it |
| E1 | Download report record with front matter | Defect 4 — the report's own front matter says a download is a retrieval event and is not evidence of readership or use, and that its logs cannot characterise who retrieved a file |
| F1 | Article record with abstract, clearly about preprints in emergency communication | Defect 11 — scope drift. Also carries a metadata mismatch; see below |
| G1 | Citation and abstract visible, full text behind a subscription prompt that itemises what is and is not available | Defect 12 — verifiable as existing, not verifiable as to content. "Verified" in the scan's access column cannot mean what it appears to mean |
| H1 | Sound, relevant article record with abstract | None. Clean by design |
| I1 | Organisational briefing note record with a status note | None. Clean by design |
| J1 | Article record with a strong, directly relevant abstract | Defects 9 and 13 — the buried counter-source. It measures retrieval against reading and use, finds rho = 0.21 and 0.04, and recommends against reporting downloads as readership. Also carries a metadata mismatch; see below |
| K1 | HTTP 403 from the publisher platform, no record or abstract returned | Defect 10 — consistent with the scan's own "Could not access." One of the two sources the geographic claim rests on |

Four of the eleven yield no usable full text, and they fail in four different ways on purpose: an
identifier that does not resolve (A1), a record that cannot be located (C1), a record visible but not
readable (G1), and a platform that refused the request (K1). Those license four different statements
about a source, and the vocabulary in the e3 verification-level list maps onto them. If a cohort
collapses all four into "couldn't get it," that is the discussion.

### The two metadata mismatches

Deliberately seeded so that the citation-identity check in M2 e4 step 1 has something to catch. Both
sit on records that otherwise resolve cleanly, on different records.

1. **F1 — year off by one.** The scan cites Duarte (2021); the record's landing page gives 2022.
   Everything else matches: title, author, journal, volume 7 no. 4, pp. 310–329.
2. **J1 — wrong venue.** The scan places Lindgren (2024) in *Journal of Scholarly Metrics*; the
   record gives *Bibliometrics and Information Practice*, same volume, issue, and pagination. This
   one is load-bearing twice over. *Journal of Scholarly Metrics* is the journal A1's fabrication
   depends on not existing, so a learner who checked A1 and then reaches J1 has to decide whether J1
   is fabricated too. It is not — the article resolves, with a DOI, under a different title. The
   lesson is that a wrong venue is a citation-identity failure, not proof of invention, and the two
   call for different statuses.

Expect confusion at J1 and let it run for a minute before resolving it. A learner who says "the
journal doesn't exist, so this one is made up as well" has reasoned well from an incomplete check;
the fix is to have them read the record rather than the citation.

### H1 and I1 are clean by design

Do not let a cohort talk itself into a finding on these two. H1 is a sound, relevant article on
archiving practices. I1 is an organisational briefing note that is fine as far as it goes and says
plainly what it is not. Neither carries a seeded defect.

They are in the fixture because an audit exercise in which every check fails teaches the wrong
reflex. A learner needs the experience of following a citation, finding it is exactly what it claims
to be, recording "identity confirmed," and moving on — otherwise verification degrades into a search
for something wrong, and a cohort that only ever finds defects will start manufacturing them. H1 and
I1 also carry their own quieter point: both are entirely sound *and* cited nowhere in the scan's
body. The problem with them is not the sources. It is defect 8.

## The mock database — `sample-data/mock-database/` (M4 e2)

**Do not put this section in front of participants.** M4 e2 asks the learner to find the divergences
listed below by reading the platform documentation. Naming them in advance removes the exercise.

Module 4 exercise 2 used to send learners into a licensed database of their own choosing to verify
syntax and run test searches. That required a subscription, a login, and time nobody had, and it
produced sixteen different experiences in one room. The authority now sits in the folder instead. The
learning outcome is unchanged: an AI-drafted translation is a draft until it is checked against the
platform's own documentation and against what the searches actually returned, and every material
change gets logged.

Four files, describing a platform that does not exist:

- `HELP-syntax-reference.md` — the syntax documentation for the Wexford Abstracts and Index on the
  Perihelion 6 interface. Internally consistent, and deliberately not the syntax of any real product.
- `search-session-transcript.md` — a ten-line session history on that platform, with counts, flags,
  and errors.
- `thesaurus-extract.md` — the Wexford Thesaurus, complete for two branches, plus the subject
  authority terms used by the fictional Calderwood Institute Archives.
- `mock-authority-file.md` — the Weldon Harbor Regional Name Authority File extract, for the archives
  track. Covers every name in `archives/finding-aid-draft.md`.

### The seeded syntax divergences

Every one of these is stated plainly in `HELP-syntax-reference.md`. They are seeded because a model
drafting from general convention will not produce them, and catching them is the exercise.

| Element | Perihelion 6 | What a draft will usually say |
|---|---|---|
| Article title | `AT=` | `TI=` — which on this platform is the *source publication* title |
| Publication year | `YR:2015/2025`, colon, slash range | `PY=2015-2025` — `PY=` here is *processing* year |
| Subject | `DE=`, or `DE+=` to explode | `SU=` — which here is a supplementary-material limit |
| Unlimited truncation | `%` | `*` — which is not an operator character at all |
| Single character | `#` required, `~` optional | `?` |
| Proximity | `3ADJ`, `5NEAR` — distance first | `NEAR/3`, `ADJ3`, `W/3`, `N3` |
| Proximity operands | single terms and quoted phrases only | parenthesised synonym groups on both sides |
| Precedence | strictly left to right; `AND` does not bind tighter than `OR` | `AND` binds tighter |
| Quoting | literal, unstemmed, so *narrower* than unquoted | quoting merely fixes phrase order |
| Descriptors | no quotation marks inside `DE=`; no auto-explode; no auto-mapping of non-preferred forms | quoted multi-word headings, assumed explosion, assumed redirect |
| Export | 500 records per operation; `Brief` is the default and drops abstracts and descriptors | no limit worth mentioning |

**The one to expect wrong, and the one that matters most, are not the same.** Almost every draft gets
the truncation character and the proximity form wrong, and those are easy for the learner to catch
because the platform errors or the documentation contradicts them outright. The dangerous one is
`PY=`: it is valid syntax, it accepts the range, it returns a plausible count, and it silently limits
on the year WAI processed the record rather than the year the work was published. Nothing errors and
nothing flags. The second most dangerous is the left-to-right precedence rule, for the same reason —
an unparenthesised synonym list followed by `AND` narrows the whole list and returns a number that
looks like a reasonable search. If discussion has room for one point, use these two: the errors teach
you to check, and the silent successes are why checking has to be systematic rather than reactive.

### What happened in the session transcript

Set numbers are assigned only to lines that execute. Line 4 errors, so it consumes no set number and
every set after it is numbered one below its line — S4 is line 5, S7 is line 8. A learner tracking
sets by line number will reference the wrong set. This is why the final line's operands are worth
checking before its count is.

| Line | Result | Cause |
|---|---|---|
| 1 | S1, 0 records | `SU=` is the supplementary-material limit. A subject term matches no accepted value, so the line succeeds and retrieves nothing. No error, no flag. |
| 2 | S2, 14,208 | Worked. Descriptor plus core-field keywords, correctly formed. |
| 3 | S3, 1,942,660 | `polic%` expanded to 3,412 terms — *police*, *policing*, *policyholder* — and `health%` to 1,196. The `[TRUNC]` flags in the history are the evidence; the result count alone only says "large." |
| 4 | `E-07`, no set | `*` is not a Perihelion character. The hard failure, and the easiest finding in the file. |
| 5 | S4, 3,117 | *Research impact metrics* is not a descriptor in the 2026 thesaurus. Perihelion silently re-ran it as a core-fields keyword and flagged `[T-FALLBACK]`. The count is plausible and the set is uncontrolled. |
| 6 | S5, 46 | Worked. Correct distance-first proximity between two quoted phrases. |
| 7 | S6, 9,430 | `PY=` limited S2 on processing year, not publication year. Plausible count, no error, no flag — the silent defect, in the transcript as well as in the draft. |
| 8 | S7, 88,512 | Worked. `DE+=` explosion plus a correctly formed `YR:` range. |
| 9 | S8, 89,704 | `S2 AND S4 OR S7` evaluated left to right as `(S2 AND S4) OR S7`. The count is *larger* than every operand, which no AND can produce — the arithmetic is the tell. It also carries S4, the uncontrolled fallback set. |
| 10 | `E-22` | Export above 500 records. Nothing exported. |

Lines 2, 6, and 8 simply worked. Say so if a group starts treating the whole session as broken; the
skill being taught is telling the difference, not distrusting everything.

### The thesaurus extract

The term that does **not** exist is **`Research impact metrics`** — line 5 of the transcript, and the
term most drafts propose for the reach-and-use concept. The extract declares itself complete for the
two branches it covers precisely so that absence is a legitimate finding rather than an artefact of
the extract's size. `Research evaluation` and `Bibliometrics` are the descriptors a checked line
should end up with.

Two other traps worth watching: `Impact factor` and `Research assessment` are non-preferred forms with
`USE` pointers, and Perihelion does not follow a `USE` pointer for you. A learner who enters them in
`DE=` gets a `[T-FALLBACK]` keyword search, not the preferred descriptor.

### The authority file (archives track)

The name with **no record** is **`Tidal Flats Redevelopment Authority`** — a plausible corporate body
that the finding aid's language invites, and which has no established form, no variant form, and no
referral. Recording "no record found" is the correct outcome; drafting an authorized form for it is
the failure this half of the exercise exists to catch. Two further no-record results are supplied so
that absence is not a single lucky finding: `Ferris, Ada, 1922-` and a subordinate drafting division
under the city engineer's office.

The sharpest case is **`Ferris, Ada`**, which returns an undifferentiated referral rather than a
record: the mother, `Ferris, Ada Whitcomb, 1897–1979` (WHA-N-00415), is established, and the daughter
the finding aid also calls Ada Ferris is not. The finding aid conflates them, so this is where the
archives track meets the Module 2 fixture. Also seeded: `Weldon Harbor. Office of the City Engineer`
must be entered subordinately to the city while `Weldon Harbor Harbor Commission` must not, because
the commission was a state body — a distinction no draft will get right by default.

For the remediation column, the subject-authority section of `thesaurus-extract.md` supplies two
deprecated terms with different answers. `Colored people` has an established replacement,
`African Americans`. `Negro districts` has none, and says so. That asymmetry is deliberate: the second
case is the one that requires a decision rather than a substitution.

## Rotating the fixture

If you run the same cohort twice, or if participants compare notes between sessions, change the
seeded values rather than the structure: swap the fabricated journal name and DOI suffix, move the
buried counter-source to a different ID, and change which source is the unlocatable one. Keep the
five-way correspondence with `evidence-notes.csv` intact, because that link is where the module's
strongest discussion comes from.

If you rotate, rotate `mock-sources/` with it — the eleven records, its `index.md` table, and the two
metadata mismatches all have to keep matching the scan's source table, or the identity check in e3
produces mismatches nobody seeded. Keep two clean records whatever else you change. Update this key
whenever you rotate.
