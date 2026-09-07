/** Normalize GSC 404 URLs and match them to v2 routes. */

export const HOME_PATHS = new Set(['/', '/en', '/en/']);

export function decodePath(pathname) {
  try {
    return decodeURIComponent(pathname);
  } catch {
    return pathname;
  }
}

/** Case-sensitive path identity (slash-normalized). Used so /canada → /Canada/ is not a loop. */
export function identityPath(pathname) {
  let p = decodePath(String(pathname ?? '').split('?')[0].split('#')[0]);
  if (!p.startsWith('/')) p = `/${p}`;
  if (p !== '/' && !p.endsWith('/')) p = `${p}/`;
  return p;
}

/** Matching key: lowercase, no trailing slash, no .dc.html / .dc. */
export function normalizePath(pathname) {
  let p = decodePath(pathname).split('?')[0].split('#')[0];
  p = p.toLowerCase();
  p = p.replace(/\.dc\.html$/i, '').replace(/\.html$/i, '').replace(/\.dc$/i, '');
  p = p.replace(/\/+$/, '') || '/';
  return p;
}

export function isHomePath(pathname) {
  return HOME_PATHS.has(pathname) || normalizePath(pathname) === '/' || normalizePath(pathname) === '/en';
}

export function languageOf(path) {
  const p = path.startsWith('/') ? path : `/${path}`;
  return p === '/en' || p.startsWith('/en/') ? 'en' : 'es';
}

export function lastSlug(path) {
  const n = normalizePath(path);
  if (n === '/') return '';
  const parts = n.split('/').filter(Boolean);
  return parts[parts.length - 1] ?? '';
}

export function slugTokens(slug) {
  return slug
    .toLowerCase()
    .split(/[-_]+/)
    .map((t) => t.trim())
    .filter((t) => t && t !== 'html' && t !== 'index' && t !== 'page');
}

export function tokenOverlap(a, b) {
  const A = new Set(slugTokens(a));
  const B = new Set(slugTokens(b));
  if (A.size === 0 || B.size === 0) return 0;
  let inter = 0;
  for (const t of A) if (B.has(t)) inter += 1;
  const union = A.size + B.size - inter;
  return union === 0 ? 0 : inter / union;
}

export function parseGscUrl(raw) {
  const trimmed = String(raw ?? '').trim();
  if (!trimmed || trimmed.startsWith('#')) return null;
  let href = trimmed;
  if (!/^https?:\/\//i.test(href)) {
    href = href.startsWith('/') ? `https://notofilia.com${href}` : `https://notofilia.com/${href}`;
  }
  let url;
  try {
    url = new URL(href);
  } catch {
    return null;
  }
  const host = url.hostname.replace(/^www\./i, '').toLowerCase();
  if (host && host !== 'notofilia.com' && host !== 'dev.notofilia.com' && !host.endsWith('.notofilia.com')) {
    // Still map first-party www/apex; skip unrelated hosts.
    if (!host.endsWith('notofilia.com')) return null;
  }
  return {
    original: trimmed,
    originalPath: url.pathname || '/',
    host: url.hostname,
  };
}

export function csvEscape(value) {
  const s = String(value ?? '');
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

export function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i += 1) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          cell += '"';
          i += 1;
        } else {
          inQuotes = false;
        }
      } else {
        cell += c;
      }
      continue;
    }
    if (c === '"') {
      inQuotes = true;
      continue;
    }
    if (c === ',') {
      row.push(cell);
      cell = '';
      continue;
    }
    if (c === '\n') {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = '';
      continue;
    }
    if (c === '\r') continue;
    cell += c;
  }
  if (cell.length || row.length) {
    row.push(cell);
    rows.push(row);
  }
  return rows.filter((r) => r.some((v) => String(v).trim()));
}

export function urlColumnIndex(header) {
  const names = header.map((h) => h.trim().toLowerCase());
  const keys = ['url', 'page', 'address', 'page url', 'top url'];
  for (const key of keys) {
    const i = names.indexOf(key);
    if (i !== -1) return i;
  }
  return 0;
}

export function classifyType(path) {
  const n = normalizePath(path);
  const rest = n === '/en' ? '/' : n.replace(/^\/en(?=\/|$)/, '') || '/';
  if (rest === '/') return 'other';
  if (/^\/glosario(\/|$)/.test(rest) || /^\/glossary(\/|$)/.test(rest)) return 'glossary';
  if (/^\/noticias(\/|$)/.test(rest) || /^\/news(\/|$)/.test(rest)) return 'news';
  if (/^\/blog(\/|$)/.test(rest)) return 'news';
  if (/^\/coleccion(\/|$)/.test(rest) || /^\/collection(\/|$)/.test(rest)) {
    const parts = rest.split('/').filter(Boolean);
    if (parts.length <= 2) return 'hub';
    const last = parts[parts.length - 1];
    if (last === 'catalogo' || last === 'catalog') return 'hub';
    const chapter = new Set([
      'rency',
      'miscelaneos',
      'miscellaneous',
      'mpc-vietnam',
      'europa',
      'europe',
      'asia',
      'america-del-norte',
      'north-america',
      'canada',
    ]);
    if (parts.length === 3 && chapter.has(parts[2])) return 'hub';
    return 'catalogue';
  }
  return 'other';
}

