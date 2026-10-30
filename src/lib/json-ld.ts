import { SITE_AUTHOR, localizePath, type Locale } from './locale-paths.ts';
import { SITE_URL } from './site-url.ts';

const PERSON_ID = `${SITE_URL}/#yezid-acosta`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const ORG_ID = `${SITE_URL}/#organization`;
const SITE_NAME = 'Notofilia';
const COPYRIGHT_NOTICE = `© ${new Date().getUTCFullYear()} NOTOFILIA`;

export type BreadcrumbCrumb = { name: string; path: string };

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).href;
}

function omitEmpty<T extends Record<string, unknown>>(value: T): T {
  return Object.fromEntries(Object.entries(value).filter(([, item]) => item !== undefined && item !== '')) as T;
}

/** Read a grading-house name from existing grade copy. Do not invent a service. */
export function inferGradingService(grade?: string): string | undefined {
  if (!grade) return undefined;
  if (/\bNGC\b/.test(grade)) return 'NGC';
  if (/\bPMG\b/.test(grade)) return 'PMG';
  if (/\bPCGS\b/.test(grade)) return 'PCGS';
  return undefined;
}

export function personNode() {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: SITE_AUTHOR,
    url: absoluteUrl('/acerca-de/'),
  };
}

export function organizationNode() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE_NAME,
    url: SITE_URL,
    founder: { '@id': PERSON_ID },
  };
}

export function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: ['es', 'en'],
    publisher: { '@id': ORG_ID },
    author: { '@id': PERSON_ID },
  };
}

export function siteGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [websiteNode(), organizationNode(), personNode()],
  };
}

export function collectionPageJsonLd(options: {
  locale: Locale;
  pathname: string;
  name: string;
  description: string;
  crumbs: BreadcrumbCrumb[];
  faq?: { question: string; answer: string }[];
  items?: { name: string; url: string }[];
}) {
  const itemList = options.items?.length
    ? {
        '@type': 'ItemList',
        itemListElement: options.items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          url: absoluteUrl(item.url),
        })),
      }
    : undefined;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbList(options.crumbs, options.locale),
      omitEmpty({
        '@type': 'CollectionPage',
        name: options.name,
        description: options.description,
        url: absoluteUrl(options.pathname),
        inLanguage: options.locale,
        isPartOf: { '@id': WEBSITE_ID },
        author: { '@id': PERSON_ID },
        mainEntity: itemList,
      }),
      ...(options.faq?.length ? [faqPageJsonLd(options.faq)] : []),
    ],
  };
}

export function breadcrumbList(crumbs: BreadcrumbCrumb[], locale: Locale) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(localizePath(crumb.path, locale)),
    })),
  };
}

export function imageObjectJsonLd(options: { image: string; locale: Locale; caption?: string }) {
  const imageUrl = absoluteUrl(options.image);
  return omitEmpty({
    '@type': 'ImageObject',
    url: imageUrl,
    contentUrl: imageUrl,
    caption: options.caption,
    creditText: 'Notofilia.com / Yezid Acosta',
    creator: {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: SITE_AUTHOR,
    },
    copyrightNotice: COPYRIGHT_NOTICE,
    license: absoluteUrl(options.locale === 'en' ? '/en/editorial/' : '/editorial/'),
    acquireLicensePage: absoluteUrl(options.locale === 'en' ? '/en/editorial/' : '/editorial/'),
  });
}

