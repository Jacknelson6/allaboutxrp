import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/components";
import WeeklyNewsletter, { WeeklyNewsletterProps } from "@/emails/weekly-newsletter";

export async function POST(req: NextRequest) {
  try {
    const props: WeeklyNewsletterProps = await req.json();
    const html = await render(WeeklyNewsletter(props));
    return new NextResponse(html, {
      headers: { "Content-Type": "text/html" },
    });
  } catch (err) {
    console.error("Preview error:", err);
    return NextResponse.json({ error: "Failed to render preview" }, { status: 500 });
  }
}
