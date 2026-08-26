import type { CatalogSource, LocalizedText } from './catalog';

export const POLYMER_PATH = '/coleccion/polimero-mundial/';

export type PolymerChapterId = 'americas' | 'asia-pacifico' | 'africa' | 'europa-oriente-medio';

export type PolymerIssuer = {
  id: string;
  country: LocalizedText;
  issuer: LocalizedText;
  holdings: LocalizedText;
};

export type PolymerChapter = {
  id: PolymerChapterId;
  years: LocalizedText;
  title: LocalizedText;
  lead: LocalizedText;
  body: LocalizedText;
  issuers: PolymerIssuer[];
};

export const polymerChapters: PolymerChapter[] = [
  {
    id: 'americas',
    years: { es: 'desde 1980', en: 'from 1980' },
    title: {
      es: 'Américas',
      en: 'Americas',
    },
    lead: {
      es: 'Tyvek haitiano, el 10 reais brasileño del milenio y la familia Guardian del Banco de México.',
      en: 'Haitian Tyvek, Brazil’s millennium 10 reais, and Banco de México’s Guardian family.',
    },
    body: {
      es: 'En las Américas el plástico llegó por dos vías. Haití emitió gourdes en Tyvek a principios de los años 1980 —un experimento de la American Bank Note Company, precursor del polímero actual— que esta colección conserva junto con emisiones posteriores de 1, 2 y 50 gourdes. El primer Guardian de circulación amplia en la región fue el 10 reais brasileño de 2000, conmemorativo de los 500 años del descubrimiento. México convirtió el 20 pesos (papel de 2003, polímero de 2006, Pick 122), añadió el 50 pesos de Morelos (Pick 123) y el 100 pesos del Centenario de la Revolución (Pick 125), todos en Guardian e impresos por la Fábrica de Billetes del Banco de México. Chile (1000 y 2000 pesos), Costa Rica (20 y 1000 colones), Guatemala (1 y 5 quetzales), Honduras (20 lempiras de 2008), Nicaragua (10 y 20 córdobas) y la República Dominicana (20 pesos de 2009) completan la vitrina americana.',
      en: 'In the Americas, plastic arrived by two routes. Haiti issued Tyvek gourdes in the early 1980s — an American Bank Note Company experiment, a precursor of today’s polymer — which this collection keeps alongside later 1-, 2-, and 50-gourde issues. The region’s first widely circulating Guardian note was Brazil’s 10 reais of 2000, a quincentenary commemorative. Mexico converted the 20-peso (2003 paper, 2006 polymer, Pick 122) and added Morelos’s 50-peso (Pick 123) and the 100-peso Centennial of the Revolution (Pick 125), all on Guardian and printed by Banco de México’s banknote works. Chile (1,000 and 2,000 pesos), Costa Rica (20 and 1,000 colones), Guatemala (1 and 5 quetzales), Honduras (2008 20 lempiras), Nicaragua (10 and 20 córdobas), and the Dominican Republic (2009 20 pesos) complete the American case.',
    },
    issuers: [
      {
        id: 'brasil',
        country: { es: 'Brasil', en: 'Brazil' },
        issuer: { es: 'Banco Central do Brasil', en: 'Banco Central do Brasil' },
        holdings: { es: '10 reais, 2000', en: '10 reais, 2000' },
      },
      {
        id: 'chile',
        country: { es: 'Chile', en: 'Chile' },
        issuer: { es: 'Banco Central de Chile', en: 'Banco Central de Chile' },
        holdings: { es: '1000 y 2000 pesos', en: '1,000 and 2,000 pesos' },
      },
      {
        id: 'costa-rica',
        country: { es: 'Costa Rica', en: 'Costa Rica' },
        issuer: { es: 'Banco Central de Costa Rica', en: 'Banco Central de Costa Rica' },
        holdings: { es: '20 y 1000 colones', en: '20 and 1,000 colones' },
      },
      {
        id: 'guatemala',
        country: { es: 'Guatemala', en: 'Guatemala' },
        issuer: { es: 'Banco de Guatemala', en: 'Banco de Guatemala' },
        holdings: { es: '1 y 5 quetzales', en: '1 and 5 quetzales' },
      },
      {
        id: 'haiti',
        country: { es: 'Haití', en: 'Haiti' },
        issuer: { es: "Banque de la République d'Haïti", en: "Banque de la République d'Haïti" },
        holdings: { es: '1, 2 y 50 gourdes (Tyvek y polímero)', en: '1, 2, and 50 gourdes (Tyvek and polymer)' },
      },
      {
        id: 'honduras',
        country: { es: 'Honduras', en: 'Honduras' },
        issuer: { es: 'Banco Central de Honduras', en: 'Banco Central de Honduras' },
        holdings: { es: '20 lempiras, 2008', en: '20 lempiras, 2008' },
      },
      {
        id: 'mexico',
        country: { es: 'México', en: 'Mexico' },
        issuer: { es: 'Banco de México', en: 'Banco de México' },
        holdings: { es: '20 (papel 2003 y polímero 2006), 50 y 100 pesos', en: '20 (2003 paper and 2006 polymer), 50, and 100 pesos' },
      },
      {
        id: 'nicaragua',
        country: { es: 'Nicaragua', en: 'Nicaragua' },
        issuer: { es: 'Banco Central de Nicaragua', en: 'Banco Central de Nicaragua' },
        holdings: { es: '10 y 20 córdobas', en: '10 and 20 córdobas' },
      },
      {
        id: 'republica-dominicana',
        country: { es: 'República Dominicana', en: 'Dominican Republic' },
        issuer: { es: 'Banco Central de la República Dominicana', en: 'Banco Central de la República Dominicana' },
        holdings: { es: '20 pesos, 2009', en: '20 pesos, 2009' },
      },
    ],
  },
  {
    id: 'asia-pacifico',
    years: { es: 'desde 1988', en: 'from 1988' },
    title: {
      es: 'Asia-Pacífico',
      en: 'Asia-Pacific',
    },
    lead: {
      es: 'El corazón histórico del Guardian: de Brunéi y Malasia al 100 yuan chino del milenio.',
      en: 'The historical heartland of Guardian: from Brunei and Malaysia to China’s millennium 100 yuan.',
    },
    body: {
      es: 'Asia-Pacífico es el origen del polímero moderno. Tras el 10 dólares australiano de 1988, Brunéi, Malasia, Papúa Nueva Guinea, las Islas Salomón y Samoa adoptaron Guardian para el ringgit, el kina, el dólar y el tala. En 2000, el Banco Popular de China —no el Bank of China— emitió 10 millones de juegos del 100 yuan «迎接新世纪纪念钞» (Pick 902), el «龙钞» coleccionista, con ventana del Templo del Cielo; Bangladesh hizo lo propio con el 10 taka. Sri Lanka (200 rupias de 1998), Nepal (10 rupias de 2005), Hong Kong (10 dólares de 2007), Taiwán (50 dólares) y Kazajistán (1000 tenge) amplían el mapa hacia el Índico y Asia Central. Australia, inventor del sustrato, no tiene aún ficha en esta vitrina: el catálogo documenta los ejemplares de la colección, no un censo mundial.',
      en: 'Asia-Pacific is the birthplace of modern polymer. After Australia’s 1988 $10, Brunei, Malaysia, Papua New Guinea, the Solomon Islands, and Samoa adopted Guardian for the ringgit, kina, dollar, and tala. In 2000 the People’s Bank of China — not the Bank of China — issued 10 million sets of the 100-yuan “迎接新世纪纪念钞” (Pick 902), the collectors’ “龙钞,” with a Temple of Heaven window; Bangladesh did the same with the 10 taka. Sri Lanka (1998 200 rupees), Nepal (2005 10 rupees), Hong Kong (2007 $10), Taiwan ($50), and Kazakhstan (1,000 tenge) extend the map toward the Indian Ocean and Central Asia. Australia, inventor of the substrate, has no note page here yet: the catalog records pieces in the collection, not a world census.',
    },
    issuers: [
      {
        id: 'bangladesh',
        country: { es: 'Bangladesh', en: 'Bangladesh' },
        issuer: { es: 'Bangladesh Bank', en: 'Bangladesh Bank' },
        holdings: { es: '10 taka, 2000', en: '10 taka, 2000' },
      },
      {
        id: 'brunei',
        country: { es: 'Brunéi', en: 'Brunei' },
        issuer: { es: 'Negara Brunei Darussalam', en: 'Negara Brunei Darussalam' },
        holdings: { es: 'Ringgit de polímero', en: 'Polymer ringgit' },
      },
      {
        id: 'china',
        country: { es: 'China', en: 'China' },
        issuer: { es: 'Banco Popular de China', en: 'People’s Bank of China' },
        holdings: { es: '100 yuan conmemorativo, 2000 (Pick 902)', en: 'Commemorative 100 yuan, 2000 (Pick 902)' },
      },
      {
        id: 'hong-kong',
        country: { es: 'Hong Kong', en: 'Hong Kong' },
        issuer: { es: 'Gobierno de Hong Kong', en: 'Government of Hong Kong' },
        holdings: { es: '10 dólares, 2007', en: '10 dollars, 2007' },
      },
      {
        id: 'islas-salomon',
        country: { es: 'Islas Salomón', en: 'Solomon Islands' },
        issuer: { es: 'Central Bank of Solomon Islands', en: 'Central Bank of Solomon Islands' },
        holdings: { es: '2 dólares, 2001', en: '2 dollars, 2001' },
      },
      {
        id: 'kazajistan',
        country: { es: 'Kazajistán', en: 'Kazakhstan' },
        issuer: { es: 'Kazakhstan National Bank', en: 'National Bank of Kazakhstan' },
        holdings: { es: '1000 tenge', en: '1,000 tenge' },
      },
      {
        id: 'malasia',
        country: { es: 'Malasia', en: 'Malaysia' },
        issuer: { es: 'Bank Negara Malaysia', en: 'Bank Negara Malaysia' },
        holdings: { es: 'Ringgit de polímero', en: 'Polymer ringgit' },
      },
      {
        id: 'nepal',
        country: { es: 'Nepal', en: 'Nepal' },
        issuer: { es: 'Nepal Rastra Bank', en: 'Nepal Rastra Bank' },
        holdings: { es: '10 rupias, 2005', en: '10 rupees, 2005' },
      },
      {
        id: 'papua-nueva-guinea',
        country: { es: 'Papúa Nueva Guinea', en: 'Papua New Guinea' },
        issuer: { es: 'Bank of Papua New Guinea', en: 'Bank of Papua New Guinea' },
        holdings: { es: 'Kina de polímero', en: 'Polymer kina' },
      },
      {
        id: 'samoa',
        country: { es: 'Samoa', en: 'Samoa' },
        issuer: { es: 'Central Bank of Samoa', en: 'Central Bank of Samoa' },
        holdings: { es: '2 tala', en: '2 tala' },
      },
      {
        id: 'sri-lanka',
        country: { es: 'Sri Lanka', en: 'Sri Lanka' },
        issuer: { es: 'Central Bank of Sri Lanka', en: 'Central Bank of Sri Lanka' },
        holdings: { es: '200 rupias, 1998', en: '200 rupees, 1998' },
      },
      {
        id: 'taiwan',
        country: { es: 'Taiwán', en: 'Taiwan' },
        issuer: { es: 'Bank of Taiwan', en: 'Bank of Taiwan' },
        holdings: { es: '50 dólares', en: '50 dollars' },
      },
    ],
  },
  {
    id: 'africa',
    years: { es: 'desde 2003', en: 'from 2003' },
    title: {
      es: 'África',
      en: 'Africa',
    },
    lead: {
      es: 'Kwacha, naira, meticais y emalangeni de circulación diaria en Guardian.',
      en: 'Circulation kwacha, naira, meticais, and emalangeni on Guardian.',
    },
    body: {
      es: 'África adoptó el polímero más tarde y, en esta colección, sobre todo en denominaciones de uso diario. Zambia fue de las primeras del continente con kwacha en Guardian a partir de 2003. Nigeria pasó el 20 naira —y después otras piezas de la familia— a sustrato plástico. Mozambique documenta 20, 50 y 100 meticais; Eswatini —Suazilandia en el catálogo histórico— emalangeni. No son conmemorativos de vitrina: el polímero se eligió para alargar la vida del billete en climas húmedos y reducir la reposición, la misma razón que el RBA alega para Australia.',
      en: 'Africa adopted polymer later and, in this collection, mainly in everyday denominations. Zambia was among the continent’s first with Guardian kwacha from 2003. Nigeria moved the 20 naira — and later other notes in the family — onto plastic. Mozambique is recorded with 20, 50, and 100 meticais; Eswatini — Swaziland in the historical catalog — with emalangeni. These are not showcase commemoratives: polymer was chosen to lengthen note life in humid climates and cut replacement, the same reason the RBA gives for Australia.',
    },
    issuers: [
      {
        id: 'mozambique',
        country: { es: 'Mozambique', en: 'Mozambique' },
        issuer: { es: 'Banco de Moçambique', en: 'Banco de Moçambique' },
        holdings: { es: '20, 50 y 100 meticais', en: '20, 50, and 100 meticais' },
      },
      {
        id: 'nigeria',
        country: { es: 'Nigeria', en: 'Nigeria' },
        issuer: { es: 'Central Bank of Nigeria', en: 'Central Bank of Nigeria' },
        holdings: { es: 'Naira de polímero', en: 'Polymer naira' },
      },
      {
        id: 'suazilandia',
        country: { es: 'Suazilandia (Eswatini)', en: 'Eswatini (Swaziland)' },
        issuer: { es: 'Central Bank of Swaziland', en: 'Central Bank of Swaziland' },
        holdings: { es: 'Emalangeni de polímero', en: 'Polymer emalangeni' },
      },
      {
        id: 'zambia',
        country: { es: 'Zambia', en: 'Zambia' },
        issuer: { es: 'Bank of Zambia', en: 'Bank of Zambia' },
        holdings: { es: 'Kwacha de polímero', en: 'Polymer kwacha' },
      },
    ],
  },
  {
    id: 'europa-oriente-medio',
    years: { es: 'desde 1999', en: 'from 1999' },
    title: {
      es: 'Europa y Oriente Medio',
      en: 'Europe and the Middle East',
    },
    lead: {
      es: 'Rumania, primera familia europea completa; Bulgaria, Omán y Catar.',
      en: 'Romania, Europe’s first full polymer family; Bulgaria, Oman, and Qatar.',
    },
    body: {
      es: 'Rumania inauguró el polímero en Europa con el 2000 lei del milenio (1999) y, tras la redenominación de 2005, una familia completa en Guardian. Bulgaria emitió un 20 leva conmemorativo de polímero en 2005. En el Golfo, Omán conmemoró en 2010 el 40.º aniversario del sultán Qaboos con un 5 riales de polímero; Catar ha pasado denominaciones —incluido el 100 riyals de esta colección— a sustrato plástico. El Banco de Inglaterra convirtió el 5, 10, 20 y 50 libras a Safeguard a partir de 2016; esas series, como las de Irlanda del Norte, aún no están fichadas aquí.',
      en: 'Romania opened polymer in Europe with the millennium 2,000 lei (1999) and, after the 2005 redenomination, a complete Guardian family. Bulgaria issued a polymer 20-leva commemorative in 2005. In the Gulf, Oman marked the 40th anniversary of Sultan Qaboos in 2010 with a polymer 5 rials; Qatar has moved denominations — including this collection’s 100 riyals — onto plastic. The Bank of England converted the £5, £10, £20, and £50 to Safeguard from 2016; those series, like Northern Ireland’s, are not yet catalogued here.',
    },
    issuers: [
      {
        id: 'bulgaria',
        country: { es: 'Bulgaria', en: 'Bulgaria' },
        issuer: { es: 'Banco Nacional de Bulgaria', en: 'Bulgarian National Bank' },
        holdings: { es: '20 leva, 2005', en: '20 leva, 2005' },
      },
      {
        id: 'catar',
        country: { es: 'Catar', en: 'Qatar' },
        issuer: { es: 'Qatar Central Bank', en: 'Qatar Central Bank' },
        holdings: { es: '100 riyals', en: '100 riyals' },
      },
      {
        id: 'oman',
        country: { es: 'Omán', en: 'Oman' },
        issuer: { es: 'Banco Central de Omán', en: 'Central Bank of Oman' },
        holdings: { es: '5 riales, 2010', en: '5 rials, 2010' },
      },
      {
        id: 'rumania',
        country: { es: 'Rumania', en: 'Romania' },
        issuer: { es: 'Banca Națională a României', en: 'National Bank of Romania' },
        holdings: { es: 'Lei de polímero', en: 'Polymer lei' },
      },
    ],
  },
];

