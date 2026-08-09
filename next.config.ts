import type { NextConfig } from "next";
import { CANONICAL_ALIASES, NOINDEX_PATHS } from "./src/lib/seo/noindex-pages";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  outputFileTracingRoot: process.cwd(),
  turbopack: {
    root: process.cwd(),
  },
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
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
        ],
      },
      ...[...NOINDEX_PATHS].map((source) => ({
        source,
        headers: [{ key: "X-Robots-Tag", value: "noindex, follow" }],
      })),
    ];
  },
  async redirects() {
    return [
      ...[...CANONICAL_ALIASES].map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
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
      { source: '/people', destination: '/holders', permanent: true },
      { source: '/people/holders', destination: '/holders', permanent: true },
      { source: '/people/riddlers', destination: '/learn/riddlers', permanent: true },
      { source: '/people/acquisitions', destination: '/learn/acquisitions', permanent: true },
      { source: '/people/key-people', destination: '/learn/key-people', permanent: true },
      { source: '/people/partnerships', destination: '/learn/partnerships', permanent: true },
      { source: '/people/trusted-sources', destination: '/learn/trusted-sources', permanent: true },
      // Missing route redirects
      { source: '/blog', destination: '/news', permanent: true },
      { source: '/rlusd', destination: '/learn/rlusd', permanent: true },
      { source: '/learn/what-is-xrp-ledger', destination: '/learn/xrp-ledger-explained', permanent: true },
      { source: '/subscribe', destination: '/digest', permanent: true },
    ];
  },
};

export default nextConfig;
