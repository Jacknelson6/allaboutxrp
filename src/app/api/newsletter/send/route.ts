import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { render } from "@react-email/components";
import WeeklyNewsletter, { WeeklyNewsletterProps } from "@/emails/weekly-newsletter";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}
const SEND_SECRET = process.env.NEWSLETTER_SEND_SECRET;
const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY;
const PUB_ID = "pub_e0b3b05a-b169-4159-8606-3fa011fd6fa5";

interface Subscriber {
  email: string;
  status: string;
}

async function getActiveSubscribers(): Promise<string[]> {
  const emails: string[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${PUB_ID}/subscriptions?status=active&limit=100&page=${page}`,
      { headers: { Authorization: `Bearer ${BEEHIIV_API_KEY}` } }
    );

    if (!res.ok) {
      console.error("Beehiiv fetch error:", res.status, await res.text());
      break;
    }

    const data = await res.json();
    const subs: Subscriber[] = data.data || [];
    emails.push(...subs.filter((s) => s.status === "active").map((s) => s.email));

    if (subs.length < 100 || !data.next_page) {
      hasMore = false;
    } else {
      page++;
    }
  }

  return emails;
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
