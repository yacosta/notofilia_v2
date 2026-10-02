import { json } from './comments.ts';

export const IDENTIFY_API_PATH = '/api/identify';

/** Identify is unpublished for now; keep the route reserved and return Gone. */
export async function handleIdentifyRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);
  if (url.pathname.replace(/\/$/, '') !== IDENTIFY_API_PATH) {
    return json({ error: 'Not found' }, { status: 404 });
  }

  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'access-control-allow-methods': 'POST, OPTIONS',
        'access-control-allow-headers': 'content-type',
        'access-control-max-age': '86400',
      },
    });
  }

  return json(
    {
      error: 'Identify is temporarily unpublished.',
      code: 'identify_unpublished',
    },
    { status: 410 },
  );
}
