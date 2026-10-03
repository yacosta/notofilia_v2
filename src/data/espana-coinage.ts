import type { CatalogSource, LocalizedText } from './catalog';

const SPAIN_NOTES_PATH = '/coleccion/espana/';
const SPAIN_NOTES_PATH_EN = '/en/collection/spain/';

export const NUMISMATICS_PATH = '/coleccion/numismatica/';
export const SPAIN_COINAGE_PATH = '/coleccion/espana-numismatica/';
export const SPAIN_COINAGE_PATH_EN = '/collection/spain-numismatics/';

export type SpainCoinageChapterId = 'escudo-oro' | 'felipe-ii' | 'madrid' | 'fernando-vi';

export type SpainCoinageChapter = {
  id: SpainCoinageChapterId;
  years: LocalizedText;
  title: LocalizedText;
  lead: LocalizedText;
  body: LocalizedText;
};

export const spainCoinageChapters: SpainCoinageChapter[] = [
  {
    id: 'escudo-oro',
    years: { es: '1535–1864', en: '1535–1864' },
    title: {
      es: 'El escudo de oro',
      en: 'The gold escudo',
    },
    lead: {
      es: 'El escudo fue la unidad de oro de la monarquía hispánica. El medio escudo es la fracción pequeña de esa serie, no un real de plata ni un doblón de ocho.',
      en: 'The escudo was the gold unit of the Spanish monarchy. The half escudo is the small fraction of that series, not a silver real and not an eight-escudo doubloon.',
    },
    body: {
      es: 'Desde el siglo XVI el oro de la Corona se contaba en escudos. En la Península, las casas reales labraron múltiplos y fracciones a martillo y, más tarde, a volante: el medio escudo es la pieza menuda de esa escala. Numista tasa el tipo KM#378 en ½ escudo sobre el real (el 8 de su ficha es equivalencia de cuenta, no un facial escrito en el disco). No se confunde con el escudo colonial de las Indias —México, Lima, Santa Fe—, ni con el peso de plata. Esta vitrina documenta dos oros peninsulares: un 2 escudos a martillo de Sevilla, Felipe II, sin fecha, y un medio escudo de Madrid de 1757. Ninguno es oro americano.',
      en: 'From the sixteenth century the Crown’s gold was counted in escudos. On the peninsula the royal houses struck multiples and fractions by hammer and, later, by mill: the half escudo is the small piece of that scale. Numista rates type KM#378 as a ½ escudo on the real (the 8 on that record is an account equivalent, not a face written on the disc). It is not colonial gold of the Indies — Mexico, Lima, Santa Fe — and not a silver peso. This case records two peninsula gold pieces: an undated hammered Seville 2 escudos of Philip II, and a 1757 Madrid half escudo. Neither is American gold.',
    },
  },
  {
    id: 'felipe-ii',
    years: { es: '1556–1598', en: '1556–1598' },
    title: {
      es: 'Felipe II en Sevilla',
      en: 'Philip II at Seville',
    },
    lead: {
      es: 'El 2 escudos sin fecha de Sevilla lleva la S de la ceca sobre una D cuadrada, y el valor II al otro lado del escudo.',
      en: 'Seville’s undated 2 escudos carries the mint S over a square D, and the value II on the other side of the shield.',
    },
    body: {
      es: 'Felipe II reinó de 1556 a 1598. En ese tramo Sevilla labró oro a martillo, con cospel irregular, escudo coronado y cruz de Jerusalén en orla de cuatro lóbulos. Tauler sitúa el tipo de D cuadrada, ceca y ensaye a la izquierda, en 1566–1587: Áureo & Calicó 828, Friedberg 169, Tauler 31. A partir de 1588 la misma casa fechó 2 escudos de ensaye D; un año legible junto al escudo sería otro tipo. Esta vitrina documenta un ejemplar sin fecha en el cospel y sin pesada. No es el medio escudo de busto de Madrid ni oro de Indias.',
      en: 'Philip II reigned from 1556 to 1598. In that span Seville struck hammered gold on irregular planchets, with a crowned shield and a Jerusalem cross inside a four-lobed tressure. Tauler places the square-D type, mint and assayer to the left, in 1566–1587: Áureo & Calicó 828, Friedberg 169, Tauler 31. From 1588 the same house dated 2-escudo pieces of assayer D; a readable year beside the shield would be another type. This case records an example with no date on the planchet and no weight taken. It is not Madrid’s bust half escudo and not Indies gold.',
    },
  },
  {
    id: 'madrid',
    years: { es: 'desde 1591', en: 'from 1591' },
    title: {
      es: 'La ceca de Madrid',
      en: 'The Madrid mint',
    },
    lead: {
      es: 'La Real Casa de la Moneda de Madrid se identifica en este tipo por la M coronada bajo el escudo, flanqueada por las iniciales de ensaye.',
      en: 'The Royal Mint of Madrid is identified on this type by the crowned M under the shield, flanked by the assayer initials.',
    },
    body: {
      es: 'Numista sitúa la Real Casa de Madrid desde 1591. En el medio escudo de busto, la marca no es una M suelta en la orla de Indias: es una M coronada bajo el cuartelado, entre J y B cuando el ensaye es el de José Tramullas y Ferrer y Bernardo Muñoz de Amador (Madrid, 1744–1759 y 1747–1759). Esa triple marca —J, M coronada, B— es la que lee este ejemplar. No es la NR de Santa Fe ni la Mo de México.',
      en: 'Numista dates the Royal Mint of Madrid from 1591. On the bust half escudo the mark is not a loose M in an Indies legend: it is a crowned M under the quartered arms, between J and B when the assay is that of José Tramullas y Ferrer and Bernardo Muñoz de Amador (Madrid, 1744–1759 and 1747–1759). That triple mark — J, crowned M, B — is what this example reads. It is not Santa Fe’s NR and not Mexico’s Mo.',
    },
  },
  {
    id: 'fernando-vi',
    years: { es: '1746–1759', en: '1746–1759' },
    title: {
      es: 'Fernando VI',
      en: 'Ferdinand VI',
    },
    lead: {
      es: 'Fernando VI reinó de 1746 a 1759. El medio escudo de Madrid con su busto se labró de 1748 a 1759; esta ficha es de 1757.',
      en: 'Ferdinand VI reigned from 1746 to 1759. Madrid’s half escudo with his bust was struck from 1748 to 1759; this record is 1757.',
    },
    body: {
      es: 'La leyenda FERDINAND · VI · D · G · no es la de Fernando VII. Un 1810 de Fernando VII lleva FERDND VII o FERDINAND VII y, en América, HISPAN ET IND REX. Este disco lee HISPANIARUM · REX: rey de las Españas, sin las Indias en la orla. Calicó 2019 asigna el 1757 Madrid JB al cuarto retrato (Áureo & Calicó#561; en la edición de 2008, Calicó#255). Krause reúne el tipo como KM#378; Friedberg, como Fr#274. Numista nombra grabador a Tomás Francisco Prieto Martín. Esta vitrina no pretende cubrir todo el oro fernandino.',
      en: 'The legend FERDINAND · VI · D · G · is not Ferdinand VII’s. An 1810 of Ferdinand VII reads FERDND VII or FERDINAND VII and, in America, HISPAN ET IND REX. This disc reads HISPANIARUM · REX: king of the Spains, without the Indies in the legend. Calicó 2019 assigns the 1757 Madrid JB to the fourth portrait (Áureo & Calicó#561; in the 2008 edition, Calicó#255). Krause gathers the type as KM#378; Friedberg as Fr#274. Numista names Tomás Francisco Prieto Martín as engraver. This case does not try to cover all Ferdinand gold.',
    },
  },
];

