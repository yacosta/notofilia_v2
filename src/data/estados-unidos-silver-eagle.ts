import type { CatalogSource, LocalizedText } from './catalog';
import {
  coinagePath,
  unitedStatesCoins,
  USA_SILVER_EAGLE_PATH,
  USA_SILVER_EAGLE_PATH_EN,
  type UnitedStatesCoin,
} from './estados-unidos-coinage';

export type SilverEagleSection = {
  id: string;
  title: LocalizedText;
  paragraphs: LocalizedText[];
};

export type SilverEagleSpecRow = {
  attribute: LocalizedText;
  value: LocalizedText;
};

export type SilverEagleEdgeRow = {
  year: string;
  place: LocalizedText;
};

export const silverEagleSeriesCopy = {
  es: {
    metaTitle: 'American Silver Eagle, 1986–2026 · EE. UU. | Notofilia',
    metaDescription:
      'Onza troy de plata .999 de la United States Mint, 1986–2026: Walking Liberty, reversos de Mercanti y Damstra, acabados y cecas. La vitrina de fichas está abierta.',
    kicker: 'Estados Unidos · Numismática',
    title: 'American Silver Eagle (1986–2026)',
    breadcrumbCurrent: 'American Silver Eagle, 1986–2026',
    parentLink: 'Numismática',
    seriesLink: 'Estados Unidos · Numismática',
    holdingsTitle: 'En esta colección',
    holdingsIntro:
      'Todavía no hay un American Silver Eagle catalogado en esta vitrina. Cada ficha —año, acabado, marca de ceca si la hay, anverso y reverso— se publicará en esta página.',
    viewCoin: 'Ver la ficha',
    specTitle: 'Especificaciones del tipo',
    specIntro:
      'Peso, diámetro, ley, valor facial y canto estriado son los de la United States Mint para la onza de plata. El grosor es la medida que Numista da del tipo, no un calibre de una pieza de esta vitrina. Esta página no publica precios.',
    specAttribute: 'Dato',
    specValue: 'Medida publicada',
    edgeTitle: 'Dónde cae la variación del canto',
    edgeIntro:
      'Desde 2021 el canto sigue estriado y lleva una variación que la Mint usa como dispositivo de seguridad. Numista publica el lugar de esa variación en el tipo 2, mirando el anverso. No es la lectura de una moneda de esta vitrina.',
    edgeYear: 'Año',
    edgePlace: 'Lugar en el anverso',
    keyTitle: 'Fechas que ordenan la serie',
    keyIntro:
      'Estas fechas separan la serie: la primera acuñación, la prueba que solo salió en un juego, el año sin prueba y las emisiones con un límite publicado. La cifra es una tirada o un límite, no un precio. Donde las cuentas no coinciden, la casilla queda vacía. Esta página no publica precios.',
    keyDate: 'Fecha',
    keyMintage: 'Cifra publicada',
    keyNote: 'Qué la distingue',
    mintageTitle: 'Onzas de inversión por año',
    mintageIntro:
      'Cada fila es la onza de inversión de ese año: una moneda, una onza troy, sin marca de ceca. La cifra es la venta que la United States Mint publica a sus compradores autorizados. No es una prueba, no es un satinado y no es un recuento de esta vitrina. En 2012, 2013 y 2014 el cuadro de producción por ceca que la Mint entregó en 2017 cuenta más piezas acuñadas que la venta de ese año. Esta tabla no usa ese cuadro. Donde las ventas publicadas no coinciden, la casilla queda vacía. 2026 sigue abierto. Esta página no publica precios.',
    mintageYear: 'Año',
    mintageSales: 'Venta de inversión',
    mintageNote: 'Nota',
    sourcesTitle: 'Fuentes',
    relatedTitle: 'También en la vitrina',
  },
  en: {
    metaTitle: 'American Silver Eagle, 1986–2026 · U.S. | Notofilia',
    metaDescription:
      'The United States Mint’s .999 silver ounce, 1986–2026: Walking Liberty, the Mercanti and Damstra reverses, finishes, and mints. The record case is open.',
    kicker: 'United States · Numismatics',
    title: 'American Silver Eagle (1986–2026)',
    breadcrumbCurrent: 'American Silver Eagle, 1986–2026',
    parentLink: 'Numismatics',
    seriesLink: 'United States · Numismatics',
    holdingsTitle: 'In this collection',
    holdingsIntro:
      'No American Silver Eagle is catalogued in this case yet. Each record — year, finish, mint mark when there is one, obverse, and reverse — will be published on this page.',
    viewCoin: 'Open the coin page',
    specTitle: 'Type specifications',
    specIntro:
      'Weight, diameter, fineness, face value, and the reeded edge are the United States Mint’s figures for the silver ounce. Thickness is Numista’s measurement of the type, not a caliper reading of a piece in this case. This page does not publish prices.',
    specAttribute: 'Attribute',
    specValue: 'Published figure',
    edgeTitle: 'Where the edge variation falls',
    edgeIntro:
      'From 2021 the edge stays reeded and carries a variation the Mint uses as a security device. Numista publishes where that variation sits on the Type 2, viewed from the obverse. It is not a reading of a coin in this case.',
    edgeYear: 'Year',
    edgePlace: 'Place on the obverse',
    keyTitle: 'Dates that order the series',
    keyIntro:
      'These dates separate the series: the first striking, the proof that came only in a set, the year with no proof, and the issues with a published limit. The figure is a mintage or a limit, not a price. Where the counts do not agree, the cell stays empty. This page does not publish prices.',
    keyDate: 'Date',
    keyMintage: 'Published figure',
    keyNote: 'What sets it apart',
    mintageTitle: 'Bullion ounces by year',
    mintageIntro:
      'Each row is that year’s investment ounce: one coin, one troy ounce, no mint mark. The figure is the sale the United States Mint publishes to its authorized purchasers. It is not a proof, not a burnished piece, and not a count of this case. For 2012, 2013, and 2014 the facility-production chart the Mint released in 2017 counts more pieces struck than that year’s sales. This table does not use that chart. Where the published sales do not agree, the cell stays empty. 2026 is still open. This page does not publish prices.',
    mintageYear: 'Year',
    mintageSales: 'Bullion sales',
    mintageNote: 'Note',
    sourcesTitle: 'Sources',
    relatedTitle: 'Also in the case',
  },
} as const;

