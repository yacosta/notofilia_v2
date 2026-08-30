import { BASELINE, collectionStats as holdingsStats } from '../data/holdings';
import { CHINA_PATH, chinaNoteSlugs } from '../data/china';
import { ECUADOR_PATH } from '../data/ecuador';
import { GUATEMALA_PATH } from '../data/guatemala';
import { NOTAFILIA_PATH } from '../data/notafilia';
import { COLOMBIA_PATH } from '../data/colombia';
import { colombiaNoteSlugs } from '../data/colombia-notes';
import { COLOMBIA_NOTES_CATALOG_PATH } from '../data/colombia-type-catalog';
import { NOTAFILIA_NOTES_CATALOG_PATH } from '../data/collection-note-catalog';
import { COLOMBIA_COINAGE_PATH } from '../data/colombia-coinage';
import { COLOMBIA_COIN_CATALOG_PATH } from '../data/colombia-coin-type-catalog';
import { colombiaCoinagePieceSlugs } from '../data/colombia-coinage-pieces';
import {
  USA_MISC_PATH,
  USA_MISC_PATH_EN,
  USA_MPC_PATH,
  USA_MPC_PATH_EN,
  USA_PATH,
  USA_PATH_EN,
  unitedStatesNoteDedicatedSlugs,
  unitedStatesNoteSlugs,
} from '../data/estados-unidos';
import { mpcVietnamNoteDedicatedSlugs, mpcVietnamNoteSlugs } from '../data/mpc-vietnam';
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
} from '../data/netherlands-coinage';
import { catalogNoteSlugs as philippinesNoteSlugs, dedicatedCatalogPaths as catalogPaths, SERIES_PATH } from '../data/philippines-victory-66';
import { dedicatedCatalogPaths as puertoRicoPaths, PUERTO_RICO_PATH } from '../data/puerto-rico';
import { POLIMERO_INGLATERRA_PATH, POLIMERO_MUNDIAL_PATH } from '../data/polimero-mundial';
import { blogArticles, blogSlugs, newsArticles, newsSlugs } from '../data/editorial';
import { ABOUT_PATH, ABOUT_PATH_EN, aboutDedicatedSlugs } from '../data/about';
import { contactDedicatedSlugs } from '../data/contact';
import { addLocalePair, englishContentSlug, type Locale } from './locale-paths';

export type { Locale } from './locale-paths';
export { localizePath, otherLocalePath, SITE_AUTHOR, DEFAULT_OG_IMAGE } from './locale-paths';
export { SITE_URL } from './site-url';

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
  for (const slug of colombiaNoteSlugs) slugs.add(slug);
  slugs.add(COLOMBIA_NOTES_CATALOG_PATH.replace(/^\/|\/$/g, ''));
  slugs.add(NOTAFILIA_NOTES_CATALOG_PATH.replace(/^\/|\/$/g, ''));
  slugs.add(COLOMBIA_COIN_CATALOG_PATH.replace(/^\/|\/$/g, ''));
  for (const slug of netherlandsCoinSlugs) slugs.add(slug);
  for (const slug of chinaNoteSlugs) slugs.add(slug);
  for (const slug of mpcVietnamNoteSlugs) slugs.add(slug);
  for (const slug of unitedStatesNoteSlugs) slugs.add(slug);
  return slugs;
}

