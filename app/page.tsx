import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TopSellersCarousel from "@/components/TopSellersCarousel";
import ShopTheLook from "@/components/ShopTheLook";
import CollectionsGrid from "@/components/CollectionsGrid";
import SocialProof from "@/components/SocialProof";
import ProductGridFull from "@/components/ProductGridFull";
import SubscribeSection from "@/components/SubscribeSection";
import { getFeaturedProducts, products } from "@/lib/products";

export default function Home() {
  const featured = getFeaturedProducts();

  // Prepare shop-the-look lifestyle scenes
  const lifestyleScenes = [
    {
      id: "morning-ritual",
      title: "Morning Ritual",
      description: "Start your day with spa-quality essentials that make everyday routines feel luxurious.",
      category: "bathroom",
      products: [
        featured.find(p => p.name === "Luxury Waffle Robe") ||
          { name: "Luxury Waffle Robe", price: "$90", category: "bathroom", asin: "B0DX46HDNM", featured: true },
        featured.find(p => p.name === "Wood Stool") ||
          { name: "Wood Stool", price: "$105", category: "bathroom", asin: "B0CTD1S78R", featured: true },
        featured.find(p => p.name === "Incense") ||
          { name: "Incense", price: "$50", category: "bathroom", asin: "B0CHSGQZZ5", featured: true },
      ],
    },
    {
      id: "dinner-table",
      title: "Dinner Table Setting",
      description: "Create memorable dining moments with thoughtfully selected kitchen and table pieces.",
      category: "kitchen",
      products: [
        featured.find(p => p.name === "Marble Cutting Board") ||
          { name: "Marble Cutting Board", price: "$44", category: "kitchen", asin: "B07NC7BRG2", featured: false },
        featured.find(p => p.name === "Olive Oil Cruet") ||
          { name: "Olive Oil Cruet", price: "$46", category: "kitchen", asin: "B00T4AOM06", featured: true },
        featured.find(p => p.name === "Silver Tray") ||
          { name: "Silver Tray", price: "$33", category: "kitchen", asin: "B09J6C4ZFM", featured: false },
      ],
    },
    {
      id: "restful-sleep",
      title: "Restful Sleep Sanctuary",
      description: "Quality bedding and lighting designed for comfort and tranquil sleep.",
      category: "bedroom",
      products: [
        featured.find(p => p.name === "Table Lamp") ||
          { name: "Table Lamp", price: "$187", category: "bedroom", asin: "B0CX95Y7YF", featured: true },
        featured.find(p => p.name === "Waffle Weave Pillowcases") ||
          { name: "Waffle Weave Pillowcases", price: "$24", category: "bedroom", asin: "B0CFF562SK", featured: true },
        featured.find(p => p.name === "Linen Euro Shams") ||
          { name: "Linen Euro Shams", price: "$38", category: "bedroom", asin: "B0917SZRRN", featured: false },
      ],
    },
    {
      id: "peaceful-spaces",
      title: "Peaceful Living Spaces",
      description: "Thoughtful accents and organizational pieces that elevate any room.",
      category: "home-essentials",
      products: [
        featured.find(p => p.name === "Wavy Key Bowl") ||
          { name: "Wavy Key Bowl", price: "$44", category: "home-essentials", asin: "B0FZD3CJ1L", featured: true },
        featured.find(p => p.name === "Stone Bookends") ||
          { name: "Stone Bookends", price: "$36", category: "home-essentials", asin: "B0D9GNFGQC", featured: false },
        featured.find(p => p.name === "Basket Set of 4") ||
          { name: "Basket Set of 4", price: "$44", category: "home-essentials", asin: "B0DGL38TXK", featured: false },
      ],
    },
  ];

  return (
    <>
      <Nav />

      <main className="flex-1">
        {/* ───── Hero Section ───── */}
        <Hero />

        {/* ───── Top Sellers Carousel ───── */}
        <TopSellersCarousel products={featured as any[]} />

        {/* ───── Shop the Look Section ───── */}
        <ShopTheLook scenes={lifestyleScenes} />

        {/* ───── Collections Grid ───── */}
        <CollectionsGrid />

        {/* ───── Social Proof / Testimonials ───── */}
        <SocialProof />

        {/* ───── Full Product Grid with Filters ───── */}
        <ProductGridFull products={products as any[]} />

        {/* ───── Subscribe CTA ───── */}
        <SubscribeSection />
      </main>

      <Footer />
    </>
  );
}
