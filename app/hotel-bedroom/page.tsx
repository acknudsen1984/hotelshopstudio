import TopBar from '@/components/Header/TopBar';
import Nav from '@/components/Header/Nav';
import Footer from '@/components/Footer/Footer';
import { CategoryPage } from '@/components/Sections';
import { hotelBedroomProducts } from '@/lib/data';

export const metadata = {
  title: 'Hotel Bedroom — Hotel Shop',
  description:
    'Linens, lighting, and finishing touches for a true hotel-bedroom feel.',
};

export default function Page() {
  return (
    <>
      <TopBar />
      <Nav />
      <CategoryPage
        title="Hotel Bedroom"
        description="Linens, lighting, and finishing touches for a true hotel-bedroom feel."
        products={hotelBedroomProducts}
      />
      <Footer />
    </>
  );
}
