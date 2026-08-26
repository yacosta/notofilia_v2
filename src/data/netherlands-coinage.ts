import type { CatalogSource, LocalizedText } from './catalog';
import { NETHERLANDS_PATH } from './netherlands';

export const NUMISMATICS_PATH = '/coleccion/numismatica/';
export const NETHERLANDS_COINAGE_PATH = '/coleccion/numismatica/paises-bajos/';

export type NetherlandsCoinageChapterId = 'medieval' | 'ducado-comercial' | 'gulden-decimal' | 'ocupacion-euro';

export type NetherlandsCoinageChapter = {
  id: NetherlandsCoinageChapterId;
  years: LocalizedText;
  title: LocalizedText;
  lead: LocalizedText;
  body: LocalizedText;
};

export const netherlandsCoinageChapters: NetherlandsCoinageChapter[] = [
  {
    id: 'medieval',
    years: { es: 's. IX–1567', en: '9th c.–1567' },
    title: {
      es: 'Del penique al gulden',
      en: 'From penny to gulden',
    },
    lead: {
      es: 'Del sistema carolingio al gulden de 1434: el florín neerlandés nació como moneda de plata a la par del florín de oro italiano.',
      en: 'From the Carolingian system to the 1434 gulden: the Dutch florin began as a silver unit on a par with the Italian gold florin.',
    },
    body: {
      es: 'Antes de 1434 las tierras bajas siguieron el sistema carolingio: la libra se dividía en 20 sueldos y el sueldo en 12 peniques. Hubo peniques locales desde el siglo IX y gruesos al estilo del gros tournois en el XIII; el grote flamenco se devaluó más rápido que sus pares franceses. En 1434, Felipe el Bueno fijó el gulden en 20 stuivers —unos 32,6 g de plata fina— a la par del florín italiano, y el stuiver en 8 duiten. El nombre gulden, «dorado», recuerda esa equivalencia. En el siglo XVI siguieron el karolusgulden de oro (1520) y el de plata (1541). Las provincias y ciudades acuñaban por su cuenta; esa fragmentación es el punto de partida de la ceca de Utrecht.',
      en: 'Before 1434 the Low Countries followed the Carolingian system: a pound of 20 shillings and a shilling of 12 pennies. Local pennies appear from the ninth century and gros-tournois-style groats in the thirteenth; the Flemish grote depreciated faster than its French peers. In 1434 Philip the Good set the gulden at 20 stuivers — about 32.6 g of fine silver — on a par with the Italian florin, and the stuiver at 8 duiten. The name gulden, “golden,” remembers that equivalence. The sixteenth century added the gold Karolusgulden (1520) and the silver one (1541). Provinces and towns struck for themselves; that fragmentation is the starting point of the Utrecht mint.',
    },
  },
  {
    id: 'ducado-comercial',
    years: { es: '1567–1813', en: '1567–1813' },
    title: {
      es: 'Cecas provinciales y ducado',
      en: 'Provincial mints and the ducat',
    },
    lead: {
      es: 'Utrecht acuñó desde 1567; el ducado de oro de 1586 se volvió moneda de comercio mundial. Esta colección documenta un ejemplar de 1761.',
      en: 'Utrecht has struck since 1567; the 1586 gold ducat became a world trade coin. This collection records a 1761 example.',
    },
    body: {
      es: 'La Koninklijke Nederlandse Munt sitúa su origen en Utrecht en 1567, cuando cada provincia acuñaba su propia moneda. El 4 de agosto de 1586 el ducado de oro quedó inscrito en la ley monetaria como moneda de comercio: caballero con espada y haz de siete flechas, y la leyenda CONCORDIA RES PARVAE CRESCUNT. El peso y la ley fijos lo hicieron aceptable desde el Báltico hasta Asia; Rusia y los Estados alemanes llegaron a imitarlo. En plata circularon el leeuwendaalder, el rijksdaalder, el ducatón «jinete de plata» y el stuiver. El Wisselbank de 1609 frenó las devaluaciones provinciales al ensayar el metal. En el XVIII las cecas provinciales —Utrecht entre ellas— siguieron emitiendo duiten de cobre, stuivers, gulden y ducados de 1 y 2. Esta vitrina reúne, de esa época, el ducado de oro de Utrecht de 1761. En 1806, bajo Luis Bonaparte, se unificó la acuñación en la ceca de Utrecht.',
      en: 'The Royal Dutch Mint traces its origin to Utrecht in 1567, when each province struck its own money. On 4 August 1586 the gold ducat entered the mint act as a trade coin: a knight with sword and a bundle of seven arrows, and the legend CONCORDIA RES PARVAE CRESCUNT. Fixed weight and fineness made it welcome from the Baltic to Asia; Russia and the German states even imitated it. In silver the leeuwendaalder, rijksdaalder, “silver rider” ducaton, and stuiver circulated. The 1609 Wisselbank slowed provincial debasements by assaying the metal. In the eighteenth century provincial mints — Utrecht among them — still issued copper duiten, stuivers, gulden, and 1- and 2-ducat pieces. This case records, from that period, the 1761 Utrecht gold ducat. In 1806, under Louis Bonaparte, striking was unified at the Utrecht mint.',
    },
  },
  {
    id: 'gulden-decimal',
    years: { es: '1814–1940', en: '1814–1940' },
    title: {
      es: 'El gulden decimal',
      en: 'The decimal gulden',
    },
    lead: {
      es: 'Guillermo I rebautizó la ceca como ’s Rijks Munt; en 1817 el gulden pasó a 100 céntimos y nació la moneda nacional moderna.',
      en: 'William I renamed the mint ’s Rijks Munt; in 1817 the gulden became 100 cents and modern national coinage began.',
    },
    body: {
      es: 'En 1814 la ceca unificada se llamó ’s Rijks Munt. Hubo una segunda casa en Bruselas hasta la independencia belga; desde 1839 Utrecht fue la única del reino. En 1817 se decimalizó el gulden: primero el céntimo de cobre y el 3 gulden de plata; en 1818 llegaron ½ céntimo, 5, 10 y 25 céntimos, ½ y 1 gulden, y el 10 gulden de oro. En 1840 se redujo la plata y el 3 gulden cedió al 2½ —el rijksdaalder de la era decimal—. Las monedas provinciales se retiraron en 1849. El patrón oro de 1875 trajo de nuevo el 10 gulden de 6,048 g de oro fino. El 5 céntimos pasó de plata a cuproníquel redondo (1907) y luego a la célebre pieza cuadrada (1913). El oro de circulación se apagó en 1933; el ½ gulden, en 1930. Los nombres populares —stuiver, dubbeltje, kwartje, piek, riks— sobrevivieron a la decimalización.',
      en: 'In 1814 the unified mint was named ’s Rijks Munt. A second house in Brussels lasted until Belgian independence; from 1839 Utrecht was the kingdom’s only mint. In 1817 the gulden was decimalized: first the copper cent and the silver 3-gulden; in 1818 came the ½ cent, 5, 10, and 25 cents, the ½ and 1 gulden, and the gold 10-gulden. In 1840 silver was reduced and the 3-gulden yielded to the 2½ — the decimal-era rijksdaalder. Provincial coins were withdrawn in 1849. The 1875 gold standard brought back the 10-gulden of 6.048 g fine gold. The 5-cent went from silver to round cupronickel (1907) and then to the famous square piece (1913). Circulating gold ended in 1933; the ½ gulden in 1930. Popular names — stuiver, dubbeltje, kwartje, piek, riks — outlived decimalization.',
    },
  },
  {
    id: 'ocupacion-euro',
    years: { es: '1940–2002', en: '1940–2002' },
    title: {
      es: 'Cinc, posguerra y euro',
      en: 'Zinc, postwar, and the euro',
    },
    lead: {
      es: 'El ocupante acuñó cinc; Estados Unidos preparó plata para la liberación; el euro en efectivo llegó en 2002.',
      en: 'The occupier struck zinc; the United States prepared silver for liberation; euro cash arrived in 2002.',
    },
    body: {
      es: 'En 1941 el ocupante sustituyó el vellón de preguerra por cinc de 1, 2½, 5, 10 y 25 céntimos. Un real decreto de 1944 encargó en Estados Unidos 10 y 25 céntimos y 1 gulden de plata, tipo preguerra, para la liberación; el cinc se desmonetizó y se fundió. En 1948 volvieron el céntimo y el 5 céntimos de bronce con Wilhelmina; Juliana ocupó el anverso desde 1950. El gulden y el rijksdaalder de plata regresaron en 1954 y 1959 y pasaron a níquel en 1967; la plata se desmonetizó en 1973. El céntimo se dejó de acuñar en 1980. En 1982 Bruno Ninaber van Eyben rediseñó toda la serie con la silueta de Beatriz; el 5 gulden en moneda llegó en 1988. El 1 de enero de 2002 circuló el euro. Las monedas en gulden se pudieron cambiar en DNB hasta el 1 de enero de 2007; los billetes, en su mayoría, hasta 2032. La ceca, Koninklijke desde 1999, se privatizó en 2016 y se trasladó a Houten en 2020. Sigue acuñando el ducado de oro y el de plata como piezas de colección.',
      en: 'In 1941 the occupier replaced pre-war billon with zinc 1, 2½, 5, 10, and 25 cents. A 1944 royal decree ordered silver 10 and 25 cents and 1-gulden of the pre-war type from the United States for liberation; the zinc was demonetized and melted. In 1948 the bronze cent and 5-cent returned with Wilhelmina; Juliana took the obverse from 1950. The silver gulden and rijksdaalder returned in 1954 and 1959 and went to nickel in 1967; silver was demonetized in 1973. The cent ceased in 1980. In 1982 Bruno Ninaber van Eyben redesigned the series with Beatrix’s silhouette; the 5-gulden coin arrived in 1988. Euro cash circulated from 1 January 2002. Guilder coins could be exchanged at DNB until 1 January 2007; most notes remain exchangeable until 2032. The mint, Royal since 1999, was privatized in 2016 and moved to Houten in 2020. It still strikes the gold and silver ducat as collector pieces.',
    },
  },
];