export const seriesSources: CatalogSource[] = [
  {
    href: 'https://www.banknotes.rba.gov.au/australias-banknotes/history/index.html',
    es: 'Reserve Bank of Australia — History of Banknotes',
    en: 'Reserve Bank of Australia — History of Banknotes',
    note: {
      es: '10 dólares conmemorativo de enero de 1988; serie completa en polímero, 1992–1996; colaboración RBA–CSIRO.',
      en: 'Commemorative $10 of January 1988; full polymer series, 1992–1996; RBA–CSIRO collaboration.',
    },
  },
  {
    href: 'https://museum.rba.gov.au/exhibitions/pocket-guides/the-reinvention-of-banknotes/the-reinvention-of-banknotes.html',
    es: 'RBA Museum — The Reinvention of Banknotes',
    en: 'RBA Museum — The Reinvention of Banknotes',
    note: {
      es: 'Emisión el 26 de enero de 1988; primer billete en polímero con dispositivo ópticamente variable (Cook).',
      en: 'Issued 26 January 1988; first polymer note with an optically variable device (Cook).',
    },
  },
  {
    href: 'https://www.rba.gov.au/publications/annual-reports/rba/2001/note-printing.html',
    es: 'Reserve Bank of Australia — Annual Report 2001, Note Printing Australia and Securency',
    en: 'Reserve Bank of Australia — Annual Report 2001, Note Printing Australia and Securency',
    note: {
      es: 'Clientes de exportación de Guardian, incluido el 100 yuan del Banco Popular de China (2000).',
      en: 'Guardian export clients, including the People’s Bank of China 100 yuan (2000).',
    },
  },
  {
    href: 'https://en.wikipedia.org/wiki/Polymer_banknote',
    es: 'Wikipedia — Polymer banknote',
    en: 'Wikipedia — Polymer banknote',
    note: {
      es: 'Cronología de adopción mundial; distingue Tyvek, Guardian y Safeguard.',
      en: 'World adoption timeline; distinguishes Tyvek, Guardian, and Safeguard.',
    },
  },
  {
    href: 'https://www.banxico.org.mx/portales-de-usuarios/usuarios-billetes-monedas-ban.html',
    es: 'Banco de México — Billetes y monedas',
    en: 'Banco de México — Banknotes and coins',
    note: {
      es: 'El banco emisor documenta las familias en circulación; 20, 50 y 100 pesos se imprimen en polímero.',
      en: 'The issuing bank documents the families in circulation; 20, 50, and 100 pesos are printed on polymer.',
    },
  },
  {
    href: 'https://www.bankofengland.co.uk/explainers/why-are-new-banknotes-made-of-polymer',
    es: 'Bank of England — Why are new banknotes made of polymer?',
    en: 'Bank of England — Why are new banknotes made of polymer?',
    note: {
      es: '5 libras en septiembre de 2016; 10 libras un año después; 20 y 50 libras a continuación.',
      en: '£5 in September 2016; £10 a year later; then the £20 and £50.',
    },
  },
];

