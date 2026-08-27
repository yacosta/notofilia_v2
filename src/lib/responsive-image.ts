const CARD_SUFFIX = '-card';

export function cardVariantSrc(src: string): string {
  return src.replace(/(\.[a-z0-9]+)$/i, `${CARD_SUFFIX}$1`);
}

export function cfImageSrc(src: string, width: number, quality = 75): string {
  const path = src.startsWith('http') ? new URL(src).pathname : src;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `/cdn-cgi/image/width=${width},quality=${quality},format=auto${normalized}`;
}

export function imageSrcset(src: string, widths: number[]): string {
  return widths.map((width) => `${cfImageSrc(src, width)} ${width}w`).join(', ');
}

export function cardImageAttrs(
  src: string,
  options: { widths?: number[]; sizes?: string; preferCard?: boolean } = {},
) {
  const file = options.preferCard ? cardVariantSrc(src) : src;
  const widths = options.widths ?? [400, 800, 1200];
  return {
    src: cfImageSrc(file, widths[0] ?? 800),
    srcset: imageSrcset(file, widths),
    sizes: options.sizes ?? '(max-width: 640px) 100vw, 28rem',
  };
}

export function heroImageAttrs(src: string) {
  return cardImageAttrs(src, {
    preferCard: false,
    widths: [800, 1280, 1920],
    sizes: '100vw',
  });
}
