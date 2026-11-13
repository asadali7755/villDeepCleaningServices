import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hostinger shared hosting caps how many processes a build may start, so
  // keep the build to one worker.
  experimental: { cpus: 1 },

  images: {
    // WebP only: AVIF encoding is too slow on Hostinger shared hosting.
    formats: ["image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,

  async redirects() {
    return [
      // ── Bare domain -> www (Vercel's domain settings used to do this) ────
      {
        source: "/:path*",
        has: [{ type: "host", value: "villadeepcleaning.com" }],
        destination: "https://www.villadeepcleaning.com/:path*",
        permanent: true,
      },

      // ── Duplicate blog posts merged (13 Nov 2026) ─────────────────────────
      // Each topic keeps its strongest post (GSC clicks/impressions); the rest
      // 308 to it or to the matching service page. Keep these as literal
      // objects: the SEO agents read them as retired slugs and skip the topic.
      { source: "/blog/apartment-deep-cleaning-dubai", destination: "/blog/apartment-deep-cleaning-dubai-contact", permanent: true },
      { source: "/blog/car-interior-cleaning-cost-dubai", destination: "/blog/car-interior-cleaning-dubai-price", permanent: true },
      { source: "/blog/car-interior-cleaning-dubai-near-me", destination: "/blog/car-interior-cleaning-dubai-price", permanent: true },
      { source: "/blog/car-interior-deep-cleaning-dubai", destination: "/blog/car-interior-cleaning-dubai-price", permanent: true },
      { source: "/blog/curtain-cleaning-dubai-on-site", destination: "/blog/curtain-cleaners-dubai", permanent: true },
      { source: "/blog/curtain-cleaning-dubai-on-site-price", destination: "/blog/curtain-cleaners-dubai", permanent: true },
      { source: "/blog/deep-cleaning-checklist-villa-apartment", destination: "/blog/deep-cleaning-checklist-villa-dubai", permanent: true },
      { source: "/blog/deep-cleaning-checklist-villa-dubai-cost", destination: "/blog/villa-deep-cleaning-dubai-cost-guide", permanent: true },
      { source: "/blog/deep-cleaning-dubai-price", destination: "/blog/deep-cleaning-services-dubai-price-comparison", permanent: true },
      { source: "/blog/deep-cleaning-jumeirah-park-condo", destination: "/blog/deep-cleaning-jumeirah-park", permanent: true },
      { source: "/blog/deep-cleaning-jumeirah-park-dubai", destination: "/blog/deep-cleaning-jumeirah-park", permanent: true },
      { source: "/blog/deep-cleaning-jumeirah-park-dubai-south", destination: "/blog/deep-cleaning-jumeirah-park", permanent: true },
      { source: "/blog/deep-cleaning-jumeirah-park-emerald", destination: "/blog/deep-cleaning-jumeirah-park", permanent: true },
      { source: "/blog/deep-cleaning-services-jumeirah-park", destination: "/blog/deep-cleaning-jumeirah-park", permanent: true },
      { source: "/blog/deep-cleaning-services-jumeirah-park-condominium", destination: "/blog/deep-cleaning-jumeirah-park", permanent: true },
      { source: "/blog/deep-cleaning-services-jumeirah-park-rent", destination: "/blog/deep-cleaning-jumeirah-park", permanent: true },
      { source: "/blog/dubai-apartment-deep-cleaning", destination: "/blog/apartment-deep-cleaning-dubai-contact", permanent: true },
      { source: "/blog/dubai-window-cleaning-services", destination: "/blog/window-cleaning-company-dubai-guide", permanent: true },
      { source: "/blog/floor-cleaning-jumeirah-park", destination: "/services/floor-care", permanent: true },
      { source: "/blog/floor-cleaning-polishing-dubai", destination: "/blog/villa-floor-polishing-dubai", permanent: true },
      { source: "/blog/house-cleaning-dubai-marina", destination: "/blog/villa-cleaning-dubai-marina", permanent: true },
      { source: "/blog/inside-car-cleaning-cost-uae", destination: "/blog/car-interior-cleaning-dubai-price", permanent: true },
      { source: "/blog/mattress-cleaning-dubai-home", destination: "/blog/mattress-cleaning-dubai", permanent: true },
      { source: "/blog/mattress-washing-dubai-deep-clean", destination: "/blog/mattress-cleaning-dubai", permanent: true },
      { source: "/blog/move-in-move-out-cleaning-dubai", destination: "/blog/move-in-out-cleaning-dubai-english", permanent: true },
      { source: "/blog/move-in-out-cleaning-business-bay", destination: "/blog/move-in-out-cleaning-dubai-english", permanent: true },
      { source: "/blog/post-construction-cleaning-dubai", destination: "/blog/post-construction-cleaning-dubai-guide", permanent: true },
      { source: "/blog/post-construction-cleaning-dubai-fees", destination: "/blog/post-construction-cleaning-dubai-guide", permanent: true },
      { source: "/blog/sofa-carpet-cleaning-dubai", destination: "/blog/sofa-carpet-cleaning-dubai-house", permanent: true },
      { source: "/blog/sofa-carpet-cleaning-dubai-contact", destination: "/blog/sofa-carpet-cleaning-dubai-house", permanent: true },
      { source: "/blog/villa-cleaning-dubai-marina-services", destination: "/blog/villa-cleaning-dubai-marina", permanent: true },
      { source: "/blog/villa-deep-cleaning-cost-dubai", destination: "/blog/villa-deep-cleaning-dubai-cost-guide", permanent: true },
      { source: "/blog/villa-deep-cleaning-cost-dubai-price", destination: "/blog/villa-deep-cleaning-dubai-cost-guide", permanent: true },
      { source: "/blog/villa-deep-cleaning-services-dubai", destination: "/services/villa-cleaning", permanent: true },
      { source: "/blog/villa-floor-polishing-dubai-abu-dhabi", destination: "/blog/villa-floor-polishing-dubai", permanent: true },
      { source: "/blog/villa-floor-polishing-dubai-contact", destination: "/blog/villa-floor-polishing-dubai", permanent: true },
      { source: "/blog/window-cleaning-services-dubai", destination: "/blog/window-cleaning-company-dubai-guide", permanent: true },

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
