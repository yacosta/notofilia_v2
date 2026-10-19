import type { APIRoute } from 'astro';
import { feedXml } from '../lib/feed';

export const GET: APIRoute = () =>
  new Response(feedXml('es'), {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
