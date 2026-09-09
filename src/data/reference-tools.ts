import { localizePath, type Locale } from '../lib/locale-paths';
import type { FancySerialClass } from '../lib/fancy-serial';

export const TOOLS_PATH = '/herramientas/';
export const FANCY_SERIAL_PATH = '/herramientas/numeracion-especial/';

export function toolsPath(locale: Locale): string {
  return localizePath(TOOLS_PATH, locale);
}

export function fancySerialPath(locale: Locale): string {
  return localizePath(FANCY_SERIAL_PATH, locale);
}

export const toolsHubCopy = {
  es: {
    metaTitle: 'Herramientas de referencia · Notofilia',
    metaDescription:
      'Herramientas de consulta de la colección virtual Notofilia: numeración especial e identificación por foto. Sin precios y nada a la venta.',
    title: 'Herramientas de referencia',
    dek: 'Consultas de orientación sobre la colección publicada. Clasifican un patrón o comparan una foto con las fichas; no autentican, no gradúan y no valoran. Nada de esta colección está a la venta.',
    home: 'Inicio',
    nav: 'Herramientas',
    checkerTitle: 'Numeración especial',
    checkerDek:
      'Clasifique un número de serie según patrones de coleccionista —bajo, capicúa, binario, sólido, escalera, repetidor— y vea si coincide con un ejemplar publicado.',
    checkerCta: 'Abrir el clasificador',
    identifyTitle: 'Identificar una pieza',
    identifyDek:
      'Tome o suba una foto del anverso y compare con las piezas ya publicadas en el catálogo.',
    identifyCta: 'Ir a Identificar',
  },
  en: {
    metaTitle: 'Reference tools · Notofilia',
    metaDescription:
      'Reference tools for the Notofilia virtual collection: fancy serial classification and photo identification. No prices, and nothing is for sale.',
    title: 'Reference tools',
    dek: 'Orientation tools over the published collection. They classify a pattern or compare a photo with the records; they do not authenticate, grade, or value a piece. Nothing in this collection is for sale.',
    home: 'Home',
    nav: 'Tools',
    checkerTitle: 'Fancy serial numbers',
    checkerDek:
      'Classify a serial number by collector patterns — low, radar, binary, solid, ladder, repeater — and see whether it matches a published example.',
    checkerCta: 'Open the checker',
    identifyTitle: 'Identify a piece',
    identifyDek: 'Take or upload a face photo and compare it with pieces already published in the catalogue.',
    identifyCta: 'Go to Identify',
  },
} as const;

