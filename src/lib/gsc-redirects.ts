import map from '../data/gsc-redirects.json';

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
  const lower = pathname.toLowerCase();
  if (lower !== pathname) out.push(lower, lower.replace(/\/+$/, '') || '/', lower.endsWith('/') ? lower : `${lower}/`);
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

export function gscRedirectStats() {
  return {
    usedSeed: Boolean((map as { usedSeed?: boolean }).usedSeed),
    counts: (map as { counts?: Record<string, number> }).counts ?? {},
    fuzzyOrHubPercent: Number((map as { fuzzyOrHubPercent?: number }).fuzzyOrHubPercent ?? 0),
  };
}
