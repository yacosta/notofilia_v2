# CashFlow SCN83 — Colombia software bill set (identity card)

Working extract of an uploaded MEI/Crane **CASHFLOW SCN83** identity card: *SOFTWARE BILL SET*, marked **Internal use**, **G1**, **COLOMBIA (COP)** / Colombian peso, **CashFlowSCN83**.

- Variant number printed as `52333 4 446` (normalized **523334446**).
- Filename on ingest: `SCN83-COP-Identity-Card` (not a PMG/PCGS holder).
- Pages 2–3 list four-way scan slots whose image paths are missing (`… not found`). Do **not** republish those paths or invent plate photos.

This card is a **validator bill-set index**, not a catalogue holding, not a grade, and not printage. It does **not** name serial AF51355141, a Pick number, a printed date, a grader, or a census.

Public product context (cite on the site, not this path): [Crane Payment Innovations — SC Advance](https://www.cranepi.com/en/products/payment-technology/note/validators/sc-advance) (MEI CASHFLOW SC / SCN family).

## COP 20.000 rows (this holding’s type)

| Banknote name | Value index | Note index | Description on the card |
| --- | --- | --- | --- |
| `COP_000020000_B_A_D_B` | 10 | 5 | Series 2000/01/03/04/05/06/07/08/09/10/12 — **COP 20000 (BA)** |
| `COP_000020000_C_A_D_C` | 11 | 5 | Series 2015 — **COP 20000 (CA)** |

The Notofilia piece (`id` `20000-pesos-2017`, serial AF51355141, Pick 461 / TBB B996c, 29 August 2017) is the **2016 family** López Michelsen type. On this card that family is the **CA** / `COP_000020000_C_A_D_C` line (their “Series 2015” label). **BA** is the previous 20.000 (Garavito-era years on the card). Neither row is this serial.

## Dedup

`523334446` is a software-set number. Treat a match in `src/data/` as documentation of the same type index, not a second banknote.
