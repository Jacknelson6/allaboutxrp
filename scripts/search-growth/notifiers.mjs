import { invariant } from "./utils.mjs";

function summary(report) {
  const top = report.opportunities.slice(0, 3).map((item, index) => `${index + 1}. ${item.query} | priority ${item.priority} | ${item.interventionType}`).join("\n");
  return [
    `${report.site.name} search growth run ${report.runId}`,
    `${report.opportunities.length} human-review opportunities`,
    `Period: ${report.periods.current.start} to ${report.periods.current.end}`,
    top || "No eligible opportunities",
    `AEO/GEO: review in RankPrompt at ${report.site.rankPromptUrl}`
  ].join("\n\n");
}

export function buildNotification({ provider, report }) {
  const text = summary(report);
  if (provider === "telegram") {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    return {
      provider,
      configured: Boolean(token && chatId),
      endpoint: token ? `https://api.telegram.org/bot${token}/sendMessage` : null,
      payload: { chat_id: chatId ?? "[TELEGRAM_CHAT_ID]", text, disable_web_page_preview: true }
    };
  }
  if (provider === "google-chat") {
    const endpoint = process.env.GOOGLE_CHAT_WEBHOOK_URL;
    return { provider, configured: Boolean(endpoint), endpoint: endpoint ?? null, payload: { text } };
  }
  invariant(provider === "none", `Unsupported notification provider: ${provider}`);
  return { provider: "none", configured: false, endpoint: null, payload: { text } };
}

export async function sendNotification({ provider, report, dryRun = false, fetchImpl = fetch }) {
  const notification = buildNotification({ provider, report });
  if (provider === "none" || dryRun) return { provider, sent: false, dryRun: true, payload: notification.payload };
  invariant(notification.configured, `${provider} is missing required environment variables`);
  const response = await fetchImpl(notification.endpoint, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(notification.payload)
  });
  invariant(response.ok, `${provider} notification failed with HTTP ${response.status}`);
  return { provider, sent: true, dryRun: false };
}
