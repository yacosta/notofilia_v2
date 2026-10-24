/** Strip `/cdn-cgi/image/<options>` when local preview lacks Image Resizing. */
export function cfImageFallbackPath(pathname: string): string | null {
  if (!pathname.startsWith('/cdn-cgi/image/')) return null;
  const slash = pathname.indexOf('/', '/cdn-cgi/image/'.length);
  if (slash === -1) return null;
  const assetPath = pathname.slice(slash);
  if (!assetPath.startsWith('/') || assetPath.startsWith('//') || assetPath.includes('..')) return null;
  return assetPath;
}

/** Same strip, keeping `?v=` so a failed resize can load the file that was uploaded. */
export function cfImageFallbackUrl(src: string): string | null {
  let pathname = src;
  let search = '';
  try {
    const url = new URL(src, 'https://notofilia.com');
    pathname = url.pathname;
    search = url.search;
  } catch {
    return null;
  }
  const assetPath = cfImageFallbackPath(pathname);
  if (!assetPath) return null;
  return `${assetPath}${search}`;
}
