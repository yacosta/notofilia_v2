import type { Locale } from './locale-paths.ts';

/** Catalogue systems already stored in piece `pick` / `friedberg` strings. */
export type CatalogSystemId =
  | 'friedberg'
  | 'pick'
  | 'haxby'
  | 'criswell'
  | 'numista'
  | 'shafer'
  | 'mitchellShafer'
  | 'km'
  | 'bg'
  | 'ht'
  | 'schwan'
  | 'hernandez'
  | 'catalog';

const LABELS: Record<Locale, Record<CatalogSystemId, string>> = {
  es: {
    friedberg: 'Referencia Friedberg',
    pick: 'Referencia Pick',
    haxby: 'Referencia Haxby',
    criswell: 'Referencia Criswell',
    numista: 'Numista',
    shafer: 'Referencia Shafer',
    mitchellShafer: 'Referencia Mitchell/Shafer',
    km: 'Referencia KM',
    bg: 'Referencia BG',
    ht: 'Referencia HT',
    schwan: 'Referencia Schwan',
    hernandez: 'Referencia Hernández',
    catalog: 'Referencia de catálogo',
  },
  en: {
    friedberg: 'Friedberg reference',
    pick: 'Pick reference',
    haxby: 'Haxby reference',
    criswell: 'Criswell reference',
    numista: 'Numista',
    shafer: 'Shafer reference',
    mitchellShafer: 'Mitchell/Shafer reference',
    km: 'KM reference',
    bg: 'BG reference',
    ht: 'HT reference',
    schwan: 'Schwan reference',
    hernandez: 'Hernández reference',
    catalog: 'Catalog reference',
  },
};

export type CatalogReferenceRow = { label: string; value: string };

/** Classify one catalog token. Descriptive leftovers return null. */
export function classifyCatalogToken(token: string): CatalogSystemId | null {
  const value = token.trim();
  if (/^Fr\./i.test(value) || /^Friedberg\b/i.test(value)) return 'friedberg';
  if (/^(?:Hawaii\s+)?(?:P#|Pick\b)/i.test(value)) return 'pick';
  if (/^Haxby\b/i.test(value)) return 'haxby';
  if (/^T-\d/i.test(value)) return 'criswell';
  if (/^N#/i.test(value)) return 'numista';
  if (/^Shafer\b/i.test(value)) return 'shafer';
  if (/^MS\s+WI/i.test(value)) return 'mitchellShafer';
  if (/^KM#?/i.test(value)) return 'km';
  if (/^BG#/i.test(value)) return 'bg';
  if (/^HT-/i.test(value)) return 'ht';
  if (/^Schwan\b/i.test(value)) return 'schwan';
  if (/^Cód\.?/i.test(value)) return 'hernandez';
  return null;
}

/**
 * Split a combined catalog string into one row per system.
 * A Friedberg number is not labeled Pick, and a Haxby or Criswell number is not either.
 * Tokens that are not a catalogue system stay on the neighboring row.
 */
export function catalogReferenceRows(value: string, locale: Locale): CatalogReferenceRow[] {
  const tokens = value
    .split(/\s·\s/)
    .map((token) => token.trim())
    .filter(Boolean);
  const groups: { system: CatalogSystemId; parts: string[] }[] = [];
  let pending: string[] = [];

  for (const token of tokens) {
    const system = classifyCatalogToken(token);
    if (!system) {
      pending.push(token);
      continue;
    }
    groups.push({ system, parts: [...pending, token] });
    pending = [];
  }

  if (pending.length) {
    if (groups.length) groups[groups.length - 1].parts.push(...pending);
    else groups.push({ system: 'catalog', parts: pending });
  }

  if (!groups.length) {
    return [{ label: LABELS[locale].catalog, value }];
  }

  return groups.map((group) => ({
    label: LABELS[locale][group.system],
    value: group.parts.join(' · '),
  }));
}

export function catalogReferenceLabel(value: string, locale: Locale): string {
  return catalogReferenceRows(value, locale)[0]?.label ?? LABELS[locale].catalog;
}

/**
 * Compact series-card line.
 * A lone Pick number keeps the short Pick label.
 * Friedberg, Haxby, Shafer, and other systems already name themselves, so they are not prefixed with Pick.
 */
export function catalogCardText(value: string, pickLabel: string, locale: Locale): string {
  const rows = catalogReferenceRows(value, locale);
  const firstToken = rows[0]?.value.split(/\s·\s/)[0] ?? '';
  if (rows.length === 1 && classifyCatalogToken(firstToken) === 'pick') {
    return `${pickLabel} ${rows[0].value}`;
  }
  return rows.map((row) => row.value).join(' · ');
}
