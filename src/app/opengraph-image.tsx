import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AllAboutXRP — Everything You Need to Know About XRP";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0",
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: "-0.04em",
          }}
        >
          <span style={{ color: "#F0F0F0" }}>All</span>
          <span style={{ color: "#0085FF" }}>About</span>
          <span style={{ color: "#F0F0F0" }}>XRP</span>
        </div>
        <p
          style={{
            marginTop: 16,
            fontSize: 24,
            color: "#71767B",
            letterSpacing: "-0.01em",
          }}
        >
          Everything You Need to Know About XRP
        </p>
      </div>
    ),
    { ...size }
  );
}
