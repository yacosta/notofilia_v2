import { glossaryTermHref, glossaryTerms, isStandaloneGlossaryTerm } from '../data/glossary.ts';
import type { Locale } from './locale-paths.ts';

export const CATALOG_DISPLAY_PREFIX = '/images/catalog/';
export const CATALOG_DOWNLOAD_PREFIX = '/images/catalog-download/';

export function catalogDownloadSrc(src: string): string {
  if (src.startsWith(CATALOG_DISPLAY_PREFIX)) {
    return `${CATALOG_DOWNLOAD_PREFIX}${src.slice(CATALOG_DISPLAY_PREFIX.length)}`;
  }
  return src;
}

export function catalogDownloadFilename(src: string): string {
  const path = catalogDownloadSrc(src);
  const slash = path.lastIndexOf('/');
  return slash >= 0 ? path.slice(slash + 1) : path;
}

export function catalogDownloadFormat(src: string): 'JPEG' | 'PNG' | 'WebP' | 'image' {
  const ext = src.split('.').pop()?.toLowerCase();
  if (ext === 'jpg' || ext === 'jpeg') return 'JPEG';
  if (ext === 'png') return 'PNG';
  if (ext === 'webp') return 'WebP';
  return 'image';
}

const MAX_SCAN_ALT = 80;
const DASH_SERIAL = /^[\s—–-]+$/;

/** Printed serial for alts and download names. Omit blanks and documented absences. */
export function catalogSerialToken(serial?: string, serialDisplay?: string): string | undefined {
  const normalized = serial?.trim() ?? '';
  const display = serialDisplay?.trim() ?? '';
  const printed =
    display && display.length <= 36 && !display.includes('·') && !DASH_SERIAL.test(display) ? display : normalized;
  if (!printed || DASH_SERIAL.test(printed)) return undefined;
  return printed;
}

const YEAR_TOKEN = /\b(?:1[5-9]\d{2}|20\d{2})\b/;

function identityKeys(serial?: string, serialDisplay?: string): string[] {
  return [serial, serialDisplay]
    .map((value) => value?.trim() ?? '')
    .filter((value) => value && !DASH_SERIAL.test(value))
    .map((value) => value.replace(/[\s.★*]/g, '').toUpperCase());
}

/**
 * Short subject from a catalogue title.
 * "10.000 pesos · reposición estrella · 1994 · 00113227" → "10.000 pesos 1994".
 * A trailing serial is left to the separate serial clause.
 */
export function scanSubject(title: string, serial?: string, serialDisplay?: string): string {
  let parts = title
    .split('·')
    .map((part) => part.trim())
    .filter(Boolean);
  const keys = identityKeys(serial, serialDisplay);
  if (keys.length) {
    const filtered = parts.filter((part) => !keys.includes(part.replace(/[\s.★*]/g, '').toUpperCase()));
    if (filtered.length) parts = filtered;
  }
  const last = parts[parts.length - 1] ?? '';
  if (parts.length >= 3 && YEAR_TOKEN.test(last)) {
    return `${parts[0]} ${last}`;
  }
  return parts.join(' ');
}

/**
 * Short object description for a catalog scan (≤ 80 characters).
 * The visible figcaption keeps the long sentence.
 * Example: "Anverso, 10.000 pesos 1994, serial 00113227".
 */
export function pieceScanAlt(input: {
  sideLabel: string;
  title: string;
  serial?: string;
  serialDisplay?: string;
}): string {
  const side = input.sideLabel.trim();
  const serial = catalogSerialToken(input.serial, input.serialDisplay);
  const serialBit = serial ? `, serial ${serial}` : '';
  const prefix = `${side}, `;
  let subject = scanSubject(input.title, input.serial, input.serialDisplay);
  const budget = MAX_SCAN_ALT - prefix.length - serialBit.length;
  if (budget < 8) {
    const bare = serial ? `${side}${serialBit}` : side;
    return bare.length <= MAX_SCAN_ALT ? bare : `${bare.slice(0, MAX_SCAN_ALT - 1).trimEnd()}…`;
  }
  if (subject.length > budget) {
    const cut = Math.max(1, budget - 1);
    subject = `${subject.slice(0, cut).trimEnd()}…`;
  }
  return `${prefix}${subject}${serialBit}`;
}

export type CatalogDownloadDetail = {
  side?: string;
  serial?: string;
  serialDisplay?: string;
  /** Used when the piece has no serial, so two scans on one page stay distinct. */
  title?: string;
};

