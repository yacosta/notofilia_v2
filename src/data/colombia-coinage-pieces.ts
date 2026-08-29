import type { CatalogSource, LocalizedText } from './catalog';
import { COLOMBIA_COINAGE_PATH } from './colombia-coinage';

export type ColombiaCoinagePieceId = '1-4-real-santa-marta-1820';

export type ColombiaCoinagePiece = {
  id: ColombiaCoinagePieceId;
  path: string;
  chapterId: 'independencia';
  year: string;
  denomination: LocalizedText;
  metal: LocalizedText;
  mint: LocalizedText;
  reference: string;
  title: LocalizedText;
  kicker: LocalizedText;
  lead: LocalizedText;
  description: LocalizedText;
  frontCaption: LocalizedText;
  backCaption: LocalizedText;
  scarcity: LocalizedText;
  grade: LocalizedText;
  images: {
    composite: string;
    front: string;
    back: string;
  };
  sources: CatalogSource[];
};

export const colombiaCoinagePieces: ColombiaCoinagePiece[] = [
  {
    id: '1-4-real-santa-marta-1820',
    path: `${COLOMBIA_COINAGE_PATH}1-4-real-santa-marta-1820/`,
    chapterId: 'independencia',
    year: '1820',
    denomination: { es: '1/4 real', en: '1/4 real' },
    metal: { es: 'Cobre', en: 'Copper' },
    mint: {
      es: 'Santa Marta (ceca de sitio realista)',
      en: 'Santa Marta (royalist siege mint)',
    },
    reference: 'KM# B4 · Restrepo 104 · Hernández 11 · Numista N#18073',
    title: {
      es: '1/4 real · Santa Marta · 1820',
      en: '1/4 real · Santa Marta · 1820',
    },
    kicker: {
      es: 'Colombia-Numismática · Independencia',
      en: 'Colombia-Numismatics · Independence',
    },
    lead: {
      es: 'Cuartillo de cobre de sitio: corona sobre 1/4 y 1820; al otro lado, cruz que parte las letras S y M de Santa Marta.',
      en: 'A copper siege cuartillo: a crown over 1/4 and 1820; on the other side, a cross dividing the letters S and M of Santa Marta.',
    },
    description: {
      es: 'En 1820 Santa Marta seguía en manos realistas. Esta ceca de emergencia labró un cuarto de real de cobre —no el cuartillo de plata de Santa Fe o Popayán— para pagar plaza y tropa mientras duró el sitio. Numista y Restrepo lo describen así: en un lado, corona, fracción 1/4, castillo a la izquierda, espada y pirámide de balas a la derecha, y la fecha 1820; en el otro, una cruz que reparte S, M, un castillo y la espada con las balas. Las letras S M son Santa Marta. CoinVarieties anota que la facción realista fue derrotada en 1821 y que la circulación debió de ser breve; los ejemplares suelen verse poco gastados y, a la vez, mal acuñados o sobre cospel irregular. Esta pieza de la colección, sin encapsular, muestra esa labor tosca y la pátina de cobre. No es el 1/4 de plata de cornucopia de 1826–1836 (KM 85) ni el cuartillo colonial de castillos y leones de 1796–1819 (KM 63 y 67).',
      en: 'In 1820 Santa Marta was still in royalist hands. This emergency mint struck a copper quarter-real — not the silver cuartillo of Santa Fe or Popayán — to pay the square and the troop while the siege lasted. Numista and Restrepo describe it thus: on one side, a crown, the fraction 1/4, a castle at left, a sword and a pyramid of shot at right, and the date 1820; on the other, a cross that divides S, M, a castle, and the sword with shot. The letters S M are Santa Marta. CoinVarieties notes that the royalist faction was defeated in 1821 and that circulation must have been brief; surviving pieces often show little wear and, at the same time, a weak strike or an irregular planchet. This collection piece, unslabbed, shows that crude work and a copper patina. It is not the silver cornucopia 1/4 of 1826–1836 (KM 85), nor the colonial lions-and-castles cuartillo of 1796–1819 (KM 63 and 67).',
    },
    frontCaption: {
      es: 'Anverso según Numista: cruz que parte S y M — Santa Marta — con el castillo y la artillería en los cuarteles inferiores.',
      en: 'Obverse as Numista assigns it: a cross dividing S and M — Santa Marta — with the castle and artillery in the lower quarters.',
    },
    backCaption: {
      es: 'Reverso según Numista: corona sobre 1/4, castillo a la izquierda, espada y balas a la derecha, fecha 1820.',
      en: 'Reverse as Numista assigns it: a crown over 1/4, castle at left, sword and shot at right, date 1820.',
    },
    scarcity: {
      es: 'Numista da rareza 54 y un peso de tipo de 2,15 g sobre 21 mm. No publica una tirada. CoinVarieties recuerda que el tipo es escaso y que los ejemplares se ven más por cospel y acuñación que por desgaste. Esta ficha no inventa un censo de encapsulados para este ejemplar.',
      en: 'Numista gives a rarity index of 54 and a type weight of 2.15 g on 21 mm. It does not publish a mintage. CoinVarieties notes that the type is scarce and that survivors are graded more for planchet and strike than for wear. This record does not invent a slab census for this specimen.',
    },
    grade: {
      es: 'Circulada, sin encapsular (colección privada)',
      en: 'Circulated, unslabbed (private collection)',
    },
    images: {
      composite: '/images/catalog/numismatica/1-4-real-santa-marta-1820-composite.jpg',
      front: '/images/catalog/numismatica/1-4-real-santa-marta-1820-cross.jpg',
      back: '/images/catalog/numismatica/1-4-real-santa-marta-1820-value.jpg',
    },
    sources: [
      {
        href: 'https://en.numista.com/18073',
        es: 'Numista — ¼ real de Santa Marta, 1820 (N#18073)',
        en: 'Numista — Santa Marta ¼ real, 1820 (N#18073)',
        note: {
          es: 'KM# B4, Restrepo 104, Hernández 11 (Cód. 11 en la 8.ª ed. 2023); cobre de sitio; leyenda S M = Santa Marta.',
          en: 'KM# B4, Restrepo 104, Hernández 11 (Cód. 11 in the 8th ed. 2023); copper siege issue; S M = Santa Marta.',
        },
      },
      {
        href: 'https://coinvarieties.com/index.php/Santa_Marta_1820_1/4_real',
        es: 'CoinVarieties — Santa Marta 1820 1/4 real',
        en: 'CoinVarieties — Santa Marta 1820 1/4 real',
        note: {
          es: 'Emisión realista de cobre; la plaza cayó en 1821 y la circulación fue breve.',
          en: 'Royalist copper issue; the town fell in 1821 and circulation was brief.',
        },
      },
      {
        href: 'https://en.numista.com/L100183',
        es: 'Pedro Pablo Hernández — Monedas y billetes de Colombia, 8.ª ed. 2023 (Numista L100183)',
        en: 'Pedro Pablo Hernández — Coins and Banknotes of Colombia, 8th ed. 2023 (Numista L100183)',
        note: {
          es: 'Cód. 11: cuarto de real de cobre de Santa Marta, 1820, con SM y cruz. No se publican precios.',
          en: 'Cód. 11: Santa Marta copper quarter-real, 1820, with SM and a cross. Prices are not published here.',
        },
      },
    ],
  },
];

