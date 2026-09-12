import map from '../data/gsc-redirects.json' with { type: 'json' };
import { glossaryRedirects } from '../data/glossary.ts';
import { newsEnglishRedirects } from './content-slugs.ts';

export type GscRedirectHit = {
  target: string;
  status: 301 | 410;
  rule: string;
};

type GscFile = {
  redirects: Record<string, { target: string; status: number; rule: string }>;
};

const data = map as GscFile;

function variants(pathname: string): string[] {
  const out = [pathname];
  const trimmed = pathname.replace(/\/+$/, '') || '/';
  if (trimmed !== pathname) out.push(trimmed);
  if (!pathname.endsWith('/') && pathname !== '/') out.push(`${pathname}/`);
  return [...new Set(out)];
}

function withSlash(path: string): string {
  if (path.includes('?') || path.endsWith('/')) return path;
  return `${path}/`;
}

/** Strip Dreamweaver `.dc` / `.dc.html` suffixes. Empty if the result would be home. */
export function stripDreamweaverSuffix(pathname: string): string | undefined {
  const m = pathname.match(/^(.*)\/?\.dc(?:\.html)?$/i);
  if (!m) return undefined;
  let stripped = m[1] || '/';
  if (!stripped.startsWith('/')) stripped = `/${stripped}`;
  if (!stripped.endsWith('/') && stripped !== '/') stripped = `${stripped}/`;
  if (stripped === '/' || stripped === '/en/') return undefined;
  return stripped;
}

/** Spanish path segments leftover under `/en/` → English counterparts. */
export function rewriteEnSpanishPrefix(pathname: string): string | undefined {
  for (const [from, to] of [
    ['/en/glosario/', '/en/glossary/'],
    ['/en/noticias/', '/en/news/'],
  ] as const) {
    if (pathname === from.slice(0, -1)) return to;
    if (pathname.startsWith(from) || pathname === from) {
      const target = `${to}${pathname.slice(from.length)}`;
      return target.endsWith('/') || target.includes('?') ? target : `${target}/`;
    }
  }
  return undefined;
}

function liveContentRedirect(pathname: string): GscRedirectHit | undefined {
  const glossary = glossaryRedirects();
  const news = newsEnglishRedirects();
  for (const key of variants(pathname)) {
    const target = glossary[key] ?? news[key];
    if (target) return { target, status: 301, rule: 'content-slug' };
  }
  const rewritten = rewriteEnSpanishPrefix(pathname);
  if (!rewritten) return undefined;
  for (const key of variants(rewritten)) {
    const composed = glossary[key] ?? news[key];
    if (composed) return { target: composed, status: 301, rule: 'content-slug' };
  }
  return { target: withSlash(rewritten), status: 301, rule: 'prefix-locale' };
}

export function lookupGscRedirect(pathname: string): GscRedirectHit | undefined {
  const live = liveContentRedirect(pathname);
  if (live) return live;

  const here = withSlash(pathname);
  for (const key of variants(pathname)) {
    const hit = data.redirects[key];
    if (hit?.status === 410) {
      return { target: hit.target, status: hit.status, rule: hit.rule };
    }
    if (hit?.status === 301 && hit.target) {
      const bounce = liveContentRedirect(withSlash(hit.target));
      if (bounce && variants(bounce.target).includes(here)) continue;
      return { target: hit.target, status: hit.status, rule: hit.rule };
    }
  }

  return undefined;
}

export function isHomePathname(pathname: string): boolean {
  return pathname === '/' || pathname === '/en' || pathname === '/en/';
}

export function planSeoResponse(
  pathname: string,
):
  | { type: 'redirect'; target: string; rule: string }
  | { type: 'gone'; rule: string }
  | { type: 'probe-dc'; path: string }
  | { type: 'pass' } {
  const mapped = lookupGscRedirect(pathname);
  if (mapped?.status === 410) return { type: 'gone', rule: mapped.rule };
  if (mapped?.status === 301 && mapped.target && !isHomePathname(mapped.target)) {
    return { type: 'redirect', target: mapped.target, rule: mapped.rule };
  }
  const dcPath = stripDreamweaverSuffix(pathname);
  if (dcPath && !isHomePathname(dcPath)) return { type: 'probe-dc', path: dcPath };
  return { type: 'pass' };
}

export function gscRedirectStats() {
  return {
    usedSeed: Boolean((map as { usedSeed?: boolean }).usedSeed),
    counts: (map as { counts?: Record<string, number> }).counts ?? {},
    fuzzyOrHubPercent: Number((map as { fuzzyOrHubPercent?: number }).fuzzyOrHubPercent ?? 0),
  };
}
