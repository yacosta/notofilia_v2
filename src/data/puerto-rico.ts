import type { CatalogSource } from './catalog';

export const PUERTO_RICO_PATH = '/coleccion/puerto-rico/';

export const seriesSources: CatalogSource[] = [
  {
    href: 'https://en.wikipedia.org/wiki/Puerto_Rican_peso',
    es: 'Wikipedia — Peso puertorriqueño',
    en: 'Wikipedia — Puerto Rican peso',
    note: {
      es: 'Situado, papeletas de 1812–1815, Junta Central de 1869 y Billete de Canje de 1895.',
      en: 'The situado, 1812–1815 papeletas, the 1869 Central Republican Board, and the 1895 exchange note.',
    },
  },
  {
    href: 'http://www.banknote.ws/COLLECTION/countries/AME/PRI/PRI.htm',
    es: 'Bank Note Museum — Puerto Rico (Tesorería Nacional, Ministerio de Ultramar y bancos)',
    en: 'Bank Note Museum — Puerto Rico (National Treasury, Overseas Ministry, and banks)',
  },
  {
    href: 'https://revistas.ucm.es/index.php/DOCU/article/view/109519',
    es: 'Documenta & Instrumenta — Hallazgos sobre el papel moneda fraccionario de Puerto Rico (s. XIX)',
    en: 'Documenta & Instrumenta — New findings on nineteenth-century fractional paper money in Puerto Rico',
    note: {
      es: 'Documenta las papeletas de 1813–1814 autorizadas por Salvador Meléndez Bruna.',
      en: 'Documents the 1813–1814 papeletas authorized by Salvador Meléndez Bruna.',
    },
  },
  {
    href: 'https://www.coinbooks.org/v29/esylum_v29n07a27.html',
    es: 'The E-Sylum — Papel moneda puertorriqueño',
    en: 'The E-Sylum — Puerto Rican paper money',
    note: {
      es: 'Resume la crisis del situado, las papeletas de 1812–1813 y la amortización de Ramírez hacia 1816.',
      en: 'Summarizes the situado crisis, the 1812–1813 papeletas, and Ramírez’s amortization by 1816.',
    },
  },
];

export const seriesCopy = {
  es: {
    metaTitle: 'Puerto Rico · Emisiones coloniales y de transición | Notofilia',
    metaDescription:
      'Vitrina de papel moneda puertorriqueño del siglo XIX: emisiones coloniales y de transición. Las fichas se publicarán a medida que se documenten.',
    kicker: 'Puerto Rico · Siglo XIX',
    title: 'Emisiones coloniales y de transición',
    heroAlt:
      'Mapa vintage panorámico en relieve 3D de Puerto Rico sobre pergamino, con El Morro, el Capitolio, una laguna turquesa, un coquí, una rosa de los vientos y el título Puerto Rico',
    intro: [
      'Puerto Rico fue, en 1766, la primera provincia de ultramar española que imprimió papeletas de 8 reales. Durante siglos el situado mexicano sostuvo las arcas de la isla; cuando las independencias americanas cortaron ese subsidio, el gobernador Salvador Meléndez Bruna autorizó, el 31 de agosto de 1812, una moneda provincial de papel. En 1813 la emisión de papeletas llegó a 500.000 pesos. El intendente Alejandro Ramírez, llegado el 11 de febrero de 1813, las amortizó hacia 1816.',
      'El descrédito de aquel papel detuvo nuevas emisiones durante décadas. El papel volvió con la Guerra de los Diez Años. En Nueva York, la Junta Central Republicana de Cuba y Puerto Rico —presidida por José Morales Lemus, con el eco de Betances y Hostos— recaudó fondos para ambas islas. El 1 de junio de 1869 la República de Cuba en Armas autorizó un empréstito de veinte millones de pesos.',
      'A finales de siglo la isla seguía sin moneda propia: pesos mexicanos, dólares y contramarcas de 1884. El Real Decreto del 17 de agosto de 1895 creó el Billete de Canje de 1 peso (P#7): instrumento efímero para recoger la plata extranjera y acuñar en Madrid la moneda provincial. Tres años después del decreto, el Tratado de París cerró el capítulo colonial español.',
    ],
    holdingsTitle: 'Piezas de la colección',
    holdingsIntro:
      'Las fichas de cada pieza se publicarán como en Filipinas, a medida que se documenten.',
    sourcesTitle: 'Fuentes',
  },
  en: {
    metaTitle: 'Puerto Rico · Colonial and transition issues | Notofilia',
    metaDescription:
      'Case for nineteenth-century Puerto Rican paper money: colonial and transition issues. Individual note pages will be published as they are documented.',
    kicker: 'Puerto Rico · Nineteenth century',
    title: 'Colonial and transition issues',
    heroAlt:
      'Vintage panoramic 3D relief map of Puerto Rico on parchment, with El Morro, the Capitol, a turquoise lagoon, a coquí, a compass rose, and the title Puerto Rico',
    intro: [
      'In 1766 Puerto Rico became the first Spanish overseas province to print 8-real papeletas. For centuries the Mexican situado propped up the island treasury; when Spanish American independence cut that subsidy, Governor Salvador Meléndez Bruna authorized provincial paper on 31 August 1812. By 1813 the papeleta issue reached 500,000 pesos. Intendant Alejandro Ramírez, who arrived on 11 February 1813, amortized it by 1816.',
      'The disgrace of that paper stopped new issues for decades. Paper returned with the Ten Years’ War. In New York the Central Republican Board of Cuba and Puerto Rico — chaired by José Morales Lemus, with Betances and Hostos in the same orbit — raised funds for both islands. On 1 June 1869 the Republic of Cuba in Arms authorized a twenty-million-peso loan.',
      'At century’s end the island still lacked its own coin: Mexican pesos, dollars, and 1884 fleur-de-lis countermarks. The royal decree of 17 August 1895 created the 1-peso exchange note (P#7): a short-lived instrument to gather foreign silver and strike provincial coin in Madrid. Three years after the decree, the Treaty of Paris closed the Spanish colonial chapter.',
    ],
    holdingsTitle: 'Notes in the collection',
    holdingsIntro:
      'Individual note pages will be published as they are documented, as in the Philippines case.',
    sourcesTitle: 'Sources',
  },
} as const;

export function seriesPath(locale: 'es' | 'en'): string {
  return locale === 'en' ? '/en/collection/puerto-rico/' : PUERTO_RICO_PATH;
}

export const dedicatedCatalogPaths = new Set<string>(['coleccion/puerto-rico']);
