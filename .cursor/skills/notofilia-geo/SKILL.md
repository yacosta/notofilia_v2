---
name: notofilia-geo
description: >-
  Use when changing Notofilia.com generative-engine files: llms.txt,
  llms-full.txt, /api/catalogue-summary.json, Organization or Person sameAs,
  knowsAbout, logo ImageObject, or X-Robots-Tag on machine-readable helpers.
  Read notofilia-seo for the audit harness and notofilia-aeo for citations
  and direct answers those files must quote.
---

# Notofilia generative-engine optimization

Machine-readable files describe the same catalogue the HTML describes. They do not add facts. No prices, valuations, invented profile URLs, or Wikidata IDs. `TODO(owner)` stays out of rendered HTML, `llms.txt`, and JSON responses.

Spanish and English pairs stay together. Endpoints are locale-aware in their bodies even when the route is unprefixed. Site standards: `.cursor/rules/00-site-standards.mdc`. Answer blocks and citations: `.cursor/skills/notofilia-aeo/SKILL.md`. Link checks against `dist/`: `.cursor/skills/notofilia-seo/SKILL.md`.

Current generator: `llmsTxt()` in `src/lib/seo.ts`, served by `src/pages/llms.txt.ts`. Extend that pipeline. Do not hand-maintain a second copy of the URL list.

## `llms.txt`

Curated file, about 40–70 links:

1. H1 and a blockquote summary.
2. Sections: Hubs, Guides, Glossary, Editorial/About, Tools, Machine-Readable Data, and “Recent news (latest 15 only)”.
3. Each line: `[Title](url): one-line description`.

Keep ES and EN pairs. Do not list every news item or every catalogue item. Point to `/sitemap.xml` and `/api/catalogue-summary.json` for the full list.

## `llms-full.txt`

Full structured breakdown: each guide’s title, URL, `directAnswer`, and primary sources (`citation`), plus every glossary term in ES and EN with its definition. Sources and answers come from the same fields the pages render.

## `/api/catalogue-summary.json`

Build-time static JSON for every catalogue item. Non-sensitive fields only: id, title ES/EN, country, year, issuer, printer, catalog codes (Pick, BG, KM, HT), URLs ES/EN. No serials that the public ficha does not already show if a module treats a serial as private; public ficha serials may be included only when they are already on the HTML page. No prices. Link this file from `llms.txt`.

Every URL in `llms.txt` and `llms-full.txt` must exist in the built output. The SEO audit fails the build when one does not.

## Entity graph

Global `@graph` in `websiteJsonLd` (`src/lib/seo.ts`). Keep `@id` values `#website`, `#organization`, and `#yezid-acosta` so `BlogPosting`, `NewsArticle`, and `VisualArtwork` references keep resolving.

Organization:

- `logo`: `ImageObject` with an absolute URL of a logo file that exists in the repo and is at least 112×112.
- `image`.
- `sameAs`: `https://www.facebook.com/NOTOFILIA` and `https://x.com/Notofilia` only. Do not add profiles you cannot verify.
- `publishingPrinciples`: `https://notofilia.com/editorial/`.

Person (Yezid Acosta):

- `sameAs` from a config constant `AUTHOR_SAME_AS`. A missing LinkedIn URL is a code comment `TODO(owner): LinkedIn URL` and is omitted from the emitted array.
- `knowsAbout`: Colombian banknotes, numismatics, notaphily, banknote grading and conservation, with ES or EN strings matching the page locale.

Item-page `identifier` and image license fields are specified in the AEO skill.

## Crawlers vs search indexes

In `public/_headers`, send `X-Robots-Tag: noindex` for `/llms.txt`, `/llms-full.txt`, and `/api/*` (and the feeds listed in the SEO skill). Crawlers and RAG bots may fetch the files. Those helper URLs should not be web-search documents.

`public/favicon.ico` only from an existing logo or SVG. `manifest.webmanifest` only when the icons already exist. `public/.well-known/security.txt` only when the owner supplies a contact. Otherwise list them under manual steps. Do not invent an email or a security contact.
