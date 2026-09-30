import type { Locale } from '../lib/locale-paths';

export const LAZARETTOS_NUMISMATICS_PATH = '/coleccion/numismatica/numismatica-de-los-lazaretos/';
export const LAZARETTOS_NUMISMATICS_PATH_EN = '/collection/numismatics/numismatics-of-the-lazarettos/';

export const LAZARETTOS_NUMISMATICS_HERO = {
  es: {
    src: '/uploads/monedas-de-lazaretos-hero.jpg',
    width: 2560,
    height: 1095,
  },
  en: {
    src: '/uploads/lazaretto-coins-of-colombia-hero.jpg',
    width: 2560,
    height: 1090,
  },
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
    modified: '2026-09-30',
    dateLabel: '23 de septiembre de 2026',
    revisedLabel: 'Actualizado el 30 de septiembre de 2026',
    heroAlt:
      'Ilustración de las monedas de lazareto en Colombia: mapa, Caño de Loro, Contratación, Agua de Dios, el Hospital San Lázaro, monedas con la cruz de San Lázaro y la leyenda «Aislamiento también fue esperanza».',
    holdingHeading: 'En la colección',
    holdingIntro:
      'Dos ejemplares publicados: el 2 centavos de cuproníquel de 1921 y un 50 centavos fechado 1931, con la cruz de los lazaretos. Esa fecha no está en KM, Hernández ni Restrepo. Las demás denominaciones siguen sin ficha.',
    holdingAria: 'Monedas de lazareto en la colección',
    holdingImageAlt:
      'Anverso y reverso del 2 centavos de lazareto de 1921: cruz con LAZARETO y fecha, y el valor 2 entre ramos.',
    viewCoin: 'Abrir la ficha',
    holdingCta: 'Abrir la ficha del 2 centavos de 1921',
    holdingCta1931: 'Abrir la ficha del 50 centavos de 1931',
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
    modified: '2026-09-30',
    dateLabel: 'September 23, 2026',
    revisedLabel: 'Updated 30 September 2026',
    heroAlt:
      'Panoramic illustration titled Lazaretto Coins of Colombia: a map, Caño de Loro (1784), Contratación (1835), Agua de Dios (1870), Hospital San Lázaro in Cartagena (1598), and coins with the cross of Saint Lazarus.',
    holdingHeading: 'In the collection',
    holdingIntro:
      'Two published pieces: the 1921 cupronickel 2 centavos and a 50 centavos dated 1931, with the lazaretto cross. That date is not in KM, Hernández, or Restrepo. The other denominations still have no record.',
    holdingAria: 'Lazaretto coins in the collection',
    holdingImageAlt:
      'Obverse and reverse of the 1921 lazaretto 2 centavos: the cross with LAZARETO and the date, and the value 2 inside a wreath.',
    viewCoin: 'Open the record',
    holdingCta: 'Open the 1921 2 centavos record',
    holdingCta1931: 'Open the 1931 50 centavos record',
    caseCta: 'Open the lazarettos case',
    numismaticaCta: 'Back to numismatics',
  },
} as const;

/** Composite of the 1921 2 centavos masters in catalog-src (1800×1200). */
export const LAZARETTO_1921_HOLDING_ID = '2-centavos-lazareto-1921' as const;
export const LAZARETTO_1931_HOLDING_ID = '50-centavos-lazareto-1931' as const;
export const LAZARETTO_1921_COMPOSITE = { width: 1800, height: 1200 } as const;

const lazarettoCardAlts = {
  es: {
    '2-centavos-lazareto-1921':
      'Anverso y reverso del 2 centavos de lazareto de 1921: cruz con LAZARETO y fecha, y el valor 2 entre ramos.',
    '50-centavos-lazareto-1931':
      'Anverso y reverso del 50 centavos de lazareto fechado 1931: cruz con LAZARETO gastado y fecha, y el valor 50 entre ramos.',
  },
  en: {
    '2-centavos-lazareto-1921':
      'Obverse and reverse of the 1921 lazaretto 2 centavos: the cross with LAZARETO and the date, and the value 2 inside a wreath.',
    '50-centavos-lazareto-1931':
      'Obverse and reverse of the lazaretto 50 centavos dated 1931: the cross with worn LAZARETO and the date, and the value 50 inside a wreath.',
  },
} as const;

export function lazarettoCardAlt(id: string, locale: Locale): string {
  const alt = (lazarettoCardAlts[locale] as Record<string, string>)[id];
  if (!alt) throw new Error(`Missing lazaretto card alt for ${id}`);
  return alt;
}

export function lazarettosNumismaticsPath(locale: Locale): string {
  return locale === 'en' ? `/en${LAZARETTOS_NUMISMATICS_PATH_EN}` : LAZARETTOS_NUMISMATICS_PATH;
}

export const lazarettosNumismaticsDedicatedSlugs = [
  LAZARETTOS_NUMISMATICS_PATH.replace(/^\/|\/$/g, ''),
  LAZARETTOS_NUMISMATICS_PATH_EN.replace(/^\/|\/$/g, ''),
] as const;
