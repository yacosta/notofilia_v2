# Audit prompts

Cursor commands in `.cursor/commands/` are the copies agents run. This file is the same checklist for a new page.

## New page

Create a new `<type>` page for `<subject>` in ES at `<route>` and EN at `/en/<translated-route>`, using the layout named for that type in `.cursor/rules/10-page-types.mdc`.

Populate every required block, wire hreflang and breadcrumbs, add JSON-LD for the type, register both routes in the sitemap by adding them to the source data (`dedicatedCatalogPaths`, `stubPages`, or the editorial JSON), and place all strings in `src/i18n` (or the feature’s `src/data` module if the type is catalog/editorial). If the type is `piece` (a banknote or coin holding), run `.cursor/commands/new-catalog-item.md` first so serial/cert duplicate checks in `30-catalogue-duplicates.mdc` happen before any file is written (low and fancy serials first; identity remains the exact serial). Then run audit prompt B (`.cursor/commands/audit-pr.md`) on the result.

Replace `<type>`, `<subject>`, and `<route>` from the user message. If any is missing, ask before scaffolding.

`scripts/build-llms.mjs` rewrites `dist/llms.txt`, `dist/sitemap.xml`, and `dist/sitemap.txt` from `src/lib/publish-manifest.ts` at the end of `npm run build`. Do not hand-edit those outputs.

- [ ] (a) Update the source data and front-matter only, never `llms.txt` or the sitemap directly.
- [ ] (b) Run `npm run build && npm run seo:audit` and fix any sync failure.
- [ ] (c) Confirm the new URL appears in `dist/llms.txt` (news: in Recent news; other page types: in their section) and in `dist/sitemap.xml` with both hreflang alternates.
- [ ] (d) Confirm robots.txt checks pass.
- [ ] (e) List `dist/llms.txt`, `dist/sitemap.xml`, and `robots.txt` in the PR description.
- [ ] Do not trigger IndexNow by hand. `scripts/indexnow.mjs` handles it on main.
