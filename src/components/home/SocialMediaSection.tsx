"use client";

const platforms = [
  {
    name: "Instagram",
    handle: "@alhayacleaningllc",
    href: "https://www.instagram.com/alhayacleaningllc/",
    description: "Before & after transformations",
    gradient: "linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)",
    glowColor: "rgba(253,29,29,0.4)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: "Facebook",
    handle: "Al Haya Cleaning",
    href: "https://www.facebook.com/villadeepcleaningservicesdubai/",
    description: "Tips, offers & customer reviews",
    gradient: "linear-gradient(135deg, #1877f2 0%, #0a5bc4 100%)",
    glowColor: "rgba(24,119,242,0.4)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: "Pinterest",
    handle: "@DeepCleaningdubai",
    href: "https://www.pinterest.com/DeepCleaningdubai/",
    description: "Cleaning ideas & inspiration boards",
    gradient: "linear-gradient(135deg, #e60023 0%, #ad081b 100%)",
    glowColor: "rgba(230,0,35,0.4)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    handle: "@alhayacleaner",
    href: "https://x.com/alhayacleaner",
    description: "News, updates & quick tips",
    gradient: "linear-gradient(135deg, #14171a 0%, #38444d 100%)",
    glowColor: "rgba(100,116,139,0.4)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
];

// Triple the cards for seamless infinite loop
const row1Cards = [...platforms, ...platforms, ...platforms];
const row2Cards = [...platforms].reverse();
const row2Loop  = [...row2Cards, ...row2Cards, ...row2Cards];

function PlatformCard({ p }: { p: typeof platforms[0] }) {
  return (
    <a
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Follow us on ${p.name}`}
      className="relative flex-shrink-0 w-60 md:w-64 rounded-2xl overflow-hidden select-none"
      style={{
        background: p.gradient,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.transform = "translateY(-6px) scale(1.04)";
        el.style.boxShadow = `0 20px 50px -10px ${p.glowColor}`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.transform = "translateY(0) scale(1)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10 pointer-events-none" />
      <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-white/8 pointer-events-none" />

      {/* Card body */}
      <div className="relative z-10 p-6 h-44 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="text-white drop-shadow-md">{p.icon}</div>
          <span className="text-white/80 text-xs font-semibold bg-white/20 px-2.5 py-1 rounded-full backdrop-blur-sm">
            Follow ↗
          </span>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg leading-tight">{p.name}</h3>
          <p className="text-white/75 text-sm font-medium">{p.handle}</p>
          <p className="text-white/55 text-xs mt-1">{p.description}</p>
        </div>
      </div>
    </a>
  );
}

export function SocialMediaSection() {
  return (
    <section
      className="py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--bg-primary) 0%, #080d14 15%, #080d14 85%, var(--bg-primary) 100%)",
      }}
    >
      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <p
          className="text-sm font-bold tracking-[0.3em] uppercase mb-3"
          style={{ color: "var(--color-gold)" }}
        >
          Stay Connected
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
          Follow Us on{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #D4AF37 0%, #F5E6B8 50%, #D4AF37 100%)",
            }}
          >
            Social Media
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Join our community for cleaning tips, stunning before &amp; after
          transformations, and exclusive offers across the UAE.
        </p>
      </div>

      {/* Track wrapper — hover here pauses both rows */}
      <div className="social-track flex flex-col gap-5">

        {/* Row 1 — slides LEFT */}
        <div
          className="overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div className="social-row social-row-1">
            {row1Cards.map((p, i) => (
              <PlatformCard key={`r1-${i}`} p={p} />
            ))}
          </div>
        </div>

        {/* Row 2 — slides RIGHT */}
        <div
          className="overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div className="social-row social-row-2">
            {row2Loop.map((p, i) => (
              <PlatformCard key={`r2-${i}`} p={p} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom hint */}
      <p className="text-center text-gray-600 text-sm mt-10">
        Hover to pause • Click any card to visit our page
      </p>
    </section>
  );
}
