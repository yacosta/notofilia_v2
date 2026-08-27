import type { CatalogSource, LocalizedText } from './catalog';

export const CHINA_PATH = '/coleccion/china/';

export type ChinaChapterId = 'jiaozi' | 'imperio-republica' | 'renminbi' | 'polimero';

export type ChinaChapter = {
  id: ChinaChapterId;
  years: LocalizedText;
  title: LocalizedText;
  lead: LocalizedText;
  body: LocalizedText;
};

export const chinaChapters: ChinaChapter[] = [
  {
    id: 'jiaozi',
    years: { es: '1024–1368', en: '1024–1368' },
    title: {
      es: 'Invención del papel moneda',
      en: 'The invention of paper money',
    },
    lead: {
      es: 'Del jiaozi privado de Sichuan al billete oficial de la dinastía Song, y las grandes emisiones Yuan.',
      en: 'From Sichuan’s private jiaozi to the Song state’s official note, and the great Yuan issues.',
    },
    body: {
      es: 'El papel moneda nació en China. A finales del siglo X, las casas mercantiles de Sichuan —donde circulaba un numerario de hierro demasiado pesado para el comercio de larga distancia— emitieron pagarés llamados jiaozi. Tras quiebras y corridas, el gobierno Song fundó en 1023 la Oficina de Billetes (交子務) en Yizhou, la actual Chengdu, y en 1024 puso en circulación el primer jiaozi oficial del mundo: un título estatal, con sello y número de serie, canjeable por una comisión. Más tarde llegaron el qianyin y, desde 1161, el huizi del Song meridional; en el norte, los Jin imitaron el sistema con el jiaochao. Bajo Kublai Kan, la dinastía Yuan hizo del Zhongtong Chao (1260) una moneda de imperio. La sobreemisión acabó por destruir esa confianza; al caer Yuan, el experimento imperial del papel quedó herido.',
      en: 'Paper money was born in China. In the late tenth century, merchant houses in Sichuan — where iron coinage was too heavy for long-distance trade — issued promissory notes called jiaozi. After failures and runs, the Song government founded a Paper Notes Office (交子務) at Yizhou, today’s Chengdu, in 1023, and in 1024 placed the world’s first official jiaozi in circulation: a state title, sealed and serialled, exchanged for a fee. The qianyin followed, then the Southern Song huizi from 1161; in the north the Jin imitated the system with the jiaochao. Under Kublai Khan the Yuan made the Zhongtong Chao (1260) an imperial currency. Over-issue finally destroyed that trust; when the Yuan fell, the imperial paper experiment was badly wounded.',
    },
  },
  {
    id: 'imperio-republica',
    years: { es: '1375–1948', en: '1375–1948' },
    title: {
      es: 'Ming, Qing y República',
      en: 'Ming, Qing, and the Republic',
    },
    lead: {
      es: 'El baochao ming, el regreso del papel en Xianfeng, la banca moderna y el colapso del fabi.',
      en: 'The Ming baochao, paper’s return under Xianfeng, modern banks, and the collapse of the fabi.',
    },
    body: {
      es: 'Los Ming reanudaron el papel con el Da Ming Tongxing Baochao (1375). La inflación volvió a vaciarlo de valor y los Qing, durante casi dos siglos, se atuvieron al cobre y la plata. La Rebelión Taiping forzó el regreso: en 1853, año Xianfeng 3, el Ministerio de Hacienda emitió el Hubu Guanpiao (notas en taeles de plata) y el Da-Qing Baochao (notas en efectivo de cobre). El billete moderno llegó con la banca: el Banco Imperial de China (中国通商银行, 1897) y, en 1905, el Banco del Hubu, rebautizado Banco Da-Qing en 1908 y sucedido en 1912 por el Banco de China. En noviembre de 1935 el gobierno nacionalista impuso el fabi —moneda fiduciaria de los grandes bancos estatales, sin patrón plata—. La guerra y la guerra civil lo aniquilaron. El 19 de agosto de 1948 el Yuan de Oro sustituyó el fabi a razón de 1 por 3 millones; la hiperinflación no se detuvo.',
      en: 'The Ming revived paper with the Da Ming Tongxing Baochao (1375). Inflation again emptied it of value, and for nearly two centuries the Qing kept to copper and silver. The Taiping Rebellion forced paper’s return: in 1853, Xianfeng 3, the Ministry of Revenue issued the Hubu Guanpiao (silver-tael notes) and the Da-Qing Baochao (copper-cash notes). The modern note arrived with banking: the Imperial Bank of China (中国通商银行, 1897) and, in 1905, the Hubu Bank, renamed the Da-Qing Bank in 1908 and succeeded in 1912 by the Bank of China. In November 1935 the Nationalist government imposed the fabi — a fiat currency of the big state banks, off the silver standard. War and civil war destroyed it. On 19 August 1948 the Gold Yuan replaced the fabi at 1 to 3 million; hyperinflation did not stop.',
    },
  },
  {
    id: 'renminbi',
    years: { es: 'desde 1948', en: 'from 1948' },
    title: {
      es: 'Renminbi',
      en: 'Renminbi',
    },
    lead: {
      es: 'El Banco Popular de China y las cinco series de la moneda popular.',
      en: 'The People’s Bank of China and the five series of the people’s currency.',
    },
    body: {
      es: 'El 1 de diciembre de 1948, en Shijiazhuang, se fundó el Banco Popular de China por fusión del Banco del Norte de China, el Banco Beihai y el Banco de los Campesinos del Noroeste, y se emitió el renminbi. La primera serie —doce denominaciones, 62 diseños— unificó las monedas de las zonas liberadas; se retiró entre el 1 de abril y el 10 de mayo de 1955. El 1 de marzo de 1955 nació la segunda serie, a 1 yuan nuevo por 10.000 de la primera. La tercera se puso en circulación el 15 de abril de 1962; la cuarta, el 27 de abril de 1987, y dejó de ser de curso legal el 1 de mayo de 2019. La quinta serie, desde el 1 de octubre de 1999, lleva el retrato de Mao Zedong en todas las denominaciones de papel, con revisiones en 2005, 2015, 2019 y 2020. El sustrato ordinario de circulación sigue siendo el papel.',
      en: 'On 1 December 1948, in Shijiazhuang, the People’s Bank of China was founded by merging the North China Bank, the Beihai Bank, and the Northwest Farmers Bank, and the renminbi was issued. The first series — twelve denominations, 62 designs — unified the currencies of the liberated areas; it was withdrawn between 1 April and 10 May 1955. The second series appeared on 1 March 1955, at 1 new yuan to 10,000 of the first. The third entered circulation on 15 April 1962; the fourth on 27 April 1987, and it ceased to be legal tender on 1 May 2019. The fifth series, from 1 October 1999, carries Mao Zedong’s portrait on every paper denomination, with revisions in 2005, 2015, 2019, and 2020. Ordinary circulating stock remains paper.',
    },
  },
  {
    id: 'polimero',
    years: { es: '2000 y 2022', en: '2000 and 2022' },
    title: {
      es: 'Billetes de polímero',
      en: 'Polymer banknotes',
    },
    lead: {
      es: 'Dos conmemorativos de plástico: el dragón del milenio y el 20 yuan de los deportes de hielo.',
      en: 'Two plastic commemoratives: the millennium dragon and the ice-sports 20-yuan.',
    },
    body: {
      es: 'El Banco Popular no ha pasado la circulación ordinaria a polímero. El 28 de noviembre de 2000 emitió su primer billete de plástico: 100 yuan del milenio (Pick 902), naranja, con el dragón del Muro de los Nueve Dragones y, al reverso, el Monumento del Milenio de China. El sustrato Guardian se desarrolló con el Reserve Bank of Australia y UCB; unos diez millones de ejemplares, ventana transparente con el Templo del Cielo. El 10 yuan de los Juegos de Pekín 2008 (Pick 908) es papel, no polímero: seis millones de piezas. El segundo plástico llegó con los Juegos Olímpicos de Invierno: el 21 de diciembre de 2021 el banco emitió un juego de dos 20 yuan (145 × 70 mm, 200 millones de juegos). El de deportes de hielo es 塑料钞 —polímero—; el de nieve es papel. Ambos son de curso legal al valor facial. Las fichas de cada pieza se publicarán como en Filipinas, a medida que se documenten.',
      en: 'The People’s Bank has not moved ordinary circulation onto polymer. On 28 November 2000 it issued its first plastic note: the millennium 100-yuan (Pick 902), orange, with the Nine Dragons Wall dragon and, on the back, the China Millennium Monument. The Guardian substrate was developed with the Reserve Bank of Australia and UCB; about ten million notes, with a clear window of the Temple of Heaven. The 2008 Beijing Olympics 10-yuan (Pick 908) is paper, not polymer: six million pieces. The second plastic note came with the Winter Olympics: on 21 December 2021 the bank issued a pair of 20-yuan notes (145 × 70 mm, 200 million sets). The ice-sports note is 塑料钞 — polymer —; the snow-sports note is paper. Both are legal tender at face. Individual note pages will be published as they are documented, as in the Philippines case.',
    },
  },
];

