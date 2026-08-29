# Heritage Auctions — Colombian paper (sold archive)

Working extract of lots from the [Heritage Auctions World Paper Money sold archive](https://currency.ha.com/c/search/results.zx?term=Colombia&si=2&archive_state=5327&sold_status=1526&dept=2021&sb=1&mode=archive) for the search term *Colombia*. Compiled 19 August 2026 (`colombian_banknotes_catalog (1).html`).

This is **not** a Notofilia holdings list. Each row is someone else’s auction lot. Do not import a lot as a catalogue piece. A serial or Pick number that appears only here is a comparable, not a duplicate of a collection object.

© Heritage Auctions. Images in the HTML viewer load from Heritage’s CDN (internet required). Cite the public lot URL on the site, never this folder path.

## Files

| File | Use |
| --- | --- |
| `lots.txt` | Tab-separated index for `rg` (Pick, lot, sale date, grade, title, URL) |
| `colombian-banknotes-catalog.html` | Original offline viewer (1 566 lots). Open locally; search in-page |

`lots.json` is not stored; parse `lots.txt` or the `const DATA=` array in the HTML if you need structured fields. The HTML `DATA` tuples are: title, path, item id, auction-lot, sale date, realized USD, Pick, grade string.

Lot URLs: `https://currency.ha.com/{path}/`

## How to use

1. Search `lots.txt` for Pick (`P-407f`, stored as `407f` / `S762r`), issuer, date, specimen/remainder/error, or a serial mentioned in the title.
2. Open the lot URL to confirm the photograph, serial, signatures, and cert number. The extract’s title line is Heritage’s headline, not a full description.
3. For Banco de la República types 1923–2019, still prefer González White (`../gonzalez-white/`) for BG# and emisión. Heritage is a photo and variety check, especially for banca libre, Banco Nacional, independence, specimens, errors, and fancy serials.
4. BanRep year totals (`../banrep/`) remain the printage source. An auction appearance does not imply rarity or a printage figure.

## What the search captured

Heritage’s archive search is the word *Colombia*, not a clean national catalogue:

- Most rows are Colombian issuers (BanRep, banca libre, departmental, Banco Nacional, etc.).
- Bleed: mixed world lots, “Banco Colombiano” notes of other countries (e.g. Guatemala Pick S121), and group lots that only mention Colombia.
- Fancy/error headlines often omit the leading `Colombia` token; still Colombian paper when the issuer is BanRep or a Colombian private bank.
- 1 566 lots; 1 347 have a Pick field; 696 distinct Pick strings; many ungraded lots have an empty grade field.

## Public site

- Do **not** republish realized prices, estimates, or hammer totals on piece pages or JSON-LD.
- Do **not** hotlink Heritage lot images into `public/` or the catalogue lightbox.
- A public citation may name the sale and link the lot (with `rel="noopener noreferrer"` and `NewWindowHint`). Do not copy Heritage cataloguing prose verbatim.

## Dedup

A hit in this folder is an auction lot. Treat a hit in `src/data/*.ts` as the collection object. Matching Pick + date between a Heritage lot and a holding does not make them the same note unless the serial (or cert number) matches.
