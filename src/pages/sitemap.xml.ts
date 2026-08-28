import type { APIRoute } from 'astro';
import { localizePath } from '../lib/locale-paths';
import { SITE_URL } from '../lib/site-url';
import { dedicatedCatalogPaths, stubPages } from '../lib/site';

const extra = [
  '/',
  '/blog/',
  '/noticias/',
  '/glosario/',
  '/acerca-de/',
  '/contacto/',
  '/coleccion/filipinas/',
  '/coleccion/filipinas/1-peso/',
  '/coleccion/filipinas/2-pesos/',
  '/coleccion/filipinas/5-pesos/',
  '/coleccion/filipinas/20-pesos/',
];

export const GET: APIRoute = () => {
  const paths = new Set<string>(extra);
  for (const page of stubPages) paths.add(`/${page.path}/`);
  for (const slug of dedicatedCatalogPaths) paths.add(`/${slug}/`);

  const urls = [...paths].flatMap((path) => [localizePath(path, 'es'), localizePath(path, 'en')]);
  const unique = [...new Set(urls)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${unique
  .map((loc) => {
    const es = localizePath(loc, 'es');
    const en = localizePath(loc, 'en');
    return `  <url>
    <loc>${SITE_URL}${loc}</loc>
    <xhtml:link rel="alternate" hreflang="es" href="${SITE_URL}${es}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}${en}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${es}"/>
  </url>`;
  })
  .join('\n')}
</urlset>
`;
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
