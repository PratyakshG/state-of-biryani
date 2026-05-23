import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.stateofbiryani.com";

// All 50 served cities as URL slugs
const CITY_SLUGS = [
  "amritsar", "agra", "azamgarh", "bangalore", "basti", "bhopal",
  "bhubaneswar", "chandigarh", "dhanbad", "durgapur", "dehradun",
  "deoria", "faridabad", "gurgaon", "ghaziabad", "greater-noida",
  "goa", "gwalior", "gorakhpur", "guwahati", "hyderabad", "indore",
  "jamshedpur", "jaipur", "jodhpur", "jalandhar", "kanpur", "kolkata",
  "kharar", "ludhiana", "lucknow", "mysore", "maharajganj", "mumbai",
  "mohali", "meerut", "noida", "nagpur", "new-delhi", "panchkula",
  "patiala", "pimpri", "pune", "patna", "ranchi", "raipur",
  "siliguri", "siddharthnagar", "thane", "udaipur",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // NOTE: Uncomment once /menu page is live
    // {
    //   url: `${siteUrl}/menu`,
    //   lastModified,
    //   changeFrequency: "weekly",
    //   priority: 0.9,
    // },
    {
      url: `${siteUrl}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // City landing pages — high-intent local search traffic
  const cityRoutes: MetadataRoute.Sitemap = CITY_SLUGS.map((slug) => ({
    url: `${siteUrl}/city/${slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...cityRoutes];
}