export const seriesSources: CatalogSource[] = [
  {
    href: 'https://royaldutchmint-corporate.com/about-us',
    es: 'Royal Dutch Mint — Sobre nosotros',
    en: 'Royal Dutch Mint — About us',
    note: {
      es: 'Fundación en Utrecht en 1567; ceca central desde 1806; predicado Real en 1999; traslado a Houten en 2020.',
      en: 'Founded in Utrecht in 1567; central mint from 1806; Royal predicate in 1999; move to Houten in 2020.',
    },
  },
  {
    href: 'https://en.wikipedia.org/wiki/Royal_Dutch_Mint',
    es: 'Wikipedia — Koninklijke Nederlandse Munt',
    en: 'Wikipedia — Royal Dutch Mint',
    note: {
      es: 'Decreto de 1806, ’s Rijks Munt, retiro de las provinciales en 1849, acuñación en EE. UU. en 1944.',
      en: '1806 decree, ’s Rijks Munt, withdrawal of provincial coins in 1849, 1944 striking in the United States.',
    },
  },
  {
    href: 'https://www.royaldutchmint.com/dutch-coins/specials/golden-ducats',
    es: 'Royal Dutch Mint — Ducados de oro',
    en: 'Royal Dutch Mint — Golden ducats',
    note: {
      es: 'Inscrito en la ley monetaria el 4 de agosto de 1586; caballero, flechas y CONCORDIA RES PARVAE CRESCUNT.',
      en: 'Entered in the mint act on 4 August 1586; knight, arrows, and CONCORDIA RES PARVAE CRESCUNT.',
    },
  },
  {
    href: 'https://en.wikipedia.org/wiki/Dutch_guilder',
    es: 'Wikipedia — Gulden neerlandés (monedas)',
    en: 'Wikipedia — Dutch guilder (coins)',
    note: {
      es: 'Reforma de 1434, decimalización de 1817, cinc de ocupación, series de posguerra y canje de monedas hasta 2007.',
      en: '1434 reform, 1817 decimalization, occupation zinc, postwar series, and coin exchange through 2007.',
    },
  },
  {
    href: 'https://en.numista.com/catalogue/pieces323147.html',
    es: 'Numista — Ducado de oro de Utrecht (N# 323147)',
    en: 'Numista — Utrecht gold ducat (N# 323147)',
    note: {
      es: 'Tipo comercial de las Provincias Unidas; referencia de la pieza de 1761 documentada en la colección.',
      en: 'United Provinces trade type; reference for the 1761 piece recorded in the collection.',
    },
  },
  {
    href: 'https://www.dnb.nl/en/money-exchange/exchanging-guilder-banknotes/',
    es: 'De Nederlandsche Bank — Canje del gulden',
    en: 'De Nederlandsche Bank — Exchanging the guilder',
    note: {
      es: 'Las monedas en gulden ya no se canjean; el plazo en DNB venció el 1 de enero de 2007.',
      en: 'Guilder coins are no longer exchanged; the DNB window closed on 1 January 2007.',
    },
  },
];

