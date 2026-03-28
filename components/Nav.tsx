"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import TopBar from "./TopBar";

const NAV_LINKS = [
  { label: "Bathroom", href: "/shop/bathroom" },
  { label: "Kitchen", href: "/shop/kitchen" },
  { label: "Bedroom", href: "/shop/bedroom" },
  { label: "Home Essentials", href: "/shop/home-essentials" },
  { label: "About", href: "/about" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar — hidden on scroll */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          scrolled ? "max-h-0 opacity-0" : "max-h-16 opacity-100"
        }`}
      >
        <TopBar />
      </div>

      {/* Main navigation */}
      <nav className="w-full bg-[#F5F3F0] border-b border-[#E5DDD5]">
        <div className="mx-auto max-w-[1200px] px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <span className="font-display text-2xl sm:text-[28px] text-[#3C3C3C] font-light tracking-tight">
              Hotel Shop
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] font-sans font-normal text-[#A0978E] tracking-[0.15em] uppercase hover:text-[#3C3C3C] transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop search icon */}
          <div className="hidden lg:flex items-center">
            <button
              className="p-2 text-[#A0978E] hover:text-[#3C3C3C] transition-colors"
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-5 h-[1.5px] bg-[#3C3C3C] transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-[#3C3C3C] transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-[#3C3C3C] transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile menu overlay */}
        <div
          className={`lg:hidden fixed inset-0 top-16 bg-[#F5F3F0] z-40 transition-all duration-300 ${
            menuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="flex flex-col px-8 pt-8 pb-12 gap-1">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-4 border-b border-[#E5DDD5] text-lg font-display font-light text-[#3C3C3C] hover:text-[#A0978E] transition-colors"
                onClick={() => setMenuOpen(false)}
                style={{
                  animationDelay: `${i * 50}ms`,
                }}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile social links */}
            <div className="flex items-center gap-6 mt-10">
              {["Instagram", "Pinterest", "YouTube", "TikTok"].map((platform) => (
                <span
                  key={platform}
                  className="text-[11px] tracking-widest uppercase text-[#A0978E] font-light"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
