import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "#0085FF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          fontSize: 18,
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