export const fancySerialCopy = {
  es: {
    metaTitle: 'Numeración especial · Notofilia',
    metaDescription:
      'Clasifique el número de serie de un billete por patrón (bajo, capicúa, binario, sólido y otros) y compare con la colección Notofilia. Sin precios.',
    title: 'Clasificador de numeración especial',
    dek: 'Escriba el número de serie tal como aparece impreso. Mostramos el serial normalizado, las clases de patrón y, si coincide, el enlace a la ficha. Esto no autentica, no asigna grado ni estima un precio.',
    home: 'Inicio',
    hubNav: 'Herramientas',
    nav: 'Numeración especial',
    inputLabel: 'Número de serie',
    inputHint: 'Letras, dígitos y, si aplica, marca de reemplazo o estrella.',
    submit: 'Clasificar',
    examplesLabel: 'Ejemplos (solo ilustración)',
    resultsTitle: 'Clasificación',
    statusLabel: 'Resultado de la clasificación',
    emptyIdle: 'Escriba un serial y pulse Clasificar. También puede elegir un ejemplo.',
    emptyInput: 'Escriba un número de serie para clasificarlo.',
    noDigits: 'No encontramos dígitos en ese texto. Pruebe el serial impreso, con o sin letras de serie.',
    normalizedLabel: 'Serial normalizado',
    prefixLabel: 'Prefijo',
    suffixLabel: 'Sufijo',
    digitsLabel: 'Dígitos',
    classesLabel: 'Clases',
    ordinary:
      'No coincide con las clases de numeración especial ni con un número bajo (1–100 en el ancho impreso).',
    replacement:
      'Hay una marca de reemplazo o estrella. Es un distintivo de emisión, no una clase de numeración especial por sí sola.',
    glossaryLead: 'Términos del glosario',
    holdingTitle: 'En la colección',
    holdingLead: 'Este serial coincide con un ejemplar publicado.',
    holdingLink: 'Ver la ficha',
    noHolding: 'No hay un ejemplar publicado en Notofilia con este serial exacto.',
    examplesNote:
      'Los ejemplos ilustran patrones. Solo se enlaza una ficha cuando el serial coincide con un objeto de la colección.',
    disclaimer:
      'Clasificación de patrón sobre el texto que usted escribe. No autentica el billete, no lo gradúa y no lo valora. Notofilia es una colección privada; nada está a la venta.',
    needsJs:
      'La clasificación en esta página necesita JavaScript. Mientras tanto puede leer el término de numeración especial en el glosario.',
    needsJsLink: 'Numeración especial',
  },
  en: {
    metaTitle: 'Fancy serial checker · Notofilia',
    metaDescription:
      'Classify a banknote serial by pattern (low, radar, binary, solid, and others) and compare it with the Notofilia collection. No prices.',
    title: 'Fancy serial checker',
    dek: 'Enter the serial number as printed. We show the normalized serial, pattern classes, and a record link when it matches. This does not authenticate, grade, or estimate a price.',
    home: 'Home',
    hubNav: 'Tools',
    nav: 'Fancy serial checker',
    inputLabel: 'Serial number',
    inputHint: 'Letters, digits, and a replacement or star mark when it applies.',
    submit: 'Classify',
    examplesLabel: 'Examples (illustration only)',
    resultsTitle: 'Classification',
    statusLabel: 'Classification result',
    emptyIdle: 'Enter a serial and choose Classify. You can also pick an example.',
    emptyInput: 'Enter a serial number to classify it.',
    noDigits: 'No digits in that text. Try the printed serial, with or without series letters.',
    normalizedLabel: 'Normalized serial',
    prefixLabel: 'Prefix',
    suffixLabel: 'Suffix',
    digitsLabel: 'Digits',
    classesLabel: 'Classes',
    ordinary:
      'It does not match the fancy-serial classes or a low number (1–100 on the printed width).',
    replacement:
      'A replacement or star mark is present. That is an issue marker, not a fancy-serial class by itself.',
    glossaryLead: 'Glossary terms',
    holdingTitle: 'In the collection',
    holdingLead: 'This serial matches a published example.',
    holdingLink: 'View the record',
    noHolding: 'No published Notofilia example has this exact serial.',
    examplesNote:
      'The examples illustrate patterns. A record is linked only when the serial matches a collection object.',
    disclaimer:
      'Pattern classification of the text you enter. It does not authenticate, grade, or value the note. Notofilia is a private collection; nothing is for sale.',
    needsJs:
      'Classification on this page needs JavaScript. Meanwhile you can read the fancy serial term in the glossary.',
    needsJsLink: 'Fancy serial number',
  },
} as const;

export const fancySerialClassLabels: Record<Locale, Record<FancySerialClass, string>> = {
  es: {
    low: 'Numeración baja',
    radar: 'Numeración capicúa (radar)',
    binary: 'Numeración binaria',
    solid: 'Numeración sólida',
    'solid-plus': 'Sólida con una excepción',
    ladder: 'Numeración escalera',
    repeater: 'Numeración repetidor',
    bookend: 'Extremos coincidentes',
    million: 'Millón / redonda',
    rotator: 'Rotador (180°)',
  },
  en: {
    low: 'Low serial',
    radar: 'Radar / palindrome',
    binary: 'Binary serial',
    solid: 'Solid serial',
    'solid-plus': 'Solid-plus (one exception)',
    ladder: 'Ladder',
    repeater: 'Repeater',
    bookend: 'Bookend',
    million: 'Million / round',
    rotator: 'Rotator (180°)',
  },
};

export const fancySerialExamples = [
  { value: '10000001', label: '10000001' },
  { value: '12345678', label: '12345678' },
  { value: '00000042', label: '00000042' },
  { value: '88888888', label: '88888888' },
] as const;
