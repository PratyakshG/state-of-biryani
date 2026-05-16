"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CITIES = [
  "Amritsar", "Agra", "Azamgarh", "Bangalore", "Basti", "Bhopal",
  "Bhubaneswar", "Chandigarh", "Dhanbad", "Durgapur", "Dehradun",
  "Deoria", "Faridabad", "Gurgaon", "Ghaziabad", "Greater Noida",
  "Goa", "Gwalior", "Gorakhpur", "Guwahati", "Hyderabad", "Indore",
  "Jamshedpur", "Jaipur", "Jodhpur", "Jalandhar", "Kanpur", "Kolkata",
  "Kharar", "Ludhiana", "Lucknow", "Mysore", "Maharajganj", "Mumbai",
  "Mohali", "Meerut", "Noida", "Nagpur", "New Delhi", "Panchkula",
  "Patiala", "Pimpri", "Pune", "Patna", "Ranchi", "Raipur",
  "Siliguri", "Siddharthnagar", "Thane", "Udaipur",
];

// Split into two rows
const ROW1 = CITIES.slice(0, 25);
const ROW2 = CITIES.slice(25);

export default function Cities() {
  const sectionRef = useRef<HTMLElement>(null);
  const marquee1Ref = useRef<HTMLDivElement>(null);
  const marquee2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        ".cities-header > *",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cities-header",
            start: "top 82%",
          },
        }
      );

      // City grid items stagger
      gsap.fromTo(
        ".city-grid-item",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.03,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".city-grid",
            start: "top 82%",
          },
        }
      );
    }, sectionRef);

    // GSAP marquee - row 1 (left to right direction)
    const marq1 = marquee1Ref.current;
    if (marq1) {
      gsap.to(marq1, {
        xPercent: -50,
        ease: "none",
        duration: 45,
        repeat: -1,
      });
    }

    // GSAP marquee - row 2 (right to left direction)
    const marq2 = marquee2Ref.current;
    if (marq2) {
      gsap.fromTo(
        marq2,
        { xPercent: -50 },
        {
          xPercent: 0,
          ease: "none",
          duration: 55,
          repeat: -1,
        }
      );
    }

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cities"
      className="relative py-28 lg:py-40 bg-royal-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 lg:mb-20">
        {/* Header */}
        <div className="cities-header">
          <div className="relative overflow-visible mb-0">
            <span className="section-num absolute -top-4 left-0 select-none pointer-events-none text-royal-border/20">
              05
            </span>
          </div>
          <div className="flex items-center gap-4 mb-6 pt-14">
            <div className="h-px w-8 bg-royal-gold" />
            <span className="font-body text-[10px] tracking-[0.4em] uppercase text-royal-gold">
              Serving Across India
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-royal-cream leading-tight">
              50+ Cities,
              <br />
              One{" "}
              <span className="italic text-gold-clip">Royal</span> Kitchen
            </h2>
            <p className="font-body text-sm text-royal-cream-muted max-w-sm lg:text-right leading-relaxed">
              State Of Biryani is serving next across all these cities—reviving
              royal culinary traditions nationwide.
            </p>
          </div>
        </div>
      </div>

      {/* Marquee Row 1 */}
      <div className="overflow-hidden mb-5 py-2">
        <div ref={marquee1Ref} className="flex gap-6 whitespace-nowrap w-max">
          {/* Duplicate for seamless loop */}
          {[...ROW1, ...ROW1].map((city, i) => (
            <div
              key={`r1-${i}`}
              className="flex items-center gap-6 flex-shrink-0"
            >
              <span className="font-display text-3xl lg:text-4xl text-royal-cream-muted font-light italic whitespace-nowrap hover:text-royal-gold-light transition-colors duration-300 cursor-default">
                {city}
              </span>
              <span className="text-royal-gold-muted text-xl font-display">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 */}
      <div className="overflow-hidden mb-20 py-2">
        <div ref={marquee2Ref} className="flex gap-6 whitespace-nowrap w-max">
          {[...ROW2, ...ROW2].map((city, i) => (
            <div
              key={`r2-${i}`}
              className="flex items-center gap-6 flex-shrink-0"
            >
              <span className="font-display text-3xl lg:text-4xl text-royal-cream-dim font-light whitespace-nowrap hover:text-royal-gold transition-colors duration-300 cursor-default">
                {city}
              </span>
              <span className="text-royal-border text-xl font-display">◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* Full city grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="border-t border-royal-border pt-12">
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-royal-cream-dim mb-8">
            Complete City List
          </p>
          <div className="city-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-3">
            {CITIES.map((city) => (
              <div
                key={city}
                className="city-grid-item flex items-center gap-2 group cursor-default"
              >
                <span className="w-1 h-1 rounded-full bg-royal-gold-dim group-hover:bg-royal-gold transition-colors duration-300 flex-shrink-0" />
                <span className="font-body text-sm text-royal-cream-muted group-hover:text-royal-cream transition-colors duration-300 truncate">
                  {city}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
