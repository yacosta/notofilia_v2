import type { APIRoute } from 'astro';
import { sitemapTxt } from './sitemap.xml';

export const GET: APIRoute = () =>
  new Response(sitemapTxt(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
