import renames from './public-image-renames.json' with { type: 'json' };
import { cfImageFallbackPath } from './cf-image-path.ts';

const renameMap: Record<string, string> = renames;

function redirectPublicPath(pathname: string): string | null {
  return renameMap[pathname] ?? null;
}

/** Old homepage, default og, and upload URLs stay reachable after a filename change. */
export function publicImageRedirect(pathname: string): string | null {
  const direct = redirectPublicPath(pathname);
  if (direct) return direct;
  const assetPath = cfImageFallbackPath(pathname);
  if (!assetPath) return null;
  const rewritten = redirectPublicPath(assetPath);
  if (!rewritten) return null;
  return pathname.replace(assetPath, rewritten);
}
