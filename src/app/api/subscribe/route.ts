import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";

async function syncToBeehiiv(email: string) {
  const apiKey = process.env.BEEHIIV_API_KEY;
  const pubId = process.env.BEEHIIV_PUBLICATION_ID;

  if (!apiKey || !pubId) {
    console.warn("Beehiiv sync skipped: missing BEEHIIV_API_KEY or BEEHIIV_PUBLICATION_ID");
    return;
  }

  try {
    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${pubId}/subscriptions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          reactivate_existing: true,
          send_welcome_email: false,
        }),
      }
    );

    if (!res.ok) {
      const body = await res.text();
      console.error("Beehiiv sync failed:", res.status, body);
    }
  } catch (err) {
    console.error("Beehiiv sync error:", err);
  }
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const normalizedEmail = email.toLowerCase().trim();
    const supabase = createServiceClient();

    // Upsert: if they unsubscribed before, reactivate
    const { error } = await supabase
      .from("subscribers")
      .upsert(
        { email: normalizedEmail, active: true, unsubscribed_at: null },
        { onConflict: "email" }
      );

    if (error) {
      console.error("Subscribe error:", error);
      return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
    }

    // Sync to Beehiiv (fire-and-forget, don't block response)
    syncToBeehiiv(normalizedEmail);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
