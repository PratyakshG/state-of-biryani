"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    icon: "🍛",
    label: "Bulk Orders",
    desc: "Catering for large gatherings",
  },
  {
    icon: "🎁",
    label: "Gift Vouchers",
    desc: "Royal gifting for every occasion",
  },
  {
    icon: "🏢",
    label: "Corporate",
    desc: "Office parties & team lunches",
  },
  {
    icon: "🎉",
    label: "Events",
    desc: "Social gatherings & house parties",
  },
];

export default function Celebrations() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading block
      gsap.fromTo(
        ".celeb-header > *",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.13,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".celeb-header",
            start: "top 82%",
          },
        }
      );

      // Left feature block
      gsap.fromTo(
        ".celeb-left",
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".celeb-grid",
            start: "top 78%",
          },
        }
      );

      // Right feature block
      gsap.fromTo(
        ".celeb-right",
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".celeb-grid",
            start: "top 78%",
          },
        }
      );

      // Feature icons
      gsap.fromTo(
        ".feature-item",
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".features-row",
            start: "top 84%",
          },
        }
      );

      // Hygiene section
      gsap.fromTo(
        ".hygiene-section > *",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".hygiene-section",
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
      id="celebrations"
      className="relative py-28 lg:py-40 bg-royal-dark overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal-border to-transparent" />
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-royal-gold/4 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main header */}
        <div className="celeb-header mb-16 lg:mb-24">
          <div className="relative overflow-visible mb-0">
            <span className="section-num absolute -top-4 left-0 select-none pointer-events-none text-royal-border/20">
              06
            </span>
          </div>
          <div className="flex items-center gap-4 mb-6 pt-14">
            <div className="h-px w-8 bg-royal-gold" />
            <span className="font-body text-[10px] tracking-[0.4em] uppercase text-royal-gold">
              Elevate Every Occasion
            </span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-royal-cream leading-tight max-w-3xl">
            Elevate Your{" "}
            <span className="italic text-gold-clip">Celebrations</span>
            <br />
            with Dum Delicacies
          </h2>
        </div>

        {/* Two-column feature grid */}
        <div className="celeb-grid grid lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {/* Left card */}
          <div className="celeb-left card-glow bg-royal-card p-10 lg:p-12 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal-gold/50 to-transparent" />
            <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-royal-gold/5 blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <p className="font-body text-[10px] tracking-[0.35em] uppercase text-royal-gold mb-4">
                Office & Social Gatherings
              </p>
              <h3 className="font-display text-4xl lg:text-5xl font-semibold text-royal-cream leading-tight mb-6">
                From Office to
                <br />
                <span className="italic font-light text-royal-gold-light">
                  House Parties
                </span>
              </h3>
              <p className="font-body text-sm text-royal-cream-muted leading-relaxed mb-8">
                From office celebrations to social gatherings and house parties,
                wewe've got you coveredapos;ve got you covered. Bring people together over authentic dum
                biryani—freshly cooked and crafted to be everyoneeveryone's favoriteapos;s favorite.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-3 font-body text-[11px] tracking-[0.2em] uppercase text-royal-gold border-b border-royal-gold-muted pb-1 hover:border-royal-gold transition-colors duration-300 group"
              >
                Plan an Event
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 12 12"
                  className="fill-current translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path d="M6 0L12 6L6 12L5.3 11.3L10.1 6.5H0V5.5H10.1L5.3 0.7L6 0Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right card */}
          <div className="celeb-right card-glow bg-royal-card p-10 lg:p-12 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal-gold/50 to-transparent" />
            <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-royal-gold/5 blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <p className="font-body text-[10px] tracking-[0.35em] uppercase text-royal-gold mb-4">
                Corporate Solutions
              </p>
              <h3 className="font-display text-4xl lg:text-5xl font-semibold text-royal-cream leading-tight mb-6">
                Turn Up the
                <br />
                <span className="italic font-light text-royal-gold-light">
                  Office Vibe
                </span>
              </h3>
              <p className="font-body text-sm text-royal-cream-muted leading-relaxed mb-8">
                Explore our corporate offerings—bulk orders, catering, gift
                vouchers, and more. Gather your colleagues, spark great
                conversations, and dive into fresh, flavor-packed goodness.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-3 font-body text-[11px] tracking-[0.2em] uppercase text-royal-gold border-b border-royal-gold-muted pb-1 hover:border-royal-gold transition-colors duration-300 group"
              >
                Corporate Inquiry
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 12 12"
                  className="fill-current translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path d="M6 0L12 6L6 12L5.3 11.3L10.1 6.5H0V5.5H10.1L5.3 0.7L6 0Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Features row */}
        <div className="features-row grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
          {FEATURES.map((f) => (
            <div
              key={f.label}
              className="feature-item card-glow bg-royal-card/60 p-6 text-center group hover:-translate-y-0.5 transition-transform duration-400"
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-royal-cream mb-1">
                {f.label}
              </p>
              <p className="font-body text-xs text-royal-cream-dim">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Hygiene section */}
        <div className="hygiene-section border border-royal-border p-10 lg:p-14 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-royal-gold/30 via-royal-gold to-royal-gold/30" />
          <div className="absolute top-8 right-8 w-24 h-24 border border-royal-border/50 rounded-full pointer-events-none" />
          <div className="absolute top-12 right-12 w-16 h-16 border border-royal-border/30 rounded-full pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-royal-gold mb-4">
                True Taste
              </p>
              <h3 className="font-display text-4xl lg:text-5xl font-semibold text-royal-cream leading-tight mb-6">
                Cooked Fresh,
                <br />
                <span className="italic font-light text-gold-clip">
                  Delivered to You
                </span>
              </h3>
              <p className="font-body text-sm text-royal-cream-muted leading-relaxed">
                At State Of Biryani, hygiene comes first. Every order is cooked
                fresh, following strict safety standards—freshly prepared, right
                on demand.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Never Reheated", sub: "Cooked on every order" },
                { title: "Strict Hygiene", sub: "Highest safety standards" },
                { title: "Fresh Ingredients", sub: "Sourced with care" },
                { title: "Sealed Freshness", sub: "Dum-locked aromas" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-royal-card p-5 border border-royal-border hover:border-royal-gold-dim transition-colors duration-300"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-royal-gold mb-3" />
                  <p className="font-body text-xs font-semibold text-royal-cream mb-1 tracking-wide">
                    {item.title}
                  </p>
                  <p className="font-body text-xs text-royal-cream-dim">
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
