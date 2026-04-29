import { ProductCard } from '@/components/Common';
import type { CategoryProduct } from '@/lib/types';

type CategoryPageProps = {
  readonly title: string;
  readonly description?: string;
  readonly products: readonly CategoryProduct[];
};

export default function CategoryPage({
  title,
  description,
  products,
}: CategoryPageProps) {
  return (
    <main className="bg-cream min-h-screen">
      <section className="bg-warm-beige/40 py-16 md:py-24">
        <div className="max-w-container mx-auto px-4 text-center">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-taupe mb-4">
            Shop the Collection
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl mx-auto font-sans text-sm md:text-base text-muted leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                amazonUrl={product.amazonUrl}
                variant="curated"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
