import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  CATALOG_PIECE_GRID,
  CATALOG_PIECE_THUMB_SIZES,
  CATALOG_TYPE_GRID,
  CATALOG_TYPE_THUMB_SIZES,
} from './catalog-grid.ts';

describe('catalog piece grids', () => {
  it('uses three columns on large screens for holdings', () => {
    assert.match(CATALOG_PIECE_GRID, /lg:grid-cols-3/);
    assert.doesNotMatch(CATALOG_PIECE_GRID, /grid-cols-4|grid-cols-5/);
  });

  it('uses three columns for the visual type catalog', () => {
    assert.match(CATALOG_TYPE_GRID, /sm:grid-cols-3/);
    assert.doesNotMatch(CATALOG_TYPE_GRID, /grid-cols-4/);
  });

  it('sizes thumbs for a three-up row', () => {
    assert.match(CATALOG_PIECE_THUMB_SIZES, /33vw/);
    assert.match(CATALOG_TYPE_THUMB_SIZES, /33vw/);
  });
});