export const silverEagleSeriesLead: LocalizedText = {
  es: 'El 9 de julio de 1985 el Congreso autorizó una moneda de una onza troy de plata fina, con la Libertad en el anverso y un águila en el reverso. La United States Mint la acuñó por primera vez en 1986 y la mantiene en producción en 2026. Esta página es la vitrina de esa serie: las fichas de cada pieza de la colección se publicarán aquí.',
  en: 'On 9 July 1985 Congress authorized a coin of one troy ounce of fine silver, with Liberty on the obverse and an eagle on the reverse. The United States Mint first struck it in 1986 and still strikes it in 2026. This page is that series case: each piece in the collection will be published here.',
};

export const silverEagleNarrative: SilverEagleSection[] = [
  {
    id: 'ley',
    title: {
      es: 'La ley de 1985',
      en: 'The act of 1985',
    },
    paragraphs: [
      {
        es: 'La plata y el oro no salieron de la misma ley. El Título II de la Public Law 99-61, firmada el 9 de julio de 1985 y conocida como Liberty Coin Act, ordena una moneda de plata de una onza troy, ley .999, con un diseño de la Libertad y un águila. El valor facial es un dólar: cumple el estatuto. No mide el metal. La Gold Bullion Coin Act, Public Law 99-185, es posterior. El 17 de diciembre de 1985 autoriza las monedas de oro de inversión, con oro de mina nacional.',
        en: 'The silver and the gold did not come from the same act. Title II of Public Law 99-61, signed on 9 July 1985 and known as the Liberty Coin Act, requires a silver coin of one troy ounce, .999 fine, with a Liberty design and an eagle. The face value is one dollar: it satisfies the statute. It does not measure the metal. The Gold Bullion Coin Act, Public Law 99-185, is later. On 17 December 1985 it authorizes the gold bullion coins, using gold from domestic mines.',
      },
      {
        es: 'El 1 de octubre de 1985 una orden ejecutiva prohibió importar el Krugerrand sudafricano. La ley de sanciones de 1986 confirmó esa restricción. El hueco en el oro al por menor es posterior a la ley de la plata, que ya estaba firmada en julio. El programa de 1986 incluye también el águila de oro. El platino se emitió en 1997. El paladio se autorizó en 2010 y la Mint lo puso en el mercado en 2017. Esta vitrina es solo la onza de plata.',
        en: 'On 1 October 1985 an executive order banned importation of the South African Krugerrand. The 1986 sanctions act confirmed that restriction. The gap in retail gold comes after the silver act, which was already signed in July. The 1986 program also includes the gold eagle. Platinum was first issued in 1997. Palladium was authorized in 2010 and first issued in 2017. This case is only the silver ounce.',
      },
    ],
  },
  {
    id: 'diseno',
    title: {
      es: 'Walking Liberty y los dos reversos',
      en: 'Walking Liberty and the two reverses',
    },
    paragraphs: [
      {
        es: 'El anverso retoma la Walking Liberty de Adolph A. Weinman, el medio dólar de 1916 a 1947. La Libertad avanza hacia el sol, envuelta en la bandera. El brazo derecho va extendido. El izquierdo lleva laurel y roble. En 2021, al cumplir 35 años el programa, la Mint acercó ese anverso al modelo de Weinman y añadió su marca de artista, AAW. El anverso anterior no la lleva.',
        en: 'The obverse returns to Adolph A. Weinman’s Walking Liberty, the half dollar of 1916 to 1947. Liberty strides toward the sun, wrapped in the flag. Her right arm is extended. Her left carries laurel and oak. In 2021, at the program’s 35th year, the Mint brought that obverse closer to Weinman’s model and added his artist’s mark, AAW. The earlier obverse does not carry it.',
      },
      {
        es: 'El reverso tiene dos tipos, y 2021 acuñó los dos. El tipo 1, de John Mercanti, corre de 1986 a 2021: un águila heráldica tras un escudo, con una rama de olivo y un haz de flechas. En la moneda van sus iniciales, JM. El tipo 2 entra a mediados de 2021. Lo diseñó Emily Damstra y lo grabó Michael Gaudioso: un águila que se acerca al suelo con una rama de roble, como para sumarla a un nido. Las leyendas del reverso siguen siendo UNITED STATES OF AMERICA, E PLURIBUS UNUM, 1 OZ. FINE SILVER y ONE DOLLAR.',
        en: 'The reverse has two types, and 2021 struck both. Type 1, by John Mercanti, runs from 1986 to 2021: a heraldic eagle behind a shield, with an olive branch and a bundle of arrows. His initials, JM, are on the coin. Type 2 enters in mid-2021. Emily Damstra designed it and Michael Gaudioso sculpted it: an eagle coming in to land with an oak branch, as if to add it to a nest. The reverse legends remain UNITED STATES OF AMERICA, E PLURIBUS UNUM, 1 OZ. FINE SILVER, and ONE DOLLAR.',
      },
    ],
  },
  {
    id: 'acabados',
    title: {
      es: 'Inversión, prueba y satinado',
      en: 'Bullion, proof, and burnished',
    },
    paragraphs: [
      {
        es: 'La pieza de inversión se acuña para el mercado del metal. No lleva marca de ceca, salga de West Point, de San Francisco o de Filadelfia. La Mint no la vende en su tienda al público: sale por la red de compradores autorizados. La prueba es de coleccionista. Los cuños pulidos golpean el cospel varias veces, y la moneda lleva marca. La página actual de la Mint describe la prueba con W de West Point. En otros años la marca ha sido S o P. El acabado satinado, el que el comercio llama burnished, se introdujo en 2006, suele llevar W y no se acuña todos los años. Algunos años añaden el enhanced uncirculated o el reverse proof. La ficha de cada pieza dirá el acabado y la marca que esa moneda trae.',
        en: 'The bullion piece is struck for the metal market. It carries no mint mark, whether it comes from West Point, San Francisco, or Philadelphia. The Mint does not sell it in the public store: it leaves through the authorized-purchaser network. The proof is a collector coin. Polished dies strike the planchet more than once, and the coin bears a mint mark. The Mint’s current page describes the proof with a West Point W. In other years the mark has been S or P. The satin finish, which the trade calls burnished, was introduced in 2006, usually bears a W, and is not struck every year. Some years add an enhanced uncirculated or a reverse proof. Each coin’s record will name the finish and the mark that piece actually carries.',
      },
      {
        es: 'La Mint publica más de 500 millones de onzas troy vendidas desde 1986. Esa cifra es la suya. No es un recuento de esta colección, y esta página no publica primas ni precios de mostrador.',
        en: 'The Mint publishes more than 500 million troy ounces sold since 1986. That figure is the Mint’s. It is not a count of this collection, and this page does not publish premiums or over-the-counter prices.',
      },
    ],
  },
  {
    id: 'cajas',
    title: {
      es: 'La caja de 500 y la ceca que no está en la moneda',
      en: 'The 500-coin box and the mint that is not on the coin',
    },
    paragraphs: [
      {
        es: 'La moneda de inversión sale en una caja verde de 500 piezas: 25 tubos de 20. Como el cospel no lleva marca, la ceca no se lee en el metal. Las casas de clasificación la han reconstruido cuando la caja llega todavía precintada y el número del fleje identifica el origen. Si el precinto se abre antes, esa lectura se pierde. La cápsula que dice «acuñada en Filadelfia» documenta la caja, no una letra en la moneda.',
        en: 'Bullion leaves in a green box of 500 pieces: 25 tubes of 20. Because the planchet has no mint mark, the house that struck it is not on the metal. Grading services have reconstructed it when the box arrives still sealed and the strap number identifies the origin. If the seal is opened first, that reading is gone. A slab that says “struck at Philadelphia” documents the box, not a letter on the coin.',
      },
      {
        es: 'En 2015, con escasez de cospeles en West Point, una parte de la acuñación de inversión salió de Filadelfia. Esas piezas no llevan marca. En abril de 2020 West Point interrumpió el trabajo, y Filadelfia acuñó onzas de inversión para no cortar el suministro. Tampoco llevan marca. Las cuentas publicadas de esas dos corridas no coinciden entre sí, así que esta página no fija una tirada. La ficha, si la pieza viene de una de esas cajas, dirá qué atribución trae la cápsula y qué no se puede leer en el canto.',
        en: 'In 2015, when West Point was short of planchets, part of the bullion striking came from Philadelphia. Those pieces have no mint mark. In April 2020 West Point paused, and Philadelphia struck investment ounces so the supply would not stop. They have no mint mark either. Published counts of those two runs do not agree, so this page does not fix a mintage. If a piece comes from one of those boxes, its record will say what the slab attributes and what cannot be read on the edge.',
      },
    ],
  },
];

