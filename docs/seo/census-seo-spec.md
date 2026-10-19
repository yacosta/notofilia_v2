# Banknote census — SEO structure (not a database)

This note specifies URLs and structured data for a future United States and Colombia banknote census. It does not create the census, a database, or population figures.

## URL scheme

One stable URL per type or series, in both languages. The Spanish URL is canonical `x-default`. Slugs are translated; the internal id is shared.

| | Spanish | English |
| --- | --- | --- |
| United States series | `/coleccion/estados-unidos/censo/{series}/` | `/en/collection/united-states/census/{series}/` |
| Colombia series | `/coleccion/colombia/censo/{serie}/` | `/en/collection/colombia/census/{series}/` |
| Method | `/coleccion/censo/` | `/en/collection/census/` |

`{series}` is the existing catalogue slug for that type (for example `10-dolares-serie-1934a-chicago`), not a serial number. A serial is a holding, not a census row. Do not mint a second catalogue object for a pattern or a low serial.

## Dataset JSON-LD

Each census page emits one `Dataset` node. Fields:

- `name` — type name in the page language
- `description` — what was counted and what was not
- `creator` — `{ "@id": "https://notofilia.com/#organization" }`
- `license` — URL of the editorial policy (`/editorial/`)
- `temporalCoverage` — the series dates actually covered, ISO 8601 interval
- `spatialCoverage` — the issuing country
- `variableMeasured` — observed counts the page really publishes (grade, signature, district). Omit a variable that has no table.
- `distribution` — download URL only when a file exists
- `isBasedOn` — the public sources named on the page (BanRep tables, grading-service population reports, printed catalogues). No guessed Wikidata ids.

Keep existing catalogue `@id`s (`#website`, `#organization`, `#yezid-acosta`) unchanged.

## Methodology page

`/coleccion/censo/` states, in both languages:

- the unit of count (type, not serial, unless a serial census is explicitly labeled)
- which grading services are included and that an uncertified note is not given a grade
- that a denomination-year total from BanRep is not a Pick-level printage
- that prices and estimates are out of scope
- the update cadence: the page names the month of the last review and does not imply a live feed

## Internal links

Each catalogue record links to the census URL for its type when that page exists, from the sources block. The census page links back to the holding. Until a census page exists, the catalogue record does not link to a placeholder URL.
