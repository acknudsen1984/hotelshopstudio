"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Hotel Bathroom", href: "/hotel-bathroom" },
  { label: "Hotel Kitchen", href: "/hotel-kitchen" },
  { label: "Hotel Bedroom", href: "/hotel-bedroom" },
  { label: "Home Essentials", href: "/home-essentials" },
  { label: "About", href: "/about" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-border bg-white sticky top-0 z-50">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/hotel-shop-logo.png"
            alt="Hotel Shop"
            width={200}
            height={52}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-xs font-sans font-medium text-muted tracking-widest uppercase">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-charcoal transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-charcoal transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-px bg-charcoal transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-charcoal transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-white px-5 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-sans font-medium text-muted tracking-widest uppercase hover:text-charcoal transition-colors"
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
