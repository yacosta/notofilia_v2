/** Difference hash (dHash): shared bilinear 9×8 greyscale → 64 bits as 16 hex chars. */

export const DHASH_WIDTH = 9;
export const DHASH_HEIGHT = 8;
export const DHASH_BITS = 64;

/** Bilinear resize of a greyscale buffer. Used by build (Node) and browser so hashes match. */
export function resizeGreyscale(
  src: ArrayLike<number>,
  srcWidth: number,
  srcHeight: number,
  destWidth: number,
  destHeight: number,
): Uint8Array {
  const out = new Uint8Array(destWidth * destHeight);
  for (let y = 0; y < destHeight; y++) {
    for (let x = 0; x < destWidth; x++) {
      const sx = ((x + 0.5) * srcWidth) / destWidth - 0.5;
      const sy = ((y + 0.5) * srcHeight) / destHeight - 0.5;
      const x0 = Math.max(0, Math.min(srcWidth - 1, Math.floor(sx)));
      const y0 = Math.max(0, Math.min(srcHeight - 1, Math.floor(sy)));
      const x1 = Math.min(x0 + 1, srcWidth - 1);
      const y1 = Math.min(y0 + 1, srcHeight - 1);
      const fx = sx - x0;
      const fy = sy - y0;
      const v =
        (src[y0 * srcWidth + x0] ?? 0) * (1 - fx) * (1 - fy) +
        (src[y0 * srcWidth + x1] ?? 0) * fx * (1 - fy) +
        (src[y1 * srcWidth + x0] ?? 0) * (1 - fx) * fy +
        (src[y1 * srcWidth + x1] ?? 0) * fx * fy;
      out[y * destWidth + x] = Math.round(v);
    }
  }
  return out;
}

export function rgbaToGreyscale(rgba: ArrayLike<number>, pixelCount: number): Uint8Array {
  const grey = new Uint8Array(pixelCount);
  for (let i = 0, p = 0; i < pixelCount; i++, p += 4) {
    grey[i] = Math.round(0.299 * (rgba[p] ?? 0) + 0.587 * (rgba[p + 1] ?? 0) + 0.114 * (rgba[p + 2] ?? 0));
  }
  return grey;
}

export function dhashFromGreyscale(pixels: ArrayLike<number>, width = DHASH_WIDTH, height = DHASH_HEIGHT): string {
  if (width !== DHASH_WIDTH || height !== DHASH_HEIGHT) {
    throw new Error(`dHash expects ${DHASH_WIDTH}×${DHASH_HEIGHT} greyscale`);
  }
  if (pixels.length < width * height) {
    throw new Error('Not enough pixel samples for dHash');
  }

  let bits = 0n;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width - 1; x++) {
      const left = pixels[y * width + x] ?? 0;
      const right = pixels[y * width + x + 1] ?? 0;
      bits = (bits << 1n) | (left < right ? 1n : 0n);
    }
  }

  return bits.toString(16).padStart(16, '0');
}

/** Hash an RGBA bitmap (browser ImageData or sharp raw) with the shared resize path. */
export function dhashFromRgba(rgba: ArrayLike<number>, width: number, height: number): string {
  const grey = rgbaToGreyscale(rgba, width * height);
  const small = resizeGreyscale(grey, width, height, DHASH_WIDTH, DHASH_HEIGHT);
  return dhashFromGreyscale(small);
}

export function parseDhash(hex: string): bigint | null {
  const normalized = String(hex || '')
    .trim()
    .toLowerCase()
    .replace(/^0x/, '');
  if (!/^[0-9a-f]{16}$/.test(normalized)) return null;
  return BigInt(`0x${normalized}`);
}

export function hammingDistance(a: bigint, b: bigint): number {
  let x = a ^ b;
  let count = 0;
  while (x > 0n) {
    count += Number(x & 1n);
    x >>= 1n;
  }
  return count;
}

/** Cosine-style score in [0, 1] from Hamming distance on 64 bits. */
export function similarityFromHamming(distance: number): number {
  const clamped = Math.max(0, Math.min(DHASH_BITS, distance));
  return 1 - clamped / DHASH_BITS;
}
