import type { CatalogSource, LocalizedText } from './catalog';
import { CHINA_PATH, chinaNotes, chinaChapters } from './china';

export const POLIMERO_MUNDIAL_PATH = '/coleccion/polimero-mundial/';

const chinaPolymer = chinaChapters.find((chapter) => chapter.id === 'polimero');
const chinaExhibit = chinaNotes[0];

if (!chinaPolymer || !chinaExhibit) {
  throw new Error('China polymer exhibit is missing from the catalog data.');
}

export type PolymerCountry = {
  href: string;
  years: LocalizedText;
  title: LocalizedText;
  lead: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
};

/** Countries with polymer notes documented in this collection. Add a row only when pieces are uploaded. */
export const polymerCountries: PolymerCountry[] = [
  {
    href: CHINA_PATH,
    years: chinaPolymer.years,
    title: { es: 'China', en: 'China' },
    lead: chinaPolymer.lead,
    image: chinaExhibit.images.front,
    imageAlt: chinaExhibit.frontCaption,
  },
];

export const seriesSources: CatalogSource[] = [
  {
    href: 'https://www.banknotes.rba.gov.au/australias-banknotes/history/index.html',
    es: 'Reserve Bank of Australia — History of Banknotes',
    en: 'Reserve Bank of Australia — History of Banknotes',
    note: {
      es: '10 dólares conmemorativo de polímero, enero de 1988; primera serie completa, 1992–1996.',
      en: 'Commemorative polymer $10, January 1988; first complete polymer series, 1992–1996.',
    },
  },
  {
    href: 'https://www.rba.gov.au/publications/annual-reports/rba/1988/branch-activities-services.html',
    es: 'Reserve Bank of Australia — Informe anual 1988',
    en: 'Reserve Bank of Australia — 1988 annual report',
    note: {
      es: 'Emisión del 10 dólares el 27 de enero de 1988; OVD de Cook y desarrollo con la CSIRO desde 1968.',
      en: 'Issue of the $10 note on 27 January 1988; Cook OVD and development with CSIRO from 1968.',
    },
  },
  {
    href: 'https://en.wikipedia.org/wiki/Polymer_banknote',
    es: 'Wikipedia — Polymer banknote',
    en: 'Wikipedia — Polymer banknote',
    note: {
      es: 'Ensayos en Tyvek de los años ochenta; sustratos Guardian y Safeguard; adopción posterior por otros emisores.',
      en: '1980s Tyvek trials; Guardian and Safeguard substrates; later adoption by other issuers.',
    },
  },
];

export const seriesCopy = {
  es: {
    metaTitle: 'Billetes de polímero mundial | Notofilia',
    metaDescription:
      'Historia del billete de polímero —de los ensayos en Tyvek al 10 dólares australiano de 1988— y el catálogo de los países documentados en la colección de Notofilia.',
    kicker: 'Colección virtual',
    title: 'Billetes de polímero',
    subtitle: 'Catálogo mundial',
    intro: [
      'El polímero de los billetes modernos es, en lo esencial, una película de polipropileno biaxialmente orientado. Se imprime como el papel, pero admite una ventana transparente y resiste mejor el agua, la suciedad y el uso. El motivo de su invención no fue el coleccionismo: fue la falsificación. Tras la decimalización australiana de 1966, el Reserve Bank of Australia pidió a la CSIRO un sustrato que no se pudiera fotocopiar ni simular con los papeles de entonces.',
      'Los primeros plásticos de circulación no fueron ese polímero. En los años ochenta, la American Bank Note Company imprimió ensayos en Tyvek —polietileno no tejido— para Haití, Costa Rica y la Isla de Man. El material se arrugaba, las tintas se desprendían y la experiencia no se generalizó. El salto técnico llegó en enero de 1988, cuando Australia puso en circulación un 10 dólares conmemorativo del Bicentenario: el primer billete de polímero del mundo, con un dispositivo ópticamente variable de James Cook en una ventana clara, fruto de dos décadas de trabajo conjunto entre el banco y la CSIRO.',
      'Entre 1992 y 1996 Australia sustituyó toda su serie decimal por polímero: fue el primer país en abandonar el papel en la circulación ordinaria. En 1996 el banco y UCB Films crearon Securency para vender el sustrato Guardian. De La Rue respondió más tarde con Safeguard. Otros emisores eligieron híbridos —algodón con ventanas de plástico—. Desde entonces decenas de bancos centrales han adoptado uno u otro sistema, unos para toda la serie y otros solo para conmemorativos.',
      'Esta vitrina no es un recuento de todos los polímeros del mundo. Reúne solo los países cuyas piezas de polímero están documentadas en la colección. Hoy abre China: el Banco Popular no ha pasado la circulación ordinaria al plástico; sus polímeros —el 100 yuan del milenio (2000) y el 20 yuan de los deportes de hielo (2021)— son conmemorativos.',
    ],
    holdingsTitle: 'El catálogo',
    holdingsIntro:
      'Una tarjeta por país, a medida que se documenten las piezas. Por ahora, China.',
    viewCountry: 'Leer el catálogo',
    sourcesTitle: 'Fuentes',
    eraLabel: 'Época',
  },
  en: {
    metaTitle: 'World polymer banknotes | Notofilia',
    metaDescription:
      'A short history of the polymer banknote — from Tyvek trials to Australia’s 1988 $10 — and the catalog of countries documented in the Notofilia collection.',
    kicker: 'Virtual collection',
    title: 'Polymer banknotes',
    subtitle: 'World catalog',
    intro: [
      'The polymer of modern banknotes is, in essence, a film of biaxially oriented polypropylene. It prints like paper, but it can carry a clear window and stands up better to water, dirt, and wear. It was invented against counterfeiting, not for collectors. After Australia’s decimal changeover in 1966, the Reserve Bank of Australia asked CSIRO for a substrate that could not be photocopied or faked with the papers of the day.',
      'The first circulating plastics were not that polymer. In the 1980s the American Bank Note Company printed Tyvek trials — a non-woven polyethylene — for Haiti, Costa Rica, and the Isle of Man. The stock wrinkled, the inks lifted, and the experiment did not spread. The technical leap came in January 1988, when Australia issued a $10 note for the Bicentenary: the world’s first polymer banknote, with an optically variable device of James Cook in a clear window, the fruit of two decades of work between the Bank and CSIRO.',
      'Between 1992 and 1996 Australia replaced its entire decimal series with polymer: the first country to leave paper in ordinary circulation. In 1996 the Bank and UCB Films formed Securency to sell the Guardian substrate. De La Rue later answered with Safeguard. Other issuers chose hybrids — cotton with plastic windows. Since then dozens of central banks have taken up one system or the other, some for a whole series and others only for commemoratives.',
      'This case is not a census of every polymer note in the world. It gathers only the countries whose polymer pieces are documented in the collection. China opens the row today: the People’s Bank has not moved ordinary circulation onto plastic; its polymer notes — the millennium 100-yuan (2000) and the ice-sports 20-yuan (2021) — are commemoratives.',
    ],
    holdingsTitle: 'The catalog',
    holdingsIntro: 'One card to a country, as pieces are documented. For now, China.',
    viewCountry: 'Read the catalog',
    sourcesTitle: 'Sources',
    eraLabel: 'Period',
  },
} as const;

export function polymerWorldPath(locale: 'es' | 'en'): string {
  return locale === 'en' ? `/en${POLIMERO_MUNDIAL_PATH}` : POLIMERO_MUNDIAL_PATH;
}
