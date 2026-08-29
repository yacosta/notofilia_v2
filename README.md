# Notofilia v2

Astro + Tailwind CSS v4, deployed to Cloudflare Workers (static assets).

## Local

```sh
npm install
npm run dev
```

`npm run dev` and `npm run build` first run `npm run images`. Unmarked masters stay in `catalog-src/catalog/`. The script writes a corner-stamped display file to `public/images/catalog/` and a light-tile download file to `public/images/catalog-download/`. Catalog pages show the corner file and offer a download link to the tiled file. `npm run images:preview` still writes a local side-by-side at `/watermark-preview/`. Add new catalog photos to `catalog-src/catalog/` using the same public path (`philippines/1-peso-front.jpg` → `/images/catalog/philippines/1-peso-front.jpg`). Do not commit generated files under `public/images/catalog/`, `public/images/catalog-download/`, or `public/watermark-preview/`.

## Site audits

Page-type and chrome rules live in `.cursor/rules/` (`00-site-standards`, `10-page-types`, `20-hero`, `30-catalogue-duplicates`). Cursor commands:

- `/audit-site` — full sweep once a quarter. Do not modify files. Latest write-up: `.cursor/audits/2026-08-site-sweep.md`.
- `/audit-pr` — before each pull request, against changed files. Include Lighthouse **mobile** scores from `npm run build && npx astro preview` for each affected route in both locales.
- `/new-page` and `/migrate-templates` — checklists when adding or converting a page type.
- `/new-catalog-item` — add a banknote or coin only after serial/cert duplicate checks (`30-catalogue-duplicates.mdc`). Every feature that touches holdings must follow this.

Banco de la República production and delivery tables (research copies, not public pages) live in `docs/sources/banrep/`. Use them for Colombian printage/mintage; cite the bank’s statistics page on the site. See `.cursor/rules/40-banrep-production.mdc`.

## Deploy

Pushing to `main` triggers a Cloudflare Workers build:
build command `npm run build`, deploy command `npx wrangler deploy`.