export const silverEagleSpecRows: SilverEagleSpecRow[] = [
  {
    attribute: { es: 'Valor facial', en: 'Face value' },
    value: { es: '1 dólar', en: '$1' },
  },
  {
    attribute: { es: 'Peso', en: 'Weight' },
    value: { es: '31,103 g (1 onza troy)', en: '31.103 g (1 troy ounce)' },
  },
  {
    attribute: { es: 'Ley', en: 'Fineness' },
    value: { es: 'Plata .999', en: '.999 fine silver' },
  },
  {
    attribute: { es: 'Diámetro', en: 'Diameter' },
    value: { es: '40,6 mm', en: '40.6 mm' },
  },
  {
    attribute: { es: 'Grosor', en: 'Thickness' },
    value: { es: '2,98 mm (Numista)', en: '2.98 mm (Numista)' },
  },
  {
    attribute: { es: 'Canto', en: 'Edge' },
    value: {
      es: 'Estriado; desde 2021, con una variación',
      en: 'Reeded; from 2021, with a variation',
    },
  },
  {
    attribute: { es: 'Anverso', en: 'Obverse' },
    value: { es: 'Walking Liberty, Adolph A. Weinman', en: 'Walking Liberty, Adolph A. Weinman' },
  },
  {
    attribute: { es: 'Reverso, 1986–2021', en: 'Reverse, 1986–2021' },
    value: { es: 'Águila heráldica, John Mercanti', en: 'Heraldic eagle, John Mercanti' },
  },
  {
    attribute: { es: 'Reverso, desde 2021', en: 'Reverse, from 2021' },
    value: {
      es: 'Águila que aterriza, Emily Damstra; grabado de Michael Gaudioso',
      en: 'Landing eagle, Emily Damstra; sculpted by Michael Gaudioso',
    },
  },
];

