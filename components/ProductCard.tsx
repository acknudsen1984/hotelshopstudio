"use client";

import Image from "next/image";
import { useState } from "react";
import { getProductUrl, getProductImage, type Product } from "@/lib/products";

type ProductCardProps = {
  readonly product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const [imgError, setImgError] = useState(false);

  const imageUrl = product.image || getProductImage(product);

  return (
    <div className="group flex flex-col h-full">
      {/* Card container with generous spacing */}
      <div className="flex flex-col flex-1 rounded-sm overflow-hidden">
        {/* Product image with subtle border */}
        <div className="aspect-square bg-off-white overflow-hidden relative border border-warm-beige/60 transition-all duration-300 group-hover:border-taupe/40 group-hover:shadow-md">
          {!imgError ? (
            <Image
              src={imageUrl}
              alt={product.name}
              fill
              className="object-contain p-5 group-hover:scale-103 transition-transform duration-500"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-warm-beige/30 to-cream/30">
              <span className="text-muted-light/60 text-xs tracking-widest uppercase font-sans select-none text-center px-4">
                {product.category.replace("-", " ")}
              </span>
            </div>
          )}
        </div>

        {/* Product info with generous padding */}
        <div className="flex flex-1 flex-col pt-5 pb-4 px-1">
          {/* Category label */}
          <p className="text-xs text-muted tracking-widest uppercase font-sans mb-2.5 font-light">
            {product.category.replace("-", " ")}
          </p>
          
          {/* Product name */}
          <h3 className="font-display text-xl sm:text-2xl leading-relaxed text-charcoal font-bold mb-2">
            {product.name}
          </h3>
          
          {/* Price */}
          <p className="text-rose font-sans text-sm font-medium mb-3">
            {product.price}
          </p>
          
          {/* CTA Button */}
          <a
            href={getProductUrl(product.asin)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center gap-1.5 text-xs font-sans font-medium tracking-widest uppercase text-charcoal hover:text-rose transition-colors duration-200"
          >
            <span>View</span>
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
