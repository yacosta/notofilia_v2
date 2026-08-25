export type Locale = 'es' | 'en';

export const SITE_URL = 'https://notofilia.com';

export const STATS = {
  banknotes: 224,
  coins: 9,
  countries: 36,
  catalog: 124,
  pages: 156,
} as const;

export function statsLine(locale: Locale): string {
  return locale === 'en'
    ? `${STATS.banknotes} banknotes · ${STATS.coins} coins · ${STATS.countries} countries · ${STATS.catalog} catalog entries · ${STATS.pages} pages`
    : `${STATS.banknotes} billetes · ${STATS.coins} monedas · ${STATS.countries} países · ${STATS.catalog} fichas · ${STATS.pages} páginas`;
}

export function localizePath(path: string, locale: Locale): string {
  if (path.startsWith('http')) return path;
  if (locale === 'es') return path;
  if (path === '/') return '/en/';
  return `/en${path}`;
}

export function otherLocalePath(path: string, locale: Locale): string {
  if (locale === 'es') {
    return path === '/' ? '/en/' : `/en${path}`;
  }
  return path.replace(/^\/en(?=\/|$)/, '') || '/';
}

export const copy = {
  es: {
    skip: 'Saltar al contenido principal',
    brandTag: 'Numismática y Notafilia',
    navLabel: 'Navegación principal',
    langLabel: 'Idioma',
    langEs: 'ES — Español',
    langEn: 'EN — English',
    menu: 'Menú',
    closeMenu: 'Cerrar menú',
    metaTitle: 'Notofilia: Billetes y Numismática | Catálogo y Guías',
    metaDescription:
      'Notafilia y numismática: 224 billetes y 9 monedas de 36 países. Catálogos y guías en español.',
    heroKicker: 'Notofilia.com',
    heroTitle: 'Una colección privada de billetes y monedas históricas',
    heroLead:
      'Imágenes detalladas, referencias de catálogo e historias monetarias de Colombia, Estados Unidos, Puerto Rico y el mundo.',
    heroPrimary: 'Ver la colección de Colombia',
    heroSecondary: 'Explorar la colección',
    statsLabel: 'Estadísticas de la colección',
    browseTitle: 'Explorar por país o colección',
    browseIntro: 'Entre por un país, un material o un tema especializado.',
    milestonesTitle: 'Logros del Mes — Colección Virtual',
    milestonesIntro: 'Piezas y catálogos recientes incorporados a la Colección Virtual.',
    viewCatalog: 'Ver en el catálogo →',
    articlesTitle: 'Artículos originales',
    readMore: 'Leer más →',
    allBlog: 'Ver todo el blog',
    newsTitle: 'Noticias seleccionadas',
    source: 'Fuente',
    newWindow: 'se abre en una pestaña nueva',
    allNews: 'Ver todas las noticias',
    numismaticsTitle: 'Numismática',
    numismaticsBody:
      'Disciplina dedicada al estudio y la colección de monedas, medallas y, en su sentido más amplio, de todo objeto utilizado como medio de pago a lo largo de la historia. Abarca el análisis histórico, artístico y técnico de las piezas acuñadas.',
    notaphilyTitle: 'Notafilia',
    notaphilyBody:
      'Rama especializada de la numismática centrada específicamente en el estudio y la colección de billetes y papel moneda, incluyendo su historia, diseño, grabado y las emisiones de entidades tanto públicas como privadas.',
    newsletterTitle: 'Boletín',
    newsletterBody: 'Suscríbase para recibir noticias de numismática y notafilia.',
    emailLabel: 'Correo electrónico',
    emailPlaceholder: 'su@correo.com',
    subscribe: 'Suscríbase',
    searchLabel: 'Buscar en la colección',
    searchPlaceholder: 'Buscar billetes, monedas, guías…',
    searchSubmit: 'Buscar',
    reportError: 'Reportar un error',
    footerNav: 'Pie de página',
    explore: 'Explorar',
    resources: 'Recursos',
    about: 'Sobre Notofilia',
    legal: 'Legal',
    copyright: 'Copyright 2026 Notofilia. Todos los derechos reservados.',
    ownership:
      'Todos los billetes mostrados en este sitio pertenecen a mi colección privada. Ninguno está a la venta. Simplemente comparto mi pasión por este pasatiempo con el mundo.',
    virtual: 'Colección Virtual:',
    designedBy: 'Página diseñada por',
    withLove: 'con mucho',
    love: 'amor',
    comingSoon: 'Esta sección se está migrando a Notofilia v2.',
    backHome: 'Volver al inicio',
    notFoundTitle: 'Página no encontrada',
    notFoundBody: 'Esa dirección no existe en el catálogo.',
  },
  en: {
    skip: 'Skip to main content',
    brandTag: 'Banknotes and Numismatics',
    navLabel: 'Primary navigation',
    langLabel: 'Language',
    langEs: 'ES — Spanish',
    langEn: 'EN — English',
    menu: 'Menu',
    closeMenu: 'Close menu',
    metaTitle: 'Notofilia: Banknotes and Numismatics | Catalog and Guides',
    metaDescription:
      'Notaphily and numismatics: 224 banknotes and 9 coins from 36 countries. Catalogs and guides in English.',
    heroKicker: 'Notofilia.com',
    heroTitle: 'A private collection of historical banknotes and coins',
    heroLead:
      'Detailed images, catalog references, and monetary histories from around the world.',
    heroPrimary: 'See the Colombia collection',
    heroSecondary: 'Explore the collection',
    statsLabel: 'Collection statistics',
    browseTitle: 'Browse by country or collection',
    browseIntro: 'Enter through a country, material, or specialty theme.',
    milestonesTitle: 'Monthly Milestones — Virtual Collection',
    milestonesIntro: 'Recent pieces and catalogs added to the Virtual Collection.',
    viewCatalog: 'View in the catalog →',
    articlesTitle: 'Original articles',
    readMore: 'Read more →',
    allBlog: 'See the full blog',
    newsTitle: 'Curated news',
    source: 'Source',
    newWindow: 'opens in a new tab',
    allNews: 'See all news',
    numismaticsTitle: 'Numismatics',
    numismaticsBody:
      'A discipline dedicated to the study and collection of coins, medals, and, in its broadest sense, any object used as a means of payment throughout history. It covers the historical, artistic, and technical analysis of minted pieces.',
    notaphilyTitle: 'Notaphily',
    notaphilyBody:
      'A specialized branch of numismatics focused specifically on the study and collection of banknotes and paper money, including their history, design, engraving, and issues from both public and private entities.',
    newsletterTitle: 'Newsletter',
    newsletterBody: 'Subscribe for numismatics and notaphily news.',
    emailLabel: 'Email address',
    emailPlaceholder: 'you@email.com',
    subscribe: 'Subscribe',
    searchLabel: 'Search the collection',
    searchPlaceholder: 'Search banknotes, coins, guides…',
    searchSubmit: 'Search',
    reportError: 'Report an error',
    footerNav: 'Footer',
    explore: 'Explore',
    resources: 'Resources',
    about: 'About Notofilia',
    legal: 'Legal',
    copyright: 'Copyright 2026 Notofilia. All rights reserved.',
    ownership:
      'Every banknote shown on this site belongs to my private collection. None are for sale. I simply share my passion for this hobby with the world.',
    virtual: 'Virtual Collection:',
    designedBy: 'Page designed by',
    withLove: 'with much',
    love: 'love',
    comingSoon: 'This section is being migrated to Notofilia v2.',
    backHome: 'Back to the homepage',
    notFoundTitle: 'Page not found',
    notFoundBody: 'That address is not in the catalog.',
  },
} as const;