function withSlash(path) {
  if (path === '/') return '/';
  return path.endsWith('/') ? path : `${path}/`;
}

function indexByLastSlug(urls, predicate) {
  const map = new Map();
  for (const row of urls) {
    if (!predicate(row)) continue;
    const slug = row.lastSlug || lastSlug(row.path);
    if (!slug) continue;
    if (!map.has(slug)) map.set(slug, []);
    map.get(slug).push(row);
  }
  return map;
}

function pickSameLang(candidates, lang) {
  const same = candidates.filter((c) => c.lang === lang);
  return same.length === 1 ? same[0] : null;
}

function pickOtherLang(candidates, lang) {
  const other = candidates.filter((c) => c.lang !== lang);
  return other.length === 1 ? other[0] : null;
}

function categoryKeyFromPath(path) {
  const n = normalizePath(path);
  const rest = n === '/en' ? '/' : n.replace(/^\/en(?=\/|$)/, '') || '/';
  const m = rest.match(/^\/(?:coleccion|collection)\/([^/]+)/);
  return m ? m[1] : null;
}

function lookupCategoryHub(categoryMap, lang, key) {
  if (!key) return null;
  const table = categoryMap[lang] ?? {};
  const both = { ...(categoryMap.es ?? {}), ...(categoryMap.en ?? {}), ...table };
  const hit = table[key] ?? both[key];
  return hit ? withSlash(hit) : null;
}

function contentTypes(row) {
  return row.type === 'catalogue' || row.type === 'glossary' || row.type === 'news';
}

export function isStub(row) {
  return Boolean(row && (row.redirectTo || /^Redirecting to:/i.test(row.title ?? '')));
}

/**
 * Follow Astro redirect stubs (meta-refresh pages in dist/) so a rule never
 * targets a stub and creates a 301 → stub → 301 chain.
 */
export function resolveStub(path, live, depth = 0) {
  const row = live.get(normalizePath(path));
  if (!row || !isStub(row) || !row.redirectTo || depth > 5) return path;
  if (normalizePath(row.redirectTo) === normalizePath(path)) return path;
  return resolveStub(row.redirectTo, live, depth + 1);
}

/**
 * Pre-v1 Dreamweaver-era root files (`/billete-colombia-x.dc.html`, `/catalogo-ecuador.dc`).
 * Only the prefix tells us the section; the note itself is usually gone, so
 * these land on the section hub (low confidence) instead of 410.
 */
const LEGACY_DC_HUBS = [
  [/^catalogo-colombia$/, '/coleccion/colombia/'],
  [/^catalogo-ecuador$/, '/coleccion/ecuador/'],
  [/^catalogo-puerto-rico$/, '/coleccion/puerto-rico/'],
  [/^catalogo-reserva-federal$/, '/coleccion/estados-unidos/'],
  [/^catalogo-emisiones-promocionales$/, '/coleccion/estados-unidos/'],
  [/^catalogo-emisiones-extranjero$/, '/coleccion/colombia/'],
  [/^catalogo-moneda-colonial-espanola$/, '/coleccion/colombia-numismatica/'],
  [/^catalogo-moneda-colonial$/, '/coleccion/estados-unidos/'],
  [/^catalogo$/, '/coleccion/'],
  [/^glosario(-numismatico)?$/, '/glosario/'],
  [/^billete-colombia-/, '/coleccion/colombia/'],
  [/^perfil-/, '/coleccion/colombia/'],
  [/^moneda-colombia-/, '/coleccion/colombia-numismatica/'],
  [/^billete-ecuador-/, '/coleccion/ecuador/'],
  [/^billete-guatemala-/, '/coleccion/guatemala/'],
  [/^billete-puerto-rico-/, '/coleccion/puerto-rico/'],
  [/^billete-/, '/coleccion/estados-unidos/'],
];

function legacyDcHub(originalPath) {
  const raw = decodePath(String(originalPath ?? '')).split('?')[0].split('#')[0].toLowerCase();
  if (!/\.dc(\.html)?$/.test(raw)) return null;
  const parts = raw.split('/').filter(Boolean);
  if (parts.length !== 1) return null;
  const slug = parts[0].replace(/\.dc(\.html)?$/, '');
  for (const [re, hub] of LEGACY_DC_HUBS) {
    if (re.test(slug)) return hub;
  }
  return null;
}

/**
 * @returns {{ status: 301 | 410 | 200, target: string, rule: string, confidence: string }}
 */
