'use client';

import Link from 'next/link';
import { Product, AFFILIATE_TAG } from '@/lib/products';

interface LifestyleScene {
  id: string;
  title: string;
  description: string;
  category: string;
  products: Product[];
}

interface ShopTheLookProps {
  scenes: LifestyleScene[];
}

export default function ShopTheLook({ scenes }: ShopTheLookProps) {
  return (
    <section className="bg-cream py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs text-rose tracking-widest uppercase font-sans font-light mb-3">
            Inspiration Gallery
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal font-light">
            Shop the Look
          </h2>
          <p className="text-sm text-muted mt-4 max-w-2xl mx-auto font-light">
            Curated product combinations from our favorite hotel-inspired spaces
          </p>
        </div>

        {/* Lifestyle scenes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {scenes.map((scene) => (
            <div key={scene.id} className="group">
              {/* Scene preview image placeholder */}
              <div className="aspect-square bg-gradient-to-br from-warm-beige to-cream rounded-lg overflow-hidden mb-6 flex items-center justify-center border border-warm-beige/50 group-hover:border-rose/30 transition-colors duration-300">
                <div className="text-center text-warm-gray/40">
                  <svg
                    className="w-24 h-24 mx-auto mb-3 opacity-20 group-hover:opacity-30 transition-opacity"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={0.5}
                      d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5zm10.5-11.25h.008v.008h-.008v-.008zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z"
                    />
                  </svg>
                  <p className="text-xs opacity-30">{scene.title}</p>
                </div>
              </div>

              {/* Scene info and products */}
              <div>
                <h3 className="font-display text-xl sm:text-2xl text-charcoal font-light mb-2">
                  {scene.title}
                </h3>
                <p className="text-sm text-muted font-light mb-6">
                  {scene.description}
                </p>

                {/* Product links */}
                <div className="space-y-3 mb-6">
                  {scene.products.map((product, idx) => {
                    const amazonUrl = `https://www.amazon.com/s?k=${encodeURIComponent(product.name)}&tag=${AFFILIATE_TAG}`;
                    return (
                      <Link
                        key={`${scene.id}-${product.name}-${idx}`}
                        href={amazonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 group/link"
                      >
                        <div className="w-12 h-12 bg-warm-beige/30 rounded flex items-center justify-center flex-shrink-0 group-hover/link:bg-rose/10 transition-colors">
                          <span className="text-xs text-warm-gray font-display font-light">
                            {idx + 1}
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-charcoal font-light group-hover/link:text-rose transition-colors">
                            {product.name}
                          </p>
                          <p className="text-xs text-muted">{product.price}</p>
                        </div>
                        <svg
                          className="w-4 h-4 text-muted opacity-0 group-hover/link:opacity-100 transition-opacity"
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
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