export const seriesSources: CatalogSource[] = [
  {
    href: 'https://www.pbc.gov.cn/rmyh/105226/105433/index.html',
    es: 'Banco Popular de China — Historia del Banco',
    en: 'People’s Bank of China — History of the Bank',
    note: {
      es: 'Fundación el 1 de diciembre de 1948 en Shijiazhuang y emisión del renminbi.',
      en: 'Founded 1 December 1948 in Shijiazhuang and issued the renminbi.',
    },
  },
  {
    href: 'http://en.people.cn/n3/2019/0319/c90000-9557727.html',
    es: 'People’s Daily — Cómo el RMB registra el progreso de China',
    en: 'People’s Daily — How RMB records China’s progress',
    note: {
      es: 'Doce denominaciones de la primera serie; segunda (1955), cuarta (1987) y quinta (1999).',
      en: 'Twelve denominations in the first series; second (1955), fourth (1987), and fifth (1999).',
    },
  },
  {
    href: 'http://www.pbc.gov.cn/zhengwugongkai/4081330/4406346/4700569/4415270/index.html',
    es: 'Banco Popular de China — Anuncio [2021] n.º 22 (Juegos de Invierno)',
    en: 'People’s Bank of China — Announcement [2021] No. 22 (Winter Olympics)',
    note: {
      es: 'Juego de dos 20 yuan (21 dic. 2021): hielo en polímero, nieve en papel; 200 millones de juegos.',
      en: 'Pair of 20-yuan notes (21 Dec. 2021): ice on polymer, snow on paper; 200 million sets.',
    },
  },
  {
    href: 'https://www.hoover.org/research/rise-and-demise-paper-money-imperial-china',
    es: 'Hoover Institution — Auge y ocaso del papel moneda en la China imperial',
    en: 'Hoover Institution — The Rise and Demise of Paper Money in Imperial China',
    note: {
      es: 'Jiaozi privado en Sichuan; estatización en 1023 y primer billete oficial.',
      en: 'Private jiaozi in Sichuan; state takeover in 1023 and the first official note.',
    },
  },
  {
    href: 'https://www.pmgnotes.com/news/article/4311/',
    es: 'PMG — 100 yuan del milenio (Pick 902)',
    en: 'PMG — Millennium 100-yuan (Pick 902)',
    note: {
      es: 'Primer polímero de la República Popular; 28 de noviembre de 2000; sustrato Guardian.',
      en: 'First polymer note of the People’s Republic; 28 November 2000; Guardian substrate.',
    },
  },
  {
    href: 'https://en.wikipedia.org/wiki/Commemorative_banknotes_of_the_renminbi',
    es: 'Wikipedia — Billetes conmemorativos del renminbi',
    en: 'Wikipedia — Commemorative banknotes of the renminbi',
    note: {
      es: 'El 100 yuan de 2000 es polímero; el 10 yuan olímpico de 2008 es papel.',
      en: 'The 2000 100-yuan is polymer; the 2008 Olympic 10-yuan is paper.',
    },
  },
  {
    href: 'http://www.banknote.ws/COLLECTION/countries/ASI/PRC/PRC.htm',
    es: 'Bank Note Museum — República Popular China',
    en: 'Bank Note Museum — People’s Republic of China',
  },
  {
    href: 'http://www.banknote.ws/COLLECTION/countries/ASI/CHI/CHI.htm',
    es: 'Bank Note Museum — China (imperio y República)',
    en: 'Bank Note Museum — China (empire and Republic)',
  },
  {
    href: 'https://en.numista.com/312895',
    es: 'Numista — 20 yuan (Juegos Olímpicos de Invierno, polímero)',
    en: 'Numista — 20 Yuan (Beijing Winter Olympics, polymer)',
  },
];

