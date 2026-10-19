---
name: notofilia-aeo
description: >-
  Use when changing Notofilia.com answer-engine content: direct answers,
  Speakable, DefinedTerm, citations, FAQ markup, collector notes, news Article
  vs NewsArticle, or the banknote valuation method table. Read notofilia-seo
  for title and meta limits and notofilia-geo for llms.txt and entity sameAs.
---

# Notofilia answer-engine optimization

Write answers a collector can quote. Spanish first, then English for meaning (`.cursor/skills/notofilia-bilingual-author/SKILL.md`). Page-type JSON-LD already required by `.cursor/rules/10-page-types.mdc` stays: do not add a second graph for the same entity, and do not change existing `@id` values (`#website`, `#organization`, `#yezid-acosta`).

No prices, valuations, estimates, or invented facts. `TODO(owner)` stays in data or comments and never in HTML. There is no `src/content/` collection; fields live on the existing `src/data/` record (`glossary.ts`, `blog-articles.json`, `news-articles.json`, country modules).

Technical limits and the dist audit: `.cursor/skills/notofilia-seo/SKILL.md`.

## Glossary and defined terms

- On each glossary term page, emit `DefinedTerm` JSON-LD: `@id`, `name`, `description` from `directAnswer` or `metaDescription`, `inDefinedTermSet` pointing at `/glosario/` or `/en/glossary/`.
- On the glossary index, emit `DefinedTermSet`.
- Optional `directAnswer` (40–60 words). If absent, reuse the first sentence of the definition. The visible definition paragraph stays as written.
- Meta description rules (155 characters, explicit copy for the eight priority terms) are in the SEO skill. Do not paste the whole definition into the meta description.

## Guides

- Optional `directAnswer` (40–60 words) on blog guides. When present, render it under the `h1` as `<p class="direct-answer">`. Use it as the meta description only when no meta description exists.
- When that block renders on a guide (`BlogPosting`) or glossary term (`DefinedTerm`), add `speakable: { "@type": "SpeakableSpecification", "cssSelector": [".direct-answer"] }` on that page’s JSON-LD.
- Backfill `directAnswer` only from claims already in the article. No new facts and no prices.
- `FAQPage` markup only where the FAQ is visible on the page.
- Every `BlogPosting` builds `citation` as an array of `CreativeWork` (`name`, `url`) from the same data as the visible “Fuentes primarias / Primary sources” list.
- Optional `entities: [{ name, type, sameAs? }]`. Emit `about` and `mentions` from that list. Include `sameAs` only when the record has a URL. Do not guess Wikidata IDs. Keep existing `reviewedBy`, author, and `dateModified`.

### Valuation guide

On “Cómo se valora un billete colombiano” / “How Colombian banknotes are valued”, add an `h2` on the question “¿Cuánto vale un billete colombiano?” / “How much is a Colombian banknote worth?”. Explain the method: type and rarity, conservation grade, third-party certification, known population, sale venue. Include one semantic `<table>` mapping those five factors to public verification sources (BanRep production tables, PMG/PCGS population reports, auction archives) and link those sources. No prices and no estimates.

## Item pages

Catalogue references (Pick, BG#, KM#, HT#) on `VisualArtwork` are a structured `identifier` array of `PropertyValue` (`propertyID`, `value`). Primary obverse and reverse images are `ImageObject` with `creator`, `creditText` `"Notofilia.com / Yezid Acosta"`, `copyrightNotice`, and `acquireLicensePage` (`https://notofilia.com/editorial/` or `/en/editorial/`).

Specification blocks use `<dl>` or `<table>` for printer (`Imprenta`), assayer or signatures, dimensions, and grade.

## Trust pages

- `/editorial/` and `/en/editorial/`: page JSON-LD (`WebPage` or `AboutPage`) with `isPartOf` the WebSite, `about` the Organization, `inLanguage`, `dateModified`, plus `BreadcrumbList`. Privacy and cookie pages use `WebPage`.
- Collection hubs (`/coleccion/colombia/`, `/coleccion/notafilia/catalogo/`, country and category hubs, and English pairs): `CollectionPage` whose `mainEntity` is an `ItemList` of `ListItem` (`position`, `name`, `url`) for the child items actually on that hub.
- About (`/acerca-de/`, `/en/about/`): a structured block for collecting background, specialties, and memberships or certifications uses **only** text already in the repo. Missing credentials live in data with a code comment `TODO(owner)` and render nothing when empty. Keep `Person` schema in sync. `sameAs` and `knowsAbout` rules are in the GEO skill.

## News

Do not delete or `noindex` news automatically.

- `docs/seo/news-triage-2026-10.csv` when producing a triage: ES URL, EN URL, publish date, topic country (from slug or keywords), internal link count to `/coleccion/`, main-content word count, source domain, and `recommendation`.
- `keep` if it links to a catalogue record or is Colombia or US focused. `add-analysis` if it has no catalogue link but still fits the collection. `merge-into-digest` for off-focus price-listing stories (Mexico, Chile, Spain asking prices).
- Optional `collectorNote`: “Por qué importa para el coleccionista” / “Why it matters to collectors”, rendered above the source attribution when present. Do not auto-write notes.
- Structured data stays `NewsArticle` unless `NEWS_SCHEMA_TYPE` is set. The flag defaults to `NewsArticle`. Report the flag; the owner switches it to `Article`.

## Census (spec only)

Do not build a census database unless asked. `docs/seo/census-seo-spec.md` describes stable per-type URLs (ES and EN, translated slugs), `Dataset` JSON-LD (`name`, `description`, `creator`, `license`, `temporalCoverage`, `spatialCoverage`, `variableMeasured`, `distribution`, `isBasedOn`), a methodology page, an update-cadence statement, and internal links from each catalogue record to its census entry.
