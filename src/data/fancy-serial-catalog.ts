import type { FancyCatalogId } from '../lib/fancy-serial-catalog';

export type FancyCatalogRow = {
  id: FancyCatalogId | 'name-day' | 'historical-date';
  /** Distinct serials in 00000000–99999999. Null means the list leaves it open. */
  count: number | null;
  examples: readonly string[];
  name: { es: string; en: string };
  definition: { es: string; en: string };
};

export const fancyCatalogCopy = {
  es: {
    title: 'Lista de patrones de ocho dígitos',
    intro:
      'Esta lista vale para un serial de ocho cifras, de 00000000 a 99999999. La cantidad es cuántos seriales distintos entran en esa clase. No es un precio ni un recuento de billetes vistos. Si escribe ocho dígitos, el clasificador marca las clases que coinciden. Una fecha se lee como día, mes y año.',
    pattern: 'Patrón',
    meaning: 'Qué es',
    examples: 'Ejemplos',
    count: 'En ocho dígitos',
    openCount: 'Indefinido',
    inList: 'En la lista de ocho dígitos',
    datePattern: 'Se lee como fecha: {day} de {month} de {year}.',
    months: [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre',
    ],
  },
  en: {
    title: 'Eight-digit pattern list',
    intro:
      'This list is for an eight-digit serial, from 00000000 to 99999999. The count is how many distinct serials fall in that class. It is not a price and it is not a count of notes seen. Type eight digits and the checker marks the classes that match. A date reads as day, month, and year.',
    pattern: 'Pattern',
    meaning: 'What it is',
    examples: 'Examples',
    count: 'In eight digits',
    openCount: 'Open',
    inList: 'On the eight-digit list',
    datePattern: 'Reads as a date: {month} {day}, {year}.',
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  },
} as const;