export const primaryNav = [
  { href: '/coleccion/colombia/', es: 'Colección', en: 'Collection' },
  { href: '/blog/', es: 'Guías para coleccionistas', en: 'Guides for collectors' },
  { href: '/noticias/', es: 'Noticias numismáticas', en: 'Numismatic news' },
  { href: '/glosario/', es: 'Glosario', en: 'Glossary' },
  { href: '/nosotros/', es: 'Sobre Notofilia', en: 'About' },
  { href: '/editorial/', es: 'Política editorial y valoración', en: 'Editorial policy' },
  { href: '/contacto/', es: 'Contacto', en: 'Contact' },
] as const;

export const collections = [
  {
    href: '/coleccion/numismatica/',
    es: { title: 'Numismática', description: 'Catálogo de monedas: oro colonial, cobres de necesidad y piezas de comercio.' },
    en: { title: 'Numismatics', description: 'Coin catalog: colonial gold, necessity copper, and trade pieces.' },
  },
  {
    href: '/coleccion/colombia/',
    es: { title: 'Colombia', description: 'Banca libre, Banco de la República, specimens y errores.' },
    en: { title: 'Colombia', description: 'Free banking, Banco de la República, specimens, and errors.' },
  },
  {
    href: '/coleccion/estados-unidos/',
    es: { title: 'Estados Unidos', description: 'Federal, colonial, MPC, obsoletos y emisiones promocionales.' },
    en: { title: 'United States', description: 'Federal, colonial, MPC, obsolete notes, and promotional issues.' },
  },
  {
    href: '/coleccion/espana/',
    es: { title: 'España', description: 'Oro colonial de la ceca de Santa Fe de Bogotá.' },
    en: { title: 'Spain', description: 'Colonial gold of the Santa Fe de Bogotá mint.' },
  },
  {
    href: '/coleccion/puerto-rico/',
    es: { title: 'Puerto Rico', description: 'Emisiones coloniales y de transición del siglo XIX.' },
    en: { title: 'Puerto Rico', description: 'Colonial and nineteenth-century transition issues.' },
  },
  {
    href: '/coleccion/ecuador/',
    es: { title: 'Ecuador', description: 'Sucres documentados de la colección virtual.' },
    en: { title: 'Ecuador', description: 'Documented sucres from the virtual collection.' },
  },
  {
    href: '/coleccion/filipinas/',
    es: { title: 'Filipinas', description: 'Certificados del Tesoro y Victory Series No. 66.' },
    en: { title: 'Philippines', description: 'Treasury Certificates and Victory Series No. 66.' },
  },
  {
    href: '/coleccion/polimero-mundial/',
    es: { title: 'Billetes de polímero', description: 'Catálogo mundial de sustratos Guardian, Safeguard e híbridos.' },
    en: { title: 'Polymer banknotes', description: 'World catalog of Guardian, Safeguard, and hybrid substrates.' },
  },
] as const;

