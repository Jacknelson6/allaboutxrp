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
          background: "linear-gradient(135deg, #000000 0%, #001a33 50%, #000000 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle glow behind logo */}
        <div
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,133,255,0.15) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -55%)",
            display: "flex",
          }}
        />

        {/* XRP X symbol */}
        <svg viewBox="0 0 512 424" width="100" height="83" style={{ marginBottom: 24 }}>
          <path d="M437,0h74L357,152.48c-55.77,55.19-146.19,55.19-202,0L.94,0H75L192,115.83a91.11,91.11,0,0,0,127.91,0Z" fill="#0085FF"/>
          <path d="M74.05,424H0L155,270.58c55.77-55.19,146.19-55.19,202,0L512,424H438L320,307.23a91.11,91.11,0,0,0-127.91,0Z" fill="#0085FF"/>
        </svg>

        {/* Text */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 12,
            fontSize: 56,
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 40, fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.08em" }}>All About</span>
          <span style={{ color: "#ffffff", fontSize: 56, fontWeight: 700 }}>XRP</span>
        </div>
        <p
          style={{
            marginTop: 16,
            fontSize: 22,
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "0.02em",
          }}
        >
          Live Data · Education · Community · Everything XRP
        </p>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, transparent, #0085FF, transparent)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
