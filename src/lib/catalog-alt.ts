import type { Locale } from './locale-paths';

export type CatalogScanSide = 'front' | 'back';

const SIDE: Record<Locale, Record<CatalogScanSide, string>> = {
  es: { front: 'anverso', back: 'reverso' },
  en: { front: 'face', back: 'back' },
};

function catalogRef(pick: string): string {
  const trimmed = pick.replace(/^P#\s*/i, '').trim();
  if (!trimmed) return '';
  if (/^KM\b/i.test(trimmed)) return trimmed;
  return `Pick ${trimmed}`;
}

/** Image-search alt from catalog front-matter. Captions stay on the figure. */
export function catalogScanAlt(
  locale: Locale,
  input: { title: string; pick: string; side: CatalogScanSide },
): string {
  const side = SIDE[locale][input.side];
  const ref = catalogRef(input.pick);
  return ref ? `${input.title}, ${side} — ${ref}` : `${input.title}, ${side}`;
}
