/**
 * A small, dependency-free HTML → Markdown converter for the Markdown
 * representation this site serves under `Accept: text/markdown`.
 *
 * It only has to cope with our own server-rendered output, which React emits
 * as well-formed markup, so the parser is deliberately narrow: tags, comments,
 * raw-text elements, and void elements. Anything it does not recognise is
 * treated as a transparent block and its children are still rendered, so new
 * markup degrades to plain prose instead of disappearing.
 */

const VOID_ELEMENTS = new Set([
  "area", "base", "br", "col", "embed", "hr", "img", "input",
  "link", "meta", "param", "source", "track", "wbr",
]);

/** Elements whose contents are text, not markup, and end at their close tag. */
const RAW_TEXT_ELEMENTS = new Set(["script", "style", "textarea", "title"]);

/** Dropped entirely, contents included. */
const DISCARDED_ELEMENTS = new Set([
  "script", "style", "noscript", "svg", "template", "iframe", "canvas",
  "object", "video", "audio", "input", "select", "option", "button", "nav",
]);

const INLINE_ELEMENTS = new Set([
  "a", "abbr", "b", "bdi", "bdo", "cite", "code", "data", "dfn", "em", "i",
  "kbd", "mark", "q", "s", "samp", "small", "span", "strong", "sub", "sup",
  "time", "u", "var", "del", "ins", "label", "br", "img", "wbr", "output",
]);

const NAMED_ENTITIES: Record<string, string> = {
  amp: "&", lt: "<", gt: ">", quot: '"', apos: "'",
  // A non-breaking space is decoded to a plain space: Markdown consumers gain
  // nothing from the distinction and it survives copy-paste badly.
  nbsp: " ",
  mdash: "—", ndash: "–", hellip: "…", rsquo: "’",
  lsquo: "‘", ldquo: "“", rdquo: "”", times: "×",
  middot: "·", deg: "°", euro: "€", pound: "£",
  cent: "¢", yen: "¥", copy: "©", reg: "®",
  trade: "™", laquo: "«", raquo: "»", bull: "•",
  dagger: "†", permil: "‰", prime: "′", minus: "−",
  frac12: "½", frac14: "¼", frac34: "¾", ne: "≠",
  le: "≤", ge: "≥", larr: "←", rarr: "→", harr: "↔",
  uarr: "↑", darr: "↓", sect: "§", para: "¶",
};

export function decodeEntities(value: string): string {
  return value.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z][a-zA-Z0-9]*);/g, (match, body: string) => {
    if (body.startsWith("#")) {
      const codePoint = body[1] === "x" || body[1] === "X"
        ? Number.parseInt(body.slice(2), 16)
        : Number.parseInt(body.slice(1), 10);
      if (Number.isNaN(codePoint) || codePoint < 0 || codePoint > 0x10ffff) return match;
      try {
        return String.fromCodePoint(codePoint);
      } catch {
        return match;
      }
    }
    return NAMED_ENTITIES[body] ?? NAMED_ENTITIES[body.toLowerCase()] ?? match;
  });
}

interface ElementNode {
  kind: "element";
  tag: string;
  attributes: Record<string, string>;
  children: Node[];
}

interface TextNode {
  kind: "text";
  value: string;
}

type Node = ElementNode | TextNode;

const ATTRIBUTE_PATTERN = /([^\s"'=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g;

function parseAttributes(source: string): Record<string, string> {
  const attributes: Record<string, string> = {};
  ATTRIBUTE_PATTERN.lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = ATTRIBUTE_PATTERN.exec(source)) !== null) {
    const name = match[1].toLowerCase();
    const value = match[2] ?? match[3] ?? match[4] ?? "";
    attributes[name] = decodeEntities(value);
  }
  return attributes;
}

