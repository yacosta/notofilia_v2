# AGENTS.md

## Cursor Cloud specific instructions

Notofilia v2 is a static bilingual (ES/EN) site built with **Astro + Tailwind CSS v4**, deployed to **Cloudflare Workers** static assets. There is one service: the site itself.

Standard commands live in `package.json` (`dev`, `build`, `preview`, `deploy`); prefer those.

- Run the dev server with `npm run dev` (Astro dev server on `http://localhost:4321/`). This is the command to use while developing — not `build`/`preview`/`deploy`.
- There is no `lint` script and no test suite. `npm run build` (`astro build`) is the effective check: it type-checks and statically renders all ~35 pages, so treat a clean build as the pass/fail gate.
- `npx astro check` is NOT wired up: it prompts interactively to install `@astrojs/check` + `typescript`, which are not in `package.json`. Don't rely on it in non-interactive/cloud runs; use `npm run build` instead.
- `npm run preview` and `npm run deploy` build first and then invoke `wrangler`. `wrangler` pulls in `undici`, which warns `EBADENGINE` (wants Node ≥ 22.19; the VM has 22.14). This is only a warning and does not affect `npm run dev` or `npm run build`.
- Routing: Spanish pages are served at the root (e.g. `/`, `/coleccion/colombia/`) and English under `/en/` (e.g. `/en/`, `/en/coleccion/colombia/`). `trailingSlash` is `always`, so include trailing slashes in URLs. Most interior/collection pages are intentional migration stubs.
- `astro.config.mjs` sets `compressHTML: false` on purpose so empty `alt=""` survives for a11y scanners — do not "optimize" this away.
