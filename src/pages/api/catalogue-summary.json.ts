import type { APIRoute } from 'astro';
import { catalogueSummary } from '../../lib/search-index';

export const prerender = true;

export const GET: APIRoute = () =>
  new Response(JSON.stringify({ items: catalogueSummary() }), {
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
