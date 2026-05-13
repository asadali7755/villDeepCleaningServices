const siteUrl = () => process.env.SITE_URL || "http://localhost:3000";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Al Haya Cleaning Services",
    url: siteUrl(),
    logo: `${siteUrl()}/images/hero/hero-main.webp`,
    description: "Professional villa, apartment, deep cleaning & office cleaning services across all 7 UAE Emirates.",
    telephone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+971551275545",
    email: "Madinatalhaya@gmail.com",
    foundingDate: "2015",
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
    sameAs: [],
  };
}

export function generateLocalBusinessSchema(city?: string, emirate?: string) {
  const localityLabel = city || "Dubai";
  const regionLabel = emirate || city || "Dubai";
  return {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    "@id": `${siteUrl()}/#cleaningservice`,
    name: city
      ? `Al Haya Cleaning Services ${city}`
      : "Al Haya Cleaning Services",
    description:
      "Specialized villa deep cleaning, apartment cleaning, and home sanitization services in Dubai and across all 7 UAE Emirates. Eco-friendly products, trained & vetted staff.",
    url: siteUrl(),
    telephone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+971551275545",
    email: "Madinatalhaya@gmail.com",
    image: `${siteUrl()}/images/hero/hero-main.webp`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Al Haya Cleaning Services Office",
      addressLocality: localityLabel,
      addressRegion: regionLabel,
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.2048,
      longitude: 55.2708,
    },
    areaServed: city
      ? [{ "@type": "City", name: city }]
      : [
          { "@type": "City", name: "Dubai" },
          { "@type": "City", name: "Abu Dhabi" },
          { "@type": "City", name: "Sharjah" },
          { "@type": "City", name: "Ajman" },
          { "@type": "City", name: "Ras Al Khaimah" },
          { "@type": "City", name: "Fujairah" },
          { "@type": "City", name: "Umm Al Quwain" },
        ],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
      bestRating: "5",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  slug?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    name: service.name,
    description: service.description,
    ...(service.slug && { url: `${siteUrl()}/services/${service.slug}` }),
    ...(service.image && { image: `${siteUrl()}${service.image}` }),
    serviceType: service.name,
    provider: {
      "@type": "CleaningService",
      name: "Al Haya Cleaning Services",
      url: siteUrl(),
      telephone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+971551275545",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressRegion: "Dubai",
        addressCountry: "AE",
      },
    },
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Abu Dhabi" },
      { "@type": "City", name: "Sharjah" },
      { "@type": "City", name: "Ajman" },
      { "@type": "City", name: "Ras Al Khaimah" },
      { "@type": "City", name: "Fujairah" },
      { "@type": "City", name: "Umm Al Quwain" },
    ],
  };
}

export function generateFAQSchema() {
  const faqs = [
    {
      question: "What areas do you serve in the UAE?",
      answer: "Al Haya Cleaning Services operates across all 7 Emirates: Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. We cover 30+ neighborhoods including Jumeirah, Downtown Dubai, Dubai Marina, Palm Jumeirah, Al Reem Island, and more.",
    },
    {
      question: "How much does villa cleaning cost in Dubai?",
      answer: "Villa cleaning prices depend on size, number of bedrooms, and type of service. Contact us at +971 551 275 545 for a free, no-obligation quote tailored to your villa.",
    },
    {
      question: "Do you provide deep cleaning services?",
      answer: "Yes! Our deep cleaning service covers behind appliances, inside cabinets, bathroom descaling, kitchen degreasing, and every hidden corner. It's ideal as a quarterly refresh or before special events.",
    },
    {
      question: "Are your cleaning products safe for children and pets?",
      answer: "Absolutely. We use eco-friendly, non-toxic cleaning products that are safe for families, children, and pets while still delivering powerful cleaning results.",
    },
    {
      question: "Do you offer move-in and move-out cleaning?",
      answer: "Yes, we provide thorough move-in/move-out cleaning to landlord-inspection standards. Our service helps secure full deposit refunds and ensures your new home is spotless from day one.",
    },
    {
      question: "How can I book a cleaning service?",
      answer: "You can book via WhatsApp at +971 551 275 545, call us directly, or fill out the contact form on our website. We respond within minutes!",
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