export function matchUrl(originalPath, urls, categoryMap) {
  const lang = languageOf(originalPath);
  const norm = normalizePath(originalPath);
  const live = new Map(urls.map((u) => [normalizePath(u.path), u]));

  const isLivePage = (path) => {
    const row = live.get(normalizePath(path));
    return Boolean(row) && !isStub(row);
  };

  if (live.has(norm)) {
    const hit = live.get(norm);
    if (!isStub(hit)) {
      return { status: 200, target: withSlash(hit.path), rule: 'exists', confidence: 'high' };
    }
    // A redirect stub: 301 straight to its destination when that page is real;
    // a stub pointing at a missing page (e.g. an unpublished continent hub) falls
    // through to normal matching instead of being reported as "exists".
    const resolved = resolveStub(hit.path, live);
    if (normalizePath(resolved) !== norm && !isHomePath(resolved) && isLivePage(resolved)) {
      return { status: 301, target: withSlash(resolved), rule: 'existing', confidence: 'high' };
    }
  }

  // Never 301 onto a redirect stub — land on the page it points at.
  const finish = (result) => {
    if (result.status !== 301) return result;
    const resolved = resolveStub(result.target, live);
    if (isHomePath(resolved) || !isLivePage(resolved)) return result;
    return { ...result, target: withSlash(resolved) };
  };

  const slug = lastSlug(originalPath);
  const content = urls.filter((row) => contentTypes(row) && !isStub(row));
  const bySlug = indexByLastSlug(content, () => true);
  const slugHits = bySlug.get(slug) ?? [];

  return finish(matchRest());

  function matchRest() {
    if (slugHits.length) {
      const same = pickSameLang(slugHits, lang);
      if (same && !isHomePath(same.path)) {
        return { status: 301, target: withSlash(same.path), rule: 'last-slug', confidence: 'high' };
      }
      if (slugHits.length === 1 && slugHits[0].lang !== lang && !isHomePath(slugHits[0].path)) {
        const match = slugHits[0];
        const alt = match.alternate && languageOf(match.alternate) === lang ? match.alternate : match.path;
        return {
          status: 301,
          target: withSlash(alt),
          rule: 'last-slug-hreflang',
          confidence: 'high',
        };
      }
      const other = pickOtherLang(slugHits, lang);
      if (!same && other && slugHits.filter((c) => c.lang !== lang).length === 1 && !isHomePath(other.path)) {
        const alt = other.alternate && languageOf(other.alternate) === lang ? other.alternate : other.path;
        return { status: 301, target: withSlash(alt), rule: 'last-slug-hreflang', confidence: 'high' };
      }
    }

    const tokens = slugTokens(slug);
    if (tokens.length >= 2) {
      const fuzzyHits = [];
      for (const row of content) {
        const overlap = tokenOverlap(slug, row.lastSlug || lastSlug(row.path));
        if (overlap >= 0.8) fuzzyHits.push(row);
      }
      if (fuzzyHits.length >= 1) {
        const sameLang = fuzzyHits.filter((row) => row.lang === lang);
        const chosen = sameLang.length === 1 ? sameLang[0] : fuzzyHits.length === 1 ? fuzzyHits[0] : null;
        if (chosen && !isHomePath(chosen.path)) {
          const target =
            chosen.lang === lang
              ? chosen.path
              : chosen.alternate && languageOf(chosen.alternate) === lang
                ? chosen.alternate
                : chosen.path;
          if (!isHomePath(target)) {
            return { status: 301, target: withSlash(target), rule: 'fuzzy', confidence: 'medium' };
          }
        }
      }
    }

    const catKey = categoryKeyFromPath(originalPath);
    const parts = norm.split('/').filter(Boolean);
    const isHubShape =
      catKey &&
      (norm === `/coleccion/${catKey}` ||
        norm === `/collection/${catKey}` ||
        norm === `/en/collection/${catKey}` ||
        norm === `/en/coleccion/${catKey}`);

    if (isHubShape) {
      const hub = lookupCategoryHub(categoryMap, lang, catKey);
      if (hub && !isHomePath(hub)) {
        if (normalizePath(hub) === norm || live.has(normalizePath(hub))) {
          if (live.has(norm)) {
            return { status: 200, target: withSlash(live.get(norm).path), rule: 'exists', confidence: 'high' };
          }
          return { status: 301, target: withSlash(hub), rule: 'category-hub', confidence: 'high' };
        }
        return { status: 301, target: withSlash(hub), rule: 'category-hub', confidence: 'high' };
      }
    }

    if (catKey && parts.length >= 3) {
      const hub = lookupCategoryHub(categoryMap, lang, catKey);
      if (hub && !isHomePath(hub)) {
        return { status: 301, target: withSlash(hub), rule: 'hub-fallback', confidence: 'low' };
      }
    }

    const dcHub = legacyDcHub(originalPath);
    if (dcHub && live.has(normalizePath(dcHub))) {
      return { status: 301, target: withSlash(dcHub), rule: 'legacy-dc', confidence: 'low' };
    }

    if (classifyType(originalPath) === 'glossary') {
      const hub = lang === 'en' ? '/en/glossary/' : '/glosario/';
      if (live.has(normalizePath(hub)) && normalizePath(hub) !== norm) {
        return { status: 301, target: hub, rule: 'glossary-hub', confidence: 'low' };
      }
    }

    return { status: 410, target: '', rule: 'gone', confidence: 'high' };
  }
}
