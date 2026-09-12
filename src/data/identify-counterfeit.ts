import { localizePath, type Locale } from '../lib/locale-paths';

export const IDENTIFY_COUNTERFEIT_PATH = '/identificar/billetes-falsos/';

export function identifyCounterfeitPath(locale: Locale): string {
  return localizePath(IDENTIFY_COUNTERFEIT_PATH, locale);
}

export const identifyCounterfeitCopy = {
  es: {
    metaTitle: 'Cómo identificar un billete falso · Lista de comprobación | Notofilia',
    metaDescription:
      'Lista de comprobación para contrastar un billete con el catálogo: filigrana, hilo, intaglio, OVI y serial. No autentica ni tasa. Enlace a Identificar por foto.',
    title: 'Cómo identificar un billete falso',
    dek: 'Una lista de comprobación para mirar el papel, no una tasación. Compare con una ficha publicada o use Identificar por foto. Notofilia no autentica piezas ajenas ni publica precios.',
    home: 'Inicio',
    identifyNav: 'Identificar',
    nav: 'Billetes falsos',
    breadcrumb: 'Migas de pan',
    intro:
      'Nadie identifica un falso solo con una foto de celular. Sirve mirar el sustrato, el relieve, las tintas variables y el serial contra un tipo conocido. Esta página resume ese orden; la guía larga del blog desarrolla cada punto.',
    stepsTitle: 'Orden de comprobación',
    steps: [
      {
        title: 'Papel y filigrana',
        body: 'El papel de algodón no brilla como una fotocopia. Contra luz, la filigrana debe coincidir con el tipo: retrato, valor o motivo del catálogo, no un sombreado impreso.',
      },
      {
        title: 'Hilo, ventana y OVI',
        body: 'El hilo de seguridad, la ventana en polímero y la tinta ópticamente variable cambian de color o de visibilidad al inclinar. Un falso suele imprimir el efecto en plano.',
      },
      {
        title: 'Intaglio y serial',
        body: 'El grabado en hueco se siente. El serial debe coincidir en tipografía y color con el tipo; un serial capicúa o bajo no prueba autenticidad. Si el ejemplar está en esta colección, abra la ficha y compare.',
      },
    ],
    toolLead: 'Si tiene el anverso a la vista, la herramienta de identificación compara la foto con las piezas publicadas. No sustituye a un perito ni a PMG o PCGS.',
    toolCta: 'Ir a Identificar por foto',
    blogCta: 'Leer la guía completa',
    glossaryLead: 'Términos del glosario que aparecen en esta lista:',
    sourcesTitle: 'Qué no hace esta página',
    sources:
      'No hay precios, ni un veredicto de autenticidad a distancia, ni un número de población inventado. Un slab de sótano no equivale a PMG o PCGS. Si duda de una pieza de alto valor, el camino es una casa de primer nivel, no una captura de pantalla.',
  },
  en: {
    metaTitle: 'How to spot a counterfeit note · Checklist | Notofilia',
    metaDescription:
      'A checklist for comparing a note with the catalogue: watermark, thread, intaglio, OVI, and serial. It does not authenticate or price. Link to photo Identify.',
    title: 'How to spot a counterfeit note',
    dek: 'A paper checklist, not an appraisal. Compare with a published record or use photo Identify. Notofilia does not authenticate other people’s pieces or publish prices.',
    home: 'Home',
    identifyNav: 'Identify',
    nav: 'Counterfeit notes',
    breadcrumb: 'Breadcrumb',
    intro:
      'Nobody spots a fake from a phone photo alone. It helps to look at the substrate, relief, variable inks, and serial against a known type. This page is that order; the long blog guide develops each point.',
    stepsTitle: 'Check order',
    steps: [
      {
        title: 'Paper and watermark',
        body: 'Cotton paper does not glare like a photocopy. Against the light, the watermark should match the type: portrait, denomination, or catalogue device, not a printed shadow.',
      },
      {
        title: 'Thread, window, and OVI',
        body: 'A security thread, a polymer window, and optically variable ink change colour or visibility when you tilt. A fake often prints the effect flat.',
      },
      {
        title: 'Intaglio and serial',
        body: 'Intaglio has relief you can feel. The serial should match the type in lettering and colour; a radar or low serial does not prove authenticity. If the example is in this collection, open the record and compare.',
      },
    ],
    toolLead: 'If you have the face in view, the identify tool compares the photo with published pieces. It does not replace an expert or PMG or PCGS.',
    toolCta: 'Go to photo Identify',
    blogCta: 'Read the full guide',
    glossaryLead: 'Glossary terms used in this checklist:',
    sourcesTitle: 'What this page does not do',
    sources:
      'There are no prices, no remote authenticity verdict, and no invented population figure. A basement slab is not PMG or PCGS. If you doubt a high-value piece, the path is a first-tier house, not a screenshot.',
  },
} as const;
