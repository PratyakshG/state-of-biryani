import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | State of Biryani",
  description:
    "Read the State of Biryani privacy policy for customer inquiries, orders, and communication.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="mt-6 font-body text-base leading-relaxed text-royal-cream-muted">
          State of Biryani uses customer details only to respond to inquiries,
          process order requests, and improve service quality. We do not sell
          personal information.
        </p>
      </section>
    </main>
  );
}
