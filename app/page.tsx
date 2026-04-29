import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TopSellersCarousel from "@/components/TopSellersCarousel";
import CollectionsGrid from "@/components/CollectionsGrid";
import ProductGridFull from "@/components/ProductGridFull";
import SocialProof from "@/components/SocialProof";
import SubscribeSection from "@/components/SubscribeSection";
import { getFeaturedProducts, products } from "@/lib/products";

export default function Home() {
  const featured = getFeaturedProducts();

  return (
    <>
      <Nav />

      <main className="flex-1">
        {/* ───── Top Sellers Carousel (right under nav) ───── */}
        <TopSellersCarousel products={featured as any[]} />

        {/* ───── Subscribe CTA (above the fold) ───── */}
        <SubscribeSection />

        {/* ───── Collections Grid ───── */}
        <CollectionsGrid />

        {/* ───── Full Product Grid with Filters ───── */}
        <ProductGridFull products={products as any[]} />

        {/* ───── Hero Section (email signup — before footer) ───── */}
        <Hero />

        {/* ───── Why Hotel Shop (right before footer) ───── */}
        <SocialProof />
      </main>

      <Footer />
    </>
  );
}
