import { getAllRecaps } from "@/lib/utils/news";

export async function GET() {
  const recaps = getAllRecaps();
  // Google News sitemap only includes articles from the last 2 days
  const twoDaysAgo = new Date();
  twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

  const recentRecaps = recaps.filter(
    (r) => new Date(r.date) >= twoDaysAgo
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${recentRecaps
  .map(
    (r) => `  <url>
    <loc>https://allaboutxrp.com/news/recaps/${r.date}</loc>
    <news:news>
      <news:publication>
        <news:name>AllAboutXRP</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${r.date}T12:00:00Z</news:publication_date>
      <news:title>${escapeXml(r.title)}</news:title>
    </news:news>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
