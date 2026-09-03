import type { NextConfig } from "next";
import { legacyProgramSlugs } from "./src/data/redirects";

const nextConfig: NextConfig = {
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  devIndicators: false,
  poweredByHeader: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000",
          },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/documenten/:path*.pdf",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Content-Type", value: "application/pdf" },
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
      {
        source: "/:path*.(jpg|jpeg|png|webp|gif|svg|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
  async redirects() {
    return Object.entries(legacyProgramSlugs).map(([from, to]) => ({
      source: `/programmas/${from}`,
      destination: `/programmas/${to}`,
      permanent: true,
    }));
  },
  async rewrites() {
    return [
      {
        source: "/static/:path*",
        destination: "/studio/static/:path*",
      },
      {
        source: "/studio",
        destination: "/studio/index.html",
      },
      {
        source: "/studio/((?!static|brand|favicon\\.ico|_headers).*)",
        destination: "/studio/index.html",
      },
    ];
  },
};

export default nextConfig;
