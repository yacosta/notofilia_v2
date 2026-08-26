# Notofilia v2

Astro + Tailwind CSS v4, deployed to Cloudflare Workers (static assets).

## Local

```sh
npm install
npm run dev
```

`npm run dev` and `npm run build` first run `npm run images`. Unmarked masters stay in `catalog-src/catalog/` (print / archive copies). The script writes web-sized JPEGs/PNGs to `public/images/catalog/` with a bottom-right Notofilia signature at 40% opacity and copyright EXIF/XMP. Add new catalog photos to `catalog-src/catalog/` using the same public path (`philippines/1-peso-front.jpg` → `/images/catalog/philippines/1-peso-front.jpg`). Do not commit files under `public/images/catalog/`.

## Deploy

Pushing to `main` triggers a Cloudflare Workers build:
build command `npm run build`, deploy command `npx wrangler deploy`.
