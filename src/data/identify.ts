import { localizePath, type Locale } from '../lib/locale-paths';

export const IDENTIFY_PATH = '/identificar/';

export function identifyPath(locale: Locale): string {
  return localizePath(IDENTIFY_PATH, locale);
}

export const identifyCopy = {
  es: {
    metaTitle: 'Identificar billete o moneda · Foto y catálogo | Notofilia',
    metaDescription:
      'Suba una foto del anverso y compare con las piezas publicadas en la colección virtual de Notofilia. Sin precios y nada a la venta.',
    title: 'Identificar una pieza',
    dek: 'Tome o suba una foto clara del anverso. Comparamos la imagen con el catálogo publicado y le mostramos hasta cinco coincidencias posibles. Esto no autentica la pieza ni estima un precio: Nada de esta colección está a la venta.',
    breadcrumb: 'Migas de pan',
    home: 'Inicio',
    nav: 'Identificar',
    howTitle: 'Cómo funciona',
    steps: [
      {
        title: 'Capture el anverso',
        body: 'Use la cámara o suba una foto nítida del frente, con buena luz y sin recortes agresivos.',
      },
      {
        title: 'Compare con la colección',
        body: 'El sitio calcula una huella visual y la ordena frente a los anversos y reversos ya publicados.',
      },
      {
        title: 'Revise las coincidencias',
        body: 'Abra la ficha de cada candidato. Un mismo Pick puede cubrir varios ejemplares; el serial identifica el objeto.',
      },
    ],
    captureTitle: 'Foto del anverso',
    captureHint: 'JPG, PNG o WebP. Evite reflejos del slab y fondos muy ocupados.',
    cameraLabel: 'Usar cámara',
    uploadLabel: 'Subir foto',
    clearLabel: 'Quitar foto',
    previewAlt: 'Vista previa de la foto cargada',
    analyzing: 'Comparando con la colección…',
    resultsTitle: 'Posibles coincidencias',
    resultsStatus: 'Resultados de la identificación',
    emptyIdle: 'Cuando cargue una foto, aquí aparecerán hasta cinco fichas ordenadas por similitud.',
    noResults:
      'No encontramos una coincidencia clara en la colección publicada. Pruebe otra foto o busque por Pick o serial.',
    resultCount: (count: number) => (count === 1 ? '1 coincidencia' : `${count} coincidencias`),
    scoreLabel: 'Similitud',
    faceFront: 'Anverso',
    faceBack: 'Reverso',
    kindBanknote: 'Billete',
    kindCoin: 'Moneda',
    viewPiece: 'Ver la ficha',
    searchLead: 'También puede buscar por texto en el catálogo.',
    searchLink: 'Ir a Buscar',
    counterfeitLead: 'Si duda del papel, no de la foto, hay una lista de comprobación aparte.',
    counterfeitLink: 'Cómo identificar un billete falso',
    disclaimer:
      'Herramienta de orientación visual sobre la colección Notofilia. No sustituye un catálogo de tipos, un perito ni una certificación. Sin precios.',
    needsJs: 'La identificación por foto necesita JavaScript. Mientras tanto puede usar Buscar.',
    errorRead: 'No se pudo leer esa imagen. Pruebe otro archivo.',
    errorHash: 'No se pudo analizar la imagen. Pruebe una foto más clara.',
    errorNetwork: 'No se pudo completar la comparación. Inténtelo de nuevo.',
  },
  en: {
    metaTitle: 'Identify a banknote or coin · Photo vs catalogue | Notofilia',
    metaDescription:
      'Upload a face photo and compare it with pieces published in the Notofilia virtual collection. No prices, and nothing is for sale.',
    title: 'Identify a piece',
    dek: 'Take or upload a clear photo of the face. We compare the image with the published catalogue and show up to five possible matches. This does not authenticate the piece or estimate a price: nothing in this collection is for sale.',
    breadcrumb: 'Breadcrumb',
    home: 'Home',
    nav: 'Identify',
    howTitle: 'How it works',
    steps: [
      {
        title: 'Capture the face',
        body: 'Use the camera or upload a sharp front photo, well lit and without aggressive cropping.',
      },
      {
        title: 'Compare with the collection',
        body: 'The site builds a visual fingerprint and ranks it against published faces and backs.',
      },
      {
        title: 'Review the matches',
        body: 'Open each candidate record. The same Pick can cover several examples; the serial identifies the object.',
      },
    ],
    captureTitle: 'Face photo',
    captureHint: 'JPG, PNG, or WebP. Avoid slab glare and busy backgrounds.',
    cameraLabel: 'Use camera',
    uploadLabel: 'Upload photo',
    clearLabel: 'Remove photo',
    previewAlt: 'Preview of the uploaded photo',
    analyzing: 'Comparing with the collection…',
    resultsTitle: 'Possible matches',
    resultsStatus: 'Identification results',
    emptyIdle: 'When you load a photo, up to five records will appear here, ranked by similarity.',
    noResults:
      'No clear match in the published collection. Try another photo, or search by Pick or serial.',
    resultCount: (count: number) => (count === 1 ? '1 match' : `${count} matches`),
    scoreLabel: 'Similarity',
    faceFront: 'Face',
    faceBack: 'Back',
    kindBanknote: 'Banknote',
    kindCoin: 'Coin',
    viewPiece: 'View record',
    searchLead: 'You can also search the catalogue by text.',
    searchLink: 'Go to Search',
    counterfeitLead: 'If the doubt is the paper, not the photo, there is a separate checklist.',
    counterfeitLink: 'How to spot a counterfeit note',
    disclaimer:
      'A visual orientation tool over the Notofilia collection. It does not replace a type catalogue, an expert opinion, or grading. No prices.',
    needsJs: 'Photo identification needs JavaScript. Meanwhile you can use Search.',
    errorRead: 'Could not read that image. Try another file.',
    errorHash: 'Could not analyze the image. Try a clearer photo.',
    errorNetwork: 'Could not finish the comparison. Please try again.',
  },
} as const;
