import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";

  // If visiting threexrp.dev, rewrite root to /live
  if (hostname.includes("threexrp.dev") && request.nextUrl.pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/live";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
