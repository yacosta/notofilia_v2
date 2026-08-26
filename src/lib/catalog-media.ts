export const CATALOG_DISPLAY_PREFIX = '/images/catalog/';
export const CATALOG_DOWNLOAD_PREFIX = '/images/catalog-download/';

export function catalogDownloadSrc(src: string): string {
  if (src.startsWith(CATALOG_DISPLAY_PREFIX)) {
    return `${CATALOG_DOWNLOAD_PREFIX}${src.slice(CATALOG_DISPLAY_PREFIX.length)}`;
  }
  return src;
}

export function catalogDownloadFilename(src: string): string {
  const path = catalogDownloadSrc(src);
  const slash = path.lastIndexOf('/');
  return slash >= 0 ? path.slice(slash + 1) : path;
}

export function catalogDownloadFormat(src: string): 'JPEG' | 'PNG' | 'WebP' | 'image' {
  const ext = src.split('.').pop()?.toLowerCase();
  if (ext === 'jpg' || ext === 'jpeg') return 'JPEG';
  if (ext === 'png') return 'PNG';
  if (ext === 'webp') return 'WebP';
  return 'image';
}

export function catalogDownloadLabel(src: string, locale: 'es' | 'en'): string {
  const format = catalogDownloadFormat(src);
  return locale === 'en'
    ? `Download ${format}. A download will start.`
    : `Descargar ${format}. Se inicia una descarga.`;
}
