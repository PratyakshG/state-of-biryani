"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EXPAND_CITIES = [
  "Delhi NCR",
  "Mumbai",
  "Pune",
  "Lucknow",
  "Kolkata",
  "Punjab",
  "Jaipur",
  "Bhubaneswar",
  "Patna",
  "Ranchi",
  "Guwahati",
  "Jamshedpur",
  "Goa",
  "Bangalore",
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section number
      gsap.fromTo(
        ".about-num",
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-num",
            start: "top 85%",
          },
        }
      );

      // Left column
      gsap.fromTo(
        ".about-left > *",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-left",
            start: "top 80%",
          },
        }
      );

      // Right text
      gsap.fromTo(
        ".about-right > *",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-right",
            start: "top 80%",
          },
        }
      );

      // City pills stagger
      gsap.fromTo(
        ".city-pill",
        { scale: 0.85, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.04,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".cities-pills",
            start: "top 85%",
          },
        }
      );

      // Horizontal line expand
      gsap.fromTo(
        ".about-divider",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".about-divider",
            start: "top 90%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-28 lg:py-40 bg-royal-black overflow-hidden"
    >
      {/* Glow orb */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-royal-gold/4 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section number watermark */}
        <div className="about-num relative mb-8 overflow-hidden">
          <span className="section-num absolute -top-4 left-0 select-none pointer-events-none opacity-100">
            01
          </span>
          <div className="relative pl-1 pt-12">
            <div className="flex items-center gap-4 mb-3">
              <div className="h-px w-8 bg-royal-gold" />
              <span className="font-body text-[10px] tracking-[0.4em] uppercase text-royal-gold">
                About Us
              </span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div className="about-left">
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light leading-tight text-royal-cream mb-8">
              India's{" "}
              <span className="italic text-gold-clip">Biryani</span>
              <br />
              Kingdom
            </h2>

            <div className="about-divider w-full h-px bg-royal-border origin-left mb-8" />

            <div className="flex gap-12 mb-10">
              <div>
                <span className="font-display text-5xl text-royal-gold font-medium">
                  50+
                </span>
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-royal-cream-dim mt-1">
                  Cities
                </p>
              </div>
              <div>
                <span className="font-display text-5xl text-royal-gold font-medium">
                  100%
                </span>
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-royal-cream-dim mt-1">
                  Fresh Always
                </p>
              </div>
            </div>

            <p className="font-body text-sm text-royal-cream-muted leading-relaxed italic font-light">
              "Elevating the customer experience with unique and authentic{" "}
              <span className="text-royal-cream not-italic">shaahi style</span>—
              biryani rich in melt-in-the-mouth flavors."
            </p>
          </div>

          {/* Right */}
          <div className="about-right space-y-6">
            <p className="font-body text-base text-royal-cream-muted leading-relaxed">
              As pioneers in delivering fresh,{" "}
              <span className="text-royal-cream font-medium">
                dum-cooked biryanis
              </span>{" "}
              across the country, State Of Biryani elevates the customer
              experience with its unique and authentic shaahi style—serving
              biryani rich in melt-in-the-mouth flavors. Every order is prepared
              fresh, exclusively for each customer.
            </p>

            <p className="font-body text-base text-royal-cream-muted leading-relaxed">
              We are expanding our presence to{" "}
              <span className="text-royal-gold font-medium">50+ cities</span>,
              reviving royal culinary traditions across the nation. Bringing this
              regal experience straight to your doorstep, we deliver freshly
              prepared biryani within{" "}
              <span className="text-royal-cream font-medium">30–40 minutes</span>
              —crafted with time, care, and elegance.
            </p>

            {/* Expanding cities */}
            <div>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-royal-cream-dim mb-4">
                Expanding Across
              </p>
              <div className="cities-pills flex flex-wrap gap-2">
                {EXPAND_CITIES.map((city) => (
                  <span
                    key={city}
                    className="city-pill font-body text-xs text-royal-cream-muted border border-royal-border px-3 py-1.5 hover:border-royal-gold-muted hover:text-royal-gold transition-all duration-300"
                  >
                    {city}
                  </span>
                ))}
                <span className="city-pill font-body text-xs text-royal-gold border border-royal-gold-dim px-3 py-1.5">
                  + Many More
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
