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

export function catalogDownloadLabel(src: string, locale: 'es' | 'en'): string {
  const format = catalogDownloadFormat(src);
  return locale === 'en'
    ? `Download ${format}. A download will start.`
    : `Descargar ${format}. Se inicia una descarga.`;
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

/**
 * Wrap the first occurrence of each glossary title in a catalogue essay.
 * Keepers get standalone URLs; folded terms use the index href helper.
 */
export function linkFirstGlossaryTerms(text: string, locale: Locale): string {
  let html = escapeHtml(text);
  const used = new Set<string>();
  for (const item of glossaryNeedles(locale)) {
    const key = item.needle.toLowerCase();
    if (used.has(key)) continue;
    const pattern = new RegExp(`(?<![\\w#/])(${escapeRegExp(item.needle)})(?![\\w])`, 'i');
    if (!pattern.test(html)) continue;
    used.add(key);
    html = html.replace(pattern, `<a class="text-gold-light underline decoration-line-strong hover:text-cream" href="${item.href}">$1</a>`);
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