export const milestones = [
  {
    href: '/coleccion/giori-memorial-lincoln/',
    es: {
      title: 'Giori — Memorial Lincoln, uniface, RGMB1/0NSU',
      description: 'Nota de prueba Magna/Giori (c. 1970s): Memorial Lincoln en verde hierba, reverso en blanco.',
    },
    en: {
      title: 'Giori — Lincoln Memorial, uniface, RGMB1/0NSU',
      description: 'Magna/Giori test note (c. 1970s): Lincoln Memorial in grass green, blank reverse.',
    },
  },
  {
    href: '/coleccion/colombia/2000-pesos-debora-arango-prueba-anverso/',
    es: {
      title: 'Banco de la República — 2.000 pesos Débora Arango, prueba anverso P-458b',
      description: 'Prueba de anverso del 2.000 pesos con retrato de Débora Arango.',
    },
    en: {
      title: 'Banco de la República — 2,000 pesos Débora Arango, obverse proof P-458b',
      description: 'Obverse proof of the 2,000-peso note with Débora Arango.',
    },
  },
  {
    href: '/coleccion/colombia/2000-pesos-debora-arango-prueba/',
    es: {
      title: 'Banco de la República — 2.000 pesos Débora Arango, prueba P-458b',
      description: 'Prueba documentada del 2.000 pesos P-458b.',
    },
    en: {
      title: 'Banco de la República — 2,000 pesos Débora Arango, proof P-458b',
      description: 'Documented proof of the 2,000-peso P-458b.',
    },
  },
  {
    href: '/coleccion/colombia/10-pesos-oro-1943/',
    es: {
      title: 'Banco de la República — 10 pesos oro, 1943 (PMG 50 EPQ)',
      description: 'Billete de 10 pesos oro de 1943, certificado PMG 50 EPQ.',
    },
    en: {
      title: 'Banco de la República — 10 pesos oro, 1943 (PMG 50 EPQ)',
      description: '1943 10 pesos oro note, certified PMG 50 EPQ.',
    },
  },
  {
    href: '/coleccion/numismatica/santa-marta-1-4-real-1820/',
    es: {
      title: 'Santa Marta — ¼ real de cobre, 1820',
      description: 'Cuartillo de cobre de necesidad de Santa Marta, 1820.',
    },
    en: {
      title: 'Santa Marta — ¼ real copper, 1820',
      description: 'Santa Marta necessity copper cuartillo, 1820.',
    },
  },
  {
    href: '/coleccion/filipinas/2-pesos-victory-series-66/',
    es: {
      title: 'Filipinas — 2 pesos Victory Series 66',
      description: 'Certificado del Tesoro de 2 pesos, Victory Series No. 66.',
    },
    en: {
      title: 'Philippines — 2 pesos Victory Series 66',
      description: '2-peso Treasury Certificate, Victory Series No. 66.',
    },
  },
  {
    href: '/coleccion/filipinas/1-peso-victory-series-66/',
    es: {
      title: 'Filipinas — 1 peso Victory Series 66',
      description: 'Certificado del Tesoro de 1 peso, Victory Series No. 66.',
    },
    en: {
      title: 'Philippines — 1 peso Victory Series 66',
      description: '1-peso Treasury Certificate, Victory Series No. 66.',
    },
  },
  {
    href: '/coleccion/polimero-mundial/china-100-yuan-2000/',
    es: {
      title: 'China — 100 yuan de polímero, 2000',
      description: 'Emisión conmemorativa de polímero de 100 yuan, año 2000.',
    },
    en: {
      title: 'China — 100 yuan polymer, 2000',
      description: 'Commemorative 100-yuan polymer issue, year 2000.',
    },
  },
] as const;

