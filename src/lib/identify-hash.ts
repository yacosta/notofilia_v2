/** Difference hash (dHash): 9×8 greyscale → 64 bits as 16 hex chars. */

export const DHASH_WIDTH = 9;
export const DHASH_HEIGHT = 8;
export const DHASH_BITS = 64;

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
