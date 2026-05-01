// next.config.ts
import type { NextConfig } from "next";

const CSP = [
  "default-src 'self'",
  // Next.js App Router requires 'unsafe-inline' + 'unsafe-eval' for hydration scripts
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  // Framer Motion and Tailwind inject inline styles
  "style-src 'self' 'unsafe-inline'",
  // Local images + data URIs; allow https for any external embeds
  "img-src 'self' data: blob: https:",
  // next/font self-hosts Google Fonts at build time — no external font CDN needed
  "font-src 'self'",
  // API routes (/api/contact, /api/csrf) and any https fetch calls
  "connect-src 'self' https:",
  "media-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  // Prevent this page from being embedded in iframes
  "frame-ancestors 'none'",
].join("; ");

const SECURITY_HEADERS = [
  // Enforce HTTPS for 2 years, include subdomains, allow preload list
  { key: "Strict-Transport-Security",  value: "max-age=63072000; includeSubDomains; preload" },
  // Prevent MIME-type sniffing
  { key: "X-Content-Type-Options",     value: "nosniff" },
  // Block clickjacking — redundant with CSP frame-ancestors but kept for older browsers
  { key: "X-Frame-Options",            value: "DENY" },
  // Enable browser DNS prefetching for performance
  { key: "X-DNS-Prefetch-Control",     value: "on" },
  // Limit referrer data sent to cross-origin destinations
  { key: "Referrer-Policy",            value: "strict-origin-when-cross-origin" },
  // Disable browser features not used by this site
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=(), payment=()",
  },
  { key: "Content-Security-Policy",    value: CSP },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: SECURITY_HEADERS,
      },
    ];
  },

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },

  reactStrictMode: true,
  outputFileTracingRoot: __dirname,

  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },

  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
};

export default nextConfig;
