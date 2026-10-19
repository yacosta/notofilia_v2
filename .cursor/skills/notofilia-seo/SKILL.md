---
name: notofilia-seo
description: >-
  Use when changing Notofilia.com technical SEO: titles, meta descriptions,
  canonicals, hreflang, sitemap, robots.txt, IndexNow, cache purge, feeds,
  duplicate titles, title length, nav crawl weight, or the dist/ SEO audit.
  Read with notofilia-aeo and notofilia-geo when the task also touches answers,
  schema entities, or llms.txt.
---

# Notofilia technical SEO

Spanish is the root locale. English lives under `/en/` with translated slugs and reciprocal hreflang. `x-default` is the Spanish URL. `astro.config.mjs` sets `trailingSlash: 'always'`. Canonicals, `sitemap.xml`, and `llms.txt` must use that slash so bots never cache a pre-redirect URL.

Production is Cloudflare Workers Assets. Do not rename the Worker. Do not change Cloudflare dashboard settings from the repo. `scripts/indexnow.mjs` runs in the production post-build step (main branch only). Redirects are Worker lookups in `src/data/gsc-redirects.json`; see `docs/seo/README.md`. `_redirects` is a backup, not the live 301 path.

Copy voice: `.cursor/skills/notofilia-bilingual-author/SKILL.md`. Page types and required JSON-LD: `.cursor/rules/10-page-types.mdc`. Answer-engine and generative-engine work: `notofilia-aeo` and `notofilia-geo`.

## Do not regress

An 2026-10-18 crawl of sitemap URLs found healthy technical SEO: HTTP 200, self-canonicals, reciprocal hreflang, one `h1`, `alt` on images, schema present. Keep that.

- Never publish prices, valuations, or estimates.
- Never invent facts, URLs, profile links, certifications, or memberships.
- Missing owner input is a `TODO(owner)` in frontmatter, a config constant, or a non-rendered code comment. Never emit the literal `TODO(owner)` in HTML.
- Page-specific titles stay near 48 characters before the site suffix. `Layout.astro` renders `<title>{title}</title>`. There is no `titleTag()` helper. `META_DESCRIPTION_MAX` in `src/lib/piece-seo.ts` is 155.
- There is no `src/content/` collection. Match existing `src/data/` shapes.

## Audit harness

When adding or changing the build-time crawl (`scripts/seo-audit.mjs`, npm scripts `seo:audit` and `seo:audit:report`):

- Build it first. Run `npm run build && npm run seo:audit:report` (`--report-only`, exit 0) to record a baseline before other fixes.
- `seo:audit` crawls built `dist/` and **fails** on:
  - a page missing exactly one `<h1>`, a `<title>`, a meta description, or a self-referencing canonical
  - meta description over 165 characters, or title over 70 (warn over 60)
  - duplicate `<title>` across pages
  - hreflang pairs missing or not reciprocal, or `x-default` that is not the Spanish URL
  - `lang` that does not match the URL locale
  - JSON-LD that fails to parse, or a `BlogPosting` without `citation` when the page has a sources list
  - `<img>` without `alt`, or specimen images whose `alt` lacks side (`Anverso`/`Reverso` or `Obverse`/`Reverse`) and the catalog ID
  - sitemap URLs absent from `dist/`, or indexable `dist/` pages absent from the sitemap
  - `llms.txt` or `llms-full.txt` links that do not resolve to built pages
  - placeholder text in rendered HTML (`{{`, `[object`, `undefined`, `TODO(owner)`)
- Print a summary table by section: collection, blog, news, glossary, other.
- Wire `seo:audit` into CI on pull requests. Existing unit checks stay: `src/lib/seo.test.mjs`, `src/lib/piece-seo.test.mjs`, `src/lib/sitemap.test.mjs`, `src/lib/json-ld.test.mjs`.

## Titles and descriptions

