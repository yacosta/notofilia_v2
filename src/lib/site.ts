import { BASELINE, collectionStats as holdingsStats } from '../data/holdings';
import { GLOSSARY_PATH, glossaryTermSlugs } from '../data/glossary';
import { catalogNoteSlugs, dedicatedCatalogPaths as catalogPaths, SERIES_PATH } from '../data/philippines-victory-66';

export type Locale = 'es' | 'en';

export const SITE_URL = 'https://notofilia.com';

/** Empty-site content slugs already listed in stubPages/collections. New routes increment pages from 0. */
const SEED_CONTENT_SLUGS = 16;
/** Non-404 Astro page modules on the empty site: index, en/index, [...slug], en/[...slug]. */
const SEED_ASTRO_PAGE_FILES = 4;

const astroPageFiles = import.meta.glob('../pages/**/*.astro');

function uniqueContentSlugs(): Set<string> {
  const slugs = new Set<string>();
  for (const page of stubPages) slugs.add(page.path);
  for (const item of collections) slugs.add(item.href.replace(/^\/|\/$/g, ''));
  for (const item of milestones) slugs.add(item.href.replace(/^\/|\/$/g, ''));
  for (const item of articles) slugs.add(item.href.replace(/^\/|\/$/g, ''));
  for (const item of news) slugs.add(item.href.replace(/^\/|\/$/g, ''));
  for (const slug of catalogNoteSlugs) slugs.add(slug);
  return slugs;
}

function extraAstroPageFiles(): number {
  const countable = Object.keys(astroPageFiles).filter(
    (file) => !file.endsWith('404.astro') && !file.includes('/coleccion/') && !file.includes('/glosario/'),
  );
  return Math.max(0, countable.length - SEED_ASTRO_PAGE_FILES);
}

function publicPageCount(): number {
  return BASELINE.pages + Math.max(0, uniqueContentSlugs().size - SEED_CONTENT_SLUGS) + extraAstroPageFiles();
}

/** Live collection totals derived from holdings baseline + additions. */
export function collectionStats() {
  return holdingsStats(publicPageCount());
}

export function statsLine(locale: Locale): string {
  const stats = collectionStats();
  return locale === 'en'
    ? `${stats.banknotes} banknotes · ${stats.coins} coins · ${stats.countries} countries · ${stats.catalog} catalog entries · ${stats.pages} pages`
    : `${stats.banknotes} billetes · ${stats.coins} monedas · ${stats.countries} países · ${stats.catalog} fichas · ${stats.pages} páginas`;
}

const seedHoldings = holdingsStats();

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
    searchLabel: 'Buscar en la colección',
    navLabel: 'Navegación principal',
    langLabel: 'Idioma',
    langEs: 'ES — Español',
    langEn: 'EN — English',
    menu: 'Menú',
    closeMenu: 'Cerrar menú',
    closeSubmenu: 'Cerrar submenú',
    openSubmenu: 'Abrir el submenú {menuTitle}',
    closeNamedSubmenu: 'Cerrar el submenú {menuTitle}',
    navHelp:
      'Puede abrir un submenú, si existe, con el botón situado después del enlace.',
    navOnMenu: 'Está en el menú de navegación',
    backToMenu: 'Volver al menú',
    megaBannerCta: 'Ver el catálogo',
    metaTitle: 'Notofilia: Billetes y Numismática | Catálogo y Guías',
    metaDescription: `Notafilia y numismática: ${seedHoldings.banknotes} billetes y ${seedHoldings.coins} monedas de ${seedHoldings.countries} países. Catálogos y guías en español.`,
    heroKicker: 'Notofilia.com',
    heroTitle: 'Una colección privada de billetes y monedas históricas',
    heroLead:
      'Imágenes detalladas, referencias de catálogo e historias monetarias de Filipinas, Colombia, Estados Unidos, Puerto Rico y el mundo.',
    heroPrimary: 'Ver el catálogo de Filipinas',
    heroSecondary: 'Explorar la colección',
    statsLabel: 'Estadísticas de la colección',
    browseTitle: 'Explorar Colección Virtual',
    browseIntro: 'Entre por un país, un material o un tema especializado.',
    milestonesTitle: 'Logros del Mes — Colección Virtual',
    milestonesIntro: 'Piezas y catálogos recientes incorporados a la Colección Virtual.',
    emptyMilestones: 'No hay piezas destacadas este mes.',
    viewCatalog: 'Ver en el catálogo →',
    articlesTitle: 'Artículos originales',
    emptyArticles: 'No hay artículos destacados por ahora.',
    readMore: 'Leer más →',
    allBlog: 'Ver todo el blog',
    newsTitle: 'Noticias seleccionadas',
    emptyNews: 'No hay noticias seleccionadas por ahora.',
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
    brandTag: 'Numismatics and Notaphily',
    searchLabel: 'Search the collection',
    navLabel: 'Primary navigation',
    langLabel: 'Language',
    langEs: 'ES — Spanish',
    langEn: 'EN — English',
    menu: 'Menu',
    closeMenu: 'Close menu',
    closeSubmenu: 'Close sub menu',
    openSubmenu: 'Open {menuTitle} submenu',
    closeNamedSubmenu: 'Close {menuTitle} submenu',
    navHelp: 'You can open a sub-menu, if it exists, with the button located after the link.',
    navOnMenu: 'You are on the navigation menu',
    backToMenu: 'Back to menu',
    megaBannerCta: 'See the catalog',
    metaTitle: 'Notofilia: Banknotes and Numismatics | Catalog and Guides',
    metaDescription: `Notaphily and numismatics: ${seedHoldings.banknotes} banknotes and ${seedHoldings.coins} coins from ${seedHoldings.countries} countries. Catalogs and guides in English.`,
    heroKicker: 'Notofilia.com',
    heroTitle: 'A private collection of historical banknotes and coins',
    heroLead:
      'Detailed images, catalog references, and monetary histories from the Philippines, Colombia, the United States, Puerto Rico, and beyond.',
    heroPrimary: 'See the Philippines catalog',
    heroSecondary: 'Explore the collection',
    statsLabel: 'Collection statistics',
    browseTitle: 'Explore Virtual Collection',
    browseIntro: 'Enter through a country, material, or specialty theme.',
    milestonesTitle: 'Monthly Milestones — Virtual Collection',
    milestonesIntro: 'Recent pieces and catalogs added to the Virtual Collection.',
    emptyMilestones: 'No featured pieces this month.',
    viewCatalog: 'View in the catalog →',
    articlesTitle: 'Original articles',
    emptyArticles: 'No featured articles right now.',
    readMore: 'Read more →',
    allBlog: 'See the full blog',
    newsTitle: 'Curated news',
    emptyNews: 'No curated news right now.',
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

