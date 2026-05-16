"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ASSURANCES = [
  {
    num: "I",
    title: "Premium Ingredients",
    headline: "Only the Finest",
    description:
      "We use only the finest ingredients—premium basmati rice aged for nearly two years, pure spices handpicked from Kerala, and carefully selected meats and vegetables—to craft every biryani.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        className="fill-royal-gold"
      >
        <path d="M16 3L18.5 11H27L20.5 15.5L23 23.5L16 19L9 23.5L11.5 15.5L5 11H13.5L16 3Z" />
      </svg>
    ),
  },
  {
    num: "II",
    title: "Authentic Dum Cooking",
    headline: "Sealed to Perfection",
    description:
      "At State Of Biryani, each biryani is traditionally dum-cooked to perfection—the ancient sealed-vessel method that locks in rich aromas and authentic flavors from every layer.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        className="fill-royal-gold"
      >
        <path d="M4 8h24v3c0 4-3 8-8 10v5h4v2H8v-2h4v-5C7 19 4 15 4 11V8zm2 2v1c0 3.5 2.5 6.5 6.5 8.2V26h7v-7.8C23.5 16.5 26 13.5 26 10V10H6z" />
      </svg>
    ),
  },
  {
    num: "III",
    title: "World-Class Standards",
    headline: "Technology Meets Tradition",
    description:
      "Backed by world-class technology, processes, and systems, we ensure uncompromising quality, consistency, and hygiene in every order—from kitchen to doorstep.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        className="fill-royal-gold"
      >
        <path d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2zm0 2c6.6 0 12 5.4 12 12s-5.4 12-12 12S4 22.6 4 16 9.4 4 16 4zm5 7l-7 7-3-3-1.4 1.4 4.4 4.4 8.4-8.4L21 11z" />
      </svg>
    ),
  },
];

export default function RoyalAssurance() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".assurance-header > *",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".assurance-header",
            start: "top 82%",
          },
        }
      );

      gsap.fromTo(
        ".assurance-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".assurance-grid",
            start: "top 80%",
          },
        }
      );

      // Animated line through cards
      gsap.fromTo(
        ".connector-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".assurance-grid",
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="assurance"
      className="relative py-28 lg:py-40 bg-royal-black overflow-hidden"
    >
      {/* Corner ornaments */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-royal-border/50 pointer-events-none" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-royal-border/50 pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-royal-border/50 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-royal-border/50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="assurance-header mb-16 lg:mb-24">
          <div className="relative overflow-visible mb-0">
            <span className="section-num absolute -top-4 left-0 select-none pointer-events-none text-royal-border/20">
              03
            </span>
          </div>
          <div className="flex items-center gap-4 mb-6 pt-14">
            <div className="h-px w-8 bg-royal-gold" />
            <span className="font-body text-[10px] tracking-[0.4em] uppercase text-royal-gold">
              Our Royal Assurance
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-royal-cream leading-tight">
              Quality You Can{" "}
              <span className="italic text-gold-clip">Taste</span>
            </h2>
            <p className="font-body text-sm text-royal-cream-muted leading-relaxed max-w-sm lg:text-right">
              Three pillars that define every dish we serve—from sourcing to
              your doorstep.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="assurance-grid relative grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Connector line (desktop only) */}
          <div className="connector-line hidden lg:block absolute top-14 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-royal-gold/20 via-royal-gold/40 to-royal-gold/20 pointer-events-none origin-left" />

          {ASSURANCES.map((item) => (
            <div
              key={item.num}
              className="assurance-card card-glow bg-royal-card p-8 lg:p-10 relative group hover:-translate-y-1 transition-transform duration-500"
            >
              {/* Hover gradient fill */}
              <div className="absolute inset-0 bg-gradient-to-b from-royal-gold/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Top accent */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-royal-gold/50 to-transparent" />

              {/* Roman numeral */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 flex items-center justify-center border border-royal-border group-hover:border-royal-gold-muted transition-colors duration-400">
                  {item.icon}
                </div>
                <span className="font-display text-3xl text-royal-border font-semibold">
                  {item.num}
                </span>
              </div>

              {/* Badge */}
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-royal-gold mb-3">
                {item.title}
              </p>

              <h3 className="font-display text-3xl lg:text-4xl font-semibold text-royal-cream mb-4 leading-tight">
                {item.headline}
              </h3>

              <p className="font-body text-sm text-royal-cream-muted leading-relaxed">
                {item.description}
              </p>

              {/* Bottom corner accent */}
              <div className="absolute bottom-6 right-6 w-6 h-6 border-b border-r border-royal-gold-dim group-hover:border-royal-gold-muted transition-colors duration-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
