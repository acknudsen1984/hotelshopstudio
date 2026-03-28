import Link from "next/link";
import EmailSignup from "./EmailSignup";

const SHOP_LINKS = [
  { label: "Hotel Bathroom", href: "/shop/bathroom" },
  { label: "Hotel Kitchen", href: "/shop/kitchen" },
  { label: "Hotel Bedroom", href: "/shop/bedroom" },
  { label: "Home Essentials", href: "/shop/home-essentials" },
];

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Quick Links", href: "/links" },
];

const SOCIAL_LINKS = [
  { platform: "Instagram", href: "https://instagram.com/hotelshopstudio" },
  { platform: "Pinterest", href: "https://pinterest.com/hotelshopstudio" },
  { platform: "YouTube", href: "https://youtube.com/@hotelshopstudio" },
  { platform: "TikTok", href: "https://tiktok.com/@hotelshopstudio" },
];

export default function Footer() {
  return (
    <footer className="bg-[#3C3C3C] text-white/80 mt-auto">
      <div className="mx-auto max-w-[1200px] px-6 py-16 sm:py-20">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-display text-2xl text-white font-light tracking-tight">
                Hotel Shop
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/60 font-sans leading-relaxed max-w-xs font-light">
              Curated luxury home essentials inspired by 5-star hotel
              aesthetics. Every item chosen for quality, function, and
              longevity.
            </p>
          </div>

          {/* Shop column */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-white/40 font-sans font-normal mb-6">
              Shop
            </h4>
            <ul className="space-y-3">
              {SHOP_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 font-sans font-light hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-white/40 font-sans font-normal mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 font-sans font-light hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter column */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-white/40 font-sans font-normal mb-6">
              Stay Updated
            </h4>
            <p className="text-sm text-white/60 font-sans font-light mb-4 leading-relaxed">
              New curated finds delivered to your inbox weekly.
            </p>
            <EmailSignup compact dark />
          </div>
        </div>

        {/* Social links */}
        <div className="mt-14 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] tracking-widest uppercase text-white/40 font-sans font-light hover:text-white transition-colors duration-300"
                >
                  {social.platform}
                </Link>
              ))}
            </div>

            <div className="text-right space-y-1">
              <p className="text-xs text-white/30 font-sans">
                &copy; {new Date().getFullYear()} Hotel Shop Studio
              </p>
              <p className="text-[10px] text-white/20 font-sans leading-relaxed max-w-sm">
                Hotel Shop uses Amazon affiliate links. We earn a commission at
                no additional cost to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
