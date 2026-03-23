import Link from "next/link";
import Image from "next/image";

const FOOTER_LINKS = [
  { label: "Hotel Bathroom", href: "/hotel-bathroom" },
  { label: "Hotel Kitchen", href: "/hotel-kitchen" },
  { label: "Hotel Bedroom", href: "/hotel-bedroom" },
  { label: "Home Essentials", href: "/home-essentials" },
  { label: "About", href: "/about" },
  { label: "Privacy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-off-white mt-auto">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Link href="/">
              <Image
                src="/hotel-shop-logo.png"
                alt="Hotel Shop"
                width={160}
                height={42}
                className="h-8 w-auto object-contain opacity-80"
              />
            </Link>
            <p className="mt-3 text-xs text-muted font-sans tracking-wide max-w-xs leading-relaxed">
              A curated shopping site inspired by boutique hotel details.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-muted font-sans tracking-widest uppercase hover:text-charcoal transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted/60 font-sans">
            &copy; {new Date().getFullYear()} Hotel Shop Studio
          </p>
          <p className="text-xs text-muted/50 font-sans text-center sm:text-right max-w-sm">
            Some links may earn commission through affiliate programs, including Amazon,
            at no additional cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
