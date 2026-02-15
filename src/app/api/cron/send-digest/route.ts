import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";
import { sendDigestBatch } from "@/lib/resend";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function POST(request: NextRequest) {
  // Auth check
  const secret =
    request.headers.get("authorization")?.replace("Bearer ", "") ??
    request.nextUrl.searchParams.get("secret");
  if (secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createServiceClient();

  // Get latest unpublished digest
  const { data: digest, error: digestError } = await supabase
    .from("digests")
    .select("*")
    .is("published_at", null)
    .order("created_at", { ascending: false })
    .limit(1)
    .single();

  if (digestError || !digest) {
    return NextResponse.json({ error: "No unpublished digest found" }, { status: 404 });
  }

  // Get all active subscribers
  const { data: subscribers, error: subError } = await supabase
    .from("subscribers")
    .select("email")
    .eq("active", true);

  if (subError) {
    console.error("Fetch subscribers error:", subError);
    return NextResponse.json({ error: "Failed to fetch subscribers" }, { status: 500 });
  }

  if (!subscribers || subscribers.length === 0) {
    return NextResponse.json({ error: "No active subscribers" }, { status: 404 });
  }

  const emails = subscribers.map((s: { email: string }) => s.email);

  try {
    const sent = await sendDigestBatch(emails, {
      title: digest.title,
      slug: digest.slug,
      content: digest.content,
    });

    // Mark digest as published
    await supabase
      .from("digests")
      .update({ published_at: new Date().toISOString() })
      .eq("id", digest.id);

    return NextResponse.json({ success: true, emails_sent: sent, digest_id: digest.id });
  } catch (err) {
    console.error("Send digest error:", err);
    return NextResponse.json({ error: "Failed to send emails" }, { status: 500 });
  }
}
