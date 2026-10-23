import { CHINA_PATH } from '../data/china';
import { COLOMBIA_PATH } from '../data/colombia';
import { COLOMBIA_COINAGE_PATH } from '../data/colombia-coinage';
import { ECUADOR_PATH } from '../data/ecuador';
import { articlePath, blogArticles, newsArticles } from '../data/editorial';
import { USA_PATH } from '../data/estados-unidos';
import { USA_COINAGE_PATH } from '../data/estados-unidos-coinage';
import { SPAIN_COINAGE_PATH } from '../data/espana-coinage';
import { PUERTO_RICO_COINAGE_PATH } from '../data/puerto-rico-coinage';
import { LIBERIA_COINAGE_PATH } from '../data/liberia-coinage';
import { GLOSSARY_PATH, glossaryTermPath, glossaryTerms, isStandaloneGlossaryTerm } from '../data/glossary';
import { GUATEMALA_PATH } from '../data/guatemala';
import { LAZARETTOS_PATH } from '../data/lazarettos';
import { NETHERLANDS_PATH } from '../data/netherlands';
import { NETHERLANDS_COINAGE_PATH } from '../data/netherlands-coinage';
import { SERIES_PATH } from '../data/philippines-victory-66';
import { POLIMERO_MUNDIAL_PATH } from '../data/polimero-mundial';
import { PUERTO_RICO_PATH } from '../data/puerto-rico';
import { localizePath } from './locale-paths';
import { footerLinksFromNav, megaNav } from './mega-nav';
import { SITE_URL, type Locale } from './site-url';

export { SITE_URL, type Locale } from './site-url';
export { limitMetaDescription, META_DESCRIPTION_MAX } from './piece-seo';

export const SITE_NAME = 'Notofilia';
export const SITE_AUTHOR = 'Yezid Acosta';
export const DEFAULT_OG_IMAGE = '/images/quetzal-billete-cinco-quetzales-guatemala.jpg';
export const PERSON_ID = `${SITE_URL}/#yezid-acosta`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const ORG_ID = `${SITE_URL}/#organization`;

/**
 * Profile URLs for Yezid Acosta.
 * TODO(owner): LinkedIn URL — leave this array empty until a real https URL is confirmed.
 * Empty entries are omitted from JSON-LD.
 */
export const AUTHOR_SAME_AS: readonly string[] = [];

export const AUTHOR_KNOWS_ABOUT = {
  es: ['Billetes colombianos', 'Numismática', 'Notafilia', 'Gradación y conservación de billetes'],
  en: ['Colombian banknotes', 'Numismatics', 'Notaphily', 'Banknote grading and conservation'],
} as const;

const ORG_LOGO = '/images/notofilia-logo.png';

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path;
  return new URL(path, SITE_URL).href;
}

