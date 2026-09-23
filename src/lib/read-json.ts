/** Cap JSON API bodies. Comment text is at most 1,500 characters; identify sends a 16-character hash. */
export const MAX_API_JSON_BYTES = 8192;

export async function readLimitedJson(
  request: Request,
  maxBytes = MAX_API_JSON_BYTES,
): Promise<{ ok: true; value: unknown } | { ok: false; tooLarge: boolean }> {
  const declared = Number(request.headers.get('content-length') ?? '');
  if (Number.isFinite(declared) && declared > maxBytes) {
    return { ok: false, tooLarge: true };
  }

  const raw = await request.text();
  if (raw.length > maxBytes) return { ok: false, tooLarge: true };

  try {
    return { ok: true, value: JSON.parse(raw) };
  } catch {
    return { ok: false, tooLarge: false };
  }
}
