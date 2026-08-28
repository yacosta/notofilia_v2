# Site-wide sweep — 2026-08-28

Standard: `.cursor/rules/00-site-standards.mdc`, `10-page-types.mdc`, `20-hero.mdc`.
Scope: all `src/pages/**/*.astro` plus the type layouts they import. Files were not modified.

Endpoints (not page types): `src/pages/sitemap.xml.ts`, `src/pages/llms.txt.ts`.

---

## Inventory

| Type | ES/EN route files | Type layout | On template? |
| --- | --- | --- | --- |
| `home` | `index.astro`, `en/index.astro` | `HomePage.astro` | yes |
| `about` | `acerca-de/`, `en/about/` | `AboutPage.astro` | yes |
| `contact` | `contacto/`, `en/contact/` | `ContactPage.astro` | yes |
| `collection-hub` | `coleccion/index.astro`, `en/collection/index.astro` | **missing** (`CollectionHubPage.astro`) | **no** — markup inlined in both route files |
| `discipline-index` | notafilia + numismatica (4) | `NotafiliaIndexPage` / `NumismaticaIndexPage` | yes |
| `series-index` | 26 files (13 pairs) | various `*SeriesPage` / `*CoinagePage` / `LazarettosPage` / `PolymerWorldPage` | yes |
| `piece` | 28 files (14 pairs) | `*NotePage` / `*CoinPage` | yes |
| `editorial-index` | blog + noticias/news (4) | `EditorialIndexPage.astro` | yes |
| `editorial-article` | `[slug]` × 4 | `EditorialArticlePage.astro` | yes |
| `glossary-index` | `glosario/`, `en/glossary/` | `GlossaryPage.astro` | yes |
| `glossary-term` | `[term]` × 2 | `GlossaryTermPage.astro` | yes |
| `stub` | `[...slug].astro`, `en/[...slug].astro` | `StubPage.astro` | yes |
| `error` | `404.astro` only | inline in `404.astro` | **partial** — ES only |

Unmapped / unused:

- `src/components/catalog/NumismaticsCatalogPage.astro` — no route imports it.
- `src/components/Breadcrumb.astro` — exists, never imported.
- `src/lib/responsive-image.ts` — unused duplicate of `images.ts`.
- Netherlands coinage lives at `/paises-bajos-numismatica/` (not under `/coleccion/`). Still a valid `series-index`.

---

## Cross-cutting flags

### Unmapped pages

None among published HTML routes except the collection hub (type exists, layout file does not) and EN 404 (type exists, route missing).

### ES / EN markup divergence

| Pair | Status |
| --- | --- |
| Shared `*Page.astro` types | PASS — one component, `locale` prop |
| `coleccion/index` vs `en/collection/index` | PASS structure — duplicated files, same DOM; locale baked into each file instead of a shared layout |
| `404.astro` | **FAIL** — no English page; `locale="es"` and home link `/` hardcoded (`src/pages/404.astro:5-14`) |

### Images not on `/cdn-cgi/image/`

Allowed exceptions: `CountryFlag.astro` SVGs; `NoteImageLightbox.astro` full-res scans.

| Location | Evidence | Should be CDN? |
| --- | --- | --- |
| All series heroes (`ColombiaSeriesPage.astro:35`, `VictorySeriesPage.astro:61`, `UnitedStatesSeriesPage.astro:38`, `ChinaSeriesPage.astro:31`, `MpcVietnamSeriesPage.astro:32`, `NetherlandsSeriesPage.astro:38`, `NetherlandsCoinagePage.astro:42`, `LazarettosPage.astro:30`, `EcuadorSeriesPage.astro:31`, `GuatemalaSeriesPage.astro:32`, `PuertoRicoSeriesPage.astro:24`, and Colombia coinage hero) | raw `src={hero.src}` | **yes — LCP** |
| `ColombiaNotePage.astro:56` piece hero | raw `hero.src` | **yes — LCP** |
| Series thumbnail grids (e.g. `ColombiaSeriesPage.astro:160`, `ChinaSeriesPage.astro:104`, `VictorySeriesPage.astro:131`) | raw catalog paths | yes (cards) |
| `PolymerWorldPage.astro:57` | raw `country.image` | yes |
| `EditorialIndexPage.astro:73-74` | raw `item.image` | **yes** |
| `ContactPage.astro:63-73` | `/uploads/doblones-coloniales-oro.png` in `<picture>` | yes |
| Home / `CardImage` / editorial article figure | `cardImageSrc` / `heroSrcset` | PASS |

