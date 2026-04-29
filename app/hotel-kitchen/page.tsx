import TopBar from '@/components/Header/TopBar';
import Nav from '@/components/Header/Nav';
import Footer from '@/components/Footer/Footer';
import { CategoryPage } from '@/components/Sections';
import { hotelKitchenProducts } from '@/lib/data';

export const metadata = {
  title: 'Hotel Kitchen — Hotel Shop',
  description:
    'Boutique-hotel kitchen essentials — refined tools and serveware for everyday luxury.',
};

export default function Page() {
  return (
    <>
      <TopBar />
      <Nav />
      <CategoryPage
        title="Hotel Kitchen"
        description="Boutique-hotel kitchen essentials — refined tools and serveware for everyday luxury."
        products={hotelKitchenProducts}
      />
      <Footer />
    </>
  );
}
