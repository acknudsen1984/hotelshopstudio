'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
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
    href: '/hotel-bathroom',
    category: 'bathroom',
  },
  {
    id: 'kitchen',
    title: 'Hotel Kitchen',
    description: 'Functional pieces that elevate everyday cooking and dining. Quality materials built to last.',
    icon: '🍽️',
    href: '/hotel-kitchen',
    category: 'kitchen',
  },
  {
    id: 'bedroom',
    title: 'Hotel Bedroom',
    description: 'Serene sanctuaries with high-quality bedding, lighting, and storage for rest and renewal.',
    icon: '🛏️',
    href: '/hotel-bedroom',
    category: 'bedroom',
  },
  {
    id: 'essentials',
    title: 'Home Essentials',
    description: 'Thoughtful accents and organizational pieces that bring luxury touches to every room.',
    icon: '✨',
    href: '/home-essentials',
    category: 'home-essentials',
  },
];

export default function CollectionsGrid() {
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const handleImageError = (collectionId: string) => {
    setImageErrors(prev => new Set(prev).add(collectionId));
  };

  return (
    <section className="bg-cream py-10 sm:py-16">
      <div className="mx-auto max-w-6xl px-5">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-xs text-rose tracking-widest uppercase font-sans font-light mb-3">
            Shop by Category
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal font-light">
            Curated Collections
          </h2>
        </div>

        {/* Collections grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {collections.map((collection) => {
            const productForImage = products.find(p => p.category === collection.category) || products[0];
            const imgUrl = getProductImage(productForImage);
            const hasError = imageErrors.has(collection.id);

            return (
              <Link
                key={collection.id}
                href={collection.href}
                className="group flex flex-col h-full"
              >
                {/* Card image — compact */}
                <div className="aspect-[4/3] rounded-lg mb-3 border border-warm-beige/60 group-hover:border-rose/40 transition-all duration-300 overflow-hidden group-hover:scale-[1.02] bg-off-white relative">
                  {!hasError ? (
                    <Image
                      src={imgUrl}
                      alt={collection.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                      onError={() => handleImageError(collection.id)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-warm-beige/20 to-cream/20">
                      <span className="text-muted-light/50 text-sm text-center px-4 uppercase font-light">
                        {collection.title}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="font-display text-base sm:text-lg text-charcoal font-light mb-1 group-hover:text-rose transition-colors duration-300">
                    {collection.title}
                  </h3>
                  <p className="text-xs text-muted font-light line-clamp-2 flex-1">
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
