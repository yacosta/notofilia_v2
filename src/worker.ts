import { COMMENTS_API_PATTERN, handleCommentsRequest } from './worker/comments';

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
    const url = new URL(request.url);
    if (url.pathname.startsWith('/api/')) {
      return handleCommentsRequest(request, env);
    }

    let asset = await env.ASSETS.fetch(request);
    if (
      asset.status === 404 &&
      (url.pathname === '/en' || url.pathname.startsWith('/en/')) &&
      !url.pathname.startsWith('/en/404')
    ) {
      const notFound = await env.ASSETS.fetch(new URL('/en/404/', url.origin));
      asset = new Response(notFound.body, {
        status: 404,
        statusText: 'Not Found',
        headers: notFound.headers,
      });
    }
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

export { COMMENTS_API_PATTERN };
