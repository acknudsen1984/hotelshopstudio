'use client';

import { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/lib/products';

interface ProductGridFullProps {
  products: Product[];
}

export default function ProductGridFull({ products }: ProductGridFullProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(products.map(p => p.category))];
    return cats.sort();
  }, [products]);

  // Filter products
  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return products;
    return products.filter(p => p.category === selectedCategory);
  }, [products, selectedCategory]);

  return (
    <section className="bg-cream py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5">
        {/* Section header */}
        <div className="mb-12 sm:mb-16 text-center">
          <p className="text-xs text-rose tracking-widest uppercase font-sans font-light mb-3">
            Complete Collection
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal font-light">
            All Curated Pieces
          </h2>
          <p className="text-sm text-muted mt-4 font-light">
            {filteredProducts.length} items
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 text-xs font-sans tracking-widest uppercase transition-all duration-300 border rounded ${
              selectedCategory === null
                ? 'bg-charcoal text-cream border-charcoal'
                : 'bg-transparent text-charcoal border-warm-beige hover:border-charcoal'
            }`}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-sans tracking-widest uppercase transition-all duration-300 border rounded capitalize ${
                selectedCategory === cat
                  ? 'bg-charcoal text-cream border-charcoal'
                  : 'bg-transparent text-charcoal border-warm-beige hover:border-charcoal'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 gap-6 sm:gap-8 sm:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product, i) => (
            <ProductCard
              key={`product-${product.category}-${product.name}-${i}`}
              product={product}
            />
          ))}
        </div>

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted font-light">No products in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
