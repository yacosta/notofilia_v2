import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { breadcrumbList } from './json-ld.ts';

describe('collection breadcrumb JSON-LD', () => {
  it('keeps parent trails such as China → world polymer', () => {
    const list = breadcrumbList(
      [
        { name: 'Home', path: '/' },
        { name: 'World polymer', path: '/coleccion/polimero-mundial/' },
        { name: 'China', path: '/coleccion/china/' },
      ],
      'en',
    );

    assert.equal(list['@type'], 'BreadcrumbList');
    assert.deepEqual(
      list.itemListElement.map((item) => ({ name: item.name, item: item.item, position: item.position })),
      [
        { name: 'Home', item: 'https://notofilia.com/en/', position: 1 },
        { name: 'World polymer', item: 'https://notofilia.com/en/collection/world-polymer/', position: 2 },
        { name: 'China', item: 'https://notofilia.com/en/collection/china/', position: 3 },
      ],
    );
  });
});
