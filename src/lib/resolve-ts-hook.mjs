const EXTENDED = /\.(?:ts|js|mjs|cjs|json|node|wasm)$/;

export async function resolve(specifier, context, nextResolve) {
  if ((specifier.startsWith('.') || specifier.startsWith('/')) && !EXTENDED.test(specifier)) {
    try {
      return await nextResolve(`${specifier}.ts`, context);
    } catch {
      return nextResolve(specifier, context);
    }
  }
  return nextResolve(specifier, context);
}
