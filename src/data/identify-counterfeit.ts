import { localizePath, type Locale } from '../lib/locale-paths';

export const IDENTIFY_COUNTERFEIT_PATH = '/identificar/billetes-falsos/';

/** First commit of this page. */
export const IDENTIFY_COUNTERFEIT_PUBLISHED = '2026-10-01';
/** Visible revision date for the answer-first rewrite. */
export const IDENTIFY_COUNTERFEIT_MODIFIED = '2026-11-15';

export function identifyCounterfeitPath(locale: Locale): string {
  return localizePath(IDENTIFY_COUNTERFEIT_PATH, locale);
}

export const identifyCounterfeitCopy = {
  es: {
    metaTitle: 'Cómo identificar un billete falso: guía paso a paso | Notofilia',
    metaDescription:
      'Lista de comprobación para contrastar un billete: papel, filigrana, hilo, intaglio, tinta OVI y serial. Esta página no autentica ni tasa.',
    title: 'Cómo identificar un billete falso',
    dek: 'Una lista de comprobación para mirar el papel, no una tasación. Compare con una ficha publicada o use Identificar por foto. Notofilia no autentica piezas ajenas ni publica precios.',
    home: 'Inicio',
    identifyNav: 'Identificar',
    nav: 'Billetes falsos',
    breadcrumb: 'Migas de pan',
    directAnswer:
      'Para identificar un billete falso, toque el papel y busque el relieve del intaglio. Contra la luz, mire la filigrana y el hilo de seguridad. Incline el billete para ver si la tinta OVI cambia de color. Compare el serial con el tipo. Una foto no basta, y esta página no autentica ni tasa.',
    publishedLabel: 'Publicado',
    modifiedLabel: 'Última revisión',
    datePublished: IDENTIFY_COUNTERFEIT_PUBLISHED,
    dateModified: IDENTIFY_COUNTERFEIT_MODIFIED,
    datePublishedDisplay: '1 de octubre de 2026',
    dateModifiedDisplay: '15 de noviembre de 2026',
    reviewedBy: 'Revisado por',
    reviewer: 'Yezid Acosta',
    intro:
      'Nadie identifica un falso solo con una foto de celular. Sirve mirar el sustrato, el relieve, las tintas variables y el serial contra un tipo conocido. Esta página resume ese orden; la guía larga del blog desarrolla cada punto.',
    stepsTitle: '¿En qué orden se comprueba un billete?',
    steps: [
      {
        title: '¿Cómo se comprueba el papel y la filigrana?',
        body: 'El papel de algodón no brilla como una fotocopia. Contra luz, la filigrana debe coincidir con el tipo: retrato, valor o motivo del catálogo, no un sombreado impreso.',
      },
      {
        title: '¿Cómo se comprueba el hilo, la ventana y la tinta OVI?',
        body: 'El hilo de seguridad, la ventana en polímero y la tinta ópticamente variable cambian de color o de visibilidad al inclinar. Un falso suele imprimir el efecto en plano.',
      },
      {
        title: '¿Cómo se comprueba el intaglio y el serial?',
        body: 'El grabado en hueco se siente. El serial debe coincidir en tipografía y color con el tipo; un serial capicúa o bajo no prueba autenticidad. Si el ejemplar está en esta colección, abra la ficha y compare.',
      },
    ],
    sourcesTitle: 'Fuentes oficiales',
    sourcesLead:
      'Estas páginas oficiales describen las mismas comprobaciones —filigrana a contraluz, hilo, tinta que cambia de color, tocar e inclinar—. No sustituyen la ficha del ejemplar.',
    sources: [
      {
        name: 'Banco de la República — Elementos de seguridad de los nuevos billetes',
        href: 'https://www.banrep.gov.co/es/video-conozca-elementos-seguridad-nuevos-billetes-colombianos',
        note: 'El Banco presenta ahí los elementos de seguridad de los billetes de la nueva familia.',
      },
      {
        name: 'U.S. Currency Education Program — Security features',
        href: 'https://www.uscurrency.gov/educational-materials/training-course/security',
        note: 'Tocar el papel, inclinar el billete para la tinta que cambia de color, y mirar a contraluz la filigrana y el hilo.',
      },
      {
        name: 'European Central Bank — Security features',
        href: 'https://www.ecb.europa.eu/euro/banknotes/current/security/html/index.en.html',
        note: 'La página agrupa las comprobaciones en tocar, mirar e inclinar.',
      },
    ],
    exploreTitle: 'Siga explorando',
    toolLead:
      'Si tiene el anverso a la vista, la herramienta de identificación compara la foto con las piezas publicadas. No sustituye a un perito ni a PMG o PCGS.',
    toolCta: 'Identificar un billete por foto',
    blogCta: 'Guía para identificar billetes falsos',
    catalogueCta: '20.000 pesos de 2017 con tinta ópticamente variable',
    catalogueNote: 'El anón del anverso está impreso en tinta ópticamente variable.',
    cataloguePath: '/coleccion/colombia/20000-pesos-2017/',
    glossaryLead: 'Términos del glosario que aparecen en esta lista:',
    limitsTitle: 'Qué no hace esta página',
    limits:
      'No hay precios, ni un veredicto de autenticidad a distancia, ni un número de población inventado. Un slab de sótano no equivale a PMG o PCGS. Si duda de una pieza de alto valor, el camino es una casa de primer nivel, no una captura de pantalla.',
  },
  en: {
    metaTitle: 'How to spot a counterfeit note: a step-by-step guide | Notofilia',
    metaDescription:
      'A checklist for comparing a note: paper, watermark, thread, intaglio, OVI ink, and serial. This page does not authenticate or price a note.',
    title: 'How to spot a counterfeit note',
    dek: 'A paper checklist, not an appraisal. Compare with a published record or use photo Identify. Notofilia does not authenticate other people’s pieces or publish prices.',
    home: 'Home',
    identifyNav: 'Identify',
    nav: 'Counterfeit notes',
    breadcrumb: 'Breadcrumb',
    directAnswer:
      'To spot a counterfeit note, feel the paper and the raised intaglio. Hold it to the light and look for the watermark and the security thread. Tilt it to see whether the OVI ink shifts colour. Check the serial against the type. A photo is not enough, and this page does not authenticate or price a note.',
    publishedLabel: 'Published',
    modifiedLabel: 'Last reviewed',
    datePublished: IDENTIFY_COUNTERFEIT_PUBLISHED,
    dateModified: IDENTIFY_COUNTERFEIT_MODIFIED,
    datePublishedDisplay: '1 October 2026',
    dateModifiedDisplay: '15 November 2026',
    reviewedBy: 'Reviewed by',
    reviewer: 'Yezid Acosta',
    intro:
      'Nobody spots a fake from a phone photo alone. It helps to look at the substrate, relief, variable inks, and serial against a known type. This page is that order; the long blog guide develops each point.',
    stepsTitle: 'In what order do you check a note?',
    steps: [
      {
        title: 'How do you check the paper and the watermark?',
        body: 'Cotton paper does not glare like a photocopy. Against the light, the watermark should match the type: portrait, denomination, or catalogue device, not a printed shadow.',
      },
      {
        title: 'How do you check the thread, the window, and the OVI ink?',
        body: 'A security thread, a polymer window, and optically variable ink change colour or visibility when you tilt. A fake often prints the effect flat.',
      },
      {
        title: 'How do you check the intaglio and the serial?',
        body: 'Intaglio has relief you can feel. The serial should match the type in lettering and colour; a radar or low serial does not prove authenticity. If the example is in this collection, open the record and compare.',
      },
    ],
    sourcesTitle: 'Official sources',
    sourcesLead:
      'These official pages describe the same checks — a watermark held to the light, a security thread, colour-shifting ink, and feel, look, and tilt. They do not replace the record of a specific note.',
    sources: [
      {
        name: 'Banco de la República — Security elements of the new banknotes',
        href: 'https://www.banrep.gov.co/es/video-conozca-elementos-seguridad-nuevos-billetes-colombianos',
        note: 'The Bank presents the security elements of the new family of notes.',
      },
      {
        name: 'U.S. Currency Education Program — Security features',
        href: 'https://www.uscurrency.gov/educational-materials/training-course/security',
        note: 'Feel the paper, tilt the note for the colour-shifting ink, and check the watermark and thread against the light.',
      },
      {
        name: 'European Central Bank — Security features',
        href: 'https://www.ecb.europa.eu/euro/banknotes/current/security/html/index.en.html',
        note: 'The page groups the checks as feel, look, and tilt.',
      },
    ],
    exploreTitle: 'Keep exploring',
    toolLead:
      'If you have the face in view, the identify tool compares the photo with published pieces. It does not replace an expert or PMG or PCGS.',
    toolCta: 'Identify a note from a photo',
    blogCta: 'Guide to spotting counterfeit notes',
    catalogueCta: '2017 20,000 pesos with optically variable ink',
    catalogueNote: 'The sugar-apple on the face is printed in optically variable ink.',
    cataloguePath: '/coleccion/colombia/20000-pesos-2017/',
    glossaryLead: 'Glossary terms used in this checklist:',
    limitsTitle: 'What this page does not do',
    limits:
      'There are no prices, no remote authenticity verdict, and no invented population figure. A basement slab is not PMG or PCGS. If you doubt a high-value piece, the path is a first-tier house, not a screenshot.',
  },
} as const;
