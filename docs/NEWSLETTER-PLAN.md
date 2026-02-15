# Newsletter Platform Recommendation for AllAboutXRP

## TL;DR

**Winner: Beehiiv** — Best combination of official API, generous free tier, custom domain support, and website embedding. Buttondown is a strong #2 if you want simplicity. Substack is last due to no official API.

---

## Platform Comparison

| Feature | Substack | Beehiiv | Buttondown |
|---------|----------|---------|------------|
| **Official API** | ❌ None (unofficial cookie-based hacks) | ✅ Full REST API with Create Post endpoint | ✅ Full REST API, dead simple |
| **Auth Method** | Browser cookies (fragile) | API key (Bearer token) | API key (Token header) |
| **Free Tier** | Free (unlimited) | Free up to 2,500 subs | Free up to 100 subs |
| **Custom Domain** | ❌ (paid only) | ✅ Free tier includes custom domain | ❌ (paid plans only, $9+/mo) |
| **Embed on Website** | Limited (iframe) | ✅ Native embed, hosted site, link-in-bio | Basic embed widget |
| **API for Posting** | ❌ Unofficial only | ✅ `POST /publications/{id}/posts` | ✅ `POST /v1/emails` |
| **Markdown Support** | Via unofficial API | HTML content | ✅ Auto-detects Markdown |
| **Webhook Support** | ❌ | ✅ | ✅ |
| **Branding Removal** | Paid | Max plan ($96/mo) | Paid |
| **Automation Score** | 2/10 | 9/10 | 10/10 |

---

## Detailed Analysis

### Substack — ❌ Not Recommended
**Pros:**
- Large built-in audience/discovery network
- Free forever, no subscriber limits
- Brand recognition

**Cons:**
- **No official API whatsoever** — relies on reverse-engineered cookie auth that can break any time
- Cookie sessions expire, requiring manual browser login to refresh
- No webhook, no programmatic scheduling
- Automation is a house of cards

**Verdict:** Great for manual writers. Terrible for automated weekly digests.

### Beehiiv — ✅ Recommended
**Pros:**
- Official, documented REST API at `developers.beehiiv.com`
- Create Post endpoint for programmatic publishing
- Free tier: 2,500 subscribers, unlimited sends, custom domain, analytics
- Website hosting built-in (can embed newsletter on allaboutxrp.com)
- API key auth (stable, no cookie nonsense)
- Subscriber management API, webhooks
- Growing platform with strong developer focus

**Cons:**
- Beehiiv branding on free tier (removable at $96/mo)
- API doesn't include "Send" trigger on free plan — may need Scale ($43/mo) for full send API
- Newer platform (less brand recognition than Substack)

**Verdict:** Best balance of features, API quality, and free tier for our use case.

### Buttondown — 🥈 Strong Alternative
**Pros:**
- **Best API by far** — clean, well-documented, Markdown-native
- Simple `POST /v1/emails` with `status: "sent"` = instant publish
- API key auth, versioned API
- Developer-first philosophy
- Affordable paid plans ($9/mo for 1K subs)

**Cons:**
- Free tier limited to **100 subscribers** (too small)
- No custom domain on free tier
- No built-in website/embed hosting
- Smaller community, less discovery

**Verdict:** Best API, but the 100-subscriber free limit is restrictive. Great if we're willing to pay $9/mo from day one.

---

## Recommendation: Start with Beehiiv

### Why Beehiiv Wins
1. **2,500 free subscribers** — room to grow before paying
2. **Official API** with Create Post — reliable automation
3. **Custom domain on free tier** — newsletter@allaboutxrp.com
4. **Website embed** — subscribe widget on the site
5. **Analytics** — track opens, clicks, growth

### Fallback Plan
If Beehiiv's free-tier API limitations block automated sending, switch to **Buttondown** at $9/mo. Its API is the cleanest in the space.

---

## Implementation: Beehiiv Setup

### 1. Create Account
- Sign up at beehiiv.com
- Publication name: "AllAboutXRP Weekly"
- Set up custom domain: `newsletter.allaboutxrp.com` (add CNAME in DNS)

### 2. Generate API Key
- Dashboard → Settings → API → Create New API Key
- Store in `~/.config/beehiiv/api_key`

### 3. Get Publication ID
```bash
curl -H "Authorization: Bearer $BEEHIIV_API_KEY" \
  https://api.beehiiv.com/v2/publications
```

### 4. Create Post (Programmatic)
```bash
curl -X POST "https://api.beehiiv.com/v2/publications/$PUB_ID/posts" \
  -H "Authorization: Bearer $BEEHIIV_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "XRP Weekly: Ripple Partners with UAE Bank | Week of Feb 10",
    "subtitle": "Plus: XRPL Token Escrow goes live, exchange reserves drop",
    "content": "<h1>Market Summary</h1><p>...</p>",
    "status": "draft"
  }'
```

### 5. Automation Script (Weekly Cron)
```
# Every Sunday at 10am CT
0 10 * * 0 ~/clawd/scripts/publish_xrp_digest.sh
```

Script flow:
1. Fetch XRP price data (CoinGecko API)
2. Fetch top stories (web search / RSS)
3. Fetch on-chain data (XRPL API / Whale Alert)
4. Generate digest with LLM (Ollama or Claude)
5. POST to Beehiiv API
6. Notify Jack for review before sending

### 6. Embed on allaboutxrp.com
- Use Beehiiv's subscribe form embed code
- Or custom form POSTing to Beehiiv's subscription API

---

## Weekly Digest Format

### Title Template
`XRP Weekly: [Top Headline] | Week of [Month Day]`

### Sections
1. **📊 Market Summary** — Price action, volume, key levels, weekly change
2. **📰 Top Stories** — 3-5 stories with 2-3 sentence summaries
3. **⛓️ On-Chain Activity** — Escrow unlocks, whale movements, exchange flows
4. **💬 Community Pulse** — Top tweets, sentiment gauge, trending topics
5. **🔮 What to Watch Next Week** — Upcoming events, levels to watch, catalysts

### Design Notes
- Keep it scannable: bold key numbers, use bullet points
- Target length: 800-1200 words
- Include 1-2 charts/images when possible
- CTA at bottom: "Share with an XRP holder" + social links
