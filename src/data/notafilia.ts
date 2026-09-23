import type { LocalizedText } from './catalog';
import { COLOMBIA_PATH } from './colombia';
import { ECUADOR_PATH } from './ecuador';
import { GUATEMALA_PATH } from './guatemala';
import { USA_PATH } from './estados-unidos';
import { SERIES_PATH } from './philippines-victory-66';
import { POLIMERO_MUNDIAL_PATH } from './polimero-mundial';
import { PUERTO_RICO_PATH } from './puerto-rico';

export const NOTAFILIA_PATH = '/coleccion/notafilia/';

export type NotafiliaCountry = {
  href: string;
  years: LocalizedText;
  title: LocalizedText;
  lead: LocalizedText;
};

export const notafiliaCountries: NotafiliaCountry[] = [
  {
    href: COLOMBIA_PATH,
    years: { es: 'desde 1811', en: 'from 1811' },
    title: { es: 'Colombia', en: 'Colombia' },
    lead: {
      es: 'Independencia, banca libre, Banco Nacional y el Banco de la República.',
      en: 'Independence, free banking, the Banco Nacional, and the Banco de la República.',
    },
  },
  {
    href: USA_PATH,
    years: { es: 'desde 1690', en: 'from 1690' },
    title: { es: 'Estados Unidos', en: 'United States' },
    lead: {
      es: 'Colonial, obsoleto, confederado, Demand Notes, fraccionarios, National Bank Notes, certificados, Reserva Federal y pop art.',
      en: 'Colonial, obsolete, Confederate, Demand Notes, fractionals, National Bank Notes, certificates, the Federal Reserve, and pop art.',
    },
  },
  {
    href: SERIES_PATH,
    years: { es: '1916–1944', en: '1916–1944' },
    title: { es: 'Filipinas', en: 'Philippines' },
    lead: {
      es: 'Gobierno Insular y Commonwealth: 5 pesos del Banco Nacional de 1916 y Serie Victory n.º 66.',
      en: 'Insular Government and Commonwealth: a 1916 National Bank 5-peso and Victory Series No. 66.',
    },
  },
  {
    href: PUERTO_RICO_PATH,
    years: { es: 's. XIX', en: '19th c.' },
    title: { es: 'Puerto Rico', en: 'Puerto Rico' },
    lead: {
      es: 'Emisiones coloniales y de transición del siglo XIX.',
      en: 'Colonial and nineteenth-century transition issues.',
    },
  },
  {
    href: ECUADOR_PATH,
    years: { es: '1884–2000', en: '1884–2000' },
    title: { es: 'Ecuador', en: 'Ecuador' },
    lead: {
      es: 'Del sucre de 1884 a la dolarización. Esta vitrina documenta el 1 sucre del Banco del Ecuador de 1901.',
      en: 'From the 1884 sucre to dollarization. This case documents a 1901 Banco del Ecuador 1-sucre.',
    },
  },
  {
    href: GUATEMALA_PATH,
    years: { es: '1834–1948', en: '1834–1948' },
    title: { es: 'Guatemala', en: 'Guatemala' },
    lead: {
      es: 'Impresión de billetes, banca privada y El Banco Colombiano (1878–1901).',
      en: 'Banknote printing, private banks of issue, and El Banco Colombiano (1878–1901).',
    },
  },
  {
    href: POLIMERO_MUNDIAL_PATH,
    years: { es: 'desde 1988', en: 'from 1988' },
    title: { es: 'Billetes de polímero mundial', en: 'World polymer banknotes' },
    lead: {
      es: 'Guardian, Safeguard e híbridos; hoy abre China con el 100 yuan del milenio.',
      en: 'Guardian, Safeguard, and hybrids; China opens the case with the millennium 100-yuan.',
    },
  },
];

