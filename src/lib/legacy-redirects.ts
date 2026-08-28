import { englishRedirects, localizePath } from './locale-paths.ts';

/** Keys are stored lowercase, without a trailing slash. Targets keep a trailing slash. */
const REDIRECTS = new Map<string, string>();

function stripSlash(path: string): string {
  if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1);
  return path;
}

function withSlash(path: string): string {
  if (path.includes('?')) {
    const [base, query] = path.split('?');
    return `${withSlash(base)}?${query}`;
  }
  return path.endsWith('/') ? path : `${path}/`;
}

function add(from: string, to: string) {
  const key = stripSlash(from).toLowerCase();
  const target = withSlash(to);
  if (key === stripSlash(target).toLowerCase()) return;
  REDIRECTS.set(key, target);
  if (key.endsWith('.dc')) {
    REDIRECTS.set(`${key}.html`, target);
  }
}

/** Spanish catalog path plus the English `/en/collection/` and `/en/coleccion/` aliases. */
function addCatalog(fromEs: string, toEs: string) {
  add(fromEs, toEs);
  const fromRest = stripSlash(fromEs).replace(/^\/coleccion/, '');
  add(`/en/collection${fromRest}`, localizePath(toEs, 'en'));
  add(`/en/coleccion${fromRest}`, localizePath(toEs, 'en'));
}

function addDreamweaver(stem: string, to: string) {
  add(`/${stem}.dc`, to);
  add(`/en/${stem}.dc`, to.startsWith('/en/') ? to : localizePath(to, 'en'));
}

add('/coleccion/numismatica/colombia', '/coleccion/colombia-numismatica/');
add('/en/coleccion/numismatica/colombia', '/en/collection/colombia-numismatics/');
add('/coleccion/numismatica/paises-bajos', '/coleccion/paises-bajos-numismatica/');
add('/coleccion/numismatica/paises-bajos/ducado-utrecht-1761', '/coleccion/paises-bajos-numismatica/ducado-utrecht-1761/');
add('/en/coleccion/numismatica/paises-bajos', '/en/collection/netherlands-numismatics/');
add('/en/coleccion/numismatica/paises-bajos/ducado-utrecht-1761', '/en/collection/netherlands-numismatics/ducado-utrecht-1761/');
add('/paises-bajos-numismatica', '/coleccion/paises-bajos-numismatica/');
add('/paises-bajos-numismatica/ducado-utrecht-1761', '/coleccion/paises-bajos-numismatica/ducado-utrecht-1761/');
add('/en/netherlands-numismatica', '/en/collection/netherlands-numismatics/');
add('/en/netherlands-numismatica/ducado-utrecht-1761', '/en/collection/netherlands-numismatics/ducado-utrecht-1761/');
add('/en/paises-bajos-numismatica', '/en/collection/netherlands-numismatics/');
add('/en/paises-bajos-numismatica/ducado-utrecht-1761', '/en/collection/netherlands-numismatics/ducado-utrecht-1761/');

add('/nosotros', '/acerca-de/');
add('/en/nosotros', '/en/about/');
add('/sobre-mi', '/acerca-de/');
add('/en/sobre-mi', '/en/about/');
add('/en/acerca-de', '/en/about/');
add('/about', '/en/about/');
add('/contact', '/en/contact/');

add('/contacto.dc', '/contacto/');
add('/en/contact.dc', '/en/contact/');
addDreamweaver('politica-privacidad-cookies', '/politica-privacidad-cookies/');
addDreamweaver('glosario-numismatico', '/glosario/');
add('/glosario-numismatico', '/glosario/');
add('/en/glosario-numismatico', '/en/glossary/');

const catalogoHubs: Record<string, string> = {
  'catalogo-colombia': '/coleccion/colombia/',
  'catalogo-ecuador': '/coleccion/ecuador/',
  'catalogo-filipinas': '/coleccion/filipinas/',
  'catalogo-philippines': '/coleccion/filipinas/',
  'catalogo-china': '/coleccion/china/',
  'catalogo-guatemala': '/coleccion/guatemala/',
  'catalogo-estados-unidos': '/coleccion/estados-unidos/',
  'catalogo-usa': '/coleccion/estados-unidos/',
  'catalogo-eeuu': '/coleccion/estados-unidos/',
  'catalogo-puerto-rico': '/coleccion/puerto-rico/',
  'catalogo-paises-bajos': '/coleccion/paises-bajos/',
  'catalogo-espana': '/coleccion/espana/',
  'catalogo-numismatica': '/coleccion/numismatica/',
  'catalogo-notafilia': '/coleccion/notafilia/',
  'catalogo-polimero': '/coleccion/polimero-mundial/',
};