### Hard-coded Spanish (and bilingual ternaries) in components

| File | Evidence |
| --- | --- |
| Catalog `*Page.astro` (15+) | `'Migas de pan'` / `'Inicio'` / `'Colección virtual'` — e.g. `ColombiaSeriesPage.astro:56,69,73` |
| `AboutPage.astro` | ES/EN bios inlined in the component (not `src/i18n`) |
| `HomePage.astro:26-29` | hero `alt` ternary in the component |
| `HomePage.astro` | sr-only “Definiciones” / locale split in-file |
| `EditorialIndexPage.astro` | `'Leer más →'` / `'Read more →'` |
| `NewWindowHint.astro:8` | inline ES/EN (acceptable if moved to i18n) |
| `Comments.astro` | inline `copy` + client script strings |
| `Breadcrumb.astro` | default `'Migas de pan'` (unused) |

`src/i18n/` does not exist. Chrome uses `src/lib/site.ts` `copy`.

### Stats line rendered more than once

| Render | Evidence |
| --- | --- |
| Home hero | `HomePage.astro:77-78` |
| Home stats band | `HomePage.astro:96-98` |
| Footer (every page) | `Footer.astro:99-101` |

Homepage shows the line **three** times. Inner pages show it once (footer) — PASS for inner pages, FAIL for home.

---

## `home`

| Rule | Result | Evidence | Fix |
| --- | --- | --- | --- |
| Type layout | PASS | `src/pages/index.astro` → `HomePage.astro` | — |
| `main#main-content` | PASS | `HomePage.astro:32` | — |
| Home hero pattern | PASS | `HomePage.astro:33-94` — 72vh, CDN srcset, high fetch | — |
| Hero intrinsic size vs display | FAIL | `width="768" height="284"` (`HomePage.astro:40-41`) on a 72vh cover image | Use the real asset ratio (or omit misleading box) to limit CLS |
| CDN image | PASS | `cardImageSrc` + `heroSrcset` (`HomePage.astro:36-37`) | — |
| Stats once | FAIL | hero + band + footer | Keep footer; drop hero **or** band |
| Copy in i18n | FAIL | hero alt ternary `HomePage.astro:26-29` | Move alt (and remaining literals) into `copy` / `src/i18n` |
| JSON-LD | PASS | sitewide `WebSite` in `Layout.astro:67` | — |
| ES/EN DOM | PASS | shared component | — |

---

## `about`

| Rule | Result | Evidence | Fix |
| --- | --- | --- | --- |
| Type layout | PASS | `AboutPage.astro` | — |
| Breadcrumbs | PASS | present | — |
| No photo hero | PASS | text column | — |
| JSON-LD `AboutPage`+`Person` | PASS | `AboutPage.astro` ~40 | — |
| Copy store | FAIL | bios inlined in component | Move to `src/data/about.ts` or `src/i18n` |
| Reading width | PASS | `max-w-[46rem]` per `LAYOUT.md` | — |

---

## `contact`

| Rule | Result | Evidence | Fix |
| --- | --- | --- | --- |
| Type layout | PASS | `ContactPage.astro` | — |
| Breadcrumbs + JSON-LD | PASS | `ContactPage.astro:23-42` | — |
| CDN image | FAIL | `ContactPage.astro:63-73` raw `/uploads/…` | `cfImage` / `imageSrcset` |
| Copy | PASS | `src/data/contact.ts` | — |

---

## `collection-hub`

| Rule | Result | Evidence | Fix |
| --- | --- | --- | --- |
| Type layout `CollectionHubPage.astro` | FAIL | markup in `coleccion/index.astro:8-28` and `en/collection/index.astro:8-28` | Extract shared layout; routes pass `locale` |
| Breadcrumbs | FAIL | none | Home → Colección |
| JSON-LD `CollectionPage` | FAIL | none | Add BreadcrumbList + CollectionPage |
| Text header, no hero | PASS | h1 + intro + cards | — |
| Stats | PASS | footer only | — |
| ES/EN DOM | PASS | same structure | — |

---

## `discipline-index`

