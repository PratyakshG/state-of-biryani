"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Mission", href: "#mission" },
  { label: "Cities", href: "#cities" },
  { label: "Catering", href: "#celebrations" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".nav-animate",
        { y: -24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.4,
        },
      );
    }, navRef);

    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          scrolled
            ? "bg-royal-dark/95 backdrop-blur-md border-b border-royal-border py-4"
            : "bg-transparent py-7"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="nav-animate flex items-center gap-4 group"
          >
            <div className="relative">
              <Image
                src="/logo.png"
                alt="biryani"
                height={50}
                width={50}
                className="right-0"
              />
            </div>

            <div className="hidden sm:flex flex-col">
              <span className="font-body font-medium text-[12px] tracking-[0.15em] uppercase text-royal-cream-muted leading-none">
                State of Biryani
              </span>
              <span className="font-body text-[9px] tracking-[0.25em] uppercase text-royal-cream-dim leading-none mt-1">
                India's Royal Cloud Kitchen
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="nav-animate font-body text-[11px] tracking-[0.25em] uppercase text-royal-cream-muted hover:text-royal-gold transition-colors duration-300 relative group"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-royal-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="nav-animate hidden sm:block font-body text-[11px] tracking-[0.2em] uppercase px-6 py-2.5 border border-royal-gold text-royal-gold hover:bg-royal-gold hover:text-royal-black transition-all duration-300"
            >
              Order Now
            </a>
            {/* Mobile menu toggle */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-1"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-px bg-royal-cream-muted transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-6 h-px bg-royal-cream-muted transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-px bg-royal-cream-muted transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-royal-dark/98 backdrop-blur-md transition-all duration-500 flex flex-col items-center justify-center gap-8 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            onClick={() => setMenuOpen(false)}
            className="font-display text-4xl italic text-royal-cream hover:text-royal-gold transition-colors duration-300"
          >
            {label}
          </Link>
        ))}
        <a
          href="#"
          className="mt-4 font-body text-xs tracking-[0.2em] uppercase px-8 py-3 border border-royal-gold text-royal-gold"
        >
          Order Now
        </a>
      </div>
    </>
  );
}
