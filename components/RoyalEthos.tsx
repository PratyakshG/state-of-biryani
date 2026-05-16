"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ETHOS = [
  {
    num: "01",
    principle: "Never Reheated",
    subline: "Always freshly prepared.",
    body: "At State Of Biryani, each order is cooked to perfection, delivering warmth, aroma, and authenticity in every bite. Never a reheated meal—always a freshly crafted experience.",
  },
  {
    num: "02",
    principle: "Quality Above All",
    subline: "Authenticity at our core.",
    body: "Every biryani we serve is rooted in authenticity, inspired by time-honored recipes from India's rich culinary heritage. We uphold quality as our highest standard.",
  },
  {
    num: "03",
    principle: "Rooted in Responsibility",
    subline: "Care for all.",
    body: "We are committed to caring for the environment and giving back to society through responsible practices, warm hospitality, and the highest food safety standards.",
  },
];

export default function RoyalEthos() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".ethos-header > *",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".ethos-header",
            start: "top 82%",
          },
        }
      );

      gsap.fromTo(
        ".ethos-row",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".ethos-list",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="ethos"
      className="relative py-28 lg:py-40 bg-royal-dark overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal-border to-transparent" />

      {/* Glow */}
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-royal-gold/4 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="ethos-header mb-16 lg:mb-24">
          <div className="relative overflow-visible">
            <span className="section-num absolute -top-4 left-0 select-none pointer-events-none text-royal-border/20">
              04
            </span>
          </div>
          <div className="flex items-center gap-4 mb-6 pt-14">
            <div className="h-px w-8 bg-royal-gold" />
            <span className="font-body text-[10px] tracking-[0.4em] uppercase text-royal-gold">
              Our Royal Ethos
            </span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-royal-cream leading-tight max-w-2xl">
            The Values Behind
            <br />
            Every{" "}
            <span className="italic text-gold-clip">Royal Bite</span>
          </h2>
        </div>

        {/* Ethos rows */}
        <div className="ethos-list space-y-0">
          {ETHOS.map((item, i) => (
            <div
              key={item.num}
              className="ethos-row group relative"
            >
              {/* Top divider */}
              <div className="h-px w-full bg-royal-border group-hover:bg-royal-gold/30 transition-colors duration-500" />

              <div className="grid grid-cols-12 gap-4 lg:gap-8 py-10 lg:py-12 items-start">
                {/* Number */}
                <div className="col-span-2 sm:col-span-1">
                  <span className="font-display text-xl font-medium text-royal-gold-muted group-hover:text-royal-gold transition-colors duration-400">
                    {item.num}
                  </span>
                </div>

                {/* Principle */}
                <div className="col-span-10 sm:col-span-4 lg:col-span-3">
                  <h3 className="font-display text-3xl lg:text-4xl font-semibold text-royal-cream leading-tight group-hover:text-royal-gold-light transition-colors duration-400">
                    {item.principle}
                  </h3>
                  <p className="font-body text-xs tracking-[0.1em] text-royal-cream-dim mt-2 italic">
                    {item.subline}
                  </p>
                </div>

                {/* Body */}
                <div className="col-span-12 sm:col-span-7 lg:col-span-6 sm:col-start-6 lg:col-start-6">
                  <p className="font-body text-sm lg:text-base text-royal-cream-muted leading-relaxed">
                    {item.body}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="hidden lg:flex col-span-2 justify-end items-center pt-1">
                  <div className="w-8 h-8 border border-royal-border rounded-full flex items-center justify-center group-hover:border-royal-gold transition-all duration-400 group-hover:bg-royal-gold/10">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      className="fill-royal-cream-dim group-hover:fill-royal-gold transition-colors duration-400"
                    >
                      <path d="M6 0L12 6L6 12L5.3 11.3L10.1 6.5H0V5.5H10.1L5.3 0.7L6 0Z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom divider for last item */}
              {i === ETHOS.length - 1 && (
                <div className="h-px w-full bg-royal-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