| Rule | Result | Evidence | Fix |
| --- | --- | --- | --- |
| Type layout | PASS | `NotafiliaIndexPage.astro`, `NumismaticaIndexPage.astro` | — |
| Text header, no full-bleed | PASS | `NotafiliaIndexPage.astro:29-33` | — |
| Breadcrumbs | PASS | `NotafiliaIndexPage.astro:18-27` | Move labels to i18n |
| JSON-LD | FAIL | no CollectionPage | Add |
| Spanish literals | FAIL | `'Migas de pan'`, `'Inicio'` | i18n |

---

## `series-index`

Layouts: `VictorySeriesPage`, `ColombiaSeriesPage`, `ColombiaCoinagePage`, `ChinaSeriesPage`, `UnitedStatesSeriesPage`, `MpcVietnamSeriesPage`, `NetherlandsSeriesPage`, `NetherlandsCoinagePage`, `PuertoRicoSeriesPage`, `EcuadorSeriesPage`, `GuatemalaSeriesPage`, `LazarettosPage`, `PolymerWorldPage`.

| Rule | Result | Evidence | Fix |
| --- | --- | --- | --- |
| Thin routes | PASS | e.g. `coleccion/colombia/index.astro` | — |
| Series hero (photo types) | FAIL (CDN) / PASS (structure) | `ColombiaSeriesPage.astro:32-66` matches 86/94vh, bottom type, high fetch; `src={hero.src}` skips CDN | `heroSrcset(hero.src)` + `sizes="100vw"` |
| Polymer exception | PASS (documented) | `PolymerWorldPage.astro` text header | Optionally add CollectionPage JSON-LD |
| Breadcrumbs below hero | PASS | `ColombiaSeriesPage.astro:68-78` | — |
| JSON-LD CollectionPage | FAIL except Philippines | only `VictorySeriesPage.astro:37-49` | Add to every series layout |
| Spanish literals | FAIL | kicker + crumbs ternaries | i18n |
| Thumbnail CDN | FAIL | raw `<img>` in grids | `cardImageSrc` / `imageSrcset` |
| Case width | PASS (spot-check) | `max-w-content` article | — |

---

## `piece`

Layouts: `VictoryNotePage`, `ColombiaNotePage`, `ChinaNotePage`, `UnitedStatesNotePage`, `MpcNotePage`, `ColombiaCoinPage`, `NetherlandsCoinPage`.

| Rule | Result | Evidence | Fix |
| --- | --- | --- | --- |
| Thin routes | PASS | paired ES/EN `index.astro` | — |
| Optional hero | PASS / CDN FAIL | `ColombiaNotePage.astro:52-80` series-style hero, raw `src` | CDN + srcset |
| Text-first pieces | PASS | `ChinaNotePage.astro:33+`, `MpcNotePage.astro:34+` | — |
| JSON-LD `VisualArtwork` | FAIL (partial) | present: Victory, Colombia notes, US note (`VictoryNotePage.astro:36`, `ColombiaNotePage.astro:36`, `UnitedStatesNotePage.astro:34`). Missing: `ChinaNotePage`, `MpcNotePage`, `ColombiaCoinPage`, `NetherlandsCoinPage` | Add VisualArtwork (artform Coin where needed) |
| Lead vs case width | PASS (per LAYOUT.md) | 46rem lead, full case after | — |
| Lightbox scans | N/A (allowed raw) | `NoteImageLightbox.astro:34` | — |
| Crumb literals | FAIL | same ternaries as series | i18n |
| Empty hero alt fallback | FAIL | `ColombiaNotePage.astro:57` `?? ''` | Require `heroAlt` |

---

## `editorial-index`

| Rule | Result | Evidence | Fix |
| --- | --- | --- | --- |
| Layout | PASS | `EditorialIndexPage.astro` | — |
| JSON-LD CollectionPage | PASS | `EditorialIndexPage.astro:31` | — |
| Card images CDN | FAIL | `EditorialIndexPage.astro:73-74` | Use `CardImage` / `cardImageSrc` |
| “Leer más” literal | FAIL | ~line 117 | i18n |
| No hero | PASS | header + grid | — |

---

## `editorial-article`