- Glossary: optional `metaDescription`. If absent, use the first sentence of the definition, cut on a word boundary at or under 155 characters, with no mid-word cut and no trailing ellipsis unless unavoidable. Leave the visible definition unchanged.
- Explicit `metaDescription` (120–155 characters, ES and EN) for high-traffic terms: `notafilia`/`notaphily`, `numismatica`/`numismatics`, `pick`, `specimen`, `scrip`, `mpc`, `pmg-pcgs`, `numeracion-especial`/`fancy-serial-number`. Cross-language equivalents belong in the sentence when collectors search both (`Espécimen (Specimen)`, `EPQ`).
- Item pages: drop the ` | Notofilia` suffix when the title would pass 60 characters. Shorten a country parenthetical only when the issuer or series already disambiguates. Keep the country or currency when the denomination is generic (`1 Peso Oro`, `10 Pesos`). Keep denomination, issuer, and year first. Never drop a Pick, BG#, KM, or HT identifier that is already in the title. Never cut mid-word.
- News: trim the site suffix first to stay near 60 characters.
- Do not change `h1` or `og:title` unless they share the title variable. Decoupling so `og:title` stays longer than `<title>` is fine.
- Duplicate titles are failures. The four $10 Series 1934A pages (Chicago, Cleveland, Philadelphia, New York; slugs `10-dolares-serie-1934a-*` / `10-dollars-series-1934a-*`) must include the Federal Reserve bank or city and the district letter from that record, for example `$10 · Series 1934A · Chicago (G)`. Do not guess the letter.
- A dated series must not render `n.d.` or `s.f.` from a missing-date fallback. Use the series year.
- `/coleccion/lazarettos/` uses Spanish **Lazaretos** in title, `h1`, and meta. The English title stays Lazarettos.
- Homepage, `/coleccion/colombia/`, `/coleccion/notafilia/catalogo/`, and their English pairs should use **notafilia** (ES) or **notaphily** (EN) once, naturally, inside the length limits. Do not keyword-stuff.

## Crawl, cache, feeds, stats

- Header mega-menu HTML should ship hub and catalogue-index links, not every item. Deep links may load from static JSON when the menu opens. Keep one `nav` landmark, `aria-expanded`, and a sensible focus order. The submenu hint appears once per menu. Every catalogue item stays reachable from its country or category hub and from `/coleccion/notafilia/catalogo/` (and the English pair).
- `scripts/purge-cache.mjs`: `POST /zones/{zone}/purge_cache` with `{"purge_everything": true}` using `CF_API_TOKEN` and `CF_ZONE_ID`. If either is missing, exit 0 with a warning. Run it in the same production-only post-build step as IndexNow, **before** IndexNow, main branch only. Document in `docs/seo/README.md` that a GitHub Action on `deployment_status: success` can purge if Pages or Workers promote assets after the build command returns. Do not weaken `public/_headers`. If HTML has no edge policy, propose a short `s-maxage` in the PR description and do not apply it unless asked.
- `/feed.xml` (Spanish guides and news, latest 30) and `/en/feed.xml`. Alternate `application/rss+xml` link in the layout head, titles matching the page language. Exclude feeds from the sitemap. They return 200 as `application/xml` or `application/rss+xml`.
- `public/_headers`: `X-Robots-Tag: noindex` for `/feed.xml`, `/en/feed.xml`, `/llms.txt`, `/llms-full.txt`, and `/api/*`.
- `robots.txt` stays permissive. Remove per-bot `Allow: /` only when a test shows `User-agent: *` plus the Sitemap lines grant the same access. Keep the IndexNow key and Sitemap lines.
- `sitemap-index.xml`: if it only points at `sitemap.xml`, remove it, point `robots.txt` at `sitemap.xml`, and 301 `/sitemap-index.xml` to `/sitemap.xml` in `public/_redirects` (and the Worker map if that is what production uses). A real index lists child sitemaps (pages, guides, news, glossary, collection) with accurate `lastmod`. `lastmod` comes from content-modified dates, not the build clock.
- Footer stats: do not hard-code a page total that disagrees with indexable URLs per language. Compute catalogue counts from data at build time (`collectionStats` / holdings) so “banknotes · coins · countries · entries” cannot drift. `statsLine` rules in `.cursor/rules/00-site-standards.mdc` still apply (footer once; not on inner pages beyond that).

## When executing the October 2026 audit

Branch from `dev` as `seo/audit-fixes-2026-10` and open the PR into `dev` when `dev` is the integration branch. One commit per numbered task in the audit prompt so each can be reverted alone. Finish with `npm run build` and `npm run seo:audit` at zero failures. Confirm in code before re-implementing a check the site already passes.

Manual steps (report, do not perform from the repo): `CF_API_TOKEN` (Cache Purge) and `CF_ZONE_ID` as build secrets; Caching dashboard (Cache Rules, Tiered Cache, Crawler Hints); after deploy, compare `curl -sI` as Googlebot on `/sitemap.xml` and as GPTBot on `/en/`; resubmit the sitemap in Search Console.
