import MiniSearch from 'minisearch';
import type { SearchDocument, SearchFilter, SearchSort } from './search-index';

export type { SearchDocument, SearchFilter, SearchSort } from './search-index';

const IDENTITY_STRIP = /[\s.\-–—_/·•#,№]|N[Oº°]\.?/gi;

export function normalizeIdentity(value: string): string {
  return value.toUpperCase().replace(IDENTITY_STRIP, '');
}

export function stripHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

export function extractCert(text: string): string {
  const match = text.match(/(?:certificado|certificate)\s+([\d-]+)/i);
  return match?.[1] ?? '';
}

export function inferPieceFlags(input: {
  kind: 'banknote' | 'coin';
  id: string;
  pick?: string;
  serial?: string;
  grade?: string;
  title?: string;
  kicker?: string;
  signatures?: string;
}): SearchFilter[] {
  const blob = [input.id, input.pick, input.serial, input.grade, input.title, input.kicker, input.signatures]
    .filter(Boolean)
    .join(' ');
  const flags = new Set<SearchFilter>();
  if (input.kind === 'coin') flags.add('coin');
  if (input.kind === 'banknote') flags.add('single');
  if (/\b(PMG|PCGS|NGC)\b/i.test(input.grade ?? '') && !/sin encapsular|unslabbed/i.test(input.grade ?? '')) {
    flags.add('graded');
  }
  if (/specimen|especimen|espécimen/i.test(blob)) flags.add('specimen');
  if (/prueba|proof/i.test(blob)) flags.add('proof');
  if (/remainder/i.test(blob)) flags.add('remainder');
  return [...flags];
}

export function isIdentityQuery(query: string): boolean {
  const normalized = normalizeIdentity(query);
  return normalized.length >= 4 && /^[A-Z0-9]+$/.test(normalized) && /\d/.test(normalized);
}

export function matchesFilter(doc: SearchDocument, filter: SearchFilter): boolean {
  if (filter === 'all') return true;
  if (filter === 'guide') return doc.kind === 'blog';
  if (filter === 'news') return doc.kind === 'news';
  if (filter === 'glossary') return doc.kind === 'glossary';
  if (filter === 'series') return doc.kind === 'series';
  return doc.flags.includes(filter);
}

export function createSearchEngine(documents: SearchDocument[]): MiniSearch<SearchDocument> {
  const engine = new MiniSearch<SearchDocument>({
    fields: ['title', 'dek', 'pick', 'serial', 'serialNormalized', 'cert', 'searchText'],
    storeFields: ['id', 'kind', 'href', 'title', 'dek', 'image', 'imageAlt', 'pick', 'serial', 'flags'],
    searchOptions: {
      boost: {
        serialNormalized: 8,
        cert: 8,
        serial: 6,
        pick: 6,
        title: 4,
        dek: 2,
        searchText: 1,
      },
      prefix: true,
      combineWith: 'AND',
    },
  });
  engine.addAll(documents);
  return engine;
}

function sortDocuments(docs: SearchDocument[], sort: SearchSort, query: string): SearchDocument[] {
  const copy = [...docs];
  if (sort === 'title-asc') {
    copy.sort((a, b) => a.title.localeCompare(b.title, undefined, { sensitivity: 'base' }));
    return copy;
  }
  if (sort === 'title-desc') {
    copy.sort((a, b) => b.title.localeCompare(a.title, undefined, { sensitivity: 'base' }));
    return copy;
  }
  if (!query.trim()) {
    copy.sort((a, b) => a.title.localeCompare(b.title, undefined, { sensitivity: 'base' }));
  }
  return copy;
}

export function runSearch(
  documents: SearchDocument[],
  engine: MiniSearch<SearchDocument>,
  query: string,
  filter: SearchFilter,
  sort: SearchSort,
): SearchDocument[] {
  const filtered = documents.filter((doc) => matchesFilter(doc, filter));
  const trimmed = query.trim();
  if (!trimmed) return sortDocuments(filtered, sort === 'relevance' ? 'title-asc' : sort, trimmed);

  const identity = isIdentityQuery(trimmed);
  const hits = engine.search(trimmed, {
    filter: (result) => matchesFilter(result as SearchDocument, filter),
    fuzzy: identity ? 0 : 0.2,
    prefix: true,
    combineWith: identity ? 'OR' : 'AND',
    ...(identity
      ? {
          boost: {
            serialNormalized: 12,
            cert: 12,
            serial: 8,
            pick: 8,
            title: 2,
            dek: 1,
            searchText: 1,
          },
        }
      : {}),
  });

  const seen = new Set<string>();
  const ranked: SearchDocument[] = [];
  for (const hit of hits) {
    if (seen.has(hit.id)) continue;
    seen.add(hit.id);
    const doc = documents.find((item) => item.id === hit.id);
    if (doc) ranked.push(doc);
  }

  if (identity) {
    const needle = normalizeIdentity(trimmed);
    const extras = filtered.filter((doc) => {
      if (seen.has(doc.id)) return false;
      return (
        doc.serialNormalized === needle ||
        doc.cert === needle ||
        normalizeIdentity(doc.pick).includes(needle) ||
        doc.serialNormalized.includes(needle)
      );
    });
    ranked.push(...extras);
  }

  return sortDocuments(ranked, sort, trimmed);
}

export const SEARCH_FILTERS: SearchFilter[] = [
  'all',
  'graded',
  'specimen',
  'proof',
  'remainder',
  'group',
  'single',
  'coin',
  'guide',
  'news',
  'glossary',
];

export function parseFilter(value: string | null): SearchFilter {
  if (value && SEARCH_FILTERS.includes(value as SearchFilter)) return value as SearchFilter;
  return 'all';
}

export function parseSort(value: string | null): SearchSort {
  if (value === 'title-asc' || value === 'title-desc' || value === 'relevance') return value;
  return 'relevance';
}