export const articles = [
  {
    href: '/blog/mylar-si-plastico-no/',
    dateEs: '3 ago 2026',
    dateEn: '3 Aug 2026',
    es: 'Mylar sí, plástico no: cómo guardar sus billetes',
    en: 'Mylar yes, plastic no: how to store your banknotes',
  },
  {
    href: '/blog/pies-de-imprenta-colombianos/',
    dateEs: '19 jul 2026',
    dateEn: '19 Jul 2026',
    es: '¿Tres imprentas? Pies de imprenta colombianos',
    en: 'Three printers? Colombian imprint lines',
  },
  {
    href: '/blog/como-empezar-coleccion-billetes/',
    dateEs: '16 jul 2026',
    dateEn: '16 Jul 2026',
    es: 'Cómo empezar una colección de billetes',
    en: 'How to start a banknote collection',
  },
  {
    href: '/blog/como-identificar-billetes-falsos/',
    dateEs: '16 jul 2026',
    dateEn: '16 Jul 2026',
    es: 'Cómo identificar billetes falsos: elementos de seguridad',
    en: 'How to identify counterfeit notes: security features',
  },
] as const;

export const news = [
  {
    href: '/noticias/15-monedas-eeuu-records-subasta/',
    dateEs: '19 ago 2026',
    dateEn: '19 Aug 2026',
    es: '15 monedas de EE.UU. con récords de subasta',
    en: '15 U.S. coins with auction records',
    source: 'El Diario NY',
    sourceUrl: 'https://eldiariony.com/',
  },
  {
    href: '/noticias/combo-1000-hidalgo/',
    dateEs: '19 ago 2026',
    dateEn: '19 Aug 2026',
    es: 'Piden $5.699 por un combo del $1.000 Hidalgo',
    en: 'A $1,000 Hidalgo combo listed at $5,699',
    source: 'El Heraldo de México',
    sourceUrl: 'https://heraldodemexico.com.mx/',
  },
  {
    href: '/noticias/coleccionistas-rancagua/',
    dateEs: '18 ago 2026',
    dateEn: '18 Aug 2026',
    es: 'Coleccionistas de Rancagua y su patrimonio',
    en: 'Rancagua collectors and their heritage',
    source: 'El Rancagüino',
    sourceUrl: 'https://www.elrancaguino.cl/',
  },
  {
    href: '/noticias/bncr-monedas-conmemorativas/',
    dateEs: '17 ago 2026',
    dateEn: '17 Aug 2026',
    es: 'BNCR reabre venta de monedas conmemorativas',
    en: 'BNCR reopens commemorative coin sales',
    source: 'El Financiero',
    sourceUrl: 'https://www.elfinancierocr.com/',
  },
] as const;

