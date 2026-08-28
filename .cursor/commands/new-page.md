---
description: Create a bilingual page from a Notofilia type template
---

# Audit C — New page from template

Create a new `<type>` page for `<subject>` in ES at `<route>` and EN at `/en/<translated-route>`, using the layout named for that type in `.cursor/rules/10-page-types.mdc`.

Populate every required block, wire hreflang and breadcrumbs, add JSON-LD for the type, register both routes in the sitemap, and place all strings in `src/i18n` (or the feature’s `src/data` module if the type is catalog/editorial). Then run audit prompt B (`.cursor/commands/audit-pr.md`) on the result.

Replace `<type>`, `<subject>`, and `<route>` from the user message. If any is missing, ask before scaffolding.