export const silverEagleEdgeRows: SilverEagleEdgeRow[] = [
  {
    year: '2021',
    place: { es: 'Bajo la fecha (las 6)', en: 'Below the date (6 o’clock)' },
  },
  {
    year: '2022',
    place: { es: 'Junto al sol naciente (hacia las 7:30)', en: 'Beside the rising sun (about 7:30)' },
  },
  {
    year: '2023',
    place: { es: 'Junto a la Y de LIBERTY (las 3)', en: 'Near the Y of LIBERTY (3 o’clock)' },
  },
  {
    year: '2024',
    place: { es: 'Después de la L de LIBERTY (las 9)', en: 'After the L of LIBERTY (9 o’clock)' },
  },
  {
    year: '2025',
    place: { es: 'Antes de la I de LIBERTY (las 10)', en: 'Before the I of LIBERTY (10 o’clock)' },
  },
  {
    year: '2026',
    place: { es: 'Antes de la B de LIBERTY (las 11)', en: 'Before the B of LIBERTY (11 o’clock)' },
  },
];

export type SilverEagleFigureRow = {
  date: string;
  mintage: LocalizedText;
  note: LocalizedText;
};

function publishedCount(n: number, suffix?: LocalizedText): LocalizedText {
  const digits = String(n);
  const es = digits.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  const en = digits.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  if (!suffix) return { es, en };
  return { es: `${es} ${suffix.es}`, en: `${en} ${suffix.en}` };
}

const noPublishedCount: LocalizedText = { es: '—', en: '—' };
const setsLabel: LocalizedText = { es: 'juegos', en: 'sets' };
const limitLabel: LocalizedText = { es: '(límite)', en: '(limit)' };

