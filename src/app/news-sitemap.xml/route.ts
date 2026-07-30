import { getAllRecaps } from "@/lib/utils/news";
import { getPublishedNewsEntries } from "@/lib/seo/published-content";

export const revalidate = 3600;

export async function GET() {
  const recaps = getAllRecaps();
  const publishedNews = await getPublishedNewsEntries();
  // Google News sitemap only includes articles from the last 2 days
  const now = Date.now();
  const twoDaysAgo = now - 2 * 24 * 60 * 60 * 1000;

  const recentRecaps = recaps.filter(
    (r) => {
      const publishedAt = Date.parse(`${r.date}T12:00:00Z`);
      return publishedAt >= twoDaysAgo && publishedAt <= now;
    },
  );

  const recentNews = publishedNews.filter((article) => {
    const publishedAt = Date.parse(article.publishedAt);
    return publishedAt >= twoDaysAgo && publishedAt <= now;
  });

  const urls = [
    ...recentNews.map((article) => ({
      loc: `https://allaboutxrp.com/news/${article.slug}`,
      publicationDate: article.publishedAt,
      title: article.title,
    })),
    ...recentRecaps.map((recap) => ({
      loc: `https://allaboutxrp.com/news/recaps/${recap.date}`,
      publicationDate: `${recap.date}T12:00:00Z`,
      title: recap.title,
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urls
  .map(
    (entry) => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
    <news:news>
      <news:publication>
        <news:name>AllAboutXRP</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${escapeXml(entry.publicationDate)}</news:publication_date>
      <news:title>${escapeXml(entry.title)}</news:title>
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