export const seriesCopy = {
  es: {
    metaTitle: 'China · Papel moneda histórico y polímero | Notofilia',
    metaDescription:
      'Historia del papel moneda chino: jiaozi de la dinastía Song, emisiones Qing y republicanas, series del renminbi y los conmemorativos de polímero del Banco Popular.',
    kicker: 'China · Notafilia',
    title: 'Del jiaozi al polímero',
    heroAlt:
      'Mapa vintage en relieve 3D de China sobre pergamino, con la Gran Muralla, el Ejército de terracota, Shanghái, un pasaporte y el título China',
    intro: [
      'China inventó el papel moneda. A finales del siglo X, los comerciantes de Sichuan —ahogados por monedas de hierro— emitieron jiaozi, pagarés privados. El gobierno Song los estatizó en 1023 y, en 1024, puso en circulación el primer billete oficial del mundo desde la Oficina de Billetes de Yizhou, la actual Chengdu. El Instituto Hoover sitúa ahí el paso de un título mercantil a una moneda de Estado. El Song meridional siguió con el huizi; los Yuan, con el Zhongtong Chao de 1260, llevaron el papel a escala imperial —y la sobreemisión a su primera gran crisis.',
      'Los Ming reabrieron el experimento con el Da Ming Tongxing Baochao (1375). Otra inflación lo vació, y los Qing se atuvieron al cobre y la plata hasta la Rebelión Taiping. En 1853 reaparecieron el Hubu Guanpiao y el Da-Qing Baochao. El billete moderno nació con la banca: el Banco Imperial de China (1897) y el Banco Da-Qing (1905–1908), sucesor en 1912 del Banco de China. En noviembre de 1935 el gobierno nacionalista impuso el fabi, fiduciario y sin plata. El 19 de agosto de 1948 el Yuan de Oro lo canjeó a 1 por 3 millones; la hiperinflación no cesó.',
      'El 1 de diciembre de 1948, en Shijiazhuang, el Banco Popular de China —fusión del Banco del Norte de China, el Beihai y el Banco de los Campesinos del Noroeste— emitió el renminbi. La primera serie tuvo doce denominaciones y 62 diseños; se retiró en 1955 al nacer la segunda, a 1 yuan nuevo por 10.000. Vinieron la tercera (1962), la cuarta (1987, desmonetizada el 1 de mayo de 2019) y la quinta (1999), con Mao Zedong en todo el papel de circulación.',
      'El polímero, en China, es conmemorativo. El 28 de noviembre de 2000 el banco emitió el 100 yuan del milenio (Pick 902) en sustrato Guardian: su primer plástico. El 10 yuan olímpico de 2008 es papel. El segundo polímero llegó el 21 de diciembre de 2021, en el 20 yuan de deportes de hielo de los Juegos de Invierno; su compañero de nieve sigue en papel. La circulación ordinaria no ha cambiado de sustrato.',
    ],
    holdingsTitle: 'El catálogo',
    holdingsIntro:
      'Esta vitrina exhibe solo los billetes de polímero. Por ahora, el 100 yuan del milenio (Pick 902). Las demás piezas se publicarán como en Filipinas, a medida que se documenten.',
    viewNote: 'Ver la ficha',
    viewChapter: 'Leer el capítulo',
    sourcesTitle: 'Fuentes',
    eraLabel: 'Época',
    pickLabel: 'Pick',
    serialLabel: 'Serie',
    parentLink: 'Billetes de polímero',
  },
  en: {
    metaTitle: 'China · Historical paper money and polymer notes | Notofilia',
    metaDescription:
      'History of Chinese paper money: Song-dynasty jiaozi, Qing and Republican issues, the renminbi series, and the People’s Bank polymer commemoratives.',
    kicker: 'China · Notaphily',
    title: 'From jiaozi to polymer',
    heroAlt:
      'Vintage 3D relief map of China on parchment, with the Great Wall, the Terracotta Army, Shanghai, a passport, and the title China',
    intro: [
      'China invented paper money. In the late tenth century, Sichuan merchants — weighed down by iron coin — issued jiaozi, private promissory notes. The Song state took them over in 1023 and, in 1024, placed the world’s first official banknote in circulation from the Paper Notes Office at Yizhou, today’s Chengdu. The Hoover Institution marks that step from a merchant title to a state currency. The Southern Song followed with the huizi; the Yuan, with the Zhongtong Chao of 1260, took paper to imperial scale — and over-issue to its first great crisis.',
      'The Ming reopened the experiment with the Da Ming Tongxing Baochao (1375). Inflation emptied it again, and the Qing kept to copper and silver until the Taiping Rebellion. In 1853 the Hubu Guanpiao and Da-Qing Baochao returned. The modern note arrived with banking: the Imperial Bank of China (1897) and the Da-Qing Bank (1905–1908), succeeded in 1912 by the Bank of China. In November 1935 the Nationalist government imposed the fabi, a fiat currency off silver. On 19 August 1948 the Gold Yuan redeemed it at 1 to 3 million; hyperinflation did not stop.',
      'On 1 December 1948, in Shijiazhuang, the People’s Bank of China — a merger of the North China Bank, the Beihai Bank, and the Northwest Farmers Bank — issued the renminbi. The first series had twelve denominations and 62 designs; it was withdrawn in 1955 when the second appeared, at 1 new yuan to 10,000. Then came the third (1962), the fourth (1987, demonetized 1 May 2019), and the fifth (1999), with Mao Zedong on every circulating paper denomination.',
      'Polymer, in China, is commemorative. On 28 November 2000 the bank issued the millennium 100-yuan (Pick 902) on Guardian substrate: its first plastic note. The 2008 Olympic 10-yuan is paper. The second polymer note arrived on 21 December 2021, the Winter Olympics ice-sports 20-yuan; its snow-sports companion remains paper. Ordinary circulation has not changed substrate.',
    ],
    holdingsTitle: 'The catalog',
    holdingsIntro:
      'This case exhibits only the polymer notes. For now, the millennium 100-yuan (Pick 902). Further pieces will be published as they are documented, as in the Philippines case.',
    viewNote: 'Open the note page',
    viewChapter: 'Read the chapter',
    sourcesTitle: 'Sources',
    eraLabel: 'Period',
    pickLabel: 'Pick',
    serialLabel: 'Serial',
    parentLink: 'Polymer banknotes',
  },
} as const;

