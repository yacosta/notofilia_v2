---
description: List and migrate pages that are not on a type layout
---

# Audit D — Refactor to templates

List every page in `src/pages/` that is not built from a layout in `.cursor/rules/10-page-types.mdc`. For each, propose the target layout and the diff needed.

Migrate them one page type at a time on `dev` (create `dev` from `main` if it does not exist), keeping URLs and canonicals unchanged, and confirm with `diff` that ES/EN DOM trees match after migration.

Do not start a migration until I name the type (or say `migrate all`). After each type, re-run the checks from audit A that apply to that type.
