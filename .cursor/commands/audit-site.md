---
description: Site-wide page-type audit (run once, then quarterly)
---

# Audit A — Site-wide sweep

Using `.cursor/rules/00-site-standards.mdc`, `10-page-types.mdc`, `20-hero.mdc` and `30-catalogue-duplicates.mdc` as the standard, audit every page under `src/pages/` (ES and EN). Group by page type from the table in `10-page-types.mdc`. For each type, output a table:

rule → PASS / FAIL / N/A → file:line evidence → proposed fix.

Flag any page that does not map to a type, any page whose ES and EN markup diverge, any image not served through `/cdn-cgi/image/`, any hard-coded Spanish string in a component, and any place the site stats line renders more than once.

For catalogue holdings (`piece` type and `src/data/` country modules), also report — do not fix unless asked — any serial or cert number on more than one item, any item missing a serial without `no_serial_reason`, and any bilingual pair where only one language exists (`30-catalogue-duplicates.mdc` §5).

Do NOT modify files.

End with a prioritized fix list ordered by (1) LCP/CLS impact, (2) SEO/hreflang, (3) accessibility, (4) consistency. Number every item.

When I reply `apply <numbers>`, implement only those items on the `dev` branch (create `dev` from `main` if it does not exist), one commit per page type, and re-run the affected checks.
