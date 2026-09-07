# SEO: GSC 404 → v2 redirects

Pipeline for mapping Google Search Console “Not found (404)” URLs to Notofilia v2.

`docs/seo/gsc-404-2026-09.csv` is the Search Console **Not found (404)** export for `sc-domain:notofilia.com` (326 URLs, report dated 2026-09-03, captured 2026-09-07). `scripts/seo/build-redirects.mjs` reads it when present and falls back to `docs/seo/gsc-404-seed.csv` (documented v1 examples) otherwise; either way it merges every source already listed in `astro.config.mjs` plus `englishRedirects()` (legacy `/en/coleccion/…` tree). Do not invent GSC URLs — re-export from GSC when the report changes.

`gsc-canonical-2026-09.csv` and `gsc-crawled-not-indexed-2026-09.csv` are still absent. Canonical checks sample `dist/` (every HTML file has a self-referencing `<link rel="canonical">` via `Layout.astro`).

## Matching order

1. `manual` — `docs/seo/manual-overrides.json`, hand-reviewed source → target. Every target must be a live, non-stub v2 page or the build fails.
2. `existing` — redirects already configured in `astro.config.mjs` / `englishRedirects()` / contact legacy map, and Astro redirect **stubs** in `dist/` (meta-refresh pages) resolved to their final destination so we never 301 onto a stub.
3. `exists` — the URL is a real v2 page (200, no rule emitted).
4. `last-slug`, `last-slug-hreflang`, `fuzzy` — slug matching against real (non-stub) pages.
5. `category-hub`, `hub-fallback` — `docs/seo/category-map.json` (v1 sections → v2 hubs, both languages).
6. `legacy-dc` — pre-v1 Dreamweaver root files (`/billete-colombia-*.dc.html`, `/catalogo-*.dc`) → section hub by prefix.
7. `glossary-hub` — unmatched glossary terms → `/glosario/` or `/en/glossary/`.
8. `gone` — 410 (old WordPress dated posts, `{{ item.url }}` template junk, truncated URLs).

## Commands

```bash
npm run build
node --experimental-strip-types scripts/seo/build-url-index.mjs
node --experimental-strip-types scripts/seo/build-redirects.mjs
node --experimental-strip-types scripts/seo/verify-redirects.mjs --simulate
```

Live check (optional): `VERIFY_BASE=https://dev.notofilia.com node --experimental-strip-types scripts/seo/verify-redirects.mjs`

## How redirects actually 301

This Worker uses `run_worker_first: true`. Cloudflare `_redirects` is **not** applied to responses the Worker returns itself. The Worker looks up `src/data/gsc-redirects.json` and issues **301** or **410** before `ASSETS.fetch`.

`public/_redirects` is still generated (301 lines only, under the 2000 static-rule cap) as a backup if assets are ever served without the Worker. **410 is Worker-only** — `_redirects` does not support 410.

Rules never target `/` or `/en/`. There is no catch-all to the homepage. www→apex is left to Cloudflare.

After deploy: IndexNow (existing `scripts/indexnow.mjs` on production) and GSC **Validate fix** on the 404 report.

## Files

| File | Role |
| --- | --- |
| `docs/seo/v2-urls.json` | Live v2 URL index |
| `docs/seo/gsc-404-2026-09.csv` | GSC Not found (404) export (input) |
| `docs/seo/manual-overrides.json` | Hand-reviewed source → target (highest priority) |
| `docs/seo/category-map.json` | Hand-editable old category → v2 hub |
| `docs/seo/redirect-map.csv` | source, target, status, rule, confidence |
| `docs/seo/redirect-summary.json` | Counts by rule |
| `src/data/gsc-redirects.json` | Worker lookup |
| `public/_redirects` | Generated 301 list |
