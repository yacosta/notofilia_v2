# Notofilia v2

Astro + Tailwind CSS v4, deployed to Cloudflare Workers (static assets).

## Local

```sh
npm install
npm run dev
```

`npm run dev` and `npm run build` first run `npm run images`. Unmarked masters stay in `catalog-src/catalog/`. The script writes a corner-stamped display file to `public/images/catalog/` and a light-tile download file to `public/images/catalog-download/`. Catalog pages show the corner file and offer a download link to the tiled file. `npm run images:preview` still writes a local side-by-side at `/watermark-preview/`. Add new catalog photos to `catalog-src/catalog/` using the same public path (`philippines/1-peso-front.jpg` → `/images/catalog/philippines/1-peso-front.jpg`). Do not commit generated files under `public/images/catalog/`, `public/images/catalog-download/`, or `public/watermark-preview/`.

## Deploy

Pushing to `main` triggers a Cloudflare Workers build:
build command `npm run build`, deploy command `npx wrangler deploy`.
