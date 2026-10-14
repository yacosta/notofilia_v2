import type { CatalogSource } from './catalog';
import type { Locale } from '../lib/locale-paths';

export const POPAYAN_1_ESCUDO_CARLOS_IV_PATH =
  '/coleccion/colombia-numismatica/1-escudo-carlos-iv-popayan-1792-1808/';
export const POPAYAN_1_ESCUDO_CARLOS_IV_PATH_EN =
  '/collection/colombia-numismatics/1-escudo-charles-iv-popayan-1792-1808/';

/** Same composites the piece pages already publish. ColombiaCoinagePage uses 1536×1024. */
export const POPAYAN_1_ESCUDO_CARLOS_IV_COMPOSITE = {
  width: 1536,
  height: 1024,
} as const;

export const POPAYAN_1_ESCUDO_CARLOS_IV_HOLDING_IDS = [
  '1-escudo-popayan-1795-p-jf',
  '1-escudo-popayan-1800-p-jf',
  '1-escudo-popayan-1801-p-jf',
  '1-escudo-popayan-1806-p-jf',
  '1-escudo-popayan-1808-p-jf',
] as const;

export type PopayanEscudoFact = {
  label: string;
  value: string;
  wide?: boolean;
};

export type PopayanEscudoSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type PopayanEscudoArchiveImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  wide?: boolean;
  featureAfterLead?: boolean;
};

export type PopayanEscudoCopy = {
  nav: string;
  home: string;
  numismatica: string;
  series: string;
  breadcrumb: string;
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  title: string;
  lead: string;
  published: string;
  dateLabel: string;
  factsHeading: string;
  facts: PopayanEscudoFact[];
  imagesNote: string;
  holdingsHeading: string;
  holdingsAria: string;
  viewCoin: string;
  holding1795Label: string;
  holding1795Href: string;
  holding1800Label: string;
  holding1800Href: string;
  holding1801Label: string;
  holding1801Href: string;
  holding1806Label: string;
  holding1806Href: string;
  holding1808Label: string;
  holding1808Href: string;
  archiveImagesHeading: string;
  archiveImagesLead: string;
  archiveImages: PopayanEscudoArchiveImage[];
  sections: PopayanEscudoSection[];
  relatedLead: string;
  relatedLabel: string;
  relatedHref: string;
  sourcesTitle: string;
  backSeries: string;
  coinLink: string;
  chapterLink: string;
};

