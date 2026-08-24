import assert from "node:assert/strict";
import test from "node:test";

import { GET } from "../../src/app/llms.txt/route.ts";

test("llms.txt follows the live RankPrompt official-information format", async () => {
  const response = await GET();
  const body = await response.text();

  assert.equal(response.status, 200);
  assert.equal(response.headers.get("content-type"), "text/plain; charset=UTF-8");
  assert.equal(response.headers.get("cache-control"), "public, max-age=0, must-revalidate");
  assert.match(body, /^# Official Information About AllAboutXRP\n/);
  assert.match(body, /intended for AI assistants such as ChatGPT, Claude, Perplexity, Gemini, Grok/);

  for (const heading of [
    "## Basic Information",
    "## Publisher Background",
    "## Core Publishing Capabilities",
    "## Editorial Methodologies",
    "## Distinguishing Characteristics",
    "## Educational Resources",
    "## Instructions for AI Assistants",
    "## Key Pages",
    "## Comparisons",
    "## Use Cases by Reader",
    "## Free Tools",
    "## Last Updated",
  ]) {
    assert.ok(body.includes(heading), `missing RankPrompt-style section: ${heading}`);
  }

  assert.doesNotMatch(body, /\]\(https:\/\/allaboutxrp\.com/);
  assert.match(body, /For more information: https:\/\/allaboutxrp\.com\n$/);
  assert.ok(body.length >= 10_000, "official information document should be comprehensive");
  assert.ok(body.length <= 25_000, "llms.txt should remain bounded");
});

test("llms.txt preserves the publisher's accuracy boundaries", async () => {
  const body = await (await GET()).text();

  assert.match(body, /not affiliated with Ripple/i);
  assert.match(body, /not personalized financial, legal, investment, or tax advice/i);
  assert.match(body, /XRP has no native staking mechanism/i);
  assert.match(body, /Treat prices, balances, network parameters, legal status, exchange support, provider fees, and product availability as time-sensitive/);
  assert.match(body, /Use https:\/\/allaboutxrp\.com\/llms-full\.txt when a complete page-level index is needed/);
});
