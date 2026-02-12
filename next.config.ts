import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "unavatar.io" },
      { protocol: "https", hostname: "pbs.twimg.com" },
      { protocol: "https", hostname: "abs.twimg.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: '/richlist', destination: '/people', permanent: true },
      { source: '/get-started', destination: '/how-to-start', permanent: true },
      { source: '/live', destination: '/live-chart', permanent: true },
      { source: '/charts', destination: '/live-chart', permanent: true },
      { source: '/etf', destination: '/live-chart', permanent: true },
      { source: '/holders', destination: '/people', permanent: true },
      { source: '/acquisitions', destination: '/people', permanent: true },
      { source: '/escrow', destination: '/people', permanent: true },
      { source: '/riddlers', destination: '/people', permanent: true },
    ];
  },
};

export default nextConfig;
