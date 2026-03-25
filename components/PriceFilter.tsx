"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/products";

type PriceRange = "all" | "under25" | "25to50" | "50to100" | "over100";

const PRICE_OPTIONS: { label: string; value: PriceRange }[] = [
  { label: "All", value: "all" },
  { label: "Under $25", value: "under25" },
  { label: "$25 – $50", value: "25to50" },
  { label: "$50 – $100", value: "50to100" },
  { label: "Over $100", value: "over100" },
];

function parsePrice(price: string): number {
  return parseFloat(price.replace(/[^0-9.]/g, "")) || 0;
}

function matchesRange(price: string, range: PriceRange): boolean {
  const n = parsePrice(price);
  if (range === "all") return true;
  if (range === "under25") return n < 25;
  if (range === "25to50") return n >= 25 && n <= 50;
  if (range === "50to100") return n > 50 && n <= 100;
  if (range === "over100") return n > 100;
  return true;
}

export default function PriceFilter({ products }: { products: readonly Product[] }) {
  const [range, setRange] = useState<PriceRange>("all");

  const filtered = products.filter((p) => matchesRange(p.price, range));

  return (
    <>
      {/* Price filter bar */}
      <div className="flex flex-wrap gap-2 mb-12">
        {PRICE_OPTIONS.map((opt) => (
          <button
            key={opt.value}
            onClick={() => setRange(opt.value)}
            className={`px-4 py-1.5 text-xs font-sans tracking-widest uppercase border transition-colors duration-200 ${
              range === opt.value
                ? "border-charcoal bg-charcoal text-off-white"
                : "border-warm-gray/40 text-muted hover:border-charcoal hover:text-charcoal"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Product grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-16">
          {filtered.map((product, i) => (
            <ProductCard key={`${product.name}-${i}`} product={product} />
          ))}
        </div>
      ) : (
        <div className="py-16">
          <p className="text-muted text-sm font-sans">No products in this price range.</p>
          <button
            onClick={() => setRange("all")}
            className="mt-4 inline-block text-xs font-sans font-medium tracking-widest uppercase text-brass hover:text-charcoal transition-colors"
          >
            Show all →
          </button>
        </div>
      )}
    </>
  );
}
