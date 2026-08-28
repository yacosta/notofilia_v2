// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { newsArticles } from './src/data/editorial.ts';
import { glossaryTerms } from './src/data/glossary.ts';
import { englishRedirects } from './src/lib/locale-paths.ts';
import { astroLegacyRedirects } from './src/lib/legacy-redirects.ts';

const generated = englishRedirects();
for (const term of glossaryTerms) {
  generated[`/en/glosario/${term.slug}/`] = `/en/glossary/${term.slug}/`;
}
for (const article of newsArticles) {
  generated[`/en/noticias/${article.slug}/`] = `/en/news/${article.slug}/`;
}

export default defineConfig({
  site: 'https://notofilia.com',
  trailingSlash: 'always',
  compressHTML: false,
  redirects: {
    ...astroLegacyRedirects(),
    ...generated,
  },
  vite: {
    plugins: [
      tailwindcss(),
      {
        name: 'cf-image-dev-passthrough',
        configureServer(server) {
          server.middlewares.use((req, _res, next) => {
            const url = req.url ?? '';
            if (!url.startsWith('/cdn-cgi/image/')) {
              next();
              return;
            }
            const q = url.indexOf('?');
            const pathOnly = q === -1 ? url : url.slice(0, q);
            const search = q === -1 ? '' : url.slice(q);
            const slash = pathOnly.indexOf('/', '/cdn-cgi/image/'.length);
            if (slash === -1) {
              next();
              return;
            }
            req.url = `${pathOnly.slice(slash)}${search}`;
            next();
          });
        },
      },
    ],
    build: {
      assetsInlineLimit: 0,
    },
  },
});