export const seriesCopy = {
  es: {
    metaTitle: 'Billetes de polímero mundial | Notofilia',
    metaDescription:
      'Catálogo mundial de billetes de polímero: sustratos Guardian, Safeguard, Tyvek e híbridos de 29 emisores, de México a Zambia, con historia y fuentes.',
    kicker: 'Polímero · Catálogo mundial',
    title: 'Billetes de polímero mundial',
    heroAlt:
      'Mapa vintage en relieve 3D del mundo sobre pergamino, con rutas de viaje, sellos, un pasaporte de explorador global y el título Global Map',
    intro: [
      'Los primeros plásticos de circulación no eran el polímero actual. Haití emitió gourdes en Tyvek a principios de los años 1980 y la Isla de Man un 1 libra en 1983: un no tejido sintético de la American Bank Note Company y Bradbury Wilkinson, no el polipropileno biaxialmente orientado que vendría después. El primer billete de polímero en el sentido moderno —película plástica con ventana transparente y un dispositivo ópticamente variable— lo puso en circulación Australia el 26 de enero de 1988: el 10 dólares del Bicentenario, fruto de casi veinte años de trabajo conjunto entre el Reserve Bank of Australia y la CSIRO. El RBA sitúa la serie decimal completa en polímero entre 1992 y 1996; Australia fue el primer país que sustituyó todo su papel por ese sustrato.',
      'Securency —empresa conjunta del RBA e Innovia Films, hoy CCL Secure— exportó el sustrato Guardian. El Informe anual 2001 del banco australiano enumera clientes de esa película, entre ellos el 100 yuan chino de 2000. Rumania fue el primer emisor europeo en adoptar el polímero (conmemorativo de 1999) y en completar una familia entera tras la redenominación de 2005. México, Canadá, Nueva Zelanda y decenas de bancos más siguieron, atraídos por la durabilidad, la higiene y las ventanas que el algodón no permite.',
      'De La Rue comercializa Safeguard, su propio polímero; Louisenthal y otros fabricantes ofrecen híbridos que combinan papel de algodón con ventanas plásticas. El Banco de Inglaterra pasó el 5, 10, 20 y 50 libras a polímero a partir de 2016. Esta vitrina no distingue fronteras temáticas: reúne Guardian, Safeguard, Tyvek e híbridos de la colección privada, sin el recorte por país de las demás series del catálogo.',
      'El inventario documenta 29 emisores, de Bangladesh a Zambia. Las fichas de cada país se publicarán como en Filipinas —con imágenes del ejemplar, referencias Pick y fuentes— a medida que se documenten.',
    ],
    holdingsTitle: 'El catálogo',
    holdingsIntro:
      'Cuatro capítulos, en la misma fila de izquierda a derecha por región: Américas, Asia-Pacífico, África, y Europa y Oriente Medio. Las fichas de cada pieza se publicarán como en Filipinas, a medida que se documenten.',
    viewChapter: 'Leer el capítulo',
    sourcesTitle: 'Fuentes',
    eraLabel: 'Región',
    issuersHeading: 'Emisores de la colección',
  },
  en: {
    metaTitle: 'World polymer banknotes | Notofilia',
    metaDescription:
      'World catalog of polymer banknotes: Guardian, Safeguard, Tyvek, and hybrid substrates from 29 issuers, from Mexico to Zambia, with history and sources.',
    kicker: 'Polymer · World catalog',
    title: 'World polymer banknotes',
    heroAlt:
      'Vintage 3D relief world map on parchment, with travel routes, postage stamps, a global-explorer passport, and the title Global Map',
    intro: [
      'The first circulating plastics were not today’s polymer. Haiti issued Tyvek gourdes in the early 1980s and the Isle of Man a £1 in 1983: a synthetic non-woven from the American Bank Note Company and Bradbury Wilkinson, not the biaxially oriented polypropylene that followed. The first polymer note in the modern sense — plastic film with a clear window and an optically variable device — entered circulation in Australia on 26 January 1988: the Bicentennial $10, the fruit of almost twenty years of joint work by the Reserve Bank of Australia and CSIRO. The RBA places the full decimal polymer series between 1992 and 1996; Australia was the first country to replace all of its paper with that substrate.',
      'Securency — a joint venture of the RBA and Innovia Films, now CCL Secure — exported the Guardian substrate. The Bank’s 2001 annual report lists export clients for that film, including China’s 100 yuan of 2000. Romania was the first European issuer to adopt polymer (a 1999 commemorative) and to complete an entire family after the 2005 redenomination. Mexico, Canada, New Zealand, and dozens of other banks followed, drawn by durability, hygiene, and windows that cotton paper cannot carry.',
      'De La Rue markets Safeguard, its own polymer; Louisenthal and other mills offer hybrids that combine cotton paper with plastic windows. The Bank of England moved the £5, £10, £20, and £50 onto polymer from 2016. This case ignores thematic borders: it gathers Guardian, Safeguard, Tyvek, and hybrids from the private collection, without the country cut of the other catalog series.',
      'The inventory records 29 issuers, from Bangladesh to Zambia. Individual country pages will be published as in the Philippines case — with images of the piece, Pick references, and sources — as they are documented.',
    ],
    holdingsTitle: 'The catalog',
    holdingsIntro:
      'Four chapters in one row, left to right by region: the Americas, Asia-Pacific, Africa, and Europe and the Middle East. Individual note pages will be published as they are documented, as in the Philippines case.',
    viewChapter: 'Read the chapter',
    sourcesTitle: 'Sources',
    eraLabel: 'Region',
    issuersHeading: 'Issuers in the collection',
  },
} as const;

export function seriesPath(locale: 'es' | 'en'): string {
  return locale === 'en' ? `/en${POLYMER_PATH}` : POLYMER_PATH;
}

export function chapterHref(id: PolymerChapterId): string {
  return `#${id}`;
}
