export type Locale = 'es' | 'en';

export const SITE_AUTHOR = 'Yezid Acosta';
export const DEFAULT_OG_IMAGE = '/images/hero-slide.jpg';

type PathPair = {
  es: string;
  en: string;
  /** Other unprefixed paths that resolve to the same pair (legacy EN-under-/coleccion/). */
  aliases?: string[];
};

/** Longest-prefix pairs. Trailing slashes required. */
export const PATH_PREFIX_PAIRS: PathPair[] = [
  {
    es: '/coleccion/estados-unidos/1-dolar-certificado-plata-1957b/',
    en: '/collection/united-states/1-dollar-silver-certificate-1957b/',
    aliases: ['/coleccion/united-states/1-dollar-silver-certificate-1957b/'],
  },
  {
    es: '/coleccion/estados-unidos/1-dolar-serie-2003-atlanta/',
    en: '/collection/united-states/1-dollar-series-2003-atlanta/',
    aliases: ['/coleccion/united-states/1-dollar-series-2003-atlanta/'],
  },
  {
    es: '/coleccion/estados-unidos/1-dolar-state-bank-new-brunswick/',
    en: '/collection/united-states/1-dollar-state-bank-new-brunswick/',
    aliases: ['/coleccion/united-states/1-dollar-state-bank-new-brunswick/'],
  },
  {
    es: '/coleccion/estados-unidos/10-dolares-serie-1934-chicago/',
    en: '/collection/united-states/10-dollars-series-1934-chicago/',
    aliases: ['/coleccion/united-states/10-dollars-series-1934-chicago/'],
  },
  {
    es: '/coleccion/estados-unidos/10-dolares-serie-1934a-chicago/',
    en: '/collection/united-states/10-dollars-series-1934a-chicago/',
    aliases: ['/coleccion/united-states/10-dollars-series-1934a-chicago/'],
  },
  {
    es: '/coleccion/estados-unidos/10-dolares-serie-1934a-cleveland/',
    en: '/collection/united-states/10-dollars-series-1934a-cleveland/',
    aliases: ['/coleccion/united-states/10-dollars-series-1934a-cleveland/'],
  },
  {
    es: '/coleccion/estados-unidos/10-dolares-serie-1934d-richmond/',
    en: '/collection/united-states/10-dollars-series-1934d-richmond/',
    aliases: ['/coleccion/united-states/10-dollars-series-1934d-richmond/'],
  },
  {
    es: '/coleccion/estados-unidos/20-dolares-confederados-1864/',
    en: '/collection/united-states/20-dollars-confederate-1864/',
    aliases: ['/coleccion/united-states/20-dollars-confederate-1864/'],
  },
  {
    es: '/coleccion/estados-unidos/5-dolares-confederados-1864/',
    en: '/collection/united-states/5-dollars-confederate-1864/',
    aliases: ['/coleccion/united-states/5-dollars-confederate-1864/'],
  },
  {
    es: '/coleccion/estados-unidos/mpc-vietnam/20-dolares-serie-692/',
    en: '/collection/united-states/mpc-vietnam/20-dollars-series-692/',
    aliases: ['/coleccion/united-states/mpc-vietnam/20-dollars-series-692/'],
  },
  {
    es: '/coleccion/estados-unidos/mpc-vietnam/5-dolares-serie-661/',
    en: '/collection/united-states/mpc-vietnam/5-dollars-series-661/',
    aliases: ['/coleccion/united-states/mpc-vietnam/5-dollars-series-661/'],
  },
  {
    es: '/coleccion/estados-unidos/mpc-vietnam/10-dolares-serie-641/',
    en: '/collection/united-states/mpc-vietnam/10-dollars-series-641/',
    aliases: ['/coleccion/united-states/mpc-vietnam/10-dollars-series-641/'],
  },
  {
    es: '/coleccion/estados-unidos/mpc-vietnam/1-dolar-serie-681/',
    en: '/collection/united-states/mpc-vietnam/1-dollar-series-681/',
    aliases: ['/coleccion/united-states/mpc-vietnam/1-dollar-series-681/'],
  },
  {
    es: '/coleccion/estados-unidos/mpc-vietnam/',
    en: '/collection/united-states/mpc-vietnam/',
    aliases: ['/coleccion/united-states/mpc-vietnam/'],
  },
  {
    es: '/coleccion/estados-unidos/rency/pele-the-beautiful-game/',
    en: '/collection/united-states/rency/pele-the-beautiful-game/',
    aliases: [
      '/coleccion/united-states/rency/pele-the-beautiful-game/',
      '/coleccion/estados-unidos/renci/pele-the-beautiful-game/',
    ],
  },
  {
    es: '/coleccion/estados-unidos/rency/',
    en: '/collection/united-states/rency/',
    aliases: ['/coleccion/united-states/rency/', '/coleccion/estados-unidos/renci/'],
  },
  {
    es: '/coleccion/estados-unidos/miscelaneos/nota-prueba-giori-lincoln-memorial/',
    en: '/collection/united-states/miscellaneous/giori-test-note-lincoln-memorial/',
    aliases: ['/coleccion/united-states/miscellaneous/giori-test-note-lincoln-memorial/'],
  },
  {
    es: '/coleccion/estados-unidos/miscelaneos/1-dolar-serie-2006-dallas-wheres-george/',
    en: '/collection/united-states/miscellaneous/1-dollar-series-2006-dallas-wheres-george/',
    aliases: ['/coleccion/united-states/miscellaneous/1-dollar-series-2006-dallas-wheres-george/'],
  },
  {
    es: '/coleccion/estados-unidos/miscelaneos/',
    en: '/collection/united-states/miscellaneous/',
    aliases: ['/coleccion/united-states/miscellaneous/'],
  },
  {
    es: '/coleccion/estados-unidos/',
    en: '/collection/united-states/',
    aliases: ['/coleccion/united-states/'],
  },
  { es: '/coleccion/filipinas/', en: '/collection/philippines/' },
  { es: '/coleccion/notafilia/catalogo/', en: '/collection/notaphily/catalog/' },
  { es: '/coleccion/colombia/catalogo/', en: '/collection/colombia/catalog/' },
  { es: '/coleccion/colombia-numismatica/catalogo/', en: '/collection/colombia-numismatics/catalog/' },
  { es: '/coleccion/colombia-numismatica/', en: '/collection/colombia-numismatics/' },
  {
    es: '/coleccion/polimero-mundial/asia/malasia/5-ringgit-abdul-rahman/',
    en: '/collection/world-polymer/asia/malaysia/5-ringgit-abdul-rahman/',
  },
  { es: '/coleccion/polimero-mundial/asia/malasia/', en: '/collection/world-polymer/asia/malaysia/' },
  { es: '/coleccion/polimero-mundial/asia/', en: '/collection/world-polymer/asia/' },
  {
    es: '/coleccion/polimero-mundial/europa/inglaterra/5-libras-churchill/',
    en: '/collection/world-polymer/europe/england/5-pounds-churchill/',
  },
  { es: '/coleccion/polimero-mundial/europa/inglaterra/', en: '/collection/world-polymer/europe/england/' },
  { es: '/coleccion/polimero-mundial/europa/', en: '/collection/world-polymer/europe/' },
  {
    es: '/coleccion/polimero-mundial/Canada/5-dolares-laurier/',
    en: '/collection/world-polymer/Canada/5-dollars-laurier/',
  },
  { es: '/coleccion/polimero-mundial/Canada/', en: '/collection/world-polymer/Canada/' },
  { es: '/coleccion/polimero-mundial/america-del-norte/', en: '/collection/world-polymer/north-america/' },
  { es: '/coleccion/polimero-mundial/', en: '/collection/world-polymer/' },
  { es: '/coleccion/paises-bajos-numismatica/', en: '/collection/netherlands-numismatics/' },
  { es: '/coleccion/paises-bajos/', en: '/collection/netherlands/' },
  { es: '/coleccion/numismatica/', en: '/collection/numismatics/' },
  { es: '/coleccion/notafilia/', en: '/collection/notaphily/' },
  { es: '/coleccion/espana/', en: '/collection/spain/' },
  { es: '/coleccion/', en: '/collection/' },
  { es: '/glosario/', en: '/glossary/' },
  { es: '/noticias/', en: '/news/' },
  { es: '/contacto/', en: '/contact/' },
  { es: '/acerca-de/', en: '/about/' },
  { es: '/buscar/', en: '/search/' },
  { es: '/politica-privacidad-cookies/', en: '/privacy-cookies/' },
  { es: '/blog/mejores-empresas-certificacion-monedas-billetes/', en: '/blog/best-coin-and-banknote-grading-companies/' },
  { es: '/blog/mylar-si-plastico-no-como-guardar-billetes/', en: '/blog/mylar-yes-plastic-no-how-to-store-banknotes/' },
  { es: '/blog/tres-imprentas-misterio-pie-imprenta-billetes-colombianos/', en: '/blog/three-imprints-colombian-banknote-printer/' },
  { es: '/blog/como-empezar-coleccion-billetes/', en: '/blog/how-to-start-a-banknote-collection/' },
  { es: '/blog/como-identificar-billetes-falsos/', en: '/blog/how-to-identify-counterfeit-banknotes/' },
  { es: '/blog/diferencia-numismatica-notafilia/', en: '/blog/difference-between-numismatics-and-notaphily/' },
  { es: '/blog/numeros-serie-especiales-billetes/', en: '/blog/special-serial-numbers-on-banknotes/' },
  { es: '/blog/origenes-banca-comercial-colombia-banca-libre/', en: '/blog/origins-of-commercial-banking-colombia-free-banking/' },
  { es: '/blog/origenes-banca-comercial-puerto-rico/', en: '/blog/origins-of-commercial-banking-puerto-rico/' },
  { es: '/blog/personajes-billetes-colombia/', en: '/blog/figures-on-colombian-banknotes/' },
];

