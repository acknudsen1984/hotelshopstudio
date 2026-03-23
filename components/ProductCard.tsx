"use client";

import Image from "next/image";
import { useState } from "react";
import { getProductUrl, type Product } from "@/lib/products";

type ProductCardProps = {
  readonly product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const [imgError, setImgError] = useState(false);
  
  // Self-hosted product images in /public/products/
  const imageUrl = `/products/${product.asin}.jpg`;

  return (
    <div className="group flex flex-col">
      <div className="aspect-square bg-warm-gray overflow-hidden relative">
        {!imgError ? (
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-muted/40 text-xs tracking-widest uppercase font-sans select-none">
              {product.category.replace("-", " ")}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col pt-4 pb-6">
        <p className="text-xs text-muted tracking-widest uppercase font-sans mb-1.5">
          {product.category.replace("-", " ")}
        </p>
        <h3 className="font-display text-xl text-charcoal leading-snug font-light">
          {product.name}
        </h3>
        <p className="mt-1.5 text-brass font-sans text-sm font-medium">{product.price}</p>
        <a
          href={getProductUrl(product.asin)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-xs font-sans font-medium tracking-widest uppercase text-charcoal hover:text-brass transition-colors duration-200"
        >
          <span>Shop on Amazon</span>
          <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
        </a>
      </div>
    </div>
  );
}
