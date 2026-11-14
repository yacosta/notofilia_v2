import { readFileSync } from 'node:fs';
import { chinaNoteSlugs } from '../data/china';
import { colombiaChapters, eraPath } from '../data/colombia';
import { colombiaNoteSlugs } from '../data/colombia-notes';
import { COLOMBIA_COIN_CATALOG_PATH, coinCatalogCopy } from '../data/colombia-coin-type-catalog';
import { COLOMBIA_NOTES_CATALOG_PATH, noteCatalogCopy } from '../data/colombia-type-catalog';
import { collectionNoteCatalogCopy, NOTAFILIA_NOTES_CATALOG_PATH } from '../data/collection-note-catalog';
import { colombiaCoinagePieceSlugs } from '../data/colombia-coinage-pieces';
import { aboutCopy } from '../data/about';
import { comparisonCopy } from '../data/comparison';
import { contactCopy } from '../data/contact';
import { ecuadorNoteSlugs } from '../data/ecuador';
import { editorialPolicyCopy } from '../data/editorial-policy';
import { articlePath, blogArticles, editorialCopy, newsArticles, type EditorialArticle } from '../data/editorial';
import { unitedStatesNoteSlugs } from '../data/estados-unidos';
import { unitedStatesCoinSlugs } from '../data/estados-unidos-coinage';
import { spainCoinSlugs } from '../data/espana-coinage';
import {
  glossaryCopy,
  glossaryMetaDescription,
  glossaryTerms,
  isStandaloneGlossaryTerm,
} from '../data/glossary';
import { identifyCounterfeitCopy } from '../data/identify-counterfeit';
import { liberiaCoinSlugs } from '../data/liberia-coinage';
import { cuadraUnaMitadPieceDedicatedSlugs } from '../data/cuadra-una-mitad-piece';
import { manzanoFarmingPieceDedicatedSlugs } from '../data/manzano-farming-piece';
import { mpcProgramNoteSlugs } from '../data/mpc';
import { mpcVietnamNoteSlugs } from '../data/mpc-vietnam';
import { netherlandsCoinSlugs } from '../data/netherlands-coinage';
import { canadaNoteSlugs } from '../data/canada-polymer';
import { englandNoteSlugs } from '../data/england-polymer';
import { malaysiaNoteSlugs } from '../data/malaysia-polymer';
import { catalogNoteSlugs as philippinesNoteSlugs } from '../data/philippines-victory-66';
import { catalogNoteSlugs as philippinesPnbNoteSlugs } from '../data/philippines-pnb-1916';
import { puertoRicoNoteSlugs } from '../data/puerto-rico';
import { puertoRicoCoinSlugs } from '../data/puerto-rico-coinage';
import { fancySerialCopy } from '../data/reference-tools';
import { vegaRedondaTokens } from '../data/vega-redonda';
import { copy } from '../i18n/copy';
import { localizePath } from './locale-paths';
import { footerLinksFromNav, megaNav } from './mega-nav';
import { SITE_URL } from './site-url';
import { collections, dedicatedCatalogPaths, statsLine, stubPages } from './site';

/** Newest articles listed under Recent news. The rest stay in the sitemap only. */
export const RECENT_NEWS_LIMIT = 15;

const MACHINE_READABLE = new Set(['/sitemap.xml', '/sitemap.txt', '/api/catalogue-summary.json', '/llms.txt', '/llms-full.txt']);

type Localized = { es: string; en: string };

type LlmsSection = 'about' | 'hubs' | 'guides' | 'glossary' | 'tools' | 'editorial' | 'news-index' | 'news';

export type LlmsEntry = {
  section: LlmsSection;
  esPath: string;
  enPath: string;
  esTitle: string;
  enTitle: string;
  esDesc: string;
  enDesc: string;
  /** YYYY-MM-DD. News lines print the published date. */
  published?: string;
};

/** Home is the only public HTML route not already in stubPages or dedicatedCatalogPaths. */
const extra = ['/'];

function oneLine(value: string, max = 220): string {
  const text = value.replace(/\s+/g, ' ').trim();
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const boundary = cut.lastIndexOf(' ');
  return (boundary > 40 ? cut.slice(0, boundary) : cut).trim();
}

function mdLabel(value: string): string {
  return oneLine(value.replace(/[\[\]]/g, ''), 180);
}

function toEsPath(path: string): string {
  const slash = path.endsWith('/') ? path : `${path}/`;
  const abs = slash.startsWith('/') ? slash : `/${slash}`;
  return localizePath(abs, 'es');
}

