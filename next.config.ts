import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  async redirects() {
    return [
      // ── Old WordPress date-based post URLs (Hostinger site) ──────────────
      // e.g. /2025/01/post-title/, /2024/05/something/
      { source: "/2025/:path*", destination: "/", permanent: true },
      { source: "/2024/:path*", destination: "/", permanent: true },
      { source: "/2023/:path*", destination: "/", permanent: true },
      { source: "/2022/:path*", destination: "/", permanent: true },
      { source: "/2021/:path*", destination: "/", permanent: true },

      // ── WordPress query-string URLs ───────────────────────────────────────
      // e.g. /?p=123, /?page_id=2, /?cat=5, /?s=search
      // (Next.js handles these as 404 already, but explicit redirect is cleaner)

      // ── WordPress pagination ──────────────────────────────────────────────
      { source: "/page/:num", destination: "/", permanent: true },
      { source: "/page/:num/", destination: "/", permanent: true },

      // ── Old WordPress category/tag/author pages ───────────────────────────
      { source: "/category/:path*", destination: "/", permanent: true },
      { source: "/tag/:path*", destination: "/", permanent: true },
      { source: "/author/:path*", destination: "/about", permanent: true },

      // ── WordPress comment feeds ───────────────────────────────────────────
      { source: "/comments/feed", destination: "/", permanent: true },
      { source: "/comments/feed/", destination: "/", permanent: true },
      { source: "/:slug/feed", destination: "/", permanent: true },
      { source: "/:slug/feed/", destination: "/", permanent: true },

      // ── WordPress core files/admin ────────────────────────────────────────
      { source: "/wp-content/:path*", destination: "/", permanent: true },
      { source: "/wp-admin/:path*", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
      { source: "/wp-json/:path*", destination: "/", permanent: true },
      { source: "/wp-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/wp-sitemap-posts-post-1.xml", destination: "/sitemap.xml", permanent: true },

      // ── Old WordPress misc pages ──────────────────────────────────────────
      { source: "/feed", destination: "/", permanent: true },
      { source: "/feed/", destination: "/", permanent: true },
      { source: "/shop", destination: "/", permanent: true },
      { source: "/shop/", destination: "/", permanent: true },
      { source: "/home-free-2", destination: "/", permanent: true },
      { source: "/home-free-2/", destination: "/", permanent: true },
      { source: "/sample-page", destination: "/", permanent: true },
      { source: "/sample-page/", destination: "/", permanent: true },
      { source: "/hello-world", destination: "/", permanent: true },
      { source: "/hello-world/", destination: "/", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/images/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