export const seriesSources: CatalogSource[] = [
  {
    href: 'https://en.wikipedia.org/wiki/Philip_II_of_Spain',
    es: 'Wikipedia — Felipe II de España',
    en: 'Wikipedia — Philip II of Spain',
    note: {
      es: 'Reinado 1556–1598. Marco del doblón sevillano, no una ficha de ceca.',
      en: 'Reign 1556–1598. Frame for the Seville doubloon, not a mint record.',
    },
  },
  {
    href: 'https://en.wikipedia.org/wiki/Ferdinand_VI_of_Spain',
    es: 'Wikipedia — Fernando VI de España',
    en: 'Wikipedia — Ferdinand VI of Spain',
    note: {
      es: 'Reinado 1746–1759. Marco del busto, no una ficha de ceca.',
      en: 'Reign 1746–1759. Frame for the bust, not a mint record.',
    },
  },
  {
    href: 'https://en.wikipedia.org/wiki/Spanish_escudo',
    es: 'Wikipedia — Escudo español',
    en: 'Wikipedia — Spanish escudo',
    note: {
      es: 'El escudo como unidad de oro; el 2 escudos y el medio escudo como múltiplo y fracción. No se citan precios.',
      en: 'The escudo as a gold unit; the 2 escudos and the half escudo as multiple and fraction. Prices are not cited.',
    },
  },
  {
    href: 'https://www.fnmt.es/en/historia',
    es: 'FNMT — Historia de la Fábrica Nacional de Moneda y Timbre',
    en: 'FNMT — History of the Fábrica Nacional de Moneda y Timbre',
    note: {
      es: 'Continuidad de la Real Casa de Madrid. No sustituye la marca de ceca de esta pieza.',
      en: 'Continuity of the Royal Mint of Madrid. It does not replace this piece’s mint mark.',
    },
  },
];