export const fancyCatalogRows: readonly FancyCatalogRow[] = [
  {
    id: 'broken-ladder-radar',
    count: 12,
    examples: ['67899876', '12344321'],
    name: { es: 'Escalera partida radar', en: 'Broken ladder radar' },
    definition: {
      es: 'Capicúa cuya primera mitad es una escalera de cuatro cifras sin cero (1234, 2345, 3456, 4567, 5678, 6789 o la bajada 9876, 8765, 7654, 6543, 5432, 4321). La otra mitad es el espejo.',
      en: 'A palindrome whose first half is a four-digit ladder with no zero (1234, 2345, 3456, 4567, 5678, 6789, or descending 9876, 8765, 7654, 6543, 5432, 4321). The other half is the mirror.',
    },
  },
  {
    id: 'partial-ladder',
    count: 12,
    examples: ['00001234', '00008765'],
    name: { es: 'Escalera parcial', en: 'Partial ladder' },
    definition: {
      es: 'Cuatro ceros y, después, una de esas doce escaleras de cuatro cifras.',
      en: 'Four zeros followed by one of those twelve four-digit ladders.',
    },
  },
  {
    id: 'pair-ladder',
    count: 14,
    examples: ['22334455', '77665544'],
    name: { es: 'Escalera par', en: 'Paired ladder' },
    definition: {
      es: 'Cuatro parejas seguidas que suben o bajan de uno en uno: de 00112233 a 66778899, y de 99887766 a 33221100.',
      en: 'Four consecutive pairs stepping up or down by one: from 00112233 to 66778899, and from 99887766 to 33221100.',
    },
  },
  {
    id: 'modular-ladder',
    count: 20,
    examples: ['65432109', '78901234'],
    name: { es: 'Escalera rota o partida', en: 'Broken ladder' },
    definition: {
      es: 'Cada cifra sigue a la anterior un paso arriba o un paso abajo, con vuelta entre 9 y 0. Son diez de subida y diez de bajada. Seis no cruzan el 9 y también son escalera perfecta: 01234567, 12345678, 23456789, 98765432, 87654321 y 76543210. Los ejemplos cruzan el 9.',
      en: 'Each digit is one step above or below the previous one, wrapping between 9 and 0. Ten ascend and ten descend. Six never cross 9 and are also perfect ladders: 01234567, 12345678, 23456789, 98765432, 87654321, and 76543210. The examples do cross 9.',
    },
  },
  {
    id: 'radar-special',
    count: 90,
    examples: ['88833888', '99955999'],
    name: { es: 'Radar especial', en: 'Special radar' },
    definition: {
      es: 'Seis cifras iguales y las dos del centro, iguales entre sí y distintas de las otras. Forma AAABBAAA.',
      en: 'Six of one digit and a different matched pair in the center. Form AAABBAAA.',
    },
  },
  {
    id: 'two-heads',
    count: 90,
    examples: ['26666662', '72222227'],
    name: { es: 'Dos cabezas o súper radar', en: 'Two heads / super radar' },
    definition: {
      es: 'La primera y la última coinciden, y las seis del medio son otra cifra. Forma ABBBBBBA.',
      en: 'The first and last digits match, and the six in the middle are a different digit. Form ABBBBBBA.',
    },
  },
  {
    id: 'quartet',
    count: 90,
    examples: ['77770000', '33336666'],
    name: { es: 'Cuarteto', en: 'Double quad' },
    definition: {
      es: 'Cuatro cifras iguales y otras cuatro iguales, distintas de las primeras. Forma AAAABBBB.',
      en: 'Four of one digit followed by four of another. Form AAAABBBB.',
    },
  },
  {
    id: 'two-digit-pair',
    count: 90,
    examples: ['15151515', '49494949'],
    name: { es: 'Par con dos dígitos distintos', en: 'Two-digit pair' },
    definition: {
      es: 'Un par de cifras distintas repetido cuatro veces. Forma ABABABAB.',
      en: 'A pair of different digits repeated four times. Form ABABABAB.',
    },
  },
  {
    id: 'partial-repeater',
    count: 90,
    examples: ['00007878', '00004545'],
    name: { es: 'Repetidor parcial', en: 'Partial repeater' },
    definition: {
      es: 'Cuatro ceros y después un par de cifras distintas repetido: 0000 más ABAB.',
      en: 'Four zeros followed by a repeated pair of different digits: 0000 plus ABAB.',
    },
  },
  {
    id: 'radar-repeater',
    count: 90,
    examples: ['12211221', '96699669'],
    name: { es: 'Radar repetidor', en: 'Radar repeater' },
    definition: {
      es: 'El bloque ABBA repetido. Es capicúa y repetidor, y no es un sólido. Forma ABBAABBA.',
      en: 'The block ABBA repeated. It is both a palindrome and a repeater, and it is not a solid. Form ABBAABBA.',
    },
  },
  {
    id: 'low-two',
    count: 90,
    examples: ['00000087', '00000015'],
    name: { es: 'Número bajo de dos dígitos', en: 'Two-digit low number' },
    definition: {
      es: 'Seis ceros y un valor de 10 a 99. Va de 00000010 a 00000099.',
      en: 'Six zeros and a value from 10 to 99. The run is 00000010 through 00000099.',
    },
  },
  {
    id: 'high-two',
    count: 90,
    examples: ['99999976', '99999914'],
    name: { es: 'Número alto de dos dígitos', en: 'Two-digit high number' },
    definition: {
      es: 'Seis nueves y un cierre de 00 a 89. Va de 99999900 a 99999989.',
      en: 'Six nines and an ending from 00 to 89. The run is 99999900 through 99999989.',
    },
  },
  {
    id: 'comet',
    count: 180,
    examples: ['67777777', '11111119'],
    name: { es: 'Cometa', en: 'Comet' },
    definition: {
      es: 'Siete cifras iguales y la distinta en un extremo, el primero o el último.',
      en: 'Seven of one digit, with the different digit at the first or last place.',
    },
  },
  {
    id: 'radar-binary-ternary',
    count: 180,
    examples: ['88988988', '37322373'],
    name: { es: 'Radar binario y terciario', en: 'Two- and three-digit radar' },
    definition: {
      es: 'Capicúa que no es súper radar ni radar especial. Con dos cifras, cambia un par simétrico interior de un sólido: posiciones 3 y 6 (88988988) o 2 y 7 (83888838). Esos son los 180. 37322373 es el caso de tres cifras con forma ABACCABA.',
      en: 'A palindrome that is not a super radar and not a special radar. With two digits, one interior mirror pair of a solid changes: places 3 and 6 (88988988) or 2 and 7 (83888838). Those are the 180. 37322373 is the three-digit form ABACCABA.',
    },
  },
  {
    id: 'binary-zeros-ones',
    count: 254,
    examples: ['01100111', '00101100'],
    name: { es: 'Binario de ceros y unos', en: 'Binary of zeros and ones' },
    definition: {
      es: 'Solo ceros y unos, y aparecen los dos. Quedan fuera 00000000 y 11111111.',
      en: 'Only zeros and ones, and both appear. 00000000 and 11111111 are left out.',
    },
  },
  {
    id: 'near-solid',
    count: 540,
    examples: ['99939999', '77771777'],
    name: { es: 'Lástima', en: 'Near solid' },
    definition: {
      es: 'Siete cifras iguales y la distinta en un puesto interior, no en los extremos. Los extremos son cometa.',
      en: 'Seven of one digit, with the different digit in an interior place, not at either end. The ends are comets.',
    },
  },
  {
    id: 'low-three',
    count: 900,
    examples: ['00000345', '00000781'],
    name: { es: 'Número bajo de tres dígitos', en: 'Three-digit low number' },
    definition: {
      es: 'Cinco ceros y un valor de 100 a 999. Va de 00000100 a 00000999.',
      en: 'Five zeros and a value from 100 to 999. The run is 00000100 through 00000999.',
    },
  },
  {
    id: 'high-three',
    count: 900,
    examples: ['99999634', '99999817'],
    name: { es: 'Número alto de tres dígitos', en: 'Three-digit high number' },
    definition: {
      es: 'Cinco nueves y un cierre de 000 a 899. Va de 99999000 a 99999899.',
      en: 'Five nines and an ending from 000 to 899. The run is 99999000 through 99999899.',
    },
  },
  {
    id: 'mixed-pairs',
    count: 5040,
    examples: ['88556633', '99006633'],
    name: { es: 'Sancocho de pachas', en: 'Mixed pairs' },
    definition: {
      es: 'Cuatro parejas seguidas, cada una con una cifra distinta. Forma AABBCCDD con A, B, C y D diferentes. La escalera par entra en esta cuenta y se nombra también con su clase.',
      en: 'Four consecutive pairs, each a different digit. Form AABBCCDD with A, B, C, and D all different. A paired ladder sits inside this count and is named with its own class as well.',
    },
  },
  {
    id: 'ordinary-radar',
    count: 9000,
    examples: ['58911985', '67422476'],
    name: { es: 'Radar común', en: 'Ordinary radar' },
    definition: {
      es: 'Capicúa que no empieza por cero. Hay 9.000, contando también los radares más cerrados de esta lista. Si el serial es escalera partida radar, radar especial, dos cabezas, radar repetidor o radar binario y terciario, se muestra esa clase.',
      en: 'A palindrome that does not start with zero. There are 9,000, including the tighter radars on this list. If the serial is a broken ladder radar, special radar, two heads, radar repeater, or two- and three-digit radar, that class is shown.',
    },
  },
  {
    id: 'repeater',
    count: 9900,
    examples: ['25762576', '81378137'],
    name: { es: 'Repetidor', en: 'Repeater' },
    definition: {
      es: 'La primera mitad se repite en la segunda. Quedan fuera el sólido y el par ABABABAB. Si el bloque es ABBA, la clase es radar repetidor.',
      en: 'The first half repeats as the second half. Solids and the ABABABAB pair are left out. If the block is ABBA, the class is radar repeater.',
    },
  },
  {
    id: 'one-shift',
    count: 9990,
    examples: ['95200952', '59311593'],
    name: { es: 'Simetría uno', en: 'One-shift symmetry' },
    definition: {
      es: 'La segunda mitad es la primera girada un puesto a la derecha. Forma ABCDDABC. El sólido no entra. 95200952 sale de 9520; 59311593 sale de 5931. Si además es radar especial o el radar de tres cifras, se nombra esa clase.',
      en: 'The second half is the first half rotated one place to the right. Form ABCDDABC. A solid is left out. 95200952 comes from 9520; 59311593 comes from 5931. If it is also a special radar or the three-digit radar, that class is named.',
    },
  },
  {
    id: 'other-binary',
    count: 11176,
    examples: ['22282888', '77577575'],
    name: { es: 'Demás binarios', en: 'Other two-digit serials' },
    definition: {
      es: 'Exactamente dos cifras distintas, y el par no es 0 y 1. Son 11.176. Si otra clase de esta lista ya nombra el serial, se muestra esa.',
      en: 'Exactly two different digits, and the pair is not 0 and 1. There are 11,176. If another class on this list already names the serial, that class is shown.',
    },
  },
  {
    id: 'six-of-a-kind',
    count: 22680,
    examples: ['59955555', '33331331'],
    name: { es: 'Casi lástima', en: 'Six of a kind' },
    definition: {
      es: 'Una cifra se repite seis veces y las otras dos no son esa cifra. Son 22.680. Si el serial también es dos cabezas, radar especial o radar de par interior, se nombra con esa clase.',
      en: 'One digit repeats six times and the other two are not that digit. There are 22,680. If the serial is also two heads, a special radar, or an interior-pair radar, that class is the one named.',
    },
  },
  {
    id: 'ternary',
    count: 236088,
    examples: ['46434336', '85557887'],
    name: { es: 'Terciario', en: 'Three-digit serial' },
    definition: {
      es: 'Usa exactamente tres cifras distintas, como 46434336 (4, 6 y 3) y 85557887 (8, 5 y 7). La lista anota 236.088 en esta fila. Si otra clase ya aplica, se muestra esa.',
      en: 'Uses exactly three different digits, as in 46434336 (4, 6, and 3) and 85557887 (8, 5, and 7). The list records 236,088 on this row. If another class already applies, that class is shown.',
    },
  },
  {
    id: 'eight-distinct',
    count: 1814400,
    examples: ['48267915', '74208619'],
    name: { es: 'Sancocho', en: 'Eight distinct digits' },
    definition: {
      es: 'Las ocho cifras son distintas. Son 1.814.400, incluidas las que también son escalera u otra clase. Si otra clase ya aplica, se muestra esa.',
      en: 'All eight digits are different. There are 1,814,400, including serials that are also a ladder or another class. If another class already applies, that class is shown.',
    },
  },
  {
    id: 'name-day',
    count: null,
    examples: ['01051946'],
    name: { es: 'Fechas onomásticas', en: 'Name days and birthdays' },
    definition: {
      es: 'Los ocho dígitos se leen como día, mes y año. 01051946 es el 1 de mayo de 1946. La lista deja abierta la cifra: un cumpleaños o un santoral no es un patrón cerrado.',
      en: 'The eight digits read as day, month, and year. 01051946 is 1 May 1946. The list leaves the count open: a birthday or name day is not a closed pattern.',
    },
  },
  {
    id: 'historical-date',
    count: null,
    examples: ['20071810'],
    name: { es: 'Fechas históricas', en: 'Historical dates' },
    definition: {
      es: 'La misma lectura de fecha, cuando el día es histórico. 20071810 es el 20 de julio de 1810, la independencia nacional. La lista no cierra el catálogo de fechas.',
      en: 'The same date reading, when the day is historical. 20071810 is 20 July 1810, national independence. The list does not close the catalogue of dates.',
    },
  },
];
