// app/city/[slug]/page.tsx
// ---------------------------------------------------------------------------
// HOW TO USE
// Place this file at: app/city/[slug]/page.tsx
// Each city gets its own URL: /city/lucknow, /city/mumbai, etc.
// The generateMetadata function handles unique title/description per city.
// ---------------------------------------------------------------------------

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

// ---- Data ------------------------------------------------------------------

const CITY_DATA: Record<
  string,
  { name: string; state: string; postalCode?: string }
> = {
  "amritsar":        { name: "Amritsar",       state: "Punjab" },
  "agra":            { name: "Agra",            state: "Uttar Pradesh" },
  "azamgarh":        { name: "Azamgarh",        state: "Uttar Pradesh" },
  "bangalore":       { name: "Bangalore",       state: "Karnataka" },
  "basti":           { name: "Basti",           state: "Uttar Pradesh" },
  "bhopal":          { name: "Bhopal",          state: "Madhya Pradesh" },
  "bhubaneswar":     { name: "Bhubaneswar",     state: "Odisha" },
  "chandigarh":      { name: "Chandigarh",      state: "Chandigarh" },
  "dhanbad":         { name: "Dhanbad",         state: "Jharkhand" },
  "durgapur":        { name: "Durgapur",        state: "West Bengal" },
  "dehradun":        { name: "Dehradun",        state: "Uttarakhand" },
  "deoria":          { name: "Deoria",          state: "Uttar Pradesh" },
  "faridabad":       { name: "Faridabad",       state: "Haryana" },
  "gurgaon":         { name: "Gurgaon",         state: "Haryana" },
  "ghaziabad":       { name: "Ghaziabad",       state: "Uttar Pradesh" },
  "greater-noida":   { name: "Greater Noida",   state: "Uttar Pradesh" },
  "goa":             { name: "Goa",             state: "Goa" },
  "gwalior":         { name: "Gwalior",         state: "Madhya Pradesh" },
  "gorakhpur":       { name: "Gorakhpur",       state: "Uttar Pradesh" },
  "guwahati":        { name: "Guwahati",        state: "Assam" },
  "hyderabad":       { name: "Hyderabad",       state: "Telangana" },
  "indore":          { name: "Indore",          state: "Madhya Pradesh" },
  "jamshedpur":      { name: "Jamshedpur",      state: "Jharkhand" },
  "jaipur":          { name: "Jaipur",          state: "Rajasthan" },
  "jodhpur":         { name: "Jodhpur",         state: "Rajasthan" },
  "jalandhar":       { name: "Jalandhar",       state: "Punjab" },
  "kanpur":          { name: "Kanpur",          state: "Uttar Pradesh" },
  "kolkata":         { name: "Kolkata",         state: "West Bengal" },
  "kharar":          { name: "Kharar",          state: "Punjab" },
  "ludhiana":        { name: "Ludhiana",        state: "Punjab" },
  "lucknow":         { name: "Lucknow",         state: "Uttar Pradesh" },
  "mysore":          { name: "Mysore",          state: "Karnataka" },
  "maharajganj":     { name: "Maharajganj",     state: "Uttar Pradesh" },
  "mumbai":          { name: "Mumbai",          state: "Maharashtra" },
  "mohali":          { name: "Mohali",          state: "Punjab" },
  "meerut":          { name: "Meerut",          state: "Uttar Pradesh" },
  "noida":           { name: "Noida",           state: "Uttar Pradesh" },
  "nagpur":          { name: "Nagpur",          state: "Maharashtra" },
  "new-delhi":       { name: "New Delhi",       state: "Delhi" },
  "panchkula":       { name: "Panchkula",       state: "Haryana" },
  "patiala":         { name: "Patiala",         state: "Punjab" },
  "pimpri":          { name: "Pimpri",          state: "Maharashtra" },
  "pune":            { name: "Pune",            state: "Maharashtra" },
  "patna":           { name: "Patna",           state: "Bihar" },
  "ranchi":          { name: "Ranchi",          state: "Jharkhand" },
  "raipur":          { name: "Raipur",          state: "Chhattisgarh" },
  "siliguri":        { name: "Siliguri",        state: "West Bengal" },
  "siddharthnagar":  { name: "Siddharthnagar",  state: "Uttar Pradesh" },
  "thane":           { name: "Thane",           state: "Maharashtra" },
  "udaipur":         { name: "Udaipur",         state: "Rajasthan" },
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.stateofbiryani.com";

// ---- Static params — pre-renders all 50 city pages at build time -----------

export function generateStaticParams() {
  return Object.keys(CITY_DATA).map((slug) => ({ slug }));
}

// ---- Metadata — proper Next.js App Router export --------------------------

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const city = CITY_DATA[params.slug];
  if (!city) return {};

  return {
    title: `Biryani Delivery in ${city.name} | State of Biryani`,
    description: `Order fresh dum biryani in ${city.name} in 30–40 minutes. Authentic Hyderabadi, Lucknowi & Champaran biryani delivered to your door. State of Biryani — ${city.name}'s royal cloud kitchen. Never reheated.`,
    keywords: [
      `biryani delivery in ${city.name}`,
      `biryani in ${city.name}`,
      `dum biryani ${city.name}`,
      `fresh biryani ${city.name}`,
      `State of Biryani ${city.name}`,
      `best biryani ${city.name}`,
      `biryani order online ${city.name}`,
    ],
    alternates: {
      canonical: `${siteUrl}/city/${params.slug}`,
    },
    openGraph: {
      title: `State of Biryani ${city.name} — Fresh Dum Biryani Delivery`,
      description: `Fresh dum biryani delivered in 30–40 minutes in ${city.name}. Authentic. Royal. Never reheated.`,
      url: `${siteUrl}/city/${params.slug}`,
      siteName: "State of Biryani",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `State of Biryani dum biryani delivery in ${city.name}`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
  };
}

// City-specific JSON-LD schema
function getCityJsonLd(slug: string, city: { name: string; state: string }) {
  return {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "LocalBusiness"],
    name: "State of Biryani",
    description: `Fresh dum-cooked biryani delivery in ${city.name} — Hyderabadi, Lucknowi & Champaran biryani in 30–40 minutes.`,
    url: `${siteUrl}/city/${slug}`,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/og-image.jpg`,
    servesCuisine: ["Indian", "Biryani", "Mughlai"],
    priceRange: "₹₹",
    areaServed: [
      {
        "@type": "City",
        name: city.name,
        containedInPlace: {
          "@type": "State",
          name: city.state,
          containedInPlace: {
            "@type": "Country",
            name: "India",
          },
        },
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressRegion: city.state,
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.instagram.com/stateofbiryani",
      "https://www.facebook.com/profile.php?id=61588861154943",
    ],
  };
}

// ---- Page Component --------------------------------------------------------

interface Props {
  params: { slug: string };
}

export default function CityPage({ params }: Props) {
  const city = CITY_DATA[params.slug];
  if (!city) notFound();

  const jsonLd = getCityJsonLd(params.slug, city);

  const BIRYANI_TYPES = [
    {
      name: "Hyderabadi Dum Biryani",
      desc: "Bold, aromatic raw-meat dum — marinated meat sealed with semi-cooked rice, slow-cooked to lock in every drop of royal fragrance.",
    },
    {
      name: "Lucknowi (Awadhi) Biryani",
      desc: "The refined Pukki technique — meat and rice cooked separately with delicate spices, layered and finished under dum for a lighter, subtler indulgence.",
    },
    {
      name: "Champaran Mutton Biryani",
      desc: "Inspired by Bihar's legendary flavors — tender mutton with aromatic rice and handpicked spices, slow-cooked in authentic dum style.",
    },
  ];

  return (
    <>
      {/* Inject city-specific JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-royal-black min-h-screen">
        {/* Hero */}
        <section className="relative py-40 lg:py-52 overflow-hidden">
          <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
          <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-royal-gold/5 blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 mb-10 font-body text-xs text-royal-cream-dim"
            >
              <Link href="/" className="hover:text-royal-gold transition-colors duration-300">
                Home
              </Link>
              <span>/</span>
              <span className="text-royal-gold">{city.name}</span>
            </nav>

            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-royal-gold" />
              <span className="font-body text-[10px] tracking-[0.4em] uppercase text-royal-gold">
                Delivering in {city.state}
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-light text-royal-cream leading-tight mb-6">
              Biryani Delivery
              <br />
              in{" "}
              <span className="italic text-gold-clip">{city.name}</span>
            </h1>

            <p className="font-body text-base lg:text-lg text-royal-cream-muted max-w-xl mb-10 leading-relaxed">
              State of Biryani delivers fresh, authentic dum-cooked biryani
              straight to your door in <strong className="text-royal-gold">30–40 minutes</strong> across {city.name}.
              Never reheated. Always royal.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="font-body text-[11px] tracking-[0.2em] uppercase px-9 py-4 bg-royal-gold text-royal-black font-semibold hover:bg-royal-gold-light transition-colors duration-300"
              >
                Order Now in {city.name}
              </Link>
              <Link
                href="/#about"
                className="font-body text-[11px] tracking-[0.2em] uppercase px-9 py-4 border border-royal-border text-royal-cream-muted hover:border-royal-gold hover:text-royal-gold transition-all duration-300"
              >
                Our Story
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-royal-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { value: "30–40", label: "Min delivery in " + city.name },
              { value: "100%", label: "Never reheated" },
              { value: "3", label: "Biryani styles" },
              { value: "50+", label: "Cities served" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="font-display text-4xl lg:text-5xl text-royal-gold font-medium leading-none">
                  {s.value}
                </span>
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-royal-cream-dim">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Biryani types */}
        <section className="py-28 lg:py-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-royal-gold" />
              <span className="font-body text-[10px] tracking-[0.4em] uppercase text-royal-gold">
                Our Menu
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-royal-cream mb-12 leading-tight">
              Fresh Dum Biryani
              <br />
              <span className="italic text-gold-clip">Delivered in {city.name}</span>
            </h2>

            <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
              {BIRYANI_TYPES.map((b) => (
                <div
                  key={b.name}
                  className="card-glow bg-royal-card p-8 relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-royal-gold/40 via-royal-gold to-royal-gold/40" />
                  <h3 className="font-display text-2xl lg:text-3xl font-semibold text-royal-cream mb-4 leading-tight">
                    {b.name}
                  </h3>
                  <p className="font-body text-sm text-royal-cream-muted leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why SOB in this city */}
        <section className="py-28 lg:py-40 bg-royal-dark border-t border-royal-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-royal-gold" />
              <span className="font-body text-[10px] tracking-[0.4em] uppercase text-royal-gold">
                Why Choose Us
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-royal-cream mb-12 leading-tight">
              The Best Biryani
              <br />
              <span className="italic text-gold-clip">in {city.name}</span>
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Never Reheated",
                  body: "Cooked fresh on every single order. Warmth and aroma guaranteed.",
                },
                {
                  title: "30–40 Min Delivery",
                  body: `Hot biryani at your door anywhere in ${city.name} in under 40 minutes.`,
                },
                {
                  title: "Aged Basmati Rice",
                  body: "Premium basmati aged nearly two years — the foundation of a great biryani.",
                },
                {
                  title: "Strict Hygiene",
                  body: "World-class safety standards in every kitchen, every order, every time.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-royal-card p-6 border border-royal-border hover:border-royal-gold-dim transition-colors duration-300"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-royal-gold mb-4" />
                  <p className="font-body text-sm font-semibold text-royal-cream mb-2 tracking-wide">
                    {item.title}
                  </p>
                  <p className="font-body text-xs text-royal-cream-dim leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-royal-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-light text-royal-cream mb-2">
                Ready to order in{" "}
                <span className="italic text-gold-clip">{city.name}?</span>
              </h2>
              <p className="font-body text-sm text-royal-cream-muted">
                Fresh dum biryani delivered in 30–40 minutes.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 font-body text-[11px] tracking-[0.2em] uppercase px-9 py-4 bg-royal-gold text-royal-black font-semibold hover:bg-royal-gold-light transition-colors duration-300 whitespace-nowrap"
            >
              Order Now
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
