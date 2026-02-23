import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
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
      // Legacy → canonical
      { source: '/richlist', destination: '/holders', permanent: true },
      { source: '/get-started', destination: '/how-to-start', permanent: true },
      { source: '/live', destination: '/live-chart', permanent: true },
      { source: '/charts', destination: '/live-chart', permanent: true },
      { source: '/etf', destination: '/live-chart', permanent: true },
      { source: '/escrow', destination: '/learn/escrow', permanent: true },
      { source: '/riddlers', destination: '/learn/riddlers', permanent: true },
      { source: '/acquisitions', destination: '/learn/acquisitions', permanent: true },
      // /people/* → /learn/*
      { source: '/people', destination: '/learn', permanent: true },
      { source: '/people/holders', destination: '/holders', permanent: true },
      { source: '/people/riddlers', destination: '/learn/riddlers', permanent: true },
      { source: '/people/acquisitions', destination: '/learn/acquisitions', permanent: true },
      { source: '/people/key-people', destination: '/learn/key-people', permanent: true },
      { source: '/people/partnerships', destination: '/learn/partnerships', permanent: true },
      { source: '/people/trusted-sources', destination: '/learn/trusted-sources', permanent: true },
      // Missing route redirects
      { source: '/blog', destination: '/news', permanent: true },
      { source: '/rlusd', destination: '/learn', permanent: false },
      { source: '/donate', destination: '/learn', permanent: false },
    ];
  },
};

export default nextConfig;
