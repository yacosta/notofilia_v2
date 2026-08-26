import type { CatalogSource, LocalizedText } from './catalog';

export const NETHERLANDS_PATH = '/coleccion/paises-bajos/';

export type NetherlandsChapterId = 'wisselbank' | 'nederlandsche-bank' | 'ocupacion' | 'gulden-euro';

export type NetherlandsChapter = {
  id: NetherlandsChapterId;
  years: LocalizedText;
  title: LocalizedText;
  lead: LocalizedText;
  body: LocalizedText;
};

export const netherlandsChapters: NetherlandsChapter[] = [
  {
    id: 'wisselbank',
    years: { es: '1609–1814', en: '1609–1814' },
    title: {
      es: 'Wisselbank',
      en: 'Wisselbank',
    },
    lead: {
      es: 'El Banco de Cambio de Ámsterdam estabilizó el gulden de metal; el papel moderno aún no era moneda de curso diario.',
      en: 'The Bank of Amsterdam stabilized the metallic gulden; modern paper was not yet everyday legal tender.',
    },
    body: {
      es: 'El gulden —florín neerlandés— nació como unidad de cuenta en 1434, bajo Felipe el Bueno, a la par del florín de oro italiano. Durante siglos el comercio se liquidó en plata y oro: stuivers, daalders, ducatones. En 1609 Ámsterdam fundó el Wisselbank para ensayar el metal que recibía y abonar en cuenta el equivalente en rijksdaalders, y para obligar a que los pagos grandes pasaran por el banco. Esa disciplina detuvo la carrera de devaluaciones provinciales y convirtió el gulden banco en reserva de facto en Europa. El instituto colapsó tras las guerras napoleónicas. No emitió billetes de circulación al estilo moderno: el papel de esta época —cuando aparece— es de depósito o de emergencia, no el curso legal de un banco nacional.',
      en: 'The gulden — the Dutch guilder or florin — became a unit of account in 1434, under Philip the Good, on a par with the Italian gold florin. For centuries trade settled in silver and gold: stuivers, daalders, ducatons. In 1609 Amsterdam founded the Wisselbank to assay incoming metal, credit rijksdaalders, and require large payments to clear through the bank. That discipline halted provincial debasements and made the bank gulden a de facto European reserve. The institute collapsed after the Napoleonic wars. It did not issue modern circulating notes: paper from this period, when it appears, is deposit or emergency paper, not the legal tender of a national bank.',
    },
  },
  {
    id: 'nederlandsche-bank',
    years: { es: '1814–1940', en: '1814–1940' },
    title: {
      es: 'De Nederlandsche Bank',
      en: 'De Nederlandsche Bank',
    },
    lead: {
      es: 'Guillermo I funda el banco en 1814; Joh. Enschedé imprime el primer billete neerlandés, el roodborstje.',
      en: 'William I founded the bank in 1814; Joh. Enschedé printed the first Dutch note, the roodborstje.',
    },
    body: {
      es: 'El 25 de marzo de 1814, el rey Guillermo I creó De Nederlandsche Bank. Ese mismo año Joh. Enschedé, de Haarlem —que en 1810 ya había impreso papel para las Indias Orientales y Occidentales—, produjo los primeros billetes del banco. El de 25 gulden, rojo y con adornos musicales, se llamó roodborstje, «petirrojo». Entre 1814 y 1838 el banco emitió 25, 40, 60, 80, 100, 200, 300, 500 y 1.000 gulden. En 1817 el gulden se decimalizó en 100 céntimos. Desde 1846 el Estado añadió muntbiljetten —billetes de tesorería— de 5 a 1.000 gulden. El banco reanudó la emisión en 1904; hacia 1911 circulaban 10, 25, 40, 60, 100, 200, 300 y 1.000. En 1914, por escasez de plata, el gobierno sacó zilverbonnen de 1, 2½ y 5 gulden. En los años veinte desaparecieron las denominaciones impares de 40, 60 y 300 y llegaron el 20 (1926), el 50 (1929) y el 500 (1930).',
      en: 'On 25 March 1814 King William I created De Nederlandsche Bank. That same year Joh. Enschedé of Haarlem — which had already printed paper for the East and West Indies in 1810 — produced the bank’s first notes. The red 25-gulden, with musical ornaments, was nicknamed roodborstje, “robin.” Between 1814 and 1838 the bank issued 25, 40, 60, 80, 100, 200, 300, 500, and 1,000 gulden. In 1817 the gulden was decimalized into 100 cents. From 1846 the State added muntbiljetten — treasury notes — from 5 to 1,000 gulden. The bank resumed issue in 1904; by 1911 the list was 10, 25, 40, 60, 100, 200, 300, and 1,000. In 1914, with silver scarce, the government issued zilverbonnen of 1, 2½, and 5 gulden. In the 1920s the odd 40, 60, and 300 denominations ended, and the 20 (1926), 50 (1929), and 500 (1930) arrived.',
    },
  },
  {
    id: 'ocupacion',
    years: { es: '1940–1945', en: '1940–1945' },
    title: {
      es: 'Ocupación y liberación',
      en: 'Occupation and liberation',
    },
    lead: {
      es: 'El banco ocupado siguió emitiendo; el gobierno en el exilio mandó imprimir muntbiljetten con Wilhelmina en Nueva York.',
      en: 'The occupied bank kept issuing; the government in exile had Wilhelmina muntbiljetten printed in New York.',
    },
    body: {
      es: 'Tras la invasión alemana del 10 de mayo de 1940, De Nederlandsche Bank continuó imprimiendo. El cambio más visible fue el 10 gulden: el retrato de la reina madre Emma lo sustituyó un detalle de Los síndicos del gremio de pañeros de Rembrandt —el staalmeester Volckert Jansz—, en emisiones de 1943–1944 firmadas por el presidente impuesto M. M. Rost van Tonningen. El Noord-Hollands Archief señala que, salvo excepciones de la guerra y la posguerra inmediata, Enschedé imprimió casi todo el papel neerlandés. En el exilio, un real decreto del 4 de febrero de 1943 autorizó muntbiljetten de 1, 2½, 10, 25, 50 y 100 gulden, grabados por la American Bank Note Company con el retrato de Wilhelmina, para la liberación. El Archief de Enschedé conserva también diseños y pruebas de Lion Cachet y M. C. Escher de esas décadas.',
      en: 'After the German invasion of 10 May 1940, De Nederlandsche Bank kept printing. The most visible change was the 10-gulden: Queen Mother Emma’s portrait gave way to a detail from Rembrandt’s Syndics of the Drapers’ Guild — the staalmeester Volckert Jansz — on 1943–1944 issues signed by the imposed president M. M. Rost van Tonningen. The Noord-Hollands Archief notes that, apart from wartime and immediate postwar exceptions, Enschedé printed almost all Dutch paper. In exile, a royal decree of 4 February 1943 authorized muntbiljetten of 1, 2½, 10, 25, 50, and 100 gulden, engraved by the American Bank Note Company with Wilhelmina’s portrait, for liberation. The Enschedé archive also holds designs and proofs by Lion Cachet and M. C. Escher from those decades.',
    },
  },
  {
    id: 'gulden-euro',
    years: { es: '1945–2002', en: '1945–2002' },
    title: {
      es: 'Del gulden al euro',
      en: 'From guilder to euro',
    },
    lead: {
      es: 'Oxenaar y Drupsteen diseñaron las últimas series; el euro en efectivo llegó el 1 de enero de 2002.',
      en: 'Oxenaar and Drupsteen designed the last series; euro cash arrived on 1 January 2002.',
    },
    body: {
      es: 'La posguerra devolvió al banco las denominaciones de 10, 20, 25, 50, 100 y 1.000 gulden. El 5 apareció en 1966 y el 250 en 1985. Entre 1964 y 1987, Ootje Oxenaar grabó primero retratos —Vondel, Frans Hals, Sweelinck, De Ruyter, Spinoza— y luego la serie de naturaleza: el 50 de la zonnebloem, el 100 de la snip y el 250 del vuurtoren. Desde 1990 Jaap Drupsteen los sustituyó por geometría abstracta y aves: ijsvogel, roodborstje, steenuil y kievit. El 5 de Vondel lo reemplazó una moneda en 1988 y se retiró en 1995. El 1 de enero de 1999 el gulden pasó a ser subdivisión del euro; el efectivo euro circuló desde el 1 de enero de 2002. El gulden dejó de ser curso legal el 27 de enero de 2002, a 2,20371 gulden por euro. Las monedas se pudieron cambiar en DNB hasta el 1 de enero de 2007. La mayoría de los billetes válidos en la conversión se pueden entregar hasta el 1 de enero de 2032; el 5 de Vondel y el 25 de Sweelinck vencieron el 1 de mayo de 2025.',
      en: 'After the war the bank returned to 10, 20, 25, 50, 100, and 1,000 gulden. The 5 appeared in 1966 and the 250 in 1985. From 1964 to 1987 Ootje Oxenaar first engraved portraits — Vondel, Frans Hals, Sweelinck, De Ruyter, Spinoza — then the nature series: the zonnebloem 50, the snip 100, and the vuurtoren 250. From 1990 Jaap Drupsteen replaced them with abstract geometry and birds: ijsvogel, roodborstje, steenuil, and kievit. The Vondel 5 became a coin in 1988 and was withdrawn in 1995. On 1 January 1999 the gulden became a subunit of the euro; euro cash circulated from 1 January 2002. The gulden ceased to be legal tender on 27 January 2002, at 2.20371 gulden to the euro. Coins could be exchanged at DNB until 1 January 2007. Most notes valid at conversion can still be handed in until 1 January 2032; the Vondel 5 and Sweelinck 25 lapsed on 1 May 2025.',
    },
  },
];

