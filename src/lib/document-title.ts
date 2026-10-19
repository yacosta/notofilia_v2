/** Visible <title> budget. Social titles may stay longer. */
export const TITLE_TARGET = 60;
export const TITLE_HARD_MAX = 70;

const BRAND_SUFFIXES = [' | Notofilia', ' · Notofilia', ' - Notofilia'] as const;

/**
 * Drop the brand suffix once the title would pass 60 characters.
 * Never cut a word in half. Catalogue tokens already in the string stay.
 */
export function compressDocumentTitle(title: string): string {
  let text = title.replace(/\s+/g, ' ').trim();
  const suffix = BRAND_SUFFIXES.find((item) => text.endsWith(item));
  const base = suffix ? text.slice(0, -suffix.length).replace(/[|·\s]+$/u, '').trim() : text;
  if (suffix && `${base}${suffix}`.length > TITLE_TARGET) text = base;
  if (text.length <= TITLE_HARD_MAX) return text;

  const sliced = text.slice(0, TITLE_HARD_MAX);
  const lastSpace = sliced.lastIndexOf(' ');
  const clipped = (lastSpace >= 24 ? sliced.slice(0, lastSpace) : sliced).replace(/[|·,;:\s]+$/u, '').trim();
  return clipped.length > 0 ? clipped : text.slice(0, TITLE_HARD_MAX).trim();
}
