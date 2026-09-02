const SITE_URL = 'https://notofilia.com';

/** Public IndexNow key. Hosted at `/{INDEXNOW_KEY}.txt`. No Search Console secret. */
export const INDEXNOW_KEY = 'a8f3c1e92b74d6058e1a4c7f0b39d2e6';

export const INDEXNOW_KEY_PATH = `/${INDEXNOW_KEY}.txt`;

export function indexNowKeyLocation(): string {
  return new URL(INDEXNOW_KEY_PATH, SITE_URL).href;
}

export function indexNowPayload(urls: string[]) {
  return {
    host: new URL(SITE_URL).host,
    key: INDEXNOW_KEY,
    keyLocation: indexNowKeyLocation(),
    urlList: urls,
  };
}
