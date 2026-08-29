import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  createSearchEngine,
  inferPieceFlags,
  isIdentityQuery,
  matchesFilter,
  normalizeIdentity,
  parseSort,
  runSearch,
  stripHtml,
} from './search.ts';

const fixtures = [
  {
    id: 'piece:ph-1-peso:es',
    kind: 'piece',
    href: '/coleccion/filipinas/1-peso/',
    title: '1 peso · Victory Series No. 66',
    dek: 'Certificado del Tesoro, serial F70618009.',
    pick: 'P#94a',
    serial: 'F70618009',
    serialNormalized: 'F70618009',
    cert: '',
    flags: ['single'],
    searchText: '1 peso Victory F70618009 P94A Filipinas',
  },
  {
    id: 'piece:co-2000-pesos-oro-1983:es',
    kind: 'piece',
    href: '/coleccion/colombia/2000-pesos-oro-1983/',
    title: '2.000 pesos oro · 1983',
    dek: 'Espécimen Thomas De La Rue, SPECIMEN Nº 030.',
    pick: 'P# 430as',
    serial: '00000000 · SPECIMEN Nº 030',
    serialNormalized: '00000000SPECIMEN030',
    cert: '',
    flags: ['single', 'specimen', 'graded'],
    searchText: '2000 pesos oro specimen Colombia P430AS',
  },
  {
    id: 'blog:certificacion:es',
    kind: 'blog',
    href: '/blog/mejores-empresas-certificacion-monedas-billetes/',
    title: 'Mejores empresas de certificación',
    dek: 'PMG, PCGS y NGC.',
    pick: '',
    serial: '',
    serialNormalized: '',
    cert: '',
    flags: ['guide'],
    searchText: 'certificacion PMG PCGS NGC colombiano',
  },
  {
    id: 'glossary:foxing:es',
    kind: 'glossary',
    href: '/glosario/foxing/',
    title: 'Foxing',
    dek: 'Manchas pardas de envejecimiento en el papel moneda.',
    pick: '',
    serial: '',
    serialNormalized: '',
    cert: '',
    flags: ['glossary'],
    searchText: 'foxing manchas papel',
  },
];

describe('collection search helpers', () => {
  const engine = createSearchEngine(fixtures);

  it('normalizes serials without dropping leading zeros', () => {
    assert.equal(normalizeIdentity('Y 00000'), 'Y00000');
    assert.equal(normalizeIdentity('I 12527403'), 'I12527403');
    assert.equal(normalizeIdentity('P# 407f'), 'P407F');
    assert.equal(isIdentityQuery('F70618009'), true);
    assert.equal(isIdentityQuery('colombia'), false);
  });

  it('classifies proofs, specimens, remainders, and slabs from short fields', () => {
    assert.deepEqual(
      inferPieceFlags({
        kind: 'banknote',
        id: '5-pesos-banco-hipotecario-1881',
        pick: 'P# S511p1',
        serial: 'Y 00000',
        grade: 'Anverso PMG 61 Uncirculated',
        kicker: 'Colombia · Banca libre · Pruebas ABNC',
        signatures: 'Sin firmas (pruebas de imprenta)',
      }).sort(),
      ['graded', 'proof', 'single'],
    );
    assert.ok(
      inferPieceFlags({
        kind: 'banknote',
        id: '2000-pesos-oro-1983',
        pick: 'P# 430as',
        serial: '00000000 · SPECIMEN Nº 030',
        grade: 'PCGS 64 Very Choice New',
        kicker: 'Espécimen TDLR',
      }).includes('specimen'),
    );
    assert.ok(
      inferPieceFlags({
        kind: 'banknote',
        id: '1-dolar-state-bank-new-brunswick',
        serial: '9890 · B',
        grade: 'Remainder, unslabbed (private collection)',
        signatures: 'Manuscript cashier; president blank (remainder)',
      }).includes('remainder'),
    );
  });

  it('ranks a serial hit and filters specimens without a price sort', () => {
    const serialHits = runSearch(fixtures, engine, 'F70618009', 'all', 'relevance');
    assert.equal(serialHits[0]?.serialNormalized, 'F70618009');

    const specimens = runSearch(fixtures, engine, '', 'specimen', 'title-asc');
    assert.equal(specimens.length, 1);
    assert.equal(specimens[0].id, 'piece:co-2000-pesos-oro-1983:es');

    const colombiano = runSearch(fixtures, engine, 'colombiano', 'guide', 'relevance');
    assert.ok(colombiano.every((hit) => hit.kind === 'blog'));

    const glossary = runSearch(fixtures, engine, 'foxing', 'glossary', 'relevance');
    assert.equal(glossary[0]?.kind, 'glossary');

    assert.equal(parseSort('price-desc'), 'relevance');
    assert.equal(matchesFilter(fixtures[0], 'single'), true);
    assert.equal(runSearch(fixtures, engine, '', 'group', 'title-asc').length, 0);
    assert.match(stripHtml('<p>Hola <strong>mundo</strong></p>'), /Hola mundo/);
  });
});
