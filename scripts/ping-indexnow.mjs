/**
 * Reads the production sitemap and submits every canonical URL to IndexNow.
 * Google discovers the same URLs through the sitemap; IndexNow accelerates
 * discovery by Bing and other participating search engines.
 */

const SITEMAP_URL = "https://allaboutxrp.com/sitemap.xml";
const INDEXNOW_KEY = "b322e7df8c6466108fb262799fdb4273";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

async function main() {
  console.log("Fetching production sitemap...");
  const response = await fetch(SITEMAP_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch sitemap: ${response.status}`);
  }

  const xml = await response.text();
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  if (urls.length === 0) {
    throw new Error("The production sitemap contains no URLs.");
  }

  const submitResponse = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: "allaboutxrp.com",
      key: INDEXNOW_KEY,
      keyLocation: `https://allaboutxrp.com/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    }),
  });

  if (!submitResponse.ok && submitResponse.status !== 202) {
    const details = await submitResponse.text();
    throw new Error(`IndexNow submission failed: ${submitResponse.status} ${details}`);
  }

  console.log(`Submitted ${urls.length} canonical URLs to IndexNow (${submitResponse.status}).`);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