const sanFranciscoOnly: LocalizedText = {
  es: 'Toda la producción de ese año, en San Francisco.',
  en: 'All of that year’s production, at San Francisco.',
};
const bothHouses: LocalizedText = {
  es: 'San Francisco y West Point.',
  en: 'San Francisco and West Point.',
};
const westPointOnly: LocalizedText = {
  es: 'West Point.',
  en: 'West Point.',
};
const salesNotStrikes: LocalizedText = {
  es: 'Venta del año. El cuadro de cecas de 2017 cuenta más piezas acuñadas.',
  en: 'That year’s sales. The 2017 facility chart counts more pieces struck.',
};

const bullionSales: { year: string; count: number | null; note: LocalizedText }[] = [
  { year: '1986', count: 5393005, note: sanFranciscoOnly },
  { year: '1987', count: 11442335, note: sanFranciscoOnly },
  { year: '1988', count: 5004646, note: bothHouses },
  { year: '1989', count: 5203327, note: bothHouses },
  { year: '1990', count: 5840110, note: bothHouses },
  { year: '1991', count: 7191066, note: bothHouses },
  { year: '1992', count: 5540068, note: bothHouses },
  { year: '1993', count: 6763762, note: bothHouses },
  { year: '1994', count: 4227319, note: bothHouses },
  { year: '1995', count: 4672051, note: bothHouses },
  { year: '1996', count: 3603386, note: bothHouses },
  { year: '1997', count: 4295004, note: bothHouses },
  { year: '1998', count: 4847549, note: bothHouses },
  { year: '1999', count: 7408640, note: westPointOnly },
  { year: '2000', count: 9239132, note: westPointOnly },
  { year: '2001', count: 9001711, note: westPointOnly },
  { year: '2002', count: 10539026, note: westPointOnly },
  { year: '2003', count: 8495008, note: westPointOnly },
  { year: '2004', count: 8882754, note: westPointOnly },
  { year: '2005', count: 8891025, note: westPointOnly },
  { year: '2006', count: 10676522, note: westPointOnly },
  { year: '2007', count: 9028036, note: westPointOnly },
  { year: '2008', count: 20583000, note: westPointOnly },
  { year: '2009', count: 30459000, note: westPointOnly },
  { year: '2010', count: 34764500, note: westPointOnly },
  {
    year: '2011',
    count: 40020000,
    note: {
      es: 'West Point y San Francisco. Otra tabla da 39.860.500.',
      en: 'West Point and San Francisco. Another table gives 39,860,500.',
    },
  },
  { year: '2012', count: 33742500, note: salesNotStrikes },
  { year: '2013', count: 42675000, note: salesNotStrikes },
  { year: '2014', count: 44006000, note: salesNotStrikes },
  {
    year: '2015',
    count: 47000000,
    note: {
      es: 'Total del año. La parte de Filadelfia no se separa.',
      en: 'Year total. The Philadelphia portion is not split out.',
    },
  },
  {
    year: '2016',
    count: 37701500,
    note: {
      es: 'West Point, San Francisco y Filadelfia.',
      en: 'West Point, San Francisco, and Philadelphia.',
    },
  },
  {
    year: '2017',
    count: 18065500,
    note: { es: 'Inversión, sin marca.', en: 'Bullion, no mint mark.' },
  },
  {
    year: '2018',
    count: 15700000,
    note: { es: 'Inversión, sin marca.', en: 'Bullion, no mint mark.' },
  },
  {
    year: '2019',
    count: 14863500,
    note: { es: 'Inversión, sin marca.', en: 'Bullion, no mint mark.' },
  },
  {
    year: '2020',
    count: null,
    note: {
      es: 'Las ventas publicadas no coinciden.',
      en: 'The published sales do not agree.',
    },
  },
  {
    year: '2021',
    count: 28275000,
    note: {
      es: 'Tipos 1 y 2, sin reparto.',
      en: 'Type 1 and Type 2, not split.',
    },
  },
  {
    year: '2022',
    count: 15963500,
    note: { es: 'Inversión, sin marca.', en: 'Bullion, no mint mark.' },
  },
  {
    year: '2023',
    count: 24750000,
    note: { es: 'Inversión, sin marca.', en: 'Bullion, no mint mark.' },
  },
  {
    year: '2024',
    count: null,
    note: {
      es: 'Las cuentas de cierre no coinciden.',
      en: 'The year-end counts do not agree.',
    },
  },
  {
    year: '2025',
    count: 11568000,
    note: {
      es: 'Inversión. Las marcas privadas de ese año no van en esta cifra.',
      en: 'Bullion. That year’s privy-mark issues are not in this figure.',
    },
  },
  {
    year: '2026',
    count: null,
    note: { es: 'El año sigue abierto.', en: 'The year is still open.' },
  },
];

