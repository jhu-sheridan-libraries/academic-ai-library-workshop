# Archives Fixture Key — Seeded Defects (FACILITATOR ONLY)

**Do not distribute this file to participants and do not place it in the connected workshop folder.**
Same reason as `FIXTURE-KEY.md`: an archives participant who reads this ahead of time loses every
discovery moment on the archives track, and the Module 2 parallel in particular stops working.

Four fixtures are involved, all under `sample-data/archives/`:

- `collection-request.txt` — the reading room inquiry that drives the archives track, parallel in
  role to `research-request.txt`.
- `finding-aid-draft.md` — **the Module 2 audit object for archives**: a legacy finding aid retyped
  for the web, with defects deliberately seeded into it.
- `digitization-inventory.csv` — item-level metadata for a digitization batch, the second Module 2
  audit object and the data file for the Module 3 arithmetic exercise.
- `accession-note.txt` — an accession and preliminary appraisal record, used for appraisal and
  prioritization reasoning in Module 3 and as the intake material in Module 4.

Everything is fictional. The Calderwood Institute, Weldon Harbor, the Tidal Flats, the Ferris
family, the Weldon Harbor Redevelopment Authority, Halloran Studio, and Tidewater Press Photo
Service are inventions. There is no real collection behind any of it.

## Why the archives track exists

The published course description promises the module adapts to the learners in the room. Archives
staff are confirmed attendees, and fourteen of sixteen exercises otherwise run on a single
public-health scholarly-communication scenario. The archives track is body markdown only — a
`## Archives track` section in each exercise — so the frontmatter steps and the application schema
are untouched.

## The parallel that matters most

`FIXTURE-KEY.md` says the single most useful thing in the research track is the contradiction between
the AI scan and the librarian's own evidence log. The archives equivalent is this:

**Unverified description asserted with confidence is the same failure mode as an unverified
citation.** A finding aid is a claim structure. A collection-level scope note, a biographical note, a
date range, an extent statement, and a rights statement are all assertions, and each one can be
checked against the records or against a source. The legacy finding aid asserts all of them with the
same flat confidence, and several of them are wrong in ways the containers themselves disprove.

There is a second, sharper parallel available for cohorts with time. `finding-aid-draft.md` and
`digitization-inventory.csv` describe overlapping material — Series 4 of MS-114 and PH-041 both hold
Tidal Flats photographs, and `accession-note.txt` records a probable third copy of the same negatives
in the unprocessed accession. The three files disagree about creator, date, and rights for what may
be the same images. Nobody has reconciled them. That is the archives analogue of the five-way
correspondence between the scan and the evidence log: the repository's own records already contain
the correction, and the polished public finding aid does not reflect it.

## Seeded defects in `finding-aid-draft.md`

**Description that is about the creator rather than about the records**

1. **The scope and content note describes a career, not a collection.** It says the papers "document
   the long and distinguished career of Harlan Ferris" and that "researchers will find much of
   interest throughout." It names no topic a researcher could search for, no date concentration, and
   no strength or weakness. The Tidal Flats material — the thing the requester in
   `collection-request.txt` actually needs — appears nowhere in it, although the container list shows
   two boxes and a run of correspondence on the subject. *Pays off in:* M1 e2 (the brief must record
   that the finding aid does not answer the request), M2 e1 and e3 (the collection-level note is the
   claim least supported by the containers).
2. **The biographical note is evaluative and unsourced.** "Widely regarded as the most capable
   municipal engineer of his generation," "generally credited with authoring the 1954 waterfront
   plan," "mourned by the city he had rebuilt." No source is given for any of it, including the birth
   year, the date he became City Engineer, and the attribution of the 1954 plan. The attribution
   matters, because it is the one an outside researcher is most likely to cite. *Pays off in:* M2 e4
   (the ledger row where a biographical assertion has no source at all), M3 e1 (asking for the source
   of the 1954 attribution is the boundary test — the file does not contain one).
3. **Ada Ferris is a name and nothing else.** The biographical note gives her one clause, "active in
   civic affairs." The requester believes she was the central figure and has asked for her papers.
   The finding aid neither supports nor corrects that, and gives no basis for deciding whether the
   collection is the right unit. *Pays off in:* M1 e2 and M1 e4 (the correction the researcher needs
   is a description problem, not a search problem).

**Descriptive language requiring remediation**

4. **Series 4 describes "views of the colored district before clearance."** Repository-supplied
   description, in the repository's own voice, in a public access system.
5. **Box 3 folder 1 is titled "Correspondence re: colored tenants, Tidal Flats."** A folder title
   that may or may not be the creator's original; the finding aid gives no way to tell, which is
   itself the problem. Remediation practice distinguishes a transcribed original title from a
   supplied one, and this aid does not.
6. **Series 2 describes "the program of slum clearance in the blighted areas of the lower city"** as
   though "blighted" were a neutral geographic descriptor rather than the operative legal term the
   clearance programme used to justify itself.
7. **The subject headings include "Slums — Weldon Harbor"** and no heading at all for the displaced
   community, for housing discrimination, or for the neighborhood as a place people lived.

