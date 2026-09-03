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
  { id: 'co-1820-1-4-real-santa-marta', kind: 'coin', country: 'CO' },
  { id: 'nl-1761-ducat-utrecht-4685927-012', kind: 'coin', country: 'NL' },
  { id: 'cn-2000-100-yuan-j04445744', kind: 'banknote', country: 'CN' },
  { id: 'us-mpc-641-10-j01130273', kind: 'banknote', country: 'US' },
  { id: 'us-mpc-661-5-b03327560', kind: 'banknote', country: 'US' },
  { id: 'us-mpc-681-1-c10102847', kind: 'banknote', country: 'US' },
  { id: 'us-mpc-692-20-e05725119', kind: 'banknote', country: 'US' },
  { id: 'us-frn-1934-10-chicago-g30986728', kind: 'banknote', country: 'US' },
  { id: 'us-frn-1934a-10-chicago-g74025286', kind: 'banknote', country: 'US' },
  { id: 'us-frn-1934a-10-cleveland-d78652996', kind: 'banknote', country: 'US' },
  { id: 'us-frn-1934d-10-richmond-e60822246', kind: 'banknote', country: 'US' },
  { id: 'us-frn-1934a-500-new-york-b00286799', kind: 'banknote', country: 'US' },
  { id: 'us-frn-2006-1-dallas-k46602688c', kind: 'banknote', country: 'US' },
  { id: 'us-giori-lincoln-memorial-1970s', kind: 'banknote', country: 'US' },
  { id: 'us-baraboo-1933-5c-a4895', kind: 'banknote', country: 'US' },
  { id: 'us-renci-pele-f71235101a', kind: 'banknote', country: 'US' },
  { id: 'us-renci-messi-you-have-to-fight-to-reach-your-dream', kind: 'banknote', country: 'US' },
  { id: 'us-renci-warhol-basquiat-life-is-beautiful', kind: 'banknote', country: 'US' },
  { id: 'us-renci-trump-never-surrender', kind: 'banknote', country: 'US' },
  { id: 'us-renci-life-is-beautiful-life-spray', kind: 'banknote', country: 'US' },
  { id: 'us-sc-1957b-s35513454a', kind: 'banknote', country: 'US' },
  { id: 'us-nj-350-1-new-brunswick-9890', kind: 'banknote', country: 'US' },
  { id: 'us-ct-265-5-new-haven-g52b-remainder', kind: 'banknote', country: 'US' },
  { id: 'us-csa-1864-20-74523', kind: 'banknote', country: 'US' },
  { id: 'us-csa-1864-5-6164', kind: 'banknote', country: 'US' },
  { id: 'us-2026-1-dollar-trump-1776-2026', kind: 'coin', country: 'US' },
  { id: 'co-1883-5-pesos-rio-hacha-s819p1', kind: 'banknote', country: 'CO' },
  { id: 'co-1883-5-pesos-rio-hacha-s819p2', kind: 'banknote', country: 'CO' },
  { id: 'co-1881-5-pesos-banco-hipotecario-s511p1', kind: 'banknote', country: 'CO' },
  { id: 'co-1881-5-pesos-banco-hipotecario-s511p2', kind: 'banknote', country: 'CO' },
  { id: 'co-1901-1-peso-tolima-060416', kind: 'banknote', country: 'CO' },
  { id: 'co-1943-10-pesos-oro-n6813011', kind: 'banknote', country: 'CO' },
  { id: 'co-1954-1-peso-oro-hh52170492', kind: 'banknote', country: 'CO' },
  { id: 'co-1944-2-pesos-oro-i12527403', kind: 'banknote', country: 'CO' },
  { id: 'co-1955-2-pesos-oro-gg10739101', kind: 'banknote', country: 'CO' },
  { id: 'co-1976-10-pesos-oro-00142533', kind: 'banknote', country: 'CO' },
  { id: 'co-1979-1000-pesos-oro-067682258', kind: 'banknote', country: 'CO' },
  { id: 'co-1983-2000-pesos-oro-specimen-030', kind: 'banknote', country: 'CO' },
  { id: 'co-2008-2000-pesos-10000001', kind: 'banknote', country: 'CO' },
  { id: 'co-2017-20000-pesos-af51355141', kind: 'banknote', country: 'CO' },
  { id: 'co-2008-1000-pesos-error-23085962', kind: 'banknote', country: 'CO' },
  { id: 'co-2011-1000-pesos-error-11508701', kind: 'banknote', country: 'CO' },
  { id: 'co-2008-50000-pesos-error-72461316-72411316', kind: 'banknote', country: 'CO' },
  { id: 'co-2015-50000-pesos-error-ab69350427', kind: 'banknote', country: 'CO' },
  { id: 'gb-2016-5-pounds-ac04879241', kind: 'banknote', country: 'GB' },
  { id: 'ca-2013-5-dollars-hbm0828003', kind: 'banknote', country: 'CA' },
  { id: 'my-2012-5-ringgit-aa1955984', kind: 'banknote', country: 'MY' },
  { id: 'pr-1895-1-peso-4548454', kind: 'banknote', country: 'PR' },
  { id: 'pr-1869-junta-central-32', kind: 'banknote', country: 'PR' },
  { id: 'pr-1869-junta-1-peso-13085', kind: 'banknote', country: 'PR' },
];

