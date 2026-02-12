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
          borderRadius: 36,
          background: "#000000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg viewBox="0 0 512 424" width="120" height="100">
          <path d="M437,0h74L357,152.48c-55.77,55.19-146.19,55.19-202,0L.94,0H75L192,115.83a91.11,91.11,0,0,0,127.91,0Z" fill="#0085FF"/>
          <path d="M74.05,424H0L155,270.58c55.77-55.19,146.19-55.19,202,0L512,424H438L320,307.23a91.11,91.11,0,0,0-127.91,0Z" fill="#0085FF"/>
        </svg>
      </div>
    ),
    { ...size }
  );
}
