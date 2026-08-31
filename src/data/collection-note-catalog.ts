import type { CatalogSource, LocalizedText } from './catalog';
import { chinaNotes, notePath as chinaNotePath } from './china';
import { canadaNotes, notePath as canadaNotePath } from './canada-polymer';
import { englandNotes, notePath as englandNotePath } from './england-polymer';
import { malaysiaNotes, notePath as malaysiaNotePath } from './malaysia-polymer';
import { colombiaNotes, notePath as colombiaNotePath, notePieces } from './colombia-notes';
import { unitedStatesNotes, notePath as usaNotePath } from './estados-unidos';
import { mpcVietnamNotes, notePath as mpcNotePath } from './mpc-vietnam';
import { NOTAFILIA_PATH } from './notafilia';
import { victoryNotes, notePath as victoryNotePath } from './philippines-victory-66';
import { localizePath, type Locale } from '../lib/locale-paths';
import {
  type TypeCatalogCountry,
  type TypeCatalogDocument,
  type TypeCatalogEra,
  type TypeCatalogFilter,
  type TypeCatalogFlag,
} from '../lib/type-catalog';

export const NOTAFILIA_NOTES_CATALOG_PATH = `${NOTAFILIA_PATH}catalogo/`;

export const COUNTRY_LABELS: Record<TypeCatalogCountry, LocalizedText> = {
  CO: { es: 'Colombia', en: 'Colombia' },
  US: { es: 'Estados Unidos', en: 'United States' },
  PH: { es: 'Filipinas', en: 'Philippines' },
  CN: { es: 'China', en: 'China' },
  MY: { es: 'Malasia', en: 'Malaysia' },
  GB: { es: 'Inglaterra', en: 'England' },
  CA: { es: 'Canadá', en: 'Canada' },
};

type CollectionSeed = {
  id: string;
  country: TypeCatalogCountry;
  href: string;
  title: LocalizedText;
  dek: LocalizedText;
  pick: string;
  serial: string;
  issuer: LocalizedText;
  year: string;
  era: TypeCatalogEra;
  flags: TypeCatalogFlag[];
  image: string;
  imageAlt: LocalizedText;
};

function yearFromText(...parts: string[]): string {
  for (const part of parts) {
    const match = part.match(/(1[789]\d{2}|20\d{2})/);
    if (match?.[1]) return match[1];
  }
  return '';
}

function flagsFrom(...parts: string[]): TypeCatalogFlag[] {
  const flags: TypeCatalogFlag[] = ['holding'];
  const blob = parts.join(' ');
  if (/specimen|espécimen|especimen/i.test(blob)) flags.push('specimen');
  if (/prueba|proof/i.test(blob)) flags.push('proof');
  if (/remainder/i.test(blob)) flags.push('remainder');
  if (/error|maculatura/i.test(blob)) flags.push('error');
  return flags;
}

