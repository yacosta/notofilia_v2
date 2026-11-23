---
name: notofilia-catalog-publishing
description: Research, validate, and publish bilingual coin and banknote holdings with provenance and duplicate prevention.
---
# NOTOFILIA catalog publishing

Use for new or edited numismatic objects, historical records, captions, and catalog attribution.

## Mandatory preflight
Read `.cursor/rules/30-catalogue-duplicates.mdc`, `.cursor/rules/45-colombian-spanish-voice.mdc`, relevant country-specific rules and existing data/types. Search `src/`, `public/`, `docs/`, and `catalog-src/` for serial, certification, and relevant type fingerprints **before writing**. Preserve leading zeros; classify low/fancy serials correctly. If a matching holding exists, update only with explicit direction, never add another entry.

## Research standard
- Identify country, issuer, denomination, date, catalog references, material, dimensions, signatures, mint/assayer, serial or certification, condition and provenance only where supported.
- Record exact printed inscriptions and visual evidence; do not infer unreadable letters, issue-level production, or values.
- Keep documented fact separate from hypothesis. Identify disagreements across references and cite original publishers, archives, official mints and catalog works accurately.
- For Colombia production consult `.cursor/rules/40-banrep-production.mdc` and `docs/sources/banrep/`. Year/denomination totals are not individual date or Pick printages.
- Preserve non-commercial/editorial treatment; do not invent market prices or rarity.

## Publication
1. Follow the existing `src/data/` record type; reuse existing `src/components/catalog/` page patterns.
2. Create or update shared ES/EN content and routes; verify `src/lib/locale-paths.ts`, canonical/hreflang and redirects.
3. Reference media using the existing public-path convention and image pipeline; do not embed temporary uploads or generated files as masters.
4. Include properly attributed sources and collector-relevant distinctions; preserve clear image captions and alt text.
5. Add or update fixture tests, run `npm test` and `npm run build`, and report the dedup search result, factual uncertainties, and URLs affected.
