'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Product, AFFILIATE_TAG, getProductImage } from '@/lib/products';

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
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const handleImageError = (sceneId: string) => {
    setImageErrors(prev => new Set(prev).add(sceneId));
  };

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
          <p className="text-sm text-warm-gray mt-4 max-w-2xl mx-auto font-light">
            Curated product combinations from our favorite hotel-inspired spaces
          </p>
        </div>

        {/* Lifestyle scenes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {scenes.map((scene) => {
            const imgUrl = getProductImage(scene.products[0]);
            const hasError = imageErrors.has(scene.id);

            return (
              <div key={scene.id} className="group">
                {/* Scene preview image */}
                <div className="aspect-square rounded-lg overflow-hidden mb-6 border border-warm-beige/50 group-hover:border-rose/30 transition-all duration-300 group-hover:scale-105 bg-off-white relative">
                  {!hasError ? (
                    <Image
                      src={imgUrl}
                      alt={scene.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      onError={() => handleImageError(scene.id)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-warm-beige/20 to-cream/20">
                      <span className="text-muted-light/50 text-sm text-center px-4 uppercase font-light">
                        {scene.title}
                      </span>
                    </div>
                  )}
                </div>

                {/* Scene info and products */}
                <div>
                  <h3 className="font-display text-xl sm:text-2xl text-charcoal font-light mb-2">
                    {scene.title}
                  </h3>
                  <p className="text-sm text-warm-gray font-light mb-6">
                    {scene.description}
                  </p>

                  {/* Product links */}
                  <div className="space-y-3 mb-6">
                    {scene.products.map((product) => {
                      const amazonUrl = `https://www.amazon.com/dp/${product.asin}?tag=${AFFILIATE_TAG}`;
                      return (
                        <Link
                          key={`${scene.id}-${product.asin}`}
                          href={amazonUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 rounded-lg bg-warm-beige/30 hover:bg-rose/10 transition-colors duration-200 group/link"
                        >
                          <div>
                            <p className="text-sm font-light text-charcoal group-hover/link:text-rose transition-colors">
                              {product.name}
                            </p>
                            <p className="text-xs text-warm-gray font-light">
                              {product.price}
                            </p>
                          </div>
                          <svg
                            className="w-5 h-5 text-rose opacity-0 group-hover/link:opacity-100 transition-opacity"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                            />
                          </svg>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
