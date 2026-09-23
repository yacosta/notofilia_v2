import type { Locale } from '../lib/locale-paths';

export const LAZARETTOS_NUMISMATICS_PATH = '/coleccion/numismatica/numismatica-de-los-lazaretos/';
export const LAZARETTOS_NUMISMATICS_PATH_EN = '/collection/numismatics/numismatics-of-the-lazarettos/';

export const LAZARETTOS_NUMISMATICS_HERO = {
  src: '/uploads/monedas-de-lazaretos-hero.jpg',
  width: 1024,
  height: 438,
} as const;

export const lazarettosNumismaticsCopy = {
  es: {
    nav: 'Numismática de los Lazaretos',
    home: 'Inicio',
    numismatica: 'Numismática',
    breadcrumb: 'Migas de pan',
    metaTitle: 'Numismática de los Lazaretos',
    metaDescription:
      'Ensayo sobre Caño del Loro, Contratación y Agua de Dios, y sobre la coscoja, la moneda exclusiva del cordón sanitario (1901–1928).',
    title: 'Numismática de los Lazaretos',
    lead:
      'Un ensayo sobre los lazaretos de Caño del Loro, Contratación y Agua de Dios, y sobre la moneda que el Estado acuñó para que no saliera del cordón sanitario.',
    published: '2026-09-23',
    dateLabel: '23 de septiembre de 2026',
    heroAlt:
      'Ilustración de las monedas de lazareto en Colombia: mapa, Caño de Loro, Contratación, Agua de Dios, el Hospital San Lázaro, monedas con la cruz de San Lázaro y la leyenda «Aislamiento también fue esperanza».',
    caseCta: 'Abrir la vitrina de lazarettos',
    numismaticaCta: 'Volver a numismática',
  },
  en: {
    nav: 'Numismatics of the Lazarettos',
    home: 'Home',
    numismatica: 'Numismatics',
    breadcrumb: 'Breadcrumb',
    metaTitle: 'Numismatics of the Lazarettos',
    metaDescription:
      'Essay on Caño del Loro, Contratación, and Agua de Dios, and on the coscoja, the exclusive coin of the sanitary cordon (1901–1928).',
    title: 'Numismatics of the Lazarettos',
    lead:
      'An essay on the lazarettos of Caño del Loro, Contratación, and Agua de Dios, and on the coin the State struck so that it would not leave the sanitary cordon.',
    published: '2026-09-23',
    dateLabel: 'September 23, 2026',
    heroAlt:
      'Illustration of lazaretto coins in Colombia: a map, Caño de Loro, Contratación, Agua de Dios, Hospital San Lázaro, coins with the cross of Saint Lazarus, and the legend “Isolation was also hope.”',
    caseCta: 'Open the lazarettos case',
    numismaticaCta: 'Back to numismatics',
  },
} as const;

export function lazarettosNumismaticsPath(locale: Locale): string {
  return locale === 'en' ? `/en${LAZARETTOS_NUMISMATICS_PATH_EN}` : LAZARETTOS_NUMISMATICS_PATH;
}

export const lazarettosNumismaticsDedicatedSlugs = [
  LAZARETTOS_NUMISMATICS_PATH.replace(/^\/|\/$/g, ''),
  LAZARETTOS_NUMISMATICS_PATH_EN.replace(/^\/|\/$/g, ''),
] as const;