export const seriesCopy = {
  es: {
    metaTitle: 'Países Bajos · Historia de la acuñación | Notofilia',
    metaDescription:
      'Catálogo de moneda neerlandesa: del gulden de 1434 al ducado de Utrecht, el gulden decimal, el cinc de ocupación y el euro.',
    kicker: 'Países Bajos · Numismática',
    title: 'Historia de la acuñación',
    heroAlt:
      'Mapa vintage en relieve 3D de los Países Bajos sobre pergamino, con Ámsterdam, la torre Dom de Utrecht, Kinderdijk, campos de tulipanes, un pasaporte y el título Países Bajos',
    intro: [
      'La Colección Virtual separa la numismática —moneda acuñada— de la notafilia. En los Países Bajos esa historia empieza antes del papel: peniques carolingios, el grote flamenco y, en 1434, el gulden de Felipe el Bueno, tasado en 20 stuivers y a la par del florín de oro italiano.',
      'Las provincias acuñaron por su cuenta hasta que Utrecht, desde 1567, se convirtió en ceca de referencia. El ducado de oro, inscrito en la ley monetaria el 4 de agosto de 1586, llevó por el mundo al caballero con el haz de siete flechas. Esta vitrina documenta un ducado de Utrecht de 1761. El Wisselbank de 1609 estabilizó el metal; en 1806 Luis Bonaparte unificó la acuñación en esa misma ciudad.',
      'Guillermo I rebautizó la casa como ’s Rijks Munt. En 1817 el gulden pasó a 100 céntimos. El 3 gulden de plata cedió en 1840 al 2½; las provinciales se retiraron en 1849. El patrón oro de 1875 devolvió el 10 gulden; el 5 céntimos cuadrado de 1913 se volvió una de las piezas más reconocibles del siglo XX.',
      'La ocupación sustituyó el vellón por cinc; Estados Unidos acuñó plata de tipo preguerra para la liberación. Bruno Ninaber van Eyben rediseñó la serie de Beatriz en 1982. El euro en efectivo llegó el 1 de enero de 2002; las monedas en gulden se pudieron cambiar en DNB hasta el 1 de enero de 2007. El papel moneda de este país se cataloga aparte, en Notafilia.',
    ],
    holdingsTitle: 'El catálogo',
    holdingsIntro:
      'Cuatro capítulos, en la misma fila de izquierda a derecha por época: el gulden medieval, el ducado comercial, el gulden decimal y el paso al euro. Debajo, la ficha del ducado de Utrecht de 1761 documentado en esta colección.',
    viewChapter: 'Leer el capítulo',
    sourcesTitle: 'Fuentes',
    eraLabel: 'Época',
    parentLink: 'Numismática',
    notesLink: 'Ver el papel moneda de los Países Bajos',
  },
  en: {
    metaTitle: 'Netherlands · History of the coinage | Notofilia',
    metaDescription:
      'Catalog of Dutch coinage: from the 1434 gulden to the Utrecht ducat, the decimal gulden, occupation zinc, and the euro.',
    kicker: 'Netherlands · Numismatics',
    title: 'History of the coinage',
    heroAlt:
      'Vintage 3D relief map of the Netherlands on parchment, with Amsterdam, the Utrecht Dom Tower, Kinderdijk, tulip fields, a passport, and the title Netherlands',
    intro: [
      'The Virtual Collection separates numismatics — struck coin — from notaphily. In the Netherlands that history begins before paper: Carolingian pennies, the Flemish grote, and, in 1434, Philip the Good’s gulden, rated at 20 stuivers and on a par with the Italian gold florin.',
      'The provinces struck for themselves until Utrecht, from 1567, became the reference mint. The gold ducat, entered in the mint act on 4 August 1586, carried the knight with the bundle of seven arrows around the world. This case records a 1761 Utrecht ducat. The 1609 Wisselbank stabilized the metal; in 1806 Louis Bonaparte unified striking in that same city.',
      'William I renamed the house ’s Rijks Munt. In 1817 the gulden became 100 cents. The silver 3-gulden yielded in 1840 to the 2½; provincial coins were withdrawn in 1849. The 1875 gold standard restored the 10-gulden; the square 5-cent of 1913 became one of the most recognizable twentieth-century types.',
      'Occupation replaced billon with zinc; the United States struck pre-war-type silver for liberation. Bruno Ninaber van Eyben redesigned Beatrix’s series in 1982. Euro cash arrived on 1 January 2002; guilder coins could be exchanged at DNB until 1 January 2007. This country’s paper money is catalogued separately, under Notaphily.',
    ],
    holdingsTitle: 'The catalog',
    holdingsIntro:
      'Four chapters in one row, left to right by period: the medieval gulden, the trade ducat, the decimal gulden, and the changeover to the euro. Below, the ficha of the 1761 Utrecht ducat recorded in this collection.',
    viewChapter: 'Read the chapter',
    sourcesTitle: 'Sources',
    eraLabel: 'Period',
    parentLink: 'Numismatics',
    notesLink: 'See Netherlands paper money',
  },
} as const;

