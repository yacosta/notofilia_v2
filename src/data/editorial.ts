import blogArticlesJson from './blog-articles.json';
import newsArticlesJson from './news-articles.json';

type Locale = 'es' | 'en';

export type LocalizedText = { es: string; en: string };

export type RelatedLink = {
  href: string;
  title: string;
  dek: string;
};

export type ClaimCallout = {
  kindEs: string;
  kindEn: string;
  noteEs: string;
  noteEn?: string;
  currency?: string;
  valueIso?: string | null;
  valueEs?: string | null;
  valueEn?: string | null;
  evidenceHref?: string | null;
  evidenceLabelEs?: string;
  evidenceLabelEn?: string;
};

export type EditorialArticle = {
  slug: string;
  href: string;
  title: LocalizedText;
  dek: LocalizedText;
  description: LocalizedText;
  published: string;
  updated?: string | null;
  dateEs: string;
  dateEn: string;
  updatedEs?: string | null;
  updatedEn?: string | null;
  reviewer?: string | null;
  sourceName?: string | null;
  sourceUrl?: string | null;
  image: string;
  imageAlt: LocalizedText;
  caption: LocalizedText;
  bodyHtml: LocalizedText;
  claim?: ClaimCallout | null;
  related: RelatedLink[];
};

export const BLOG_PATH = '/blog/';
export const NEWS_PATH = '/noticias/';

export const blogArticles = blogArticlesJson as EditorialArticle[];
export const newsArticles = newsArticlesJson as EditorialArticle[];

export const editorialCopy = {
  es: {
    blogTitle: 'Blog de Numismática y Notafilia',
    blogDek: 'Guías y artículos para aprender sobre el coleccionismo de billetes y monedas: historia, técnica y consejos prácticos.',
    blogMetaTitle: 'Blog de Numismática y Notafilia · Notofilia',
    blogMetaDescription:
      'Guías y artículos originales sobre notafilia y numismática: conservación, seguridad, historia bancaria y cómo empezar una colección.',
    newsTitle: 'Noticias de Numismática y Notafilia',
    newsDek: 'Una selección de noticias, hallazgos y notas sobre monedas y billetes históricos.',
    newsMetaTitle: 'Noticias de Numismática y Notafilia · Notofilia',
    newsMetaDescription:
      'Noticias y artículos sobre numismática y notafilia: emisiones, hallazgos y valor de billetes y monedas de colección de Colombia y del mundo.',
    breadcrumb: 'Migas de pan',
    home: 'Inicio',
    blog: 'Blog',
    news: 'Noticias',
    published: 'Publicado el',
    updated: 'Última actualización',
    reviewedBy: 'Revisado por',
    source: 'Fuente',
    aboutFigure: 'Sobre este valor',
    figureType: 'Tipo de cifra:',
    currency: 'Moneda:',
    valuationDate: 'Fecha de la valoración citada:',
    evidence: 'Evidencia:',
    editorialPolicy: 'Política editorial, fuentes y valoración',
    keepExploring: 'Sigue explorando',
    backToBlog: 'Volver al blog',
    backToNews: 'Volver a noticias',
    byline: 'Notofilia',
  },
  en: {
    blogTitle: 'Numismatics and Notaphily Blog',
    blogDek: 'Guides and articles on collecting banknotes and coins: history, technique, and practical advice.',
    blogMetaTitle: 'Numismatics and Notaphily Blog · Notofilia',
    blogMetaDescription:
      'Original guides on notaphily and numismatics: conservation, security, banking history, and how to start a collection.',
    newsTitle: 'Numismatics and Notaphily News',
    newsDek: 'A selection of news, finds, and notes on historic coins and banknotes.',
    newsMetaTitle: 'Numismatics and Notaphily News · Notofilia',
    newsMetaDescription:
      'News and notes on numismatics and notaphily: issues, finds, and the value of collectible banknotes and coins from Colombia and the world.',
    breadcrumb: 'Breadcrumb',
    home: 'Home',
    blog: 'Blog',
    news: 'News',
    published: 'Published',
    updated: 'Last updated',
    reviewedBy: 'Reviewed by',
    source: 'Source',
    aboutFigure: 'About this figure',
    figureType: 'Type of figure:',
    currency: 'Currency:',
    valuationDate: 'Date of the cited valuation:',
    evidence: 'Evidence:',
    editorialPolicy: 'Editorial policy, sources, and valuation',
    keepExploring: 'Keep exploring',
    backToBlog: 'Back to the blog',
    backToNews: 'Back to news',
    byline: 'Notofilia',
  },
} as const;

export function blogPath(locale: Locale): string {
  return locale === 'en' ? '/en/blog/' : BLOG_PATH;
}

export function newsPath(locale: Locale): string {
  return locale === 'en' ? '/en/noticias/' : NEWS_PATH;
}

export function articlePath(kind: 'blog' | 'news', slug: string, locale: Locale): string {
  const base = kind === 'blog' ? `/blog/${slug}/` : `/noticias/${slug}/`;
  return locale === 'en' ? `/en${base}` : base;
}

export function findBlogArticle(slug: string): EditorialArticle | undefined {
  return blogArticles.find((item) => item.slug === slug);
}

export function findNewsArticle(slug: string): EditorialArticle | undefined {
  return newsArticles.find((item) => item.slug === slug);
}

export const blogSlugs = blogArticles.map((item) => `blog/${item.slug}`);
export const newsSlugs = newsArticles.map((item) => `noticias/${item.slug}`);

const newWindowHint = {
  es: ' (se abre en una pestaña nueva)',
  en: ' (opens in a new tab)',
};

function localizeInternalHref(href: string, locale: Locale): string {
  if (locale !== 'en') return href;
  if (/^\/(blog|noticias|editorial|glosario|coleccion|nosotros|contacto)\//.test(href) || href === '/') {
    return `/en${href === '/' ? '/' : href}`;
  }
  return href;
}

export function enhanceProseHtml(html: string, locale: Locale): string {
  const hint = newWindowHint[locale];
  return html.replace(/<a\s+([^>]*?)href="([^"]+)"([^>]*)>([\s\S]*?)<\/a>/g, (full, pre, href, post, label) => {
    const localized = localizeInternalHref(href, locale);
    const attrs = `${pre}href="${localized}"${post}`.replace(/\s+/g, ' ').trim();
    if (localized.startsWith('http') && !localized.includes('notofilia.com')) {
      const withoutTarget = attrs
        .replace(/\s*target="[^"]*"/g, '')
        .replace(/\s*rel="[^"]*"/g, '');
      const hinted = /se abre en una pestaña nueva|opens in a new tab/.test(label)
        ? label
        : `${label}<span class="italic font-normal tracking-[0.01em]">${hint}</span>`;
      return `<a ${withoutTarget} target="_blank" rel="noopener noreferrer">${hinted}</a>`;
    }
    return `<a ${attrs}>${label}</a>`;
  });
}

export function featuredArticles(kind: 'blog' | 'news', limit = 4): EditorialArticle[] {
  return (kind === 'blog' ? blogArticles : newsArticles).slice(0, limit);
}

export function resolveRelated(related: RelatedLink[], locale: Locale): RelatedLink[] {
  return related.map((item) => {
    const slug = item.href.replace(/^\/+|\/+$/g, '').split('/').pop() ?? '';
    const target = findNewsArticle(slug) ?? findBlogArticle(slug);
    if (!target) return item;
    return {
      href: item.href,
      title: target.title[locale],
      dek: locale === 'en' ? target.dek.en : item.dek || target.dek.es,
    };
  });
}
