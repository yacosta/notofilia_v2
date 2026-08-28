---
description: Audit changed files against site rules (before every PR)
---

# Audit B — Single page or PR check

Audit the files changed in this branch against `.cursor/rules/00-site-standards.mdc`, `10-page-types.mdc`, and `20-hero.mdc`.

Output the PASS/FAIL table only for rules that apply, with file:line evidence, then the Lighthouse mobile numbers from `npm run build && npx astro preview` for each affected route in both locales.

Do not modify files unless I say `apply`.
