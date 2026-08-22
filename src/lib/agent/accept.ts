/**
 * RFC 9110 §12.5.1 `Accept` negotiation for the two representations this site
 * produces: HTML for browsers, Markdown for agents.
 *
 * Follows the reference implementation published at
 * https://acceptmarkdown.com/recipes/nextjs — q-values are honoured, a more
 * specific media range overrides a less specific one regardless of q (so
 * `text/html;q=0, ...` really does reject HTML), and ties fall back to the
 * order the client listed.
 */

export const HTML_TYPE = "text/html";
export const MARKDOWN_TYPE = "text/markdown";

/** Ordered by server preference: HTML wins a tie, including a bare wildcard. */
export const PRODUCES = [HTML_TYPE, MARKDOWN_TYPE] as const;

export type ProducedType = (typeof PRODUCES)[number];

export interface AcceptEntry {
  type: string;
  q: number;
  specificity: number;
}

export function parseAccept(header: string): AcceptEntry[] {
  return header
    .split(",")
    .map((raw) => raw.trim())
    .filter((raw) => raw.length > 0)
    .map((raw) => {
      const parts = raw.split(";").map((part) => part.trim());
      const type = parts[0].toLowerCase();
      let q = 1;
      for (const param of parts.slice(1)) {
        const [name, value] = param.split("=").map((piece) => piece.trim());
        if (name?.toLowerCase() === "q") {
          const parsed = Number(value);
          if (!Number.isNaN(parsed)) q = Math.max(0, Math.min(1, parsed));
        }
      }
      const specificity = type === "*/*" ? 0 : type.endsWith("/*") ? 1 : 2;
      return { type, q, specificity };
    });
}

function matches(entry: AcceptEntry, candidate: string): boolean {
  if (entry.type === "*/*") return true;
  if (entry.type.endsWith("/*")) return candidate.startsWith(entry.type.slice(0, -1));
  return entry.type === candidate;
}

/**
 * The representation to serve, or `null` when the client accepts neither —
 * the one case that warrants a 406. A missing or empty header means "anything",
 * which resolves to HTML.
 */
export function preferredType(header: string | null | undefined): ProducedType | null {
  if (!header || header.trim() === "") return PRODUCES[0];
  const entries = parseAccept(header);
  if (entries.length === 0) return PRODUCES[0];

  let bestType: ProducedType | null = null;
  let bestQ = -1;
  let bestPosition = Number.POSITIVE_INFINITY;

  for (const candidate of PRODUCES) {
    // Find the most specific range that matches this candidate. Specificity
    // beats q here: `text/html;q=0, */*` rejects HTML rather than letting the
    // wildcard revive it.
    let matched: AcceptEntry | null = null;
    let matchedPosition = Number.POSITIVE_INFINITY;
    for (let index = 0; index < entries.length; index += 1) {
      const entry = entries[index];
      if (!matches(entry, candidate)) continue;
      if (
        matched === null ||
        entry.specificity > matched.specificity ||
        (entry.specificity === matched.specificity && index < matchedPosition)
      ) {
        matched = entry;
        matchedPosition = index;
      }
    }
    if (matched === null || matched.q <= 0) continue;

    // Across candidates: highest q wins, then the client's own ordering, so
    // `Accept: text/markdown, text/html` picks Markdown.
    if (matched.q > bestQ || (matched.q === bestQ && matchedPosition < bestPosition)) {
      bestQ = matched.q;
      bestPosition = matchedPosition;
      bestType = candidate;
    }
  }

  return bestType;
}

/** Adds `Accept` to an existing `Vary` header without dropping what is there. */
export function appendVaryAccept(headers: Headers): void {
  const existing = headers.get("Vary");
  if (!existing) {
    headers.set("Vary", "Accept");
    return;
  }
  const tokens = existing.split(",").map((token) => token.trim().toLowerCase());
  if (tokens.includes("*") || tokens.includes("accept")) return;
  headers.set("Vary", `${existing}, Accept`);
}

/**
 * Paths that are never content-negotiated: framework internals, API routes,
 * and any concrete file (images, `sitemap.xml`, `llms.txt`, generated icons).
 * A `.md` path is the one extension that *is* ours to serve.
 */
export function isNegotiablePath(pathname: string): boolean {
  if (pathname.startsWith("/api/") || pathname.startsWith("/_next/")) return false;
  if (pathname.startsWith("/_vercel/") || pathname.startsWith("/.netlify/")) return false;

  const lastSegment = pathname.slice(pathname.lastIndexOf("/") + 1);
  if (lastSegment.endsWith(".md")) return true;
  if (lastSegment.includes(".")) return false;

  // Metadata routes Next.js generates without a file extension.
  return !/^(?:opengraph-image|twitter-image|icon|apple-icon|manifest)(?:-|$)/.test(lastSegment);
}
