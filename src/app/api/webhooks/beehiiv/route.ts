import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Beehiiv webhook payload contains subscriber data
    // Accept all POSTs for now (validation can be added later with signing secret)
    const email =
      body?.data?.email ||
      body?.email ||
      body?.subscriber?.email;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "No valid email in payload" }, { status: 400 });
    }

    const normalizedEmail = email.toLowerCase().trim();
    const supabase = createServiceClient();

    // Upsert into subscribers table
    const { error } = await supabase
      .from("subscribers")
      .upsert(
        { email: normalizedEmail, active: true, unsubscribed_at: null },
        { onConflict: "email" }
      );

    if (error) {
      console.error("Beehiiv webhook upsert error:", error);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
