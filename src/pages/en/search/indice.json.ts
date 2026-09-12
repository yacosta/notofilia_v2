import type { APIRoute } from 'astro';
import { searchDocuments } from '../../../lib/search-index';

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(searchDocuments('en')), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
