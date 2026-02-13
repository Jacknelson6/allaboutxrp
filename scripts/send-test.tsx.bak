import { Resend } from "resend";
import { render } from "@react-email/render";
import WeeklyNewsletter from "../src/emails/weekly-newsletter";
import React from "react";

const resend = new Resend("re_R6kHCw7F_Zkjrbm2h9pAk4UynQj4b7myc");

async function main() {
  const html = await render(
    React.createElement(WeeklyNewsletter, {
      title: "Welcome to AllAboutXRP",
      subtitle: "The Signal, Not the Noise",
      introHtml: `<p style="color:#E7E9EA;margin:0">Your edge in the XRP ecosystem starts here. Real-time data, curated news, and tools built for serious holders — all in one place.</p>`,
      marketData: {
        price: "~$1.37",
        support: "$1.31",
        resistance: "$1.41",
        highlight: "Funding rates turning positive — watch for momentum shift above $1.38",
      },
      newsItems: [
        {
          title: "RLUSD Hits $1B Market Cap",
          summary: "Ripple's stablecoin crosses the billion-dollar milestone, signaling growing institutional adoption across the XRPL ecosystem.",
        },
        {
          title: "Ripple Partners with Aviva Investors",
          summary: "Major asset management firm Aviva Investors explores XRPL integration for tokenized fund distribution.",
        },
      ],
      featuresHtml: `
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          <tr><td style="color:#E7E9EA;font-size:14px;padding:6px 0">✦ <strong>Live XRP Dashboard</strong> — Price, volume, and key metrics at a glance</td></tr>
          <tr><td style="color:#E7E9EA;font-size:14px;padding:6px 0">✦ <strong>Curated News Feed</strong> — Only the stories that matter, zero noise</td></tr>
          <tr><td style="color:#E7E9EA;font-size:14px;padding:6px 0">✦ <strong>Technical Signals</strong> — Support, resistance, funding rates</td></tr>
          <tr><td style="color:#E7E9EA;font-size:14px;padding:6px 0">✦ <strong>Weekly Newsletter</strong> — This email, every week in your inbox</td></tr>
        </table>
      `,
      ctaText: "Explore AllAboutXRP →",
      ctaUrl: "https://allaboutxrp.com",
    })
  );

  const { data, error } = await resend.emails.send({
    from: "AllAboutXRP <onboarding@resend.dev>",
    to: ["jack@nativz.io"],
    subject: "Welcome to AllAboutXRP — The Signal, Not the Noise",
    html,
  });

  if (error) {
    console.error("Error:", error);
    process.exit(1);
  }
  console.log("Sent! ID:", data?.id);
}

main();
