import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';

const data = readFileSync(new URL('./estados-unidos-coinage.ts', import.meta.url), 'utf8');
const holdings = readFileSync(new URL('./holdings.ts', import.meta.url), 'utf8');
const notes = readFileSync(new URL('./estados-unidos.ts', import.meta.url), 'utf8');
const numismatica = readFileSync(new URL('./numismatica.ts', import.meta.url), 'utf8');
const seriesPage = readFileSync(
  new URL('../components/catalog/UnitedStatesSeriesPage.astro', import.meta.url),
  'utf8',
);
const esSeries = readFileSync(
  new URL('../pages/coleccion/estados-unidos-numismatica/index.astro', import.meta.url),
  'utf8',
);
const enSeries = readFileSync(
  new URL('../pages/en/collection/united-states-numismatics/index.astro', import.meta.url),
  'utf8',
);
const esCoin = readFileSync(
  new URL('../pages/coleccion/estados-unidos-numismatica/1-dolar-trump-1776-2026/index.astro', import.meta.url),
  'utf8',
);
const enCoin = readFileSync(
  new URL('../pages/en/collection/united-states-numismatics/1-dollar-trump-1776-2026/index.astro', import.meta.url),
  'utf8',
);
const esHt34Series = readFileSync(
  new URL('../pages/coleccion/estados-unidos-numismatica/fichas-hard-times/index.astro', import.meta.url),
  'utf8',
);
const enHt34Series = readFileSync(
  new URL('../pages/en/collection/united-states-numismatics/hard-times-tokens/index.astro', import.meta.url),
  'utf8',
);
const hardTimesEssay = readFileSync(new URL('./estados-unidos-hard-times.ts', import.meta.url), 'utf8');

