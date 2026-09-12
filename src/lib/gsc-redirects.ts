import map from '../data/gsc-redirects.json' with { type: 'json' };

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

export function lookupGscRedirect(pathname: string): GscRedirectHit | undefined {
  for (const key of variants(pathname)) {
    const hit = data.redirects[key];
    if (hit && (hit.status === 301 || hit.status === 410)) {
      return { target: hit.target, status: hit.status, rule: hit.rule };
    }
  }

  return undefined;
}

/** Legacy EN trees that kept Spanish section slugs → translated EN trees. Deep paths only. */
const PREFIX_REDIRECTS: ReadonlyArray<readonly [string, string]> = [
  ['/en/glosario/', '/en/glossary/'],
  ['/en/noticias/', '/en/news/'],
];

export function prefixRedirect(pathname: string): string | undefined {
  for (const [from, to] of PREFIX_REDIRECTS) {
    if (pathname.startsWith(from) && pathname.length > from.length) {
      return `${to}${pathname.slice(from.length)}`;
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
  const prefixed = prefixRedirect(pathname);
  if (prefixed) return { type: 'redirect', target: prefixed, rule: 'prefix' };
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