export const popayan1EscudoCarlosIvCopy: Record<Locale, PopayanEscudoCopy> = {
  es: {
    nav: '1 escudo de Popayán, Carlos IV',
    home: 'Inicio',
    numismatica: 'Numismática',
    series: 'Colombia-Numismática',
    breadcrumb: 'Migas de pan',
    metaTitle: '1 escudo de Popayán, Carlos IV, 1792–1808',
    metaDescription:
      'El 1 escudo de oro de Carlos IV, ceca de Popayán (P), 1792–1808: KM# 56.2, Hernández 688 y Fr# 59. Esta vitrina guarda los discos P–JF de 1795, 1800, 1801, 1806 y 1808. Sin precios.',
    kicker: 'Colombia-Numismática · oro colonial',
    title: '1 Escudo (Oro) – Carlos IV – Ceca de Popayán (1792–1808)',
    lead:
      'Un escudo de oro de la casa de Popayán, marca P, labrado a nombre de Carlos IV. Sigue a las emisiones de transición que aún llevaban el busto de Carlos III.',
    published: '2026-10-12',
    dateLabel: '12 de octubre de 2026',
    factsHeading: 'Datos',
    facts: [
      { label: 'Emisor', value: 'Corona española' },
      { label: 'Soberano', value: 'Carlos IV' },
      { label: 'Ceca', value: 'Popayán (P)' },
      { label: 'Años', value: '1792–1808' },
      { label: 'Denominación', value: '1 escudo' },
      { label: 'Metal', value: 'Oro .875 (tipo)' },
      { label: 'Módulo', value: 'c. 3,38 g · 18–19 mm' },
      { label: 'Ensaye ordinario', value: 'JF' },
      { label: 'Catálogo', value: 'KM# 56.2 · Hernández 688 · Fr# 59', wide: true },
    ],
    imagesNote: 'Cinco discos P–JF de este tipo están en la colección.',
    holdingsHeading: 'En la colección',
    holdingsAria: 'Fichas del 1 escudo de Popayán de Carlos IV',
    viewCoin: 'Abrir la ficha',
    holding1795Label: '1 escudo · Popayán P–JF · 1795',
    holding1795Href: '/coleccion/colombia-numismatica/1-escudo-popayan-1795-p-jf/',
    holding1800Label: '1 escudo · Popayán P–JF · 1800',
    holding1800Href: '/coleccion/colombia-numismatica/1-escudo-popayan-1800-p-jf/',
    holding1801Label: '1 escudo · Popayán P–JF · 1801',
    holding1801Href: '/coleccion/colombia-numismatica/1-escudo-popayan-1801-p-jf/',
    holding1806Label: '1 escudo · Popayán P–JF · 1806',
    holding1806Href: '/coleccion/colombia-numismatica/1-escudo-popayan-1806-p-jf/',
    holding1808Label: '1 escudo · Popayán P–JF · 1808',
    holding1808Href: '/coleccion/colombia-numismatica/1-escudo-popayan-1808-p-jf/',
    archiveImagesHeading: 'La casa de moneda en imágenes de archivo',
    archiveImagesLead:
      'Los planos y la fachada de la Real Casa de Moneda de Popayán ayudan a leer el tipo como parte de una infraestructura: talleres, patios y dependencias donde el oro colonial pasaba de metal a moneda.',
    archiveImages: [
      {
        src: '/uploads/casa-de-moneda-popayan-fachada-colonial.jpg',
        width: 3456,
        height: 1216,
        alt: 'Antigua fachada colonial de la Casa de Moneda de Popayán, con la entrada principal sobre la Calle Real.',
        caption:
          'Antigua fachada colonial de la Casa de Moneda. Fotografía propiedad de ResearchGate y extraída del Archivo Nacional de Bogotá.',
        wide: true,
        featureAfterLead: true,
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Plano_1_de_la_Real_Casa_de_Moneda_de_Popayan_1771_-_AGN.jpg',
        width: 2500,
        height: 1612,
        alt: 'Plano de la Real Casa de Moneda de Popayán fechado en 1771, con la distribución de patios y dependencias.',
        caption:
          'Plano 1 de la Real Casa de Moneda de Popayán, 1771. Archivo General de la Nación, vía Wikimedia Commons.',
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Plano_de_la_Casa_de_Moneda_de_Popayan_en_1866_por_Eladio_Vergara_-_AGN.jpg',
        width: 1919,
        height: 2500,
        alt: 'Plano de la Casa de Moneda de Popayán en 1866 por Eladio Vergara.',
        caption:
          'Plano de la Casa de Moneda de Popayán en 1866, por Eladio Vergara. Archivo General de la Nación, vía Wikimedia Commons.',
      },
    ],
    sections: [
      {
        id: 'tipo',
        title: 'El tipo de Popayán',
        paragraphs: [
          'El 1 escudo de oro labrado en la Ceca de Popayán —marca P— bajo Carlos IV marca un tramo claro de la moneda colonial del Nuevo Reino. Se acuñó con regularidad entre 1792 y 1808, y sucede a las emisiones de transición que aún portaban el busto de Carlos III. La casa estaba en labores desde 1758.',
          'Eso es el tipo KM# 56.2: leyenda y busto propios de Carlos IV, oro de cordoncillo. No es el KM# 56.1 de Santa Fe, con marca NR–JJ. Tampoco es el tipo de transición con leyenda de Carlos IV y busto de Carlos III —Hernández Cód. 686, fechas 1789 y 1790, ensaye P–SF—. El 2 escudos de 1791 P–SF de esta colección pertenece a esa generación anterior (KM# 51.2), no a este módulo de un escudo. Esta vitrina guarda cinco discos P–JF: 1795, 1800, 1801, 1806 y 1808.',
        ],
      },
      {
        id: 'composicion',
        title: 'Composición y módulo',
        paragraphs: [
          'El tipo se labra en oro de ley .875. El peso teórico es de unos 3,38 g —Hernández anota 3,389 g— y el diámetro, de 18 a 19 mm; Numista da 19 mm. Son cifras de catálogo: los cinco discos de esta vitrina no se pesaron ni se midieron. Numista da al tipo el cordoncillo y la alineación de medalla. No hay una tirada verificada; las tablas BanRep de moneda empiezan en 1987.',
        ],
      },
      {
        id: 'anverso',
        title: 'Anverso',
        paragraphs: [
          'Presenta el busto blindado y drapeado de Carlos IV a la derecha, la leyenda real y la fecha de acuñación en el exergo. La leyenda, normalizada, lee CAROL · IIII · D · G · HISP · ET IND · R · [año] (IIII, no IV). Abre Carolus IIII Dei Gratia Hispaniarum et Indiarum Rex: «Carlos IV, por la gracia de Dios, rey de las Españas y de las Indias».',
        ],
      },
      {
        id: 'reverso',
        title: 'Reverso',
        paragraphs: [
          'Muestra el escudo de armas coronado, rodeado por el Toisón de Oro. A los lados del escudo van la denominación —1 a la izquierda, S a la derecha—, la marca de Popayán (P) y las iniciales de ensaye. El 1 y la S marcan un escudo, no un 15. El lema del tipo, IN · UTROQ · FELIX · A · D ·, abrevia In utroque felix, auspice Deo.',
        ],
      },
      {
        id: 'ensayadores',
        title: 'Ensayadores (JF)',
        paragraphs: [
          'En este ciclo (1792–1808) el ensaye ordinario de Popayán en el tipo KM# 56.2 es JF. Hernández reserva el Cód. 688 a esa combinación: leyenda y busto de Carlos IV, marca P e iniciales JF. El P–JT de 1804–1806 es otra fila —Cód. 689; CoinVarieties lo da como Restrepo 85.36—. Numista no confirma el P–JT en Hernández para el 1806. Esta vitrina no tiene un P–JT.',
        ],
      },
      {
        id: 'referencias',
        title: 'Referencias de catálogo',
        paragraphs: [
          'El tipo se clasifica como KM# 56.2 y, en la numismática colombiana, como Hernández 688. Friedberg lo cataloga Fr# 59. Numista reúne esas cifras en N#52837. Restrepo, Calicó y Cayón numeran por fecha: el 1795 P–JF es Restrepo 85.8 y Cayón 14047; el 1801 P–JF, Restrepo 85.20 y Calicó 1160; el 1806 P–JF, Restrepo 85.34, Calicó 1168 y Cayón 14127; el 1808 P–JF, Restrepo 85.40 y Cayón 14140. Esos números nombran el tipo o la fecha. El ejemplar es el disco fotografiado en cada ficha.',
        ],
      },
      {
        id: 'archivo',
        title: 'Notas de archivo',
        paragraphs: [
          'La existencia de un 1808 de Carlos IV en Popayán sigue en discusión. Numista anota que el catálogo nacional de P. P. Hernández no confirma ese año ni en Nuevo Reino ni en Popayán, aunque figura en registros foráneos. El Cód. 688 nombra el tipo P–JF, no una fila fechada 1808 ya verificada. CoinVarieties recoge el 1808 P–JF como Restrepo 85.40 y señala la sobrefecha 1808/7; en el disco de esta colección el último dígito se lee 8 y no se afirma el 7 subyacente. El 1 escudo de Fernando VII de la misma ceca y el mismo año (KM# 64.2, Hernández 691, Fr# 66) conserva el busto de Carlos IV y cambia la leyenda a FERDND VII; no es este tipo.',
          'No se publica aquí un censo de encapsulados ni un martillo. Los cinco ejemplares de esta vitrina circulan gastados, con el retrato a menudo aplanado —un rasgo frecuente de los troqueles de la época, no un grado. Las fotografías no autentican el metal.',
        ],
      },
    ],
    relatedLead: 'El 2 escudos de 1791 P–SF, con el busto de Carlos III, es la generación de transición de la misma casa.',
    relatedLabel: '2 escudos de Popayán, 1791 P–SF',
    relatedHref: '/coleccion/colombia-numismatica/2-escudos-popayan-1791-p-sf/',
    sourcesTitle: 'Fuentes',
    backSeries: 'Volver a Colombia-Numismática',
    coinLink: 'El tipo, de 1792 a 1808, está en su propia página.',
    chapterLink: 'Leer el 1 escudo de Popayán de Carlos IV (1792–1808)',
  },
  en: {
    nav: 'Popayán 1 escudo, Charles IV',
    home: 'Home',
    numismatica: 'Numismatics',
    series: 'Colombia-Numismatics',
    breadcrumb: 'Breadcrumb',
    metaTitle: 'Popayán 1 escudo, Charles IV, 1792–1808',
    metaDescription:
      'Charles IV’s gold 1 escudo, Popayán mint (P), 1792–1808: KM# 56.2, Hernández 688, and Fr# 59. This case holds the 1795, 1800, 1801, 1806, and 1808 P–JF discs. No prices.',
    kicker: 'Colombia-Numismatics · colonial gold',
    title: '1 Escudo (Gold) – Charles IV – Popayán Mint (1792–1808)',
    lead:
      'A gold escudo of the Popayán mint, mark P, struck in the name of Charles IV. It follows the transitional issues that still bore the bust of Charles III.',
    published: '2026-10-12',
    dateLabel: '12 October 2026',
    factsHeading: 'Facts',
    facts: [
      { label: 'Issuer', value: 'Spanish Crown' },
      { label: 'Sovereign', value: 'Charles IV' },
      { label: 'Mint', value: 'Popayán (P)' },
      { label: 'Years', value: '1792–1808' },
      { label: 'Denomination', value: '1 escudo' },
      { label: 'Metal', value: 'Gold .875 (type specification)' },
      { label: 'Module', value: 'c. 3.38 g · 18–19 mm' },
      { label: 'Ordinary assayer', value: 'JF' },
      { label: 'Catalogue', value: 'KM# 56.2 · Hernández 688 · Fr# 59', wide: true },
    ],
    imagesNote: 'Five P–JF discs of this type are in the collection.',
    holdingsHeading: 'In the collection',
    holdingsAria: 'Records of the Popayán 1 escudo of Charles IV',
    viewCoin: 'Open the record',
    holding1795Label: '1 escudo · Popayán P–JF · 1795',
    holding1795Href: '/coleccion/colombia-numismatica/1-escudo-popayan-1795-p-jf/',
    holding1800Label: '1 escudo · Popayán P–JF · 1800',
    holding1800Href: '/coleccion/colombia-numismatica/1-escudo-popayan-1800-p-jf/',
    holding1801Label: '1 escudo · Popayán P–JF · 1801',
    holding1801Href: '/coleccion/colombia-numismatica/1-escudo-popayan-1801-p-jf/',
    holding1806Label: '1 escudo · Popayán P–JF · 1806',
    holding1806Href: '/coleccion/colombia-numismatica/1-escudo-popayan-1806-p-jf/',
    holding1808Label: '1 escudo · Popayán P–JF · 1808',
    holding1808Href: '/coleccion/colombia-numismatica/1-escudo-popayan-1808-p-jf/',
    archiveImagesHeading: 'The mint in archival images',
    archiveImagesLead:
      'The plans and façade of the Popayán mint place the type inside its working infrastructure: shops, courtyards, and service rooms where colonial gold moved from metal to coin.',
    archiveImages: [
      {
        src: '/uploads/casa-de-moneda-popayan-fachada-colonial.jpg',
        width: 3456,
        height: 1216,
        alt: 'Old colonial façade of the Popayán Mint, with the main entrance on Calle Real.',
        caption:
          'Old colonial façade of the Mint. Photograph owned by ResearchGate and extracted from the Archivo Nacional de Bogotá.',
        wide: true,
        featureAfterLead: true,
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Plano_1_de_la_Real_Casa_de_Moneda_de_Popayan_1771_-_AGN.jpg',
        width: 2500,
        height: 1612,
        alt: 'Plan of the Royal Mint of Popayán dated 1771, showing courtyards and service rooms.',
        caption:
          'Plan 1 of the Royal Mint of Popayán, 1771. Archivo General de la Nación, via Wikimedia Commons.',
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Plano_de_la_Casa_de_Moneda_de_Popayan_en_1866_por_Eladio_Vergara_-_AGN.jpg',
        width: 1919,
        height: 2500,
        alt: 'Plan of the Popayán Mint in 1866 by Eladio Vergara.',
        caption:
          'Plan of the Popayán Mint in 1866, by Eladio Vergara. Archivo General de la Nación, via Wikimedia Commons.',
      },
    ],
    sections: [
      {
        id: 'tipo',
        title: 'The Popayán type',
        paragraphs: [
          'The gold 1 escudo struck at the Popayán Mint — mint mark P — under Charles IV marks a clear stretch of colonial coinage in the New Kingdom. It was struck regularly between 1792 and 1808, and it succeeds the transitional issues that still carried the bust of Charles III. The house had been at work since 1758.',
          'That is type KM# 56.2: Charles IV’s own legend and bust, milled gold. It is not Santa Fe’s KM# 56.1, with mintmark NR–JJ. It is not the transitional type with Charles IV’s legend and Charles III’s bust — Hernández Cód. 686, dates 1789 and 1790, assayer P–SF. This collection’s 1791 P–SF 2 escudos belongs to that earlier generation (KM# 51.2), not to this one-escudo module. This case holds five P–JF discs: 1795, 1800, 1801, 1806, and 1808.',
        ],
      },
      {
        id: 'composicion',
        title: 'Composition and module',
        paragraphs: [
          'The type is struck in .875 fine gold. The theoretical weight is about 3.38 g — Hernández records 3.389 g — and the diameter spans 18 to 19 mm; Numista gives 19 mm. Those are catalogue figures: the five discs in this case were not weighed or measured. Numista gives the type a reeded edge and medal alignment. No mintage is verified; BanRep’s coin tables begin in 1987.',
        ],
      },
      {
        id: 'anverso',
        title: 'Obverse',
        paragraphs: [
          'It shows the armored and draped bust of Charles IV facing right, the royal legend, and the date in the exergue. Normalized legend: CAROL · IIII · D · G · HISP · ET IND · R · [year] (IIII, not IV). It expands to Carolus IIII Dei Gratia Hispaniarum et Indiarum Rex: “Charles IV, by the grace of God, king of the Spains and the Indies.”',
        ],
      },
      {
        id: 'reverso',
        title: 'Reverse',
        paragraphs: [
          'It displays the crowned coat of arms encircled by the Order of the Golden Fleece. Flanking the shield are the denomination — 1 on the left, S on the right — the Popayán mint mark (P), and the assayer initials. The 1 and the S mark one escudo, not 15. The motto of the type, IN · UTROQ · FELIX · A · D ·, stands for In utroque felix, auspice Deo.',
        ],
      },
      {
        id: 'ensayadores',
        title: 'Assayers (JF)',
        paragraphs: [
          'Throughout this run (1792–1808) the ordinary Popayán assay on type KM# 56.2 is JF. Hernández reserves Cód. 688 for that combination: Charles IV’s legend and bust, mark P, and initials JF. The 1804–1806 P–JT is another row — Cód. 689; CoinVarieties gives it as Restrepo 85.36. Numista does not confirm the P–JT in Hernández for 1806. This case does not hold a P–JT.',
        ],
      },
      {
        id: 'referencias',
        title: 'Catalog references',
        paragraphs: [
          'The type is classified as KM# 56.2 and, in Colombian numismatics, as Hernández 688. Friedberg lists it as Fr# 59. Numista gathers those figures at N#52837. Restrepo, Calicó, and Cayón number by date: the 1795 P–JF is Restrepo 85.8 and Cayón 14047; the 1801 P–JF, Restrepo 85.20 and Calicó 1160; the 1806 P–JF, Restrepo 85.34, Calicó 1168, and Cayón 14127; the 1808 P–JF, Restrepo 85.40 and Cayón 14140. Those numbers name the type or the date. The specimen is the disc photographed on each record.',
        ],
      },
      {
        id: 'archivo',
        title: 'Archival notes',
        paragraphs: [
          'The existence of an 1808 Charles IV strike at Popayán remains under discussion. Numista notes that P. P. Hernández’s Colombian national catalogue does not confirm that year at either Nuevo Reino or Popayán, though it appears in some foreign listings. Cód. 688 names the P–JF type, not a verified 1808 row. CoinVarieties records the 1808 P–JF as Restrepo 85.40 and notes Restrepo’s 1808/7 overdate; on this collection’s disc the last digit reads 8, and an underlying 7 is not asserted. The Ferdinand VII 1 escudo of the same mint and year (KM# 64.2, Hernández 691, Fr# 66) keeps the Charles IV bust and changes the legend to FERDND VII; that is not this type.',
          'No slab census and no hammer are published here. The five specimens in this case circulated worn, often with a flattened portrait — a frequent trait of the period’s dies, not a grade. Photographs do not authenticate the metal.',
        ],
      },
    ],
    relatedLead: 'The 1791 P–SF 2 escudos, with the bust of Charles III, is the transitional generation of the same house.',
    relatedLabel: 'Popayán 2 escudos, 1791 P–SF',
    relatedHref: '/coleccion/colombia-numismatica/2-escudos-popayan-1791-p-sf/',
    sourcesTitle: 'Sources',
    backSeries: 'Back to Colombia-Numismatics',
    coinLink: 'The type, from 1792 to 1808, has its own page.',
    chapterLink: 'Read the Popayán 1 escudo of Charles IV (1792–1808)',
  },
};

