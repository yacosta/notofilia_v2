import type { LocalizedText } from './catalog.ts';
import type { ColombiaNote, ColombiaNotePiece } from './colombia-notes.ts';
import { colombiaNotes, holdingSortKey, notePieces } from './colombia-notes.ts';

/** Error-note holdings for the Colombia series page (not a historical chapter). */
export const colombiaErrorNotes: ColombiaNote[] = colombiaNotes.filter(
  (note) => note.chapterId === 'errores',
);

export type ColombiaErrorCard = {
  note: ColombiaNote;
  piece: ColombiaNotePiece;
  denomination: number;
  year: number;
};

export type ColombiaErrorGroup = {
  year: number;
  denomination: number;
  heading: LocalizedText;
  cards: ColombiaErrorCard[];
};

function formatDenomination(denomination: number, locale: 'es' | 'en'): string {
  return denomination.toLocaleString(locale === 'es' ? 'es-CO' : 'en-US');
}

export function errorGroupHeading(denomination: number, year: number, locale: 'es' | 'en'): string {
  return `${formatDenomination(denomination, locale)} pesos · ${year}`;
}

function errorCards(): ColombiaErrorCard[] {
  return colombiaErrorNotes.flatMap((note) =>
    notePieces(note).map((piece) => {
      const key = holdingSortKey(piece.id);
      return {
        note,
        piece,
        denomination: key.denomination,
        year: key.year,
      };
    }),
  );
}

/** Groups error notes by year, then denomination (ascending within each year). */
export function errorGroups(): ColombiaErrorGroup[] {
  const byKey = new Map<string, ColombiaErrorGroup>();

  for (const card of errorCards()) {
    const key = `${card.year}-${card.denomination}`;
    const existing = byKey.get(key);
    if (existing) {
      existing.cards.push(card);
      continue;
    }
    byKey.set(key, {
      year: card.year,
      denomination: card.denomination,
      heading: {
        es: errorGroupHeading(card.denomination, card.year, 'es'),
        en: errorGroupHeading(card.denomination, card.year, 'en'),
      },
      cards: [card],
    });
  }

  const groups = [...byKey.values()];
  groups.sort((a, b) => a.year - b.year || a.denomination - b.denomination);
  for (const group of groups) {
    group.cards.sort((a, b) => a.piece.id.localeCompare(b.piece.id));
  }
  return groups;
}

export function hasErrorNotes(): boolean {
  return colombiaErrorNotes.length > 0;
}

/** Flat list of error cards in year/denomination order for the series grid. */
export function errorNoteCards(): ColombiaErrorCard[] {
  return errorGroups().flatMap((group) => group.cards);
}