export const silverEagleMintageRows: SilverEagleFigureRow[] = bullionSales.map((row) => ({
  date: row.year,
  mintage: row.count === null ? noPublishedCount : publishedCount(row.count),
  note: row.note,
}));

export const silverEagleKeyRows: SilverEagleFigureRow[] = [
  {
    date: '1986',
    mintage: publishedCount(5393005),
    note: {
      es: 'Primera onza de inversión. El 29 de octubre de 1986 se acuñó en San Francisco, con el secretario del Tesoro James A. Baker III. Las ventas empezaron el 24 de noviembre. No lleva marca de ceca.',
      en: 'First investment ounce. On 29 October 1986 it was struck at San Francisco, with Treasury Secretary James A. Baker III. Sales began on 24 November. It has no mint mark.',
    },
  },
  {
    date: '1986-S',
    mintage: publishedCount(1446778),
    note: {
      es: 'Primera prueba. Lleva la S de San Francisco.',
      en: 'First proof. It bears the San Francisco S.',
    },
  },
  {
    date: '1995-W',
    mintage: publishedCount(30125, setsLabel),
    note: {
      es: 'Prueba de West Point. Se vendió solo en el juego de cinco monedas del décimo aniversario.',
      en: 'West Point proof. It was sold only in the five-coin set of the tenth anniversary.',
    },
  },
  {
    date: '1996',
    mintage: publishedCount(3603386),
    note: {
      es: 'La venta de inversión más baja entre los años que la tabla de abajo numera.',
      en: 'The lowest bullion sales among the years the table below numbers.',
    },
  },
  {
    date: '2000',
    mintage: publishedCount(75000, setsLabel),
    note: {
      es: 'Límite del Millennium Coinage and Currency Set: una onza de inversión de West Point sin W, un dólar Sacagawea de Denver y un billete de un dólar.',
      en: 'Limit of the Millennium Coinage and Currency Set: a West Point investment ounce with no W, a Denver Sacagawea dollar, and a one-dollar note.',
    },
  },
  {
    date: '2009',
    mintage: publishedCount(30459000),
    note: {
      es: 'Solo inversión. El 6 de octubre de 2009 la Mint anunció que ese año no habría prueba ni satinado.',
      en: 'Bullion only. On 6 October 2009 the Mint announced there would be no proof and no burnished coin that year.',
    },
  },
  {
    date: '2015',
    mintage: noPublishedCount,
    note: {
      es: 'Parte de la inversión salió de Filadelfia, sin marca. Las cuentas de esa corrida no coinciden, así que esta página no la fija. El total del año está en la tabla de abajo.',
      en: 'Part of the bullion came from Philadelphia, with no mint mark. Counts of that run do not agree, so this page does not fix it. The year total is in the table below.',
    },
  },
  {
    date: '2019-W',
    mintage: publishedCount(110000, setsLabel),
    note: {
      es: 'Enhanced reverse proof de West Point, en el juego Pride of Two Nations con la Royal Canadian Mint. Límite de la emisión.',
      en: 'West Point enhanced reverse proof, in the Pride of Two Nations set with the Royal Canadian Mint. Issue limit.',
    },
  },
  {
    date: '2019-S',
    mintage: publishedCount(30000, limitLabel),
    note: {
      es: 'Enhanced reverse proof de San Francisco, suelta, no la del juego con Canadá. Límite de la emisión, no un cierre de ventas.',
      en: 'San Francisco enhanced reverse proof, sold on its own, not the one in the Canadian set. Issue limit, not a final sales close.',
    },
  },
  {
    date: '2020',
    mintage: noPublishedCount,
    note: {
      es: 'En abril Filadelfia acuñó onzas de inversión mientras West Point estaba cerrado. No llevan marca. Las cuentas de esa corrida no coinciden.',
      en: 'In April Philadelphia struck investment ounces while West Point was closed. They have no mint mark. Counts of that run do not agree.',
    },
  },
  {
    date: '2020-W V75',
    mintage: publishedCount(75000, limitLabel),
    note: {
      es: 'Prueba del 75.º aniversario del fin de la Segunda Guerra Mundial, con la marca privada V75.',
      en: 'Proof for the 75th anniversary of the end of the Second World War, with the V75 privy mark.',
    },
  },
  {
    date: '2021',
    mintage: publishedCount(125000, setsLabel),
    note: {
      es: 'Máximo del juego de dos reverse proof: tipo 1 en West Point y tipo 2 en San Francisco. Ese año también hubo inversión de los dos tipos; esta página no la reparte.',
      en: 'Maximum for the two-coin reverse-proof set: Type 1 at West Point and Type 2 at San Francisco. That year also had bullion of both types; this page does not split it.',
    },
  },
  {
    date: '2026',
    mintage: noPublishedCount,
    note: {
      es: 'El año sigue abierto. Esta página no fija la tirada.',
      en: 'The year is still open. This page does not fix the mintage.',
    },
  },
];