function contentDate(article: Pick<EditorialArticle, 'published' | 'updated'>): string {
  return article.updated || article.published;
}

function addPieceSlug(slugs: Set<string>, slug: string) {
  const clean = slug.replace(/^\/|\/$/g, '');
  if (!clean) return;
  slugs.add(clean);
  const es = localizePath(`/${clean}/`, 'es').replace(/^\/|\/$/g, '');
  slugs.add(es);
}

function pieceSlugSet(): Set<string> {
  const slugs = new Set<string>();
  const lists = [
    colombiaNoteSlugs,
    colombiaCoinagePieceSlugs,
    chinaNoteSlugs,
    ecuadorNoteSlugs,
    philippinesNoteSlugs,
    philippinesPnbNoteSlugs,
    puertoRicoNoteSlugs,
    canadaNoteSlugs,
    englandNoteSlugs,
    malaysiaNoteSlugs,
    netherlandsCoinSlugs,
    unitedStatesCoinSlugs,
    spainCoinSlugs,
    puertoRicoCoinSlugs,
    liberiaCoinSlugs,
    unitedStatesNoteSlugs,
    mpcVietnamNoteSlugs,
    mpcProgramNoteSlugs,
    manzanoFarmingPieceDedicatedSlugs,
    cuadraUnaMitadPieceDedicatedSlugs,
  ];
  for (const list of lists) {
    for (const slug of list) addPieceSlug(slugs, slug);
  }
  for (const token of vegaRedondaTokens) {
    addPieceSlug(slugs, token.path);
    addPieceSlug(slugs, token.pathEn);
  }
  return slugs;
}

const pieces = pieceSlugSet();

function isPiecePath(esPath: string): boolean {
  return pieces.has(esPath.replace(/^\/|\/$/g, ''));
}

export function cataloguePiecePaths(): string[] {
  const paths = new Set<string>();
  for (const slug of pieces) {
    const path = `/${slug}/`;
    paths.add(localizePath(path, 'es'));
    paths.add(localizePath(path, 'en'));
  }
  return [...paths];
}

/**
 * Indexable HTML paths. Search and 404 stay out. Catalogue pieces stay in.
 * llms.txt is a filtered view of this same list.
 */
export function collectSitemapPaths(): string[] {
  const paths = new Set<string>(extra);
  for (const page of stubPages) {
    if (page.path === 'buscar') continue;
    paths.add(`/${page.path}/`);
  }
  for (const slug of dedicatedCatalogPaths) {
    if (slug === 'buscar' || slug === 'search') continue;
    paths.add(`/${slug}/`);
  }

  const urls = [...paths].flatMap((path) => [localizePath(path, 'es'), localizePath(path, 'en')]);
  return [...new Set(urls)].filter((path) => path !== '/buscar/' && path !== '/en/search/');
}

export function newsByPublished(): EditorialArticle[] {
  return [...newsArticles].sort((a, b) => {
    const byDate = b.published.localeCompare(a.published);
    if (byDate !== 0) return byDate;
    return a.slug.localeCompare(b.slug);
  });
}

export function recentNewsArticles(): EditorialArticle[] {
  return newsByPublished().slice(0, RECENT_NEWS_LIMIT);
}

type Indexes = {
  titles: Map<string, Localized>;
  descs: Map<string, Localized>;
  dates: Map<string, string>;
};

