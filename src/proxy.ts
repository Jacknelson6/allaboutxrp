import { NextRequest, NextResponse } from "next/server";
import {
  MARKDOWN_TYPE,
  appendVaryAccept,
  isNegotiablePath,
  preferredType,
} from "@/lib/agent/accept";

/** Endpoints from the retired newsletter/digest product, kept answering 410. */
const isRetiredPath = (pathname: string): boolean =>
  pathname === "/digest" ||
  pathname.startsWith("/digest/") ||
  pathname === "/api/digests" ||
  pathname.startsWith("/api/digests/") ||
  pathname === "/api/cron/send-digest" ||
  pathname === "/api/newsletter/send" ||
  pathname === "/api/newsletter/preview" ||
  pathname === "/api/newsletter" ||
  pathname === "/api/subscribe" ||
  pathname === "/subscribe";

/**
 * Maps a `.md` sibling URL back to the page it represents.
 * `/learn/what-is-xrp.md` → `/learn/what-is-xrp`, `/index.md` → `/`.
 */
function pathFromMarkdownUrl(pathname: string): string {
  const stripped = pathname.slice(0, -".md".length);
  if (stripped === "" || stripped === "/" || stripped === "/index") return "/";
  return stripped;
}

/** The `.md` sibling advertised for a page, the target of `rel="alternate"`. */
function markdownUrlForPath(pathname: string): string {
  if (pathname === "/") return "/index.md";
  return `${pathname.replace(/\/$/, "")}.md`;
}

function markdownRewrite(request: NextRequest, targetPath: string) {
  const url = request.nextUrl.clone();
  url.pathname = `/api/markdown${targetPath === "/" ? "" : targetPath}`;
  const response = NextResponse.rewrite(url);
  appendVaryAccept(response.headers);
  return response;
}

export function proxy(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const pathname = request.nextUrl.pathname;

  if (isRetiredPath(pathname)) {
    return new NextResponse("This retired feature is no longer available.", {
      status: 410,
      headers: { "Content-Type": "text/plain; charset=utf-8", "X-Robots-Tag": "noindex" },
    });
  }

  if (hostname.includes("threexrp.dev") && pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/live";
    return NextResponse.rewrite(url);
  }

  // Static files, framework internals, and generated image routes are served
  // as-is: they have exactly one representation, so negotiating them would only
  // produce spurious 406s.
  if (!isNegotiablePath(pathname)) return NextResponse.next();

  // An explicit `.md` URL always means Markdown, whatever the client sends —
  // this is the target of the `rel="alternate"` link, and crawlers that follow
  // it may send no Accept header at all.
  if (pathname.endsWith(".md")) {
    return markdownRewrite(request, pathFromMarkdownUrl(pathname));
  }

  const accept = request.headers.get("accept");
  const chosen = preferredType(accept);

  if (chosen === MARKDOWN_TYPE) {
    return markdownRewrite(request, pathname);
  }

  if (chosen === null) {
    return new NextResponse("Not Acceptable\n\nAvailable: text/html, text/markdown\n", {
      status: 406,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        Vary: "Accept",
      },
    });
  }

  const response = NextResponse.next();
  appendVaryAccept(response.headers);
  response.headers.set(
    "Link",
    `<${markdownUrlForPath(pathname)}>; rel="alternate"; type="text/markdown"`,
  );
  return response;
}

export const config = {
  matcher: [
    // Everything a reader can navigate to, plus `.md` siblings. Excludes API
    // routes, framework internals, and any path that names a concrete file.
    "/((?!api/|_next/|_vercel/|.*\\.(?!md$)[^/.]*$).*)",
    // Retired endpoints that still have to answer 410.
    "/api/digests",
    "/api/digests/:path*",
    "/api/cron/send-digest",
    "/api/newsletter",
    "/api/newsletter/:path*",
    "/api/subscribe",
  ],
};