export const seriesCopy = {
  es: {
    metaTitle: 'España · Numismática | Notofilia',
    metaDescription:
      'Catálogo de moneda española: 2 escudos de Felipe II, Sevilla, sin fecha (Calicó 828), y medio escudo de Fernando VI, Madrid 1757 (KM#378).',
    kicker: 'España · Numismática',
    title: 'Sevilla, Madrid y el escudo',
    heroAlt:
      'Medio escudo de oro de Fernando VI, Madrid 1757: anverso con busto a la derecha y reverso con escudo coronado, sobre fondo oscuro',
    intro: [
      'La Colección Virtual separa la numismática —moneda acuñada— de la notafilia. En España esa historia de oro pasa por el escudo y por las casas reales de la Península. Esta vitrina abre con un 2 escudos a martillo de Sevilla, Felipe II, sin fecha, y sigue con el medio escudo de Madrid de 1757. Ninguno es oro colonial de Santa Fe, México o Lima.',
      'Felipe II (1556–1598) da el escudo y la cruz de Jerusalén del doblón sevillano: S sobre D cuadrada. Fernando VI (1746–1759) da el busto del medio escudo: M coronada y ensaye JB. El papel de este país aún no tiene fichas; el metal, sí.',
    ],
    holdingsTitle: 'El catálogo',
    holdingsIntro:
      'Cuatro capítulos, de izquierda a derecha: el escudo de oro, Felipe II en Sevilla, la ceca de Madrid y Fernando VI.',
    viewChapter: 'Leer el capítulo',
    sourcesTitle: 'Fuentes',
    eraLabel: 'Época',
    parentLink: 'Numismática',
    notesLead: 'El papel moneda de España aún no tiene fichas en notafilia.',
    notesLink: 'España · vitrina de papel (en preparación)',
  },
  en: {
    metaTitle: 'Spain · Numismatics | Notofilia',
    metaDescription:
      'Catalog of Spanish coinage: Philip II’s undated Seville 2 escudos (Calicó 828) and Ferdinand VI’s Madrid half escudo, 1757 (KM#378).',
    kicker: 'Spain · Numismatics',
    title: 'Seville, Madrid, and the escudo',
    heroAlt:
      'Ferdinand VI gold half escudo, Madrid 1757: obverse with bust facing right and reverse with a crowned shield, on a dark field',
    intro: [
      'The Virtual Collection separates numismatics — struck coin — from notaphily. In Spain that gold history runs through the escudo and the royal houses of the peninsula. This case opens with a hammered Seville 2 escudos of Philip II, undated, and continues with the 1757 Madrid half escudo. Neither is colonial gold of Santa Fe, Mexico, or Lima.',
      'Philip II (1556–1598) names the shield and Jerusalem cross of the Seville doubloon: S over a square D. Ferdinand VI (1746–1759) names the half-escudo bust: crowned M and assayers JB. This country’s paper has no records yet; the metal does.',
    ],
    holdingsTitle: 'The catalog',
    holdingsIntro:
      'Four chapters, left to right: the gold escudo, Philip II at Seville, the Madrid mint, and Ferdinand VI.',
    viewChapter: 'Read the chapter',
    sourcesTitle: 'Sources',
    eraLabel: 'Period',
    parentLink: 'Numismatics',
    notesLead: 'Spain’s paper money does not yet have records in notaphily.',
    notesLink: 'Spain · paper case (in preparation)',
  },
} as const;

export type SpainCoinId = '2-escudos-sevilla-felipe-ii-s-d' | 'medio-escudo-madrid-1757-jb';

export type SpainCoin = {
  id: SpainCoinId;
  path: string;
  pathEn: string;
  chapterId: SpainCoinageChapterId;
  year: string;
  mint: LocalizedText;
  denomination: LocalizedText;
  composition: LocalizedText;
  weight: LocalizedText;
  diameter: LocalizedText;
  edge: LocalizedText;
  references: string;
  grade: LocalizedText;
  no_serial_reason: string;
  images: {
    composite: string;
    front: string;
    back: string;
    width: number;
    height: number;
    faceWidth: number;
    faceHeight: number;
  };
  title: LocalizedText;
  kicker: LocalizedText;
  lead: LocalizedText;
  description: LocalizedText;
  history: LocalizedText;
  obverseLegend: LocalizedText;
  reverseLegend: LocalizedText;
  frontCaption: LocalizedText;
  backCaption: LocalizedText;
  scarcity: LocalizedText;
  certification: LocalizedText;
  sources: CatalogSource[];
};

