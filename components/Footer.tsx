import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Hotel Bathroom", href: "/shop/bathroom" },
  { label: "Hotel Kitchen", href: "/shop/kitchen" },
  { label: "Hotel Bedroom", href: "/shop/bedroom" },
  { label: "Home Essentials", href: "/shop/home-essentials" },
];

export default function Footer() {
  return (
    <footer className="border-t border-warm-beige bg-off-white mt-auto">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-12">
          {/* Brand column */}
          <div>
            <Link href="/" className="inline-block">
              <span className="font-display text-lg text-charcoal font-light tracking-tight">
                Hotel Shop
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted font-sans leading-relaxed max-w-xs">
              Curated luxury home essentials inspired by 5-star hotel aesthetics. 
              Every item chosen for quality, function, and longevity.
            </p>
          </div>

          {/* Links column */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-muted font-sans tracking-widest uppercase hover:text-rose transition-colors duration-300 font-light"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-warm-beige/60 pt-8">
          {/* Copyright */}
          <p className="text-xs text-muted/70 font-sans mb-3">
            &copy; {new Date().getFullYear()} Hotel Shop Studio
          </p>
          
          {/* Affiliate disclosure */}
          <p className="text-xs text-muted/60 font-sans leading-relaxed max-w-2xl">
            Hotel Shop uses Amazon affiliate links. We earn a commission at no additional cost to you. 
            Every purchase supports our curation process.
          </p>
        </div>
      </div>
    </footer>
  );
}
