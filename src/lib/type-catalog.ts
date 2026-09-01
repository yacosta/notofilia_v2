import MiniSearch from 'minisearch';

const IDENTITY_STRIP = /[\s.\-–—_/·•#,№]|N[Oº°]\.?/gi;

export function normalizeIdentity(value: string): string {
  return value.toUpperCase().replace(IDENTITY_STRIP, '');
}

export type TypeCatalogKind = 'banknotes' | 'coins';

export type TypeCatalogEra =
  | 'independencia'
  | 'banca-libre'
  | 'banco-nacional'
  | 'banco-central'
  | 'banco-de-la-republica'
  | 'familias-modernas'
  | 'errores'
  | 'santa-fe'
  | 'nueva-granada'
  | 'republica'
  | 'other';

export type TypeCatalogFlag = 'holding' | 'pending' | 'specimen' | 'remainder' | 'proof' | 'error';

export type TypeCatalogCountry = 'CO' | 'US' | 'PH' | 'CN' | 'MY' | 'GB' | 'CA' | 'PR';

export type TypeCatalogFilter = 'all' | TypeCatalogFlag | TypeCatalogEra | Lowercase<TypeCatalogCountry>;

export type TypeCatalogSort = 'collection' | 'pick' | 'title-asc' | 'year';

export type TypeCatalogDocument = {
  id: string;
  href: string;
  title: string;
  dek: string;
  pick: string;
  issuer: string;
  denomination: string;
  year: string;
  era: TypeCatalogEra;
  flags: TypeCatalogFlag[];
  country?: TypeCatalogCountry | '';
  serial?: string;
  image?: string;
  imageAlt?: string;
  searchText: string;
  inCollection: boolean;
};

export type HeritageTypeSeed = {
  id: string;
  pick: string;
  issuer: string;
  denomination: string;
  year: string;
  era: TypeCatalogEra;
  flags: TypeCatalogFlag[];
};

const BLEED_START =
  /^(Argentina|Brazil|Chile|China|Cuba|Guatemala|Peru|Mexico|Venezuela|Washington|World)\b/i;
const FANCY_PREFIX =
  /^(Fancy|Error|Solid|Radar|Repeater|Ladder|Binary|Low Serial|Misalignment|Replacement|Bookend)\b/i;
const GROUP_PICKS = /\bPick\s+[A-Za-z0-9]+\s*;\s*[A-Za-z0-9]/i;
const DENOM_RE =
  /(\d{1,3}(?:[.,]\d{3})*(?:\s+\d+\/\d+)?(?:\s*1\/[24])?)\s+(Pesos?(?:\s+Oro)?|Centavos?|Reales?)\b/i;
const YEAR_RE = /\b((?:1[789]|20)\d{2})(?:\s*[–-]\s*(?:\d{2}|\d{4}))?\b/;
const DECADE_RE = /\b((?:1[789]|20)\d{2}s)\b/i;
const PARTIAL_YEAR_RE = /\b((?:1[789]|20)\d{2}(?:-\d{2,4})|18xx)\b/i;

const ISSUER_DISPLAY: Record<string, { es: string; en: string }> = {
  BANCODELAREPUBLICA: { es: 'Banco de la República', en: 'Banco de la República' },
  BANCONACIONALDELAREPUBLICADECOLOMBIA: {
    es: 'Banco Nacional de la República de Colombia',
    en: 'Banco Nacional de la República de Colombia',
  },
  BANCONACIONALDELOSESTADOSUNIDOSDECOLOMBIA: {
    es: 'Banco Nacional de los Estados Unidos de Colombia',
    en: 'Banco Nacional de los Estados Unidos de Colombia',
  },
  BANCONACIONAL: { es: 'Banco Nacional', en: 'Banco Nacional' },
  BANCOCENTRALDECOLOMBIA: { es: 'Banco Central de Colombia', en: 'Banco Central de Colombia' },
  REPUBLICADECOLOMBIA: { es: 'República de Colombia', en: 'República de Colombia' },
  CONFEDERACIONGRANADINA: { es: 'Confederación Granadina', en: 'Confederación Granadina' },
  ESTADOSUNIDOSDECOLOMBIA: { es: 'Estados Unidos de Colombia', en: 'Estados Unidos de Colombia' },
};

export function normalizePickToken(value: string): string {
  return value
    .toUpperCase()
    .replace(/TBB\s*[A-Z0-9]+/g, '')
    .replace(/^P(?:ICK)?#?\s*/g, '')
    .replace(/[^A-Z0-9]/g, '');
}

export function pickTokens(value: string): string[] {
  return value
    .split(/[/·,;]+/)
    .map((part) => normalizePickToken(part))
    .filter((part) => part && part !== 'TBB' && part !== 'UNLISTED' && part !== 'UNL');
}

export function displayIssuer(issuer: string, locale: 'es' | 'en'): string {
  const key = normalizeIdentity(issuer).replace(/[^A-Z0-9]/g, '');
  return ISSUER_DISPLAY[key]?.[locale] ?? issuer.replace(/\s+/g, ' ').trim();
}

export function displayDenomination(denomination: string, locale: 'es' | 'en'): string {
  const raw = denomination.replace(/\s+/g, ' ').trim();
  if (!raw) return '';
  if (locale === 'en') {
    return raw
      .replace(/\bPesos Oro\b/i, 'gold pesos')
      .replace(/\bPeso Oro\b/i, 'gold peso')
      .replace(/\bPesos\b/i, 'pesos')
      .replace(/\bPeso\b/i, 'peso')
      .replace(/\bCentavos\b/i, 'centavos')
      .replace(/\bCentavo\b/i, 'centavo')
      .replace(/\bReales\b/i, 'reales')
      .replace(/\bReal\b/i, 'real');
  }
  return raw
    .replace(/\bPesos Oro\b/i, 'pesos oro')
    .replace(/\bPeso Oro\b/i, 'peso oro')
    .replace(/\bPesos\b/i, 'pesos')
    .replace(/\bPeso\b/i, 'peso')
    .replace(/\bCentavos\b/i, 'centavos')
    .replace(/\bCentavo\b/i, 'centavo')
    .replace(/\bReales\b/i, 'reales')
    .replace(/\bReal\b/i, 'real');
}

export function isColombianPaperTitle(title: string): boolean {
  const trimmed = title.trim();
  if (!trimmed) return false;
  if (/^Colombia\b/i.test(trimmed)) return true;
  if (FANCY_PREFIX.test(trimmed) && /\bColombia\b/i.test(trimmed)) return true;
  return false;
}

export function isHeritageBleedTitle(title: string): boolean {
  const trimmed = title.trim();
  if (BLEED_START.test(trimmed)) return true;
  if (GROUP_PICKS.test(trimmed)) return true;
  if (/\bArchival Lot\b/i.test(trimmed)) return true;
  if (/\bGroup (?:Lot|of)\b/i.test(trimmed)) return true;
  if (/\bProclamation\b/i.test(trimmed) && !/^Colombia\b/i.test(trimmed)) return true;
  if (/\b(?:and|,)\s+(?:Peru|Argentina|Guatemala|Cuba|Honduras|Nicaragua|Paraguay|Uruguay|Costa Rica)\b/i.test(trimmed)) {
    return true;
  }
  return false;
}

export function classifyNoteEra(input: {
  issuer: string;
  year: string;
  pick: string;
  flags: TypeCatalogFlag[];
}): TypeCatalogEra {
  if (input.flags.includes('error')) return 'errores';
  const issuer = input.issuer.toLowerCase();
  const year = Number.parseInt(input.year, 10);
  const pick = normalizePickToken(input.pick);
  if (Number.isFinite(year) && year > 0 && year <= 1819) return 'independencia';
  if (/banco nacional/.test(issuer)) return 'banco-nacional';
  if (/banco central de colombia/.test(issuer)) return 'banco-central';
  if (pick.startsWith('S')) return 'banca-libre';
  if (/banco de la republica|banco de la república/.test(issuer)) {
    if (Number.isFinite(year) && year >= 1993) return 'familias-modernas';
    return 'banco-de-la-republica';
  }
  if (Number.isFinite(year) && year >= 1870 && year <= 1887) return 'banca-libre';
  if (Number.isFinite(year) && year >= 1880 && year <= 1903) return 'banco-nacional';
  if (Number.isFinite(year) && year >= 1993) return 'familias-modernas';
  return 'other';
}

function extractFlags(title: string): TypeCatalogFlag[] {
  const flags: TypeCatalogFlag[] = [];
  if (/\bspecimen\b|esp[eé]cimen/i.test(title)) flags.push('specimen');
  if (/\bremainder\b/i.test(title)) flags.push('remainder');
  if (/\bproofs?\b|pruebas?\b/i.test(title)) flags.push('proof');
  if (/\berror\b|maculatura|misalignment/i.test(title)) flags.push('error');
  return flags;
}

function normalizeColombiaLead(title: string): string {
  return title
    .replace(FANCY_PREFIX, '')
    .replace(/^[^C]*\bColombia\s+/i, '')
    .replace(/^Colombia\s+/i, '')
    .trim();
}

export function parseHeritageTitle(title: string): Omit<HeritageTypeSeed, 'id'> | null {
  if (!isColombianPaperTitle(title) || isHeritageBleedTitle(title)) return null;

  const flags = extractFlags(title);
  const lead = normalizeColombiaLead(title)
    .replace(/\s+PMG\b.*$/i, '')
    .replace(/\s+PCGS\b.*$/i, '')
    .replace(/\s+\(Total:.*$/i, '')
    .trim();

  const pickMatch = lead.match(/\bPick\s+([A-Za-z0-9]+|Unlisted|UNL)\b/i);
  const pickRaw = pickMatch?.[1] ?? '';
  const pick = /^(unlisted|unl)$/i.test(pickRaw) ? '' : pickRaw;
  const beforePick = (pickMatch ? lead.slice(0, pickMatch.index) : lead).trim();

  const denomMatch = beforePick.match(DENOM_RE);
  const denomination = denomMatch ? denomMatch[0].replace(/\s+/g, ' ').trim() : '';
  const issuer = (denomMatch ? beforePick.slice(0, denomMatch.index) : beforePick)
    .replace(/[,:;]+$/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  if (!issuer) return null;

  const yearMatch = beforePick.match(YEAR_RE) || beforePick.match(PARTIAL_YEAR_RE) || beforePick.match(DECADE_RE);
  const year = yearMatch?.[1] ?? '';
  const era = classifyNoteEra({ issuer, year, pick, flags });

  return { pick, issuer, denomination, year, era, flags };
}

export function parseHeritageLots(text: string): HeritageTypeSeed[] {
  const byId = new Map<string, HeritageTypeSeed>();

  for (const line of text.split(/\r?\n/).slice(1)) {
    if (!line.trim()) continue;
    const [pickField, , , , title] = line.split('\t');
    if (!title) continue;
    const parsed = parseHeritageTitle(title);
    if (!parsed) continue;
    const pickSource = !pickField || pickField === '-' ? parsed.pick : pickField;
    const pick = normalizePickToken(parsed.pick || pickSource || '');
    if (!pick && !parsed.denomination) continue;
    const id = pick || `unlisted-${normalizeIdentity(`${parsed.issuer}-${parsed.denomination}-${parsed.year}`)}`;
    if (!id) continue;
    const existing = byId.get(id);
    if (existing) {
      existing.flags = [...new Set([...existing.flags, ...parsed.flags])];
      if (!existing.year && parsed.year) existing.year = parsed.year;
      if (!existing.denomination && parsed.denomination) existing.denomination = parsed.denomination;
      continue;
    }
    byId.set(id, { id, ...parsed, pick: parsed.pick || (pickField !== '-' ? pickField : '') || '' });
  }

  return [...byId.values()].sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
}

const COUNTRY_FILTERS = new Set<TypeCatalogFilter>(['co', 'us', 'ph', 'cn', 'gb', 'my', 'ca', 'pr']);

export function matchesTypeFilter(doc: TypeCatalogDocument, filter: TypeCatalogFilter): boolean {
  if (filter === 'all') return true;
  if (filter === 'holding') return doc.inCollection;
  if (filter === 'pending') return !doc.image;
  if (COUNTRY_FILTERS.has(filter)) {
    return (doc.country || '').toLowerCase() === filter;
  }
  if (
    filter === 'specimen' ||
    filter === 'remainder' ||
    filter === 'proof' ||
    filter === 'error'
  ) {
    return doc.flags.includes(filter);
  }
  return doc.era === filter;
}

export function parseTypeFilter(value: string | null, allowed: readonly TypeCatalogFilter[]): TypeCatalogFilter {
  if (value && allowed.includes(value as TypeCatalogFilter)) return value as TypeCatalogFilter;
  return 'all';
}

export function parseTypeSort(value: string | null): TypeCatalogSort {
  if (value === 'collection' || value === 'pick' || value === 'title-asc' || value === 'year') return value;
  return 'collection';
}

function yearValue(year: string): number {
  const match = year.match(/(?:1[789]|20)\d{2}/);
  return match ? Number(match[0]) : 0;
}

function sortDocuments(docs: TypeCatalogDocument[], sort: TypeCatalogSort): TypeCatalogDocument[] {
  const copy = [...docs];
  copy.sort((a, b) => {
    if (sort === 'collection') {
      if (a.inCollection !== b.inCollection) return a.inCollection ? -1 : 1;
      if (Boolean(a.image) !== Boolean(b.image)) return a.image ? -1 : 1;
      const country = (a.country || '').localeCompare(b.country || '');
      if (country) return country;
    }
    if (sort === 'title-asc') return a.title.localeCompare(b.title, undefined, { sensitivity: 'base' });
    if (sort === 'year') return yearValue(a.year) - yearValue(b.year) || a.title.localeCompare(b.title);
    return a.pick.localeCompare(b.pick, undefined, { numeric: true, sensitivity: 'base' }) || a.title.localeCompare(b.title);
  });
  return copy;
}

export function createTypeCatalogEngine(documents: TypeCatalogDocument[]): MiniSearch<TypeCatalogDocument> {
  const engine = new MiniSearch<TypeCatalogDocument>({
    fields: ['title', 'pick', 'issuer', 'denomination', 'year', 'serial', 'searchText'],
    storeFields: [
      'id',
      'href',
      'title',
      'dek',
      'pick',
      'issuer',
      'denomination',
      'year',
      'era',
      'flags',
      'country',
      'serial',
      'image',
      'imageAlt',
      'inCollection',
    ],
    searchOptions: {
      boost: { pick: 8, title: 4, serial: 6, issuer: 3, denomination: 2, year: 2, searchText: 1 },
      prefix: true,
      combineWith: 'AND',
    },
  });
  engine.addAll(documents);
  return engine;
}

export function runTypeCatalogSearch(
  documents: TypeCatalogDocument[],
  engine: MiniSearch<TypeCatalogDocument>,
  query: string,
  filter: TypeCatalogFilter,
  sort: TypeCatalogSort,
): TypeCatalogDocument[] {
  const filtered = documents.filter((doc) => matchesTypeFilter(doc, filter));
  const trimmed = query.trim();
  if (!trimmed) return sortDocuments(filtered, sort);

  const identity = normalizePickToken(trimmed);
  const hits = engine.search(trimmed, {
    filter: (result) => matchesTypeFilter(result as TypeCatalogDocument, filter),
    fuzzy: identity.length >= 3 && /^[A-Z0-9]+$/.test(identity) ? 0 : 0.2,
    prefix: true,
    combineWith: 'AND',
  });

  const seen = new Set<string>();
  const ranked: TypeCatalogDocument[] = [];
  for (const hit of hits) {
    if (seen.has(hit.id)) continue;
    seen.add(hit.id);
    const doc = documents.find((item) => item.id === hit.id);
    if (doc && matchesTypeFilter(doc, filter)) ranked.push(doc);
  }

  if (identity.length >= 2) {
    for (const doc of filtered) {
      if (seen.has(doc.id)) continue;
      if (normalizePickToken(doc.pick).includes(identity) || doc.id.includes(identity)) {
        ranked.push(doc);
        seen.add(doc.id);
      }
    }
  }

  return sortDocuments(ranked, sort === 'collection' ? 'pick' : sort);
}

export function typeCatalogStats(documents: TypeCatalogDocument[]): {
  types: number;
  holdings: number;
  images: number;
  years: string;
} {
  const years = documents
    .map((doc) => yearValue(doc.year))
    .filter((year) => year > 0)
    .sort((a, b) => a - b);
  return {
    types: documents.length,
    holdings: documents.filter((doc) => doc.inCollection).length,
    images: documents.filter((doc) => Boolean(doc.image)).length,
    years: years.length ? `${years[0]}–${years[years.length - 1]}` : '—',
  };
}

export function hasPriceField(value: unknown): boolean {
  if (!value || typeof value !== 'object') return false;
  return Object.keys(value as Record<string, unknown>).some((key) => /price|precio|realized|hammer/i.test(key));
}
