import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import InstagramSection from "@/components/InstagramSection";

export default function Home() {
  return (
    <>
      <Nav />

      <main className="flex-1">
        {/* Hero Carousel — 9 slides, numbered 01-09 */}
        <Hero />

        {/* Instagram Section — 4 cards, split layout */}
        <InstagramSection />
      </main>

      <Footer />
    </>
  );
}
