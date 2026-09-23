import identifyIndex from '../data/identify-index.mjs';
import { rankIdentifyMatches, type IdentifyIndex } from '../lib/identify.ts';
import { readLimitedJson } from '../lib/read-json.ts';
import { json } from './comments.ts';

export const IDENTIFY_API_PATH = '/api/identify';

/** Optional future bindings (Workers AI / Vectorize) — unused by the dHash matcher. */
export type IdentifyEnv = {
  AI?: unknown;
  VECTORIZE?: unknown;
};

const index = identifyIndex as IdentifyIndex;

function parseLocale(value: unknown): 'es' | 'en' {
  return value === 'en' ? 'en' : 'es';
}

export async function handleIdentifyRequest(request: Request, _env: IdentifyEnv): Promise<Response> {
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

  if (request.method !== 'POST') {
    return json({ error: 'Method not allowed' }, { status: 405 });
  }

  const contentType = request.headers.get('content-type') ?? '';
  if (!contentType.toLowerCase().includes('application/json')) {
    return json({ error: 'Expected application/json.' }, { status: 415 });
  }

  const parsed = await readLimitedJson(request);
  if (!parsed.ok) {
    return json(
      { error: parsed.tooLarge ? 'Request body is too large.' : 'Invalid JSON body.' },
      { status: parsed.tooLarge ? 413 : 400 },
    );
  }

  const payload = parsed.value as { hash?: unknown; locale?: unknown; topK?: unknown };

  const hash = String(payload.hash || '').trim().toLowerCase();
  if (!/^[0-9a-f]{16}$/.test(hash)) {
    return json({ error: 'Expected a 16-character dHash hex string.' }, { status: 400 });
  }

  const locale = parseLocale(payload.locale);
  const topKRaw = Number(payload.topK);
  const topK = Number.isFinite(topKRaw) ? Math.min(10, Math.max(1, Math.floor(topKRaw))) : 5;

  const matches = rankIdentifyMatches(index, hash, locale, { topK });

  return json({
    algorithm: index.algorithm,
    indexedFaces: index.faces.length,
    matches,
  });
}
