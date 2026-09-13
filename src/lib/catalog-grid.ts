/**
 * Shared holdings grids for coins and banknotes.
 * One column on small screens, two from `sm`, three from `lg`.
 */
export const CATALOG_PIECE_GRID =
  'grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3';

/** Compact type-catalog tiles: two on small screens, three from `sm` up. */
export const CATALOG_TYPE_GRID = 'grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 sm:gap-4';

export const CATALOG_PIECE_THUMB_SIZES =
  '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw';

export const CATALOG_TYPE_THUMB_SIZES = '(min-width: 640px) 33vw, 50vw';
