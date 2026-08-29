---
description: Add a unique catalogue piece after serial/cert duplicate checks
---

# New catalogue item

Follow `.cursor/rules/30-catalogue-duplicates.mdc` before creating or editing any banknote or coin holding.

1. Normalize the serial (§1.1). If there is no serial, say so and run the fingerprint check (§1.3); do not invent a serial.
2. Search `src/`, `public/`, `docs/`, and `catalog-src/` for the normalized serial, a loose-separator variant, `serial` / `serial_display` fields, and any cert number.
3. Report hits **before** writing files. A hit in a country module (`src/data/*.ts`) is an existing holding — stop and follow §3 (update, missing pair, or explicit confirmation it is a different note).
4. Confirm the bilingual pair: one data record, ES + EN routes via the `piece` type layout in `10-page-types.mdc`. Do not add a second object for English.
5. Store `serial` (normalized), `serial_display` when the printed form differs, `cert_number` / `cert_grader` when graded, and one stable internal ID shared by both locales.
6. Name masters under `catalog-src/catalog/` with the internal ID or normalized serial, not a generic denomination filename.
7. Register both locales in the sitemap. Place copy in the feature’s `src/data` module (no chrome literals).
8. End with a one-line dedup statement.
9. Colombian notes or coins: if the copy mentions printage/tirada/mintage, consult `docs/sources/banrep/` (`40-banrep-production.mdc`) before saying no official figure exists. Banco de la República types 1923–2019: also look up **BG#** in `docs/sources/gonzalez-white/` (`41-gonzalez-white.mdc`). Coin varieties and C&C notes: `docs/sources/gonzalez-white/essays/` and `docs/sources/c-and-c/`.
10. Run audit prompt B (`.cursor/commands/audit-pr.md`) on the result.

Replace serial, issuer, denomination, and routes from the user message. If the serial is missing, ask before scaffolding.
