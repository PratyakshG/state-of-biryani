import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.stateofbiryani.com";
const title = "State of Biryani | Fresh Dum Biryani Delivery Across India";
const description =
  "State of Biryani delivers authentic dum-cooked Hyderabadi, Lucknowi & Champaran biryani fresh to your door in 30–40 min. 50+ cities across India.";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "FoodEstablishment"],
    name: "State of Biryani",
    description:
      "India's leading cloud kitchen delivering fresh dum-cooked biryani across 50+ cities.",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/og-image.jpg`,
    servesCuisine: ["Indian", "Biryani", "Mughlai"],
    // NOTE: Add hasMenu back once /menu page is live:
    // hasMenu: `${siteUrl}/menu`,
    priceRange: "₹₹",
    sameAs: [
      "https://www.instagram.com/stateofbiryani",
      "https://www.facebook.com/profile.php?id=61588861154943",
    ],
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    offers: {
      "@type": "Offer",
      description: "Fresh dum biryani delivered in 30–40 minutes",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      // NOTE: Add Menu breadcrumb back once /menu is live
      // { "@type": "ListItem", position: 2, name: "Menu", item: `${siteUrl}/menu` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: `${siteUrl}/contact`,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where does State of Biryani deliver?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "State of Biryani delivers fresh dum biryani across 50+ cities in India including Delhi NCR, Mumbai, Bangalore, Lucknow, Hyderabad, Pune, Kolkata, Jaipur, and many more.",
        },
      },
      {
        "@type": "Question",
        name: "How long does biryani delivery take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "State of Biryani delivers fresh dum-cooked biryani to your door in 30–40 minutes.",
        },
      },
      {
        "@type": "Question",
        name: "Is the biryani freshly cooked or reheated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every order at State of Biryani is freshly prepared using the traditional dum cooking method. We never reheat our biryani.",
        },
      },
      {
        "@type": "Question",
        name: "What types of biryani does State of Biryani offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "State of Biryani offers authentic Hyderabadi dum biryani, Lucknowi (Awadhi) biryani, and Champaran Mutton biryani, all freshly cooked using traditional recipes.",
        },
      },
      {
        "@type": "Question",
        name: "Does State of Biryani offer catering for events?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, State of Biryani offers bulk orders, corporate catering, gift vouchers, and event catering for house parties, office gatherings, and social events.",
        },
      },
      {
        "@type": "Question",
        name: "What is dum cooking?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dum cooking is an ancient slow-cooking method where the pot is sealed and the food is cooked over low heat, locking in all the aromas and flavors. State of Biryani uses authentic dum cooking for every order.",
        },
      },
    ],
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "State of Biryani",
    "biryani delivery India",
    "dum biryani",
    "cloud kitchen biryani",
    "fresh biryani near me",
    "Hyderabadi biryani delivery",
    "Lucknowi biryani online",
    "biryani 30 minutes delivery",
    "best biryani delivery India",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "State of Biryani — India's Royal Cloud Kitchen",
    description:
      "Fresh dum-cooked biryani delivered in 30–40 minutes. 50+ cities. Never reheated.",
    url: siteUrl,
    siteName: "State of Biryani",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "State of Biryani — fresh dum biryani delivered to your door",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "State of Biryani — Fresh Dum Biryani Delivered",
    description: "Fresh dum biryani in 30–40 min | 50+ cities across India",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="grain-overlay bg-royal-black font-body text-royal-cream antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
