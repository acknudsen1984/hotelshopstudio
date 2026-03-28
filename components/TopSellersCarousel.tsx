'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/products';

interface TopSellersCarouselProps {
  products: Product[];
}

export default function TopSellersCarousel({ products }: TopSellersCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScroll, 500);
    }
  };

  React.useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, []);

  return (
    <section className="bg-cream border-b border-warm-beige/30">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:py-24">
        {/* Section header */}
        <div className="mb-10 sm:mb-12 text-center">
          <p className="text-xs text-rose tracking-widest uppercase font-sans font-light mb-3">
            This Week&apos;s Favorites
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal font-light">
            Top Sellers
          </h2>
        </div>

        {/* Carousel container with scroll controls */}
        <div className="relative">
          {/* Scroll left button */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white transition-colors rounded-full p-3 shadow-md"
              aria-label="Scroll left"
            >
              <svg
                className="w-5 h-5 text-charcoal"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {/* Carousel scroll container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollBehavior: 'smooth' }}
          >
            <div className="flex gap-6 pb-4 px-2">
              {products.slice(0, 9).map((product, index) => (
                <Link
                  key={`${product.category}-${product.name}-${index}`}
                  href={product.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 group"
                  style={{ width: '240px' }}
                >
                  {/* Item number badge */}
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full shadow-sm">
                    <span className="text-sm font-display text-rose font-light">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Product image */}
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-warm-beige/20 mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="240px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Product info */}
                  <div className="space-y-2">
                    <h3 className="font-display text-sm text-charcoal font-light line-clamp-2 group-hover:text-rose transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-warm-gray font-sans">
                      ${product.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Scroll right button */}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white transition-colors rounded-full p-3 shadow-md"
              aria-label="Scroll right"
            >
              <svg
                className="w-5 h-5 text-charcoal"
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
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
