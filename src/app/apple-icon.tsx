import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 40,
          background: "#0085FF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          fontSize: 100,
          fontWeight: 800,
          color: "white",
          letterSpacing: "-0.05em",
        }}
      >
        X
      </div>
    ),
    { ...size }
  );
}
