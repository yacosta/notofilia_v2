/** Strip `/cdn-cgi/image/<options>` when local preview lacks Image Resizing. */
export function cfImageFallbackPath(pathname: string): string | null {
  if (!pathname.startsWith('/cdn-cgi/image/')) return null;
  const slash = pathname.indexOf('/', '/cdn-cgi/image/'.length);
  if (slash === -1) return null;
  const assetPath = pathname.slice(slash);
  if (!assetPath.startsWith('/') || assetPath.startsWith('//') || assetPath.includes('..')) return null;
  return assetPath;
}