function buildIndexes(): Indexes {
  const titles = new Map<string, Localized>();
  const descs = new Map<string, Localized>();
  const dates = new Map<string, string>();

  const putTitle = (path: string, es: string, en: string) => {
    titles.set(toEsPath(path), { es, en });
  };
  const putDesc = (path: string, es: string, en: string) => {
    descs.set(toEsPath(path), { es: oneLine(es), en: oneLine(en) });
  };

  for (const link of footerLinksFromNav(megaNav)) putTitle(link.href, link.es, link.en);
  for (const page of stubPages) putTitle(`/${page.path}/`, page.es, page.en);
  for (const item of collections) {
    putTitle(item.href, item.es.title, item.en.title);
    putDesc(item.href, item.es.description, item.en.description);
  }
  for (const article of blogArticles) {
    const esPath = articlePath('blog', article.slug, 'es');
    putTitle(esPath, article.title.es, article.title.en);
    putDesc(esPath, article.description.es || article.dek.es, article.description.en || article.dek.en);
    const date = contentDate(article);
    dates.set(esPath, date);
    dates.set(articlePath('blog', article.slug, 'en'), date);
  }
  for (const article of newsArticles) {
    const esPath = articlePath('news', article.slug, 'es');
    putTitle(esPath, article.title.es, article.title.en);
    putDesc(esPath, article.description.es || article.dek.es, article.description.en || article.dek.en);
    const date = contentDate(article);
    dates.set(esPath, date);
    dates.set(articlePath('news', article.slug, 'en'), date);
  }
  for (const term of glossaryTerms) {
    if (!isStandaloneGlossaryTerm(term.slug)) continue;
    const esPath = `/glosario/${term.slug}/`;
    putTitle(esPath, term.title.es, term.title.en);
    putDesc(esPath, glossaryMetaDescription(term, 'es'), glossaryMetaDescription(term, 'en'));
  }

  putTitle('/', copy.es.heroTitle, copy.en.heroTitle);
  putDesc('/', copy.es.metaDescription, copy.en.metaDescription);
  putTitle('/coleccion/', 'Colección', 'Collection');
  putDesc('/coleccion/', 'Índice de la colección virtual.', 'Index of the virtual collection.');
  putTitle('/acerca-de/', aboutCopy.es.title, aboutCopy.en.title);
  putDesc('/acerca-de/', aboutCopy.es.metaDescription, aboutCopy.en.metaDescription);
  putTitle('/editorial/', editorialPolicyCopy.es.title, editorialPolicyCopy.en.title);
  putDesc('/editorial/', editorialPolicyCopy.es.metaDescription, editorialPolicyCopy.en.metaDescription);
  putTitle('/contacto/', contactCopy.es.title, contactCopy.en.title);
  putDesc('/contacto/', contactCopy.es.metaDescription, contactCopy.en.metaDescription);
  putTitle('/blog/', editorialCopy.es.blogTitle, editorialCopy.en.blogTitle);
  putDesc('/blog/', editorialCopy.es.blogMetaDescription, editorialCopy.en.blogMetaDescription);
  putTitle('/noticias/', editorialCopy.es.newsTitle, editorialCopy.en.newsTitle);
  putDesc('/noticias/', editorialCopy.es.newsMetaDescription, editorialCopy.en.newsMetaDescription);
  putTitle('/glosario/', glossaryCopy.es.title, glossaryCopy.en.title);
  putDesc('/glosario/', glossaryCopy.es.metaDescription, glossaryCopy.en.metaDescription);
  putTitle('/herramientas/numeracion-especial/', fancySerialCopy.es.title, fancySerialCopy.en.title);
  putDesc('/herramientas/numeracion-especial/', fancySerialCopy.es.metaDescription, fancySerialCopy.en.metaDescription);
  putTitle('/identificar/billetes-falsos/', identifyCounterfeitCopy.es.title, identifyCounterfeitCopy.en.title);
  putDesc('/identificar/billetes-falsos/', identifyCounterfeitCopy.es.metaDescription, identifyCounterfeitCopy.en.metaDescription);
  putTitle('/notofilia-vs-catalogos-billetes-colombianos/', comparisonCopy.es.title, comparisonCopy.en.title);
  putDesc('/notofilia-vs-catalogos-billetes-colombianos/', comparisonCopy.es.metaDescription, comparisonCopy.en.metaDescription);
  const comparisonDate = comparisonCopy.es.published;
  dates.set('/notofilia-vs-catalogos-billetes-colombianos/', comparisonDate);
  dates.set(localizePath('/notofilia-vs-catalogos-billetes-colombianos/', 'en'), comparisonDate);
  putTitle(NOTAFILIA_NOTES_CATALOG_PATH, collectionNoteCatalogCopy.es.title, collectionNoteCatalogCopy.en.title);
  putDesc(
    NOTAFILIA_NOTES_CATALOG_PATH,
    collectionNoteCatalogCopy.es.metaDescription,
    collectionNoteCatalogCopy.en.metaDescription,
  );
  putTitle(COLOMBIA_NOTES_CATALOG_PATH, noteCatalogCopy.es.title, noteCatalogCopy.en.title);
  putDesc(COLOMBIA_NOTES_CATALOG_PATH, noteCatalogCopy.es.metaDescription, noteCatalogCopy.en.metaDescription);
  putTitle(COLOMBIA_COIN_CATALOG_PATH, coinCatalogCopy.es.title, coinCatalogCopy.en.title);
  putDesc(COLOMBIA_COIN_CATALOG_PATH, coinCatalogCopy.es.metaDescription, coinCatalogCopy.en.metaDescription);
  for (const chapter of colombiaChapters) {
    putTitle(eraPath(chapter.id), chapter.title.es, chapter.title.en);
    putDesc(eraPath(chapter.id), chapter.lead.es, chapter.lead.en);
  }

  return { titles, descs, dates };
}

