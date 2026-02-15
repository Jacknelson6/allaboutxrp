import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";
import { Resend } from "resend";
import { render } from "@react-email/components";
import WeeklyNewsletter, { WeeklyNewsletterProps } from "@/emails/weekly-newsletter";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}
const SEND_SECRET = process.env.NEWSLETTER_SEND_SECRET;

async function getActiveSubscribers(): Promise<string[]> {
  const supabase = createServiceClient();
  const { data, error } = await supabase
    .from("subscribers")
    .select("email")
    .eq("active", true);

  if (error) {
    console.error("Fetch subscribers error:", error);
    return [];
  }

  return (data || []).map((s) => s.email);
}

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!SEND_SECRET || authHeader !== `Bearer ${SEND_SECRET}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const {
      testEmail,
      subject,
      ...templateProps
    }: { testEmail?: string; subject?: string } & WeeklyNewsletterProps = body;

    // Render email HTML
    const emailHtml = await render(WeeklyNewsletter(templateProps));

    // Get recipients
    let recipients: string[];
    if (testEmail) {
      recipients = [testEmail];
    } else {
      recipients = await getActiveSubscribers();
      if (recipients.length === 0) {
        return NextResponse.json({ error: "No active subscribers found" }, { status: 400 });
      }
    }

    // Send in batches of 50 (Resend batch limit)
    const results = [];
    const batchSize = 50;

    for (let i = 0; i < recipients.length; i += batchSize) {
      const batch = recipients.slice(i, i + batchSize);
      const sends = batch.map((to) =>
        getResend().emails.send({
          from: "AllAboutXRP <newsletter@allaboutxrp.com>",
          to,
          subject: subject || templateProps.title || "AllAboutXRP Weekly",
          html: emailHtml,
        })
      );
      const batchResults = await Promise.allSettled(sends);
      results.push(...batchResults);
    }

    const succeeded = results.filter((r) => r.status === "fulfilled").length;
    const failed = results.filter((r) => r.status === "rejected").length;

    return NextResponse.json({
      success: true,
      sent: succeeded,
      failed,
      total: recipients.length,
      testMode: !!testEmail,
    });
  } catch (err) {
    console.error("Newsletter send error:", err);
    return NextResponse.json({ error: "Failed to send newsletter" }, { status: 500 });
  }
}