export const notafiliaCopy = {
  es: {
    metaTitle: '¿Qué es la notafilia? | Notofilia',
    metaDescription:
      'El arte, la ciencia y la historia tras el coleccionismo y estudio del papel moneda: definición, historia, seguridad, variedades y la escala de conservación.',
    kicker: 'Guía esencial de notafilia',
    title: '¿Qué es la notafilia?',
    subtitle: 'El arte, la ciencia y la historia tras el coleccionismo y estudio del papel moneda.',
    definitionTitle: 'Definición fundamental',
    definition:
      'La notafilia es la disciplina especializada en la investigación, catalogación, conservación y coleccionismo de billetes de banco, papel moneda y documentos fiduciarios históricos emitidos tanto por entidades oficiales (bancos centrales y tesoros nacionales) como por entidades privadas (bancos comerciales, haciendas y corporaciones).',
    etymology:
      'Etimológicamente, el término procede del latín nota (billete, apunte, pagaré) y del griego clásico philos (φίλος, amor o afinidad). Aunque durante mucho tiempo se consideró simplemente un apéndice de la numismática tradicional, la notafilia se consolidó a mediados del siglo XX como una disciplina autónoma, con sus propios sistemas de graduación, catalogación universal (como el estándar Pick / SCWPM) e investigación técnica de grabado e imprenta.',
    compareTitle: 'Diferencia clave: numismática vs. notafilia',
    numismaticsKicker: 'Acuñación',
    numismaticsTitle: 'Numismática',
    numismaticsBody:
      'Estudia objetos monetarios metálicos: monedas acuñadas, medallas conmemorativas, fichas comerciales (tokens) y lingotes. Su foco está en el troquel, el metal, el peso y la pátina.',
    notaphilyKicker: 'Impresión',
    notaphilyTitle: 'Notafilia',
    notaphilyBody:
      'Estudia medios fiduciarios en sustratos flexibles (papel de trapo, polímero, lino): billetes, vales de caja, certificados de plata u oro, billetes de emergencia (notgeld) y bonos de guerra.',
    historyTitle: 'Breve recorrido histórico',
    history: [
      {
        title: 'El origen en la China imperial (siglos VII–XI)',
        body: 'Durante las dinastías Tang y Song nace el papel moneda como recibos de depósito de mercaderes para evitar el transporte de pesadas cuerdas de monedas de cobre. El primer billete oficial del mundo fue el Jiaozi.',
      },
      {
        title: 'Los orfebres europeos y el Stockholms Banco (1661)',
        body: 'En Europa, el primer banco en emitir billetes regulares fue el Stockholms Banco en Suecia, fundado por Johan Palmstruch.',
      },
      {
        title: 'La era de la banca libre (siglo XIX)',
        body: 'En América Latina y Estados Unidos floreció la emisión privada, donde decenas de bancos locales imprimían su propio papel moneda respaldado en metálico.',
      },
      {
        title: 'La transición fiduciaria y el polímero',
        body: 'Con el fin de la convertibilidad en oro en el siglo XX, los billetes pasaron a respaldarse en la soberanía económica de cada Estado, evolucionando hacia innovaciones de alta seguridad como el polímero desarrollado en Australia en 1988.',
      },
    ],
    elementsTitle: 'Elementos que analiza el notafílico',
    elements: [
      {
        title: 'Grabado e imprenta',
        body: 'La técnica de talla dulce o intaglio (relieve táctil), litografía offset y tipografía para numeración. Las firmas de cajeros y directores y el pie de imprenta (ABNCo, De La Rue, Waterlow, imprentas nacionales).',
      },
      {
        title: 'Dispositivos de seguridad',
        body: 'Marcas de agua en claroscuro, fibrillas fluorescentes, hilos de seguridad con microtexto, tintas ópticamente variables (OVI) y ventanas transparentes complejas en sustrato sintético.',
      },
      {
        title: 'Seriales y variedades',
        body: 'Billetes de sustitución (marcados con asterisco o letra especial), números bajos (p. ej., 00000001), radares o palíndromos, errores de guillotina (mariposa) y desalineación de tintas.',
      },
      {
        title: 'Especímenes y pruebas',
        body: 'Piezas de muestra perforadas o selladas como SPECIMEN o MUESTRA, pruebas de plancha monocromáticas (proofs) y ensayos de combinación cromática (color trials).',
      },
    ],
    gradingTitle: 'Escala de conservación (grading)',
    gradingCaption: 'Escala de conservación de papel moneda',
    gradingHeaders: ['Grado', 'Sigla', 'Descripción'],
    gradingRows: [
      ['Sin circular', 'UNC', 'Papel rígido e inmaculado, esquinas perfectas, sin pliegues ni decoloración.'],
      ['Casi sin circular', 'AU', 'Prácticamente perfecto; un único pliegue suave o roce leve en una esquina.'],
      ['Extremadamente bueno', 'XF / EF', 'Conserva la rigidez original; puede presentar hasta tres dobleces limpios.'],
      ['Muy bueno', 'VF', 'Signos evidentes de circulación, pérdida de brillo y textura, pero sin desgarros mayores.'],
      ['Bueno / Regular', 'F / VG / G', 'Desgaste pronunciado, suciedad, pequeños cortes marginales o perforaciones por manipulación.'],
    ],
    conservationNote:
      'Conservación recomendada: fundas de poliéster inerte tipo Mylar (libres de PVC y plastificantes).',
    standardLabel: 'Estándar Notofilia',
    holdingsTitle: 'El catálogo',
    holdingsIntro:
      'Una vitrina por tarjeta, de izquierda a derecha según se documente. Hoy abren Colombia, Estados Unidos, Filipinas, Puerto Rico, Ecuador, Guatemala y el polímero mundial.',
    viewCountry: 'Leer el catálogo',
    eraLabel: 'Época',
    visualCatalogLead: 'Todos los billetes documentados, de cualquier país, están en el catálogo visual. Se actualiza al añadir cada ficha.',
    visualCatalogLink: 'Catálogo visual de billetes',
    gioriLead: 'La tipología de las pruebas Giori —prensas, ensayos del BEP y especímenes europeos— tiene página propia. No añade un ejemplar al catálogo.',
    gioriLink: 'Moneda de prueba Giori',
    wwiiLead:
      'Hawái, el sello amarillo, la moneda militar aliada y la Operación Bernhard tienen vitrina propia. No añade un ejemplar al catálogo.',
    wwiiLink: 'Billetes de emergencia de la II Guerra Mundial',
  },
  en: {
    metaTitle: 'What is notaphily? | Notofilia',
    metaDescription:
      'The art, science, and history behind collecting and studying paper money: definition, history, security, varieties, and the conservation scale.',
    kicker: 'Essential guide to notaphily',
    title: 'What is notaphily?',
    subtitle: 'The art, science, and history behind collecting and studying paper money.',
    definitionTitle: 'Core definition',
    definition:
      'Notaphily is the specialized discipline of researching, cataloguing, conserving, and collecting banknotes, paper money, and historical fiduciary documents issued by official entities (central banks and national treasuries) and by private ones (commercial banks, estates, and corporations).',
    etymology:
      'Etymologically, the term comes from Latin nota (banknote, memorandum, promissory note) and classical Greek philos (φίλος, love or affinity). For a long time it was treated as a mere appendix of traditional numismatics; by the mid-twentieth century notaphily had become an autonomous field, with its own grading systems, a universal cataloguing standard (Pick / SCWPM), and technical research into engraving and printing.',
    compareTitle: 'The key difference: numismatics vs. notaphily',
    numismaticsKicker: 'Striking',
    numismaticsTitle: 'Numismatics',
    numismaticsBody:
      'It studies metallic monetary objects: struck coins, commemorative medals, trade tokens, and bullion. The focus is the die, the metal, the weight, and the patina.',
    notaphilyKicker: 'Printing',
    notaphilyTitle: 'Notaphily',
    notaphilyBody:
      'It studies fiduciary media on flexible substrates (rag paper, polymer, linen): banknotes, cashier’s notes, silver or gold certificates, emergency notes (notgeld), and war bonds.',
    historyTitle: 'A short historical path',
    history: [
      {
        title: 'Origins in imperial China (7th–11th centuries)',
        body: 'During the Tang and Song dynasties paper money appears as merchants’ deposit receipts, to avoid hauling heavy strings of copper cash. The world’s first official note was the Jiaozi.',
      },
      {
        title: 'European goldsmiths and Stockholms Banco (1661)',
        body: 'In Europe, the first bank to issue notes on a regular basis was Stockholms Banco in Sweden, founded by Johan Palmstruch.',
      },
      {
        title: 'The free-banking era (19th century)',
        body: 'In Latin America and the United States private issue flourished: dozens of local banks printed their own paper money, backed in specie.',
      },
      {
        title: 'The fiduciary turn and polymer',
        body: 'After gold convertibility ended in the twentieth century, notes came to rest on each state’s economic sovereignty, later evolving toward high-security innovations such as the polymer developed in Australia in 1988.',
      },
    ],
    elementsTitle: 'What the notaphilist examines',
    elements: [
      {
        title: 'Engraving and printing',
        body: 'Intaglio, or talla dulce (tactile relief), offset lithography, and typography for numbering. Teller and director signatures, and the imprint (ABNCo, De La Rue, Waterlow, national printers).',
      },
      {
        title: 'Security devices',
        body: 'Light-and-shade watermarks, fluorescent fibres, microtext security threads, optically variable inks (OVI), and complex transparent windows in synthetic substrate.',
      },
      {
        title: 'Serials and varieties',
        body: 'Replacement notes (marked with a star or a special letter), low numbers (e.g. 00000001), radars or palindromes, butterfly cutting errors, and ink misregistration.',
      },
      {
        title: 'Specimens and proofs',
        body: 'Sample pieces perforated or overprinted SPECIMEN or MUESTRA, monochrome plate proofs, and colour-combination trials.',
      },
    ],
    gradingTitle: 'Conservation scale (grading)',
    gradingCaption: 'Paper-money conservation scale',
    gradingHeaders: ['Grade', 'Abbrev.', 'Description'],
    gradingRows: [
      ['Uncirculated', 'UNC', 'Crisp, immaculate paper; perfect corners; no folds or fading.'],
      ['About Uncirculated', 'AU', 'Virtually perfect; a single light fold or a slight rub on one corner.'],
      ['Extremely Fine', 'XF / EF', 'Original crispness remains; up to three clean folds may be present.'],
      ['Very Fine', 'VF', 'Clear signs of circulation and loss of sheen and texture, but no major tears.'],
      ['Fine / Very Good / Good', 'F / VG / G', 'Heavy wear, soiling, small edge nicks, or handling pinholes.'],
    ],
    conservationNote:
      'Recommended storage: inert polyester sleeves of the Mylar type (free of PVC and plasticizers).',
    standardLabel: 'Notofilia standard',
    holdingsTitle: 'The catalog',
    holdingsIntro:
      'One case to a card, left to right as each is documented. Colombia, the United States, the Philippines, Puerto Rico, Ecuador, Guatemala, and world polymer open the row.',
    viewCountry: 'Read the catalog',
    eraLabel: 'Period',
    visualCatalogLead: 'Every documented banknote, from any country, is in the visual catalog. It updates as each record is added.',
    visualCatalogLink: 'Visual banknote catalog',
    gioriLead: 'Giori test notes — presses, BEP trials, and European specimens — have their own page. It does not add a holding to the catalog.',
    gioriLink: 'Giori test currency',
    wwiiLead:
      'Hawaii, the yellow seal, Allied military currency, and Operation Bernhard have their own case. It does not add a holding to the catalog.',
    wwiiLink: 'World War II emergency banknotes',
  },
} as const;

export function notafiliaPath(locale: 'es' | 'en'): string {
  return locale === 'en' ? '/en/collection/notaphily/' : NOTAFILIA_PATH;
}