| Rule | Result | Evidence | Fix |
| --- | --- | --- | --- |
| Layout | PASS | `EditorialArticlePage.astro` | — |
| In-flow figure + CDN | PASS | `EditorialArticlePage.astro:138-140` | — |
| JSON-LD BlogPosting/NewsArticle | PASS | `EditorialArticlePage.astro:65` | — |
| Breadcrumbs | PASS | Home → index → title | — |
| `max-w-[46rem]` | PASS | article column | — |
| External links | PASS | `NewWindowHint` + enhanceProseHtml | — |

---

## `glossary-index` / `glossary-term`

| Rule | Result | Evidence | Fix |
| --- | --- | --- | --- |
| Layouts | PASS | `GlossaryPage.astro`, `GlossaryTermPage.astro` | — |
| JSON-LD | PASS | DefinedTermSet / DefinedTerm | — |
| Breadcrumbs | PASS | data-module labels | — |
| No hero | PASS | — | — |

---

## `stub`

| Rule | Result | Evidence | Fix |
| --- | --- | --- | --- |
| Catch-all + StubPage | PASS | `[...slug].astro`, `en/[...slug].astro` | — |
| Copy | PASS | `copy[locale]` | — |
| JSON-LD | N/A | none required | — |

Known stub-only public paths: `coleccion/espana/`, `editorial/`, `buscar/`, `politica-privacidad-cookies/`.

---

## `error`

| Rule | Result | Evidence | Fix |
| --- | --- | --- | --- |
| `main#main-content` | PASS | `404.astro:9` | — |
| Both locales | FAIL | only `src/pages/404.astro` with `copy.es` | Add EN 404 or locale detection; home link must be locale-aware |
| JSON-LD | N/A | — | — |

---

## Shell (all pages)

| Rule | Result | Evidence | Fix |
| --- | --- | --- | --- |
| Skip link + clip | PASS | `SkipLink.astro:11`, `global.css:68-75` | — |
| hreflang | PASS | `Layout.astro:50-52` | — |
| `compressHTML: false` | PASS | `astro.config.mjs:19` | — |
| `target=_blank` + hint | PASS (spot-check) | Footer, Home, editorial, SourceList | — |
| Sitemap coverage | PASS (dedicated set) | `site.ts:539-578` includes catalog, glossary, blog, news | Keep `extra` in sync when adding types; prefer one registry |

---

## Prioritized fix list

### 1. LCP / CLS

1. Route every **series** and **piece** LCP hero through `heroSrcset` / `cfImage` + `sizes="100vw"` (all `*SeriesPage` / `*CoinagePage` / `LazarettosPage` / `ColombiaNotePage` heroes).
2. Fix homepage hero `width`/`height` to the real asset aspect (`HomePage.astro:40-41`).
3. Serve editorial index cards via `cardImageSrc` / `CardImage` (`EditorialIndexPage.astro:73`).
4. Serve contact `<picture>` through `/cdn-cgi/image/` (`ContactPage.astro:63-73`).
5. Serve series/polymer **thumbnail** grids through `imageSrcset` (not lightbox scans).

### 2. SEO / hreflang

6. Add English (or locale-aware) **404** with matching hreflang.
7. Add `CollectionPage` + `BreadcrumbList` JSON-LD to every `series-index` and both `discipline-index` layouts (today only Philippines series).
8. Add `VisualArtwork` JSON-LD to `ChinaNotePage`, `MpcNotePage`, `ColombiaCoinPage`, `NetherlandsCoinPage`.
9. Extract `CollectionHubPage.astro` and add hub breadcrumbs + `CollectionPage` JSON-LD.

### 3. Accessibility

10. Homepage stats: one in-page render **or** footer only — drop the duplicate hero/band pair (`HomePage.astro:77` and/or `:96`).
11. Require non-empty `heroAlt` on piece heroes (`ColombiaNotePage.astro:57`).
12. Move breadcrumb / “Colección virtual” / “Leer más” / hero alt / NewWindowHint strings out of components into `src/i18n` (or `copy`).

### 4. Consistency

13. Create `src/i18n` and switch chrome + repeated UI off `site.ts` incrementally.
14. Use `Breadcrumb.astro` everywhere; delete or wire `NumismaticsCatalogPage.astro` and `responsive-image.ts`.
15. Document or relocate `/paises-bajos-numismatica/` under `/coleccion/` (redirects already exist the other way) — URL change only with an explicit go-ahead.

Apply with `apply 1 2 10` (example). Implementation: `dev` branch, one commit per page type, then re-run the affected rows.
