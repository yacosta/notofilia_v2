export type AboutLocale = 'es' | 'en';

export const ABOUT_PATH = '/acerca-de/';
export const ABOUT_PATH_EN = '/about/';
export const ABOUT_PORTRAIT = '/uploads/yezid-acosta.webp';
export const ABOUT_PORTRAIT_WIDTH = 1440;
export const ABOUT_PORTRAIT_HEIGHT = 1440;

export const aboutCopy = {
  es: {
    nav: 'Sobre Notofilia',
    home: 'Inicio',
    breadcrumb: 'Migas de pan',
    metaTitle: 'Acerca de Notofilia · Yezid Acosta',
    metaDescription:
      'Notofilia es un sitio sobre billetes y monedas — en español y en inglés — con una debilidad especial por Colombia y América Latina. Conoce a Yezid Acosta y la historia detrás de la colección.',
    title: 'Acerca de Notofilia',
    kicker: 'Sobre Notofilia',
    titleLines: ['Mirar', 'el dinero', 'dos veces'],
    lead:
      'La mayoría de la gente toca dinero todos los días y nunca lo mira de verdad. Este sitio es para los que sí lo hacen —o para los que quieren empezar.',
    theSite: 'El sitio',
    site: [
      'Notofilia es un sitio sobre billetes y monedas —en español y en inglés— con una debilidad especial por Colombia y América Latina, cuya historia del papel moneda no recibe ni de cerca la atención que merece.',
      'Vas a encontrar un catálogo de piezas de mi colección personal con buenas fotos y las historias detrás de cada una, un glosario bilingüe, y artículos sobre los bancos que imprimieron estos billetes, los artistas que los grabaron y las épocas que les tocó vivir.',
    ],
    aboutMe: 'Sobre mí',
    bioLead: 'Alguien me pasó un billete, y ahí impresa estaba la fecha de mi cumpleaños.',
    bio: [
      'Me quedé asombrado —tenía en las manos algo que se había hecho cuando yo nací, algo que llevaba en el mundo exactamente el mismo tiempo que yo. Súmale a eso un niño que ya amaba la historia, y fue la combinación perfecta. Colecciono billetes desde que tenía unos cinco años.',
      'Tantos años después sigo en esto, ahora sobre todo detrás de billetes colombianos, incluyendo algunas piezas del siglo XIX de bancos que dejaron de existir hace más de cien años —el Banco de Río Hacha, el Banco Hipotecario— además de monedas que se remontan aún más atrás.',
    ],
    closing: 'Gracias por pasar por aquí. Ojalá algo de lo que encuentres te haga mirar dos veces.',
    brandLabel: 'mi propia marca',
    bioBrandBefore:
      '¿El resto de mi vida? Trabajo en tecnología. Soy esposo y papá de dos hermosos gemelos. Y disfruto de un buen cigarro —tanto que tengo ',
    bioBrandAfter: '.',
    personName: 'Yezid Acosta',
    portraitAlt: 'Retrato de Yezid Acosta',
    collectorSince: 'Coleccionista desde los cinco años',
    statsBanknotes: 'Billetes',
    statsCoins: 'Monedas',
    statsCountries: 'Países',
    statsFichas: 'Fichas',
    collectionCta: 'Ver la colección',
    contactCta: 'Escribirme →',
    pullQuote:
      'Cada una de estas piezas fue dinero alguna vez. Pasó por mercados, bolsillos, guerras y malas economías, y sobrevivió lo suficiente para llegar a mis manos. ',
    pullQuoteAccent: 'Esa es la parte que casi todo el mundo pasa por alto: la historia.',
  },
  en: {
    nav: 'About Notofilia',
    home: 'Home',
    breadcrumb: 'Breadcrumb',
    metaTitle: 'About Notofilia · Yezid Acosta',
    metaDescription:
      'Notofilia is a site about banknotes and coins — in Spanish and English — with a soft spot for Colombia and Latin America. Meet Yezid Acosta and the history behind the collection.',
    title: 'About Notofilia',
    kicker: 'About Notofilia',
    titleLines: ['Look', 'at money', 'twice'],
    lead:
      'Most people touch money every day and never really look at it. This site is for the ones who do — or who want to start.',
    theSite: 'The site',
    site: [
      'Notofilia is a site about banknotes and coins — in Spanish and English — with a soft spot for Colombia and Latin America, whose paper money history doesn’t get nearly the attention it deserves.',
      'You’ll find a catalogue of pieces from my personal collection with good photos and the stories behind each one, a bilingual glossary, and articles about the banks that printed these notes, the artists who engraved them, and the times they lived through.',
    ],
    aboutMe: 'About me',
    bioLead: 'Someone handed me a banknote, and printed right there on it was my birthday.',
    bio: [
      'I stood there in awe — I was holding something that had been made when I was born, something that had been out in the world exactly as long as I had. Add that to a kid who already loved history, and it was a perfect match. I’ve been collecting banknotes since I was about five years old.',
      'All these years later I’m still at it, mostly chasing Colombian banknotes now, including some 19th-century pieces from banks that stopped existing more than a century ago — the Banco de Río Hacha, the Banco Hipotecario — plus coins that go back even further.',
    ],
    closing: 'Thanks for stopping by. I hope something here makes you look twice.',
    brandLabel: 'my own brand',
    bioBrandBefore:
      'The rest of my life? I work in technology, and I once wrote a children’s book. But some part of me is still that five-year-old, holding a banknote up to the light.',
    bioBrandAfter: '',
    personName: 'Yezid Acosta',
    portraitAlt: 'Portrait of Yezid Acosta',
    collectorSince: 'Collector since the age of five',
    statsBanknotes: 'Banknotes',
    statsCoins: 'Coins',
    statsCountries: 'Countries',
    statsFichas: 'Catalog entries',
    collectionCta: 'View the collection',
    contactCta: 'Write to me →',
    pullQuote:
      'Every one of these pieces was money once. It passed through markets and pockets and wars and bad economies, and it survived long enough to end up in my hands. ',
    pullQuoteAccent: 'That’s the part most people miss: the history.',
  },
} as const;

export function aboutPath(locale: AboutLocale): string {
  return locale === 'en' ? `/en${ABOUT_PATH_EN}` : ABOUT_PATH;
}

export const aboutDedicatedSlugs = [
  ABOUT_PATH.replace(/^\/|\/$/g, ''),
  ABOUT_PATH_EN.replace(/^\/|\/$/g, ''),
] as const;
