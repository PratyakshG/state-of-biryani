import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact State of Biryani | Order Fresh Dum Biryani",
  description:
    "Contact State of Biryani for fresh dum biryani orders, bulk orders, catering, gift vouchers, and corporate food inquiries.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-royal-black px-6 py-24 text-royal-cream lg:px-12">
      <section className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="font-body text-xs uppercase tracking-[0.25em] text-royal-gold"
        >
          State of Biryani
        </Link>
        <h1 className="mt-8 font-display text-5xl font-light leading-tight sm:text-6xl">
          Order Fresh Dum Biryani
        </h1>
        <p className="mt-6 font-body text-base leading-relaxed text-royal-cream-muted">
          Contact State of Biryani for fresh dum-cooked biryani, bulk orders,
          catering, corporate meals, and celebration orders across India.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://www.instagram.com/stateofbiryani"
            className="bg-royal-gold px-8 py-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-royal-black transition-colors hover:bg-royal-gold-light"
          >
            Order on Instagram
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61588861154943"
            className="border border-royal-border px-8 py-4 font-body text-xs uppercase tracking-[0.2em] text-royal-cream-muted transition-colors hover:border-royal-gold hover:text-royal-gold"
          >
            Message on Facebook
          </a>
        </div>
      </section>
    </main>
  );
}
