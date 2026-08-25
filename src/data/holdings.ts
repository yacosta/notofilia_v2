/**
 * Collection holdings — single source of truth for displayed totals.
 *
 * How to add a banknote or coin:
 *   additions.push({ id: 'co-1923-1-peso', kind: 'banknote', country: 'CO' })
 *   additions.push({ id: 'es-colonial-escudo', kind: 'coin', country: 'ES' })
 *
 * How to add a country:
 *   Use an ISO 3166-1 alpha-2 code that is not in BASELINE_COUNTRIES.
 *   The country total increments automatically when that code first appears
 *   on a piece in `additions`.
 *
 * How to add a catalog ficha (can differ from physical pieces):
 *   catalogAdditions.push({ id: 'ficha-pick-123' })
 *
 * Pages (páginas) are BASELINE.pages plus new public content slugs in
 * src/lib/site.ts (`stubPages`, articles, news, milestones) and new
 * src/pages/*.astro files except 404. Pass the live count into
 * collectionStats(pageCount) from site.ts.
 *
 * BASELINE keeps the live-site totals (224 / 9 / 36 / 124 / 156) until
 * individual records are migrated. Do not edit HomePage or Footer to change counts.
 */

export type PieceKind = 'banknote' | 'coin';

export type Holding = {
  id: string;
  kind: PieceKind;
  /** ISO 3166-1 alpha-2 country code */
  country: string;
};

export type CatalogEntry = {
  id: string;
};

export const BASELINE = {
  banknotes: 224,
  coins: 9,
  countries: 36,
  fichas: 124,
  pages: 156,
} as const;

/**
 * Country codes already represented in the baseline collection.
 * Length must stay 36 so the seeded country total remains correct.
 */
export const BASELINE_COUNTRIES = [
  'CO',
  'US',
  'ES',
  'PR',
  'EC',
  'PH',
  'GT',
  'MX',
  'AR',
  'BR',
  'PE',
  'CL',
  'VE',
  'BO',
  'UY',
  'PY',
  'PA',
  'CR',
  'NI',
  'HN',
  'SV',
  'CU',
  'DO',
  'HT',
  'JM',
  'CA',
  'GB',
  'FR',
  'DE',
  'IT',
  'PT',
  'CN',
  'JP',
  'AU',
  'IN',
  'ZA',
] as const;

const baselineCountrySet = new Set<string>(BASELINE_COUNTRIES);

if (baselineCountrySet.size !== BASELINE.countries) {
  throw new Error(
    `BASELINE_COUNTRIES must contain ${BASELINE.countries} unique codes (found ${baselineCountrySet.size})`,
  );
}

/** Newly catalogued physical pieces. Each entry increments banknotes or coins. */
export const additions: Holding[] = [];

/** Newly added catalog records (fichas), independent of piece counts. */
export const catalogAdditions: CatalogEntry[] = [];

export type CollectionStats = {
  banknotes: number;
  coins: number;
  countries: number;
  fichas: number;
  catalog: number;
  pages: number;
};

function normalizeCountry(code: string): string {
  return code.trim().toUpperCase();
}

export function collectionStats(pageCount: number = BASELINE.pages): CollectionStats {
  let extraBanknotes = 0;
  let extraCoins = 0;
  const newCountries = new Set<string>();

  for (const piece of additions) {
    if (piece.kind === 'banknote') extraBanknotes += 1;
    else if (piece.kind === 'coin') extraCoins += 1;

    const country = normalizeCountry(piece.country);
    if (country && !baselineCountrySet.has(country)) {
      newCountries.add(country);
    }
  }

  const fichas = BASELINE.fichas + catalogAdditions.length;

  return {
    banknotes: BASELINE.banknotes + extraBanknotes,
    coins: BASELINE.coins + extraCoins,
    countries: BASELINE.countries + newCountries.size,
    fichas,
    catalog: fichas,
    pages: pageCount,
  };
}
