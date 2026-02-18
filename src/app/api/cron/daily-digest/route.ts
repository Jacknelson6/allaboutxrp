import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

const CRON_SECRET = process.env.CRON_SECRET || "xrp-daily-digest-2026";

export async function GET(request: NextRequest) {
  // Vercel cron sends CRON_SECRET via header
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Forward to the actual daily digest POST endpoint
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://allaboutxrp.com";
  
  try {
    const res = await fetch(`${baseUrl}/api/news/daily-digest`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${CRON_SECRET}`,
      },
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