function extraAstroPageFiles(): number {
  const countable = Object.keys(astroPageFiles).filter(
    (file) =>
      !file.endsWith('404.astro') &&
      !file.includes('/coleccion/') &&
      !file.includes('/collection/') &&
      !file.includes('/glosario/') &&
      !file.includes('/glossary/') &&
      !file.includes('/blog/') &&
      !file.includes('/noticias/') &&
      !file.includes('/news/') &&
      !file.includes('/paises-bajos-numismatica/') &&
      !file.includes('/netherlands-numismatica/') &&
      !file.includes('/netherlands-numismatics/') &&
      !file.includes('/acerca-de/') &&
      !file.includes('/about/') &&
      !file.includes('/contacto/') &&
      !file.includes('/contact/'),
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

addLocalePair(USA_PATH, USA_PATH_EN);
addLocalePair(USA_MPC_PATH, USA_MPC_PATH_EN);
addLocalePair(USA_MISC_PATH, USA_MISC_PATH_EN);
addLocalePair(ABOUT_PATH, ABOUT_PATH_EN);
addLocalePair(NETHERLANDS_COINAGE_PATH, NETHERLANDS_COINAGE_PATH_EN);

export { copy } from '../i18n/copy';

export {
  footerNotafilia,
  footerNumismatica,
  footerResources,
  megaNav,
  primaryNav,
  type FooterLink,
  type NavNode,
} from './mega-nav';

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
    href: GUATEMALA_PATH,
    es: { title: 'Guatemala', description: 'Impresión de billetes, banca privada y El Banco Colombiano (1878–1901).' },
    en: { title: 'Guatemala', description: 'Banknote printing, private banks of issue, and El Banco Colombiano (1878–1901).' },
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
      description: 'Tercera vitrina del catálogo: colonial, obsoleto, Estados Confederados, United States Notes, oro, plata, Reserva Federal, pop art y misceláneos.',
    },
    en: {
      title: 'United States · From colonial paper to the Federal Reserve',
      description: 'Third catalog case: colonial, obsolete, Confederate States, United States Notes, gold, silver, the Federal Reserve, pop art, and miscellaneous issues.',
    },
  },
  {
    href: USA_MPC_PATH,
    es: {
      title: 'Estados Unidos · MPC de la guerra de Vietnam',
      description: 'Vitrina de certificados de pago militar: series 641, 661, 681 y 692 usadas en Vietnam.',
    },
    en: {
      title: 'United States · Vietnam War MPCs',
      description: 'Military Payment Certificate case: Series 641, 661, 681, and 692 used in Vietnam.',
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
    href: GUATEMALA_PATH,
    es: {
      title: 'Guatemala · Impresión de billetes y El Banco Colombiano',
      description: 'Séptima vitrina: planchas de Nueva York y Londres, banca privada y la emisión antioqueña en Guatemala (1878–1901).',
    },
    en: {
      title: 'Guatemala · Banknote printing and El Banco Colombiano',
      description: 'Seventh catalog case: New York and London plates, private banks, and the Antioquian issue in Guatemala (1878–1901).',
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

export const footerAbout = [
  { href: ABOUT_PATH, es: 'Sobre Notofilia', en: 'About Notofilia' },
  { href: '/editorial/', es: 'Política editorial y valoración', en: 'Editorial policy' },
  { href: '/contacto/', es: 'Contacto', en: 'Contact' },
] as const;

export const footerLegal = [
  {
    href: '/politica-privacidad-cookies/',
    es: 'Política de privacidad y cookies',
    en: 'Privacy and cookie policy',
  },
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
  { path: 'coleccion/estados-unidos/mpc-vietnam', es: 'MPC - Guerra de Vietnam (1955-1975)', en: 'MPC - Vietnam War (1955-1975)' },
  { path: 'coleccion/estados-unidos/miscelaneos', es: 'Misceláneos', en: 'Miscellaneous' },
  { path: 'coleccion/espana', es: 'España', en: 'Spain' },
  { path: 'coleccion/puerto-rico', es: 'Puerto Rico', en: 'Puerto Rico' },
  { path: 'coleccion/ecuador', es: 'Ecuador', en: 'Ecuador' },
  { path: 'coleccion/guatemala', es: 'Guatemala', en: 'Guatemala' },
  { path: 'coleccion/polimero-mundial', es: 'Billetes de polímero', en: 'Polymer banknotes' },
  { path: 'coleccion/polimero-mundial/europa/inglaterra', es: 'Inglaterra', en: 'England' },
  { path: 'blog', es: 'Guías para coleccionistas', en: 'Guides for collectors' },
  { path: 'noticias', es: 'Noticias numismáticas', en: 'Numismatic news' },
  { path: 'glosario', es: 'Glosario', en: 'Glossary' },
  { path: 'acerca-de', es: 'Sobre Notofilia', en: 'About Notofilia' },
  { path: 'editorial', es: 'Política editorial y valoración', en: 'Editorial policy' },
  { path: 'contacto', es: 'Contacto', en: 'Contact' },
  { path: 'buscar', es: 'Buscar', en: 'Search' },
  { path: 'politica-privacidad-cookies', es: 'Política de privacidad y cookies', en: 'Privacy and cookie policy' },
] as const;

const dedicatedEs = [
  ...catalogPaths,
  ...puertoRicoPaths,
  COLOMBIA_PATH.replace(/^\/|\/$/g, ''),
  COLOMBIA_NOTES_CATALOG_PATH.replace(/^\/|\/$/g, ''),
  NOTAFILIA_NOTES_CATALOG_PATH.replace(/^\/|\/$/g, ''),
  ...colombiaNoteSlugs,
  NUMISMATICA_PATH.replace(/^\/|\/$/g, ''),
  NOTAFILIA_PATH.replace(/^\/|\/$/g, ''),
  COLOMBIA_COINAGE_PATH.replace(/^\/|\/$/g, ''),
  COLOMBIA_COIN_CATALOG_PATH.replace(/^\/|\/$/g, ''),
  ...colombiaCoinagePieceSlugs,
  LAZARETTOS_PATH.replace(/^\/|\/$/g, ''),
  NETHERLANDS_PATH.replace(/^\/|\/$/g, ''),
  NUMISMATICS_PATH.replace(/^\/|\/$/g, ''),
  ...netherlandsCoinageDedicatedSlugs,
  USA_PATH.replace(/^\/|\/$/g, ''),
  USA_PATH_EN.replace(/^\/|\/$/g, ''),
  USA_MPC_PATH.replace(/^\/|\/$/g, ''),
  USA_MPC_PATH_EN.replace(/^\/|\/$/g, ''),
  ...mpcVietnamNoteDedicatedSlugs,
  ...unitedStatesNoteDedicatedSlugs,
  CHINA_PATH.replace(/^\/|\/$/g, ''),
  ...chinaNoteSlugs,
  POLIMERO_MUNDIAL_PATH.replace(/^\/|\/$/g, ''),
  POLIMERO_INGLATERRA_PATH.replace(/^\/|\/$/g, ''),
  ECUADOR_PATH.replace(/^\/|\/$/g, ''),
  GUATEMALA_PATH.replace(/^\/|\/$/g, ''),
  GLOSSARY_PATH.replace(/^\/|\/$/g, ''),
  ...glossaryTermSlugs,
  ...aboutDedicatedSlugs,
  ...contactDedicatedSlugs,
  'coleccion',
  'blog',
  'noticias',
  'contacto',
  'buscar',
  ...blogSlugs,
  ...newsSlugs,
];

export const dedicatedCatalogPaths = new Set<string>([
  ...dedicatedEs,
  ...dedicatedEs.map((slug) => englishContentSlug(slug)),
]);

export { SERIES_PATH, PUERTO_RICO_PATH, NOTAFILIA_PATH, NOTAFILIA_NOTES_CATALOG_PATH };

export const STATS = collectionStats();
