import { ImageResponse } from "next/og";

export const alt = "XRP Whitepapers & Research Library | AllAboutXRP";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", background: "#fff", color: "#090b10", padding: "56px 64px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "2px solid #090b10", paddingBottom: 24, fontSize: 24 }}><span>ALL ABOUT XRP</span><span style={{ color: "#5c626b" }}>THE RESEARCH LIBRARY</span></div>
      <div style={{ display: "flex", flexDirection: "column", marginTop: 52, fontFamily: "serif", fontSize: 80, lineHeight: 1.08 }}><span>XRP whitepapers.</span><span style={{ color: "#176f92" }}>Go to the source.</span></div>
      <div style={{ display: "flex", marginTop: 32, fontSize: 26, color: "#5c626b", maxWidth: 970, lineHeight: 1.45 }}>Consensus research, Ripple, RLUSD, and the XRPL ecosystem. Original sources. Clear context.</div>
      <div style={{ display: "flex", marginTop: "auto", paddingTop: 20, borderTop: "1px solid #d9d9d9", fontSize: 21 }}>allaboutxrp.com/whitepapers</div>
    </div>,
    size,
  );
}