export { megaNav, primaryNav, type NavNode } from './mega-nav';

export const collections = [
  {
    href: SERIES_PATH,
    es: { title: 'Filipinas', description: 'Commonwealth · Victory Series No. 66: 1, 2, 5 y 20 pesos.' },
    en: { title: 'Philippines', description: 'Commonwealth · Victory Series No. 66: 1, 2, 5, and 20 pesos.' },
  },
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
    href: '/coleccion/polimero-mundial/',
    es: { title: 'Billetes de polímero', description: 'Catálogo mundial de sustratos Guardian, Safeguard e híbridos.' },
    en: { title: 'Polymer banknotes', description: 'World catalog of Guardian, Safeguard, and hybrid substrates.' },
  },
] as const;

export type MilestoneItem = {
  href: string;
  es: { title: string; description: string };
  en: { title: string; description: string };
};

export type ArticleItem = {
  href: string;
  dateEs: string;
  dateEn: string;
  es: string;
  en: string;
};

export type NewsItem = ArticleItem & {
  source: string;
  sourceUrl: string;
};

export const milestones: MilestoneItem[] = [
  {
    href: SERIES_PATH,
    es: {
      title: 'Filipinas · Serie Victory n.º 66',
      description: 'Primera vitrina del catálogo: 1, 2, 5 y 20 pesos del Commonwealth, alineados por denominación.',
    },
    en: {
      title: 'Philippines · Victory Series No. 66',
      description: 'First catalog case: Commonwealth 1, 2, 5, and 20 pesos, lined up by denomination.',
    },
  },
];

export const articles: ArticleItem[] = [];

export const news: NewsItem[] = [];

export const footerExplore = [
  { href: SERIES_PATH, es: 'Filipinas', en: 'Philippines' },
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

/** Public content routes. Adding a row increments páginas in statsLine (see SEED_CONTENT_SLUGS). */
export const stubPages = [
  { path: 'coleccion/colombia', es: 'Colombia', en: 'Colombia' },
  { path: 'coleccion/numismatica', es: 'Numismática', en: 'Numismatics' },
  { path: 'coleccion/estados-unidos', es: 'Estados Unidos', en: 'United States' },
  { path: 'coleccion/espana', es: 'España', en: 'Spain' },
  { path: 'coleccion/puerto-rico', es: 'Puerto Rico', en: 'Puerto Rico' },
  { path: 'coleccion/ecuador', es: 'Ecuador', en: 'Ecuador' },
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

export const dedicatedCatalogPaths = new Set<string>([
  ...catalogPaths,
  GLOSSARY_PATH.replace(/^\/|\/$/g, ''),
  ...glossaryTermSlugs,
]);

export { SERIES_PATH };

export const STATS = collectionStats();