/** Parses a fragment into a shallow DOM. Unclosed tags close at their parent. */
export function parseHtml(html: string): Node[] {
  const root: ElementNode = { kind: "element", tag: "#root", attributes: {}, children: [] };
  const stack: ElementNode[] = [root];
  const lowered = html.toLowerCase();
  let index = 0;

  const push = (node: Node) => stack[stack.length - 1].children.push(node);

  while (index < html.length) {
    const next = html.indexOf("<", index);
    if (next === -1) {
      push({ kind: "text", value: html.slice(index) });
      break;
    }
    if (next > index) push({ kind: "text", value: html.slice(index, next) });

    if (html.startsWith("<!--", next)) {
      const end = html.indexOf("-->", next + 4);
      index = end === -1 ? html.length : end + 3;
      continue;
    }
    if (html.startsWith("<!", next) || html.startsWith("<?", next)) {
      const end = html.indexOf(">", next);
      index = end === -1 ? html.length : end + 1;
      continue;
    }

    const tagEnd = html.indexOf(">", next);
    if (tagEnd === -1) {
      push({ kind: "text", value: html.slice(next) });
      break;
    }
    const rawTag = html.slice(next + 1, tagEnd);

    if (rawTag.startsWith("/")) {
      const tag = rawTag.slice(1).trim().toLowerCase();
      for (let depth = stack.length - 1; depth > 0; depth -= 1) {
        if (stack[depth].tag === tag) {
          stack.length = depth;
          break;
        }
      }
      index = tagEnd + 1;
      continue;
    }

    const selfClosing = rawTag.endsWith("/");
    const body = selfClosing ? rawTag.slice(0, -1) : rawTag;
    const nameMatch = /^([a-zA-Z][^\s/>]*)/.exec(body);
    if (!nameMatch) {
      index = tagEnd + 1;
      continue;
    }
    const tag = nameMatch[1].toLowerCase();
    const element: ElementNode = {
      kind: "element",
      tag,
      attributes: parseAttributes(body.slice(nameMatch[1].length)),
      children: [],
    };
    push(element);

    if (RAW_TEXT_ELEMENTS.has(tag)) {
      const closeIndex = lowered.indexOf(`</${tag}`, tagEnd + 1);
      const contentEnd = closeIndex === -1 ? html.length : closeIndex;
      element.children.push({ kind: "text", value: html.slice(tagEnd + 1, contentEnd) });
      const afterClose = closeIndex === -1 ? html.length : html.indexOf(">", closeIndex);
      index = afterClose === -1 ? html.length : afterClose + 1;
      continue;
    }

    if (!selfClosing && !VOID_ELEMENTS.has(tag)) stack.push(element);
    index = tagEnd + 1;
  }

  return root.children;
}

function isHidden(node: ElementNode): boolean {
  return (
    node.attributes["aria-hidden"] === "true" ||
    "hidden" in node.attributes ||
    node.attributes.role === "presentation"
  );
}

function resolveUrl(href: string, baseUrl?: string): string {
  if (!href || !baseUrl) return href;
  if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith("#")) return href;
  try {
    return new URL(href, baseUrl).toString();
  } catch {
    return href;
  }
}

function collapse(value: string): string {
  return value.replace(/\s+/g, " ");
}

