# SEO, AEO, and GEO audit

Read-only. No site copy, routes, or schema were changed.

**Site:** https://notofilia.com (Spanish at the root, English under `/en/`, `x-default` is Spanish).

**Queries.** The request left the query list blank. These five are the ones the catalogue, glossary, and guides already aim at:

1. Qué es la notafilia / What is notaphily
2. Billetes de Colombia / Colombian banknotes (Banco de la República, Pick, BG#)
3. Cómo se valora un billete colombiano / How much is a Colombian banknote worth
4. Numeración especial / fancy serial numbers
5. PMG, PCGS, and espécimen / specimen notes

**How this was checked.** `npx astro build && node scripts/build-llms.mjs`, then a crawl of `dist/` plus `node scripts/seo-audit.mjs --report-only`. The image watermark step was not run. Catalog masters stay in `catalog-src/catalog/` and are gitignored once watermarked, so this pass judged images from the HTML attributes and from `src/lib/images.ts`, not from regenerated rasters. The built-in audit reported **0 failures** and **537 warnings**. Indexable HTML pages: **902**. Redirect stubs: **1,670**. Sitemap URLs: **902**, matching the indexable set, with no noindex URL and no redirect source in the sitemap.

## What already holds

- One `<h1>` on every indexable page. No heading-level skips (`h2` then `h4`) in the rendered HTML.
- Canonicals are absolute `https://notofilia.com…` URLs and self-reference the page. `lang` matches the locale. hreflang `es`, `en`, and `x-default` (Spanish) are present. The built-in audit found no broken pairs.
- `dist/robots.txt` matches `public/robots.txt`. `User-agent: *` is `Allow: /`. Sitemap lines point at `/sitemap.xml` and `/sitemap.txt`.
- Open Graph and Twitter card tags are present, including `og:image:alt`, on every indexable page.
- Every `<img>` in the built HTML has `alt`, `width`, and `height`.
- No indexable page is more than three clicks from its locale home, except the four URLs in finding 3, which are not linked from home at all.
- There is no `client:load` island. Catalogue, glossary, guide, and news text is in the server HTML.
- `llms.txt` and `llms-full.txt` are generated at build time (`src/lib/publish-manifest.ts`, `scripts/build-llms.mjs`). A hand-written draft would fork that generator, so none is proposed.
- Sitewide JSON-LD is `WebSite` + `Person` (Yezid Acosta) + `Organization` (`src/lib/seo.ts` `websiteJsonLd`). Logo file is `public/images/notofilia-logo.png`, 128×128.
- Homepage, about, and the organization description agree: private bilingual catalogue of historical banknotes and coins, founded by Yezid Acosta, nothing for sale. Collecting focus is Colombia and Latin America. There is no street address, and `LocalBusiness` / `Product` would be the wrong types.
- The counterfeit guide’s visible answer is a complete sentence (`src/data/identify-counterfeit.ts`). The valuation guide has a question heading, a factor table, and named sources (BanRep, PMG, González White, Hernández).
- No “as mentioned above” / “see above” phrasing in guide or news bodies.
- The newest 15 news articles (the `llms.txt` Recent news block) have distinct English bodies. The 55 untranslated articles are older than that block.

## Crawler treatment

From `public/robots.txt` (same bytes in `dist/robots.txt`). “Unmentioned” means there is no group for that token. Those bots fall through to `User-agent: *` / `Allow: /`.

| Bot | Treatment |
| --- | --- |
| GPTBot | Allowed (`public/robots.txt` lines 4–5) |
| OAI-SearchBot | Allowed (lines 10–11) |
| ChatGPT-User | Allowed (lines 7–8) |
| ClaudeBot | Allowed (lines 13–14) |
| Claude-SearchBot | Unmentioned. Allowed only because `User-agent: *` allows `/` |
| PerplexityBot | Allowed (lines 19–20) |
| Google-Extended | Allowed (lines 22–23) |
| CCBot | Allowed (lines 31–32) |

`anthropic-ai` is also explicitly allowed (lines 16–17). That is not Claude-SearchBot. The project rule is to keep `robots.txt` permissive and not add extra `Allow` lines unless a test shows the wildcard is insufficient. No change is recommended for Claude-SearchBot.

`public/_headers` lines 21–28 send `X-Robots-Tag: noindex` for `/llms.txt`, `/llms-full.txt`, `/api/*`, and both feeds. Crawlers may fetch those files. They are not meant to be web-search documents.

## Schema on each page type

Counted from JSON-LD in the built HTML. The layout graph (`WebSite`, `Person`, `Organization`) is on every page and is omitted from the “page graph” column.

| Page type | Pages (both locales) | Page graph | Notes |
| --- | --- | --- | --- |
| Home | 2 | sitewide graph only | Matches the page-type rule. |
| About | 2 | `AboutPage`, second `Person`, second `Organization` | Visible breadcrumbs. No `BreadcrumbList`. |
| Contact | 2 | `ContactPage` + `BreadcrumbList` | |
| Collection hubs and series | 94 `CollectionPage` nodes | `BreadcrumbList` on most | **10** include `ItemList`. **84** do not, including `/coleccion/`, `/coleccion/estados-unidos/`, `/coleccion/china/`, era chapters, and `/blog/`. `/coleccion/colombia/` does include an `ItemList` of 41 notes plus `FAQPage`. |
| Piece | 374 | `VisualArtwork` + `BreadcrumbList` | `creator` and `author` are Yezid Acosta. `publisher` is the issuer and `producer` is the printer when those fields exist. |
| Glossary index | 2 | `DefinedTermSet` + `BreadcrumbList` | |
| Glossary term | 68 | `DefinedTerm` only | Visible breadcrumbs. No `BreadcrumbList`. `description` is the short `definition` field, not the visible article. |
| Guides | 28 `BlogPosting` | `BreadcrumbList`; 8 also `FAQPage` | `citation` is present when the page has a source list (audit checks this). |
| News | 300 | `NewsArticle` + `BreadcrumbList` | `NEWS_SCHEMA_TYPE` in `src/lib/news-schema.ts` is `NewsArticle`. |
| Resource essays | 22 | `Article` + `BreadcrumbList` | |
| Tools and a few static pages | 4 | `WebPage` + `BreadcrumbList` | Fancy-serial checker. |
| Search and 404 | noindex | not in the sitemap | |

`FAQPage` is emitted only from visible FAQ pairs (`src/lib/json-ld.ts` `faqPageJsonLd`, used by guides and the Colombia hub). No `Product`. No `LocalBusiness`. That is correct for a collection that is not a shop and has no public premises.

## How the five queries are answered

| Query | URL that should answer it | First screen |
| --- | --- | --- |
| Qué es la notafilia | `/coleccion/notafilia/` | `h1` is the question. The first line under it is a tagline. The definition sentence is the next block, inside the first 80 words. |
| Same query, glossary | `/glosario/notafilia/` | The visible lead is a full definition (83 words) and is the `.direct-answer`. The JSON-LD `description` is a different, shorter sentence that is not in the body. |
| Billetes de Colombia | `/coleccion/colombia/` | Opens with a declarative sentence about independence and the Banco de la República. `FAQPage` questions are visible. `ItemList` lists the notes on the hub. |
| Cómo se valora un billete colombiano | `/blog/como-se-valora-un-billete-colombiano/` | `h1` and an `h2` (“¿Cuánto vale un billete colombiano?”) match the query. A five-row table names BanRep, PMG, and the editorial policy. The speakable paragraph stops mid-thought. |
| Numeración especial | `/herramientas/numeracion-especial/` and `/glosario/numeracion-especial/` | The tool’s definition is in the HTML. Classifying a serial the visitor types needs JavaScript (`src/data/reference-tools.ts`). |
| PMG / espécimen | `/glosario/pmg-pcgs/`, `/glosario/specimen/` | The speakable line is one short sentence (17 words). A longer explanation follows and is not what `speakable` points at. |

## Findings

| Severity | Category | Where | What’s wrong | Fix |
| --- | --- | --- | --- | --- |
| High | AEO | `src/data/blog-articles.json` `directAnswer` on all 13 guides. Valuation ES is the object ending “el número de serie.” Rendered at `dist/blog/como-se-valora-un-billete-colombiano/index.html` as `<p class="direct-answer">`. `EditorialArticlePage.astro` line 186 prints it, and line 102 marks it `speakable`. | Every guide’s answer block is 54–55 words and stops mid-sentence (“La fecha corriente de.”, “Al cuidar esos.”, “El contexto: el.”). Voice and AI Overviews would quote a fragment. The full sentence is already in `bodyHtml`. | Rewrite each `directAnswer` from the existing body so it is one or two finished sentences, 40–60 words. Do not add facts. |
| High | SEO | `src/lib/document-title.ts` lines 16–20. News titles are passed as `` `${seoTitle} · Notofilia` `` from `EditorialArticlePage.astro` line 126. | 8 Spanish and 6 English news `<title>`s are cut on a word boundary under the 70-character cap and no longer read as a phrase. Example: stored title “Qué debe revisar en billetes de $1 para saber si vale miles de dólares para los coleccionistas” renders as “Qué debe revisar en billetes de $1 para saber si vale miles de”. | Set an explicit `seoTitle` of at most 60 characters that is a complete phrase. Do not rely on the hard clip for headlines. |
| High | SEO / links | Built HTML. `dist/index.html` links `/coleccion/notafilia/catalogo/` (from `src/lib/mega-nav.ts` lines 217–220). Nothing links `/coleccion/colombia/catalogo/` or `/coleccion/paises-bajos/` except the other-language twin. | Those four URLs are in the sitemap and indexable, and a crawl from `/` or `/en/` never reaches them. They only point at each other through the language switch. | Add a visible link from `/coleccion/colombia/` to its catalog, and from `/coleccion/` (or the notaphily nav) to `/coleccion/paises-bajos/`. Mirror both in English. |
| High | SEO / hreflang | `src/data/news-articles.json`. 55 of 150 articles have `bodyHtml.en` identical to `bodyHtml.es`. Rendered example: `dist/en/news/from-the-silver-quetzal-to-electronic-payments/index.html` is `lang="en"` with an English meta description and a Spanish article (“Las monedas de Guatemala…”). | English URLs advertise English and then serve Spanish prose. Hreflang says the two URLs are translations. | Translate those 55 bodies. Until then, do not treat the English URL as an English document. The newest 15, which `llms.txt` lists, are already translated. |
| Medium | AEO / schema | `src/data/glossary.ts` lines 110–111 and 1144–1149. `GlossaryTermPage.astro` lines 39–40 and 68. Built `/glosario/notafilia/`: visible lead is “La notafilia es el estudio y coleccionismo de papel moneda…”. JSON-LD `description` is “Rama de la numismática enfocada específicamente en el coleccionismo de billetes de papel moneda.” That sentence is not in the body. Meta description (87 characters) says “bonos”, which the lead does not. | `DefinedTerm.description` and, on PMG and espécimen, the speakable line describe a shorter definition than the article the reader sees. PMG and espécimen speakable lines are 17 words. | Set `description` and `.direct-answer` from the first sentences of the visible article, already in `src/data/glossary-articles.ts`. Keep them inside 40–60 words where the article supports it. |
| Medium | SEO | `src/layouts/Layout.astro` line 39 calls `limitMetaDescription(description, 165)`. `src/lib/piece-seo.ts` line 4 sets `META_DESCRIPTION_MAX` to 155. | 131 indexable meta descriptions are 156–164 characters. None exceed 165, so the built-in audit does not fail them. About is clipped to “Colombia y América” (`src/data/about.ts` line 16; rendered `dist/acerca-de/index.html`). `og:description` (Layout line 76) still uses the uncut string. | Pass 155 into `limitMetaDescription`, and shorten the about string on a phrase boundary before the limiter runs. Use the same limited string for `og:description`. |
| Medium | SEO | Built-in audit: 118 titles of 61–70 characters, 0 over 70. Collection pieces are most of them, for example `dist/coleccion/colombia/1-peso-oro-1940/index.html` at 61 characters. `pieceDocumentTitle` in `src/lib/piece-seo.ts` keeps the issuer and country after the brand suffix is dropped. | Google often displays about 60 characters. These titles are complete, just long. | Shorten the piece pattern only where the issuer already implies the country, without dropping a Pick, BG#, or year. Leave titles that are already a complete phrase under 70 alone if a cut would remove the issuer. |
| Medium | SEO | `src/lib/piece-seo.ts` lines 77–81 `yearRangeToken` returns the last year. Record title at `src/data/colombia-notes.ts` line 1410 is “1944 y 1955”. | `/coleccion/colombia/2-pesos-oro-1944/` renders `<title>` and `<h1>` as 1955 only. The URL, canonical, and the printed date on the note lead with 1944. This is the only title of the form “year y year”. | Teach the parser to keep both years when the title says “1944 y 1955”, and render that in the `h1` and `<title>`. |
| Medium | SEO | `src/lib/seo.ts` line 29 `DEFAULT_OG_IMAGE` (Guatemala 5 quetzales). Audit: 38 indexable pages use it, including `/coleccion/notafilia/`, `/coleccion/colombia/catalogo/`, `/coleccion/`, `/editorial/`, `/herramientas/numeracion-especial/`, and `/identificar/billetes-falsos/`. | Shares and previews for those URLs show a Guatemalan note. `/coleccion/colombia/` correctly uses its own series image. | Pass a page image into `ogImage` on those hubs. Do not invent a photo. Reuse a scan already on the page. |
| Medium | Schema | `collectionPageJsonLd` only emits `ItemList` when `items` is passed (`src/lib/json-ld.ts` lines 77–87). 84 built `CollectionPage` graphs have no `ItemList`. Country hubs such as `UnitedStatesSeriesPage.astro` do not pass `items`. `/coleccion/colombia/` does. | Child links are in the HTML, but the schema does not list them. The AEO spec asks hubs to do so. | Pass the cards already rendered on each hub as `items`. Do not list pieces that are not on the page. |
| Medium | AEO | Collection leads use `class="direct-answer"`. On `dist/coleccion/`, 159 of 188 such leads are under 40 words. The audit warns on both locales. 28 of those pages have fewer than two links in the related-pieces block. | A piece lead is a factual sentence, not a 40-word answer. Padding it would invent copy. Some pieces also have no sibling links. | Leave short factual leads alone. Add related links only where another published piece of the same series already exists. |
| Low | Schema | `src/lib/json-ld.ts` lines 201–204. Piece pages set `VisualArtwork.creator` and `author` to `#yezid-acosta`. The visible ficha names the issuer and the printer. Image objects already credit him as photographer. | A consumer that reads only the artwork node can say he created the banknote. | Keep him on the `ImageObject`. Point the artwork `creator` at the printer or designer when the record names one. |
| Low | Schema | `GlossaryTermPage.astro` emits `DefinedTerm` only. `AboutPage.astro` lines 28–58 emit `AboutPage`, `Person`, and `Organization`, while the template renders `Breadcrumb`. | Breadcrumbs are visible and not in JSON-LD on glossary terms (68 pages) and about (2 pages). | Add `BreadcrumbList` from the crumbs already on the page. Do not add a second `Person` or `Organization` `@id`. |
| Low | Schema | `src/lib/seo.ts` lines 65–68. `SearchPage.astro` line 57 is `noindex`. | `WebSite.potentialAction` targets `/buscar/`, which is noindex. | Leave search noindex. If a sitelinks search box is wanted later, confirm with Search Console rather than indexing the search URL. |
| Low | CWV | `Layout.astro` line 57 loads `/cf-image-fallback.js` with no `defer`. Line 58 defers the RUM script. Analytics gtag is `async`. | One small synchronous script on every page. Largest built JS is 17 KB (`dist/_astro/es.*.js`). CSS is 56 KB. Fonts are woff2, preloaded, `font-display: swap` (`src/styles/global.css` lines 3–16; font files 40 KB and 29 KB). | Defer `cf-image-fallback.js` only if a check shows the error listener still runs in time. This is not a bundle problem. |
| Low | Entity | `src/lib/seo.ts` lines 36–39 `AUTHOR_SAME_AS` is empty, with a code comment for a LinkedIn URL. Organization `sameAs` is Facebook and X only (lines 92–93). | Person has no `sameAs`. That matches the rule not to invent a profile. | Add a URL only when the owner supplies one. |

`Product` and `LocalBusiness` are omitted on purpose. The pages say nothing is for sale and give no public address.

## Top 10 fixes

Ranked by impact against effort. None of these are applied.

1. Finish the 13 guide `directAnswer` strings on a sentence boundary, using only claims already in the article. Highest leverage for the valuation query and for voice.
2. Write complete `seoTitle`s for the 14 news headlines the 70-character clip cuts in half.
3. Link the Colombia visual catalog and the Netherlands paper series from a hub that is already in the nav.
4. Translate the 55 English news bodies that are still the Spanish article. Large, and it is the main hreflang defect.
5. Point glossary `DefinedTerm.description` and the speakable paragraph at the visible article, starting with notafilia, Pick, PMG, and espécimen.
6. Limit meta descriptions to 155 characters in `Layout.astro`, and rewrite the about description so it does not end on “América”.
7. Replace the Guatemala fallback share image on the notaphily hub, the catalogs, the editorial page, the fancy-serial tool, and the counterfeit guide.
8. Keep both 1944 and 1955 in the title and `h1` of `/coleccion/colombia/2-pesos-oro-1944/`.
9. Add `ItemList` JSON-LD on hubs that already show child cards and currently emit `CollectionPage` without `mainEntity`.
10. Add `BreadcrumbList` on glossary terms and the about page, matching the crumbs already in the HTML.

Not recommended: extra `Allow` lines in `robots.txt`, a second hand-written `llms.txt`, `Product` or `LocalBusiness` schema, or padding piece leads to 40 words.

## Needs a live check

These cannot be verified from the repo or from this build.

- Google Search Console: coverage, the queries above, duplicate-title reports, and whether the clipped news titles are the ones Google shows.
- Field Core Web Vitals (CrUX or Search Console), and a PageSpeed run against production. This build only shows small CSS and JS.
- Cloudflare: whether `/cdn-cgi/image/…format=auto` is actually served as AVIF or WebP, and whether the edge is still caching an old `/sitemap.xml` or `/en/`. `format=auto` is what `src/lib/images.ts` line 42 requests. Catalog masters in `catalog-src/catalog/` are 555 JPEG, 33 PNG, and 4 WebP.
- Server or Cloudflare AI Crawl logs for GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended, and CCBot. `robots.txt` allows them. That does not prove they fetch.
- A production `curl` of canonical, hreflang, and `X-Robots-Tag` on `/llms.txt`, compared with this `dist/`. Dashboard cache rules are outside the repo.
- Rich Results Test and the Twitter/Facebook card debuggers on a hub that uses the Guatemala fallback image.
- Whether Google still honors `SearchAction` when `/buscar/` is noindex.
- IndexNow delivery after deploy (`scripts/indexnow.mjs` runs only on the production main-branch build).
- The 592 catalog masters were not re-watermarked in this build, so missing files under `dist/images/catalog/` are an artifact of that skip, not a production 404.
