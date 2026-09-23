import renames from './catalog-image-renames.json' with { type: 'json' };
import { cfImageFallbackPath } from './cf-image-path.ts';

const CATALOG_PREFIXES = ['/images/catalog/', '/images/catalog-download/'] as const;

const renameMap: Record<string, string> = renames;

function redirectCatalogPath(pathname: string): string | null {
  for (const prefix of CATALOG_PREFIXES) {
    if (!pathname.startsWith(prefix)) continue;
    const next = renameMap[pathname.slice(prefix.length)];
    return next ? `${prefix}${next}` : null;
  }
  return null;
}

/** Old catalog master URLs stay reachable after the filename migration. */
export function catalogImageRedirect(pathname: string): string | null {
  const direct = redirectCatalogPath(pathname);
  if (direct) return direct;
  const assetPath = cfImageFallbackPath(pathname);
  if (!assetPath) return null;
  const rewritten = redirectCatalogPath(assetPath);
  if (!rewritten) return null;
  return pathname.replace(assetPath, rewritten);
}