for (const [stem, to] of Object.entries(catalogoHubs)) {
  addDreamweaver(stem, to);
}

addDreamweaver('billete-un-dolar-sello-rojo-1928', '/coleccion/estados-unidos/');
addDreamweaver('billete-de-polimero', '/coleccion/polimero-mundial/');
addDreamweaver('billete-de-polimero-mundial', '/coleccion/polimero-mundial/');

addCatalog('/coleccion/colombia/banco-de-la-republica-10-pesos-oro', '/coleccion/colombia/10-pesos-oro-1943/');
addCatalog('/coleccion/colombia/10-pesos-oro-1943-anverso', '/coleccion/colombia/10-pesos-oro-1943/');
addCatalog('/coleccion/colombia/10-pesos-oro-1943-reverso', '/coleccion/colombia/10-pesos-oro-1943/');
addCatalog('/coleccion/colombia/banco-de-rio-hacha-5-pesos-1883', '/coleccion/colombia/5-pesos-rio-hacha-1883/');
addCatalog('/coleccion/colombia/banco-de-la-republica-2000-pesos-oro', '/coleccion/colombia/2000-pesos-oro-1983/');
addCatalog('/coleccion/colombia/banco-hipotecario-5-pesos-1881', '/coleccion/colombia/5-pesos-banco-hipotecario-1881/');
addCatalog('/coleccion/ecuador/100-sucres-1993', '/coleccion/ecuador/');
addCatalog('/coleccion/colombia/banco-de-barranquilla-50-centavos-1880', '/coleccion/colombia/');
addCatalog('/coleccion/colombia/banco-de-la-republica-medio-peso-oro-specimen', '/coleccion/colombia/');
add('/coleccion/state-bank-new-brunswick', '/coleccion/estados-unidos/');
add('/en/collection/state-bank-new-brunswick', '/en/collection/united-states/');
add('/en/coleccion/state-bank-new-brunswick', '/en/collection/united-states/');

add('/billete-de-polimero', '/coleccion/polimero-mundial/');
add('/billete-de-polimero-mundial', '/coleccion/polimero-mundial/');
add('/billetes-de-polimero', '/coleccion/polimero-mundial/');
add('/coleccion-virtual-billete-de-polimero-mundiales', '/coleccion/polimero-mundial/');
add('/coleccion-virtual-billetes-de-polimero', '/coleccion/polimero-mundial/');
add('/coleccion-virtual-republica-de-colombia', '/coleccion/colombia/');
add('/coleccion-virtual-estados-unidos-de-america', '/coleccion/estados-unidos/');
add('/coleccion-virtual-billetes-de-puerto-rico', '/coleccion/puerto-rico/');
add('/billetes-de-ecuador', '/coleccion/ecuador/');
add('/billetes-de-puerto-rico', '/coleccion/puerto-rico/');
add('/coleccion-de-billetes-de-puerto-rico', '/coleccion/puerto-rico/');

const ENGLISH_REDIRECTS = englishRedirects();

export function normalizeLegacyPath(pathname: string): string {
  let path = pathname.split('?')[0].split('#')[0];
  try {
    path = decodeURIComponent(path);
  } catch {
    /* keep raw */
  }
  return stripSlash(path);
}

export function legacyRedirectTarget(pathname: string): string | undefined {
  const normalized = normalizeLegacyPath(pathname);
  const key = normalized.toLowerCase();
  return (
    REDIRECTS.get(key) ??
    REDIRECTS.get(key.replace(/\.html$/, '')) ??
    ENGLISH_REDIRECTS[withSlash(normalized)] ??
    ENGLISH_REDIRECTS[normalized]
  );
}

export function seoRedirectTarget(pathname: string): string | undefined {
  const exact = legacyRedirectTarget(pathname);
  if (exact) return exact;

  const normalized = normalizeLegacyPath(pathname);
  if (normalized.startsWith('/en/glosario/')) {
    return `/en/glossary/${normalized.slice('/en/glosario/'.length)}/`.replace(/\/{2,}/g, '/');
  }
  if (normalized.startsWith('/en/noticias/')) {
    return `/en/news/${normalized.slice('/en/noticias/'.length)}/`.replace(/\/{2,}/g, '/');
  }
  return undefined;
}

/** Astro `redirects` keys omit the trailing slash. */
export function astroLegacyRedirects(): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [from, to] of REDIRECTS) {
    out[from] = to;
  }
  return out;
}