function collectionSeeds(): CollectionSeed[] {
  const seeds: CollectionSeed[] = [];

  for (const note of colombiaNotes) {
    for (const piece of notePieces(note)) {
      const hash = piece.id !== note.id ? `#${piece.id}` : '';
      const era = (note.chapterId === 'errores' ? 'errores' : note.chapterId) as TypeCatalogEra;
      seeds.push({
        id: `co-${piece.id}`,
        country: 'CO',
        href: `${colombiaNotePath(note, 'es')}${hash}`,
        title: piece.title,
        dek: piece.lead,
        pick: piece.pick,
        serial: piece.serial,
        issuer: note.kicker,
        year: yearFromText(piece.printed.es, piece.title.es, note.kicker.es),
        era,
        flags: flagsFrom(piece.title.es, note.kicker.es, piece.pick, piece.lead.es),
        image: piece.images.front,
        imageAlt: piece.frontCaption,
      });
    }
  }

  for (const note of unitedStatesNotes) {
    seeds.push({
      id: `us-${note.id}`,
      country: 'US',
      href: usaNotePath(note, 'es'),
      title: note.title,
      dek: note.lead,
      pick: note.pick,
      serial: note.serial,
      issuer: note.kicker,
      year: yearFromText(note.printed.es, note.title.es, note.kicker.es),
      era: 'other',
      flags: flagsFrom(note.title.es, note.kicker.es, note.pick, note.lead.es),
      image: note.images.front,
      imageAlt: note.frontCaption,
    });
  }

  for (const note of mpcVietnamNotes) {
    seeds.push({
      id: `mpc-${note.id}`,
      country: 'US',
      href: mpcNotePath(note, 'es'),
      title: note.title,
      dek: note.lead,
      pick: note.pick,
      serial: note.serial,
      issuer: note.kicker,
      year: yearFromText(note.printed.es, note.title.es, note.kicker.es),
      era: 'other',
      flags: flagsFrom(note.title.es, note.kicker.es, note.pick, note.lead.es),
      image: note.images.front,
      imageAlt: note.frontCaption,
    });
  }

  for (const note of victoryNotes) {
    seeds.push({
      id: `ph-${note.id}`,
      country: 'PH',
      href: victoryNotePath(note, 'es'),
      title: note.title,
      dek: note.lead,
      pick: note.pick,
      serial: note.serial,
      issuer: note.kicker,
      year: yearFromText(note.printed.es, note.title.es, note.kicker.es) || '1944',
      era: 'other',
      flags: flagsFrom(note.title.es, note.kicker.es, note.pick, note.lead.es),
      image: note.images.front,
      imageAlt: note.frontCaption,
    });
  }

  for (const note of chinaNotes) {
    seeds.push({
      id: `cn-${note.id}`,
      country: 'CN',
      href: chinaNotePath(note, 'es'),
      title: note.title,
      dek: note.lead,
      pick: note.pick,
      serial: note.serial,
      issuer: note.kicker,
      year: yearFromText(note.printed.es, note.title.es, note.kicker.es) || '2000',
      era: 'other',
      flags: flagsFrom(note.title.es, note.kicker.es, note.pick, note.lead.es),
      image: note.images.front,
      imageAlt: note.frontCaption,
    });
  }

  for (const note of englandNotes) {
    seeds.push({
      id: `gb-${note.id}`,
      country: 'GB',
      href: englandNotePath(note, 'es'),
      title: note.title,
      dek: note.lead,
      pick: note.pick,
      serial: note.serial,
      issuer: note.kicker,
      year: yearFromText(note.printed.es, note.title.es, note.kicker.es) || '2016',
      era: 'other',
      flags: flagsFrom(note.title.es, note.kicker.es, note.pick, note.lead.es),
      image: note.images.front,
      imageAlt: note.frontCaption,
    });
  }

  for (const note of canadaNotes) {
    seeds.push({
      id: `ca-${note.id}`,
      country: 'CA',
      href: canadaNotePath(note, 'es'),
      title: note.title,
      dek: note.lead,
      pick: note.pick,
      serial: note.serial,
      issuer: note.kicker,
      year: yearFromText(note.printed.es, note.title.es, note.kicker.es) || '2013',
      era: 'other',
      flags: flagsFrom(note.title.es, note.kicker.es, note.pick, note.lead.es),
      image: note.images.front,
      imageAlt: note.frontCaption,
    });
  }

  for (const note of malaysiaNotes) {
    seeds.push({
      id: `my-${note.id}`,
      country: 'MY',
      href: malaysiaNotePath(note, 'es'),
      title: note.title,
      dek: note.lead,
      pick: note.pick,
      serial: note.serial,
      issuer: note.kicker,
      year: yearFromText(note.printed.es, note.title.es, note.kicker.es) || '2012',
      era: 'other',
      flags: flagsFrom(note.title.es, note.kicker.es, note.pick, note.lead.es),
      image: note.images.front,
      imageAlt: note.frontCaption,
    });
  }

  return seeds;
}

export function collectionNoteDocuments(
  locale: Locale,
  country?: TypeCatalogCountry,
): TypeCatalogDocument[] {
  return collectionSeeds()
    .filter((seed) => !country || seed.country === country)
    .map((seed) => {
      const title = seed.title[locale];
      const countryLabel = COUNTRY_LABELS[seed.country][locale];
      const image = seed.image || undefined;
      const flags = image ? seed.flags : [...seed.flags, 'pending' as const];
      return {
        id: `note:${seed.id}`,
        href: localizePath(seed.href, locale),
        title,
        dek: seed.dek[locale],
        pick: seed.pick,
        issuer: seed.issuer[locale],
        denomination: '',
        year: seed.year,
        era: seed.era,
        flags,
        country: seed.country,
        serial: seed.serial,
        image,
        imageAlt: seed.imageAlt[locale] || title,
        searchText: [
          title,
          seed.dek[locale],
          seed.pick,
          seed.serial,
          seed.issuer[locale],
          countryLabel,
          seed.year,
          seed.era,
          flags.join(' '),
        ].join(' '),
        inCollection: true,
      };
    });
}

export const collectionNoteFilters: TypeCatalogFilter[] = [
  'all',
  'co',
  'us',
  'ph',
  'cn',
  'my',
  'gb',
  'ca',
  'pending',
  'specimen',
  'remainder',
  'proof',
];

