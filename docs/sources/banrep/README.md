# Banco de la República — production and delivery statistics

Official tables from the Banco de la República de Colombia (Imprenta de Billetes / Fábrica de Moneda). Keep the workbooks here as the research copies. Cite the bank’s public statistics page on the site, not these file paths.

Public landing pages:

- Spanish: <https://www.banrep.gov.co/es/billetes-monedas/produccion-circulacion>
- English: <https://www.banrep.gov.co/en/banknotes-coins/production-circulation-statistics>

These files are **issuer statistics**, not catalogue holdings. They do not contain serial numbers. Do not treat a denomination-year total as the printage of a Pick type, date, signature pair, printer, or replacement variety.

## Files

| File | What it is | Units | Span |
| --- | --- | --- | --- |
| `produccion-acumulada-diciembre-2022.xlsx` (+ `.csv`) | Annual **banknote production** by denomination (Imprenta). Despite the filename, each row is one year, not a running cumulative. The last row is a grand total. Cut-off: December 2022. | Millions of pieces | 1960–2022 |
| `billetes_entregados-2010-2022.xlsx` (+ `.csv`) | Annual **deliveries** from the Imprenta to Tesorería, split old family vs 2016 family letter series (Z 2.000, Y 5.000, V 10.000, T 20.000, S 50.000, plus 100.000). | Millions of pieces (same scale as the production table) | 2010–2022 |
| `dye_mon_produccion.xls` (+ `.csv`, `.notes.txt`) | Annual **coin** production by denomination, including nueva familia nacional vs importada and commemorative 5.000 / 10.000 / 20.000 issues. `n. p.` = no production that year. Footnote 2/ = partial delivery of a contracted import. Two 2024 rows: circulating plus a second row for the Santa Marta 20.000 commemorative. | Pieces (not millions), except some import/commemorative cells written as dotted thousands with `/2` | 1987–2025 |

## How to cite on a piece page

1. Open the matching CSV (or the workbook if the cell is annotated).
2. State the figure as BanRep **annual production** or **Tesorería delivery** for that **denomination and year**, in millions of pieces (notes) or pieces (coins).
3. Say what the table does **not** split: Pick / TBB number, printed date, signatures, printer (ABNC, TDLR, Imprenta), replacement vs ordinary, series letter (except the 2010–2022 delivery split of old vs new family).
4. If several types of the same denomination were produced in that year, do not assign the whole total to one holding.
5. Prefer “no official printage is published here for this type” over inventing a per-type run from these totals.

Example: 1976 **10 pesos** production is 7.5 million pieces in `produccion-acumulada-diciembre-2022`. That is every 10-peso note the Imprenta produced that year, not the Pick 407f replacement with asterisk.

2010–2015 note production and Tesorería delivery figures match denomination-for-denomination. From 2016 the production table **merges** old and new families; the delivery table keeps them apart.

## Dedup

Serial search in these files is not a catalogue hit. Hits here are statistics, not objects.
