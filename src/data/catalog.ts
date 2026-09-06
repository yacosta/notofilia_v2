export type LocalizedText = { es: string; en: string };

export type CatalogSource = {
  href: string;
  es: string;
  en: string;
  note?: LocalizedText;
};

/** First occurrence of each `href` wins. Piece pages must not inherit unused series lists. */
export function uniqueCatalogSources(sources: CatalogSource[]): CatalogSource[] {
  return sources.filter(
    (source, index, list) => list.findIndex((entry) => entry.href === source.href) === index,
  );
}

/** Inline catalog prose: plain text or an external link rendered as a real `<a>`. */
export type CatalogProsePart =
  | { text: LocalizedText }
  | { href: string; label: LocalizedText };

export function catalogProseText(parts: CatalogProsePart[], locale: keyof LocalizedText): string {
  return parts
    .map((part) => ('href' in part ? part.label[locale] : part.text[locale]))
    .join('');
}

export function isCatalogProseParts(value: unknown): value is CatalogProsePart[] {
  if (!Array.isArray(value) || value.length === 0) return false;
  const first = value[0];
  return typeof first === 'object' && first !== null && ('href' in first || 'text' in first);
}
