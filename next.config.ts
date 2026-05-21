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
      // ── WordPress date-based post URLs (/2025/01/title/) ─────────────────
      { source: "/2025/:path*", destination: "/", permanent: true },
      { source: "/2024/:path*", destination: "/", permanent: true },
      { source: "/2023/:path*", destination: "/", permanent: true },
      { source: "/2022/:path*", destination: "/", permanent: true },
      { source: "/2021/:path*", destination: "/", permanent: true },
      { source: "/2020/:path*", destination: "/", permanent: true },

      // ── WordPress taxonomy pages ──────────────────────────────────────────
      { source: "/category/:path*",  destination: "/", permanent: true },
      { source: "/tag/:path*",       destination: "/", permanent: true },
      { source: "/author/:path*",    destination: "/", permanent: true },

      // ── WordPress pagination (/page/2/, /page/3/ …) ───────────────────────
      { source: "/page/:num",  destination: "/", permanent: true },
      { source: "/page/:num/", destination: "/", permanent: true },

      // ── WordPress feeds ───────────────────────────────────────────────────
      // NOTE: /:slug/feed removed — too broad, was causing redirect chains.
      // Only specific known feed paths are redirected.
      { source: "/feed",           destination: "/", permanent: true },
      { source: "/feed/",          destination: "/", permanent: true },
      { source: "/comments/feed",  destination: "/", permanent: true },
      { source: "/comments/feed/", destination: "/", permanent: true },

      // ── WordPress admin & core ────────────────────────────────────────────
      { source: "/wp-admin/:path*",   destination: "/", permanent: true },
      { source: "/wp-content/:path*", destination: "/", permanent: true },
      { source: "/wp-login.php",      destination: "/", permanent: true },
      { source: "/wp-json/:path*",    destination: "/", permanent: true },
      { source: "/wp-sitemap.xml",    destination: "/sitemap.xml", permanent: true },
      { source: "/wp-sitemap-posts-post-1.xml", destination: "/sitemap.xml", permanent: true },

      // ── Common WordPress post slugs from old Hostinger site ───────────────
      { source: "/sample-page",   destination: "/", permanent: true },
      { source: "/sample-page/",  destination: "/", permanent: true },
      { source: "/hello-world",   destination: "/", permanent: true },
      { source: "/hello-world/",  destination: "/", permanent: true },
      { source: "/home-free-2",   destination: "/", permanent: true },
      { source: "/home-free-2/",  destination: "/", permanent: true },
      { source: "/shop",          destination: "/", permanent: true },
      { source: "/shop/",         destination: "/", permanent: true },
      { source: "/checkout",      destination: "/", permanent: true },
      { source: "/cart",          destination: "/", permanent: true },
      { source: "/my-account",    destination: "/", permanent: true },
      { source: "/my-account/",   destination: "/", permanent: true },

      // ── WordPress XML sitemaps that may still be indexed ──────────────────
      { source: "/wp-sitemap-posts-page-1.xml",      destination: "/sitemap.xml", permanent: true },
      { source: "/wp-sitemap-taxonomies-category-1.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/wp-sitemap-taxonomies-post_tag-1.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/sitemap_index.xml",                destination: "/sitemap.xml", permanent: true },
      { source: "/post-sitemap.xml",                 destination: "/sitemap.xml", permanent: true },
      { source: "/page-sitemap.xml",                 destination: "/sitemap.xml", permanent: true },
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
        // Add X-Robots-Tag noindex to API routes so Google ignores them
        source: "/api/(.*)",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options",           value: "DENY" },
          { key: "X-Content-Type-Options",    value: "nosniff" },
          { key: "Referrer-Policy",           value: "origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
