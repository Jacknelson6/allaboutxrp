import { ImageResponse } from "next/og";
import { getNewsArticle } from "@/lib/news-content";

export const alt = "AllAboutXRP original news analysis";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const article = getNewsArticle((await params).slug);
  const title = article?.title || "AllAboutXRP News";
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px", color: "white", background: "radial-gradient(circle at 80% 10%, #075d9d 0%, #071321 38%, #03070c 78%)", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", fontSize: 28, color: "#61b8ff", letterSpacing: 2 }}>ALL ABOUT XRP • NEWS</div>
      <div style={{ display: "flex", maxWidth: 1000, fontSize: title.length > 72 ? 48 : 58, fontWeight: 800, lineHeight: 1.08 }}>{title}</div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#a8b4c2" }}><span>Source-led reporting</span><span>allaboutxrp.com</span></div>
    </div>, size,
  );
}