export function websiteJsonLd(locale: Locale) {
  const searchPath = locale === 'en' ? '/en/search/' : '/buscar/';
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: ['es', 'en'],
        publisher: { '@id': ORG_ID },
        potentialAction: {
          '@type': 'SearchAction',
          target: `${absoluteUrl(searchPath)}?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Person',
        '@id': PERSON_ID,
        name: SITE_AUTHOR,
        url: absoluteUrl(locale === 'en' ? '/en/about/' : '/acerca-de/'),
        jobTitle: locale === 'en' ? 'Collector and technologist' : 'Coleccionista y tecnólogo',
        ...(AUTHOR_SAME_AS.length ? { sameAs: [...AUTHOR_SAME_AS] } : {}),
        knowsAbout: [...AUTHOR_KNOWS_ABOUT[locale]],
      },
      {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: absoluteUrl(ORG_LOGO),
          width: 128,
          height: 128,
        },
        image: absoluteUrl(ORG_LOGO),
        sameAs: ['https://www.facebook.com/NOTOFILIA', 'https://x.com/Notofilia'],
        publishingPrinciples: absoluteUrl('/editorial/'),
        founder: { '@id': PERSON_ID },
        description:
          locale === 'en'
            ? 'Notofilia is a private collection and bilingual catalogue of historical banknotes and coins, founded by Yezid Acosta. Nothing is for sale.'
            : 'Notofilia es una colección privada y catálogo bilingüe de billetes y monedas históricos, fundado por Yezid Acosta. Nada está a la venta.',
      },
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; item: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.item),
    })),
  };
}

export function artworkJsonLd(input: {
  name: string;
  description: string;
  url: string;
  image: string;
  dateCreated?: string;
  countryName?: string;
  material?: string;
  identifier?: string;
  collectionUrl: string;
  collectionName: string;
}) {
  return {
    '@type': 'VisualArtwork',
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.url),
    image: absoluteUrl(input.image),
    dateCreated: input.dateCreated,
    material: input.material,
    identifier: input.identifier,
    countryOfOrigin: input.countryName ? { '@type': 'Country', name: input.countryName } : undefined,
    isPartOf: {
      '@type': 'Collection',
      name: input.collectionName,
      url: absoluteUrl(input.collectionUrl),
    },
    creator: { '@id': PERSON_ID },
    creditText: 'Notofilia.com / Yezid Acosta',
  };
}

/** Published hubs that are not (yet) rows in mega-nav. */
const extraHighValuePages = [
  { href: '/coleccion/', es: 'Colección', en: 'Collection' },
  { href: '/buscar/', es: 'Buscar', en: 'Search' },
  { href: '/editorial/', es: 'Política editorial y valoración', en: 'Editorial policy' },
  {
    href: '/notofilia-vs-catalogos-billetes-colombianos/',
    es: 'Notofilia vs. otros catálogos',
    en: 'Notofilia vs. other catalogs',
  },
  {
    href: '/coleccion/colombia/banca-libre/',
    es: 'Banca libre',
    en: 'Free banking',
  },
  { href: LAZARETTOS_PATH, es: 'Lazarettos', en: 'Lazarettos' },
  {
    href: '/coleccion/numismatica/numismatica-de-los-lazaretos/',
    es: 'Numismática de los Lazaretos',
    en: 'Numismatics of the Lazarettos',
  },
  { href: NETHERLANDS_PATH, es: 'Países Bajos (papel moneda)', en: 'Netherlands (paper money)' },
] as const;

/** Country and discipline catalogues for /llms.txt (locale-agnostic endpoint). */
export const llmsCountryCatalogues = [
  { href: COLOMBIA_PATH, es: 'Billetes de Colombia', en: 'Colombian banknotes' },
  { href: COLOMBIA_COINAGE_PATH, es: 'Colombia (numismática)', en: 'Colombia (numismatics)' },
  { href: SPAIN_COINAGE_PATH, es: 'España (numismática)', en: 'Spain (numismatics)' },
  { href: USA_PATH, es: 'Estados Unidos', en: 'United States' },
  { href: USA_COINAGE_PATH, es: 'Estados Unidos (numismática)', en: 'United States (numismatics)' },
  { href: SERIES_PATH, es: 'Filipinas · Periodo estadounidense', en: 'Philippines · American period' },
  { href: CHINA_PATH, es: 'China', en: 'China' },
  { href: PUERTO_RICO_PATH, es: 'Puerto Rico', en: 'Puerto Rico' },
  { href: PUERTO_RICO_COINAGE_PATH, es: 'Puerto Rico (numismática)', en: 'Puerto Rico (numismatics)' },
  { href: LIBERIA_COINAGE_PATH, es: 'Liberia (numismática)', en: 'Liberia (numismatics)' },
  { href: ECUADOR_PATH, es: 'Ecuador', en: 'Ecuador' },
  { href: GUATEMALA_PATH, es: 'Guatemala', en: 'Guatemala' },
  { href: NETHERLANDS_PATH, es: 'Países Bajos (papel moneda)', en: 'Netherlands (paper money)' },
  { href: NETHERLANDS_COINAGE_PATH, es: 'Países Bajos (numismática)', en: 'Netherlands (numismatics)' },
  { href: LAZARETTOS_PATH, es: 'Lazaretos colombianos', en: 'Colombian lazarettos' },
  { href: POLIMERO_MUNDIAL_PATH, es: 'Billetes de polímero', en: 'Polymer banknotes' },
  { href: '/coleccion/espana/', es: 'España', en: 'Spain' },
] as const;

export function llmsHighValuePages(): { href: string; es: string; en: string }[] {
  const seen = new Set<string>();
  const pages: { href: string; es: string; en: string }[] = [];
  const add = (href: string, es: string, en: string) => {
    const key = localizePath(href, 'es');
    if (seen.has(key)) return;
    seen.add(key);
    pages.push({ href: key, es, en });
  };

  add('/glosario/', 'Glosario', 'Glossary');
  add('/blog/', 'Guías', 'Guides');
  add('/noticias/', 'Noticias', 'News');
  add('/coleccion/', 'Colección', 'Collection');
  add('/buscar/', 'Buscar', 'Search');
  add('/identificar/billetes-falsos/', 'Cómo identificar un billete falso', 'How to identify a counterfeit note');
  add('/editorial/', 'Política editorial', 'Editorial policy');
  add('/herramientas/numeracion-especial/', 'Numeración especial', 'Fancy serial checker');

  for (const link of footerLinksFromNav(megaNav)) {
    add(link.href, link.es, link.en);
  }
  for (const page of extraHighValuePages) {
    add(page.href, page.es, page.en);
  }
  return pages;
}

function llmsLine(title: string, url: string, description: string): string {
  const oneLine = description.replace(/\s+/g, ' ').trim();
  return `- [${title}](${url}): ${oneLine}`;
}

function pairLines(esTitle: string, enTitle: string, esPath: string, enPath: string, esDesc: string, enDesc: string): string {
  return [
    llmsLine(esTitle, `${SITE_URL}${esPath}`, esDesc),
    llmsLine(enTitle, `${SITE_URL}${enPath}`, enDesc),
  ].join('\n');
}

/** Curated llms.txt. Full URL list stays at /sitemap.txt. */
export function llmsTxt(): string {
  const hubs = [
    { href: '/coleccion/', es: 'Colección', en: 'Collection', esDesc: 'Índice de la colección virtual.', enDesc: 'Index of the virtual collection.' },
    { href: COLOMBIA_PATH, es: 'Billetes de Colombia', en: 'Colombian banknotes', esDesc: 'Notafilia colombiana, de la banca libre al Banco de la República.', enDesc: 'Colombian notaphily, from free banking to Banco de la República.' },
    { href: '/coleccion/notafilia/catalogo/', es: 'Catálogo de notafilia', en: 'Notaphily catalog', esDesc: 'Todos los billetes documentados, sin precios.', enDesc: 'Every documented banknote, with no prices.' },
    { href: USA_PATH, es: 'Estados Unidos', en: 'United States', esDesc: 'Papel federal, colonial, MPC y obsoletos de la colección.', enDesc: 'Federal, colonial, MPC, and obsolete notes in the collection.' },
    { href: '/coleccion/numismatica/', es: 'Numismática', en: 'Numismatics', esDesc: 'Monedas de la colección por país.', enDesc: 'Coins in the collection, by country.' },
  ];

  const editorial = [
    { href: '/editorial/', es: 'Política editorial', en: 'Editorial policy', esDesc: 'Cómo se documenta cada pieza y cómo se corrige un error.', enDesc: 'How each piece is documented and how an error is corrected.' },
    { href: '/acerca-de/', es: 'Acerca de Notofilia', en: 'About Notofilia', esDesc: 'La colección y su autor, Yezid Acosta.', enDesc: 'The collection and its author, Yezid Acosta.' },
    { href: '/contacto/', es: 'Contacto', en: 'Contact', esDesc: 'Escribir a Notofilia.', enDesc: 'Write to Notofilia.' },
  ];

  const tools = [
    { href: '/herramientas/numeracion-especial/', es: 'Numeración especial', en: 'Fancy serial checker', esDesc: 'Clasifica patrones de serial sin tasar la pieza.', enDesc: 'Classifies serial patterns without pricing the note.' },
    { href: '/identificar/billetes-falsos/', es: 'Billetes falsos', en: 'Counterfeit notes', esDesc: 'Lista de comprobación. No autentica a distancia.', enDesc: 'A checklist. It does not authenticate at a distance.' },
  ];

  const latestNews = [...newsArticles].sort((a, b) => b.published.localeCompare(a.published)).slice(0, 15);

  const sections = [
    `## Hubs\n\n${hubs.map((page) => pairLines(page.es, page.en, localizePath(page.href, 'es'), localizePath(page.href, 'en'), page.esDesc, page.enDesc)).join('\n')}`,
    `## Guides\n\n${pairLines('Guías', 'Guides', '/blog/', '/en/blog/', 'Ensayos para coleccionistas.', 'Essays for collectors.')}\n${blogArticles.map((article) => pairLines(article.title.es, article.title.en, articlePath('blog', article.slug, 'es'), articlePath('blog', article.slug, 'en'), article.dek.es, article.dek.en)).join('\n')}`,
    `## Glossary\n\n${pairLines('Glosario', 'Glossary', GLOSSARY_PATH, localizePath(GLOSSARY_PATH, 'en'), 'Términos de notafilia y numismática.', 'Notaphily and numismatics terms.')}`,
    `## Editorial/About\n\n${editorial.map((page) => pairLines(page.es, page.en, localizePath(page.href, 'es'), localizePath(page.href, 'en'), page.esDesc, page.enDesc)).join('\n')}`,
    `## Tools\n\n${tools.map((page) => pairLines(page.es, page.en, localizePath(page.href, 'es'), localizePath(page.href, 'en'), page.esDesc, page.enDesc)).join('\n')}`,
    `## Machine-Readable Data\n\n${llmsLine('Sitemap', `${SITE_URL}/sitemap.txt`, 'Lista completa de URLs públicas.')}\n${llmsLine('Catalogue summary', `${SITE_URL}/api/catalogue-summary.json`, 'Resumen de fichas: título, país, año y códigos de catálogo. Sin seriales ni precios.')}`,
    `## Recent news (latest 15 only)\n\n${latestNews.map((article) => pairLines(article.title.es, article.title.en, articlePath('news', article.slug, 'es'), articlePath('news', article.slug, 'en'), article.dek.es, article.dek.en)).join('\n')}`,
  ];

  return `# Notofilia

> Colección privada y catálogo bilingüe de billetes y monedas históricos, fundado por Yezid Acosta. Nada está a la venta. Spanish is the default locale; English lives under /en/. The full URL list is https://notofilia.com/sitemap.txt.

${sections.join('\n\n')}
`;
}

