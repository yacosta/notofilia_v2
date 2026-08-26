export type LocalizedText = { es: string; en: string };

export type CatalogSource = {
  href: string;
  es: string;
  en: string;
  note?: LocalizedText;
};
