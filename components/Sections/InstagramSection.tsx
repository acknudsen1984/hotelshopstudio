'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { instagramCards } from '@/lib/data';

export default function InstagramSection() {
  const [activeProducts, setActiveProducts] = useState<Record<string, number>>(
    Object.fromEntries(instagramCards.map((card) => [card.id, 0]))
  );

  const goToProduct = (cardId: string, direction: 'prev' | 'next') => {
    setActiveProducts((prev) => {
      const card = instagramCards.find((c) => c.id === cardId);
      if (!card) return prev;
      const current = prev[cardId];
      const total = card.products.length;
      const newIndex =
        direction === 'next'
          ? (current + 1) % total
          : (current - 1 + total) % total;
      return { ...prev, [cardId]: newIndex };
    });
  };

  return (
    <section className="py-16 bg-off-white">
      <div className="max-w-container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            Recently Loved
          </h2>
          <Link
            href="/instagram"
            className="font-sans text-sm text-taupe hover:text-charcoal transition-colors"
          >
            View All →
          </Link>
        </div>

        {/* Cards Carousel */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {instagramCards.map((card) => {
            const activeIndex = activeProducts[card.id];
            const activeProduct = card.products[activeIndex];

            return (
              <div
                key={card.id}
                className="flex-shrink-0 w-[300px] md:w-[320px] snap-start bg-cream rounded-lg overflow-hidden shadow-sm"
              >
                {/* Main Image */}
                <div className="relative h-[340px]">
                  <Image
                    src={card.image}
                    alt="Instagram post"
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                </div>

                {/* Product Thumbnails Mini-Carousel */}
                <div className="p-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => goToProduct(card.id, 'prev')}
                      className="w-6 h-6 flex items-center justify-center text-charcoal hover:text-taupe"
                      aria-label="Previous product"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    <div className="flex gap-2 flex-1 justify-center">
                      {card.products.map((product, idx) => (
                        <button
                          key={product.id}
                          onClick={() =>
                            setActiveProducts((prev) => ({
                              ...prev,
                              [card.id]: idx,
                            }))
                          }
                          className={`relative w-[80px] h-[80px] rounded overflow-hidden border-2 transition-all ${
                            idx === activeIndex
                              ? 'border-taupe'
                              : 'border-transparent opacity-60 hover:opacity-100'
                          }`}
                        >
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => goToProduct(card.id, 'next')}
                      className="w-6 h-6 flex items-center justify-center text-charcoal hover:text-taupe"
                      aria-label="Next product"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  {/* Product List */}
                  <ul className="mt-4 space-y-1">
                    {card.products.map((product, idx) => (
                      <li
                        key={product.id}
                        className={`font-sans text-sm transition-colors ${
                          idx === activeIndex ? 'text-charcoal' : 'text-muted'
                        }`}
                      >
                        • {product.name}
                      </li>
                    ))}
                  </ul>

                  {/* Shop Button */}
                  <a
                    href={activeProduct.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block w-full py-2.5 bg-taupe text-white text-center font-sans text-sm rounded hover:bg-taupe-dark transition-colors"
                  >
                    Shop This Look
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
