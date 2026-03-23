import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import EmailSignup from "@/components/EmailSignup";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts, ROOMS } from "@/lib/products";

export default function Home() {
  const featured = getFeaturedProducts();

  return (
    <>
      <Nav />

      <main className="flex-1">

        {/* ───── Hero ───── */}
        <section className="bg-white border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:py-32 lg:py-40">
            <div className="max-w-2xl">
              <p className="text-xs text-brass tracking-widest uppercase font-sans mb-6">
                Curated Hotel Essentials
              </p>
              <h1 className="font-display font-light text-5xl leading-[1.08] sm:text-6xl lg:text-7xl text-charcoal">
                The boutique hotel edit,{" "}
                <em className="italic text-brass">for your home</em>
              </h1>
              <p className="mt-6 text-muted text-base sm:text-lg leading-relaxed font-sans max-w-lg">
                Every item chosen for quality, function, and longevity — so your everyday
                spaces feel considered rather than styled.
              </p>

              {/* Above-fold email signup */}
              <div className="mt-10">
                <p className="text-xs text-muted tracking-widest uppercase font-sans mb-4">
                  New finds every week
                </p>
                <EmailSignup />
              </div>
            </div>
          </div>
        </section>

        {/* ───── Shop by Category ───── */}
        <section className="bg-off-white border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
            <p className="text-xs text-muted tracking-widest uppercase font-sans mb-10 text-center">
              Shop by Room
            </p>
            <div className="grid grid-cols-2 gap-px sm:grid-cols-4 bg-border">
              {ROOMS.map((room) => (
                <Link
                  key={room.slug}
                  href={`/shop/${room.slug}`}
                  className="group flex flex-col items-center justify-center bg-off-white px-6 py-12 sm:py-16 hover:bg-white transition-colors duration-200"
                >
                  <span className="font-display text-lg sm:text-xl text-charcoal font-light group-hover:text-brass transition-colors duration-200 text-center leading-snug">
                    {room.label}
                  </span>
                  <span className="mt-2 text-xs text-muted font-sans tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Browse →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ───── Featured Products ───── */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
            <div className="flex items-baseline justify-between mb-12">
              <div>
                <p className="text-xs text-brass tracking-widest uppercase font-sans mb-2">
                  Editor&apos;s Picks
                </p>
                <h2 className="font-display text-3xl sm:text-4xl text-charcoal font-light">
                  Featured Finds
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-16">
              {featured.map((product, i) => (
                <ProductCard key={`${product.category}-${product.name}-${i}`} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* ───── Brand statement ───── */}
        <section className="bg-off-white border-t border-border border-b">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24 text-center">
            <p className="font-display text-2xl sm:text-3xl md:text-4xl text-charcoal font-light leading-relaxed max-w-3xl mx-auto">
              &ldquo;Every item is chosen for quality, function, and longevity, with the goal of
              making everyday spaces feel{" "}
              <em className="italic text-brass">considered</em> rather than styled.&rdquo;
            </p>
            <Link
              href="/about"
              className="mt-8 inline-block text-xs text-muted font-sans tracking-widest uppercase hover:text-brass transition-colors"
            >
              About Hotel Shop →
            </Link>
          </div>
        </section>

        {/* ───── Footer email CTA ───── */}
        <section className="bg-white border-t border-border">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20 text-center">
            <h2 className="font-display text-3xl sm:text-4xl text-charcoal font-light mb-3">
              New finds, every week
            </h2>
            <p className="text-muted text-sm font-sans max-w-md mx-auto mb-8">
              Hotel-quality pieces, curated and linked directly to Amazon.
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
