import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import EmailSignup from "@/components/EmailSignup";
import { getProductsByRoom } from "@/lib/products";

export const metadata: Metadata = {
  title: "Hotel Bedroom — Hotel Shop",
  description: "Curated hotel-quality bedroom essentials. Lamps, pillowcases, mirrors, and more.",
};

export default function HotelBedroomPage() {
  const products = getProductsByRoom("bedroom");

  return (
    <>
      <Nav />
      <main className="flex-1">

        <section className="bg-white border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
            <p className="text-xs text-brass tracking-widest uppercase font-sans mb-4">
              The Edit
            </p>
            <h1 className="font-display text-4xl sm:text-5xl text-charcoal font-light">
              Hotel Bedroom
            </h1>
            <p className="mt-4 text-muted text-base font-sans max-w-xl leading-relaxed">
              Lamps, linen pillowcases, mirrors, and furniture that give your bedroom
              the quiet luxury of a boutique hotel suite.
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
            <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-16">
              {products.map((product, i) => (
                <ProductCard key={`${product.name}-${i}`} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-off-white border-t border-border">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:py-16 text-center">
            <p className="font-display text-2xl text-charcoal font-light mb-2">Get new finds first</p>
            <p className="text-muted text-sm font-sans mb-6">New additions curated weekly.</p>
            <div className="flex justify-center"><EmailSignup /></div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