export const spainCoins: SpainCoin[] = [
  {
    id: '2-escudos-sevilla-felipe-ii-s-d',
    path: '/coleccion/espana-numismatica/2-escudos-sevilla-felipe-ii-s-d/',
    pathEn: '/en/collection/spain-numismatics/2-escudos-seville-philip-ii-s-d/',
    chapterId: 'felipe-ii',
    year: 'ND (1566–1587)',
    mint: {
      es: 'Sevilla (S); ensaye D cuadrada',
      en: 'Seville (S); square D assayer',
    },
    denomination: {
      es: '2 escudos',
      en: '2 escudos',
    },
    composition: {
      es: 'Oro de 22 quilates (.917), ley del escudo desde 1537; no es un ensayo de este ejemplar',
      en: '22-karat gold (.917), the escudo standard from 1537; not an assay of this specimen',
    },
    weight: {
      es: 'No pesado. El 2 escudos de tipo ronda los 6,77 g; Sedwick publica 6,69–6,74 g en comparables Cal-828 que no son este disco. El escudo sencillo es 3,38 g. Sin pesada, el facial se lee por la marca II.',
      en: 'Not weighed. A 2 escudos of the type is about 6.77 g; Sedwick publishes 6.69–6.74 g on Cal-828 comparables that are not this disc. A single escudo is 3.38 g. Without a scale reading, the face value is read from the II mark.',
    },
    diameter: {
      es: 'No medido. El cospel a martillo es irregular; no se copia un módulo de catálogo a este disco.',
      en: 'Not measured. A hammered planchet is irregular; no catalogue module is copied onto this disc.',
    },
    edge: {
      es: 'Acuñación a martillo. El canto de este ejemplar no se fotografió aparte.',
      en: 'Hammer-struck. This specimen’s edge was not photographed separately.',
    },
    references: 'Áureo & Calicó#828 · Fr#169 · Tauler-31',
    grade: {
      es: 'Sin encapsular. Escudo y cruz de Jerusalén bien estampados; la leyenda queda incompleta en el borde irregular. No es un grado numérico.',
      en: 'Unslabbed. Shield and Jerusalem cross well struck; the legend is incomplete on the irregular edge. Not a numerical grade.',
    },
    no_serial_reason:
      'Hammered Spanish gold 2 escudos: the type does not carry a serial number, and this example is unslabbed with no certification number.',
    images: {
      composite: '/images/catalog/spain/spain-seville-2-escudos-nd-philip-ii-s-d-composite.jpg',
      front: '/images/catalog/spain/spain-seville-2-escudos-nd-philip-ii-s-d-front.jpg',
      back: '/images/catalog/spain/spain-seville-2-escudos-nd-philip-ii-s-d-back.jpg',
      width: 1672,
      height: 941,
      faceWidth: 836,
      faceHeight: 941,
    },
    title: {
      es: '2 escudos · Felipe II · 1566–1587',
      en: '2 escudos · Philip II · 1566–1587',
    },
    kicker: {
      es: 'España · Ceca de Sevilla',
      en: 'Spain · Seville mint',
    },
    lead: {
      es: 'Doblón de 2 escudos a martillo, Felipe II, Sevilla, sin fecha (1566–1587), ensaye de D cuadrada bajo la S. Sin serial y sin encapsular. Este disco no se pesó.',
      en: 'Hammered 2-escudo doubloon, Philip II, Seville, undated (1566–1587), square D assayer under the S. No serial and unslabbed. This disc was not weighed.',
    },
    description: {
      es: 'Esta pieza es un 2 escudos de oro de Felipe II, labrado a martillo en Sevilla, sin año en el cospel. El anverso lleva el escudo coronado de los Austrias, con Granada en la punta y sin escusón de Portugal legible. A la izquierda del escudo, bajo la corona, se lee la S de Sevilla sobre una D cuadrada (gótica). A la derecha, una marca apilada que corresponde al valor II. Esa disposición —ceca y ensaye a la izquierda, denominación a la derecha— es la que Sedwick y Tauler publican como Áureo & Calicó 828 (Friedberg 169, Tauler 31), tipo sin fecha de 1566–1587. El 827 es la variedad hermana, de otra colocación de marcas; no es este cuño. La leyenda de tipo del anverso es PHILIPPVS · II · DEI · GRATIA; en este disco queda en parte fuera del cospel. El reverso muestra la cruz de Jerusalén dentro de una orla de cuatro lóbulos, con trifolios en los ángulos y cuatro anillos junto a la cruz. En la orla se lee HISPANIARVM; la fórmula de tipo cierra · REX. La D cuadrada de Sevilla en ese tramo se atribuye a Melchor Damián. El oro de 22 quilates (.917) y los 6,77 g del 2 escudos son cifras del sistema del escudo desde 1537, no una pesada ni un ensayo de este ejemplar. Sin peso, el facial se apoya en el II y en el cuño del tipo. No es el medio escudo de Madrid de 1757, ni un escudo de las Indias, ni un 2 escudos de Sevilla con fecha: el 1588 de ensaye D, por ejemplo, lleva los dígitos junto al escudo.',
      en: 'This piece is a gold 2 escudos of Philip II, hammer-struck at Seville, with no year on the planchet. The obverse carries the crowned Habsburg shield, Granada at the point, and no readable Portugal inescutcheon. To the left of the shield, under the crown, the Seville S sits over a square (Gothic) D. To the right, a stacked mark reads as the value II. That arrangement — mint and assayer on the left, denomination on the right — is the one Sedwick and Tauler publish as Áureo & Calicó 828 (Friedberg 169, Tauler 31), the undated type of 1566–1587. Calicó 827 is the sister variety, with the marks placed differently; it is not this die. The type obverse legend is PHILIPPVS · II · DEI · GRATIA; on this disc part of it falls off the planchet. The reverse shows the Jerusalem cross inside a four-lobed tressure, with trefoils in the angles and four annulets beside the cross. The legend reads HISPANIARVM; the type formula closes · REX. Seville’s square D in that span is attributed to Melchor Damián. 22-karat gold (.917) and 6.77 g for the 2 escudos are figures of the escudo system from 1537, not a weighing or an assay of this specimen. Without a weight, the face value rests on the II and on the type die. It is not the 1757 Madrid half escudo, not an Indies escudo, and not a dated Seville 2 escudos: the 1588 of assayer D, for example, carries the digits beside the shield.',
    },
    history: {
      es: 'Felipe II ocupó el trono de 1556 a 1598. Sevilla marcó su oro con la S. El ensaye de D cuadrada corresponde al tramo en que la casa aún no fechaba estas piezas: Tauler sitúa el Cal-828 en 1566–1587. Desde 1588 aparecen 2 escudos de la misma ceca y el mismo ensaye con fecha junto al escudo; ese año es otro tipo, y en este cospel no se lee ninguno. La ausencia del escusón de Portugal no separa por sí sola a Felipe II de los primeros oros de Felipe III en Sevilla. Aquí la atribución sigue el cuño publicado como Cal-828: S sobre D a la izquierda, II a la derecha, sin fecha. El 2 escudos —el doblón, pistola en los mercados europeos— fue el múltiplo menudo del oro peninsular. No se publica un martillo ni un censo de encapsulados.',
      en: 'Philip II held the throne from 1556 to 1598. Seville marked its gold with an S. The square-D assay belongs to the span in which the house was not yet dating these pieces: Tauler places Cal-828 in 1566–1587. From 1588, 2-escudo coins of the same mint and assayer appear with a date beside the shield; that year is another type, and no year is readable on this planchet. The lack of a Portugal inescutcheon does not by itself separate Philip II from the earliest Seville gold of Philip III. The attribution here follows the die published as Cal-828: S over D on the left, II on the right, undated. The 2 escudos — the doubloon, a pistole in European markets — was the small multiple of peninsula gold. No hammer and no slab census are published.',
    },
    obverseLegend: {
      es: 'PHILIPPVS · II · DEI · GRATIA — leyenda de tipo; en este cospel la orla queda incompleta. A la izquierda del escudo: S sobre D cuadrada. A la derecha: II.',
      en: 'PHILIPPVS · II · DEI · GRATIA — type legend; on this planchet the rim is incomplete. Left of the shield: S over a square D. Right: II.',
    },
    reverseLegend: {
      es: 'HISPANIARVM · REX — «Rey de las Españas». En este ejemplar se lee HISPANIARVM en la orla. Cruz de Jerusalén en orla de cuatro lóbulos, con anillos y trifolios.',
      en: 'HISPANIARVM · REX — “King of the Spains.” This example reads HISPANIARVM in the legend. Jerusalem cross in a four-lobed tressure, with annulets and trefoils.',
    },
    frontCaption: {
      es: 'Anverso: escudo coronado de Felipe II; S de Sevilla sobre D cuadrada a la izquierda; II a la derecha.',
      en: 'Obverse: crowned shield of Philip II; Seville S over a square D at left; II at right.',
    },
    backCaption: {
      es: 'Reverso: cruz de Jerusalén en orla de cuatro lóbulos; leyenda HISPANIARVM.',
      en: 'Reverse: Jerusalem cross in a four-lobed tressure; legend HISPANIARVM.',
    },
    scarcity: {
      es: 'No hay tirada publicada para este cuño. Tauler llama raro al tipo Cal-828. Eso no es un censo de encapsulados ni un precio. Los lotes de Sedwick (Treasure Auction 38, lote 3) y de Tauler & Fau (subasta 160, lote 155) documentan la misma disposición de marcas en otros discos; no son este ejemplar. No se asigna un número Krause: las fichas consultadas no traen un KM estable para este oro.',
      en: 'No mintage is published for this die. Tauler calls type Cal-828 rare. That is not a slab census and not a price. Sedwick’s Treasure Auction 38, lot 3, and Tauler & Fau auction 160, lot 155, document the same mark arrangement on other discs; they are not this specimen. No Krause number is assigned: the records consulted do not give a stable KM for this gold.',
    },
    certification: {
      es: 'El ejemplar está suelto, sin cápsula de NGC, PCGS ni otra casa. Estas piezas a martillo no llevan número de serie. La identidad de la ficha es el objeto fotografiado —escudo de Felipe II, S sobre D cuadrada, II, cruz de Jerusalén—, no un certificado. Si más adelante se encapsula, el número de cert sustituirá a esta nota.',
      en: 'The example is raw, with no NGC, PCGS, or other holder. These hammered pieces carry no serial number. The identity of this record is the photographed object — Philip II’s shield, S over a square D, II, Jerusalem cross — not a certificate. If it is later slabbed, the cert number will replace this note.',
    },
    sources: [
      {
        href: 'https://www.numisbids.com/sale/9894/lot/3',
        es: 'Sedwick — 2 escudos de Sevilla, Felipe II, D gótica, Cal-828 (comparable)',
        en: 'Sedwick — Seville 2 escudos, Philip II, Gothic D, Cal-828 (comparable)',
        note: {
          es: 'Treasure Auction 38, lote 3: S sobre D gótica a la izquierda, II a la derecha, Fr-169. No es este ejemplar; no se publica el martillo. Sedwick cita 6,74 g en un disco distinto.',
          en: 'Treasure Auction 38, lot 3: S over Gothic D on the left, II on the right, Fr-169. Not this specimen; the hammer is not published. Sedwick cites 6.74 g on a different disc.',
        },
      },
      {
        href: 'https://www.numisbids.com/sale/9459/lot/155',
        es: 'Tauler & Fau — 2 escudos ND (1566–1587), Sevilla, Cal-828, Tauler-31 (comparable)',
        en: 'Tauler & Fau — 2 escudos ND (1566–1587), Seville, Cal-828, Tauler-31 (comparable)',
        note: {
          es: 'Subasta 160, lote 155: D cuadrada, ceca y ensaye a la izquierda, con el ordinal del rey. No es este ejemplar; no se publica el martillo.',
          en: 'Auction 160, lot 155: square D, mint and assayer on the left, with the king’s ordinal. Not this specimen; the hammer is not published.',
        },
      },
      {
        href: 'https://auction.sedwickcoins.com/Seville-Spain-cob-2-escudos-1588-assayer-Gothic-D-rare-and-desirable-date_i9879475',
        es: 'Sedwick — 2 escudos de Sevilla, 1588, ensaye D gótica (otro tipo)',
        en: 'Sedwick — Seville 2 escudos, 1588, Gothic D assayer (another type)',
        note: {
          es: 'Comparable fechado: los dígitos van junto al escudo. Este cospel no los muestra. No se publica el martillo.',
          en: 'Dated comparable: the digits sit beside the shield. This planchet does not show them. The hammer is not published.',
        },
      },
      {
        href: 'https://catalogodemonedas.es/?q=catalogo%2Fmonedas%2Fmoneda%2F14531',
        es: 'Catálogo de monedas — D cuadrada de Sevilla, Melchor Damián',
        en: 'Catálogo de monedas — Seville square D, Melchor Damián',
        note: {
          es: 'Atribuye la D cuadrada de Sevilla (1566–1588) a Melchor Damián. El modelo ilustrado lleva D a ambos lados del escudo; este disco es la variedad de ceca y ensaye solo a la izquierda (Cal-828).',
          en: 'Attributes Seville’s square D (1566–1588) to Melchor Damián. The illustrated model has D on both sides of the shield; this disc is the variety with mint and assayer on the left only (Cal-828).',
        },
      },
    ],
  },
  {
    id: 'medio-escudo-madrid-1757-jb',
    path: '/coleccion/espana-numismatica/medio-escudo-madrid-1757-jb/',
    pathEn: '/en/collection/spain-numismatics/half-escudo-madrid-1757-jb/',
    chapterId: 'fernando-vi',
    year: '1757',
    mint: {
      es: 'Madrid (M coronada); ensaye JB',
      en: 'Madrid (crowned M); assayers JB',
    },
    denomination: {
      es: '½ escudo',
      en: '½ escudo',
    },
    composition: {
      es: 'Oro .917 (especificación de tipo NGC / Numista; no es un ensayo de este ejemplar)',
      en: 'Gold .917 (NGC / Numista type specification; not an assay of this specimen)',
    },
    weight: {
      es: 'No pesado. Cifras de tipo publicadas: Numista 1,7 g; NGC 1,69 g; un ejemplar Sedwick 1,75 g; un ejemplar BnF 1,77 g. Ninguna se asigna a esta pieza.',
      en: 'Not weighed. Published type figures: Numista 1.7 g; NGC 1.69 g; one Sedwick example 1.75 g; one BnF example 1.77 g. None is assigned to this piece.',
    },
    diameter: {
      es: 'No medido. Tipo ≈ 15 mm; la BnF registra 14,9 mm en un 1757 de Madrid que no es este disco.',
      en: 'Not measured. Type ≈ 15 mm; the BnF records 14.9 mm on a 1757 Madrid piece that is not this disc.',
    },
    edge: {
      es: 'Acuñación a volante (técnica de tipo). El canto de este ejemplar no se fotografió.',
      en: 'Milled striking (type technique). This specimen’s edge was not photographed.',
    },
    references: 'KM#378 · Fr#274 · Áureo & Calicó#561 · Calicó 2008#255 · Numista N#26320',
    grade: {
      es: 'Sin encapsular. Desgaste visible en el retrato y el escudo; fecha y leyendas principales legibles. No es un grado numérico.',
      en: 'Unslabbed. Visible wear to the portrait and shield; date and principal legends remain readable. Not a numerical grade.',
    },
    no_serial_reason:
      'Milled Spanish gold half escudo: the type does not carry a serial number, and this example is unslabbed with no certification number.',
    images: {
      composite: '/images/catalog/spain/spain-madrid-medio-escudo-1757-ferdinand-vi-jb-composite.jpg',
      front: '/images/catalog/spain/spain-madrid-medio-escudo-1757-ferdinand-vi-jb-front.jpg',
      back: '/images/catalog/spain/spain-madrid-medio-escudo-1757-ferdinand-vi-jb-back.jpg',
      width: 1840,
      height: 900,
      faceWidth: 900,
      faceHeight: 900,
    },
    title: {
      es: '½ escudo · Fernando VI · Madrid 1757 JB',
      en: '½ escudo · Ferdinand VI · Madrid 1757 JB',
    },
    kicker: {
      es: 'España · Real Casa de Madrid',
      en: 'Spain · Royal Mint of Madrid',
    },
    lead: {
      es: 'Medio escudo de oro de Fernando VI, 1757, ceca de Madrid y ensaye JB. Sin serial y sin encapsular. No es un Fernando VII de 1810 ni oro de Indias.',
      en: 'Ferdinand VI gold half escudo, 1757, Madrid mint and assayers JB. No serial and unslabbed. Not an 1810 Ferdinand VII and not Indies gold.',
    },
    description: {
      es: 'Esta pieza es un medio escudo de oro de la monarquía española, labrado en Madrid en 1757. El anverso muestra el busto de Fernando VI a la derecha, cabello rizado, con la leyenda FERDINAND · VI · D · G · y la fecha 1757 bajo el corte. La fórmula abre Ferdinandus VI Dei Gratia: «Fernando VI, por la gracia de Dios». El reverso lleva el escudo cuartelado de Castilla y León, coronado, y la orla HISPANIARUM · REX —«rey de las Españas»—, sin ET IND. Bajo el escudo, vista la pieza en posición de lectura, van J, la M coronada y B: José Tramullas y Ferrer y Bernardo Muñoz de Amador, con la marca de la Real Casa de Madrid. Las fotografías de catálogo presentan el reverso con la corona arriba; eso no establece el eje de cuños. Krause KM#378 (1748–1759); Friedberg Fr#274; Calicó 2008#255 y Áureo & Calicó 2019#561 (cuarto retrato de esa tabla para el 1757 Madrid JB). Numista N#26320 da oro .917, unos 1,7 g y 15 mm de tipo, y nombra grabador a Tomás Francisco Prieto Martín. Esas cifras de metal y módulo no se midieron en este ejemplar. No es un ½ escudo colonial de las Indias, ni un escudo entero, ni un Fernando VII.',
      en: 'This piece is a gold half escudo of the Spanish monarchy, struck at Madrid in 1757. The obverse shows Ferdinand VI’s bust facing right, curled hair, with the legend FERDINAND · VI · D · G · and the date 1757 below the truncation. The formula expands to Ferdinandus VI Dei Gratia: “Ferdinand VI, by the grace of God.” The reverse carries the quartered arms of Castile and León, crowned, and the legend HISPANIARUM · REX — “king of the Spains” — without ET IND. Below the shield, with the piece upright, are J, a crowned M, and B: José Tramullas y Ferrer and Bernardo Muñoz de Amador, with the mark of the Royal Mint of Madrid. Catalog photographs show the reverse with the crown at the top; that does not establish die axis. Krause KM#378 (1748–1759); Friedberg Fr#274; Calicó 2008#255 and Áureo & Calicó 2019#561 (fourth portrait in that table for the 1757 Madrid JB). Numista N#26320 gives gold .917, about 1.7 g and 15 mm as type figures, and names Tomás Francisco Prieto Martín as engraver. Those metal and module figures were not measured on this specimen. It is not a colonial Indies half escudo, not a full escudo, and not a Ferdinand VII.',
    },
    history: {
      es: 'Fernando VI ocupó el trono de 1746 a 1759. El medio escudo de busto de Madrid con ensaye JB cubre 1748–1759; el 1757 es una fecha documentada por Sedwick, GreatCollections, la BnF y Numista. La pieza circuló como oro menudo de la Península. No se publica aquí un martillo ni un censo de encapsulados. La BnF describe un 1757 de Madrid de 14,9 mm y 1,77 g que no es este disco.',
      en: 'Ferdinand VI held the throne from 1746 to 1759. Madrid’s bust half escudo with assayers JB covers 1748–1759; 1757 is a date documented by Sedwick, GreatCollections, the BnF, and Numista. The piece circulated as peninsula small gold. No hammer and no slab census are published here. The BnF describes a 1757 Madrid of 14.9 mm and 1.77 g that is not this disc.',
    },
    obverseLegend: {
      es: 'FERDINAND · VI · D · G · 1757 — Ferdinandus VI Dei Gratia: «Fernando VI, por la gracia de Dios».',
      en: 'FERDINAND · VI · D · G · 1757 — Ferdinandus VI Dei Gratia: “Ferdinand VI, by the grace of God.”',
    },
    reverseLegend: {
      es: 'HISPANIARUM · REX — «Rey de las Españas». Bajo el escudo: J · M coronada · B (Madrid, ensayadores José Tramullas y Ferrer y Bernardo Muñoz de Amador).',
      en: 'HISPANIARUM · REX — “King of the Spains.” Below the shield: J · crowned M · B (Madrid, assayers José Tramullas y Ferrer and Bernardo Muñoz de Amador).',
    },
    frontCaption: {
      es: 'Anverso: busto de Fernando VI a la derecha; FERDINAND · VI · D · G ·; fecha 1757 bajo el retrato.',
      en: 'Obverse: bust of Ferdinand VI facing right; FERDINAND · VI · D · G ·; date 1757 below the portrait.',
    },
    backCaption: {
      es: 'Reverso, en posición de lectura: escudo coronado de Castilla y León; HISPANIARUM · REX; J, M coronada y B.',
      en: 'Reverse, upright: crowned arms of Castile and León; HISPANIARUM · REX; J, crowned M, and B.',
    },
    scarcity: {
      es: 'El 1757 Madrid JB es una fecha del tipo KM#378, no una emisión única. Numista la lista con Calicó#255 / Áureo#561. No se publica una tirada, ni un índice de rareza como censo, ni precios de subasta. Sedwick y GreatCollections documentan el cruce fecha-ceca-ensaye como comparables; no son este ejemplar.',
      en: 'The 1757 Madrid JB is a date of type KM#378, not a unique issue. Numista lists it with Calicó#255 / Áureo#561. No mintage, rarity-index census, or auction prices are published. Sedwick and GreatCollections document the date-mint-assayer combination as comparables; they are not this specimen.',
    },
    certification: {
      es: 'El ejemplar está suelto, sin cápsula de NGC, PCGS ni otra casa. Las monedas de este módulo no llevan número de serie. La identidad de la ficha es el objeto fotografiado —busto de Fernando VI, 1757, J-M-B de Madrid—, no un certificado. Si más adelante se encapsula, el número de cert sustituirá a esta nota.',
      en: 'The example is raw, with no NGC, PCGS, or other holder. Coins of this module carry no serial number. The identity of this record is the photographed object — Ferdinand VI bust, 1757, Madrid J-M-B — not a certificate. If it is later slabbed, the cert number will replace this note.',
    },
    sources: [
      {
        href: 'https://en.numista.com/26320',
        es: 'Numista — ½ escudo, Fernando VI, Madrid, segundo tipo (N#26320)',
        en: 'Numista — ½ escudo, Ferdinand VI, Madrid, second type (N#26320)',
        note: {
          es: 'KM#378; Calicó 2008#255 y Áureo & Calicó 2019#561 para 1757 M JB; oro .917 de tipo; ensaye JB. No se republica la tabla de precios.',
          en: 'KM#378; Calicó 2008#255 and Áureo & Calicó 2019#561 for 1757 M JB; type gold .917; assayers JB. The price table is not republished.',
        },
      },
      {
        href: 'https://catalogue.bnf.fr/ark:/12148/cb44996437b',
        es: 'BnF — ½ escudo, Fernando VI, 1757, Madrid',
        en: 'BnF — ½ escudo, Ferdinand VI, 1757, Madrid',
        note: {
          es: 'Ejemplar de referencia 14,9 mm y 1,77 g. No es esta pieza; sus medidas no se copian al disco de la colección.',
          en: 'Reference specimen 14.9 mm and 1.77 g. Not this piece; those measurements are not copied onto the collection disc.',
        },
      },
      {
        href: 'https://www.ngccoin.com/price-guide/world/spain-1-2-escudo-km-378-1748-1759-cuid-8426-duid-30829',
        es: 'NGC — ½ escudo de España, KM#378 (1748–1759)',
        en: 'NGC — Spain ½ escudo, KM#378 (1748–1759)',
        note: {
          es: 'Especificación de tipo: oro .917; peso de referencia 1,69 g. No es un ensayo ni un grado de este ejemplar. No se republican precios.',
          en: 'Type specification: gold .917; reference weight 1.69 g. Not an assay or a grade of this specimen. Prices are not republished.',
        },
      },
      {
        href: 'https://auction.sedwickcoins.com/SPAIN-Madrid-gold-bust-escudo-Ferdinand-VI-1757-JB_i59770634',
        es: 'Sedwick — ½ escudo de Madrid, Fernando VI, 1757 JB',
        en: 'Sedwick — Madrid ½ escudo, Ferdinand VI, 1757 JB',
        note: {
          es: 'Comparable de subasta de la fecha y el ensaye. No es este ejemplar; no se publica el martillo. Sedwick cita 1,75 g en un disco distinto.',
          en: 'Auction comparable for the date and assayers. Not this specimen; the hammer is not published. Sedwick cites 1.75 g on a different disc.',
        },
      },
      {
        href: 'https://www.greatcollections.com/Coin/2015531/Spain-1757-M-JB-Gold-12-Escudo-KM-378-NGC-VF-25-AGW-00498-Oz-EDC-Red-Core',
        es: 'GreatCollections — ½ escudo 1757 M JB, KM#378 (comparable)',
        en: 'GreatCollections — 1757 M JB ½ escudo, KM#378 (comparable)',
        note: {
          es: 'Documenta el cruce 1757–Madrid–JB y Fr#274 / KM#378. No es esta pieza; no se republica el precio.',
          en: 'Documents the 1757–Madrid–JB cross and Fr#274 / KM#378. Not this piece; the price is not republished.',
        },
      },
    ],
  },
];