export type ChinaNoteId = '100-yuan';

export type ChinaNote = {
  id: ChinaNoteId;
  path: string;
  pick: string;
  serial: string;
  signatures: LocalizedText;
  printed: LocalizedText;
  images: {
    composite: string;
    front: string;
    back: string;
  };
  title: LocalizedText;
  kicker: LocalizedText;
  lead: LocalizedText;
  description: LocalizedText;
  frontCaption: LocalizedText;
  backCaption: LocalizedText;
  scarcity: LocalizedText;
  population: LocalizedText;
  grade: LocalizedText;
  sources: CatalogSource[];
};

export const chinaNotes: ChinaNote[] = [
  {
    id: '100-yuan',
    path: '/coleccion/china/100-yuan/',
    pick: 'P#902',
    serial: 'J04445744',
    signatures: {
      es: 'Sin firmas (emisión conmemorativa del Banco Popular)',
      en: 'No signatures (People’s Bank commemorative issue)',
    },
    printed: {
      es: 'Unos 10 millones de ejemplares (Pick 902; prefijo J de circulación y reemplazos I)',
      en: 'About 10 million notes (Pick 902; circulating J prefix and I replacements)',
    },
    images: {
      composite: '/images/catalog/china/100-yuan-2000-composite.jpg',
      front: '/images/catalog/china/100-yuan-2000-front.jpg',
      back: '/images/catalog/china/100-yuan-2000-back.jpg',
    },
    title: {
      es: '100 yuan · Milenio 2000',
      en: '100 Yuan · Millennium 2000',
    },
    kicker: {
      es: 'China · Banco Popular · Polímero conmemorativo',
      en: 'China · People’s Bank · Commemorative polymer',
    },
    lead: {
      es: 'Primer billete de polímero de la República Popular: dragón del Muro de los Nueve Dragones y, al reverso, el Monumento del Milenio. Serie J04445744.',
      en: 'First polymer note of the People’s Republic: Nine Dragons Wall dragon and, on the back, the China Millennium Monument. Serial J04445744.',
    },
    description: {
      es: 'El 100 yuan del milenio (Pick 902) se emitió el 28 de noviembre de 2000. El anverso, naranja, muestra el dragón del Muro de los Nueve Dragones persiguiendo la perla; a la izquierda, una ventana transparente con el Templo del Cielo y, arriba a la derecha, un dispositivo ópticamente variable con el carácter 千年. El texto «迎接新世纪纪念钞» lo marca como conmemorativo. El reverso lleva el Monumento del Milenio de China, apsaras y el emblema nacional. El sustrato Guardian se desarrolló con el Reserve Bank of Australia y UCB. Esta pieza de la colección, en funda y sin encapsular, lleva el número de serie J04445744.',
      en: 'The millennium 100-yuan (Pick 902) was issued on 28 November 2000. The orange face shows the Nine Dragons Wall dragon chasing the pearl; at left, a clear window with the Temple of Heaven and, at upper right, an optically variable device with the characters 千年. The legend “迎接新世纪纪念钞” marks it as a commemorative. The back shows the China Millennium Monument, apsaras, and the national emblem. The Guardian substrate was developed with the Reserve Bank of Australia and UCB. This collection piece, sleeved and unslabbed, is serial J04445744.',
    },
    frontCaption: {
      es: 'Anverso del 100 yuan, serie J04445744: dragón, ventana del Templo del Cielo y sello del milenio.',
      en: 'Face of the 100-yuan note, serial J04445744: dragon, Temple of Heaven window, and millennium seal.',
    },
    backCaption: {
      es: 'Reverso del 100 yuan: Monumento del Milenio de China, apsaras y emblema nacional.',
      en: 'Back of the 100-yuan note: China Millennium Monument, apsaras, and the national emblem.',
    },
    scarcity: {
      es: 'PMG sitúa la tirada en unos diez millones: alrededor de 9,1 millones con prefijo J y reemplazos con prefijo I. Es el primer —y, hasta 2021, único— polímero de circulación conmemorativa del Banco Popular. El 10 yuan olímpico de 2008 (Pick 908) es papel.',
      en: 'PMG places the printage at about ten million: around 9.1 million with prefix J and I-prefix replacements. It is the first — and, until 2021, only — commemorative polymer note of the People’s Bank. The 2008 Olympic 10-yuan (Pick 908) is paper.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo PMG o PCGS para este número de serie. La pieza se presenta en estado original, en funda, sin encapsular.',
      en: 'A PMG or PCGS census for this serial has not been independently verified. The note is shown in original, sleeved, unslabbed condition.',
    },
    grade: {
      es: 'Sin encapsular, en funda (colección privada)',
      en: 'Unslabbed, in a sleeve (private collection)',
    },
    sources: [
      {
        href: 'https://www.pmgnotes.com/news/article/4311/',
        es: 'PMG — 100 yuan del milenio (Pick 902)',
        en: 'PMG — Millennium 100-yuan (Pick 902)',
      },
      {
        href: 'https://www.banknoteworld.org/china-people-s-republic-100-yuan-2000-p-902.html',
        es: 'Banknote World — China 100 yuan 2000, P-902',
        en: 'Banknote World — China 100 Yuan 2000, P-902',
      },
    ],
  },
];

