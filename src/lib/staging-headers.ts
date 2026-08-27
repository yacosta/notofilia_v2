export function stagingRobotsHeaders(hostname: string): Record<string, string> {
  if (hostname.endsWith('.workers.dev')) {
    return { 'X-Robots-Tag': 'noindex' };
  }
  return {};
}
