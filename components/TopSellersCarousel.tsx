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
              {products.slice(0, 9).map((product, index) => {
                const href = product.affiliateLink || '#';
                return (
                <Link
                  key={`${product.category}-${product.name}-${index}`}
                  href={href}
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
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-cream to-warm-beige mb-4 flex items-center justify-center">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="240px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="text-center text-warm-gray/40">
                        <svg
                          className="w-16 h-16 mx-auto mb-2 opacity-30"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5zm10.5-11.25h.008v.008h-.008v-.008zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z"
                          />
                        </svg>
                        <p className="text-xs">Image</p>
                      </div>
                    )}
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
                );
              })}
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