describe('US Trump Semiquincentennial dollar', () => {
  it('registers one bilingual coinage series and one holding', () => {
    assert.match(data, /USA_COINAGE_PATH = '\/coleccion\/estados-unidos-numismatica\/'/);
    assert.equal(
      localizePath('/coleccion/estados-unidos-numismatica/', 'en'),
      '/en/collection/united-states-numismatics/',
    );
    assert.equal(
      localizePath('/coleccion/estados-unidos-numismatica/1-dolar-trump-1776-2026/', 'en'),
      '/en/collection/united-states-numismatics/1-dollar-trump-1776-2026/',
    );
    assert.match(data, /id: '1-dolar-trump-1776-2026'/);
    assert.match(data, /no_serial_reason:\n      'Struck circulating United States dollar/);
    assert.match(data, /Latón-manganeso \(88,5 % Cu, 6 % Zn, 3,5 % Mn, 2 % Ni\)/);
    assert.match(data, /Manganese brass \(88.5% Cu, 6% Zn, 3.5% Mn, 2% Ni\)/);
    assert.match(data, /Pub\. L\. 116-330 · 31 U\.S\.C\. § 5112\(y\)\(1\)\(C\)/);
    assert.match(data, /Filadelfia \(sin marca de ceca\)/);
    assert.match(data, /Never Surrender/);
    assert.match(data, /JULY 4th/);
    assert.match(data, /agotó esos rollos/);
    assert.match(data, /sold out those rolls/);
    assert.doesNotMatch(data, /serial: '/);
    assert.doesNotMatch(data, /cert_number:/);
    assert.doesNotMatch(data, /\$\d+\.\d{2}/);
    assert.match(holdings, /us-2026-1-dollar-trump-1776-2026/);
    assert.match(holdings, /id: 'us-2026-1-dollar-trump-1776-2026', kind: 'coin', country: 'US'/);
    assert.match(holdings, /us-renci-trump-never-surrender/);
  });

  it('keeps thin ES and EN routes on the coinage type layouts', () => {
    assert.match(esSeries, /UnitedStatesCoinagePage locale="es"/);
    assert.match(enSeries, /UnitedStatesCoinagePage locale="en"/);
    assert.match(esCoin, /UnitedStatesCoinPage locale="es"/);
    assert.match(enCoin, /UnitedStatesCoinPage locale="en"/);
    assert.match(data, /1-dolar-trump-1776-2026-composite\.jpg/);
    assert.match(data, /1-dolar-trump-1776-2026-front\.jpg/);
    assert.match(data, /1-dolar-trump-1776-2026-back\.jpg/);
  });

  it('cross-links paper and coinage and opens five numismatic houses', () => {
    assert.match(notes, /coinageLead: 'La moneda metálica de este país se documenta en la vitrina de numismática.'/);
    assert.match(notes, /coinageLink: 'Estados Unidos · Numismática'/);
    assert.match(seriesPage, /USA_COINAGE_PATH/);
    assert.match(seriesPage, /t\.coinageLead/);
    assert.doesNotMatch(seriesPage, /target="_blank"/);
    assert.match(numismatica, /Abren cinco casas/);
    assert.match(numismatica, /Five houses are open/);
    assert.match(numismatica, /href: USA_COINAGE_PATH/);
    assert.match(data, /notesLead: 'El papel moneda de este país se documenta en la vitrina de notafilia.'/);
  });
});

describe('US Hard Times HT-34 1837 token', () => {
  it('registers a bilingual no-serial holding distinct from HT-33', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos-numismatica/ht-34-1837-burro-tortuga/', 'en'),
      '/en/collection/united-states-numismatics/ht-34-1837-donkey-turtle/',
    );
    assert.match(data, /id: 'ht-34-1837-burro-tortuga'/);
    assert.match(data, /id: 'hard-times'/);
    assert.match(data, /la oreja hacia atrás parece tocar la I de IN/);
    assert.match(data, /FINANCIERING —así, no «financing»/);
    assert.match(data, /millercenter.org\/president\/vanburen\/domestic-affairs/);
    assert.match(data, /pcgs.com\/coinfacts\/coin\/1837-ae-token-ht-34/);
    assert.match(data, /60161-93126/);
    assert.doesNotMatch(data, /numisbids.com\/sale\/1846\/lot\/8572/);
    assert.match(data, /Ficha Hard Times de 1837 — HT-34 \/ Low-20/);
    assert.match(data, /STEPS, no «footsteps»/);
    assert.match(data, /Independent Treasury/);
    assert.match(data, /DeWitt CE-1838-4/);
    assert.match(data, /el 1838 no cambia la fecha 1837/);
    assert.match(data, /relatedLead:\n      'Otra pieza de la colección de Estados Unidos.'/);
    assert.match(data, /EXECUTIVE FINANCIERING/);
    assert.match(data, /EXECUTIVE EXPERIMENT/);
    assert.match(data, /no_serial_reason:\n      'Private Hard Times copper token/);
    assert.match(data, /Rulau-Fuld/);
    assert.doesNotMatch(data, /\$20 to \$50/);
    assert.match(holdings, /id: 'us-1837-ht-34-burro-tortuga', kind: 'coin', country: 'US'/);
    assert.match(holdings, /us-1837-ht-34-low-20/);
  });

  it('keeps a bilingual Hard Times tokens series page that links the HT-34 holding', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos-numismatica/fichas-hard-times/', 'en'),
      '/en/collection/united-states-numismatics/hard-times-tokens/',
    );
    assert.match(esHt34Series, /UnitedStatesHardTimesSeriesPage locale="es"/);
    assert.match(enHt34Series, /UnitedStatesHardTimesSeriesPage locale="en"/);
    assert.match(data, /USA_HARD_TIMES_PATH = '\/coleccion\/estados-unidos-numismatica\/fichas-hard-times\/'/);
    assert.match(hardTimesEssay, /hero-hard-times\.jpg/);
    assert.match(hardTimesEssay, /chapterId === 'hard-times'/);
    assert.match(hardTimesEssay, /HT-181/);
    assert.match(hardTimesEssay, /Specie Circular/);
    assert.match(hardTimesEssay, /NOT ONE CENT/);
    assert.match(hardTimesEssay, /Feuchtwanger/);
    assert.match(hardTimesEssay, /Independent Treasury Act/);
    assert.match(hardTimesEssay, /parodia, no una frase literal del inaugural/);
    assert.doesNotMatch(hardTimesEssay, /\$20 to \$50/);
    assert.doesNotMatch(hardTimesEssay, /Broward/);
  });
});

describe('US Hard Times HT-181 John J. Adams token', () => {
  it('registers a bilingual no-serial store card, distinct from the copper type’s other metals', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos-numismatica/ht-181-c1835-jabali-cerdas/', 'en'),
      '/en/collection/united-states-numismatics/ht-181-circa-1835-boar-bristles/',
    );
    assert.match(data, /id: 'ht-181-c1835-john-j-adams'/);
    assert.match(data, /Cash for Bristles/);
    assert.match(data, /W-MA-320-10a/);
    assert.match(data, /HT-181A/);
    assert.match(data, /HT-181B/);
    assert.match(data, /es: 'Cobre',\n      en: 'Copper',/);
    assert.match(data, /pcgs.com\/coinfacts\/coin\/1835-token-ht-181-john-j-adams-ma-bn\/77447/);
    assert.match(data, /no_serial_reason:\n      'Undated Hard Times merchant token/);
    assert.match(data, /77447/);
    assert.match(data, /60185-91189/);
    assert.doesNotMatch(data, /\$59/);
    assert.doesNotMatch(data, /89\.99/);
    assert.match(holdings, /id: 'us-c1835-ht-181-john-j-adams', kind: 'coin', country: 'US'/);
    assert.match(holdings, /us-c1835-ht-181-low-300/);
    assert.match(hardTimesEssay, /John J\. Adams/);
  });
});
