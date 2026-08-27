type Env = {
  ASSETS: Fetcher;
};

function isNonIndexableHost(hostname: string): boolean {
  return hostname.endsWith('.workers.dev') || hostname === 'dev.notofilia.com' || hostname.endsWith('.pages.dev');
}

function shouldNoindex(url: URL): boolean {
  if (isNonIndexableHost(url.hostname)) return true;
  if (url.searchParams.has('motivo') || url.searchParams.has('q') || url.searchParams.has('email')) return true;
  return false;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const asset = await env.ASSETS.fetch(request);
    const url = new URL(request.url);
    if (!shouldNoindex(url)) return asset;

    const headers = new Headers(asset.headers);
    headers.set('X-Robots-Tag', isNonIndexableHost(url.hostname) ? 'noindex, nofollow' : 'noindex');
    return new Response(asset.body, {
      status: asset.status,
      statusText: asset.statusText,
      headers,
    });
  },
};