export function visualArtworkJsonLd(options: {
  name: string;
  description: string;
  url: string;
  image?: string;
  /** Face and back, when both exist. Overrides the single `image`. */
  images?: { src: string; caption?: string }[];
  locale: Locale;
  artform: 'Banknote' | 'Coin' | 'Medal' | 'CreativeWork';
  catalogNumber?: string;
  issuer?: string;
  printer?: string;
  gradingService?: string;
  certNumber?: string;
  serial?: string;
  collectionUrl?: string;
  collectionName?: string;
}) {
  const type = options.artform === 'CreativeWork' ? 'CreativeWork' : 'VisualArtwork';
  const identifier = catalogPropertyValues(options.catalogNumber, options.certNumber, options.serial);
  const additionalProperty = [
    options.catalogNumber
      ? { '@type': 'PropertyValue', name: 'catalogNumber', value: options.catalogNumber }
      : undefined,
    options.serial ? { '@type': 'PropertyValue', name: 'serialNumber', value: options.serial } : undefined,
    options.gradingService
      ? { '@type': 'PropertyValue', name: 'gradingService', value: options.gradingService }
      : undefined,
    options.certNumber ? { '@type': 'PropertyValue', name: 'certificateNumber', value: options.certNumber } : undefined,
  ].filter(Boolean);

  return omitEmpty({
    '@type': type,
    name: options.name,
    description: options.description,
    url: absoluteUrl(options.url),
    inLanguage: options.locale,
    artform: type === 'VisualArtwork' ? options.artform : undefined,
    identifier,
    author: { '@id': PERSON_ID },
    creator: { '@id': PERSON_ID },
    publisher: options.issuer ? { '@type': 'Organization', name: options.issuer } : undefined,
    producer: options.printer ? { '@type': 'Organization', name: options.printer } : undefined,
    additionalProperty: additionalProperty.length ? additionalProperty : undefined,
    image: artworkImages(options),
    isPartOf: options.collectionUrl
      ? {
          '@type': 'Collection',
          name: options.collectionName || SITE_NAME,
          url: absoluteUrl(options.collectionUrl),
        }
      : { '@id': WEBSITE_ID },
  });
}

export function definedTermJsonLd(options: {
  name: string;
  alternateName: string;
  description: string;
  url: string;
  locale: Locale;
  speakable?: boolean;
}) {
  const setUrl = absoluteUrl(options.locale === 'en' ? '/en/glossary/' : '/glosario/');
  const url = absoluteUrl(options.url);
  return {
    '@type': 'DefinedTerm',
    '@id': `${url}#term`,
    name: options.name,
    alternateName: options.alternateName,
    description: options.description,
    url,
    inLanguage: options.locale,
    inDefinedTermSet: setUrl,
    ...(options.speakable ? { speakable: speakableDirectAnswer() } : {}),
  };
}

export function speakableDirectAnswer() {
  return {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.direct-answer'],
  };
}

function artworkImages(options: {
  image?: string;
  images?: { src: string; caption?: string }[];
  locale: Locale;
}) {
  const images = (options.images ?? []).filter((item) => item.src);
  if (images.length) {
    const nodes = images.map((item) =>
      imageObjectJsonLd({ image: item.src, locale: options.locale, caption: item.caption }),
    );
    return nodes.length === 1 ? nodes[0] : nodes;
  }
  return options.image ? imageObjectJsonLd({ image: options.image, locale: options.locale }) : undefined;
}

function catalogPropertyValues(catalogNumber?: string, certNumber?: string, serial?: string) {
  const values = [];
  for (const token of (catalogNumber ?? '').split(/[·;]/).map((part) => part.trim()).filter(Boolean)) {
    let propertyID = 'catalogNumber';
    if (/^(P#|Pick\b)/i.test(token)) propertyID = 'Pick';
    else if (/^BG#/i.test(token)) propertyID = 'BG';
    else if (/^KM/i.test(token)) propertyID = 'KM';
    else if (/^HT/i.test(token)) propertyID = 'HT';
    else if (/^Fr\./i.test(token)) propertyID = 'Friedberg';
    values.push({ '@type': 'PropertyValue', propertyID, value: token });
  }
  if (certNumber) values.push({ '@type': 'PropertyValue', propertyID: 'certificateNumber', value: certNumber });
  if (serial) values.push({ '@type': 'PropertyValue', propertyID: 'serialNumber', value: serial });
  return values.length ? values : undefined;
}

export function faqPageJsonLd(items: { question: string; answer: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
