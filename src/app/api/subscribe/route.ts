import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";

async function syncToBeehiiv(email: string): Promise<boolean> {
  const apiKey = process.env.BEEHIIV_API_KEY;
  const pubId = process.env.BEEHIIV_PUBLICATION_ID;

  if (!apiKey || !pubId) {
    return false;
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
      return false;
    }

    return true;
  } catch (err) {
    console.error("Beehiiv sync error:", err);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Beehiiv is the PRIMARY action
    const beehiivSuccess = await syncToBeehiiv(normalizedEmail);

    // Always save to Supabase (for email gate on /digest page)
    const supabase = createServiceClient();
    const { error } = await supabase
      .from("subscribers")
      .upsert(
        { email: normalizedEmail, active: true, unsubscribed_at: null },
        { onConflict: "email" }
      );

    if (error) {
      console.error("Subscribe error:", error);
      // If Beehiiv succeeded, still return success
      if (beehiivSuccess) {
        return NextResponse.json({ success: true, source: "beehiiv" });
      }
      return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