export const coinPageCopy = {
  es: {
    collectionLink: 'Numismática',
    seriesLink: 'España · Numismática',
    frontHeading: 'Anverso',
    backHeading: 'Reverso',
    aboutHeading: 'La pieza',
    historyHeading: 'Historia',
    legendsHeading: 'Leyendas',
    scarcityHeading: 'Rareza y tipo',
    certificationHeading: 'Certificación',
    factsHeading: 'Datos de catálogo',
    sourcesHeading: 'Fuentes',
    yearLabel: 'Año',
    mintLabel: 'Ceca',
    denominationLabel: 'Denominación',
    compositionLabel: 'Composición',
    weightLabel: 'Peso',
    diameterLabel: 'Diámetro',
    edgeLabel: 'Canto',
    referencesLabel: 'Referencias',
    gradeLabel: 'Conservación',
    expandImage: 'Ampliar imagen',
    closeLightbox: 'Cerrar',
    viewCoin: 'Ver la ficha',
    holdingsTitle: 'Piezas de la colección',
    holdingsIntro:
      'Dos oros peninsulares sin encapsular: el 2 escudos de Sevilla de Felipe II, sin fecha, y el medio escudo de Madrid de 1757, ensaye JB.',
    relatedLead: 'Otra pieza de la colección de España.',
  },
  en: {
    collectionLink: 'Numismatics',
    seriesLink: 'Spain · Numismatics',
    frontHeading: 'Obverse',
    backHeading: 'Reverse',
    aboutHeading: 'The coin',
    historyHeading: 'History',
    legendsHeading: 'Legends',
    scarcityHeading: 'Scarcity and type',
    certificationHeading: 'Certification',
    factsHeading: 'Catalog facts',
    sourcesHeading: 'Sources',
    yearLabel: 'Year',
    mintLabel: 'Mint',
    denominationLabel: 'Denomination',
    compositionLabel: 'Composition',
    weightLabel: 'Weight',
    diameterLabel: 'Diameter',
    edgeLabel: 'Edge',
    referencesLabel: 'References',
    gradeLabel: 'Condition',
    expandImage: 'Enlarge image',
    closeLightbox: 'Close',
    viewCoin: 'Open the coin page',
    holdingsTitle: 'Coins in the collection',
    holdingsIntro:
      'Two unslabbed peninsula gold coins: Philip II’s undated Seville 2 escudos, and the 1757 Madrid half escudo, assayers JB.',
    relatedLead: 'Another piece in the Spain collection.',
  },
} as const;

export function coinById(id: string): SpainCoin | undefined {
  return spainCoins.find((coin) => coin.id === id);
}

export function coinagePath(locale: 'es' | 'en'): string {
  return locale === 'en' ? `/en${SPAIN_COINAGE_PATH_EN}` : SPAIN_COINAGE_PATH;
}

export function coinPath(coin: SpainCoin, locale: 'es' | 'en'): string {
  return locale === 'en' ? coin.pathEn : coin.path;
}

export function chapterHref(id: SpainCoinageChapterId): string {
  return `#${id}`;
}

export function notesPath(locale: 'es' | 'en'): string {
  return locale === 'en' ? SPAIN_NOTES_PATH_EN : SPAIN_NOTES_PATH;
}

export const spainCoinSlugs = spainCoins.map((coin) => coin.path.replace(/^\/|\/$/g, ''));

export const spainCoinageDedicatedSlugs = [
  SPAIN_COINAGE_PATH,
  SPAIN_COINAGE_PATH_EN,
  ...spainCoins.flatMap((coin) => [coin.path, coin.pathEn]),
].map((path) => path.replace(/^\/en(?=\/)/, '').replace(/^\/|\/$/g, ''));
