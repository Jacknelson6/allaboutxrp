import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }

    const apiKey = process.env.BEEHIIV_API_KEY;
    if (!apiKey) {
      console.error("BEEHIIV_API_KEY not set");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const res = await fetch(
      "https://api.beehiiv.com/v2/publications/pub_e0b3b05a-b169-4159-8606-3fa011fd6fa5/subscriptions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          email,
          reactivate_existing: true,
          send_welcome_email: true,
        }),
      }
    );

    if (!res.ok) {
      const text = await res.text();
      console.error("Beehiiv error:", res.status, text);
      return NextResponse.json({ error: "Subscription failed. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Newsletter API error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