export const seriesSources: CatalogSource[] = [
  {
    href: 'https://www.dnb.nl/en/about-us/history/',
    es: 'De Nederlandsche Bank — Historia',
    en: 'De Nederlandsche Bank — History',
    note: {
      es: 'Fundación en 1814; banco central y supervisor prudencial de los Países Bajos.',
      en: 'Founded in 1814; central bank and prudential supervisor of the Netherlands.',
    },
  },
  {
    href: 'https://en.wikipedia.org/wiki/De_Nederlandsche_Bank',
    es: 'Wikipedia — De Nederlandsche Bank',
    en: 'Wikipedia — De Nederlandsche Bank',
    note: {
      es: 'Fecha de fundación: 25 de marzo de 1814. Integración en el SEBC desde el 1 de junio de 1998.',
      en: 'Founded 25 March 1814. Part of the ESCB from 1 June 1998.',
    },
  },
  {
    href: 'https://www.joh-enschede.nl/about-royal-joh-enschede/',
    es: 'Royal Joh. Enschedé — Historia de la imprenta',
    en: 'Royal Joh. Enschedé — History of the printer',
    note: {
      es: '1810: primer billete para las Indias. 1814: primer billete neerlandés (roodborstje) para DNB.',
      en: '1810: first note for the Indies. 1814: first Dutch note (roodborstje) for DNB.',
    },
  },
  {
    href: 'https://noord-hollandsarchief.nl/enschede-collecties/bankbiljetten',
    es: 'Noord-Hollands Archief — Colección de billetes de Enschedé',
    en: 'Noord-Hollands Archief — Enschedé banknote collection',
    note: {
      es: 'Enschedé imprimió casi todo el papel neerlandés, con excepciones de la guerra y la posguerra; diseños de Cachet y Escher.',
      en: 'Enschedé printed almost all Dutch paper, with wartime and postwar exceptions; designs by Cachet and Escher.',
    },
  },
  {
    href: 'https://en.wikipedia.org/wiki/Dutch_guilder',
    es: 'Wikipedia — Gulden neerlandés (historia y billetes)',
    en: 'Wikipedia — Dutch guilder (history and banknotes)',
    note: {
      es: 'Wisselbank, emisiones de 1814–1838, zilverbonnen, ocupación, series de Oxenaar y Drupsteen, y el tipo 2,20371.',
      en: 'Wisselbank, 1814–1838 issues, zilverbonnen, occupation, Oxenaar and Drupsteen series, and the 2.20371 rate.',
    },
  },
  {
    href: 'https://en.wikipedia.org/wiki/Banknotes_of_the_Dutch_guilder',
    es: 'Wikipedia — Billetes del gulden neerlandés',
    en: 'Wikipedia — Banknotes of the Dutch guilder',
    note: {
      es: 'Cuadro de series de 1950–2002 y plazos de canje en DNB, incluido el 1 de enero de 2032.',
      en: 'Table of 1950–2002 series and DNB exchange deadlines, including 1 January 2032.',
    },
  },
  {
    href: 'https://www.dnb.nl/en/money-exchange/exchanging-guilder-banknotes/',
    es: 'De Nederlandsche Bank — Canje de billetes en gulden',
    en: 'De Nederlandsche Bank — Exchanging guilder banknotes',
    note: {
      es: 'Tipo 1 euro = 2,20371 gulden. No se canjean piezas recibidas como pago después del 27 de enero de 2002.',
      en: 'Rate: 1 euro = NLG 2.20371. Notes received as payment after 27 January 2002 are not exchanged.',
    },
  },
  {
    href: 'http://www.banknote.ws/COLLECTION/countries/EUR/NDL/NDL.htm',
    es: 'Bank Note Museum — Países Bajos (asedio, muntbiljetten, zilverbonnen y DNB)',
    en: 'Bank Note Museum — Netherlands (siege, muntbiljetten, zilverbonnen, and DNB)',
  },
];

