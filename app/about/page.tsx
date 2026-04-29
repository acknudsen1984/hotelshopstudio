import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BrandStory from "@/components/BrandStory";
import EmailSignup from "@/components/EmailSignup";

export const metadata: Metadata = {
  title: "Our Story — Hotel Shop",
  description:
    "Why Hotel Shop exists — bridging the gap between hotel inspiration and accessible luxury at home.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <BrandStory />
        <section className="bg-off-white border-t border-border">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:py-16 text-center">
            <p className="font-display text-2xl text-charcoal font-light mb-2">
              Get new finds first
            </p>
            <p className="text-muted text-sm font-sans mb-6">
              New additions curated weekly.
            </p>
            <div className="flex justify-center">
              <EmailSignup />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
