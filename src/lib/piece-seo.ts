import type { Locale } from './locale-paths.ts';

export const META_DESCRIPTION_MAX = 155;

export type PieceKind = 'note' | 'coin';

export type PieceTitleParts = {
  kind: PieceKind;
  denomination: string;
  year: string;
  issuer: string;
  country: string;
  catalogLabel: string;
};

/** Truncate a meta description on a word boundary at `max` characters. */
export function limitMetaDescription(text: string, max = META_DESCRIPTION_MAX): string {
  const compact = text.replace(/\s+/g, ' ').trim();
  if (compact.length <= max) return compact;
  const sliced = compact.slice(0, max);
  const lastSpace = sliced.lastIndexOf(' ');
  const clipped = (lastSpace >= 80 ? sliced.slice(0, lastSpace) : sliced).replace(/[.,;:·\s]+$/u, '');
  return clipped;
}

const NOTE_WORD = { es: 'Billete de', en: 'note' } as const;
const COIN_WORD = { es: 'Moneda de', en: 'coin' } as const;

function isConfederate(parts: PieceTitleParts): boolean {
  return /confederat/i.test(`${parts.issuer} ${parts.country} ${parts.catalogLabel}`);
}

/** Visible H1 search phrase. Catalogue label stays the subtitle. */
export function pieceH1(parts: PieceTitleParts, locale: Locale): string {
  if (locale === 'es') {
    const kind = parts.kind === 'coin' ? COIN_WORD.es : NOTE_WORD.es;
    return `${kind} ${parts.denomination}, ${parts.year}`;
  }
  if (parts.kind === 'coin') {
    return `${parts.denomination} coin, ${parts.year}`;
  }
  if (isConfederate(parts)) {
    return `Confederate ${parts.denomination} note, ${parts.year}`;
  }
  return `${parts.denomination} note, ${parts.year}`;
}

/** Document title. Pick/KM stay out of the title. */
export function pieceDocumentTitle(parts: PieceTitleParts, locale: Locale): string {
  const h1 = pieceH1(parts, locale);
  if (locale === 'es') {
    return `${h1.replace(/, /, ' ')} · ${parts.issuer} (${parts.country}) | Notofilia`;
  }
  if (isConfederate(parts)) {
    return `${h1} · ${parts.issuer} (${parts.country}) | Notofilia`;
  }
  return `${h1} · ${parts.issuer} (${parts.country}) | Notofilia`;
}

function lastYearToken(value: string): string {
  const years = value.match(/\b(1[5-9]\d{2}|20\d{2})\b/g);
  return years?.[years.length - 1] ?? '';
}

/**
 * Parse catalogue titles of the form `{denomination} · {issuer} · {year}`.
 * Falls back to the whole title as the denomination when the pattern is missing.
 */
export function parsePieceTitleParts(input: {
  kind: PieceKind;
  title: string;
  kicker?: string;
  country?: string;
  locale: Locale;
}): PieceTitleParts {
  const chunks = input.title.split(/\s·\s/).map((part) => part.trim()).filter(Boolean);
  let denomination = chunks[0] ?? input.title;
  let issuer = chunks.length >= 2 ? chunks[1] : '';
  let year = chunks.length >= 3 ? lastYearToken(chunks[chunks.length - 1]) : lastYearToken(input.title);
  if (!year) year = lastYearToken(input.kicker ?? '') || '';
  if (!issuer) {
    const kickerBits = (input.kicker ?? '').split(/\s·\s/).map((part) => part.trim()).filter(Boolean);
    issuer = kickerBits[1] ?? kickerBits[0] ?? (input.locale === 'en' ? 'Issuer' : 'Emisor');
  }
  const country =
    input.country ||
    (input.kicker ?? '').split(/\s·\s/)[0]?.trim() ||
    (input.locale === 'en' ? 'Unknown' : 'País');
  return {
    kind: input.kind,
    denomination,
    year: year || (input.locale === 'en' ? 'n.d.' : 's.f.'),
    issuer,
    country,
    catalogLabel: input.title,
  };
}

export function piecePageMeta(input: {
  kind: PieceKind;
  title: string;
  kicker?: string;
  lead: string;
  locale: Locale;
  country?: string;
}) {
  const parts = parsePieceTitleParts(input);
  return {
    documentTitle: pieceDocumentTitle(parts, input.locale),
    h1: pieceH1(parts, input.locale),
    subtitle: parts.catalogLabel,
    description: limitMetaDescription(input.lead),
    parts,
  };
}