export const seriesCopy = {
  es: {
    metaTitle: 'Países Bajos · De Nederlandsche Bank y el gulden | Notofilia',
    metaDescription:
      'Catálogo de papel moneda de los Países Bajos: Wisselbank, De Nederlandsche Bank, ocupación, series de Oxenaar y Drupsteen, y el paso del gulden al euro.',
    kicker: 'Países Bajos · Notafilia',
    title: 'De Nederlandsche Bank y el gulden',
    heroAlt:
      'Mapa vintage en relieve 3D de los Países Bajos sobre pergamino, con Ámsterdam, la torre Dom de Utrecht, Kinderdijk, campos de tulipanes, un pasaporte y el título Países Bajos',
    intro: [
      'El gulden —florín neerlandés— fue unidad de cuenta desde 1434. Durante siglos el comercio se liquidó en plata y oro. El Wisselbank de Ámsterdam, fundado en 1609, ensayó el metal, abonó rijksdaalders y obligó a que los pagos grandes pasaran por el banco. Esa disciplina estabilizó el gulden y lo convirtió en reserva de facto en Europa. El instituto no emitió billetes de circulación moderna; colapsó tras las guerras napoleónicas.',
      'El papel de curso legal nació con De Nederlandsche Bank. El 25 de marzo de 1814, Guillermo I creó el banco; Joh. Enschedé, de Haarlem, imprimió los primeros billetes ese mismo año. El de 25 gulden, rojo, se llamó roodborstje. Entre 1814 y 1838 circulaban 25, 40, 60, 80, 100, 200, 300, 500 y 1.000 gulden. En 1817 la unidad se decimalizó. Desde 1846 el Estado añadió muntbiljetten. El banco reanudó la emisión en 1904; en 1914, por escasez de plata, el gobierno sacó zilverbonnen de 1, 2½ y 5 gulden.',
      'Ocupado el país en mayo de 1940, el banco siguió imprimiendo. En el 10 gulden, Emma dejó paso a un staalmeester de Rembrandt. El gobierno en el exilio, por real decreto del 4 de febrero de 1943, mandó grabar en la American Bank Note Company muntbiljetten con Wilhelmina para la liberación. El Noord-Hollands Archief señala que, salvo excepciones de la guerra y la posguerra, Enschedé imprimió casi todo el papel neerlandés.',
      'En la posguerra, Ootje Oxenaar diseñó retratos y luego la serie de naturaleza —zonnebloem, snip, vuurtoren—. Jaap Drupsteen los sustituyó, desde 1990, por aves y geometría abstracta. El 1 de enero de 1999 el gulden pasó a ser subdivisión del euro; el efectivo euro circuló desde el 1 de enero de 2002. El gulden dejó de ser curso legal el 27 de enero de 2002, a 2,20371 gulden por euro. La mayoría de los billetes válidos en la conversión se pueden entregar en DNB hasta el 1 de enero de 2032.',
    ],
    holdingsTitle: 'El catálogo',
    holdingsIntro:
      'Cuatro capítulos, en la misma fila de izquierda a derecha por época: Wisselbank, De Nederlandsche Bank, ocupación y liberación, y el paso al euro. Las fichas de cada pieza se publicarán como en Filipinas, a medida que se documenten.',
    viewChapter: 'Leer el capítulo',
    sourcesTitle: 'Fuentes',
    eraLabel: 'Época',
  },
  en: {
    metaTitle: 'Netherlands · De Nederlandsche Bank and the guilder | Notofilia',
    metaDescription:
      'Catalog of Dutch paper money: the Wisselbank, De Nederlandsche Bank, occupation issues, the Oxenaar and Drupsteen series, and the changeover from guilder to euro.',
    kicker: 'Netherlands · Notaphily',
    title: 'De Nederlandsche Bank and the guilder',
    heroAlt:
      'Vintage 3D relief map of the Netherlands on parchment, with Amsterdam, the Utrecht Dom Tower, Kinderdijk, tulip fields, a passport, and the title Netherlands',
    intro: [
      'The gulden — the Dutch guilder or florin — was a unit of account from 1434. For centuries trade settled in silver and gold. Amsterdam’s Wisselbank, founded in 1609, assayed metal, credited rijksdaalders, and required large payments to clear through the bank. That discipline stabilized the gulden and made it a de facto European reserve. The institute did not issue modern circulating notes; it collapsed after the Napoleonic wars.',
      'Legal-tender paper began with De Nederlandsche Bank. On 25 March 1814 William I created the bank; Joh. Enschedé of Haarlem printed the first notes that same year. The red 25-gulden was nicknamed roodborstje. Between 1814 and 1838 the list was 25, 40, 60, 80, 100, 200, 300, 500, and 1,000 gulden. In 1817 the unit was decimalized. From 1846 the State added muntbiljetten. The bank resumed issue in 1904; in 1914, with silver scarce, the government issued zilverbonnen of 1, 2½, and 5 gulden.',
      'After the May 1940 occupation the bank kept printing. On the 10-gulden, Emma gave way to a Rembrandt staalmeester. The government in exile, by royal decree of 4 February 1943, had the American Bank Note Company engrave Wilhelmina muntbiljetten for liberation. The Noord-Hollands Archief notes that, apart from wartime and immediate postwar exceptions, Enschedé printed almost all Dutch paper.',
      'After the war Ootje Oxenaar designed portraits and then the nature series — zonnebloem, snip, vuurtoren. From 1990 Jaap Drupsteen replaced them with birds and abstract geometry. On 1 January 1999 the gulden became a subunit of the euro; euro cash circulated from 1 January 2002. The gulden ceased to be legal tender on 27 January 2002, at 2.20371 gulden to the euro. Most notes valid at conversion can still be handed in at DNB until 1 January 2032.',
    ],
    holdingsTitle: 'The catalog',
    holdingsIntro:
      'Four chapters in one row, left to right by period: Wisselbank, De Nederlandsche Bank, occupation and liberation, and the changeover to the euro. Individual note pages will be published as they are documented, as in the Philippines case.',
    viewChapter: 'Read the chapter',
    sourcesTitle: 'Sources',
    eraLabel: 'Period',
  },
} as const;

export function seriesPath(locale: 'es' | 'en'): string {
  return locale === 'en' ? `/en${NETHERLANDS_PATH}` : NETHERLANDS_PATH;
}

export function chapterHref(id: NetherlandsChapterId): string {
  return `#${id}`;
}
