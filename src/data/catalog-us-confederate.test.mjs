import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';

const data = readFileSync(new URL('./estados-unidos.ts', import.meta.url), 'utf8');
const holdings = readFileSync(new URL('./holdings.ts', import.meta.url), 'utf8');
const esPiece = readFileSync(
  new URL('../pages/coleccion/estados-unidos/100-dolares-confederados-1862/index.astro', import.meta.url),
  'utf8',
);
const enPiece = readFileSync(
  new URL('../pages/en/collection/united-states/100-dollars-confederate-1862/index.astro', import.meta.url),
  'utf8',
);

describe('US Confederate T-39 $100 of 26 August 1862', () => {
  it('records Pick 43 / T-39 serial 50830 without inventing a plate printage', () => {
    assert.match(data, /id: '100-dolares-confederados-1862'/);
    assert.match(data, /chapterId: 'us-confederado'/);
    assert.match(data, /pick: 'P#43 · T-39 · N#208004'/);
    assert.match(data, /serial: '50830 · Ae'/);
    assert.match(data, /J\. M\. Walton/);
    assert.match(data, /J\. W\. Bell/);
    assert.match(data, /J\.T\. Paterson, Columbia, S\.C\./);
    assert.match(data, /284\.000/);
    assert.match(data, /284,000/);
    assert.match(data, /Esta ficha no inventa una tirada por letra de plancha/);
    assert.match(data, /This record does not invent a printage by plate letter/);
    assert.match(data, /vapor sale en un penacho recto/);
    assert.match(data, /steam leaves in a straight plume/);
    assert.match(data, /ni el T-41 de Keatinge & Ball/);
    assert.match(data, /nor Keatinge & Ball’s T-41/);
    assert.doesNotMatch(
      data.slice(data.indexOf("id: '100-dolares-confederados-1862'"), data.indexOf("id: '5-dolares-confederados-1864'")),
      /cert_number:/,
    );
    assert.match(holdings, /us-csa-1862-100-50830/);
    assert.match(holdings, /id: 'us-csa-1862-100-50830', kind: 'banknote', country: 'US'/);
    assert.match(holdings, /us-csa-1862-100-t39-p43/);
  });

  it('keeps thin ES and EN piece routes on the United States note layout', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos/100-dolares-confederados-1862/', 'en'),
      '/en/collection/united-states/100-dollars-confederate-1862/',
    );
    assert.match(esPiece, /UnitedStatesNotePage/);
    assert.match(esPiece, /locale="es"/);
    assert.match(esPiece, /noteById\('100-dolares-confederados-1862'\)/);
    assert.match(enPiece, /UnitedStatesNotePage/);
    assert.match(enPiece, /locale="en"/);
    assert.match(data, /csa-1862-100-50830-composite\.jpg/);
    assert.match(data, /csa-1862-100-50830-front\.jpg/);
    assert.match(data, /csa-1862-100-50830-back\.jpg/);
  });

  it('names the holding in the Confederate chapter and the series inventory', () => {
    assert.match(data, /el 100 dólares T-39, serial 50830, de agosto de 1862/);
    assert.match(data, /the T-39 \$100, serial 50830, of August 1862/);
    assert.match(data, /el 100 dólares confederado T-39 de 1862, serial 50830/);
    assert.match(data, /the 1862 Confederate T-39 \$100, serial 50830/);
  });
});