export const silverEagleSeriesSources: CatalogSource[] = [
  {
    href: 'https://www.govinfo.gov/content/pkg/STATUTE-99/pdf/STATUTE-99-Pg113.pdf',
    es: 'Public Law 99-61 — Liberty Coin Act, 9 de julio de 1985',
    en: 'Public Law 99-61 — Liberty Coin Act, 9 July 1985',
    note: {
      es: 'Título II. Onza troy, plata .999, Libertad y águila. No se republican precios.',
      en: 'Title II. Troy ounce, .999 silver, Liberty and an eagle. Prices are not republished.',
    },
  },
  {
    href: 'https://www.govinfo.gov/content/pkg/STATUTE-99/pdf/STATUTE-99-Pg1177.pdf',
    es: 'Public Law 99-185 — Gold Bullion Coin Act, 17 de diciembre de 1985',
    en: 'Public Law 99-185 — Gold Bullion Coin Act, 17 December 1985',
    note: {
      es: 'El oro de inversión es otra ley, posterior a la de la plata.',
      en: 'Investment gold is a separate act, later than the silver act.',
    },
  },
  {
    href: 'https://www.archives.gov/federal-register/codification/executive-order/12535.html',
    es: 'Orden ejecutiva 12535 — prohibición del Krugerrand, 1 de octubre de 1985',
    en: 'Executive Order 12535 — Krugerrand ban, 1 October 1985',
    note: {
      es: 'La restricción del oro sudafricano es posterior a la Liberty Coin Act.',
      en: 'The South African gold restriction comes after the Liberty Coin Act.',
    },
  },
  {
    href: 'https://www.usmint.gov/coins/coin-medal-programs/american-eagle/silver-bullion',
    es: 'United States Mint — American Eagle Silver Bullion',
    en: 'United States Mint — American Eagle Silver Bullion',
    note: {
      es: 'Ley .999, 31,103 g, 40,6 mm, 1 dólar, canto estriado, sin marca de ceca. Más de 500 millones de onzas vendidas desde 1986, cifra de la Mint. No se republican precios.',
      en: '.999 fine, 31.103 g, 40.6 mm, $1, reeded edge, no mint mark. More than 500 million ounces sold since 1986, the Mint’s figure. Prices are not republished.',
    },
  },
  {
    href: 'https://www.usmint.gov/news/press-releases/united-states-mint-unveils-new-american-eagle-gold-and-silver-coin-reverse-designs',
    es: 'United States Mint — reversos nuevos, 2021',
    en: 'United States Mint — new reverses, 2021',
    note: {
      es: 'Tipo 2 desde mediados de 2021. Diseño de Emily Damstra, grabado de Michael Gaudioso. El anverso refresca a Weinman.',
      en: 'Type 2 from mid-2021. Designed by Emily Damstra, sculpted by Michael Gaudioso. The obverse refreshes Weinman.',
    },
  },
  {
    href: 'https://en.numista.com/1493',
    es: 'Numista — American Silver Eagle, tipo 1 (N# 1493)',
    en: 'Numista — American Silver Eagle, Type 1 (N# 1493)',
    note: {
      es: 'KM# 273. Plata .999, 31,103 g, 40,6 mm, 2,98 mm, canto estriado. Anverso de Weinman, reverso de Mercanti, 1986–2021.',
      en: 'KM# 273. .999 silver, 31.103 g, 40.6 mm, 2.98 mm, reeded edge. Weinman obverse, Mercanti reverse, 1986–2021.',
    },
  },
  {
    href: 'https://en.numista.com/298883',
    es: 'Numista — American Silver Eagle, tipo 2 (N# 298883)',
    en: 'Numista — American Silver Eagle, Type 2 (N# 298883)',
    note: {
      es: 'KM# 746. Mismas medidas. Reverso de Damstra y Gaudioso, 2021–2026, y el lugar de la variación del canto. No se republica el valor de metal.',
      en: 'KM# 746. The same measurements. Damstra and Gaudioso reverse, 2021–2026, and where the edge variation sits. Melt value is not republished.',
    },
  },
  {
    href: 'https://www.usmint.gov/about/production-sales-figures/bullion-sales',
    es: 'United States Mint — ventas de inversión',
    en: 'United States Mint — bullion sales',
    note: {
      es: 'La tabla anual sigue esas ventas donde las compilaciones coinciden. No fija 2020, 2024 ni 2026. No se republican precios.',
      en: 'The year table follows those sales where the compilations agree. It does not fix 2020, 2024, or 2026. Prices are not republished.',
    },
  },
  {
    href: 'https://www.coinworld.com/news/us-coins/mint-foia-response-confirms-origins-of-american-eagles',
    es: 'Coin World — cuadro de la Mint por ceca, 1986 a julio de 2017',
    en: 'Coin World — Mint facility chart, 1986 through July 2017',
    note: {
      es: 'Totales de 1986–2011 y 2015–2016 coinciden con las ventas. 2012–2014 cuentan más piezas acuñadas; esta página no los usa como venta del año. No se separa la parte de Filadelfia de 2015.',
      en: 'Totals for 1986–2011 and 2015–2016 match the sales. 2012–2014 count more pieces struck; this page does not use them as that year’s sales. The 2015 Philadelphia portion is not split out.',
    },
  },
  {
    href: 'https://en.wikipedia.org/wiki/American_Silver_Eagle',
    es: 'American Silver Eagle — fechas de la primera acuñación y de las emisiones especiales',
    en: 'American Silver Eagle — dates of the first striking and the special issues',
    note: {
      es: 'San Francisco, 29 de octubre de 1986; ventas desde el 24 de noviembre. Prueba 1995-W: 30.125 juegos. Límite de 75.000 para la prueba V75. No se republican precios.',
      en: 'San Francisco, 29 October 1986; sales from 24 November. 1995-W proof: 30,125 sets. Limit of 75,000 for the V75 proof. Prices are not republished.',
    },
  },
  {
    href: 'https://www.usmint.gov/news/press-releases/united-states-mint-and-royal-canadian-mint-launch-limited-edition-coin-set-celebrating-the-pride-of-two-nations',
    es: 'United States Mint — Pride of Two Nations, 2019',
    en: 'United States Mint — Pride of Two Nations, 2019',
    note: {
      es: 'Límite de 110.000 juegos. Enhanced reverse proof de West Point. No se republica el precio.',
      en: 'Limit of 110,000 sets. West Point enhanced reverse proof. The price is not republished.',
    },
  },
  {
    href: 'https://www.coinworld.com/news/us-coins/mint-updates-sales-totals-for-enhanced-reverse-proof-2019-s-american-eagle',
    es: 'Coin World — enhanced reverse proof 2019-S',
    en: 'Coin World — 2019-S enhanced reverse proof',
    note: {
      es: 'La Mint ofreció 30.000. Esta página publica ese límite, no un cierre de ventas posterior. No se republica el precio.',
      en: 'The Mint offered 30,000. This page publishes that limit, not a later sales close. The price is not republished.',
    },
  },
  {
    href: 'https://www.usmint.gov/news/press-releases/united-states-mint-to-release-set-of-2021-reverse-proof-american-eagle-silver-coins-on-september-13',
    es: 'United States Mint — juego reverse proof de 2021',
    en: 'United States Mint — 2021 reverse-proof set',
    note: {
      es: 'Máximo de 125.000 juegos. Tipo 1 en West Point y tipo 2 en San Francisco. No se republica el precio.',
      en: 'Maximum of 125,000 sets. Type 1 at West Point and Type 2 at San Francisco. The price is not republished.',
    },
  },
];

