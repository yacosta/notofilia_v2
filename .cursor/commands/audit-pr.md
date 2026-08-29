---
description: Audit changed files against site rules (before every PR)
---

# Audit B — Single page or PR check

Audit the files changed in this branch against `.cursor/rules/00-site-standards.mdc`, `10-page-types.mdc`, `20-hero.mdc`, `30-catalogue-duplicates.mdc`, `40-banrep-production.mdc` when Colombia printage or mintage copy changed, and `41-gonzalez-white.mdc` when Banco de la República type/date/replacement copy changed.

If the diff adds or edits a catalogue holding (`src/data/` country modules, piece routes, or `catalog-src/`), require a reported serial/cert search with zero unexpected matches, a bilingual pair (one data record, ES + EN routes), and no second item for an existing serial.

Output the PASS/FAIL table only for rules that apply, with file:line evidence, then the Lighthouse mobile numbers from `npm run build && npx astro preview` for each affected route in both locales.

Do not modify files unless I say `apply`.