export const numismaticsCopy = {
  es: {
    metaTitle: 'Numismática · Catálogo de monedas | Notofilia',
    metaDescription:
      'Catálogo de moneda acuñada de la Colección Virtual: historia de la acuñación de los Países Bajos y fichas por ceca y tipo.',
    kicker: 'Colección virtual',
    title: 'Numismática',
    intro: [
      'La Colección Virtual separa la numismática —monedas acuñadas— de la notafilia. Aquí se documentan cecas, leyes, tipos de comercio y las series nacionales, con las mismas fichas y fuentes que en los catálogos de papel.',
      'La primera vitrina de país es la de los Países Bajos: del gulden de 1434 al ducado de Utrecht, el gulden decimal y el euro. El oro colonial de Santa Fe y los cobres de necesidad se añadirán a medida que se documenten, como en el sitio en producción.',
    ],
    holdingsTitle: 'El catálogo',
    holdingsIntro: 'Entre por un país. Las fichas de cada pieza se publicarán a medida que se documenten.',
    viewChapter: 'Abrir el catálogo',
    notesLink: 'Ver la colección de notafilia',
  },
  en: {
    metaTitle: 'Numismatics · Coin catalog | Notofilia',
    metaDescription:
      'Struck-coin catalog of the Virtual Collection: the history of Netherlands coinage and records by mint and type.',
    kicker: 'Virtual collection',
    title: 'Numismatics',
    intro: [
      'The Virtual Collection separates numismatics — struck coins — from notaphily. This catalog records mints, alloys, trade types, and national series, with the same note pages and sources as the paper catalogs.',
      'The first country case is the Netherlands: from the 1434 gulden to the Utrecht ducat, the decimal gulden, and the euro. Santa Fe colonial gold and necessity coppers will be added as they are documented, as on the production site.',
    ],
    holdingsTitle: 'The catalog',
    holdingsIntro: 'Enter through a country. Individual coin pages will be published as they are documented.',
    viewChapter: 'Open the catalog',
    notesLink: 'See the notaphily collection',
  },
} as const;