export const collectionNoteCatalogCopy = {
  es: {
    metaTitle: 'Catálogo visual de billetes | Notofilia',
    metaDescription:
      'Todos los billetes de la colección Notofilia, con buscador. Cuatro por fila, sin precios. La vitrina se actualiza al documentar cada pieza.',
    kicker: 'Colección virtual · Notafilia',
    title: 'Catálogo visual de billetes',
    dek: 'Cada ficha de papel moneda que ya está en la colección. Cuatro por fila, sin precios. Cuando se documenta un billete nuevo, aparece aquí.',
    nav: 'Catálogo visual',
    searchLabel: 'Buscar billetes de la colección',
    searchPlaceholder: 'País, Pick, serial, banco, año…',
    searchSubmit: 'Buscar',
    sortLabel: 'Ordenar billetes',
    filterLabel: 'Filtrar billetes',
    statusLabel: 'Billetes visibles',
    emptyQuery: 'Toda la colección. Escribe un término o elige un país.',
    noResults: 'No hay billetes para esta búsqueda.',
    resultCount: (count: number) => (count === 1 ? '1 billete' : `${count} billetes`),
    needsJs: 'La búsqueda en vivo necesita JavaScript. El formulario sigue disponible.',
    pendingImage: 'Imagen pendiente',
    inCollection: 'En la colección',
    viewNote: 'Ver la ficha',
    pickLabel: 'Pick',
    seriesLead: 'Las vitrinas por país siguen en la colección de notafilia.',
    seriesLink: 'Colección Virtual Notafilia',
    coinageLead: 'El catálogo visual de monedas de Colombia es una vitrina aparte.',
    coinageLink: 'Catálogo visual de monedas',
    sourcesTitle: 'Fuentes',
    statTypes: 'Billetes',
    statHoldings: 'Países',
    statImages: 'Con imagen',
    statYears: 'Años',
    sorts: {
      collection: 'País',
      pick: 'Pick',
      'title-asc': 'Título: A → Z',
      year: 'Año',
    },
    filters: {
      all: 'Todos',
      co: 'Colombia',
      us: 'Estados Unidos',
      ph: 'Filipinas',
      cn: 'China',
      my: 'Malasia',
      gb: 'Inglaterra',
      ca: 'Canadá',
      pending: 'Sin imagen',
      specimen: 'Especímenes',
      remainder: 'Remainders',
      proof: 'Pruebas',
    } satisfies Record<(typeof collectionNoteFilters)[number], string>,
  },
  en: {
    metaTitle: 'Visual banknote catalog | Notofilia',
    metaDescription:
      'Every banknote in the Notofilia collection, with search. Four to a row, no prices. The case updates as each piece is documented.',
    kicker: 'Virtual collection · Notaphily',
    title: 'Visual banknote catalog',
    dek: 'Every paper-money record already in the collection. Four to a row, no prices. When a new banknote is documented, it appears here.',
    nav: 'Visual catalog',
    searchLabel: 'Search banknotes in the collection',
    searchPlaceholder: 'Country, Pick, serial, bank, year…',
    searchSubmit: 'Search',
    sortLabel: 'Sort banknotes',
    filterLabel: 'Filter banknotes',
    statusLabel: 'Visible banknotes',
    emptyQuery: 'The whole collection. Type a term or choose a country.',
    noResults: 'No banknotes for this search.',
    resultCount: (count: number) => (count === 1 ? '1 banknote' : `${count} banknotes`),
    needsJs: 'Live search needs JavaScript. The form still works.',
    pendingImage: 'Image pending',
    inCollection: 'In the collection',
    viewNote: 'Open the note page',
    pickLabel: 'Pick',
    seriesLead: 'The country cases remain in the notaphily collection.',
    seriesLink: 'Virtual Notaphily Collection',
    coinageLead: 'The visual coin catalog of Colombia is a separate case.',
    coinageLink: 'Visual coin catalog',
    sourcesTitle: 'Sources',
    statTypes: 'Banknotes',
    statHoldings: 'Countries',
    statImages: 'With image',
    statYears: 'Years',
    sorts: {
      collection: 'Country',
      pick: 'Pick',
      'title-asc': 'Title: A → Z',
      year: 'Year',
    },
    filters: {
      all: 'All',
      co: 'Colombia',
      us: 'United States',
      ph: 'Philippines',
      cn: 'China',
      my: 'Malaysia',
      gb: 'England',
      ca: 'Canada',
      pending: 'No image',
      specimen: 'Specimens',
      remainder: 'Remainders',
      proof: 'Proofs',
    } satisfies Record<(typeof collectionNoteFilters)[number], string>,
  },
} as const;

export const collectionNoteSources: CatalogSource[] = [
  {
    href: 'https://www.banknote.ws/',
    es: 'Bank Note Museum',
    en: 'Bank Note Museum',
    note: {
      es: 'Índice Pick de emisores. Esta vitrina muestra ejemplares de la colección, no lotes de subasta.',
      en: 'Pick index of issuers. This case shows collection pieces, not auction lots.',
    },
  },
];

export function collectionNoteCatalogPath(locale: Locale): string {
  return localizePath(NOTAFILIA_NOTES_CATALOG_PATH, locale);
}

export function collectionNoteCountryCount(documents: TypeCatalogDocument[]): number {
  return new Set(documents.map((doc) => doc.country).filter(Boolean)).size;
}
