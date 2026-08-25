# Notofilia v2

Astro + Tailwind CSS v4, deployed to Cloudflare Workers (static assets).

## Local

```sh
npm install
npm run dev
```

## Deploy

Pushing to `main` triggers a Cloudflare Workers build:
build command `npm run build`, deploy command `npx wrangler deploy`.
