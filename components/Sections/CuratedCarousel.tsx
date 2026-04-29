'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { curatedProducts } from '@/lib/data';

export default function CuratedCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 bg-cream">
      <div className="max-w-container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            This Season&apos;s Picks
          </h2>
          <Link
            href="/shop"
            className="font-sans text-sm text-taupe hover:text-charcoal transition-colors"
          >
            Shop All →
          </Link>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Arrow Left */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 rounded-full shadow-md flex items-center justify-center text-charcoal hover:bg-taupe hover:text-white transition-colors -ml-5"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Products */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          >
            {curatedProducts.map((product) => (
              <a
                key={product.id}
                href={product.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-[200px] snap-start group"
              >
                <div className="relative aspect-square rounded-lg overflow-hidden bg-warm-beige">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="200px"
                  />
                </div>
                <div className="mt-3">
                  <h3 className="font-sans text-sm text-charcoal group-hover:text-taupe transition-colors truncate">
                    {product.name}
                  </h3>
                  <p className="font-sans text-sm text-taupe mt-0.5">
                    {product.price}
                  </p>
                  <span className="inline-block mt-2 font-sans text-xs text-taupe border-b border-taupe group-hover:text-charcoal group-hover:border-charcoal transition-colors">
                    Shop
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Arrow Right */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 rounded-full shadow-md flex items-center justify-center text-charcoal hover:bg-taupe hover:text-white transition-colors -mr-5"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
