"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const FOOTER_LINKS = {
  "Quick Links": [
    { label: "About Us", href: "#about" },
    { label: "Our Mission", href: "#mission" },
    { label: "Royal Assurance", href: "#assurance" },
    { label: "Our Ethos", href: "#ethos" },
  ],
  Cities: [
    { label: "Delhi NCR", href: "/city/new-delhi" },
    { label: "Mumbai", href: "/city/mumbai" },
    { label: "Bangalore", href: "/city/bangalore" },
    { label: "View All", href: "#cities" },
  ],
  Corporate: [
    { label: "Bulk Orders", href: "#celebrations" },
    { label: "Catering", href: "#celebrations" },
    { label: "Gift Vouchers", href: "#celebrations" },
    { label: "Events", href: "#celebrations" },
  ],
};

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-col",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".footer-grid",
            start: "top 90%",
          },
        },
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative bg-royal-black border-t border-royal-border overflow-hidden"
    >
      {/* Top gold accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal-gold to-transparent" />

      {/* Newsletter / CTA band */}
      <div className="border-b border-royal-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <h3 className="font-display text-3xl lg:text-4xl font-light text-royal-cream mb-2">
              Ready to Experience{" "}
              <span className="italic text-gold-clip">Royalty?</span>
            </h3>
            <p className="font-body text-sm text-royal-cream-muted">
              Order fresh dum biryani delivered in 30-40 minutes.
            </p>
          </div>
          <a
            href="/contact"
            className="flex-shrink-0 font-body text-[11px] tracking-[0.2em] uppercase px-9 py-4 bg-royal-gold text-royal-black font-semibold hover:bg-royal-gold-light transition-colors duration-300 whitespace-nowrap"
          >
            Order Now
          </a>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="footer-grid grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Brand column */}
          <div className="footer-col col-span-2 lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-display text-3xl font-semibold text-royal-gold tracking-widest">
                SOB
              </span>
              <div className="h-8 w-px bg-royal-border" />
              <div>
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-royal-cream-muted leading-none">
                  State of Biryani
                </p>
                <p className="font-body text-[9px] tracking-[0.2em] uppercase text-royal-cream-dim mt-1 leading-none">
                  India's Cloud Kitchen
                </p>
              </div>
            </div>

            <p className="font-body text-sm text-royal-cream-muted leading-relaxed mb-6 max-w-xs">
              Pioneers in delivering fresh, dum-cooked biryanis across India.
              Authentic. Regal. Always fresh.
            </p>

            {/* Ornament */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-royal-gold-muted" />
              <svg
                width="14"
                height="14"
                viewBox="0 0 20 20"
                className="fill-royal-gold"
              >
                <path d="M10 0L12.2 7.2H20L13.9 11.6L16.2 18.9L10 14.5L3.8 18.9L6.1 11.6L0 7.2H7.8L10 0Z" />
              </svg>
              <div className="h-px w-8 bg-royal-gold-muted" />
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                {
                  label: "Instagram",
                  link: "https://www.instagram.com/stateofbiryani",
                  icon: (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  ),
                },
                {
                  label: "Facebook",
                  link: "https://www.facebook.com/profile.php?id=61588861154943",
                  icon: (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                },
                {
                  label: "X/Twitter",
                  link: "https://x.com/stateofbiryani",
                  icon: (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  aria-label={`Follow State of Biryani on ${social.label}`}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="w-9 h-9 border border-royal-border flex items-center justify-center text-royal-cream-dim hover:border-royal-gold hover:text-royal-gold transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div
              key={heading}
              className="footer-col col-span-1"
            >
              <p className="font-body text-[10px] tracking-[0.35em] uppercase text-royal-gold mb-6">
                {heading}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-royal-cream-muted hover:text-royal-cream transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-royal-gold-muted group-hover:w-3 transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-royal-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-royal-cream-dim">
            © {new Date().getFullYear()} State of Biryani. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="font-body text-xs text-royal-cream-dim hover:text-royal-cream-muted transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="font-body text-xs text-royal-cream-dim hover:text-royal-cream-muted transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="/contact"
              className="font-body text-xs text-royal-cream-dim hover:text-royal-cream-muted transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
