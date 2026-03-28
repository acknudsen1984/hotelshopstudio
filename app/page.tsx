import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CategoryNav from "@/components/CategoryNav";
import ProductCard from "@/components/ProductCard";
import SubscribeSection from "@/components/SubscribeSection";
import { getFeaturedProducts } from "@/lib/products";

export default function Home() {
  const featured = getFeaturedProducts();

  return (
    <>
      <Nav />

      <main className="flex-1">
        {/* ───── Hero Section ───── */}
        <Hero />

        {/* ───── Featured Products ───── */}
        <section className="bg-cream border-b border-warm-beige/40">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24 lg:py-32">
            {/* Section header */}
            <div className="mb-12 sm:mb-16 text-center">
              <p className="text-xs text-rose tracking-widest uppercase font-sans font-light mb-3">
                Editor&apos;s Picks
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal font-light">
                Featured Finds
              </h2>
            </div>

            {/* Product grid — 3-4 cols desktop, 2 mobile */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8 sm:grid-cols-3 lg:grid-cols-4">
              {featured.slice(0, 8).map((product, i) => (
                <ProductCard 
                  key={`${product.category}-${product.name}-${i}`} 
                  product={product} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* ───── Category Navigation ───── */}
        <CategoryNav />

        {/* ───── Full Product Grid ───── */}
        <section className="bg-cream">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24 lg:py-32">
            {/* Section header */}
            <div className="mb-12 sm:mb-16 text-center">
              <p className="text-xs text-rose tracking-widest uppercase font-sans font-light mb-3">
                Complete Collection
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal font-light">
                All Curated Pieces
              </h2>
            </div>

            {/* Product grid — all 40 products */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8 sm:grid-cols-3 lg:grid-cols-4">
              {featured.map((product, i) => (
                <ProductCard 
                  key={`featured-${product.category}-${product.name}-${i}`} 
                  product={product} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* ───── Brand Philosophy ───── */}
        <section className="bg-off-white border-y border-warm-beige/40 py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-charcoal font-light leading-relaxed mb-8">
              &ldquo;Every item is chosen for quality, function, and longevity. 
              The goal is to make everyday spaces feel{" "}
              <em className="italic text-rose">considered</em> rather than styled.&rdquo;
            </p>
            <p className="text-sm text-muted font-light">
              — Hotel Shop Studio
            </p>
          </div>
        </section>

        {/* ───── Subscribe CTA ───── */}
        <SubscribeSection />

        {/* ───── Featured Collections ───── */}
        <section className="bg-cream py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-5">
            <div className="text-center mb-12 sm:mb-16">
              <p className="text-xs text-rose tracking-widest uppercase font-sans font-light mb-3">
                Shop by Category
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-charcoal font-light">
                Curated by Room
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
              {/* Bathroom collection */}
              <div className="flex flex-col">
                <div className="aspect-square bg-warm-beige/30 rounded-sm mb-6 flex items-center justify-center border border-warm-beige/60">
                  <span className="font-display text-4xl text-charcoal/20">🛁</span>
                </div>
                <h3 className="font-display text-2xl text-charcoal font-light mb-2">Hotel Bathroom</h3>
                <p className="text-sm text-muted font-light mb-4">
                  Spa-inspired essentials for luxurious daily rituals. From plush towels to elegant organizers.
                </p>
                <a 
                  href="/shop/bathroom"
                  className="inline-flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-charcoal hover:text-rose transition-colors duration-300 mt-auto"
                >
                  <span>Explore Collection</span>
                  <span>→</span>
                </a>
              </div>

              {/* Kitchen collection */}
              <div className="flex flex-col">
                <div className="aspect-square bg-warm-beige/30 rounded-sm mb-6 flex items-center justify-center border border-warm-beige/60">
                  <span className="font-display text-4xl text-charcoal/20">🍽️</span>
                </div>
                <h3 className="font-display text-2xl text-charcoal font-light mb-2">Hotel Kitchen</h3>
                <p className="text-sm text-muted font-light mb-4">
                  Functional pieces that elevate everyday cooking and dining. Quality materials built to last.
                </p>
                <a 
                  href="/shop/kitchen"
                  className="inline-flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-charcoal hover:text-rose transition-colors duration-300 mt-auto"
                >
                  <span>Explore Collection</span>
                  <span>→</span>
                </a>
              </div>

              {/* Bedroom collection */}
              <div className="flex flex-col">
                <div className="aspect-square bg-warm-beige/30 rounded-sm mb-6 flex items-center justify-center border border-warm-beige/60">
                  <span className="font-display text-4xl text-charcoal/20">🛏️</span>
                </div>
                <h3 className="font-display text-2xl text-charcoal font-light mb-2">Hotel Bedroom</h3>
                <p className="text-sm text-muted font-light mb-4">
                  Serene sanctuaries with high-quality bedding, lighting, and storage solutions for rest and renewal.
                </p>
                <a 
                  href="/shop/bedroom"
                  className="inline-flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-charcoal hover:text-rose transition-colors duration-300 mt-auto"
                >
                  <span>Explore Collection</span>
                  <span>→</span>
                </a>
              </div>

              {/* Home essentials collection */}
              <div className="flex flex-col">
                <div className="aspect-square bg-warm-beige/30 rounded-sm mb-6 flex items-center justify-center border border-warm-beige/60">
                  <span className="font-display text-4xl text-charcoal/20">✨</span>
                </div>
                <h3 className="font-display text-2xl text-charcoal font-light mb-2">Home Essentials</h3>
                <p className="text-sm text-muted font-light mb-4">
                  Thoughtful accents and organizational pieces that bring luxury touches to every room.
                </p>
                <a 
                  href="/shop/home-essentials"
                  className="inline-flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-charcoal hover:text-rose transition-colors duration-300 mt-auto"
                >
                  <span>Explore Collection</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
