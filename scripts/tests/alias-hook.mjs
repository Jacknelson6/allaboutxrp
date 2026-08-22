/**
 * Resolves the project's `@/*` TypeScript path alias for `node --test`, so the
 * same modules the app imports can be unit-tested directly. Node 22 strips the
 * type annotations itself; only the alias needs teaching.
 *
 * Used via `node --import ./scripts/tests/alias-hook.mjs --test ...`.
 */
import fs from "node:fs";
import { registerHooks } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const srcRoot = pathToFileURL(path.join(process.cwd(), "src") + path.sep).href;
const CANDIDATE_SUFFIXES = ["", ".ts", ".tsx", "/index.ts", "/index.tsx"];

function resolveAlias(specifier) {
  const base = new URL(specifier.slice(2), srcRoot).href;
  for (const suffix of CANDIDATE_SUFFIXES) {
    const candidate = `${base}${suffix}`;
    if (fs.existsSync(fileURLToPath(candidate))) return candidate;
  }
  return base;
}

const typescriptFormat = (url) =>
  url.endsWith(".ts") || url.endsWith(".tsx") ? "module-typescript" : undefined;

registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier.startsWith("@/")) {
      const url = resolveAlias(specifier);
      return { url, format: typescriptFormat(url), shortCircuit: true };
    }
    const resolved = nextResolve(specifier, context);
    // Without an explicit format Node warns about the package having no
    // "type" field before re-parsing each stripped module as ESM.
    return resolved.format ? resolved : { ...resolved, format: typescriptFormat(resolved.url) };
  },
});
