import {
  hammingDistance,
  parseDhash,
  similarityFromHamming,
} from './identify-hash.ts';
import { localizePath, type Locale } from './locale-paths.ts';
import { pieceScanAlt } from './scan-alt.ts';

export type IdentifyIndexFace = {
  pieceId: string;
  face: 'front' | 'back';
  hash: string;
  kind: 'banknote' | 'coin';
  path: string;
  pick: string;
  image: string;
  title: { es: string; en: string };
};

export type IdentifyIndex = {
  version: 1;
  generatedAt: string;
  algorithm: 'dhash-9x8';
  faces: IdentifyIndexFace[];
};

export type IdentifyMatch = {
  id: string;
  href: string;
  title: string;
  pick: string;
  kind: 'banknote' | 'coin';
  image: string;
  face: 'front' | 'back';
  score: number;
  distance: number;
};

/** Short alt for a match thumbnail: side, title, and the Pick or KM already on the hit. */
export function identifyMatchAlt(
  match: Pick<IdentifyMatch, 'title' | 'pick' | 'face' | 'kind'>,
  locale: Locale,
): string {
  const back = match.face === 'back';
  const side =
    locale === 'en'
      ? match.kind === 'coin'
        ? back
          ? 'Reverse'
          : 'Obverse'
        : back
          ? 'Back'
          : 'Face'
      : back
        ? 'Reverso'
        : 'Anverso';
  return pieceScanAlt({
    sideLabel: side,
    title: match.title,
    catalogNumber: match.pick,
  });
}

export const IDENTIFY_TOP_K = 5;
/** Drop weak matches (Hamming distance > 22 ≈ score < 0.656). */
export const IDENTIFY_MIN_SCORE = 0.65;

export function rankIdentifyMatches(
  index: IdentifyIndex,
  queryHash: string,
  locale: Locale,
  options: { topK?: number; minScore?: number } = {},
): IdentifyMatch[] {
  const query = parseDhash(queryHash);
  if (query === null) return [];

  const topK = options.topK ?? IDENTIFY_TOP_K;
  const minScore = options.minScore ?? IDENTIFY_MIN_SCORE;
  const bestByPiece = new Map<string, IdentifyMatch>();

  for (const face of index.faces) {
    const candidate = parseDhash(face.hash);
    if (candidate === null) continue;
    const distance = hammingDistance(query, candidate);
    const score = similarityFromHamming(distance);
    if (score < minScore) continue;

    const existing = bestByPiece.get(face.pieceId);
    if (existing && existing.score >= score) continue;

    bestByPiece.set(face.pieceId, {
      id: face.pieceId,
      href: localizePath(face.path, locale),
      title: face.title[locale],
      pick: face.pick,
      kind: face.kind,
      image: face.image,
      face: face.face,
      score,
      distance,
    });
  }

  return [...bestByPiece.values()]
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title, locale))
    .slice(0, topK);
}