const PAIRS_BY_LENGTH = [...PATH_PREFIX_PAIRS].sort(
  (a, b) => Math.max(b.es.length, b.en.length) - Math.max(a.es.length, a.en.length),
);

export function stripEnPrefix(path: string): string {
  return path.replace(/^\/en(?=\/|$)/, '') || '/';
}

export function ensureTrailingSlash(path: string): string {
  if (path === '/') return '/';
  return path.endsWith('/') ? path : `${path}/`;
}

function splitHash(path: string): { pathname: string; hash: string; search: string } {
  const hashIndex = path.indexOf('#');
  const withHash = hashIndex === -1 ? path : path.slice(0, hashIndex);
  const hash = hashIndex === -1 ? '' : path.slice(hashIndex);
  const searchIndex = withHash.indexOf('?');
  if (searchIndex === -1) return { pathname: withHash, hash, search: '' };
  return { pathname: withHash.slice(0, searchIndex), search: withHash.slice(searchIndex), hash };
}

export function rewriteUnprefixedPath(pathname: string, locale: Locale): string {
  if (pathname === '/' || pathname === '') return '/';
  const slashed = ensureTrailingSlash(pathname.startsWith('/') ? pathname : `/${pathname}`);

  for (const { es, en, aliases = [] } of PAIRS_BY_LENGTH) {
    if (slashed === es || slashed.startsWith(es)) {
      return locale === 'en' ? `${en}${slashed.slice(es.length)}` : slashed;
    }
    if (slashed === en || slashed.startsWith(en)) {
      return locale === 'es' ? `${es}${slashed.slice(en.length)}` : slashed;
    }
    for (const alias of aliases) {
      if (slashed === alias || slashed.startsWith(alias)) {
        const rest = slashed.slice(alias.length);
        return locale === 'en' ? `${en}${rest}` : `${es}${rest}`;
      }
    }
  }

  return slashed;
}

