# SEO: GSC 404 → v2 redirects

Pipeline for mapping Google Search Console “Not found (404)” URLs to Notofilia v2.

**The full GSC export `docs/seo/gsc-404-2026-09.csv` was not in the repository.** Until it is added, `scripts/seo/build-redirects.mjs` reads `docs/seo/gsc-404-seed.csv` (documented v1 examples) and merges every source already listed in `astro.config.mjs` plus `englishRedirects()` (legacy `/en/coleccion/…` tree). Do not invent thousands of fake GSC URLs.

`gsc-canonical-2026-09.csv` and `gsc-crawled-not-indexed-2026-09.csv` are also absent. Canonical checks sample `dist/` (every HTML file has a self-referencing `<link rel="canonical">` via `Layout.astro`).

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
| `docs/seo/category-map.json` | Hand-editable old category → v2 hub |
| `docs/seo/redirect-map.csv` | source, target, status, rule, confidence |
| `docs/seo/redirect-summary.json` | Counts by rule |
| `src/data/gsc-redirects.json` | Worker lookup |
| `public/_redirects` | Generated 301 list |
