import type { Metadata } from "next";
import EmailSignup from "@/components/EmailSignup";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Links — Hotel Shop",
  description: "All Hotel Shop links in one place.",
};

const LINK_BUTTONS = [
  { label: "Hotel Bathroom", href: "/hotel-bathroom" },
  { label: "Hotel Kitchen", href: "/hotel-kitchen" },
  { label: "Hotel Bedroom", href: "/hotel-bedroom" },
  { label: "Home Essentials", href: "/home-essentials" },
  { label: "About", href: "/about" },
] as const;

export default function LinksPage() {
  return (
    <>
      <Nav />
      <div className="min-h-screen bg-white flex flex-col items-center px-5 py-16">
        <div className="text-center mb-10">
          <h1 className="font-display text-3xl text-charcoal font-light italic">Hotel Shop</h1>
          <p className="mt-2 text-sm text-muted font-sans">
            Curated boutique hotel essentials for your home
          </p>
        </div>

        <div className="w-full max-w-sm flex flex-col gap-3 mb-10">
          {LINK_BUTTONS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center justify-between border border-border bg-white px-6 py-4 text-sm font-sans text-charcoal hover:border-brass hover:text-brass transition-colors duration-200"
            >
              <span>{link.label}</span>
              <span className="text-muted">→</span>
            </a>
          ))}
        </div>

        <div id="signup" className="w-full max-w-sm mb-4">
          <p className="text-xs text-muted tracking-widest uppercase font-sans mb-4 text-center">
            Join the list
          </p>
          <EmailSignup compact />
        </div>

        <p className="mt-10 text-xs text-muted/50 font-sans">
          &copy; {new Date().getFullYear()} Hotel Shop Studio
        </p>
      </div>
    </>
  );
}
