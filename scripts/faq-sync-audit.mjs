#!/usr/bin/env node
/**
 * faq-sync-audit.mjs
 *
 * Statically scans every src/app/learn/**\/page.tsx file for pages that render
 * an FAQAccordion (or equivalent inline FAQ list) and emit a FAQPage JSON-LD
 * schema via buildFAQSchema(...). Confirms the set of questions in the visible
 * FAQ content matches the set of questions in the JSON-LD exactly.
 *
 * Usage: node scripts/faq-sync-audit.mjs
 * Exit code: 0 if every page is in sync, 1 if any mismatch (or unparseable
 * page) is found.
 *
 * No dependencies — Node 22 built-ins only.
 */

import { readFileSync } from "node:fs";
import { glob } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const PATTERN = "src/app/learn/**/page.tsx";

/**
 * Find the index of the character that closes the bracket opened at
 * `openIndex` (which must contain `openChar`), respecting string literals
 * ('...', "...", `...`) and backslash escapes within them.
 */
function findMatchingBracket(text, openIndex, openChar, closeChar) {
  let depth = 0;
  let inString = null;
  for (let i = openIndex; i < text.length; i++) {
    const c = text[i];
    if (inString) {
      if (c === "\\") {
        i++; // skip escaped char
        continue;
      }
      if (c === inString) inString = null;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") {
      inString = c;
      continue;
    }
    if (c === openChar) depth++;
    else if (c === closeChar) {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function extractStringValues(text, key) {
  // Matches both bare (`question: "..."`) and JSON-quoted (`"question": "..."`) keys.
  const re = new RegExp(`(?:"${key}"|\\b${key}\\b)\\s*:\\s*"((?:[^"\\\\]|\\\\.)*)"`, "g");
  const out = [];
  let m;
  while ((m = re.exec(text))) {
    out.push(m[1].replace(/\\"/g, '"').replace(/\\\\/g, "\\").trim());
  }
  return out;
}

function normalize(s) {
  return s.replace(/\s+/g, " ").trim();
}

/**
 * Locate the array literal of visible FAQ items: prefer `const faqItems = [`
 * or `const items = [`; fall back to the first inline `[ { q: "..."` array
 * (used by pages that render FAQs without the shared FAQAccordion component).
 */
function findVisibleFaqArray(content) {
  let m = /const\s+(?:faqItems|items)\s*=\s*\[/.exec(content);
  let startBracket;
  if (m) {
    startBracket = m.index + m[0].length - 1;
  } else {
    m = /\[\s*\n?\s*\{\s*q:\s*"/.exec(content);
    if (!m) return null;
    startBracket = m.index;
  }
  const end = findMatchingBracket(content, startBracket, "[", "]");
  if (end === -1) return null;
  return content.slice(startBracket, end + 1);
}

/**
 * Locate the argument passed to buildFAQSchema(...).
 */
function findFaqSchemaArg(content) {
  const m = /buildFAQSchema\(/.exec(content);
  if (!m) return null;
  const openParen = m.index + m[0].length - 1;
  const end = findMatchingBracket(content, openParen, "(", ")");
  if (end === -1) return null;
  return content.slice(openParen + 1, end).trim();
}

async function main() {
  const files = [];
  for await (const f of glob(PATTERN, { cwd: ROOT })) {
    files.push(f);
  }
  files.sort();

  const mismatches = [];
  const skipped = [];

  for (const file of files) {
    const content = readFileSync(ROOT + file, "utf8");

    const schemaArg = findFaqSchemaArg(content);
    if (schemaArg === null) {
      // No FAQPage schema on this page at all — nothing to reconcile.
      continue;
    }

    // Derived pattern (e.g. `faqItems.map(...)`) is guaranteed in sync by
    // construction since it maps directly over the rendered array.
    if (!schemaArg.startsWith("[")) {
      continue;
    }

    const schemaQuestions = extractStringValues(schemaArg, "question").map(normalize);

    const visibleArray = findVisibleFaqArray(content);
    if (visibleArray === null) {
      skipped.push({ file, reason: "could not locate visible FAQ array (const faqItems/items or inline)" });
      continue;
    }
    const visibleQuestions = extractStringValues(visibleArray, "q").map(normalize);

    if (visibleQuestions.length === 0 || schemaQuestions.length === 0) {
      skipped.push({
        file,
        reason: `parse produced empty list (visible=${visibleQuestions.length}, schema=${schemaQuestions.length})`,
      });
      continue;
    }

    const visibleSet = new Set(visibleQuestions);
    const schemaSet = new Set(schemaQuestions);

    const missingFromSchema = visibleQuestions.filter((q) => !schemaSet.has(q));
    const extraInSchema = schemaQuestions.filter((q) => !visibleSet.has(q));

    if (missingFromSchema.length > 0 || extraInSchema.length > 0) {
      mismatches.push({
        file,
        visibleCount: visibleQuestions.length,
        schemaCount: schemaQuestions.length,
        missingFromSchema,
        extraInSchema,
      });
    }
  }

  if (skipped.length > 0) {
    console.log(`\n${skipped.length} file(s) skipped (could not statically parse):`);
    for (const s of skipped) {
      console.log(`  - ${s.file}: ${s.reason}`);
    }
  }

  if (mismatches.length === 0) {
    console.log(`\nfaq-sync-audit: OK — 0 mismatches across ${files.length} learn pages.`);
    process.exit(skipped.length > 0 ? 1 : 0);
  }

  console.log(`\nfaq-sync-audit: ${mismatches.length} page(s) with FAQPage schema out of sync with visible FAQ content:\n`);
  for (const m of mismatches) {
    console.log(`${m.file}`);
    console.log(`  visible: ${m.visibleCount} questions | schema: ${m.schemaCount} questions`);
    if (m.missingFromSchema.length > 0) {
      console.log(`  missing from schema (${m.missingFromSchema.length}):`);
      for (const q of m.missingFromSchema) console.log(`    - ${q}`);
    }
    if (m.extraInSchema.length > 0) {
      console.log(`  extra in schema, not visible (${m.extraInSchema.length}):`);
      for (const q of m.extraInSchema) console.log(`    - ${q}`);
    }
    console.log("");
  }

  process.exit(1);
}

main();
