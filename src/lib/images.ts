/** Cloudflare Image Transformations + card helpers. */

export type ImageWidth = 400 | 640 | 800 | 1200 | 1600 | 2400;

/** Bump when series hero masters change so CDN/browser caches pick up new art at the same path. */
export const CATALOG_HERO_VERSION = '20260829';

export function catalogAssetSrc(src: string, version: string = CATALOG_HERO_VERSION): string {
  if (!version || !src.startsWith('/')) return src;
  const sep = src.includes('?') ? '&' : '?';
  return `${src}${sep}v=${version}`;
}

export function cfImage(
  src: string,
  options: { width: number; quality?: number; fit?: 'scale-down' | 'cover' } = { width: 800 },
): string {
  if (!src.startsWith('/') || src.startsWith('//') || src.startsWith('data:')) return src;
  // Astro dev has no Cloudflare Image Resizing endpoint; serve assets directly.
  if (import.meta.env?.DEV) return src;
  const parts = [`width=${options.width}`, 'format=auto', `quality=${options.quality ?? 75}`];
  if (options.fit) parts.push(`fit=${options.fit}`);
  return `/cdn-cgi/image/${parts.join(',')}${src}`;
}

export function imageSrcset(src: string, widths: ImageWidth[] = [400, 800, 1200]): string {
  return widths.map((width) => `${cfImage(src, { width })} ${width}w`).join(', ');
}

/** Prefer production-style `-card` siblings for editorial uploads; otherwise a transformed width. */
export function cardImageSrc(src: string): string {
  if (src.includes('/uploads/') && !src.includes('-card.')) {
    return src.replace(/(\.[a-z0-9]+)$/i, '-card$1');
  }
  return cfImage(src, { width: 800, fit: 'cover' });
}

/**
 * Srcset for `/uploads/` masters that already ship a `-card` sibling.
 * Preview Workers return Cloudflare error 1042 for `/cdn-cgi/image/…`; a 404
 * srcset hides the working `src`. Catalog heroes still use `imageSrcset`.
 */
export function editorialUploadSrcset(src: string, masterWidth = 1200): string {
  if (!src.includes('/uploads/')) return imageSrcset(src);
  const card = src.includes('-card.') ? src : src.replace(/(\.[a-z0-9]+)$/i, '-card$1');
  if (card === src) return `${src} 800w`;
  return `${card} 800w, ${src} ${masterWidth}w`;
}

export function heroSrcset(src: string): string {
  return imageSrcset(src, [640, 1200, 1600, 2400]);
}
