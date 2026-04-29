import Link from "next/link";
import { CATEGORIES } from "@/lib/products";

type CategoryNavProps = {
  readonly selected?: string;
};

export default function CategoryNav({ selected }: CategoryNavProps) {
  return (
    <section className="bg-off-white border-y border-warm-beige/60 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-5">
        {/* Section label */}
        <p className="text-xs text-rose tracking-widest uppercase font-sans font-light mb-8 text-center">
          Shop by Room
        </p>

        {/* Category grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((category) => {
            const isSelected = selected === category.slug;
            return (
              <Link
                key={category.slug}
                href={category.slug === 'home-essentials' ? '/home-essentials' : `/hotel-${category.slug}`}

                className={`group flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-10 rounded-sm border transition-all duration-300 ${
                  isSelected
                    ? "border-rose bg-white shadow-md"
                    : "border-warm-beige/40 bg-white hover:border-taupe hover:shadow-sm"
                }`}
              >
                <h3 className={`font-display text-sm sm:text-base leading-snug font-light transition-colors duration-300 ${
                  isSelected ? "text-rose" : "text-charcoal group-hover:text-rose"
                }`}>
                  {category.label}
                </h3>
                <p className={`mt-2 text-xs tracking-widest uppercase font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isSelected ? "text-rose opacity-100" : "text-muted"
                }`}>
                  Explore →
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
