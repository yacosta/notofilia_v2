---
description: Create a bilingual page from a Notofilia type template
---

# Audit C — New page from template

Create a new `<type>` page for `<subject>` in ES at `<route>` and EN at `/en/<translated-route>`, using the layout named for that type in `.cursor/rules/10-page-types.mdc`.

Populate every required block, wire hreflang and breadcrumbs, add JSON-LD for the type, register both routes in the sitemap, and place all strings in `src/i18n` (or the feature’s `src/data` module if the type is catalog/editorial). If the type is `piece` (a banknote or coin holding), run `.cursor/commands/new-catalog-item.md` first so serial/cert duplicate checks in `30-catalogue-duplicates.mdc` happen before any file is written (low and fancy serials first; identity remains the exact serial). Then run audit prompt B (`.cursor/commands/audit-pr.md`) on the result.

Replace `<type>`, `<subject>`, and `<route>` from the user message. If any is missing, ask before scaffolding.

The same checklist is in `docs/AUDIT-PROMPTS.md`. `scripts/build-llms.mjs` rewrites `llms.txt` and both sitemaps from `src/lib/publish-manifest.ts` during `npm run build`. Do not hand-edit those files.

- [ ] (a) Update the source data and front-matter only, never `llms.txt` or the sitemap directly.
- [ ] (b) Run `npm run build && npm run seo:audit` and fix any sync failure.
- [ ] (c) Confirm the new URL appears in `dist/llms.txt` (news: in Recent news; other page types: in their section) and in `dist/sitemap.xml` with both hreflang alternates.
- [ ] (d) Confirm robots.txt checks pass.
- [ ] (e) List `dist/llms.txt`, `dist/sitemap.xml`, and `robots.txt` in the PR description.
- [ ] Do not trigger IndexNow by hand. `scripts/indexnow.mjs` handles it on main.