*These four pay off in:* M2 e3 and e4 (they are description asserted in the repository's voice, and
each needs a status distinct from "wrong"), M3 e2 (the learner's local standard has to have somewhere
to put "accurate to the period and unacceptable as current description"), and M4 e4 (the archives
capstone skill is a description remediation review).

Handle these soberly in the room. They are the terms archives are actively remediating, and the
teaching point is procedural: who decides, what replaces them, whether the original wording is
retained as provenance, and where the decision is recorded. If a participant is distressed rather
than analytical, let them work the digitization inventory instead and come back to this.

**Internal contradictions**

8. **The stated date range does not match the containers.** Collection dates read 1912–1968. Box 4
   folder 2 holds condolence letters dated 1969–1974 and Box 8 folder 1 holds an 1901 report. Nothing
   in the container list is dated before 1931 except that 1901 item, so the 1912 start date has no
   visible basis either.
9. **Extent is stated in three incompatible ways and never totalled.** "14 boxes" at collection
   level; Series 1 in linear feet; Series 2 in cubic feet; Series 3 and 4 unmeasured; Series 4 given
   as "approximately 400 items" while the container list shows two boxes. There is no way to derive a
   collection extent from any of it.
10. **The container list has wildly uneven granularity.** Series 1 is described folder by folder.
    Series 3 is four boxes described as "Miscellaneous papers, n.d." Series 4 is two boxes with no
    folder listing at all. Box 8 folders 2–9 are "Sundry engineering files, undated." Roughly a third
    of the collection is effectively undescribed, and the finding aid's surface polish conceals that.

*Pays off in:* M2 e2 (the reconstruction of the descriptive decisions — the granularity tells you
where the original processor stopped and why), M2 e3 (the inventory makes the unevenness countable),
M3 e4 (the extent problem is an arithmetic problem the learner has to refuse to resolve by guessing).

**Restrictions and rights**

11. **The restriction note says nothing actionable.** "Portions of this collection are restricted.
    Consult the archivist." It does not say which portions, on what basis, at whose instruction, for
    how long, or whether the restriction is on access or on reproduction. A researcher cannot plan a
    visit around it and a reading room supervisor cannot enforce it consistently.
12. **The copyright statement is a blanket assertion.** "The Institute holds all rights to material
    in this collection." Series 1 is incoming correspondence, which is third-party material by
    definition, and Series 4 contains photographs whose creators are not established. This is the
    statement that would be used to answer the requester's demand for permission to publish.

