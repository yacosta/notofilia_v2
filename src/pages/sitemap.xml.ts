import type { APIRoute } from 'astro';
import { sitemapXml } from '../lib/publish-manifest';

export { collectSitemapPaths, sitemapTxt, sitemapXml } from '../lib/publish-manifest';

/**
 * Text sitemap (one absolute URL per line). Google’s text-sitemap rules
 * allow nothing but URLs, so the reading guide lives in llms.txt and robots.txt.
 * Spanish (x-default) is emitted first; the English URL follows when it differs.
 * There is no @astrojs/sitemap integration. This route and scripts/build-llms.mjs
 * both call publish-manifest so the XML and text lists cannot drift.
 */
export const GET: APIRoute = () =>
  new Response(sitemapXml(), {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
