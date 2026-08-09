import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const pathname = request.nextUrl.pathname;

  if (
    pathname === "/digest" ||
    pathname.startsWith("/digest/") ||
    pathname === "/api/digests" ||
    pathname.startsWith("/api/digests/") ||
    pathname === "/api/cron/send-digest" ||
    pathname === "/api/newsletter/send" ||
    pathname === "/api/newsletter/preview" ||
    pathname === "/api/newsletter" ||
    pathname === "/api/subscribe" ||
    pathname === "/subscribe"
  ) {
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

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/digest",
    "/digest/:path*",
    "/api/digests",
    "/api/digests/:path*",
    "/api/cron/send-digest",
    "/api/newsletter",
    "/api/newsletter/:path*",
    "/api/subscribe",
    "/subscribe",
  ],
};