export const notePageCopy = {
  es: {
    seriesLink: 'Billetes de polímero mundial',
    collectionLink: 'China',
    frontHeading: 'Anverso',
    backHeading: 'Reverso',
    aboutHeading: 'La pieza',
    scarcityHeading: 'Rareza e impresión',
    populationHeading: 'Población',
    factsHeading: 'Datos de catálogo',
    sourcesHeading: 'Fuentes',
    printedLabel: 'Impresión',
    signaturesLabel: 'Firmas',
    serialLabel: 'Número de serie',
    pickLabel: 'Referencia Pick',
    gradeLabel: 'Conservación',
    expandImage: 'Ampliar imagen',
    closeLightbox: 'Cerrar',
  },
  en: {
    seriesLink: 'World polymer banknotes',
    collectionLink: 'China',
    frontHeading: 'Face',
    backHeading: 'Back',
    aboutHeading: 'The note',
    scarcityHeading: 'Scarcity and printage',
    populationHeading: 'Population',
    factsHeading: 'Catalog facts',
    sourcesHeading: 'Sources',
    printedLabel: 'Printage',
    signaturesLabel: 'Signatures',
    serialLabel: 'Serial number',
    pickLabel: 'Pick reference',
    gradeLabel: 'Condition',
    expandImage: 'Enlarge image',
    closeLightbox: 'Close',
  },
} as const;

/** Only polymer notes are on exhibit; the other chapters stay as page history. */
export const catalogChapters = chinaChapters.filter((chapter) => chapter.id === 'polimero');

export function noteById(id: string): ChinaNote | undefined {
  return chinaNotes.find((note) => note.id === id);
}

export function notePath(note: ChinaNote, locale: 'es' | 'en'): string {
  return locale === 'en' ? `/en${note.path}` : note.path;
}

export const chinaNoteSlugs = chinaNotes.map((note) => note.path.replace(/^\/|\/$/g, ''));

export function seriesPath(locale: 'es' | 'en'): string {
  return locale === 'en' ? `/en${CHINA_PATH}` : CHINA_PATH;
}

export function chapterHref(id: ChinaChapterId): string {
  return `#${id}`;
}
