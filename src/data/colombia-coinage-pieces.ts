import type { CatalogSource, LocalizedText } from './catalog';
import {
  COLOMBIA_COINAGE_PATH,
  colombiaCoinageChapters,
  type ColombiaCoinageChapterId,
} from './colombia-coinage';

export type ColombiaCoinagePieceId = '1-real-bogota-1810-nr-jf' | '1-4-real-santa-marta-1820';

export type ColombiaCoinagePiece = {
  id: ColombiaCoinagePieceId;
  path: string;
  chapterId: ColombiaCoinageChapterId;
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
    id: '1-real-bogota-1810-nr-jf',
    path: `${COLOMBIA_COINAGE_PATH}1-real-bogota-1810-nr-jf/`,
    chapterId: 'santa-fe',
    year: '1810',
    denomination: { es: '1 real', en: '1 real' },
    metal: { es: 'Plata .896 (tipo)', en: 'Silver .896 (type specification)' },
    mint: {
      es: 'Santa Fe de Nuevo Reino, Bogotá (NR)',
      en: 'Santa Fe de Nuevo Reino, Bogotá (NR)',
    },
    reference: 'KM# 68.1 · Restrepo 111.3 · Calicó 651 · Numista N#41692',
    title: {
      es: '1 real · Bogotá NR–JF · 1810',
      en: '1 real · Bogotá NR–JF · 1810',
    },
    kicker: {
      es: 'Colombia-Numismática · Santa Fe colonial',
      en: 'Colombia-Numismatics · colonial Santa Fe',
    },
    lead: {
      es: 'Un real de plata de 1810, labrado en Santa Fe de Nuevo Reino en nombre de Fernando VII. El anverso conserva el busto de Carlos IV; el reverso identifica la ceca NR, el valor 1R y el ensaye JF.',
      en: 'An 1810 silver real struck at Santa Fe de Nuevo Reino in the name of Ferdinand VII. The obverse keeps Charles IV’s bust; the reverse names mint NR, value 1R, and assayer JF.',
    },
    description: {
      es: 'En 1810 la Casa de Santa Fe seguía labrando el real colonial de cordoncillo, ya con orla de Fernando VII. Este disco muestra la fecha 1810 bajo el retrato, la marca NR de Nuevo Reino (Bogotá) y el ensaye JF. El tipo KM# 68.1 retiene el busto de Carlos IV a la derecha: el nombre del rey y el retrato no coinciden. La leyenda del anverso, normalizada, lee FERDND · VII · DEI · GRATIA · 1810; la del reverso, HISPAN · ET IND · REX · NR · 1R · JF. Las fotografías no bastan para el sobrefecha 1810/9 ni para el ensaye repunchado JF/JJ (Restrepo 111.3a); esta ficha registra el 1810 JF ordinario, Restrepo 111.3 y Calicó 651. La plata .896 y el peso de tipo de unos 3,38 g son cifras de catálogo, no medidas de este ejemplar. No hay tirada verificada: las tablas BanRep de moneda empiezan en 1987. No es el cuartillo de cobre de sitio de Santa Marta de 1820 ni un 1 real de ceca peninsular.',
      en: 'In 1810 the Santa Fe mint was still striking the reeded colonial real, already with Ferdinand VII’s legend. This disc shows the date 1810 under the portrait, mintmark NR for Nuevo Reino (Bogotá), and assayer JF. Type KM# 68.1 keeps Charles IV’s bust facing right: the king named in the legend is not the bust on the coin. Normalized obverse legend: FERDND · VII · DEI · GRATIA · 1810; reverse: HISPAN · ET IND · REX · NR · 1R · JF. The photographs do not establish the 1810/9 overdate or the JF/JJ recut assayer (Restrepo 111.3a); this record is the ordinary 1810 JF issue, Restrepo 111.3 and Calicó 651. Silver .896 and a type weight of about 3.38 g are catalogue figures, not measurements of this specimen. No mintage is verified: BanRep’s coin tables begin in 1987. It is not the 1820 Santa Marta copper siege cuartillo, nor a 1-real of a Spanish peninsula mint.',
    },
    frontCaption: {
      es: 'Anverso: busto de Carlos IV a la derecha, leyenda de Fernando VII y fecha 1810.',
      en: 'Obverse: bust of Charles IV facing right, Ferdinand VII legend, and the date 1810.',
    },
    backCaption: {
      es: 'Reverso: escudo coronado entre columnas; NR, 1R y ensaye JF en la orla.',
      en: 'Reverse: crowned arms between pillars; NR, 1R, and assayer JF in the legend.',
    },
    scarcity: {
      es: 'Numista cubre el tipo KM# 68.1 (N#41692) y no publica una tirada del 1810 JF. Sedwick documenta esa fecha y ensaye, y trata aparte la variedad JF/JJ. Esta ficha no inventa un censo de encapsulados ni atribuye esa variedad.',
      en: 'Numista covers type KM# 68.1 (N#41692) and does not publish an 1810 JF mintage. Sedwick documents that date and assayer, and treats the JF/JJ variety separately. This record does not invent a slab census or assign that variety.',
    },
    grade: {
      es: 'Circulada, con desgaste marcado en el retrato y mejor lectura en el reverso; gris con recesos más oscuros. Sin encapsular (colección privada)',
      en: 'Circulated, with heavy portrait wear and a clearer reverse; gray surfaces with darker recesses. Unslabbed (private collection)',
    },
    images: {
      composite: '/images/catalog/numismatica/1-real-bogota-1810-nr-jf-composite.jpg',
      front: '/images/catalog/numismatica/1-real-bogota-1810-nr-jf-front.jpg',
      back: '/images/catalog/numismatica/1-real-bogota-1810-nr-jf-back.jpg',
    },
    sources: [
      {
        href: 'https://en.numista.com/41692',
        es: 'Numista — 1 real, Fernando VII (retrato de Carlos IV), Colombia (N#41692)',
        en: 'Numista — 1 real, Ferdinand VII (portrait of Charles IV), Colombia (N#41692)',
        note: {
          es: 'KM# 68.1; plata de tipo .896; ceca NR de Santa Fe / Bogotá. No se cita aquí una tirada.',
          en: 'KM# 68.1; type silver .896; NR mint of Santa Fe / Bogotá. No mintage is cited here.',
        },
      },
      {
        href: 'https://auction.sedwickcoins.com/COLOMBIA-Bogot-bust-1-real-Ferdinand-VII-1810-JF-NGC-VF-30-ex-Becerra_i56359917',
        es: 'Sedwick — 1 real de Bogotá, Fernando VII, 1810 JF',
        en: 'Sedwick — Bogotá 1 real, Ferdinand VII, 1810 JF',
        note: {
          es: 'Comparable de subasta del 1810 JF (Restrepo 111.3; Calicó 651). No es este ejemplar; no se publican precios.',
          en: 'Auction comparable for the 1810 JF issue (Restrepo 111.3; Calicó 651). Not this specimen; prices are not published.',
        },
      },
      {
        href: 'https://auction.sedwickcoins.com/Bogota-Colombia-bust-1-real-Ferdinand-VII-bust-of-Charles-IV-1810JF-JJ-scarce-KM-68-1-Restr_i12160048',
        es: 'Sedwick — 1 real de Bogotá, busto de Carlos IV, variedad 1810 JF/JJ',
        en: 'Sedwick — Bogotá 1 real, bust of Charles IV, 1810 JF/JJ variety',
        note: {
          es: 'Documenta el retrato retenido de Carlos IV y la variedad Restrepo 111.3a, no atribuida a esta ficha.',
          en: 'Documents the retained Charles IV bust and Restrepo 111.3a, not attributed to this record.',
        },
      },
    ],
  },
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
      es: 'En 1820 Santa Marta seguía en manos realistas. Esta ceca de emergencia labró un cuarto de real de cobre —no el cuartillo de plata de Santa Fe o Popayán— para pagar plaza y tropa mientras duró el sitio. Hernández y los índices de denominación agrupan cuartillos patriotas y realistas entre 1813 y 1822; esta ficha es el cobre de sitio de 1820, no un censo de esos años. Numista y Restrepo lo describen así: en un lado, corona, fracción 1/4, castillo a la izquierda, espada y pirámide de balas a la derecha, y la fecha 1820; en el otro, una cruz que reparte S, M, un castillo y la espada con las balas. Las letras S M son Santa Marta. CoinVarieties anota que la facción realista fue derrotada en 1821 y que la circulación debió de ser breve; los ejemplares suelen verse poco gastados y, a la vez, mal acuñados o sobre cospel irregular. Esta pieza de la colección, sin encapsular, muestra esa labor tosca y la pátina de cobre. No es el 1/4 de plata de cornucopia de 1826–1836 (KM 85) ni el cuartillo colonial de castillos y leones de 1796–1819 (KM 63 y 67).',
      en: 'In 1820 Santa Marta was still in royalist hands. This emergency mint struck a copper quarter-real — not the silver cuartillo of Santa Fe or Popayán — to pay the square and the troop while the siege lasted. Hernández and denomination indexes group patriot and royalist cuartillos from 1813 to 1822; this record is the 1820 copper siege type, not a census of those years. Numista and Restrepo describe it thus: on one side, a crown, the fraction 1/4, a castle at left, a sword and a pyramid of shot at right, and the date 1820; on the other, a cross that divides S, M, a castle, and the sword with shot. The letters S M are Santa Marta. CoinVarieties notes that the royalist faction was defeated in 1821 and that circulation must have been brief; surviving pieces often show little wear and, at the same time, a weak strike or an irregular planchet. This collection piece, unslabbed, shows that crude work and a copper patina. It is not the silver cornucopia 1/4 of 1826–1836 (KM 85), nor the colonial lions-and-castles cuartillo of 1796–1819 (KM 63 and 67).',
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

export function coinagePieceChapter(piece: ColombiaCoinagePiece) {
  return colombiaCoinageChapters.find((chapter) => chapter.id === piece.chapterId);
}

export function coinagePiecePath(piece: ColombiaCoinagePiece, locale: 'es' | 'en'): string {
  return locale === 'en' ? piece.path.replace('/coleccion/', '/en/collection/').replace('colombia-numismatica', 'colombia-numismatics') : piece.path;
}

export const colombiaCoinagePieceSlugs = colombiaCoinagePieces.map((piece) =>
  piece.path.replace(/^\/|\/$/g, ''),
);
