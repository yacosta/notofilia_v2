import { contactLegacyRedirect } from './data/contact';
import { lookupGscRedirect, stripDreamweaverSuffix } from './lib/gsc-redirects';
import { COMMENTS_API_PATTERN, handleCommentsRequest } from './worker/comments';

function isNonIndexableHost(hostname: string): boolean {
  return hostname.endsWith('.workers.dev') || hostname === 'dev.notofilia.com' || hostname.endsWith('.pages.dev');
}

function shouldNoindex(url: URL): boolean {
  if (isNonIndexableHost(url.hostname)) return true;
  if (url.searchParams.has('motivo') || url.searchParams.has('q') || url.searchParams.has('email')) return true;
  return false;
}

function isHomePath(pathname: string): boolean {
  return pathname === '/' || pathname === '/en' || pathname === '/en/';
}

/** Strip `/cdn-cgi/image/<options>` when local preview lacks Image Resizing. */
function cfImageFallbackPath(pathname: string): string | null {
  if (!pathname.startsWith('/cdn-cgi/image/')) return null;
  const slash = pathname.indexOf('/', '/cdn-cgi/image/'.length);
  return slash === -1 ? null : pathname.slice(slash);
}

function applyRobots(url: URL, response: Response): Response {
  if (!shouldNoindex(url)) return response;
  const headers = new Headers(response.headers);
  headers.set('X-Robots-Tag', isNonIndexableHost(url.hostname) ? 'noindex, nofollow' : 'noindex');
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

async function goneResponse(request: Request, env: Env, url: URL): Promise<Response> {
  const nf = url.pathname.startsWith('/en') ? '/en/404/' : '/404';
  const page = await env.ASSETS.fetch(new Request(new URL(nf, url.origin), request));
  const headers = new Headers(page.headers);
  headers.set('X-Robots-Tag', 'noindex');
  return new Response(page.body, { status: 410, statusText: 'Gone', headers });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const mapped = lookupGscRedirect(url.pathname);
    if (mapped?.status === 410) {
      return goneResponse(request, env, url);
    }
    if (mapped?.status === 301 && mapped.target && !isHomePath(mapped.target)) {
      return Response.redirect(new URL(mapped.target, url).href, 301);
    }
    const legacy = contactLegacyRedirect(url.pathname);
    if (legacy && !isHomePath(legacy)) {
      return Response.redirect(new URL(legacy, url).href, 301);
    }
    if (url.pathname.startsWith('/api/')) {
      return handleCommentsRequest(request, env);
    }

    const dcPath = stripDreamweaverSuffix(url.pathname);
    if (dcPath && !isHomePath(dcPath)) {
      const probe = await env.ASSETS.fetch(new Request(new URL(dcPath, url.origin), request));
      if (probe.status === 200) {
        return Response.redirect(new URL(dcPath, url).href, 301);
      }
    }

    let asset = await env.ASSETS.fetch(request);
    if (asset.status === 404) {
      const fallbackPath = cfImageFallbackPath(url.pathname);
      if (fallbackPath) {
        asset = await env.ASSETS.fetch(new Request(new URL(`${fallbackPath}${url.search}`, url.origin), request));
      }
    }
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
    return applyRobots(url, asset);
  },
};

export { COMMENTS_API_PATTERN };
