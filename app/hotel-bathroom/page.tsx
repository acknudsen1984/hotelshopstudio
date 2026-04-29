import TopBar from '@/components/Header/TopBar';
import Nav from '@/components/Header/Nav';
import Footer from '@/components/Footer/Footer';
import { CategoryPage } from '@/components/Sections';
import { hotelBathroomProducts } from '@/lib/data';

export const metadata = {
  title: 'Hotel Bathroom — Hotel Shop',
  description:
    'Spa-worthy bathroom essentials curated for a hotel-quality experience at home.',
};

export default function Page() {
  return (
    <>
      <TopBar />
      <Nav />
      <CategoryPage
        title="Hotel Bathroom"
        description="Spa-worthy bathroom essentials curated for a hotel-quality experience at home."
        products={hotelBathroomProducts}
      />
      <Footer />
    </>
  );
}