export const footerExplore = [
  { href: '/coleccion/colombia/', es: 'Colombia', en: 'Colombia' },
  { href: '/coleccion/numismatica/', es: 'Monedas', en: 'Coins' },
  { href: '/coleccion/polimero-mundial/', es: 'Billetes de polímero mundial', en: 'World polymer banknotes' },
  { href: '/coleccion/estados-unidos/', es: 'Estados Unidos', en: 'United States' },
] as const;

export const footerResources = [
  { href: '/blog/', es: 'Guías para coleccionistas', en: 'Guides for collectors' },
  { href: '/noticias/', es: 'Noticias', en: 'News' },
  { href: '/glosario/', es: 'Glosario', en: 'Glossary' },
] as const;

export const footerAbout = [
  { href: '/nosotros/', es: 'Sobre Notofilia', en: 'About Notofilia' },
  { href: '/editorial/', es: 'Política editorial y valoración', en: 'Editorial policy' },
  { href: '/contacto/', es: 'Contacto', en: 'Contact' },
  { href: '/contacto/?motivo=error', es: 'Reportar un error', en: 'Report an error' },
] as const;

export const stubPages = [
  { path: 'coleccion/colombia', es: 'Colombia', en: 'Colombia' },
  { path: 'coleccion/numismatica', es: 'Numismática', en: 'Numismatics' },
  { path: 'coleccion/estados-unidos', es: 'Estados Unidos', en: 'United States' },
  { path: 'coleccion/espana', es: 'España', en: 'Spain' },
  { path: 'coleccion/puerto-rico', es: 'Puerto Rico', en: 'Puerto Rico' },
  { path: 'coleccion/ecuador', es: 'Ecuador', en: 'Ecuador' },
  { path: 'coleccion/filipinas', es: 'Filipinas', en: 'Philippines' },
  { path: 'coleccion/polimero-mundial', es: 'Billetes de polímero', en: 'Polymer banknotes' },
  { path: 'blog', es: 'Guías para coleccionistas', en: 'Guides for collectors' },
  { path: 'noticias', es: 'Noticias numismáticas', en: 'Numismatic news' },
  { path: 'glosario', es: 'Glosario', en: 'Glossary' },
  { path: 'nosotros', es: 'Sobre Notofilia', en: 'About Notofilia' },
  { path: 'editorial', es: 'Política editorial y valoración', en: 'Editorial policy' },
  { path: 'contacto', es: 'Contacto', en: 'Contact' },
  { path: 'buscar', es: 'Buscar', en: 'Search' },
  { path: 'politica-privacidad-cookies', es: 'Política de privacidad y cookies', en: 'Privacy and cookie policy' },
] as const;
