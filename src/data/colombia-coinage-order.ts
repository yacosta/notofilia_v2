export type SantaFeOrderPiece = {
  id: string;
  chapterId: string;
  year: string;
  denomination: { es: string };
};

/** Casa de Moneda de Santa Fe: 1 escudo by date, then 2 escudos, then 8 escudos, then 1 real. */
const SANTA_FE_DENOMINATION_RANK: Readonly<Record<string, number>> = {
  '1 escudo': 0,
  '2 escudos': 1,
  '8 escudos': 2,
  '1 real': 3,
};

export function orderSantaFeHoldings<T extends SantaFeOrderPiece>(pieces: readonly T[]): T[] {
  const santaFe = pieces
    .filter((piece) => piece.chapterId === 'santa-fe')
    .sort((a, b) => {
      const rankA = SANTA_FE_DENOMINATION_RANK[a.denomination.es] ?? Number.POSITIVE_INFINITY;
      const rankB = SANTA_FE_DENOMINATION_RANK[b.denomination.es] ?? Number.POSITIVE_INFINITY;
      if (rankA !== rankB) return rankA - rankB;
      const byYear = a.year.localeCompare(b.year, 'en', { numeric: true });
      if (byYear !== 0) return byYear;
      return a.id.localeCompare(b.id);
    });
  let placed = false;
  const ordered: T[] = [];
  for (const piece of pieces) {
    if (piece.chapterId !== 'santa-fe') {
      ordered.push(piece);
      continue;
    }
    if (!placed) {
      ordered.push(...santaFe);
      placed = true;
    }
  }
  return ordered;
}
