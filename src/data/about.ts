import { localizePath } from '../lib/locale-paths';

export type AboutLocale = 'es' | 'en';

export const ABOUT_PATH = '/acerca-de/';
export const ABOUT_PATH_EN = '/about/';

export const aboutCopy = {
  es: {
    nav: 'Sobre Notofilia',
    home: 'Inicio',
    breadcrumb: 'Migas de pan',
    metaTitle: 'Acerca de Notofilia · Yezid Acosta',
    metaDescription:
      'Notofilia es un sitio sobre billetes y monedas — en español y en inglés — con una debilidad especial por Colombia y América Latina. Conoce a Yezid Acosta y la historia detrás de la colección.',
    title: 'Acerca de Notofilia',
    intro: [
      'Notofilia es un sitio sobre billetes y monedas — en español y en inglés — con una debilidad especial por Colombia y América Latina, cuya historia del papel moneda no recibe ni de cerca la atención que merece.',
      'Por aquí vas a encontrar un catálogo de billetes y monedas de mi colección personal, con buenas fotos y las historias detrás de cada pieza, un glosario bilingüe para que los coleccionistas de ambos idiomas no hablemos en claves distintas, y artículos sobre la historia que está a la vista de todos y casi nadie ve: los bancos que imprimieron estos billetes, los artistas que los grabaron, las épocas que les tocó vivir.',
      'La mayoría de la gente toca dinero todos los días y nunca lo mira de verdad. Este sitio es para los que sí lo hacen — o para los que quieren empezar.',
    ],
    aboutMe: 'Sobre mí',
    closing: 'Gracias por pasar por aquí. Ojalá algo de lo que encuentres te haga mirar dos veces.',
    brandLabel: 'mi propia marca',
    bio: [
      'Soy <strong>Yezid Acosta</strong>. Colecciono billetes desde que tenía unos cinco años.',
      'Me acuerdo exactamente de lo que me atrapó. Alguien me pasó un billete, y ahí impresa estaba la fecha de mi cumpleaños. Me quedé asombrado — tenía en las manos algo que se había hecho cuando yo nací, algo que llevaba en el mundo exactamente el mismo tiempo que yo. Súmale a eso un niño que ya amaba la historia, y fue la combinación perfecta. Tantos años después sigo en esto, ahora sobre todo detrás de billetes colombianos, incluyendo algunas piezas del siglo XIX de bancos que dejaron de existir hace más de cien años — el Banco de Río Hacha, el Banco Hipotecario — además de monedas que se remontan aún más atrás.',
      'Y esto es lo que me sigue moviendo: cada una de estas piezas fue dinero alguna vez. Alguien se lo ganó, lo gastó, se preocupó por él. Pasó por mercados, bolsillos, guerras y malas economías, y de alguna manera sobrevivió lo suficiente para llegar a mis manos. Esa es la parte que casi todo el mundo pasa por alto cuando piensa en monedas y billetes: la historia. Notofilia es mi manera de compartirla, en español y en inglés, una pieza a la vez.',
    ],
    bioBrandBefore: '¿El resto de mi vida? Trabajo en tecnología. Soy esposo y papá de dos hermosos gemelos. Y disfruto de un buen cigarro — tanto que tengo ',
    bioBrandAfter: '.',
  },
  en: {
    nav: 'About Notofilia',
    home: 'Home',
    breadcrumb: 'Breadcrumb',
    metaTitle: 'About Notofilia · Yezid Acosta',
    metaDescription:
      'Notofilia is a site about banknotes and coins — in Spanish and English — with a soft spot for Colombia and Latin America. Meet Yezid Acosta and the history behind the collection.',
    title: 'About Notofilia',
    intro: [
      'Notofilia is a site about banknotes and coins — in Spanish and English — with a soft spot for Colombia and Latin America, whose paper money history doesn’t get nearly the attention it deserves.',
      'Around here you’ll find a catalogue of banknotes and coins from my personal collection, with good photos and the stories behind them, a bilingual glossary so collectors on both sides of the language don’t talk past each other, and articles about the history hiding in plain sight: the banks that printed these notes, the artists who engraved them, the times they lived through.',
      'Most people touch money every day and never really look at it. This site is for the ones who do — or who want to start.',
    ],
    aboutMe: 'About Me',
    closing: 'Thanks for stopping by. I hope something here makes you look twice.',
    brandLabel: 'my own brand',
    bio: [
      'I’m <strong>Yezid Acosta</strong>. I’ve been collecting banknotes since I was about five years old.',
      'I remember exactly what hooked me. Someone handed me a banknote, and printed right there on it was my birthday. I stood there in awe — I was holding something that had been made when I was born, something that had been out in the world exactly as long as I had. Add that to a kid who already loved history, and it was a perfect match. All these years later I’m still at it, mostly chasing Colombian banknotes now, including some 19th-century pieces from banks that stopped existing more than a century ago — the Banco de Río Hacha, the Banco Hipotecario — plus coins that go back even further.',
      'Here’s the thing that keeps me going: every one of these pieces was money once. Somebody earned it, spent it, worried about it. It passed through markets and pockets and wars and bad economies, and somehow it survived long enough to end up in my hands. That’s the part most people miss when they think about coins and banknotes — the history. Notofilia is my way of sharing it, in Spanish and in English, one piece at a time.',
    ],
    bioBrandBefore:
      'The rest of my life? I work in technology, and I once wrote a children’s book. But some part of me is still that five-year-old, holding a banknote up to the light.',
    bioBrandAfter: '',
  },
} as const;

export function aboutPath(locale: AboutLocale): string {
  return localizePath(ABOUT_PATH, locale);
}

export const aboutDedicatedSlugs = [
  ABOUT_PATH.replace(/^\/|\/$/g, ''),
  ABOUT_PATH_EN.replace(/^\/|\/$/g, ''),
] as const;
