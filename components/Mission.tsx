"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BIRYANI_TYPES = [
  {
    type: "Hyderabadi",
    style: "Kutchi",
    origin: "Southern India",
    description:
      "The bold, aromatic raw-meat dum method—where marinated meat and semi-cooked rice are sealed together and slow-cooked, locking in every drop of flavor and royal fragrance.",
    notes: ["Saffron", "Fried Onions", "Aged Basmati", "Whole Spices"],
    icon: "H",
  },
  {
    type: "Lucknowi",
    style: "Pukki",
    origin: "Northern India",
    description:
      "The refined Awadhi technique—meat and rice cooked separately with delicate perfumed spices, then layered and finished under dum for a lighter, subtler royal indulgence.",
    notes: ["Kewra Water", "Rose Petals", "Mace", "Cardamom"],
    icon: "L",
  },
  {
    type: "Champaran Mutton",
    style: "Pukki",
    origin: "Northern India",
    description:
      "Inspired by the legendary flavors of Bihar, Champaran Mutton Biryani is a rich blend of tender mutton, aromatic rice, and handpicked spices slow-cooked to perfection. Prepared in authentic dum style, it delivers bold rustic flavors and an unforgettable royal taste in every bite.",
    notes: ["Kewra Water", "Rose Petals", "Mace", "Cardamom"],
    icon: "L",
  },
];

export default function Mission() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".mission-header > *",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".mission-header",
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        ".mission-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".mission-cards",
            start: "top 78%",
          },
        },
      );

      gsap.fromTo(
        ".mission-note",
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".mission-cards",
            start: "top 70%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="mission"
      className="relative py-28 lg:py-40 bg-royal-dark overflow-hidden"
    >
      <div className="absolute inset-0 bg-section-glow pointer-events-none" />

      {/* Horizontal ornament lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mission-header mb-16 lg:mb-24 max-w-3xl">
          <div className="relative overflow-visible mb-6">
            <span className="section-num absolute -top-6 -left-2 select-none pointer-events-none text-royal-border/25">
              02
            </span>
            <div className="relative flex items-center gap-4 mb-6 pt-14">
              <div className="h-px w-8 bg-royal-gold" />
              <span className="font-body text-[10px] tracking-[0.4em] uppercase text-royal-gold">
                Our Mission
              </span>
            </div>
          </div>

          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light leading-tight text-royal-cream mb-6">
            Reviving the Art of{" "}
            <span className="italic text-gold-clip">Dum Cooking</span>
          </h2>

          <p className="font-body text-base lg:text-lg text-royal-cream-muted leading-relaxed">
            Reviving the essence of traditional dum cooking with rich, authentic
            flavors from across India—{" "}
            <span className="text-royal-cream">
              Hyderabadi, Lucknowi, and Kolkata
            </span>{" "}
            biryanis—we craft a truly royal dining experience for our guests.
          </p>
        </div>

        {/* Biryani type cards */}
        <div className="mission-cards grid sm:grid-cols-3 gap-6 lg:gap-8">
          {BIRYANI_TYPES.map((item) => (
            <div
              key={item.type}
              className="mission-card card-glow bg-royal-card p-8 lg:p-10 relative overflow-hidden group"
            >
              {/* Background letter */}
              <span className="absolute right-6 bottom-4 font-display text-8xl font-bold text-royal-border/40 leading-none select-none pointer-events-none group-hover:text-royal-border/60 transition-colors duration-500">
                {item.icon}
              </span>

              {/* Gradient accent top */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-royal-gold/40 via-royal-gold to-royal-gold/40" />

              <div className="relative z-10">
                {/* Style badge */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-body text-[10px] tracking-[0.35em] uppercase text-royal-gold border border-royal-gold-dim px-3 py-1">
                    {item.style} Method
                  </span>
                  <span className="font-body text-[10px] tracking-[0.25em] uppercase text-royal-cream-dim">
                    {item.origin}
                  </span>
                </div>

                <h3 className="font-display text-4xl lg:text-5xl font-semibold text-royal-cream mb-4 leading-tight">
                  {item.type}
                  <br />
                  <span className="text-royal-gold font-light italic text-3xl lg:text-4xl">
                    Biryani
                  </span>
                </h3>

                <p className="font-body text-sm text-royal-cream-muted leading-relaxed mb-8">
                  {item.description}
                </p>

                {/* Flavor notes */}
                <div>
                  <p className="font-body text-[9px] tracking-[0.35em] uppercase text-royal-cream-dim mb-3">
                    Key Notes
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.notes.map((note) => (
                      <span
                        key={note}
                        className="mission-note font-body text-xs text-royal-gold-light bg-royal-gold-dim px-3 py-1"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div className="mt-16 pt-12 border-t border-royal-border flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="h-10 w-px bg-royal-gold flex-shrink-0 hidden sm:block" />
          <p className="font-display text-2xl lg:text-3xl italic text-royal-cream-muted font-light leading-relaxed">
            "Each biryani prepared individually using the{" "}
            <span className="text-royal-cream">freshest ingredients.</span>"
          </p>
        </div>
      </div>
    </section>
  );
}
