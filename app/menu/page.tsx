import type { Metadata } from "next";
import Link from "next/link";

const menuItems = [
  "Hyderabadi Dum Biryani",
  "Lucknowi Dum Biryani",
  "Champaran Mutton Biryani",
];

export const metadata: Metadata = {
  title: "State of Biryani Menu | Hyderabadi, Lucknowi & Champaran Biryani",
  description:
    "Explore the State of Biryani menu with fresh dum-cooked Hyderabadi, Lucknowi, and Champaran biryani delivered across India.",
  alternates: {
    canonical: "/menu",
  },
};

export default function MenuPage() {
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
          Fresh Dum Biryani Menu
        </h1>
        <p className="mt-6 font-body text-base leading-relaxed text-royal-cream-muted">
          Authentic dum-cooked biryani prepared fresh for every order, inspired
          by royal Indian kitchens and delivered across 50+ cities.
        </p>
        <div className="mt-10 grid gap-4">
          {menuItems.map((item) => (
            <div
              key={item}
              className="border border-royal-border bg-royal-card p-5"
            >
              <h2 className="font-display text-3xl text-royal-cream">{item}</h2>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
