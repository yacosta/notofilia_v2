# Notofilia v2

Astro + Tailwind CSS v4, deployed to Cloudflare Workers (static assets).

## Local

```sh
npm install
npm run dev
```

`npm run dev` and `npm run build` first run `npm run images`, which watermark unmarked masters from `catalog-src/catalog/` into `public/images/catalog/` and embed copyright EXIF/XMP. Add new catalog photos to `catalog-src/catalog/` using the same public path (`philippines/1-peso-front.jpg` → `/images/catalog/philippines/1-peso-front.jpg`). Do not commit files under `public/images/catalog/`.

## Deploy

Pushing to `main` triggers a Cloudflare Workers build:
build command `npm run build`, deploy command `npx wrangler deploy`.
