"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });

      tl.fromTo(
        ".hero-eyebrow",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      )
        .fromTo(
          ".hero-word",
          { y: "110%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 1.1,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.3",
        )
        .fromTo(
          ".hero-ornament",
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 1.2, ease: "power3.inOut" },
          "-=0.6",
        )
        .fromTo(
          ".hero-desc",
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "power2.out" },
          "-=0.6",
        )
        .fromTo(
          ".hero-btn",
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: "power2.out",
          },
          "-=0.5",
        )
        .fromTo(
          ".hero-stat",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
          "-=0.4",
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-hero-glow"
      id="hero"
    >
      {/* Ambient glow orb */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-royal-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-royal-gold/3 blur-2xl pointer-events-none" />

      {/* Vertical rule lines */}
      <div className="absolute left-6 lg:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-royal-border to-transparent opacity-60 pointer-events-none" />
      <div className="absolute right-6 lg:right-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-royal-border to-transparent opacity-60 pointer-events-none" />

      {/* Background SOB watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="section-num opacity-100 text-[25vw] text-royal-border/20 select-none leading-none font-display font-bold tracking-tight">
          SOB
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-36 pb-28 w-full">
        {/* Eyebrow tag */}
        <div className="hero-eyebrow flex items-center gap-4 mb-10">
          <div className="h-px w-10 bg-royal-gold" />
          <span className="font-body text-[10px] tracking-[0.45em] uppercase text-royal-gold">
            India's Finest Cloud Kitchen
          </span>
          <div className="hidden sm:block h-px w-10 bg-royal-gold-muted" />
        </div>

        {/* Main headline — each word clip-wrapped for GSAP reveal */}
        <div className="mb-10">
          <div className="clip-overflow mb-1">
            <h1 className="hero-word font-display font-light text-7xl sm:text-8xl lg:text-9xl xl:text-[10rem] leading-none tracking-tight text-royal-cream">
              Experience
            </h1>
          </div>
          <div className="clip-overflow mb-1">
            <h1 className="hero-word font-display font-light text-7xl sm:text-8xl lg:text-9xl xl:text-[10rem] leading-none tracking-tight italic text-gold-clip">
              Royalty—
            </h1>
          </div>
          <div className="clip-overflow">
            <h1 className="hero-word font-display font-light text-7xl sm:text-8xl lg:text-9xl xl:text-[10rem] leading-none tracking-tight text-royal-cream">
              Delivered
            </h1>
          </div>
        </div>

        {/* Ornamental divider */}
        <div className="hero-ornament flex items-center gap-5 mb-10 origin-left">
          <div className="flex-1 max-w-[14rem] h-px bg-gradient-to-r from-royal-gold-muted to-royal-gold/20" />
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className="fill-royal-gold flex-shrink-0"
          >
            <path d="M10 0L12.2 7.2H20L13.9 11.6L16.2 18.9L10 14.5L3.8 18.9L6.1 11.6L0 7.2H7.8L10 0Z" />
          </svg>
          <div className="hidden sm:block w-2 h-2 border border-royal-gold-muted rotate-45 flex-shrink-0" />
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className="fill-royal-gold flex-shrink-0"
          >
            <path d="M10 0L12.2 7.2H20L13.9 11.6L16.2 18.9L10 14.5L3.8 18.9L6.1 11.6L0 7.2H7.8L10 0Z" />
          </svg>
          <div className="flex-1 max-w-[14rem] h-px bg-gradient-to-l from-royal-gold-muted to-royal-gold/20" />
        </div>

        {/* Description */}
        <p className="hero-desc font-body text-base lg:text-lg text-royal-cream-muted leading-relaxed max-w-xl mb-10">
          SOB – India's most leading biryani delivery chain. Fresh{" "}
          <span className="text-royal-cream font-medium">
            dum-cooked biryanis
          </span>{" "}
          delivered to your door with authentic shaahi style—in just{" "}
          <span className="text-royal-gold font-semibold">30–40 minutes.</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <a
            href="#"
            className="hero-btn font-body text-[11px] tracking-[0.2em] uppercase px-9 py-4 bg-royal-gold text-royal-black font-semibold hover:bg-royal-gold-light transition-colors duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Order Now</span>
          </a>
          <a
            href="#about"
            className="hero-btn font-body text-[11px] tracking-[0.2em] uppercase px-9 py-4 border border-royal-border text-royal-cream-muted hover:border-royal-gold hover:text-royal-gold transition-all duration-300"
          >
            Our Story
          </a>
          <a
            href="#cities"
            className="hero-btn font-body text-[11px] tracking-[0.2em] uppercase text-royal-cream-dim hover:text-royal-cream-muted transition-colors duration-300 flex items-center gap-2"
          >
            <span>50+ Cities</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              className="fill-current"
            >
              <path d="M6 0L12 6L6 12L5.3 11.3L10.1 6.5H0V5.5H10.1L5.3 0.7L6 0Z" />
            </svg>
          </a>
        </div>

        {/* Stats bar */}
        <div className="border-t border-royal-border pt-8 flex flex-wrap gap-8 lg:gap-16">
          {[
            { value: "50+", label: "Cities & Expanding" },
            { value: "30–40", label: "Min Fresh Delivery" },
            { value: "100%", label: "Never Reheated" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="hero-stat flex flex-col gap-1"
            >
              <span className="font-display text-4xl lg:text-5xl text-royal-gold font-medium leading-none">
                {stat.value}
              </span>
              <span className="font-body text-[10px] tracking-[0.2em] uppercase text-royal-cream-dim">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll nudge */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="font-body text-[9px] tracking-[0.4em] uppercase text-royal-cream-dim rotate-0">
          Scroll
        </span>
        <div className="relative w-px h-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-gold to-transparent animate-float-slow" />
        </div>
      </div>
    </section>
  );
}
