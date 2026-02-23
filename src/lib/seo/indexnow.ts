/**
 * IndexNow integration — instantly notify search engines about new/changed pages.
 * https://www.indexnow.org/documentation
 */

const INDEXNOW_KEY = "b322e7df8c6466108fb262799fdb4273";
const SITE_URL = "https://allaboutxrp.com";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

export async function pingIndexNow(urls: string[]): Promise<{ ok: boolean; status: number }> {
  if (urls.length === 0) return { ok: true, status: 200 };

  // IndexNow accepts up to 10,000 URLs per request
  const body = {
    host: "allaboutxrp.com",
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls.slice(0, 10000),
  };

  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  return { ok: res.ok, status: res.status };
}

export { INDEXNOW_KEY, SITE_URL };
