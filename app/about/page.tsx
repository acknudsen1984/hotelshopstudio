import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import EmailSignup from "@/components/EmailSignup";

export const metadata: Metadata = {
  title: "About — Hotel Shop",
  description: "Hotel Shop is a curated shopping site inspired by boutique hotel details.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">

        <section className="bg-white border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
            <p className="text-xs text-brass tracking-widest uppercase font-sans mb-4">
              About
            </p>
            <h1 className="font-display text-4xl sm:text-5xl text-charcoal font-light">
              Hotel Shop
            </h1>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
            <div className="max-w-2xl">
              <p className="font-sans text-base sm:text-lg leading-relaxed text-charcoal/80">
                Hotel Shop is a curated shopping site inspired by boutique hotel details.
                The focus is on well-designed, practical home and lifestyle essentials that
                hold up to daily use. The site is created and edited by a video producer and
                designer with a background in visual storytelling and product selection.
                Every item is chosen for quality, function, and longevity, with the goal of
                making everyday spaces feel considered rather than styled. Hotel Shop links
                directly to products we recommend so visitors can shop the edit easily.
                Some links may earn commission through affiliate programs, including Amazon,
                at no additional cost to the customer.
              </p>

              <div className="mt-16 pt-12 border-t border-border">
                <p className="font-display text-2xl text-charcoal font-light mb-2">
                  Get the edit in your inbox
                </p>
                <p className="text-muted text-sm font-sans mb-6">
                  New finds, curated weekly.
                </p>
                <EmailSignup />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
