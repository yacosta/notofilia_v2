import { cfImage } from './images.ts';

const HERO_IMAGE = '/images/hero-slide.jpg';

/** Force AVIF: `format=auto` left a cached JPEG on the LCP URL (~40 KiB). */
const heroOpts = { format: 'avif' as const };

/** Homepage LCP `src`. Shared with the homepage preload so the browser fetches once. */
export const heroSrc = cfImage(HERO_IMAGE, { width: 1080, quality: 55, ...heroOpts });

/** Homepage LCP srcset. Must stay byte-identical to the `<link rel="preload">` `imagesrcset`. */
export const heroSrcset = [
  `${cfImage(HERO_IMAGE, { width: 480, quality: 50, ...heroOpts })} 480w`,
  `${cfImage(HERO_IMAGE, { width: 640, quality: 55, ...heroOpts })} 640w`,
  `${cfImage(HERO_IMAGE, { width: 1080, quality: 55, ...heroOpts })} 1080w`,
  `${cfImage(HERO_IMAGE, { width: 1600, quality: 60, ...heroOpts })} 1600w`,
  `${cfImage(HERO_IMAGE, { width: 2400, quality: 55, ...heroOpts })} 2400w`,
].join(', ');

export const heroSizes = '100vw';
