import { SITE_URL } from "@/lib/editorial";
import {
  buildMarkdownDocument,
  extractCanonical,
  extractMainContent,
  extractMetaContent,
  extractTitle,
  htmlToMarkdown,
} from "@/lib/agent/html-to-markdown";
import { buildNotFoundMarkdown } from "@/lib/agent/site-index";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/** Set on the internal request so a rendered page can never re-enter this route. */
const RENDER_MARKER = "x-aaxrp-markdown-render";

// No X-Robots-Tag here: this response is served under the page's own canonical
// URL through a rewrite, so a noindex directive would apply to the HTML
// representation as well.
const MARKDOWN_HEADERS = {
  "Content-Type": "text/markdown; charset=utf-8",
  Vary: "Accept, Accept-Encoding",
} as const;

/**
 * Resolves the public origin of the incoming request. Behind Netlify the
 * function sees its own internal host, so the forwarded headers win when they
 * are present.
 */
function requestOrigin(request: Request): string {
  const forwardedHost = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (!forwardedHost) return SITE_URL;
  const protocol = request.headers.get("x-forwarded-proto")
    ?? (forwardedHost.startsWith("localhost") || forwardedHost.startsWith("127.0.0.1") ? "http" : "https");
  return `${protocol}://${forwardedHost}`;
}

function canonicalUrl(pathname: string): string {
  return `${SITE_URL}${pathname === "/" ? "" : pathname}`;
}

/**
 * Renders one page as Markdown by reading the representation the site already
 * serves and converting it. The HTML is the single source of truth, so the two
 * representations cannot drift apart.
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug?: string[] }> },
) {
  const { slug = [] } = await params;
  const pathname = `/${slug.map((segment) => encodeURIComponent(segment)).join("/")}`;

  if (request.headers.get(RENDER_MARKER)) {
    return new Response("Markdown rendering loop detected.\n", {
      status: 508,
      headers: { "Content-Type": "text/plain; charset=utf-8", Vary: "Accept" },
    });
  }

  const search = new URL(request.url).search;
  let upstream: Response;
  try {
    upstream = await fetch(`${requestOrigin(request)}${pathname}${search}`, {
      headers: {
        Accept: "text/html,application/xhtml+xml",
        [RENDER_MARKER]: "1",
        "User-Agent": "AllAboutXRP-markdown-renderer",
      },
      redirect: "manual",
      cache: "no-store",
    });
  } catch {
    return new Response(
      `# Temporarily unavailable\n\nThe Markdown representation of ${canonicalUrl(pathname)} could not be rendered. Retry, or request the HTML representation.\n`,
      { status: 503, headers: { ...MARKDOWN_HEADERS } },
    );
  }

  if (upstream.status >= 300 && upstream.status < 400) {
    const location = upstream.headers.get("location");
    return new Response(
      `# Moved\n\n${canonicalUrl(pathname)} redirects to ${location ?? "another URL"}. Request that URL instead.\n`,
      {
        status: upstream.status,
        headers: { ...MARKDOWN_HEADERS, ...(location ? { Location: location } : {}) },
      },
    );
  }

  if (upstream.status === 404 || upstream.status === 410) {
    return new Response(`${buildNotFoundMarkdown(pathname)}\n`, {
      status: upstream.status,
      headers: { ...MARKDOWN_HEADERS, "Cache-Control": "public, max-age=0, s-maxage=60" },
    });
  }

  if (!upstream.ok) {
    return new Response(
      `# Temporarily unavailable\n\nThe origin returned HTTP ${upstream.status} for ${canonicalUrl(pathname)}.\n`,
      { status: 502, headers: { ...MARKDOWN_HEADERS } },
    );
  }

  const html = await upstream.text();
  const canonical = extractCanonical(html) ?? canonicalUrl(pathname);
  const title = extractTitle(html);
  const description = extractMetaContent(html, "description");
  const body = htmlToMarkdown(extractMainContent(html), { baseUrl: canonical });

  const document = buildMarkdownDocument({
    title,
    description,
    body,
    canonical,
    indexUrl: `${SITE_URL}/llms-full.txt`,
  });

  return new Response(document, {
    status: 200,
    headers: {
      ...MARKDOWN_HEADERS,
      "Cache-Control": "public, max-age=0, s-maxage=300, stale-while-revalidate=86400",
      Link: `<${canonical}>; rel="canonical"`,
    },
  });
}

/** `curl -I` is the documented compliance check, so HEAD must answer too. */
export async function HEAD(
  request: Request,
  context: { params: Promise<{ slug?: string[] }> },
) {
  const response = await GET(request, context);
  return new Response(null, { status: response.status, headers: response.headers });
}