export function numismaticsPath(locale: 'es' | 'en'): string {
  return locale === 'en' ? `/en${NUMISMATICS_PATH}` : NUMISMATICS_PATH;
}

export function coinagePath(locale: 'es' | 'en'): string {
  return locale === 'en' ? `/en${NETHERLANDS_COINAGE_PATH}` : NETHERLANDS_COINAGE_PATH;
}

export function chapterHref(id: NetherlandsCoinageChapterId): string {
  return `#${id}`;
}

export type NetherlandsCoinId = 'ducado-utrecht-1761';

export type NetherlandsCoin = {
  id: NetherlandsCoinId;
  path: string;
  year: string;
  mint: LocalizedText;
  denomination: LocalizedText;
  composition: LocalizedText;
  weight: LocalizedText;
  diameter: LocalizedText;
  edge: LocalizedText;
  references: string;
  grade: LocalizedText;
  certificate: string;
  images: {
    composite: string;
    width: number;
    height: number;
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

export const netherlandsCoins: NetherlandsCoin[] = [
  {
    id: 'ducado-utrecht-1761',
    path: '/coleccion/numismatica/paises-bajos/ducado-utrecht-1761/',
    year: '1761',
    mint: {
      es: 'Utrecht (TRA · Traiectum)',
      en: 'Utrecht (TRA · Traiectum)',
    },
    denomination: {
      es: '1 ducado (6 gulden)',
      en: '1 ducat (6 gulden)',
    },
    composition: {
      es: 'Oro .986',
      en: 'Gold .986',
    },
    weight: {
      es: '3,47 g (0,110 oz de oro fino, Numista)',
      en: '3.47 g (0.110 oz AGW, Numista)',
    },
    diameter: {
      es: '21,7 mm',
      en: '21.7 mm',
    },
    edge: {
      es: 'Cordonado o liso (Numista)',
      en: 'Cabled or plain (Numista)',
    },
    references: 'KM# 7.4 · Fr# 285 · Delmonte G# 965 · Ver# 98.4 · HPM# Ut 27 · Numista N# 323147',
    grade: {
      es: 'NGC AU Details · Edge Filing',
      en: 'NGC AU Details · Edge Filing',
    },
    certificate: '4685927-012',
    images: {
      composite: '/images/catalog/netherlands/1761-ducat-utrecht-ngc.png',
      width: 1536,
      height: 1024,
    },
    title: {
      es: 'Ducado de oro · Utrecht 1761',
      en: 'Gold ducat · Utrecht 1761',
    },
    kicker: {
      es: 'Provincias Unidas · Ceca de Utrecht',
      en: 'United Provinces · Utrecht mint',
    },
    lead: {
      es: 'Ducado comercial de oro .986, encapsulado NGC AU Details (Edge Filing), certificado 4685927-012. Caballero con haz de siete flechas y tablilla MO. ORD. PROVIN.',
      en: 'Trade ducat in .986 gold, slabbed NGC AU Details (Edge Filing), certificate 4685927-012. Knight with a bundle of seven arrows and the MO. ORD. PROVIN. tablet.',
    },
    description: {
      es: 'Esta pieza de 1761 se acuñó en la ceca provincial de Utrecht, en la República de las Provincias Unidas. El anverso muestra un caballero armado a la derecha, con casco y coraza, espada alzada y un haz de flechas —las siete provincias—; la fecha se parte a ambos lados de las piernas (17–61). La leyenda CONCORDIA RES PAR. CRES. TRA. abrevia Concordia res parvae crescunt Traiectum: «Con la concordia, las cosas pequeñas crecen · Utrecht». El escudo de Utrecht cierra la leyenda como marca de ceca. El reverso lleva, en una tablilla cuadrada con roleos, MO. ORD. / PROVIN. / FOEDER. / BELG. AD / LEG. IMP. — Moneta ordinum provinciarum foederatarum Belgicarum ad legem imperii: «Moneda de las Provincias Unidas de los Países Bajos, conforme a la ley del Imperio». Numista clasifica este anverso tardío como KM# 7.4, Fr# 285 y Delmonte G# 965, tipo de Utrecht de 1739–1794: oro .986, 3,47 g, 21,7 mm y alineación de medalla. El canto puede ser cordonado o liso. En cuenta, un ducado equivalía a 6 gulden.',
      en: 'This 1761 piece was struck at the provincial mint of Utrecht, in the Republic of the United Provinces. The obverse shows an armored knight to the right, helmeted, sword raised and a bundle of arrows — the seven provinces — with the date split beside the legs (17–61). The legend CONCORDIA RES PAR. CRES. TRA. abbreviates Concordia res parvae crescunt Traiectum: “Through concord little things grow · Utrecht.” The Utrecht shield closes the legend as the mint mark. The reverse carries, on a square tablet with scrollwork, MO. ORD. / PROVIN. / FOEDER. / BELG. AD / LEG. IMP. — Moneta ordinum provinciarum foederatarum Belgicarum ad legem imperii: “Coin of the United Provinces of the Netherlands, in accordance with the law of the Empire.” Numista classifies this late obverse as KM# 7.4, Fr# 285, and Delmonte G# 965, a Utrecht type of 1739–1794: gold .986, 3.47 g, 21.7 mm, medal alignment. The edge may be cabled or plain. In account, one ducat equaled 6 gulden.',
    },
    history: {
      es: 'El ducado de oro es uno de los tipos comerciales más longevos de Europa. La Koninklijke Nederlandse Munt sitúa su inscripción en la ley monetaria el 4 de agosto de 1586: caballero, espada, haz de flechas y CONCORDIA RES PARVAE CRESCUNT. El peso y la ley fijos —unas 3,5 g de oro .986— lo hicieron aceptable desde el Báltico hasta Asia; la Compañía Neerlandesa de las Indias Orientales (VOC) lo usó en el comercio de ultramar, y Rusia y los Estados alemanes llegaron a imitarlo. El 19 de noviembre de 1800, la Proclamación del gobernador Philip Gidley King en Nueva Gales del Sur tasó un ducado en 9 chelines y 6 peniques para retener el circulante en la colonia, por lo que el tipo también entra en las «proclamation coins» australianas. La ceca real sigue acuñando el ducado de oro como pieza de colección, con el mismo esquema de caballero y tablilla.',
      en: 'The gold ducat is one of Europe’s longest-lived trade types. The Royal Dutch Mint places its entry in the mint act on 4 August 1586: knight, sword, bundle of arrows, and CONCORDIA RES PARVAE CRESCUNT. Fixed weight and fineness — about 3.5 g of .986 gold — made it welcome from the Baltic to Asia; the Dutch East India Company (VOC) used it in overseas trade, and Russia and the German states even imitated it. On 19 November 1800 Governor Philip Gidley King’s New South Wales Proclamation valued a ducat at 9 shillings and 6 pence to keep coin in the colony, so the type also belongs among Australian proclamation coins. The royal mint still strikes the gold ducat as a collector piece, with the same knight-and-tablet scheme.',
    },
    obverseLegend: {
      es: 'CONCORDIA RES PAR. CRES. TRA. — Concordia res parvae crescunt Traiectum: «Con la concordia, las cosas pequeñas crecen · Utrecht».',
      en: 'CONCORDIA RES PAR. CRES. TRA. — Concordia res parvae crescunt Traiectum: “Through concord little things grow · Utrecht.”',
    },
    reverseLegend: {
      es: 'MO. ORD. PROVIN. FOEDER. BELG. AD LEG. IMP. — Moneta ordinum provinciarum foederatarum Belgicarum ad legem imperii: «Moneda de las Provincias Unidas de los Países Bajos, conforme a la ley del Imperio».',
      en: 'MO. ORD. PROVIN. FOEDER. BELG. AD LEG. IMP. — Moneta ordinum provinciarum foederatarum Belgicarum ad legem imperii: “Coin of the United Provinces of the Netherlands, in accordance with the law of the Empire.”',
    },
    frontCaption: {
      es: 'Anverso encapsulado: caballero a la derecha, fecha 17–61 y leyenda CONCORDIA RES PAR. CRES. TRA. Etiqueta NGC 1761 NETHERLAND DUCAT UTRECHT, AU DETAILS, EDGE FILING, 4685927-012.',
      en: 'Slabbed obverse: knight facing right, date 17–61, and CONCORDIA RES PAR. CRES. TRA. NGC label 1761 NETHERLAND DUCAT UTRECHT, AU DETAILS, EDGE FILING, 4685927-012.',
    },
    backCaption: {
      es: 'Reverso encapsulado: tablilla de cinco líneas MO. ORD. PROVIN. FOEDER. BELG. AD LEG. IMP., con el holograma de verificación de NGC.',
      en: 'Slabbed reverse: five-line tablet MO. ORD. PROVIN. FOEDER. BELG. AD LEG. IMP., with the NGC verification hologram.',
    },
    scarcity: {
      es: 'Numista da al tipo (1739–1794) un índice de rareza 84 entre sus socios: no es una fecha única, pero el ducado de oro provincial se busca como moneda de comercio, no como vellón de circulación local. El limado de canto —raspar oro del borde— es un daño habitual en ducados que circularon; NGC lo anota como Details y retira la nota numérica. No se cita aquí un censo de población de 1761 en AU Details; se documenta este certificado.',
      en: 'Numista gives the type (1739–1794) a rarity index of 84 among its members: 1761 is not a unique date, but the provincial gold ducat is collected as a trade coin, not as local billon. Edge filing — scraping gold from the rim — is common on ducats that circulated; NGC records it as Details and withholds a numeric grade. A 1761 AU Details population census is not independently verified here; this page records this certificate.',
    },
    certification: {
      es: 'NGC autentica la pieza y describe el desgaste como About Uncirculated, pero la designación Details por Edge Filing impide una nota numérica. El certificado 4685927-012 identifica este encapsulado. El limado del canto es, a menudo, huella de uso real: se extraía un poco de oro sin agujerear la moneda. Limita el valor de mercado frente a ejemplares con grado numérico.',
      en: 'NGC authenticates the coin and describes the wear as About Uncirculated, but the Details designation for Edge Filing withholds a numeric grade. Certificate 4685927-012 identifies this holder. Edge filing is often a mark of real use: a little gold was scraped off without piercing the coin. It limits market value against numerically graded examples.',
    },
    sources: [
      {
        href: 'https://www.ngccoin.com/certlookup/4685927-012/',
        es: 'NGC — Verificación del certificado 4685927-012',
        en: 'NGC — Certificate lookup 4685927-012',
      },
      {
        href: 'https://en.numista.com/catalogue/pieces323147.html',
        es: 'Numista — 1 Ducat, Utrecht, tipo tardío (N# 323147)',
        en: 'Numista — 1 Ducat, Utrecht, late type (N# 323147)',
        note: {
          es: 'KM# 7.4, Fr# 285, Delmonte G# 965, Ver# 98.4, HPM# Ut 27; oro .986; 3,47 g; 21,7 mm; años 1739–1794; valor 1 ducado (6 gulden).',
          en: 'KM# 7.4, Fr# 285, Delmonte G# 965, Ver# 98.4, HPM# Ut 27; gold .986; 3.47 g; 21.7 mm; years 1739–1794; value 1 ducat (6 gulden).',
        },
      },
      {
        href: 'https://www.royaldutchmint.com/dutch-coins/specials/golden-ducats',
        es: 'Royal Dutch Mint — Ducados de oro',
        en: 'Royal Dutch Mint — Golden ducats',
        note: {
          es: 'Inscrito en la ley monetaria el 4 de agosto de 1586; caballero, flechas y CONCORDIA RES PARVAE CRESCUNT.',
          en: 'Entered in the mint act on 4 August 1586; knight, arrows, and CONCORDIA RES PARVAE CRESCUNT.',
        },
      },
      {
        href: 'https://www.downies.com/blogs/news/the-currency-proclamation-of-1800',
        es: 'Downies — The Currency Proclamation of 1800',
        en: 'Downies — The Currency Proclamation of 1800',
        note: {
          es: '19 de noviembre de 1800: un ducado = 9 chelines y 6 peniques en Nueva Gales del Sur.',
          en: '19 November 1800: a ducat = 9 shillings and 6 pence in New South Wales.',
        },
      },
      {
        href: 'https://coinvarieties.com/index.php/Utrecht_1761_ducat_Fr-285',
        es: 'CoinVarieties — Utrecht 1761 ducat Fr-285',
        en: 'CoinVarieties — Utrecht 1761 ducat Fr-285',
        note: {
          es: 'Fecha 1761; Fr# 285; KM# 7.4; tipo 3,50 g, oro .986.',
          en: '1761 date; Fr# 285; KM# 7.4; type 3.50 g, gold .986.',
        },
      },
      {
        href: 'https://coinweek.com/world-coins-history-netherlands-gold-ducat-began/',
        es: 'CoinWeek — A History of the Netherlands Gold Ducat',
        en: 'CoinWeek — A History of the Netherlands Gold Ducat',
        note: {
          es: 'Origen en 1586, uso en el comercio de la VOC y continuidad del tipo del caballero.',
          en: 'Origin in 1586, use in VOC trade, and continuity of the standing-knight type.',
        },
      },
      {
        href: 'https://en.wikipedia.org/wiki/Ducat',
        es: 'Wikipedia — Ducat',
        en: 'Wikipedia — Ducat',
        note: {
          es: 'Tipo comercial europeo de peso y ley fijos; el ducado neerlandés como sucesor del modelo veneciano.',
          en: 'European trade type of fixed weight and fineness; the Dutch ducat as a successor of the Venetian model.',
        },
      },
    ],
  },
];

export const coinPageCopy = {
  es: {
    collectionLink: 'Numismática',
    seriesLink: 'Países Bajos · Numismática',
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
    certificateLabel: 'Certificado NGC',
    expandImage: 'Ampliar imagen',
    closeLightbox: 'Cerrar',
    viewCoin: 'Ver la ficha',
    holdingsTitle: 'Piezas de la colección',
    holdingsIntro:
      'Un ducado de oro de Utrecht de 1761, encapsulado por NGC. Las demás fichas se publicarán a medida que se documenten.',
  },
  en: {
    collectionLink: 'Numismatics',
    seriesLink: 'Netherlands · Numismatics',
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
    certificateLabel: 'NGC certificate',
    expandImage: 'Enlarge image',
    closeLightbox: 'Close',
    viewCoin: 'Open the coin page',
    holdingsTitle: 'Coins in the collection',
    holdingsIntro: 'One 1761 Utrecht gold ducat, slabbed by NGC. Further coin pages will be published as they are documented.',
  },
} as const;

export function coinById(id: string): NetherlandsCoin | undefined {
  return netherlandsCoins.find((coin) => coin.id === id);
}

export function coinPath(coin: NetherlandsCoin, locale: 'es' | 'en'): string {
  return locale === 'en' ? `/en${coin.path}` : coin.path;
}

export const netherlandsCoinSlugs = netherlandsCoins.map((coin) => coin.path.replace(/^\/|\/$/g, ''));

export { NETHERLANDS_PATH };
