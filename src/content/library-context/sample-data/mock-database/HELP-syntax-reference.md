# PERIHELION 6 - SEARCH SYNTAX REFERENCE - SIMULATED WORKSHOP MATERIAL

> **What this file is.** The syntax help page of a database platform that does not exist. Perihelion,
> the Wexford Abstracts and Index, the Wexford Thesaurus, and every code, operator, and error number
> below were invented for this workshop. The syntax described here is internally consistent and it is
> not the syntax of any real product. Read it as you would read the help documentation of a platform
> your library licenses: as the authority for what this platform does, and for nothing else.
>
> Do not carry these rules to a real database, and do not cite this file.

---

**Platform:** Perihelion 6 (interface release 6.4)
**Database:** Wexford Abstracts and Index (WAI)
**Thesaurus:** Wexford Thesaurus, 2026 release
**Document owner:** Perihelion documentation team
**Last revised:** 14 January 2026

---

## 1. How a line is read

Search lines are submitted one at a time from the command line box. Each line that executes is
assigned a set number - `S1`, `S2`, `S3` - and set numbers may be reused as operands in later lines.

**A line that returns an error does not execute and is not assigned a set number.** Set numbering is
continuous across successful lines only. If line 4 of your session fails, the set produced by line 5
is numbered one lower than the line count would suggest. Check the set number the interface reports
back before you reference it.

A line that executes and retrieves nothing is still a successful line. It receives a set number and a
count of 0.

Field codes are case-insensitive. A field code must be followed immediately by `=` with no space on
either side. Two limits, `YR:` and `LN:`, take a colon rather than an equals sign; this is a
consequence of their history in Perihelion 4 and has not been harmonised.

## 2. Field codes

| Code | Searches |
|---|---|
| `AT=` | Article title - the title of the individual item |
| `TI=` | Title of the source publication - journal, book, or report series title |
| `AB=` | Abstract text as supplied by the abstracting agency |
| `AU=` | Personal author, indexed surname-first |
| `CA=` | Corporate author or issuing body |
| `DE=` | Wexford Thesaurus descriptor, exact descriptor only |
| `DE+=` | Wexford Thesaurus descriptor, exploded to include all narrower terms |
| `KW=` | Author-supplied keywords only. Does not search the article title or the abstract. |
| `SU=` | Supplementary material present - accepted values are `dataset`, `appendix`, `code`, `protocol`, `audio`, `video` |
| `PY=` | Processing year - the year in which the record was added to WAI |
| `YR:` | Year of publication |
| `LN:` | Language of publication, three-letter code |
| `DT=` | Document type - `article`, `review`, `report`, `conference`, `chapter`, `editorial`, `preprint` |
| `AF=` | Author affiliation as printed on the item |
| `FU=` | Funder name as recorded in the item's funding statement |

Two codes are regularly mistaken for others and are called out here because support receives
questions about both every month.

`TI=` does not search the title of the article. It searches the title of the publication the article
appeared in. The article title is `AT=`.

`PY=` does not search the year the item was published. It searches the year WAI processed the record,
which for retrospectively loaded content may be decades later than publication. Publication year is
`YR:`.

`SU=` is a supplementary-material limit, not a subject limit. A subject term entered in `SU=` will not
match any accepted value and the line will return 0 records without an error.

### Unqualified terms

A term entered with no field code searches the **core fields** only: `AT`, `AB`, and `DE`. It does not
search `KW`, `AF`, `FU`, or `TI`, and WAI holds no full text, so no unqualified search reaches full
text. To search author keywords you must name `KW=` explicitly.

## 3. Stemming and phrases

Unquoted terms are automatically stemmed. `library` retrieves *library*, *libraries*, and *librarian*.
Stemming is applied per term, in every field, and cannot be disabled globally.

Double quotation marks mean **literal string, in this order, unstemmed**. Quoting is therefore
narrower than not quoting, in two ways at once: it fixes word order and it switches stemming off.
`"health policy"` will not retrieve *health policies*.

A quoted phrase may contain no more than six words. Longer strings return `E-11`.

Truncation and wildcard characters are not permitted inside quotation marks. `"health polic%"`
returns `E-09`.

A hyphen inside a term is treated as a word boundary, and the hyphenated pair is searched as an
ordered adjacent pair. `open-access` and `"open access"` retrieve the same set. `open access`
without quotation marks does not - see section 5.

## 4. Truncation and wildcards

| Character | Behaviour |
|---|---|
| `%` | Unlimited right-hand truncation. `librar%` retrieves *library*, *libraries*, and *librarianship*. |
| `#` | Exactly one character, required. `wom#n` retrieves *woman* and *women*. |
| `~` | Zero or one character, at the end of a term only. `colour~` retrieves *colour* and *colours* but not *coloured*. |

There is no left-hand or internal unlimited truncation.

`*` is not a Perihelion operator. A line containing `*` returns `E-07`.

