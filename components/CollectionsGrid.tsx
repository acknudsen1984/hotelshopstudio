import Link from 'next/link';
import { getProductImage, products } from '@/lib/products';

interface CollectionCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  category: string;
}

const collections: CollectionCard[] = [
  {
    id: 'bathroom',
    title: 'Hotel Bathroom',
    description: 'Spa-inspired essentials for luxurious daily rituals. From plush towels to elegant organizers.',
    icon: '🛁',
    href: '/shop/bathroom',
    category: 'bathroom',
  },
  {
    id: 'kitchen',
    title: 'Hotel Kitchen',
    description: 'Functional pieces that elevate everyday cooking and dining. Quality materials built to last.',
    icon: '🍽️',
    href: '/shop/kitchen',
    category: 'kitchen',
  },
  {
    id: 'bedroom',
    title: 'Hotel Bedroom',
    description: 'Serene sanctuaries with high-quality bedding, lighting, and storage for rest and renewal.',
    icon: '🛏️',
    href: '/shop/bedroom',
    category: 'bedroom',
  },
  {
    id: 'essentials',
    title: 'Home Essentials',
    description: 'Thoughtful accents and organizational pieces that bring luxury touches to every room.',
    icon: '✨',
    href: '/shop/home-essentials',
    category: 'home-essentials',
  },
];

export default function CollectionsGrid() {
  return (
    <section className="bg-cream py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs text-rose tracking-widest uppercase font-sans font-light mb-3">
            Shop by Category
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal font-light">
            Curated Collections
          </h2>
        </div>

        {/* Collections grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              href={collection.href}
              className="group flex flex-col h-full"
            >
              {/* Card image */}
              <div 
                className="aspect-square rounded-lg mb-6 border border-warm-beige/60 group-hover:border-rose/40 transition-all duration-300 overflow-hidden bg-cover bg-center group-hover:scale-105"
                style={{
                  backgroundImage: `url('${getProductImage(products.find(p => p.category === collection.category) || products[0])}')`,
                  backgroundColor: '#E8DFD7'
                }}
              />

              {/* Card content */}
              <div className="flex-1 flex flex-col">
                <h3 className="font-display text-2xl sm:text-3xl text-charcoal font-light mb-2 group-hover:text-rose transition-colors duration-300">
                  {collection.title}
                </h3>
                <p className="text-sm sm:text-base text-muted font-light mb-6 flex-1">
                  {collection.description}
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-charcoal group-hover:text-rose transition-colors duration-300">
                  <span>Explore Collection</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
