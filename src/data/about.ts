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
  },
} as const;

export function aboutPath(locale: AboutLocale): string {
  return localizePath(ABOUT_PATH, locale);
}

export const aboutDedicatedSlugs = [
  ABOUT_PATH.replace(/^\/|\/$/g, ''),
  ABOUT_PATH_EN.replace(/^\/|\/$/g, ''),
] as const;
