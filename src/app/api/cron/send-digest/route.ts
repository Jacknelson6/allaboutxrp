import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";
import { sendDigestBatch } from "@/lib/resend";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

async function fetchBeehiivSubscribers(): Promise<string[] | null> {
  const beehiivKey = process.env.BEEHIIV_API_KEY;
  const pubId = process.env.BEEHIIV_PUBLICATION_ID;

  if (!beehiivKey || !pubId) {
    return null; // Not configured, fall back to Supabase
  }

  const emails: string[] = [];
  let page = 1;

  try {
    while (true) {
      const res = await fetch(
        `https://api.beehiiv.com/v2/publications/${pubId}/subscriptions?status=active&limit=100&page=${page}`,
        {
          headers: { Authorization: `Bearer ${beehiivKey}` },
        }
      );

      if (!res.ok) {
        console.error("Beehiiv API error:", res.status, await res.text());
        return null; // Fall back to Supabase
      }

      const data = await res.json();
      const subs = data.data || [];

      if (subs.length === 0) break;

      for (const sub of subs) {
        if (sub.email) emails.push(sub.email);
      }

      // Check if there are more pages
      if (!data.next_page || subs.length < 100) break;
      page++;
    }

    return emails.length > 0 ? emails : null;
  } catch (err) {
    console.error("Beehiiv fetch error:", err);
    return null;
  }
}

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

  // Try Beehiiv first, fall back to Supabase
  let emails: string[] = [];
  let source = "beehiiv";

  const beehiivEmails = await fetchBeehiivSubscribers();

  if (beehiivEmails && beehiivEmails.length > 0) {
    emails = beehiivEmails;
  } else {
    source = "supabase";
    const { data: subscribers, error: subError } = await supabase
      .from("subscribers")
      .select("email")
      .eq("active", true);

    if (subError) {
      console.error("Fetch subscribers error:", subError);
      return NextResponse.json({ error: "Failed to fetch subscribers" }, { status: 500 });
    }

    emails = (subscribers || []).map((s: { email: string }) => s.email);
  }

  if (emails.length === 0) {
    return NextResponse.json({ error: "No active subscribers" }, { status: 404 });
  }

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

    return NextResponse.json({
      success: true,
      emails_sent: sent,
      digest_id: digest.id,
      subscriber_source: source,
    });
  } catch (err) {
    console.error("Send digest error:", err);
    return NextResponse.json({ error: "Failed to send emails" }, { status: 500 });
  }
}

// Also support GET for Vercel cron (crons call GET)
export async function GET(request: NextRequest) {
  return POST(request);
}