export function llmsFullTxt(): string {
  const guideAnswers = blogArticles
    .map((article) => {
      const es = article.directAnswer?.es ?? article.dek.es;
      const en = article.directAnswer?.en ?? article.dek.en;
      const sources = (article.primarySources ?? [])
        .map((source) => `${source.label.es} ${source.url}`)
        .join('; ');
      const citation = sources ? ` Fuentes: ${sources}` : '';
      return `${pairLines(article.title.es, article.title.en, articlePath('blog', article.slug, 'es'), articlePath('blog', article.slug, 'en'), `${es}${citation}`, en)}`;
    })
    .join('\n');
  const glossaryLines = glossaryTerms
    .map((term) => {
      const esPath = isStandaloneGlossaryTerm(term.slug) ? glossaryTermPath(term.slug, 'es') : GLOSSARY_PATH;
      const enPath = isStandaloneGlossaryTerm(term.slug) ? glossaryTermPath(term.slug, 'en') : localizePath(GLOSSARY_PATH, 'en');
      return pairLines(term.title.es, term.title.en, esPath, enPath, term.definition.es, term.definition.en);
    })
    .join('\n');
  return `${llmsTxt()}\n## Guide answers\n\n${guideAnswers}\n\n## Glossary terms\n\n${glossaryLines}\n`;
}
