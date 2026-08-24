import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const noindexSource = fs.readFileSync("src/lib/seo/noindex-pages.ts", "utf8");
const sitemapSource = fs.readFileSync("src/app/sitemap.ts", "utf8");
const faqPageSource = fs.readFileSync("src/app/learn/faq/[slug]/page.tsx", "utf8");

function declaredNoindexPaths() {
  const block = noindexSource.match(/export const NOINDEX_PATHS = new Set\(\[([\s\S]*?)\n\]\);/)?.[1];
  assert.ok(block, "NOINDEX_PATHS declaration is readable");
  return [...block.matchAll(/"(\/[^"\n]+)"/g)].map((match) => match[1]);
}

test("only non-editorial utility routes remain in the noindex policy", () => {
  assert.deepEqual(declaredNoindexPaths(), [
    "/privacy-policy",
    "/terms",
    "/extension",
    "/corrections/thanks",
  ]);
});

test("expanded FAQ articles are indexable and self-canonical", () => {
  assert.doesNotMatch(faqPageSource, /robots:\s*\{\s*index:\s*false/);
  assert.match(faqPageSource, /alternates:\s*\{ canonical: `\/learn\/faq\/\$\{slug\}` \}/);
  assert.match(sitemapSource, /getAllFAQSlugs\(\)\.map/);
});

test("recovered recommendation and tool routes are explicitly discoverable", () => {
  for (const route of [
    "/best",
    "/best/xrp-exchanges",
    "/best/xrp-wallets",
    "/best/hardware-wallets-for-xrp",
    "/best/xrp-staking-platforms",
    "/tools/whale-tracker",
  ]) {
    assert.match(sitemapSource, new RegExp(`"${route.replaceAll("/", "\\/")}"`));
  }
});
