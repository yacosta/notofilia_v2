import type { Locale } from '../lib/locale-paths';

export const pieceChromeCopy = {
  es: {
    prev: 'Pieza anterior',
    next: 'Pieza siguiente',
    relatedHeading: 'Piezas relacionadas',
    relatedLead: 'Otras fichas del mismo emisor o de la misma época en esta vitrina.',
  },
  en: {
    prev: 'Previous piece',
    next: 'Next piece',
    relatedHeading: 'Related pieces',
    relatedLead: 'Other records from the same issuer or era in this case.',
  },
} as const;

export function pieceChrome(locale: Locale) {
  return pieceChromeCopy[locale];
}
