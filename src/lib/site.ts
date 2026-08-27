import { BASELINE, collectionStats as holdingsStats } from '../data/holdings';
import { CHINA_PATH, chinaNoteSlugs } from '../data/china';
import { ECUADOR_PATH } from '../data/ecuador';
import { NOTAFILIA_PATH } from '../data/notafilia';
import { COLOMBIA_PATH } from '../data/colombia';
import { COLOMBIA_COINAGE_PATH } from '../data/colombia-coinage';
import { colombiaCoinagePieceSlugs } from '../data/colombia-coinage-pieces';
import { USA_PATH, USA_PATH_EN } from '../data/estados-unidos';
import { LAZARETTOS_PATH } from '../data/lazarettos';
import { NUMISMATICA_PATH } from '../data/numismatica';
import { GLOSSARY_PATH, glossaryTermSlugs } from '../data/glossary';
import { NETHERLANDS_PATH } from '../data/netherlands';
import {
  NETHERLANDS_COINAGE_PATH,
  NETHERLANDS_COINAGE_PATH_EN,
  NUMISMATICS_PATH,
  netherlandsCoinSlugs,
  netherlandsCoinageDedicatedSlugs,
  netherlandsCoins,
} from '../data/netherlands-coinage';
import { catalogNoteSlugs as philippinesNoteSlugs, dedicatedCatalogPaths as catalogPaths, SERIES_PATH } from '../data/philippines-victory-66';
import { dedicatedCatalogPaths as puertoRicoPaths, PUERTO_RICO_PATH } from '../data/puerto-rico';
import { POLIMERO_MUNDIAL_PATH } from '../data/polimero-mundial';
import { blogArticles, blogSlugs, newsArticles, newsSlugs } from '../data/editorial';

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
  for (const slug of philippinesNoteSlugs) slugs.add(slug);
  for (const slug of colombiaCoinagePieceSlugs) slugs.add(slug);
  for (const slug of netherlandsCoinSlugs) slugs.add(slug);
  for (const slug of chinaNoteSlugs) slugs.add(slug);
  return slugs;
}

