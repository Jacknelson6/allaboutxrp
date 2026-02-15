import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface DigestContent {
  key_news?: string;
  price_action?: string;
  price_outlook?: string;
  macro_watch?: string;
  [key: string]: unknown;
}

interface DigestData {
  title: string;
  slug: string;
  content: DigestContent;
}

function sectionHtml(heading: string, body: string): string {
  return `
    <tr>
      <td style="padding: 24px 0 8px 0;">
        <h2 style="margin:0;font-size:18px;font-weight:700;color:#0085FF;text-transform:uppercase;letter-spacing:1px;">${heading}</h2>
      </td>
    </tr>
    <tr>
      <td style="padding:0 0 16px 0;font-size:15px;line-height:1.6;color:#e0e0e0;">
        ${body.replace(/\n/g, "<br>")}
      </td>
    </tr>`;
}

function buildEmailHtml(digest: DigestData): string {
  const { title, slug, content } = digest;
  const siteUrl = "https://allaboutxrp.com";

  const sections: string[] = [];
  if (content.key_news) sections.push(sectionHtml("Key News", content.key_news));
  if (content.price_action) sections.push(sectionHtml("Price Action", content.price_action));
  if (content.price_outlook) sections.push(sectionHtml("Price Outlook", content.price_outlook));
  if (content.macro_watch) sections.push(sectionHtml("Macro Watch", content.macro_watch));

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#000000;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#000000;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
          <!-- Header -->
          <tr>
            <td style="padding:0 0 24px 0;text-align:center;">
              <h1 style="margin:0;font-size:28px;font-weight:800;color:#ffffff;">All About <span style="color:#0085FF;">XRP</span></h1>
              <p style="margin:4px 0 0 0;font-size:13px;color:#888;">Weekly Digest</p>
            </td>
          </tr>
          <!-- Title -->
          <tr>
            <td style="padding:16px 24px;background-color:#111111;border-radius:12px;border-left:4px solid #0085FF;">
              <h2 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;">${title}</h2>
            </td>
          </tr>
          <!-- Sections -->
          <tr>
            <td style="padding:8px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${sections.join("")}
              </table>
            </td>
          </tr>
          <!-- Read online -->
          <tr>
            <td align="center" style="padding:24px 0;">
              <a href="${siteUrl}/digest/${slug}" style="display:inline-block;padding:12px 32px;background-color:#0085FF;color:#ffffff;text-decoration:none;border-radius:8px;font-weight:600;font-size:15px;">Read Full Digest →</a>
            </td>
          </tr>
          <!-- Divider -->
          <tr><td style="padding:16px 0;"><hr style="border:none;border-top:1px solid #222;"></td></tr>
          <!-- Footer -->
          <tr>
            <td style="padding:16px 0;text-align:center;font-size:12px;color:#666;">
              <p style="margin:0 0 8px 0;">
                <a href="https://allaboutxrp.com/digest" style="color:#0085FF;text-decoration:none;">View All Digests</a>
              </p>
              <p style="margin:0 0 8px 0;">
                <a href="${siteUrl}" style="color:#888;text-decoration:none;">allaboutxrp.com</a>
              </p>
              <p style="margin:0;">
                <a href="${siteUrl}/unsubscribe" style="color:#666;text-decoration:underline;">Unsubscribe</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function sendDigestEmail(email: string, digest: DigestData) {
  return resend.emails.send({
    from: "All About XRP <analysis@allaboutxrp.com>",
    to: email,
    subject: digest.title,
    html: buildEmailHtml(digest),
  });
}

export async function sendDigestBatch(emails: string[], digest: DigestData) {
  // Resend batch supports up to 100 emails per call
  const html = buildEmailHtml(digest);
  const batches: string[][] = [];
  for (let i = 0; i < emails.length; i += 100) {
    batches.push(emails.slice(i, i + 100));
  }

  let totalSent = 0;
  for (const batch of batches) {
    const { error } = await resend.batch.send(
      batch.map((to) => ({
        from: "All About XRP <analysis@allaboutxrp.com>",
        to,
        subject: digest.title,
        html,
      }))
    );
    if (error) {
      console.error("Batch send error:", error);
      throw new Error(`Batch send failed: ${error.message}`);
    }
    totalSent += batch.length;
  }

  return totalSent;
}