export const popayan1EscudoCarlosIvSources: CatalogSource[] = [
  {
    href: 'https://en.numista.com/52837',
    es: 'Numista — 1 escudo, Carlos IV, Colombia (N#52837)',
    en: 'Numista — 1 escudo, Charles IV, Colombia (N#52837)',
    note: {
      es: 'KM# 56.2; oro de tipo .875; ceca P de Popayán; 3,38 g y 19 mm. Lista 1808 P–JF y anota que Hernández no confirma ese año. No se cita aquí una tirada.',
      en: 'KM# 56.2; type gold .875; P mint of Popayán; 3.38 g and 19 mm. Lists 1808 P–JF and notes that Hernández does not confirm that year. No mintage is cited here.',
    },
  },
  {
    href: 'https://en.numista.com/catalogue/literature.php?id=100183',
    es: 'Hernández — Monedas y billetes de Colombia, 8.ª ed. 2023 (Numista L100183)',
    en: 'Hernández — Coins and Banknotes of Colombia, 8th ed. 2023 (Numista L100183)',
    note: {
      es: 'El Cód. 688 es el tipo de Popayán con leyenda y busto de Carlos IV y ensaye P–JF. Lei 0,875 y peso 3,389 g. Numista indica que esa obra no confirma el año 1808. No se copian columnas de precio ni láminas.',
      en: 'Cód. 688 is the Popayán type with Charles IV’s legend and bust and the P–JF assay. Fineness 0.875 and weight 3.389 g. Numista states that this book does not confirm the year 1808. Price columns and plates are not copied.',
    },
  },
  {
    href: 'https://coinvarieties.com/index.php/Colombia_1795-P_JF_escudo',
    es: 'CoinVarieties — 1 escudo de Popayán, Carlos IV, 1795 P–JF',
    en: 'CoinVarieties — Popayán 1 escudo, Charles IV, 1795 P–JF',
    note: {
      es: 'Cayón 14047, Friedberg 59 y KM# 56.2. Deja la tirada sin cifra. El lote que ilustra es otro ejemplar; no se publican precios.',
      en: 'Cayón 14047, Friedberg 59, and KM# 56.2. Leaves the mintage unstated. The lot it illustrates is another specimen; prices are not published.',
    },
  },
  {
    href: 'https://coinvarieties.com/index.php/Colombia_1806-P_JF_escudo',
    es: 'CoinVarieties — 1 escudo de Popayán, Carlos IV, 1806 P–JF',
    en: 'CoinVarieties — Popayán 1 escudo, Charles IV, 1806 P–JF',
    note: {
      es: 'Cayón 14127, Friedberg 59 y KM# 56.2. Deja la tirada sin cifra. El lote que ilustra es otro ejemplar; no se publican precios.',
      en: 'Cayón 14127, Friedberg 59, and KM# 56.2. Leaves the mintage unstated. The lot it illustrates is another specimen; prices are not published.',
    },
  },
  {
    href: 'https://coinvarieties.com/index.php/Colombia_1808-P_JF_escudo_Fr-59',
    es: 'CoinVarieties — 1 escudo de Popayán, Carlos IV, 1808 P–JF',
    en: 'CoinVarieties — Popayán 1 escudo, Charles IV, 1808 P–JF',
    note: {
      es: 'Cayón 14140, Restrepo 85.40, KM# 56.2 y Friedberg 59. Recuerda la sobrefecha 1808/7 de Restrepo, que las fichas de esta vitrina no afirman. No se publican precios.',
      en: 'Cayón 14140, Restrepo 85.40, KM# 56.2, and Friedberg 59. Recalls Restrepo’s 1808/7 overdate, which the records in this case do not assert. Prices are not published.',
    },
  },
  {
    href: 'https://en.numista.com/61388',
    es: 'Numista — 1 escudo, Fernando VII con busto de Carlos IV (N#61388)',
    en: 'Numista — 1 escudo, Ferdinand VII with the bust of Charles IV (N#61388)',
    note: {
      es: 'El 1808 P–JF de esa serie es KM# 64.2, Hernández 691, con leyenda FERDND VII. No es este tipo.',
      en: 'The 1808 P–JF of that series is KM# 64.2, Hernández 691, with the legend FERDND VII. That is not this type.',
    },
  },
  {
    href: 'https://enciclopedia.banrepcultural.org/Casa_de_acu%C3%B1aci%C3%B3n_de_moneda_de_Popay%C3%A1n',
    es: 'Enciclopedia Banrepcultural — Casa de acuñación de Popayán',
    en: 'Banrepcultural Encyclopedia — The Popayán mint',
    note: {
      es: 'La casa comenzó a labrar en 1758. Contexto de ceca, no autenticación de un disco.',
      en: 'The house began striking in 1758. Mint context, not authentication of a disc.',
    },
  },
  {
    href: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Plano_1_de_la_Real_Casa_de_Moneda_de_Popayan_1771_-_AGN.jpg?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original',
    es: 'Wikimedia Commons / AGN — Plano 1 de la Real Casa de Moneda de Popayán, 1771',
    en: 'Wikimedia Commons / AGN — Plan 1 of the Royal Mint of Popayán, 1771',
    note: {
      es: 'Plano histórico del edificio de la ceca, atribuido al Archivo General de la Nación. Se usa como contexto arquitectónico, no como fuente de clasificación numismática.',
      en: 'Historical plan of the mint building, attributed to the Archivo General de la Nación. Used for architectural context, not as a numismatic classification source.',
    },
  },
  {
    href: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Plano_de_la_Casa_de_Moneda_de_Popayan_en_1866_por_Eladio_Vergara_-_AGN.jpg?utm_source=es.wikipedia.org&utm_campaign=imageinfo&utm_content=original',
    es: 'Wikimedia Commons / AGN — Plano de la Casa de Moneda de Popayán en 1866, Eladio Vergara',
    en: 'Wikimedia Commons / AGN — Plan of the Popayán Mint in 1866, Eladio Vergara',
    note: {
      es: 'Plano histórico posterior a la etapa de Carlos IV. Se incluye para ubicar la casa de moneda y su edificio, no para fechar los ejemplares.',
      en: 'Historical plan made after Charles IV’s period. Included to locate the mint and its building, not to date the specimens.',
    },
  },
  {
    href: '/uploads/casa-de-moneda-popayan-fachada-colonial.jpg',
    es: 'ResearchGate / Archivo Nacional de Bogotá — Antigua fachada colonial de la Casa de Moneda',
    en: 'ResearchGate / Archivo Nacional de Bogotá — Old colonial façade of the Mint',
    note: {
      es: 'Imagen contextual de la fachada colonial. Crédito indicado por la fuente: fotografía propiedad de ResearchGate y extraída del Archivo Nacional de Bogotá.',
      en: 'Contextual image of the colonial façade. Credit supplied by the source: photograph owned by ResearchGate and extracted from the Archivo Nacional de Bogotá.',
    },
  },
  {
    href: 'https://coins.ha.com/itm/colombia/colombia-charles-iv-gold-escudo-1801-p-jf-au58-ngc-/a/232321-64310.s',
    es: 'Heritage — 1 escudo de Popayán, Carlos IV, 1801 P–JF',
    en: 'Heritage — Popayán 1 escudo, Charles IV, 1801 P–JF',
    note: {
      es: 'Comparable de subasta de la combinación 1801 P–JF. No es un ejemplar de esta vitrina; no se publican precios ni el grado de esa pieza.',
      en: 'Auction comparable for the 1801 P–JF combination. Not a specimen in this case; prices and that coin’s grade are not published.',
    },
  },
  {
    href: 'https://www.numisbids.com/sale/10611/lot/1048',
    es: 'Sedwick / NumisBids — 1 escudo de Popayán, Carlos IV, 1801 JF',
    en: 'Sedwick / NumisBids — Popayán 1 escudo, Charles IV, 1801 JF',
    note: {
      es: 'Reúne KM# 56.2, Restrepo 85.20, Calicó 1160 y Friedberg 59. Comparable; no es una ficha de esta colección y no se publican precios.',
      en: 'Gathers KM# 56.2, Restrepo 85.20, Calicó 1160, and Friedberg 59. A comparable; not a record in this collection, and prices are not published.',
    },
  },
];