export const silverEagleRelated = [
  {
    href: '/glosario/numismatica/',
    title: { es: 'Glosario: numismática', en: 'Glossary: numismatics' },
    dek: {
      es: 'El estudio de la moneda metálica, distinto de la notafilia.',
      en: 'The study of coin, distinct from notaphily.',
    },
  },
  {
    href: '/coleccion/estados-unidos-numismatica/dolar-morgan-emision-original-1878-1904/',
    title: { es: 'Dólar Morgan, 1878–1904', en: 'Morgan dollar, 1878–1904' },
    dek: {
      es: 'El dólar de plata anterior: 26,73 g y ley .900, no esta onza .999.',
      en: 'The earlier silver dollar: 26.73 g and .900 fine, not this .999 ounce.',
    },
  },
  {
    href: '/coleccion/estados-unidos-numismatica/',
    title: { es: 'Estados Unidos · Numismática', en: 'United States · Numismatics' },
    dek: {
      es: 'La vitrina metálica: fichas Hard Times, oro, el Morgan y el dólar de 2026.',
      en: 'The coin case: Hard Times tokens, gold, the Morgan, and the 2026 dollar.',
    },
  },
] as const;

/** Coins with `chapterId: 'american-silver-eagle'` appear here and in the USA numismatics menu. */
export function silverEagleHoldings(): UnitedStatesCoin[] {
  return unitedStatesCoins.filter((coin) => coin.chapterId === 'american-silver-eagle');
}

export { coinagePath as silverEagleParentPath, USA_SILVER_EAGLE_PATH, USA_SILVER_EAGLE_PATH_EN };
