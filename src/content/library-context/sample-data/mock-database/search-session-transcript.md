# PERIHELION 6 — SEARCH SESSION HISTORY — SIMULATED WORKSHOP MATERIAL

> **What this file is.** A simulated session history from a database platform that does not exist. The
> platform, the database, the thesaurus, the result counts, and the error codes were all invented for
> this workshop. No search was run and no records were retrieved. The counts are internally consistent
> with `HELP-syntax-reference.md` in this folder and with nothing outside it.
>
> The session is a record of what was submitted and what came back. It does not say why. Do not cite
> this file.

---

```
PERIHELION 6.4 — SESSION HISTORY
Database:  Wexford Abstracts and Index (WAI)
Thesaurus: Wexford Thesaurus, 2026 release
Session:   11 March 2026, 09:41–10:18
Account:   workshop demonstration account
Index last loaded: 8 March 2026
```

---

**Line 1**

```
SU=(open access OR open-access publishing)
```

```
Set S1 — 0 records
```

---

**Line 2**

```
DE=Open access publishing OR AT=open access OR AB=open access
```

```
Set S2 — 14,208 records
```

---

**Line 3**

```
AT=(polic% OR health%) OR AB=(polic% OR health%)
```

```
Set S3 — 1,942,660 records
[TRUNC] 'polic%' expanded to 3,412 terms
[TRUNC] 'health%' expanded to 1,196 terms
```

---

**Line 4**

```
AT=(epidemiolog* AND public health)
```

```
E-07: Unrecognised character '*' at position 16.
No set created.
```

---

**Line 5**

```
DE=Research impact metrics
```

```
Set S4 — 3,117 records
[T-FALLBACK] Term not found in Wexford Thesaurus; searched as core-fields keyword.
```

---

**Line 6**

```
"open access" 3ADJ "public health"
```

```
Set S5 — 46 records
```

---

**Line 7**

```
S2 AND PY=2015/2025
```

```
Set S6 — 9,430 records
```

---

**Line 8**

```
DE+=Public health AND YR:2015/2025
```

```
Set S7 — 88,512 records
```

---

**Line 9**

```
S2 AND S4 OR S7
```

```
Set S8 — 89,704 records
```

---

**Line 10 — export request**

```
Export S8 · Full record + index terms · 89,704 records
```

```
E-22: Export request exceeds 500 records per operation. Nothing exported.
```

---

```
END OF HISTORY — 10 lines submitted, 8 sets created.
Session history export writes the last 20 lines only.
```