const popayan1EscudoCarlosIvCardAlts = {
  es: {
    '1-escudo-popayan-1795-p-jf':
      'Anverso y reverso del 1 escudo de Popayán de 1795 P–JF: busto de Carlos IV y fecha 1795; escudo coronado, 1 S y marcas P · JF.',
    '1-escudo-popayan-1800-p-jf':
      'Anverso y reverso del 1 escudo de Popayán de 1800 P–JF: busto de Carlos IV y fecha 1800; escudo coronado, 1 S y marcas P · JF.',
    '1-escudo-popayan-1801-p-jf':
      'Anverso y reverso del 1 escudo de Popayán de 1801 P–JF: busto de Carlos IV y fecha 1801; escudo coronado, 1 S y marcas P · JF.',
    '1-escudo-popayan-1806-p-jf':
      'Anverso y reverso del 1 escudo de Popayán de 1806 P–JF: busto de Carlos IV y fecha 1806; escudo coronado, 1 S y marcas P · JF.',
    '1-escudo-popayan-1808-p-jf':
      'Anverso y reverso del 1 escudo de Popayán de 1808 P–JF: busto de Carlos IV y fecha 1808; escudo coronado, 1 S y marcas P · JF.',
  },
  en: {
    '1-escudo-popayan-1795-p-jf':
      'Obverse and reverse of the 1795 Popayán 1 escudo P–JF: bust of Charles IV and the date 1795; crowned arms, 1 S, and marks P · JF.',
    '1-escudo-popayan-1800-p-jf':
      'Obverse and reverse of the 1800 Popayán 1 escudo P–JF: bust of Charles IV and the date 1800; crowned arms, 1 S, and marks P · JF.',
    '1-escudo-popayan-1801-p-jf':
      'Obverse and reverse of the 1801 Popayán 1 escudo P–JF: bust of Charles IV and the date 1801; crowned arms, 1 S, and marks P · JF.',
    '1-escudo-popayan-1806-p-jf':
      'Obverse and reverse of the 1806 Popayán 1 escudo P–JF: bust of Charles IV and the date 1806; crowned arms, 1 S, and marks P · JF.',
    '1-escudo-popayan-1808-p-jf':
      'Obverse and reverse of the 1808 Popayán 1 escudo P–JF: bust of Charles IV and the date 1808; crowned arms, 1 S, and marks P · JF.',
  },
} as const;

export function popayan1EscudoCarlosIvCardAlt(id: string, locale: Locale): string {
  const alt = (popayan1EscudoCarlosIvCardAlts[locale] as Record<string, string>)[id];
  if (!alt) throw new Error(`Missing Popayán 1 escudo card alt for ${id}`);
  return alt;
}

export function popayan1EscudoCarlosIvPath(locale: Locale): string {
  return locale === 'en' ? `/en${POPAYAN_1_ESCUDO_CARLOS_IV_PATH_EN}` : POPAYAN_1_ESCUDO_CARLOS_IV_PATH;
}

export const popayan1EscudoCarlosIvDedicatedSlugs = [
  POPAYAN_1_ESCUDO_CARLOS_IV_PATH.replace(/^\/|\/$/g, ''),
  POPAYAN_1_ESCUDO_CARLOS_IV_PATH_EN.replace(/^\/|\/$/g, ''),
] as const;