A truncated stem must be at least three characters long. Perihelion will execute a broad expansion
rather than refuse it, and reports the expansion in the session history as
`[TRUNC] '<stem>' expanded to <n> terms`. An expansion over 5,000 terms is capped at 5,000 and the
line still executes, so a truncated stem can silently retrieve a set that is both enormous and
incomplete. Check the expansion count in the history rather than the result count alone.

## 5. Proximity

Perihelion writes the distance **before** the operator, attached to it with no space:

```
term1 3ADJ term2
term1 5NEAR term2
```

- `nADJ` - within *n* words, **in the order given**.
- `nNEAR` - within *n* words, **in either order**.
- *n* counts intervening words. `1ADJ` means directly adjacent.

`n` is required. A bare `ADJ` or `NEAR` returns `E-12`; there is no default distance.

Proximity operators are permitted **only between single terms and quoted phrases**. A proximity
operator with a parenthesised group on either side returns `E-13`. To express proximity across a
synonym set, write one line per pair and combine the resulting sets with `OR`.

Proximity may not be combined with `%`, `#`, or `~` on either operand.

## 6. Boolean operators, nesting, precedence

Operators are `AND`, `OR`, `NOT`, and must be uppercase. Lowercase `and` is treated as a search term.

**Perihelion applies operators strictly left to right. `AND` does not bind more tightly than `OR`.**

```
Submitted:  cats OR dogs AND fleas
Evaluated:  (cats OR dogs) AND fleas
```

This is the opposite of the convention used by several other platforms, and it is the single most
common cause of a set that is far smaller - or far larger - than the searcher expected. An
unparenthesised synonym list followed by `AND` will narrow the whole list rather than one term of it.
Perihelion does not warn about this.

Parenthesise every group in any line that mixes operators. Nesting is permitted to a depth of three;
a fourth level returns `E-04`. Unmatched parentheses return `E-03`.

`NOT` is binary, not unary: `S2 NOT S3`. A line beginning with `NOT` returns `E-05`.

## 7. Date and language limits

Publication year uses `YR:` with a slash for ranges, and open ranges are permitted:

```
YR:2019          a single year
YR:2015/2025     inclusive range
YR:2015/         2015 to the present
YR:/1999         up to and including 1999
```

`PY=` accepts the same range forms but limits on processing year (section 2).

Language uses `LN:` with a three-letter code: `LN:eng`, `LN:spa`, `LN:fra`. Records with no language
recorded are excluded from every `LN:` limit, including `LN:` combined with `NOT`.

Limits do not apply retroactively to earlier sets. A limit must be combined into the line where you
want it to take effect: `S4 AND YR:2015/2025`.

## 8. Thesaurus and subject searching

The Wexford Thesaurus is the controlled vocabulary for WAI. Descriptors are assigned by human
indexers to roughly 88 per cent of records; records loaded since October 2025 may not yet be indexed.

- Enter a descriptor in `DE=` **without quotation marks**, even when it is several words long.
  Quotation marks inside `DE=` return `E-14`.
- `DE=` matches the descriptor exactly and does **not** explode. Narrower terms are not included.
- `DE+=` explodes the descriptor to include every narrower term beneath it in the hierarchy.
- Non-preferred terms are not mapped automatically. A `USE` reference in the thesaurus is guidance for
  you, not a redirect the platform performs.

**If the string you enter in `DE=` is not a descriptor in the current thesaurus release, Perihelion
does not return an error and does not return zero.** It re-runs the string against the core fields as
an uncontrolled keyword and executes the line, flagging it in the session history as:

```
[T-FALLBACK] Term not found in Wexford Thesaurus; searched as core-fields keyword.
```

The line receives a set number and a plausible-looking count. Nothing in the result display
distinguishes it from a controlled search. Read the session history flags before you record a count
as a controlled-vocabulary result.

## 9. Export

- Maximum **500 records per export operation**. A request above that returns `E-22` and exports
  nothing. Larger sets must be exported in ranges.
- The export format menu offers `Brief`, `Full record`, and `Full record + index terms`. `Brief` is
  the default and omits both the abstract and the thesaurus descriptors. Choose
  `Full record + index terms` if descriptors matter to you.
- Exported files are tab-delimited regardless of the `.csv` extension Perihelion assigns them.
- The export header records the set's count **at the moment of export**, not at the moment of search.
  WAI loads weekly, so a set re-exported later carries a different number under the same set label.
- The session history export writes the **last 20 lines only**. Earlier lines are not recoverable
  once the session ends. Copy the history out before you finish, or keep your own record as you go.

## 10. Error codes

| Code | Meaning |
|---|---|
| `E-03` | Unmatched parenthesis |
| `E-04` | Nesting deeper than three levels |
| `E-05` | Line begins with `NOT` |
| `E-07` | Unrecognised character |
| `E-09` | Truncation character inside quotation marks |
| `E-11` | Quoted phrase longer than six words |
| `E-12` | Proximity operator without a distance |
| `E-13` | Proximity operator applied to a parenthesised group |
| `E-14` | Quotation marks inside `DE=` |
| `E-19` | Unknown field code |
| `E-22` | Export request above 500 records |