*Pays off in:* M1 e4 (the followup has to correct the researcher's assumption without over-promising),
M2 e4 (both are high-consequence claims and belong at the top of the ledger), M4 e1 (the workflow
needs a rights review stage with a stop condition).

**Provenance of the description itself**

13. **No processing information, no immediate source of acquisition, no custodial history, no
    reviser, no date.** The closing line records that the guide was "retyped for web publication"
    and that the reviser and date were not recorded. So the one thing the file does document about
    its own production is that its production is undocumented. This is the direct analogue of the
    research scan's run statistics: a claim about method that turns out to establish nothing.
    *Pays off in:* M2 e1 (test the file against its own banner), M4 e2 (what a reviewer needs in
    order to redo the work).

## Seeded defects in `digitization-inventory.csv`

14. **TF-003 has an inappropriate rights statement.** Marked "No Copyright - United States." The
    notes record a commercial studio's blind stamp and that no agreement is on file. A 1961
    commercial studio portrait is the least likely item in the batch to be free of copyright.
15. **TF-011 is a third-party press photograph published anyway.** Creator is a press photo agency,
    the verso carries an agency credit line and a "must credit" instruction, rights are recorded as
    "Unknown," and the access condition is "Open - published on collection website." Unknown rights
    and published access in the same row.
16. **TF-012 is published on an unlocatable-rightsholder statement with no accession record.**
    "In Copyright - Rights-holder(s) Unlocatable or Unidentifiable" is a defensible statement to
    reach after a documented search; the notes say the donor is unknown and the accession record was
    never located, so no search was documented. It is also the image of Ada Ferris — the one the
    requester is most likely to want for the exhibit.
17. **TF-005 states an unconfirmed attribution as fact.** Creator field reads "Harlan Ferris." Notes
    read "Unsigned. Handwriting on verso resembles annotations elsewhere in MS-114." A resemblance in
    a note has become an assertion in a field, and the field is the part that gets indexed and
    harvested.
18. **TF-007 states a guessed date as fact.** Date field reads "1948." Notes read "No date on item
    or verso." Nothing else in the row supports 1948, and the surrounding survey sequence is 1950s.
19. **Date formatting is inconsistent across the batch.** `1948`, `circa 1952`, `195-?`, `1955-06-14`,
    `6/1957`, `1960s`, `n.d.`, `circa 1958`. Four different conventions for approximate dates and two
    for exact ones. Nothing sorts, nothing ranges, and a normalization pass would have to guess.
20. **TF-009 should stop digitization and is queued for scanning.** A cellulose nitrate negative with
    an active mold bloom, a strong odor, and base cockling, with access condition "Queued for
    scanning." This is a health and safety hold and a conservation hold, not a workflow step. It is
    the row where the correct answer is to remove an item from the batch rather than to improve its
    metadata. TF-013 is a softer version of the same judgment — brittle, two tears entering the image
    area, conservation consult requested and not yet returned, also not started.
21. **TF-004 and TF-010 carry period captions as repository description.** "Slum children at the
    Tidal Flats standpipe" and "Negro tenants awaiting relocation interviews." TF-010's notes say the
    caption was transcribed from the verso; TF-004's do not say where its title came from. So the two
    rows need *different* remediation decisions, and the difference is not visible from the title
    field alone.
22. **TF-006 appears twice.** Two rows, one identifier, describing two exposures of the same subject.
    Any count of the batch is wrong by one, and any system keyed on the identifier will collide.
23. **TF-008 is missing both dimensions and a rights statement.** Two empty fields in a row that is
    nonetheless marked "Open." Its notes record an acidic mount actively damaging the print, which
    nothing in the workflow acts on.

*Pays off in:* M2 e3 and e4 (the inventory and the ledger — item metadata is a claim set), M3 e2 (the
appraisal matrix needs a status for "rights unresolved" that cannot be mapped upward to "cleared"),
M3 e4 (counting the batch, computing completion rates, and discovering that the denominator is not
what it appears to be), M4 e1 and e4 (the rights triage skill).

## Seeded issues in `accession-note.txt`

These are less "defects" than an accurate description of an unresolved situation. The file is
deliberately honest — it says plainly that nothing has been appraised and nothing is open. What it
contains are decisions that have not been made, and the exercise is to reason about them rather than
to catch the file out.

24. **Authority to convey is unestablished.** The transferring office says it is the successor body.
    Custody is not the same as the right to convey, and the deed is unsigned.
25. **The deed of gift is unexecuted and silent on copyright.** Returned with a blank signature block
    and "with counsel." Two of the three donor conditions exist only in email.
26. **Donor condition 2 should not be accepted.** Prior review of any publication, and consultation
    on journalist requests, is a condition on research use. This is the row where the correct
    professional answer is to negotiate it out rather than to design a workflow that honors it.
27. **Donor condition 1 is unimplementable as written.** A twenty-five-year closure on "personnel and
    case files" when the transfer list does not identify which boxes hold them. The restriction
    cannot be applied without a survey that has not happened — the same ambiguity as defect 11 in the
    finding aid, arriving from the other direction.
28. **The extent cannot be totalled.** 212 linear feet measured, 40 cartons unmeasured, microfilm and
    oversize unrecorded. Against roughly 180 linear feet processed per year across all collections by
    three archivists, one half-time. The arithmetic is the appraisal argument.
29. **Restricted personal information is probable and unsurveyed.** Relocation case files with names,
    addresses, household composition, income, and physician's letters; a folder labeled "medical"; a
    run of employee grievance files. Note for the room: this is the material that must never be put
    in front of an assistant, and the accession note describes it without reproducing any of it.
    That distinction is worth naming explicitly.
30. **Unreadable and unexamined media.** Diskettes, Zip disks, 8mm film, and an unlabeled hard drive
    of unestablished provenance. The hard drive is the born-digital analogue of
    `harvested-source-page.md` — unknown content from an outside party, and the note correctly says
    it should not be connected to anything until imaged on isolated equipment.
31. **A researcher is already waiting.** The last line before the appraisal statement records an
    outside request for Tidal Flats material. That is the same researcher as
    `collection-request.txt`, and it is the pressure that makes the prioritization decision real.

*Pays off in:* M3 e2 and e3 (the appraisal matrix and the processing plan — the whole point is that
the plan must be defensible without pretending the unknowns are known), M4 e1 (the archival workflow
stages and their stop conditions), M4 e3 (the hard drive, in the mini-lesson on untrusted material).

## Where the archives track deliberately does not fork

Two exercises get a "the default already serves you" note rather than a variant, and this is a
judgment worth defending if a participant asks:

- **M1 e1** is about the connected folder, the data boundary, and reading an action before approving
  it. None of that is domain-specific. The archives note adds one substitution and one extra
  data-minimization item, and says plainly that the rest of the exercise stands.
- **M4 e3** turns on a single shared fixture, `harvested-source-page.md`, and the concept is identical
  for both tracks. The archives note substitutes the audience and adds the born-digital transfer
  case. Inventing a second injected document would have added length and no lesson.

## Rotating the fixtures

Change values, not structure. Move the unconfirmed attribution to a different identifier, change
which row should stop digitization, alter the date range conflict so the offending folder is
elsewhere in the container list, and swap the extent units. Keep four things intact, because the
track's discussions depend on them: the three-way disagreement between MS-114, PH-041, and accession
2026-017 about the same photographs; the blanket copyright assertion; the unimplementable
restriction note; and the researcher's assumption that a named person's papers are the right unit.
Update this key whenever you rotate.