export const coinagePieceCopy = {
  es: {
    collectionLink: 'Colombia-Numismática',
    chapterLink: 'Independencia y Gran Colombia',
    frontHeading: 'Anverso',
    backHeading: 'Reverso',
    aboutHeading: 'La pieza',
    scarcityHeading: 'Rareza',
    factsHeading: 'Datos de catálogo',
    sourcesHeading: 'Fuentes',
    referenceLabel: 'Referencia',
    yearLabel: 'Año',
    metalLabel: 'Metal',
    mintLabel: 'Ceca',
    gradeLabel: 'Conservación',
    expandImage: 'Ampliar imagen',
    closeLightbox: 'Cerrar',
  },
  en: {
    collectionLink: 'Colombia-Numismatics',
    chapterLink: 'Independence and Gran Colombia',
    frontHeading: 'Obverse',
    backHeading: 'Reverse',
    aboutHeading: 'The piece',
    scarcityHeading: 'Scarcity',
    factsHeading: 'Catalog facts',
    sourcesHeading: 'Sources',
    referenceLabel: 'Reference',
    yearLabel: 'Year',
    metalLabel: 'Metal',
    mintLabel: 'Mint',
    gradeLabel: 'Condition',
    expandImage: 'Enlarge image',
    closeLightbox: 'Close',
  },
} as const;

export function coinagePieceById(id: string): ColombiaCoinagePiece | undefined {
  return colombiaCoinagePieces.find((piece) => piece.id === id);
}

export function coinagePiecePath(piece: ColombiaCoinagePiece, locale: 'es' | 'en'): string {
  return locale === 'en' ? piece.path.replace('/coleccion/', '/en/collection/').replace('colombia-numismatica', 'colombia-numismatics') : piece.path;
}

export const colombiaCoinagePieceSlugs = colombiaCoinagePieces.map((piece) =>
  piece.path.replace(/^\/|\/$/g, ''),
);
