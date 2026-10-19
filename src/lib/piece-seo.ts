import { compressDocumentTitle } from './document-title.ts';
import type { Locale } from './locale-paths.ts';

export const META_DESCRIPTION_MAX = 155;

export type PieceKind = 'note' | 'coin';

export type PieceTitleParts = {
  kind: PieceKind;
  denomination: string;
  year: string;
  issuer: string;
  country: string;
  /** City or district name when the catalogue title ends with a place, not a year. */
  place: string;
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

/** Document title. A catalogue identifier already in the source title is kept. */
export function pieceDocumentTitle(
  parts: PieceTitleParts,
  locale: Locale,
  district?: string,
): string {
  const h1 = pieceH1(parts, locale);
  const head = locale === 'es' ? h1.replace(/, /, ' ') : h1;
  const place = parts.place
    ? `${parts.place}${district ? ` (${district})` : ''}`
    : '';
  const withCountry = `${head} · ${parts.issuer} (${parts.country})`;
  const withPlace = place ? `${head} · ${parts.issuer} · ${place}` : withCountry;
  const identifier = catalogIdentifier(parts.catalogLabel);
  const core = identifier && !withPlace.includes(identifier) ? `${withPlace} · ${identifier}` : withPlace;
  const countryDisambiguates = !place && !parts.issuer.toLowerCase().includes(parts.country.toLowerCase());
  const branded = `${countryDisambiguates ? withCountry : core} | Notofilia`;
  const chosen = branded.length <= 60 ? branded : core.length <= 70 ? core : `${head} · ${parts.issuer}${place ? ` · ${place}` : ''}`;
  return compressDocumentTitle(chosen);
}

function catalogIdentifier(title: string): string {
  const match = title.match(/\b(?:P#\s*[\dA-Za-z().-]+|Pick\s*[\dA-Za-z().-]+|BG#\s*[\dA-Za-z.-]+|KM#?\s*[\d.A-Za-z-]+|HT-\s*\d+[A-Za-z]*|Fr\.\s*[\dA-Za-z*-]+)/);
  return match?.[0] ?? '';
}

function yearRangeToken(value: string): string {
  const range = value.match(/\b(1[5-9]\d{2}|20\d{2})\s*[–-]\s*(1[5-9]\d{2}|20\d{2})\b/);
  if (range) return `${range[1]}–${range[2]}`;
  const years = value.match(/\b(1[5-9]\d{2}|20\d{2})(?![0-9])/g);
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
  const yearOnly = /^(1[5-9]\d{2}|20\d{2})(?:\s*[–-]\s*(1[5-9]\d{2}|20\d{2}))?$/;
  let issuer = chunks.length >= 2 ? chunks[1] : '';
  let place = '';
  let year = '';
  if (chunks.length >= 3) {
    const last = chunks[chunks.length - 1];
    const yearInLast = yearRangeToken(last);
    if (yearInLast && (yearOnly.test(last) || yearInLast === last.replace(/[–-]/g, '–'))) {
      year = yearInLast;
    } else if (yearInLast && /^(1[5-9]\d{2}|20\d{2})/.test(last)) {
      year = yearInLast;
    } else {
      place = last;
      year =
        yearRangeToken(chunks.slice(1, -1).join(' ')) ||
        yearRangeToken(input.title) ||
        yearRangeToken(input.kicker ?? '');
    }
  } else {
    year = yearRangeToken(input.title);
  }
  if (chunks.length === 2 && yearOnly.test(chunks[1])) {
    year = yearRangeToken(chunks[1]);
    issuer = '';
  }
  if (!year) year = yearRangeToken(input.kicker ?? '') || yearRangeToken(input.title);
  if (!issuer || yearOnly.test(issuer)) {
    const kickerBits = (input.kicker ?? '').split(/\s·\s/).map((part) => part.trim()).filter(Boolean);
    issuer =
      kickerBits.find((bit) => !yearOnly.test(bit) && bit !== input.country) ??
      kickerBits[1] ??
      kickerBits[0] ??
      (input.locale === 'en' ? 'Issuer' : 'Emisor');
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
    place,
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
  heading?: string;
  /** Federal Reserve district letter already stored on the record. */
  district?: string;
}) {
  const parts = parsePieceTitleParts(input);
  const h1 = input.heading?.trim() || pieceH1(parts, input.locale);
  const documentTitle = input.heading?.trim()
    ? compressDocumentTitle(`${input.heading.trim()} · ${parts.country} | Notofilia`)
    : pieceDocumentTitle(parts, input.locale, input.district);
  return {
    documentTitle,
    h1,
    subtitle: parts.catalogLabel,
    description: limitMetaDescription(input.lead),
    parts,
  };
}
