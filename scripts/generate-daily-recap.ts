#!/usr/bin/env npx tsx
/**
 * Daily XRP News Recap Generator
 *
 * Usage:
 *   npx tsx scripts/generate-daily-recap.ts              # generates for today
 *   npx tsx scripts/generate-daily-recap.ts 2026-02-10   # generates for a specific date
 *
 * Requirements:
 *   - OPENAI_API_KEY or ANTHROPIC_API_KEY env var (for article generation)
 *   - PERPLEXITY_API_KEY env var (for web search)
 *
 * What it does:
 *   1. Searches the web for XRP/Ripple news from the past 24 hours
 *   2. Generates a blog-style markdown recap using an LLM
 *   3. Saves it to src/data/news/YYYY-MM-DD.md with frontmatter
 */

import fs from "fs";
import path from "path";

const PERPLEXITY_API_KEY = process.env.PERPLEXITY_API_KEY;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!PERPLEXITY_API_KEY) {
  console.error("❌ PERPLEXITY_API_KEY is required for web search");
  process.exit(1);
}
if (!ANTHROPIC_API_KEY && !OPENAI_API_KEY) {
  console.error("❌ ANTHROPIC_API_KEY or OPENAI_API_KEY is required for article generation");
  process.exit(1);
}

const targetDate = process.argv[2] || new Date().toISOString().split("T")[0];
const outputDir = path.join(process.cwd(), "src/data/news");
const outputFile = path.join(outputDir, `${targetDate}.md`);

async function searchPerplexity(query: string): Promise<string> {
  const res = await fetch("https://api.perplexity.ai/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${PERPLEXITY_API_KEY}`,
    },
    body: JSON.stringify({
      model: "sonar",
      messages: [
        {
          role: "system",
          content: "You are a research assistant. Provide detailed, factual information with sources. Focus on the last 24 hours.",
        },
        { role: "user", content: query },
      ],
      temperature: 0.1,
    }),
  });
  const data = await res.json();
  return data.choices?.[0]?.message?.content || "";
}

async function gatherNews(): Promise<string> {
  console.log("🔍 Searching for XRP news...");
  const queries = [
    `XRP Ripple news today ${targetDate} price regulatory SEC updates partnerships`,
    `XRP price action market analysis ${targetDate} trading volume whale movements`,
    `Ripple corporate news announcements ${targetDate} RLUSD partnerships`,
    `XRP Ledger on-chain activity developments ${targetDate}`,
    `XRP community sentiment notable tweets ${targetDate}`,
  ];

  const results: string[] = [];
  for (const q of queries) {
    try {
      const r = await searchPerplexity(q);
      results.push(r);
      // Small delay to avoid rate limiting
      await new Promise((res) => setTimeout(res, 1000));
    } catch (e) {
      console.warn(`⚠️  Search failed for: ${q}`);
    }
  }
  return results.join("\n\n---\n\n");
}

async function generateArticle(research: string): Promise<string> {
  console.log("✍️  Generating article...");

  const systemPrompt = `You write ultra-short TLDR daily recaps for AllAboutXRP.com. Every bullet is ONE line max. No paragraphs. No filler. Just facts and numbers. Think news ticker, not article.`;

  const userPrompt = `Based on the following research gathered for ${targetDate}, write a TLDR-style XRP daily recap in markdown. Keep it SHORT and scannable.

RESEARCH:
${research}

FORMAT REQUIREMENTS:
- Use these H2 sections: ## Top Stories, ## Price, ## On-Chain, ## What to Watch
- Use these H2 sections ONLY: ## Top Stories, ## Price, ## On-Chain, ## Watch
- Top Stories: 2-4 bullets. Format: **Name** — one short sentence. MAX 15 words per bullet.
- Price: ONE line. Price, range, direction. That's it.
- On-Chain: 2-4 bullets. Just metric name + number. No explanation.
- Watch: 2-4 bullets. Date + event. Nothing else.
- NO intro, NO sign-off, NO emojis, NO H1 heading
- Total: 100-200 words MAX. Shorter is better.
- Skip empty sections. If no news, one line: "Quiet day."`;

  if (ANTHROPIC_API_KEY) {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY!,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 2000,
        system: systemPrompt,
        messages: [{ role: "user", content: userPrompt }],
      }),
    });
    const data = await res.json();
    return data.content?.[0]?.text || "";
  } else {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        max_tokens: 2000,
      }),
    });
    const data = await res.json();
    return data.choices?.[0]?.message?.content || "";
  }
}

async function generateTitle(article: string): Promise<{ title: string; description: string }> {
  const prompt = `Given this XRP daily recap article for ${targetDate}, generate:
1. An SEO-optimized title (50-65 chars, include "XRP" and the date formatted nicely)
2. A meta description (140-155 chars)

Article:
${article.slice(0, 500)}

Respond in JSON format: {"title": "...", "description": "..."}`;

  if (ANTHROPIC_API_KEY) {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY!,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 200,
        messages: [{ role: "user", content: prompt }],
      }),
    });
    const data = await res.json();
    const text = data.content?.[0]?.text || "";
    const match = text.match(/\{[\s\S]*\}/);
    return match ? JSON.parse(match[0]) : { title: `XRP Daily Recap — ${targetDate}`, description: "" };
  } else {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 200,
        response_format: { type: "json_object" },
      }),
    });
    const data = await res.json();
    const text = data.choices?.[0]?.message?.content || "{}";
    return JSON.parse(text);
  }
}

async function main() {
  console.log(`📅 Generating XRP daily recap for ${targetDate}...`);

  if (fs.existsSync(outputFile)) {
    console.warn(`⚠️  File already exists: ${outputFile}`);
    console.warn("   Use a different date or delete the existing file.");
    process.exit(1);
  }

  const research = await gatherNews();
  if (!research.trim()) {
    console.error("❌ No research data gathered. Check your API key.");
    process.exit(1);
  }

  const article = await generateArticle(research);
  if (!article.trim()) {
    console.error("❌ Article generation failed.");
    process.exit(1);
  }

  const { title, description } = await generateTitle(article);
  const excerpt = article
    .replace(/^#+\s.*$/gm, "")
    .replace(/[*_`]/g, "")
    .trim()
    .slice(0, 200)
    .trim();

  const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
description: "${description.replace(/"/g, '\\"')}"
excerpt: "${excerpt.replace(/"/g, '\\"')}"
date: "${targetDate}"
---`;

  const output = `${frontmatter}\n\n${article}`;

  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(outputFile, output, "utf-8");

  console.log(`✅ Recap saved to ${outputFile}`);
  console.log(`   Title: ${title}`);
}

main().catch((e) => {
  console.error("❌ Fatal error:", e);
  process.exit(1);
});
