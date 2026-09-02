import { cfImage } from './images.ts';

const HERO_IMAGE = '/images/hero-slide.jpg';

/** Homepage LCP `src`. Shared with the homepage preload so the browser fetches once. */
export const heroSrc = cfImage(HERO_IMAGE, { width: 1080, quality: 70 });

/** Homepage LCP srcset. Must stay byte-identical to the `<link rel="preload">` `imagesrcset`. */
export const heroSrcset = [
  `${cfImage(HERO_IMAGE, { width: 640, quality: 70 })} 640w`,
  `${cfImage(HERO_IMAGE, { width: 1080, quality: 70 })} 1080w`,
  `${cfImage(HERO_IMAGE, { width: 1600, quality: 70 })} 1600w`,
  `${cfImage(HERO_IMAGE, { width: 2400, quality: 65 })} 2400w`,
].join(', ');

export const heroSizes = '100vw';
