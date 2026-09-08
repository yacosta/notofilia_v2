import type { Holding } from '../data/holdings.ts';
import type { LocalizedText } from '../data/catalog.ts';

export type MilestoneItem = {
  href: string;
  holdingId: string;
  es: { title: string; description: string };
  en: { title: string; description: string };
};

export type CatalogPiece = {
  id: string;
  country: string;
  href: string;
  title: LocalizedText;
  dek: LocalizedText;
  pick: string;
  serial: string;
  cert: string;
};

/** Cards in the homepage “Logros del Mes” grid (3 columns × 2 rows). */
export const HOME_MILESTONE_LIMIT = 6;

function alnum(value: string): string {
  return value.toUpperCase().replace(/[^A-Z0-9]/g, '');
}

function tokens(id: string): string[] {
  return id
    .toLowerCase()
    .split(/[-_]/)
    .filter((token) => token.length > 0);
}

function synonym(token: string): string[] {
  if (token === 'dolar' || token === 'dollar') return ['dolar', 'dollar'];
  if (token === 'ducado' || token === 'ducat') return ['ducado', 'ducat'];
  if (token === 'dolares' || token === 'dollars') return ['dolares', 'dollars'];
  return [token];
}

function holdingHasToken(holdingTokens: Set<string>, token: string): boolean {
  return synonym(token).some((item) => holdingTokens.has(item));
}

function scorePiece(holding: Holding, piece: CatalogPiece): number {
  if (piece.country !== holding.country) return -1;

  const hid = alnum(holding.id);
  const pid = alnum(piece.id);
  let score = 0;

  if (hid === pid) score += 500;
  if (hid.endsWith(pid) || pid.endsWith(hid)) score += 200;

  const serial = piece.serial ? alnum(piece.serial) : '';
  if (serial.length >= 4 && hid.includes(serial)) score += 300;

  const cert = piece.cert ? alnum(piece.cert) : '';
  if (cert.length >= 6 && hid.includes(cert)) score += 250;

  const pieceTokens = tokens(piece.id.replace(/^[a-z]{2}-/i, ''));
  const holdingTokens = new Set(tokens(holding.id));
  const matched = pieceTokens.filter((token) => holdingHasToken(holdingTokens, token));
  if (pieceTokens.length >= 2 && matched.length === pieceTokens.length) score += 80;
  else score += matched.length * 4;

  const pick = piece.pick ? alnum(piece.pick) : '';
  if (pick.length >= 6 && hid.includes(pick)) score += 40;

  return score;
}

export function catalogPieceForHolding(
  holding: Holding,
  pieces: CatalogPiece[],
): CatalogPiece | undefined {
  let best: CatalogPiece | undefined;
  let bestScore = 50;
  for (const piece of pieces) {
    const score = scorePiece(holding, piece);
    if (score > bestScore) {
      best = piece;
      bestScore = score;
    }
  }
  return best;
}

function toMilestone(holding: Holding, piece: CatalogPiece): MilestoneItem {
  return {
    href: piece.href,
    holdingId: holding.id,
    es: { title: piece.title.es, description: piece.dek.es },
    en: { title: piece.title.en, description: piece.dek.en },
  };
}

/**
 * Homepage milestones: newest catalogued holdings first.
 * Recency is the order of `additions` (append new rows at the end).
 */
export function milestonesFromHoldings(
  holdings: Holding[],
  pieces: CatalogPiece[],
  limit: number = HOME_MILESTONE_LIMIT,
): MilestoneItem[] {
  const items: MilestoneItem[] = [];
  const seen = new Set<string>();

  for (let i = holdings.length - 1; i >= 0; i -= 1) {
    if (items.length >= limit) break;
    const holding = holdings[i];
    if (seen.has(holding.id)) continue;
    seen.add(holding.id);
    const piece = catalogPieceForHolding(holding, pieces);
    if (!piece) continue;
    items.push(toMilestone(holding, piece));
  }

  return items;
}