const indexes = buildIndexes();

function sectionOf(esPath: string): LlmsSection | 'piece' | 'skip' {
  if (esPath === '/buscar/' || esPath === '/404/' || esPath.endsWith('/404/')) return 'skip';
  if (esPath === '/') return 'about';
  if (esPath === '/noticias/') return 'news-index';
  if (esPath === '/blog/' || esPath.startsWith('/blog/')) return 'guides';
  if (esPath === '/glosario/' || esPath.startsWith('/glosario/')) return 'glossary';
  if (esPath === '/herramientas/numeracion-especial/' || esPath === '/identificar/billetes-falsos/') return 'tools';
  if (
    esPath === '/acerca-de/' ||
    esPath === '/editorial/' ||
    esPath === '/contacto/' ||
    esPath === '/politica-privacidad-cookies/' ||
    esPath === '/notofilia-vs-catalogos-billetes-colombianos/'
  ) {
    return 'editorial';
  }
  if (esPath.startsWith('/noticias/')) return 'news';
  if (isPiecePath(esPath)) return 'piece';
  return 'hubs';
}

function labelFromPath(esPath: string): Localized {
  const known = indexes.titles.get(esPath);
  if (known) return known;
  const slug = esPath.split('/').filter(Boolean).at(-1) ?? 'Notofilia';
  const words = slug.replace(/-/g, ' ');
  return { es: words, en: words };
}

function describe(esPath: string, titles: Localized): Localized {
  const known = indexes.descs.get(esPath);
  if (known) return known;
  return titles;
}

function entryFor(esPath: string, section: LlmsSection, published?: string): LlmsEntry {
  const titles = labelFromPath(esPath);
  const descs = describe(esPath, titles);
  return {
    section,
    esPath,
    enPath: localizePath(esPath, 'en'),
    esTitle: titles.es,
    enTitle: titles.en,
    esDesc: descs.es,
    enDesc: descs.en,
    published,
  };
}

function indexedSpanishPaths(): string[] {
  const seen = new Set<string>();
  const paths: string[] = [];
  for (const path of collectSitemapPaths()) {
    const es = localizePath(path, 'es');
    if (seen.has(es)) continue;
    seen.add(es);
    paths.push(es);
  }
  return paths;
}

export function llmsEntries(): LlmsEntry[] {
  const grouped: Record<LlmsSection, LlmsEntry[]> = {
    about: [],
    hubs: [],
    guides: [],
    glossary: [],
    tools: [],
    editorial: [],
    'news-index': [],
    news: [],
  };
  for (const esPath of indexedSpanishPaths()) {
    const section = sectionOf(esPath);
    if (section === 'piece' || section === 'skip' || section === 'news') continue;
    grouped[section].push(entryFor(esPath, section));
  }
  const byTitle = (a: LlmsEntry, b: LlmsEntry) => a.esTitle.localeCompare(b.esTitle, 'es');
  grouped.hubs.sort((a, b) => a.esPath.localeCompare(b.esPath));
  grouped.guides.sort((a, b) => (a.esPath === '/blog/' ? -1 : b.esPath === '/blog/' ? 1 : byTitle(a, b)));
  grouped.glossary.sort((a, b) => (a.esPath === '/glosario/' ? -1 : b.esPath === '/glosario/' ? 1 : byTitle(a, b)));
  grouped.tools.sort((a, b) => a.esPath.localeCompare(b.esPath));
  grouped.editorial.sort((a, b) => a.esPath.localeCompare(b.esPath));
  grouped.news = recentNewsArticles().map((article) =>
    entryFor(articlePath('news', article.slug, 'es'), 'news', article.published),
  );
  return [
    ...grouped.about,
    ...grouped.hubs,
    ...grouped.guides,
    ...grouped.glossary,
    ...grouped.tools,
    ...grouped.editorial,
    ...grouped['news-index'],
    ...grouped.news,
  ];
}

/** Spanish and English URLs that llms.txt must link: hubs, guides, glossary, tools, static pages, and the newest 15 news articles. */
export function llmsRequiredPaths(): string[] {
  const paths = new Set<string>();
  for (const entry of llmsEntries()) {
    paths.add(entry.esPath);
    paths.add(entry.enPath);
  }
  return [...paths];
}

