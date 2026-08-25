// @ts-check
import fs from 'node:fs/promises';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

/**
 * Emit a flat `<locale>/404.html` for each non-default locale.
 *
 * Astro only turns the root `src/pages/404.astro` into `dist/404.html`; a
 * nested `src/pages/en/404.astro` builds to `dist/en/404/index.html`. Cloudflare
 * Workers Assets (`not_found_handling: "404-page"`) serves the *nearest*
 * `404.html`, so it needs `dist/en/404.html` to answer `/en/*` misses in English.
 */
function localizedNotFound(locales) {
  return {
    name: 'localized-404',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        for (const locale of locales) {
          const src = new URL(`./${locale}/404/index.html`, dir);
          const dest = new URL(`./${locale}/404.html`, dir);
          try {
            await fs.copyFile(src, dest);
            logger.info(`Emitted ${locale}/404.html`);
          } catch (err) {
            logger.warn(`Could not emit ${locale}/404.html: ${err.message}`);
          }
        }
      },
    },
  };
}

export default defineConfig({
  site: 'https://notofilia.com',
  trailingSlash: 'always',
  compressHTML: false,
  integrations: [localizedNotFound(['en'])],
  vite: {
    plugins: [tailwindcss()],
  },
});
