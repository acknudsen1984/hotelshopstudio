import TopBar from '@/components/Header/TopBar';
import Nav from '@/components/Header/Nav';
import Footer from '@/components/Footer/Footer';
import { CategoryPage } from '@/components/Sections';
import { homeEssentialsProducts } from '@/lib/data';

export const metadata = {
  title: 'Home Essentials — Hotel Shop',
  description:
    'The finishing pieces — decor, storage, and serveware that make a house feel like a curated stay.',
};

export default function Page() {
  return (
    <>
      <TopBar />
      <Nav />
      <CategoryPage
        title="Home Essentials"
        description="The finishing pieces — decor, storage, and serveware that make a house feel like a curated stay."
        products={homeEssentialsProducts}
      />
      <Footer />
    </>
  );
}