function entryLine(entry: LlmsEntry): string {
  const esUrl = `${SITE_URL}${entry.esPath}`;
  const enUrl = `${SITE_URL}${entry.enPath}`;
  const when = entry.published ? ` ${entry.published}.` : '';
  return `- [${mdLabel(entry.esTitle)}](${esUrl}): [${mdLabel(entry.enTitle)}](${enUrl})${when} ${oneLine(entry.esDesc)} English: ${oneLine(entry.enDesc)}`;
}

function sectionBlock(heading: string, entries: LlmsEntry[], lead?: string): string {
  const lines = entries.map(entryLine);
  const intro = lead ? `${lead}\n\n` : '';
  return `## ${heading}\n\n${intro}${lines.join('\n')}`;
}

/**
 * Curated llms.txt. The news block is the newest 15 articles from news-articles.json.
 * Individual catalogue items, search, and 404 stay out. Full URL list: /sitemap.txt.
 */
export function llmsTxt(): string {
  const entries = llmsEntries();
  const of = (section: LlmsSection) => entries.filter((entry) => entry.section === section);
  const stats = [
    `- Colección Virtual: ${statsLine('es')}`,
    `- Virtual Collection: ${statsLine('en')}`,
  ];
  const about = [stats.join('\n'), of('about').map(entryLine).join('\n')].filter(Boolean).join('\n');
  const sections = [
    `## About\n\n${about}`,
    sectionBlock('Collection hubs', of('hubs')),
    sectionBlock('Guides', of('guides')),
    sectionBlock('Glossary', of('glossary')),
    sectionBlock('Tools', of('tools')),
    sectionBlock('Editorial/About/Contact', of('editorial')),
    `## Machine-readable data\n\n- [Sitemap XML](${SITE_URL}/sitemap.xml): [Sitemap TXT](${SITE_URL}/sitemap.txt) Lista completa de URLs públicas, con hreflang es, en y x-default. English: Full public URL list, with es, en, and x-default hreflang.\n- [Resumen del catálogo](${SITE_URL}/api/catalogue-summary.json): [Catalogue summary](${SITE_URL}/api/catalogue-summary.json) Fichas: título, país, año y códigos de catálogo. Sin seriales privados ni precios. English: Records: title, country, year, and catalogue codes. No private serials and no prices.`,
    sectionBlock(
      'Recent news',
      [...of('news-index'), ...of('news')],
      `The latest ${RECENT_NEWS_LIMIT} articles, newest first. Each summary is that article's description field. Spanish URLs are canonical.`,
    ),
  ];

  return `# Notofilia

> Colección privada y catálogo bilingüe de billetes y monedas históricos, fundado por Yezid Acosta. Nada está a la venta. Spanish is the default locale; English lives under /en/. The full URL list is https://notofilia.com/sitemap.txt.
> English: A private bilingual catalogue of historic banknotes and coins, founded by Yezid Acosta. Nothing is for sale. Spanish URLs are canonical (x-default). English pages live under /en/.

${sections.join('\n\n')}
`;
}

export function sitemapTxt(): string {
  return `${collectSitemapPaths().map((path) => `${SITE_URL}${path}`).join('\n')}\n`;
}

function xmlEscape(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export function sitemapXml(): string {
  const unique = collectSitemapPaths();
  const body = unique
    .map((loc) => {
      const es = localizePath(loc, 'es');
      const en = localizePath(loc, 'en');
      const modified = indexes.dates.get(loc);
      return `  <url>
    <loc>${xmlEscape(`${SITE_URL}${loc}`)}</loc>${modified ? `\n    <lastmod>${xmlEscape(modified)}</lastmod>` : ''}
    <xhtml:link rel="alternate" hreflang="es" href="${xmlEscape(`${SITE_URL}${es}`)}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${xmlEscape(`${SITE_URL}${en}`)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${xmlEscape(`${SITE_URL}${es}`)}"/>
  </url>`;
    })
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${body}
</urlset>
`;
}

export function isMachineReadablePath(pathname: string): boolean {
  if (MACHINE_READABLE.has(pathname)) return true;
  return pathname.startsWith('/api/') || pathname.startsWith('/feed');
}

/** Redirect sources the sitemap and llms.txt must not advertise. */
export function redirectSources(): Set<string> {
  const sources = new Set<string>();
  try {
    const data = JSON.parse(readFileSync(new URL('../data/gsc-redirects.json', import.meta.url), 'utf8')) as {
      redirects?: Record<string, unknown>;
    };
    for (const source of Object.keys(data.redirects ?? {})) sources.add(source);
  } catch {
    // The audit reports a missing map. Generation still lists live pages.
  }
  return sources;
}
