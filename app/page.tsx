import TopBar from '@/components/Header/TopBar';
import Nav from '@/components/Header/Nav';
import HeroCarousel from '@/components/Sections/HeroCarousel';
import InstagramSection from '@/components/Sections/InstagramSection';
import RecentFinds from '@/components/Sections/RecentFinds';
import ShopTheRoom from '@/components/Sections/ShopTheRoom';
import BlogGrid from '@/components/Sections/BlogGrid';
import MeetTheTeam from '@/components/Sections/MeetTheTeam';
import SocialLinks from '@/components/Sections/SocialLinks';
import CuratedCarousel from '@/components/Sections/CuratedCarousel';
import Newsletter from '@/components/Sections/Newsletter';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      {/* 1. TopBar */}
      <TopBar />

      {/* 2. Navigation (sticky) */}
      <Nav />

      <main>
        {/* 3. Hero Carousel — "This Week's Top Picks" */}
        <HeroCarousel />

        {/* 4. "Recently Loved" Instagram Section */}
        <InstagramSection />

        {/* 5. "Recent Finds" Snapshot Grid */}
        <RecentFinds />

        {/* 6. "Shop The Room" Carousel */}
        <ShopTheRoom />

        {/* 7. "Check Out The Latest" Blog Grid */}
        <BlogGrid />

        {/* 8. "Meet The Team" About Section */}
        <MeetTheTeam />

        {/* 9. "Find Us On Social" */}
        <SocialLinks />

        {/* 10. "This Season's Picks" Curated Carousel */}
        <CuratedCarousel />

        {/* 11. Newsletter Signup */}
        <Newsletter />
      </main>

      {/* 12. Footer */}
      <Footer />
    </>
  );
}