/** Newly added catalog records (fichas), independent of piece counts. */
export const catalogAdditions: CatalogEntry[] = [
  { id: 'ph-victory-66-1-peso-p94a' },
  { id: 'ph-victory-66-2-pesos-p95a' },
  { id: 'ph-victory-66-5-pesos-p96a' },
  { id: 'ph-victory-66-20-pesos-p98a' },
  { id: 'co-1820-santa-marta-1-4-real-km-b4' },
  { id: 'nl-1761-ducat-utrecht-km7-4' },
  { id: 'cn-2000-100-yuan-p902' },
  { id: 'us-mpc-641-10-m63' },
  { id: 'us-mpc-661-5-m69' },
  { id: 'us-mpc-681-1-m79' },
  { id: 'us-mpc-692-20-m98' },
  { id: 'us-frn-1934-10-chicago-fr2004g' },
  { id: 'us-frn-1934a-10-chicago-fr2006g' },
  { id: 'us-frn-1934a-10-cleveland-fr2006d' },
  { id: 'us-frn-1934d-10-richmond-fr2009e' },
  { id: 'us-frn-1934a-500-new-york-fr2202b' },
  { id: 'us-frn-2006-1-dallas-fr1933k' },
  { id: 'us-giori-lincoln-memorial-test' },
  { id: 'us-baraboo-1933-5c-shafer-wi100' },
  { id: 'us-renci-pele-the-beautiful-game-5-200' },
  { id: 'us-renci-messi-you-have-to-fight-to-reach-your-dream-2-222' },
  { id: 'us-renci-warhol-basquiat-life-is-beautiful' },
  { id: 'us-renci-trump-never-surrender' },
  { id: 'us-renci-life-is-beautiful-life-spray-5-200' },
  { id: 'us-sc-1957b-fr1621' },
  { id: 'us-nj-350-1-new-brunswick-g16a' },
  { id: 'us-ct-265-g52b' },
  { id: 'us-csa-1864-20-t67-p69' },
  { id: 'us-csa-1864-5-t69-p67' },
  { id: 'us-2026-1-dollar-trump-pl-116-330' },
  { id: 'co-1883-rio-hacha-5-pesos-s819p' },
  { id: 'co-1881-banco-hipotecario-5-pesos-s511p' },
  { id: 'co-1901-1-peso-tolima-cod1242' },
  { id: 'co-1943-10-pesos-oro-p389b' },
  { id: 'co-1954-1-peso-oro-p380g' },
  { id: 'co-1944-2-pesos-oro-p390b' },
  { id: 'co-1955-2-pesos-oro-p390d' },
  { id: 'co-1976-10-pesos-oro-p407f-b950kr' },
  { id: 'co-1979-1000-pesos-oro-p421a' },
  { id: 'co-1983-2000-pesos-oro-p430as' },
  { id: 'co-2008-2000-pesos-p457' },
  { id: 'co-2017-20000-pesos-p461-nf20-6' },
  { id: 'co-2008-1000-pesos-error-p456' },
  { id: 'co-2011-1000-pesos-error-p456n' },
  { id: 'co-2008-50000-pesos-error-p455l' },
  { id: 'co-2015-50000-pesos-error-p462a' },
  { id: 'gb-2016-5-pounds-p394-b203a' },
  { id: 'ca-2013-5-dollars-p106b-bc69' },
  { id: 'my-2012-5-ringgit-p52a-b149a' },
  { id: 'pr-1895-1-peso-p7b' },
  { id: 'pr-1869-junta-central-recibo' },
  { id: 'pr-1869-junta-1-peso-p61' },
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
  const banknotes = BASELINE.banknotes + extraBanknotes;
  const coins = BASELINE.coins + extraCoins;

  return {
    banknotes,
    coins,
    countries: BASELINE.countries + newCountries.size,
    fichas,
    // Catalog entries surface every physical holding: banknotes + coins.
    catalog: banknotes + coins,
    pages: pageCount,
  };
}
