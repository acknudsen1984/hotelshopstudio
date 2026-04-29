"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Hotel Bathroom", href: "/hotel-bathroom" },
  { label: "Hotel Kitchen", href: "/hotel-kitchen" },
  { label: "Hotel Bedroom", href: "/hotel-bedroom" },
  { label: "Home Essentials", href: "/home-essentials" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-warm-beige bg-[#FAF7F2] sticky top-0 z-50 shadow-sm">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-5 py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <span className="font-display text-xl sm:text-2xl text-charcoal font-light tracking-tight">
            Hotel Shop
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10 text-xs font-sans font-light text-muted tracking-widest uppercase">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-rose transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-charcoal transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-charcoal transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-charcoal transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-warm-beige bg-off-white px-5 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-sans font-light text-muted tracking-widest uppercase hover:text-rose transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