export function localizePath(path: string, locale: Locale): string {
  if (path.startsWith('http')) return path;
  const { pathname, hash, search } = splitHash(path);
  const unprefixed = stripEnPrefix(pathname);
  const rewritten = rewriteUnprefixedPath(unprefixed, locale);
  const suffix = `${search}${hash}`;
  if (locale === 'es') return `${rewritten}${suffix}`;
  if (rewritten === '/') return `/en/${suffix}`;
  return `/en${rewritten}${suffix}`;
}

export function otherLocalePath(path: string, locale: Locale): string {
  return localizePath(path, locale === 'es' ? 'en' : 'es');
}

/** Legacy English URLs that must 301 to the translated tree. */
export function englishRedirects(): Record<string, string> {
  const redirects: Record<string, string> = {};
  const seen = new Set<string>();

  const add = (from: string, to: string) => {
    if (from === to || seen.has(from)) return;
    seen.add(from);
    redirects[from] = to;
  };

  const legacyEnglishPrefixes = [
    '/en/coleccion/estados-unidos/1-dolar-certificado-plata-1957b/',
    '/en/coleccion/united-states/1-dollar-silver-certificate-1957b/',
    '/en/coleccion/estados-unidos/1-dolar-serie-2003-atlanta/',
    '/en/coleccion/estados-unidos/1-dolar-state-bank-new-brunswick/',
    '/en/coleccion/estados-unidos/10-dolares-serie-1934-chicago/',
    '/en/coleccion/estados-unidos/10-dolares-serie-1934a-chicago/',
    '/en/coleccion/estados-unidos/10-dolares-serie-1934a-cleveland/',
    '/en/coleccion/estados-unidos/10-dolares-serie-1934d-richmond/',
    '/en/coleccion/estados-unidos/20-dolares-confederados-1864/',
    '/en/coleccion/estados-unidos/5-dolares-confederados-1864/',
    '/en/coleccion/united-states/1-dollar-series-2003-atlanta/',
    '/en/coleccion/united-states/1-dollar-state-bank-new-brunswick/',
    '/en/coleccion/estados-unidos/mpc-vietnam/20-dolares-serie-692/',
    '/en/coleccion/estados-unidos/mpc-vietnam/5-dolares-serie-661/',
    '/en/coleccion/united-states/10-dollars-series-1934-chicago/',
    '/en/coleccion/united-states/10-dollars-series-1934a-chicago/',
    '/en/coleccion/united-states/10-dollars-series-1934a-cleveland/',
    '/en/coleccion/united-states/10-dollars-series-1934d-richmond/',
    '/en/coleccion/united-states/20-dollars-confederate-1864/',
    '/en/coleccion/united-states/5-dollars-confederate-1864/',
    '/en/coleccion/estados-unidos/mpc-vietnam/10-dolares-serie-641/',
    '/en/coleccion/estados-unidos/mpc-vietnam/1-dolar-serie-681/',
    '/en/coleccion/estados-unidos/rency/pele-the-beautiful-game/',
    '/en/coleccion/estados-unidos/rency/',
    '/en/coleccion/estados-unidos/miscelaneos/nota-prueba-giori-lincoln-memorial/',
    '/en/coleccion/estados-unidos/miscelaneos/1-dolar-serie-2006-dallas-wheres-george/',
    '/en/coleccion/estados-unidos/miscelaneos/',
    '/en/coleccion/estados-unidos/mpc-vietnam/',
    '/en/coleccion/estados-unidos/',
    '/en/coleccion/united-states/mpc-vietnam/20-dollars-series-692/',
    '/en/coleccion/united-states/mpc-vietnam/5-dollars-series-661/',
    '/en/coleccion/united-states/mpc-vietnam/10-dollars-series-641/',
    '/en/coleccion/united-states/mpc-vietnam/1-dollar-series-681/',
    '/en/coleccion/united-states/rency/pele-the-beautiful-game/',
    '/en/coleccion/united-states/rency/',
    '/en/coleccion/united-states/miscellaneous/giori-test-note-lincoln-memorial/',
    '/en/coleccion/united-states/miscellaneous/1-dollar-series-2006-dallas-wheres-george/',
    '/en/coleccion/united-states/miscellaneous/',
    '/en/coleccion/united-states/mpc-vietnam/',
    '/en/coleccion/united-states/',
    '/en/coleccion/filipinas/1-peso/',
    '/en/coleccion/filipinas/2-pesos/',
    '/en/coleccion/filipinas/5-pesos/',
    '/en/coleccion/filipinas/20-pesos/',
    '/en/coleccion/filipinas/',
    '/en/coleccion/colombia-numismatica/1-4-real-santa-marta-1820/',
    '/en/coleccion/colombia-numismatica/catalogo/',
    '/en/coleccion/colombia-numismatica/',
    '/en/coleccion/colombia/catalogo/',
    '/en/coleccion/polimero-mundial/asia/malasia/5-ringgit-abdul-rahman/',
    '/en/coleccion/polimero-mundial/asia/malasia/',
    '/en/coleccion/polimero-mundial/asia/',
    '/en/coleccion/polimero-mundial/europa/inglaterra/5-libras-churchill/',
    '/en/coleccion/polimero-mundial/europa/inglaterra/',
    '/en/coleccion/polimero-mundial/europa/',
    '/en/coleccion/polimero-mundial/Canada/5-dolares-laurier/',
    '/en/coleccion/polimero-mundial/Canada/',
    '/en/coleccion/polimero-mundial/america-del-norte/',
    '/en/coleccion/polimero-mundial/',
    '/en/coleccion/paises-bajos/',
    '/en/coleccion/numismatica/',
    '/en/coleccion/notafilia/catalogo/',
    '/en/coleccion/notafilia/',
    '/en/coleccion/espana/',
    '/en/coleccion/china/100-yuan/',
    '/en/coleccion/china/',
    '/en/coleccion/colombia/5-pesos-rio-hacha-1883/',
    '/en/coleccion/colombia/5-pesos-banco-hipotecario-1881/',
    '/en/coleccion/colombia/1-peso-tolima-1901/',
    '/en/coleccion/colombia/1-peso-oro-1954/',
    '/en/coleccion/colombia/10-pesos-oro-1943/',
    '/en/coleccion/colombia/2-pesos-oro-1944/',
    '/en/coleccion/colombia/2-pesos-oro-1955/',
    '/en/coleccion/colombia/10-pesos-oro-1976/',
    '/en/coleccion/colombia/1000-pesos-oro-1979/',
    '/en/coleccion/colombia/2000-pesos-oro-1983/',
    '/en/coleccion/colombia/2000-pesos-2008/',
    '/en/coleccion/colombia/20000-pesos-2017/',
    '/en/coleccion/colombia/1000-pesos-error-2008/',
    '/en/coleccion/colombia/1000-pesos-error-2011/',
    '/en/coleccion/colombia/50000-pesos-error-2008/',
    '/en/coleccion/colombia/50000-pesos-error-2015/',
    '/en/coleccion/colombia/',
    '/en/coleccion/ecuador/',
    '/en/coleccion/guatemala/',
    '/en/coleccion/lazarettos/',
    '/en/coleccion/puerto-rico/',
    '/en/coleccion/',
    '/en/glosario/',
    '/en/noticias/',
    '/en/contacto/',
    '/en/acerca-de/',
    '/en/buscar/',
    '/en/politica-privacidad-cookies/',
    '/en/coleccion/paises-bajos-numismatica/ducado-utrecht-1761/',
    '/en/coleccion/paises-bajos-numismatica/',
    '/en/paises-bajos-numismatica/ducado-utrecht-1761/',
    '/en/paises-bajos-numismatica/',
    '/en/blog/mejores-empresas-certificacion-monedas-billetes/',
    '/en/blog/mylar-si-plastico-no-como-guardar-billetes/',
    '/en/blog/tres-imprentas-misterio-pie-imprenta-billetes-colombianos/',
    '/en/blog/como-empezar-coleccion-billetes/',
    '/en/blog/como-identificar-billetes-falsos/',
    '/en/blog/diferencia-numismatica-notafilia/',
    '/en/blog/numeros-serie-especiales-billetes/',
    '/en/blog/origenes-banca-comercial-colombia-banca-libre/',
    '/en/blog/origenes-banca-comercial-puerto-rico/',
    '/en/blog/personajes-billetes-colombia/',
  ];

  for (const from of legacyEnglishPrefixes) {
    add(from, localizePath(from, 'en'));
  }

  return redirects;
}

/** Kept so data modules can register extra exact pairs without a circular import. */
export function addLocalePair(_esPath: string, _enPath: string) {
  // Prefix pairs above already cover USA, About, MPC notes, and Netherlands coinage.
}

export function englishContentSlug(esSlug: string): string {
  return localizePath(`/${esSlug.replace(/^\/|\/$/g, '')}/`, 'en')
    .replace(/^\/en\/?/, '')
    .replace(/\/$/, '');
}