/** Visible link (with the download-status sentence) and the short dialog label. */
export function catalogDownloadLabels(
  src: string,
  locale: 'es' | 'en',
  detail?: CatalogDownloadDetail,
): { short: string; full: string } {
  const format = catalogDownloadFormat(src);
  const serial = catalogSerialToken(detail?.serial, detail?.serialDisplay);
  const side = detail?.side?.trim();
  const sidePhrase = side ? (locale === 'en' ? ` of the ${side.toLowerCase()}` : ` del ${side.toLowerCase()}`) : '';
  const subject = !serial && detail?.title ? scanSubject(detail.title, detail.serial, detail.serialDisplay) : '';
  const serialPhrase = serial ? `, serial ${serial}` : subject ? `, ${subject}` : '';
  const verb = locale === 'en' ? 'Download' : 'Descargar';
  const short = `${verb} ${format}${sidePhrase}${serialPhrase}`;
  const status = locale === 'en' ? 'A download will start.' : 'Se inicia una descarga.';
  return { short, full: `${short}. ${status}` };
}

/**
 * Alt must not repeat the figcaption. When they are the same sentence, keep a
 * shorter object description (≤ 80) and leave the full sentence in the caption.
 */
export function distinctFigureAlt(alt: string, caption: string): string {
  const imageAlt = alt.trim();
  const figureCaption = caption.trim();
  if (!figureCaption || imageAlt !== figureCaption) return imageAlt;
  if (imageAlt.length > 80) {
    return `${imageAlt.slice(0, 79).trimEnd()}…`;
  }
  const words = imageAlt.split(/\s+/);
  if (words.length > 4) return words.slice(0, -1).join(' ');
  return '';
}

export function catalogDownloadLabel(src: string, locale: 'es' | 'en', detail?: CatalogDownloadDetail): string {
  return catalogDownloadLabels(src, locale, detail).full;
}

export function catalogDownloadShortLabel(
  src: string,
  locale: 'es' | 'en',
  detail?: CatalogDownloadDetail,
): string {
  return catalogDownloadLabels(src, locale, detail).short;
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function glossaryNeedles(locale: Locale): { needle: string; href: string; standalone: boolean }[] {
  return [...glossaryTerms]
    .map((term) => ({
      needle: term.title[locale],
      href: glossaryTermHref(term.slug, locale),
      standalone: isStandaloneGlossaryTerm(term.slug),
    }))
    .filter((item) => item.needle.length >= 4)
    .sort((a, b) => b.needle.length - a.needle.length || Number(b.standalone) - Number(a.standalone));
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function glossaryOffsetIsUnsafe(html: string, offset: number): boolean {
  const before = html.slice(0, offset);
  if (before.lastIndexOf('<') > before.lastIndexOf('>')) return true;
  const opens = before.match(/<a\b/gi)?.length ?? 0;
  const closes = before.match(/<\/a>/gi)?.length ?? 0;
  return opens > closes;
}

/**
 * Wrap the first occurrence of each glossary title in a catalogue essay.
 * Keepers get standalone URLs; folded terms use the index href helper.
 * Skip matches inside tags or existing links so a later needle cannot rewrite
 * `gold-peso` (or `peso-oro`) after `peso oro` has already been wrapped.
 */
export function linkFirstGlossaryTerms(text: string, locale: Locale): string {
  let html = escapeHtml(text);
  const used = new Set<string>();
  for (const item of glossaryNeedles(locale)) {
    const key = item.needle.toLowerCase();
    if (used.has(key)) continue;
    const pattern = new RegExp(`(?<![\\w#/])(${escapeRegExp(item.needle)})(?![\\w])`, 'gi');
    let match: RegExpExecArray | null;
    let wrapped = false;
    while ((match = pattern.exec(html))) {
      if (glossaryOffsetIsUnsafe(html, match.index)) continue;
      used.add(key);
      html = `${html.slice(0, match.index)}<a class="text-gold-light underline decoration-line-strong hover:text-cream" href="${item.href}">${match[1]}</a>${html.slice(match.index + match[0].length)}`;
      wrapped = true;
      break;
    }
    if (!wrapped) continue;
  }
  return html;
}

export function pieceSiblings<T extends { path: string }>(
  items: T[],
  currentPath: string,
  relatedCount = 4,
): { prev?: T; next?: T; related: T[] } {
  const index = items.findIndex((item) => item.path === currentPath);
  if (index < 0) return { related: items.slice(0, relatedCount) };
  const prev = index > 0 ? items[index - 1] : undefined;
  const next = index < items.length - 1 ? items[index + 1] : undefined;
  const related: T[] = [];
  for (let offset = 1; related.length < relatedCount && offset < items.length; offset += 1) {
    const after = items[index + offset];
    const before = items[index - offset];
    if (after) related.push(after);
    if (related.length >= relatedCount) break;
    if (before) related.push(before);
  }
  return { prev, next, related };
}
