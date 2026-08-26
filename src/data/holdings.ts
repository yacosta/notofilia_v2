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
 * BASELINE starts at zero — nothing is uploaded yet. Future rows in
 * additions / catalogAdditions increment from that empty floor.
 * Do not edit HomePage or Footer to change counts.
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
  banknotes: 0,
  coins: 0,
  countries: 0,
  fichas: 0,
  pages: 0,
} as const;

/**
 * Country codes already represented in the baseline collection.
 * Empty while the collection has no uploaded pieces.
 */
export const BASELINE_COUNTRIES = [] as const;

const baselineCountrySet = new Set<string>(BASELINE_COUNTRIES);

if (baselineCountrySet.size !== BASELINE.countries) {
  throw new Error(
    `BASELINE_COUNTRIES must contain ${BASELINE.countries} unique codes (found ${baselineCountrySet.size})`,
  );
}

/** Newly catalogued physical pieces. Each entry increments banknotes or coins. */
export const additions: Holding[] = [
  { id: 'ph-1944-1-peso-f70618009', kind: 'banknote', country: 'PH' },
  { id: 'ph-1944-2-pesos-f13317943', kind: 'banknote', country: 'PH' },
  { id: 'ph-1944-5-pesos-f00618071', kind: 'banknote', country: 'PH' },
  { id: 'ph-1944-20-pesos-f04661756', kind: 'banknote', country: 'PH' },
  { id: 'co-1948-medio-peso-specimen', kind: 'banknote', country: 'CO' },
  { id: 'co-1929-1-peso-oro-specimen', kind: 'banknote', country: 'CO' },
  { id: 'co-1932-1-peso-plata-specimen', kind: 'banknote', country: 'CO' },
  { id: 'co-1947-2-pesos-oro', kind: 'banknote', country: 'CO' },
  { id: 'co-1972-2-pesos-oro-specimen', kind: 'banknote', country: 'CO' },
  { id: 'co-1941-5-pesos-plata-specimen', kind: 'banknote', country: 'CO' },
  { id: 'co-1943-10-pesos-oro', kind: 'banknote', country: 'CO' },
  { id: 'co-1949-10-pesos-oro', kind: 'banknote', country: 'CO' },
  { id: 'co-1953-10-pesos-oro', kind: 'banknote', country: 'CO' },
  { id: 'co-1960-10-pesos-oro', kind: 'banknote', country: 'CO' },
  { id: 'co-1961-10-pesos-oro', kind: 'banknote', country: 'CO' },
  { id: 'co-1964-50-pesos-oro-specimen', kind: 'banknote', country: 'CO' },
  { id: 'co-1985-50-pesos-oro-specimen', kind: 'banknote', country: 'CO' },
  { id: 'co-1947-100-pesos-oro-specimen', kind: 'banknote', country: 'CO' },
  { id: 'co-1969-100-pesos-oro-specimen', kind: 'banknote', country: 'CO' },
  { id: 'co-1980-100-pesos-oro-specimen', kind: 'banknote', country: 'CO' },
  { id: 'co-1983-100-pesos-oro-specimen', kind: 'banknote', country: 'CO' },
  { id: 'co-1982-200-pesos-oro-specimen', kind: 'banknote', country: 'CO' },
  { id: 'co-1983-200-pesos-oro-specimen', kind: 'banknote', country: 'CO' },
  { id: 'co-1992-200-pesos-oro-specimen', kind: 'banknote', country: 'CO' },
  { id: 'co-1947-500-pesos-oro-specimen', kind: 'banknote', country: 'CO' },
  { id: 'co-1984-500-pesos-oro-specimen', kind: 'banknote', country: 'CO' },
  { id: 'co-1989-500-pesos-oro-specimen', kind: 'banknote', country: 'CO' },
  { id: 'co-1993-500-pesos-oro-specimen', kind: 'banknote', country: 'CO' },
  { id: 'co-1990-1000-pesos', kind: 'banknote', country: 'CO' },
  { id: 'co-1995-1000-pesos', kind: 'banknote', country: 'CO' },
  { id: 'co-2001-1000-pesos', kind: 'banknote', country: 'CO' },
  { id: 'co-2003-1000-pesos-error', kind: 'banknote', country: 'CO' },
  { id: 'co-1984-2000-pesos-oro-specimen', kind: 'banknote', country: 'CO' },
  { id: 'co-1993-2000-pesos-oro-specimen', kind: 'banknote', country: 'CO' },
  { id: 'co-1996-2000-pesos-error', kind: 'banknote', country: 'CO' },
  { id: 'co-2005-2000-pesos-error', kind: 'banknote', country: 'CO' },
  { id: 'co-2009-2000-pesos-error', kind: 'banknote', country: 'CO' },
  { id: 'co-2009-2000-pesos-mariposa', kind: 'banknote', country: 'CO' },
  { id: 'co-2016-2000-pesos-debora-prueba', kind: 'banknote', country: 'CO' },
  { id: 'co-2016-2000-pesos-debora-prueba-anverso', kind: 'banknote', country: 'CO' },
  { id: 'co-1986-5000-pesos-oro-specimen', kind: 'banknote', country: 'CO' },
  { id: 'co-1987-5000-pesos-oro-specimen', kind: 'banknote', country: 'CO' },
  { id: 'co-1993-5000-pesos-oro-specimen', kind: 'banknote', country: 'CO' },
  { id: 'co-1994-10000-pesos-embera-specimen', kind: 'banknote', country: 'CO' },
  { id: 'co-1995-10000-pesos-pola-specimen', kind: 'banknote', country: 'CO' },
  { id: 'co-2016-50000-pesos-error', kind: 'banknote', country: 'CO' },
];

/** Newly added catalog records (fichas), independent of piece counts. */
export const catalogAdditions: CatalogEntry[] = [
  { id: 'ph-victory-66-1-peso-p94a' },
  { id: 'ph-victory-66-2-pesos-p95a' },
  { id: 'ph-victory-66-5-pesos-p96a' },
  { id: 'ph-victory-66-20-pesos-p98a' },
  { id: 'co-banrep-medio-peso-1948' },
  { id: 'co-banrep-1-peso-specimen' },
  { id: 'co-banrep-2-pesos-oro' },
  { id: 'co-banrep-5-pesos-plata-1941' },
  { id: 'co-banrep-10-pesos-oro-1943' },
  { id: 'co-banrep-10-pesos-oro' },
  { id: 'co-banrep-50-pesos-oro-specimen' },
  { id: 'co-banrep-100-pesos-oro' },
  { id: 'co-banrep-200-pesos-oro-specimen' },
  { id: 'co-banrep-500-pesos-oro-specimen' },
  { id: 'co-banrep-1000-pesos' },
  { id: 'co-banrep-2000-pesos-oro' },
  { id: 'co-banrep-2000-pesos-debora' },
  { id: 'co-banrep-2000-pesos-debora-prueba' },
  { id: 'co-banrep-5000-pesos-oro-specimen' },
  { id: 'co-banrep-10000-pesos-specimen' },
  { id: 'co-banrep-2000-pesos-1996-error' },
  { id: 'co-banrep-2000-pesos-error-corte' },
  { id: 'co-banrep-2000-pesos-error-mariposa' },
  { id: 'co-banrep-50000-pesos-error' },
];

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
