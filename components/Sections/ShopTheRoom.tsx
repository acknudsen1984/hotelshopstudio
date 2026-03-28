'use client';

import { useState } from 'react';
import Image from 'next/image';
import { shopRooms } from '@/lib/data';

export default function ShopTheRoom() {
  const [activeRoom, setActiveRoom] = useState(0);
  const room = shopRooms[activeRoom];

  return (
    <section className="py-16 bg-cream">
      <div className="max-w-container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Room Image (55%) */}
          <div className="lg:w-[55%]">
            <div className="relative aspect-[4/3] lg:h-[650px] rounded-lg overflow-hidden">
              <Image
                src={room.heroImage}
                alt={room.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
              {/* Room Number Overlay */}
              <span className="absolute top-6 left-6 font-serif text-7xl text-white/30 font-light">
                {room.number}
              </span>
            </div>
          </div>

          {/* Right: Products (45%) */}
          <div className="lg:w-[45%]">
            <div className="sticky top-24">
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-2">
                Shop The Room
              </h2>
              <p className="font-serif text-xl text-taupe mb-6 italic">
                {room.name}
              </p>

              {/* Product Grid */}
              <div className="grid grid-cols-2 gap-3 max-h-[480px] overflow-y-auto pr-2">
                {room.products.map((product) => (
                  <a
                    key={product.id}
                    href={product.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-2 rounded-lg bg-off-white hover:bg-warm-beige transition-colors"
                  >
                    <div className="relative w-[80px] h-[80px] flex-shrink-0 rounded overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <span className="font-sans text-sm text-charcoal group-hover:text-taupe-dark transition-colors">
                      {product.name}
                    </span>
                  </a>
                ))}
              </div>

              {/* Scroll Hint */}
              <p className="text-xs text-muted mt-3 font-sans italic">
                scroll to explore ↓
              </p>

              {/* Shop All Button */}
              <a
                href={`https://www.amazon.com/s?k=${encodeURIComponent(room.name + ' decor')}&tag=hotelshop-20`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2.5 bg-taupe text-white font-sans text-sm rounded hover:bg-taupe-dark transition-colors"
              >
                Shop All
              </a>
            </div>
          </div>
        </div>

        {/* Room Navigation Dots */}
        <div className="flex justify-center gap-4 mt-8">
          {shopRooms.map((r, index) => (
            <button
              key={r.id}
              onClick={() => setActiveRoom(index)}
              className={`px-4 py-2 font-sans text-sm rounded-full transition-colors ${
                index === activeRoom
                  ? 'bg-taupe text-white'
                  : 'bg-warm-beige text-charcoal hover:bg-taupe-light'
              }`}
            >
              {r.number}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
