#!/usr/bin/env npx tsx
/**
 * Reads the sitemap and submits all URLs to IndexNow.
 * Usage: npx tsx scripts/ping-indexnow.ts
 */

const SITEMAP_URL = "https://allaboutxrp.com/sitemap.xml";
const INDEXNOW_KEY = "b322e7df8c6466108fb262799fdb4273";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

async function main() {
  console.log("Fetching sitemap...");
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) {
    console.error(`Failed to fetch sitemap: ${res.status}`);
    process.exit(1);
  }

  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  console.log(`Found ${urls.length} URLs`);

  if (urls.length === 0) {
    console.log("No URLs to submit.");
    return;
  }

  const body = {
    host: "allaboutxrp.com",
    key: INDEXNOW_KEY,
    keyLocation: `https://allaboutxrp.com/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };

  console.log("Submitting to IndexNow...");
  const submitRes = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  console.log(`IndexNow response: ${submitRes.status} ${submitRes.statusText}`);
  if (submitRes.ok || submitRes.status === 202) {
    console.log("✅ All URLs submitted successfully!");
  } else {
    const text = await submitRes.text();
    console.error("❌ Submission failed:", text);
  }
}

main().catch(console.error);
