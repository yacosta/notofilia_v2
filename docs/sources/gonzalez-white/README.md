# González White — Catálogo de Billetes (7ª ed., 2019)

Research copy of Bernardo González White, *Catálogo de Billetes Banco de la República y República de Colombia, 1923–2019*, 7th edition, Medellín: Asociación C&C, 2019.

- ISSN 0123-4390 (`Cat. Billetes Colomb.`)
- ANA Library Catalog – Paper Money: UK 10.C6B3
- 176 pages (PDF page numbers match the printed folios)
- Files: `catalogo-billetes-banrep-2019-7ed.pdf` (plates and tables) and `.txt` (extracted text for search)

© 2019 Bernardo González White / Asociación C&C. This is a working copy for Notofilia research. **Do not** put plates, price columns (`ESTIMADO $`), or auction results on the public site. Cite the printed book (`BG#`, page), not a repo path.

The catalogue does **not** cover banca libre, Banco Nacional, or independence issues. Those stay with Hernández, Banrepcultural, Bank Note Museum, and the Heritage sold-archive extract (`../heritage/`).

## How to use

1. Search the `.txt` for the denomination, printed date, or `BG#`.
2. Confirm the row in the PDF (columns are often jumbled in the extract).
3. On a piece page, cite **BG#** plus the date, series letter, digit count, printer abbreviation, and — when the table gives one — the **emisión** figure for that row. Say it is González White 2019, not Pick.
4. Replacements are separate rows (`REP`, `Reposición asterisco`, `Reposición R`, `Reposición estrella`) with known serial ranges. Do not use the ordinary-run total for a replacement holding.
5. `N. D.` / `¿?` / `Incluido en #…` mean the author does not publish a standalone count. Do not invent one.
6. 2019 price estimates are market snapshots in Colombian pesos for grade E10. Notofilia does not republish them.

BanRep annual production tables (`../banrep/`) are issuer totals by face value and year. González White is the per-issue (and replacement) listing. Prefer BG# for a dated type; do not replace a BG# emisión with a BanRep year total, or the reverse.

## Numbering and abbreviations (p. 12)

| Token | Meaning |
| --- | --- |
| `BG#` | Author’s number for one listing (date / variety / replacement) |
| `ABNC` | American Bank Note Company |
| `TDLR` / `T. de la R` | Thomas De La Rue |
| `IBR` / `IBB` / `IBBR` / `IBSFB` | Imprenta de Billetes, Bogotá (name variants by period) |
| `DÍG.` | Serial digit count |
| `REP` | Replacement |
| `INCL. ARR.` | Quantity included in the previous figure |
| `NF2` … `NF100` | 2016 family: $2.000 … $100.000 |
| `E1`–`E10` | Grade scale (p. 23); E10 = UNC |

Serials in the book use dots for reading (`00.000.032`). Notofilia stores the normalized form without punctuation.

## Contents (PDF pages)

| Topic | Pages |
| --- | --- |
| Title, ISSN, abbreviations | 1–12 |
| Prologue, introduction, gerentes, Kemmerer | 13–19 |
| Grade scale, printers, logos | 21–23 |
| ½ peso oro | 21+ (TOC) |
| 1 peso oro | 27 |
| 2 pesos oro | 40 |
| Provisional 2½, 5, 10, 20 | 45 |
| 5 pesos oro / plata | 47–58 |
| 10 pesos oro | 61–68 |
| 20 pesos oro | 69–74 |
| 50 pesos oro | 75–78 |
| 100 pesos oro | 79–89 |
| 200 pesos oro | 89–94 |
| 500 pesos oro | 94–102 |
| 1.000 pesos oro (Galán, Bolívar, Gaitán) | 103–111 |
| 2.000 pesos oro (Bolívar TDLR; later Santander) | 113–121 |
| 5.000 (Núñez; Silva) | 122–127 |
| 10.000 (Emberá; Policarpa) | 127–132 |
| 20.000 Garavito | 133–136 |
| 50.000 Isaacs | 136–138 |
| Later families through 2019 | after those ranges |

## Current Notofilia holdings (lookup)

Confirm in the PDF before changing published copy.

| Holding | Where in this book |
| --- | --- |
| 10 pesos oro, 20 July 1943, serie N, ABNC (Pick 389b) | **BG# 166**, p. 63. Emisión 4.500.000; serials 3.200.001–7.700.000; 7 digits. Continues the 1941–44 N block (BG# 165–167). |
| 10 pesos oro replacement, 20 July 1976, asterisk, IBB (Pick 407f / TBB B950kr) | p. 68, several **JULIO 20 1976** rows (ordinary runs and `Reposición asterisco` with known serial bands). 8 digits, no series letter except the A–Z variety on the same spread. Match the holding to the asterisk row, not the 50/100 million ordinary counts. |
| 2.000 pesos oro specimen, 24 July 1983, TDLR (Pick 430as) | **BG# 440**, p. 113–114, is the **circulation** first date: 50.000.000, serials 00.000.001–50.000.000, 8 digits, no series, no replacement (`NO`). The book does not give a specimen printage on that spread. |
| 2.000 pesos, 20 August 2008, serial 10000001, Imprenta de Billetes (Pick 457) | **BG# 490**, pp. 121–123, reduced 130 × 65 mm type (circulated from 17 November 2006). August 2008 rows are **29** and **30** August 2008, emisión **N.D.** The book’s **20 August** listing on this type is **2009**. Do not treat the BanRep 2008 denomination total (280.4 million) as this date’s printage. |

## Essays (2012–2015)

Shorter BEGOW notes — $50 / $200 / $500 coins, Santa Laura $5.000, $1.000 Gaitán, plus two philatelic memos — are in `essays/`. See `essays/README.md`.

## Dedup

A serial that appears only as a replacement **range** in this book is not a Notofilia holding. A hit in `src/data/colombia-notes.ts` is the catalogue object.
