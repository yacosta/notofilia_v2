---
name: notofilia-cloudflare
description: Deploy, diagnose, and optimize NOTOFILIA's Astro site on Cloudflare Workers, D1, and static assets.
---
# NOTOFILIA Cloudflare operations

Use for changes to hosting, runtime, caching, deployments, and Cloudflare configuration.

## Source of truth
Read `wrangler.jsonc`, `src/worker.ts`, `docs/SECURITY.md`, `public/_headers`, `package.json`, and relevant tests before changing behavior.

## Workflow
1. Treat `main` as production-facing. Work on a feature branch; propose a PR. Do not deploy, mutate production D1, purge production cache, or alter DNS without explicit authorization.
2. Verify Node and Astro runtime compatibility from `package.json` and current documented requirements, rather than assuming versions.
3. Run `npm install`, `npm test`, and `npm run build` in an environment with the correct Node version. Note that `prebuild` creates generated images and identification indexes; do not commit generated images.
4. For Worker changes test static assets, Spanish and English 404s, redirects/410s, security headers, `/api/identify`, and `/api/comments/:slug`.
5. For D1 changes review `migrations/`, parameterized queries, rollback and backup plans; distinguish local from remote operations.
6. For cache changes test rename redirects, image versioning and stale assets; `postbuild` runs cache purge and IndexNow, so inspect scripts and environment before invoking deployments.
7. Confirm non-production hosts remain noindex and that production canonical URLs remain indexable.
8. Report commands executed, observed results, risks, rollback instructions and any Cloudflare dashboard settings that cannot be inspected.

Never print secrets or claim Cloudflare production settings were verified merely from repository files.