function escapeText(value: string): string {
  return value.replace(/([\\`*_[\]])/g, "\\$1");
}

interface RenderOptions {
  baseUrl?: string;
  /** Heading levels are clamped so a converted page never starts below `#`. */
  headingOffset?: number;
}

interface RenderState extends RenderOptions {
  inPre: boolean;
}

function renderInline(nodes: Node[], state: RenderState): string {
  return nodes.map((node) => renderInlineNode(node, state)).join("");
}

function renderInlineNode(node: Node, state: RenderState): string {
  if (node.kind === "text") {
    const text = decodeEntities(node.value);
    return state.inPre ? text : escapeText(collapse(text));
  }
  if (isHidden(node) || DISCARDED_ELEMENTS.has(node.tag)) return "";

  const children = () => renderInline(node.children, state);

  switch (node.tag) {
    case "br":
      return "\n";
    case "strong":
    case "b": {
      const inner = children().trim();
      return inner ? `**${inner}**` : "";
    }
    case "em":
    case "i": {
      const inner = children().trim();
      return inner ? `_${inner}_` : "";
    }
    case "del":
    case "s": {
      const inner = children().trim();
      return inner ? `~~${inner}~~` : "";
    }
    case "code": {
      const inner = collapse(decodeEntities(textContent(node))).trim();
      return inner ? `\`${inner}\`` : "";
    }
    case "img": {
      const src = resolveUrl(node.attributes.src ?? "", state.baseUrl);
      const alt = collapse(node.attributes.alt ?? "").trim();
      if (!src || !alt) return "";
      return `![${alt}](${src})`;
    }
    case "a": {
      const inner = children().trim();
      const href = node.attributes.href;
      if (!inner) return "";
      if (!href || href.startsWith("#")) return inner;
      return `[${inner}](${resolveUrl(href, state.baseUrl)})`;
    }
    default:
      return children();
  }
}

function textContent(node: Node): string {
  if (node.kind === "text") return node.value;
  return node.children.map(textContent).join("");
}

function indentContinuation(value: string, indent: string): string {
  return value
    .split("\n")
    .map((line, position) => (position === 0 || line === "" ? line : `${indent}${line}`))
    .join("\n");
}

function renderTable(node: ElementNode, state: RenderState): string {
  const collected: { cells: string[]; isHeader: boolean }[] = [];

  const walkRows = (current: Node) => {
    if (current.kind !== "element") return;
    if (current.tag === "tr") {
      const cells = current.children.filter(
        (child): child is ElementNode =>
          child.kind === "element" && (child.tag === "td" || child.tag === "th"),
      );
      if (cells.length === 0) return;
      collected.push({
        cells: cells.map((cell) => collapse(renderInline(cell.children, state)).trim()),
        isHeader: cells.every((cell) => cell.tag === "th"),
      });
      return;
    }
    current.children.forEach(walkRows);
  };
  node.children.forEach(walkRows);

  if (collected.length === 0) return "";

  // GitHub-flavoured tables always carry a header row; when the source table
  // has none, an empty one keeps the rest of the rows parseable.
  const hasHeader = collected[0].isHeader;
  const headerCells = hasHeader ? collected[0].cells : [];
  const bodyRows = (hasHeader ? collected.slice(1) : collected).map((row) => row.cells);

  const columns = Math.max(headerCells.length, ...bodyRows.map((row) => row.length), 1);
  const pad = (row: string[]) => {
    const filled = [...row];
    while (filled.length < columns) filled.push("");
    return `| ${filled.map((cell) => cell.replace(/\|/g, "\\|")).join(" | ")} |`;
  };

  return [
    pad(headerCells),
    `| ${new Array(columns).fill("---").join(" | ")} |`,
    ...bodyRows.map(pad),
  ].join("\n");
}

function renderBlocks(nodes: Node[], state: RenderState): string[] {
  const blocks: string[] = [];
  let inlineBuffer: Node[] = [];

  const flushInline = () => {
    if (inlineBuffer.length === 0) return;
    const rendered = renderInline(inlineBuffer, state).replace(/[ \t]+\n/g, "\n").trim();
    inlineBuffer = [];
    if (rendered) blocks.push(rendered);
  };

  for (const node of nodes) {
    if (node.kind === "text") {
      if (decodeEntities(node.value).trim()) inlineBuffer.push(node);
      continue;
    }
    if (isHidden(node) || DISCARDED_ELEMENTS.has(node.tag)) continue;
    if (INLINE_ELEMENTS.has(node.tag)) {
      inlineBuffer.push(node);
      continue;
    }
    flushInline();
    const rendered = renderBlockNode(node, state);
    if (rendered) blocks.push(rendered);
  }
  flushInline();
  return blocks;
}

function renderBlockNode(node: ElementNode, state: RenderState): string {
  const offset = state.headingOffset ?? 0;

  switch (node.tag) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6": {
      const level = Math.min(6, Math.max(1, Number(node.tag[1]) + offset));
      const text = collapse(renderInline(node.children, state)).trim();
      return text ? `${"#".repeat(level)} ${text}` : "";
    }
    case "hr":
      return "---";
    case "pre": {
      const text = decodeEntities(textContent(node)).replace(/\s+$/, "");
      return text.trim() ? `\`\`\`\n${text.replace(/^\n+/, "")}\n\`\`\`` : "";
    }
    case "blockquote": {
      const inner = renderBlocks(node.children, state).join("\n\n");
      if (!inner) return "";
      return inner
        .split("\n")
        .map((line) => (line ? `> ${line}` : ">"))
        .join("\n");
    }
    case "ul":
    case "ol": {
      const ordered = node.tag === "ol";
      const start = Number(node.attributes.start ?? "1");
      const items = node.children.filter(
        (child): child is ElementNode => child.kind === "element" && child.tag === "li",
      );
      if (items.length === 0) return "";
      const first = Number.isNaN(start) ? 1 : start;
      const lines = items.map((item, position) => {
        const marker = ordered ? `${first + position}. ` : "- ";
        const content = renderBlocks(item.children, state).join("\n\n").trim();
        if (!content) return "";
        return `${marker}${indentContinuation(content, " ".repeat(marker.length))}`;
      });
      return lines.filter(Boolean).join("\n");
    }
    case "dl": {
      const lines: string[] = [];
      for (const child of node.children) {
        if (child.kind !== "element") continue;
        const text = collapse(renderInline(child.children, state)).trim();
        if (!text) continue;
        if (child.tag === "dt") lines.push(`**${text}**`);
        else if (child.tag === "dd") lines.push(`: ${text}`);
      }
      return lines.join("\n");
    }
    case "table":
      return renderTable(node, state);
    case "details": {
      const summary = node.children.find(
        (child): child is ElementNode => child.kind === "element" && child.tag === "summary",
      );
      const rest = node.children.filter((child) => child !== summary);
      const blocks: string[] = [];
      if (summary) {
        const text = collapse(renderInline(summary.children, state)).trim();
        if (text) blocks.push(`**${text}**`);
      }
      blocks.push(...renderBlocks(rest, state));
      return blocks.filter(Boolean).join("\n\n");
    }
    case "figcaption": {
      const text = collapse(renderInline(node.children, state)).trim();
      return text ? `_${text}_` : "";
    }
    case "p": {
      const text = renderInline(node.children, state).replace(/[ \t]+\n/g, "\n").trim();
      return text;
    }
    default:
      return renderBlocks(node.children, state).join("\n\n");
  }
}

/** Converts an HTML fragment to Markdown. */
export function htmlToMarkdown(html: string, options: RenderOptions = {}): string {
  const state: RenderState = { ...options, inPre: false };
  const blocks = renderBlocks(parseHtml(html), state);
  return blocks
    .join("\n\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]+$/gm, "")
    .trim();
}

function matchTagBlock(html: string, tag: string, attributeHint?: string): string | null {
  const opening = new RegExp(`<${tag}\\b[^>]*${attributeHint ?? ""}[^>]*>`, "i");
  const openMatch = opening.exec(html);
  if (!openMatch) return null;
  const start = openMatch.index + openMatch[0].length;

  const scanner = new RegExp(`<${tag}\\b[^>]*>|</${tag}\\s*>`, "gi");
  scanner.lastIndex = start;
  let depth = 1;
  let match: RegExpExecArray | null;
  while ((match = scanner.exec(html)) !== null) {
    depth += match[0].startsWith("</") ? -1 : 1;
    if (depth === 0) return html.slice(start, match.index);
  }
  return html.slice(start);
}

/**
 * The readable part of a rendered page: the `<main id="main-content">` region
 * every layout in this app renders, falling back to any `<main>`, then `<body>`.
 */
export function extractMainContent(html: string): string {
  return (
    matchTagBlock(html, "main", 'id="main-content"') ??
    matchTagBlock(html, "main") ??
    matchTagBlock(html, "body") ??
    html
  );
}

export function extractTitle(html: string): string | null {
  const match = /<title[^>]*>([\s\S]*?)<\/title>/i.exec(html);
  return match ? collapse(decodeEntities(match[1])).trim() || null : null;
}

export function extractMetaContent(html: string, name: string): string | null {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(
    `<meta[^>]+(?:name|property)=["']${escaped}["'][^>]*>`,
    "i",
  );
  const tag = pattern.exec(html)?.[0];
  if (!tag) return null;
  const content = /content=["']([^"']*)["']/i.exec(tag)?.[1];
  return content ? collapse(decodeEntities(content)).trim() || null : null;
}

export function extractCanonical(html: string): string | null {
  const tag = /<link[^>]+rel=["']canonical["'][^>]*>/i.exec(html)?.[0];
  if (!tag) return null;
  return /href=["']([^"']*)["']/i.exec(tag)?.[1] ?? null;
}

export interface MarkdownDocumentParts {
  title: string | null;
  description: string | null;
  body: string;
  canonical: string;
  indexUrl: string;
}

/**
 * Assembles the served document: one H1 first, then the page description, then
 * the converted body, then a provenance footer. The page's own H1 is reused
 * wherever it sits in the body, so the document never carries two titles.
 */
export function buildMarkdownDocument({
  title,
  description,
  body,
  canonical,
  indexUrl,
}: MarkdownDocumentParts): string {
  const trimmed = body.trim();
  // Hoist the page's own H1 to the top so the document always opens with one
  // title line, even when the page renders a kicker or byline above it. Pages
  // with no H1 at all fall back to the document title.
  const firstHeading = /^# .+$/m.exec(trimmed);
  const heading = firstHeading ? firstHeading[0] : title ? `# ${title}` : null;
  const rest = firstHeading
    ? `${trimmed.slice(0, firstHeading.index)}\n${trimmed.slice(firstHeading.index + firstHeading[0].length)}`
        .replace(/\n{3,}/g, "\n\n")
        .trim()
    : trimmed;

  return `${[
    heading,
    description ? `> ${description}` : null,
    rest,
    `---\n\nSource: ${canonical} · AllAboutXRP · Full index: ${indexUrl}`,
  ]
    .filter(Boolean)
    .join("\n\n")}\n`;
}