function extraAstroPageFiles(): number {
  const countable = Object.keys(astroPageFiles).filter(
    (file) =>
      !file.endsWith('404.astro') &&
      !file.includes('/coleccion/') &&
      !file.includes('/glosario/') &&
      !file.includes('/blog/') &&
      !file.includes('/noticias/') &&
      !file.includes('/paises-bajos-numismatica/') &&
      !file.includes('/netherlands-numismatica/'),
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

function stripEnPrefix(path: string): string {
  return path.replace(/^\/en(?=\/|$)/, '') || '/';
}

function stripTrailingSlash(path: string): string {
  return path.replace(/\/$/, '') || '/';
}

function addLocalePair(
  pairs: Record<string, { es: string; en: string }>,
  esPath: string,
  enPath: string,
) {
  const es = stripTrailingSlash(stripEnPrefix(esPath));
  const en = stripTrailingSlash(stripEnPrefix(enPath));
  const pair = { es, en };
  pairs[es] = pair;
  pairs[en] = pair;
}

/** Collection slugs that differ by language (Spanish filename vs English filename). */
const localizedCollectionSlugs: Record<string, { es: string; en: string }> = {};
addLocalePair(localizedCollectionSlugs, USA_PATH, USA_PATH_EN);
addLocalePair(localizedCollectionSlugs, NETHERLANDS_COINAGE_PATH, NETHERLANDS_COINAGE_PATH_EN);
for (const coin of netherlandsCoins) {
  addLocalePair(localizedCollectionSlugs, coin.path, coin.pathEn);
}

function splitHash(path: string): { pathname: string; hash: string } {
  const index = path.indexOf('#');
  if (index === -1) return { pathname: path, hash: '' };
  return { pathname: path.slice(0, index), hash: path.slice(index) };
}

function rewriteCollectionSlug(pathname: string, locale: Locale): string {
  const slash = pathname.endsWith('/') ? '/' : '';
  const core = pathname.replace(/\/$/, '') || '/';
  const pair = localizedCollectionSlugs[core];
  if (!pair) return pathname;
  return `${pair[locale]}${slash || '/'}`;
}

export function localizePath(path: string, locale: Locale): string {
  if (path.startsWith('http')) return path;
  const { pathname, hash } = splitHash(path);
  const unprefixed = pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  const rewritten = rewriteCollectionSlug(unprefixed, locale);
  if (locale === 'es') return `${rewritten}${hash}`;
  if (rewritten === '/') return `/en/${hash}`;
  return `/en${rewritten}${hash}`;
}

export function otherLocalePath(path: string, locale: Locale): string {
  const target: Locale = locale === 'es' ? 'en' : 'es';
  const { pathname, hash } = splitHash(path);
  const unprefixed = pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  const rewritten = rewriteCollectionSlug(unprefixed, target);
  if (target === 'es') return `${rewritten}${hash}`;
  if (rewritten === '/') return `/en/${hash}`;
  return `/en${rewritten}${hash}`;
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
      'Imágenes detalladas, referencias de catálogo e historias monetarias de Filipinas, China, Colombia, los Países Bajos, Estados Unidos, Puerto Rico y el mundo.',
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
      'Detailed images, catalog references, and monetary histories from the Philippines, China, Colombia, the Netherlands, the United States, Puerto Rico, and beyond.',
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
    href: CHINA_PATH,
    es: { title: 'China', description: 'Historia del papel moneda y vitrina de los billetes de polímero.' },
    en: { title: 'China', description: 'Paper-money history and a case of polymer commemoratives.' },
  },
  {
    href: NUMISMATICS_PATH,
    es: { title: 'Numismática', description: 'Moneda metálica: Colombia, Países Bajos y lazaretos colombianos.' },
    en: { title: 'Numismatics', description: 'Coinage: Colombia, the Netherlands, and the Colombian lazarettos.' },
  },
  {
    href: COLOMBIA_PATH,
    es: { title: 'Colombia', description: 'Banca libre, Banco de la República, specimens y errores.' },
    en: { title: 'Colombia', description: 'Free banking, Banco de la República, specimens, and errors.' },
  },
  {
    href: USA_PATH,
    es: { title: 'Estados Unidos', description: 'Federal, colonial, MPC, obsoletos y emisiones promocionales.' },
    en: { title: 'United States', description: 'Federal, colonial, MPC, obsolete notes, and promotional issues.' },
  },
  {
    href: '/coleccion/espana/',
    es: { title: 'España', description: 'Oro colonial de la ceca de Santa Fe de Bogotá.' },
    en: { title: 'Spain', description: 'Colonial gold of the Santa Fe de Bogotá mint.' },
  },
  {
    href: PUERTO_RICO_PATH,
    es: { title: 'Puerto Rico', description: 'Emisiones coloniales y de transición del siglo XIX.' },
    en: { title: 'Puerto Rico', description: 'Colonial and nineteenth-century transition issues.' },
  },
  {
    href: ECUADOR_PATH,
    es: { title: 'Ecuador', description: 'Del sucre de 1884 a la dolarización. Las fichas se publicarán a medida que se documenten.' },
    en: { title: 'Ecuador', description: 'From the 1884 sucre to dollarization. Note pages will be published as they are documented.' },
  },
  {
    href: POLIMERO_MUNDIAL_PATH,
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
  image?: string;
  imageAlt?: { es: string; en: string };
  dek?: { es: string; en: string };
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
  {
    href: COLOMBIA_PATH,
    es: {
      title: 'Colombia · Banca libre y Banco de la República',
      description: 'Segunda vitrina del catálogo: independencia, banca libre, Banco Nacional y el banco central.',
    },
    en: {
      title: 'Colombia · Free banking and the Banco de la República',
      description: 'Second catalog case: independence, free banking, Banco Nacional, and the central bank.',
    },
  },
  {
    href: COLOMBIA_COINAGE_PATH,
    es: {
      title: 'Colombia-Numismática',
      description: 'Primera vitrina de numismática: macuquinas, cecas de la Independencia, la reforma de 1847 y la Fábrica de Ibagué.',
    },
    en: {
      title: 'Colombia-Numismatics',
      description: 'First numismatics case: cobs, independence mints, the 1847 reform, and the Ibagué factory.',
    },
  },
  {
    href: LAZARETTOS_PATH,
    es: {
      title: 'Lazarettos',
      description: 'Segunda vitrina de numismática: Caño de Loro, Contratación, Agua de Dios y la coscoja.',
    },
    en: {
      title: 'Lazarettos',
      description: 'Second numismatics case: Caño de Loro, Contratación, Agua de Dios, and the coscoja.',
    },
  },
  {
    href: USA_PATH,
    es: {
      title: 'Estados Unidos · Del papel colonial a la Reserva Federal',
      description: 'Tercera vitrina del catálogo: colonial, obsoleto, United States Notes, oro, plata, Reserva Federal y pop art.',
    },
    en: {
      title: 'United States · From colonial paper to the Federal Reserve',
      description: 'Third catalog case: colonial, obsolete, United States Notes, gold, silver, the Federal Reserve, and pop art.',
    },
  },
  {
    href: PUERTO_RICO_PATH,
    es: {
      title: 'Puerto Rico · Emisiones coloniales y de transición',
      description: 'Cuarta vitrina del catálogo: emisiones coloniales y de transición del siglo XIX.',
    },
    en: {
      title: 'Puerto Rico · Colonial and transition issues',
      description: 'Fourth catalog case: colonial and nineteenth-century transition issues.',
    },
  },
  {
    href: CHINA_PATH,
    es: {
      title: 'China · Del jiaozi al polímero',
      description: 'Quinta vitrina: historia del papel moneda y exhibición de los billetes de polímero.',
    },
    en: {
      title: 'China · From jiaozi to polymer',
      description: 'Fifth catalog case: paper-money history and the polymer notes on exhibit.',
    },
  },
  {
    href: ECUADOR_PATH,
    es: {
      title: 'Ecuador · Del sucre a la dolarización',
      description: 'Sexta vitrina: el sucre de 1884, los bancos privados, el Banco Central de 1927 y la dolarización.',
    },
    en: {
      title: 'Ecuador · From the sucre to dollarization',
      description: 'Sixth catalog case: the 1884 sucre, private banks, the 1927 Central Bank, and dollarization.',
    },
  },
  {
    href: NETHERLANDS_COINAGE_PATH,
    es: {
      title: 'Países Bajos · Historia de la acuñación',
      description: 'Tercera vitrina de numismática: del gulden de 1434 al ducado de Utrecht y el euro.',
    },
    en: {
      title: 'Netherlands · History of the coinage',
      description: 'Third numismatics case: from the 1434 gulden to the Utrecht ducat and the euro.',
    },
  },
];

export const articles: ArticleItem[] = blogArticles.map((item) => ({
  href: item.href,
  dateEs: item.dateEs,
  dateEn: item.dateEn,
  es: item.title.es,
  en: item.title.en,
  image: item.image,
  imageAlt: item.imageAlt,
  dek: item.dek,
}));

export const news: NewsItem[] = newsArticles.map((item) => ({
  href: item.href,
  dateEs: item.dateEs,
  dateEn: item.dateEn,
  es: item.title.es,
  en: item.title.en,
  image: item.image,
  imageAlt: item.imageAlt,
  dek: item.dek,
  source: item.sourceName ?? '',
  sourceUrl: item.sourceUrl ?? '',
}));

export const footerExplore = [
  { href: NOTAFILIA_PATH, es: 'Colección Virtual Notafilia', en: 'Virtual Notaphily Collection' },
  { href: SERIES_PATH, es: 'Filipinas', en: 'Philippines' },
  { href: CHINA_PATH, es: 'China', en: 'China' },
  { href: COLOMBIA_PATH, es: 'Colombia', en: 'Colombia' },
  { href: PUERTO_RICO_PATH, es: 'Puerto Rico', en: 'Puerto Rico' },
  { href: ECUADOR_PATH, es: 'Ecuador', en: 'Ecuador' },
  { href: NUMISMATICS_PATH, es: 'Monedas', en: 'Coins' },
  { href: COLOMBIA_COINAGE_PATH, es: 'Colombia-Numismática', en: 'Colombia-Numismatics' },
  { href: LAZARETTOS_PATH, es: 'Lazarettos', en: 'Lazarettos' },
  { href: NETHERLANDS_COINAGE_PATH, es: 'Países Bajos · Monedas', en: 'Netherlands · Coins' },
  { href: POLIMERO_MUNDIAL_PATH, es: 'Billetes de polímero mundial', en: 'World polymer banknotes' },
  { href: USA_PATH, es: 'Estados Unidos', en: 'United States' },
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
  { path: 'coleccion/china', es: 'China', en: 'China' },
  { path: 'coleccion/numismatica', es: 'Numismática', en: 'Numismatics' },
  { path: 'coleccion/notafilia', es: 'Colección Virtual Notafilia', en: 'Virtual Notaphily Collection' },
  { path: 'coleccion/colombia-numismatica', es: 'Colombia-Numismática', en: 'Colombia-Numismatics' },
  { path: 'coleccion/lazarettos', es: 'Lazarettos', en: 'Lazarettos' },
  { path: 'coleccion/paises-bajos', es: 'Países Bajos', en: 'Netherlands' },
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
  ...puertoRicoPaths,
  COLOMBIA_PATH.replace(/^\/|\/$/g, ''),
  NUMISMATICA_PATH.replace(/^\/|\/$/g, ''),
  NOTAFILIA_PATH.replace(/^\/|\/$/g, ''),
  COLOMBIA_COINAGE_PATH.replace(/^\/|\/$/g, ''),
  ...colombiaCoinagePieceSlugs,
  LAZARETTOS_PATH.replace(/^\/|\/$/g, ''),
  NETHERLANDS_PATH.replace(/^\/|\/$/g, ''),
  NUMISMATICS_PATH.replace(/^\/|\/$/g, ''),
  ...netherlandsCoinageDedicatedSlugs,
  USA_PATH.replace(/^\/|\/$/g, ''),
  USA_PATH_EN.replace(/^\/|\/$/g, ''),
  CHINA_PATH.replace(/^\/|\/$/g, ''),
  ...chinaNoteSlugs,
  POLIMERO_MUNDIAL_PATH.replace(/^\/|\/$/g, ''),
  ECUADOR_PATH.replace(/^\/|\/$/g, ''),
  GLOSSARY_PATH.replace(/^\/|\/$/g, ''),
  ...glossaryTermSlugs,
  'blog',
  'noticias',
  ...blogSlugs,
  ...newsSlugs,
]);

export { SERIES_PATH, PUERTO_RICO_PATH };

export const STATS = collectionStats();
