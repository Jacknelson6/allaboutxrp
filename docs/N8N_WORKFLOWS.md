# N8N Workflows - AllAboutXRP

## Instance
- URL: https://jacknelson.app.n8n.cloud

---

## 1. XRP Weekly Analysis Generator
- **Workflow ID:** `gi03w40lOZ0pylrX`
- **Schedule:** Weekly on Monday at 6 AM
- **Webhook URL:** `https://jacknelson.app.n8n.cloud/webhook/xrp-weekly-analysis`
- **Webhook Method:** POST
- **Webhook Auth:** Header Auth (bearer token: `xrp-analysis-trigger-2026`)
- **Nodes:** Schedule Trigger, Webhook Trigger, Set Date Range, Binance Price Data, CoinGecko Market/Global/BTC/ETH Data, XRPScan Escrow Data, Supabase News Query, Yahoo Finance SP500/DXY, Merge All Data, Build Prompt, OpenRouter Claude API, Prepare Supabase Payload, Write to Supabase
- **Status:** Active

---

## 2. AllAboutXRP News Collector
- **Workflow ID:** `3tDR9dlwqv50LDFO`
- **Schedule:** Every 4 hours (`0 */4 * * *`)
- **Webhook URL:** `https://jacknelson.app.n8n.cloud/webhook/xrp-news-collect`
- **Webhook Method:** POST
- **Webhook Auth:** Header Auth
- **Flow:** Fetch RSS (CoinDesk, CoinTelegraph, CryptoNews, TheBlock) → Check existing in Supabase → Filter duplicates → Score with Claude Sonnet via OpenRouter → Filter score ≥ 8 → Write to Supabase `news_articles`
- **Status:** Active

---

## Triggering Webhooks

```bash
# XRP Weekly Analysis
curl -X POST https://jacknelson.app.n8n.cloud/webhook/xrp-weekly-analysis \
  -H "Authorization: Bearer xrp-analysis-trigger-2026"

# News Collector
curl -X POST https://jacknelson.app.n8n.cloud/webhook/xrp-news-collect \
  -H "Authorization: Bearer xrp-news-collect-2026"
```

*Note: Webhook auth requires configuring Header Auth credentials in N8N UI for the webhook nodes to validate tokens.*
