"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { INSTAGRAM_CARDS } from "@/lib/instagram-data";
import { AFFILIATE_TAG } from "@/lib/products";
import type { InstagramCard, InstagramProduct } from "@/lib/types";

function ProductSubCarousel({
  products,
  cardId,
}: {
  readonly products: readonly InstagramProduct[];
  readonly cardId: string;
}) {
  const [activeProduct, setActiveProduct] = useState(0);

  const goNext = () => {
    setActiveProduct((prev) => (prev + 1) % products.length);
  };

  const goPrev = () => {
    setActiveProduct(
      (prev) => ((prev - 1) + products.length) % products.length
    );
  };

  const product = products[activeProduct];

  return (
    <div className="space-y-4">
      {/* Active product display */}
      <div className="relative bg-[#EFECE8] overflow-hidden aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />

        {/* Product sub-carousel arrows */}
        {products.length > 1 && (
          <>
            <button
              onClick={goPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center bg-white/80 hover:bg-white transition-colors"
              aria-label="Previous product"
            >
              <svg className="w-3 h-3 text-[#3C3C3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center bg-white/80 hover:bg-white transition-colors"
              aria-label="Next product"
            >
              <svg className="w-3 h-3 text-[#3C3C3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Product info + link */}
      <Link
        href={`https://amazon.com/dp/${product.asin}?tag=${AFFILIATE_TAG}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group/product block"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-sans font-light text-[#3C3C3C] group-hover/product:text-[#A0978E] transition-colors">
              {product.name}
            </p>
            <p className="text-xs text-[#A0978E] font-sans font-light mt-0.5">
              {product.price}
            </p>
          </div>
          <svg
            className="w-4 h-4 text-[#A0978E] opacity-0 group-hover/product:opacity-100 transition-opacity"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </div>
      </Link>

      {/* Product dots */}
      <div className="flex items-center gap-1.5">
        {products.map((_, i) => (
          <button
            key={`${cardId}-dot-${i}`}
            onClick={() => setActiveProduct(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === activeProduct
                ? "bg-[#3C3C3C] w-4"
                : "bg-[#A0978E]/40"
            }`}
            aria-label={`View product ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function InstagramCardComponent({
  card,
  reversed = false,
}: {
  readonly card: InstagramCard;
  readonly reversed?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {/* Left: Video thumbnail / main image */}
      <div
        className={`relative aspect-[3/4] overflow-hidden bg-[#EFECE8] ${
          reversed ? "md:order-2" : ""
        }`}
      >
        <Image
          src={card.videoThumbnail}
          alt={card.title}
          fill
          className="object-cover hover:scale-[1.02] transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Play button overlay to indicate video content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 cursor-pointer">
            <svg className="w-5 h-5 text-[#3C3C3C] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Instagram handle badge */}
        <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1.5">
          <span className="text-[10px] tracking-widest uppercase font-sans text-[#3C3C3C]">
            @hotelshopstudio
          </span>
        </div>
      </div>

      {/* Right: Product info + sub-carousel */}
      <div
        className={`flex flex-col justify-center ${
          reversed ? "md:order-1" : ""
        }`}
      >
        {/* Card header */}
        <div className="mb-6">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#A0978E] font-sans mb-2">
            From Instagram
          </p>
          <h3 className="font-display text-2xl sm:text-3xl text-[#3C3C3C] font-light mb-2">
            {card.title}
          </h3>
          <p className="text-sm text-[#A0978E] font-sans font-light">
            {card.subtitle}
          </p>
        </div>

        {/* Product sub-carousel */}
        <ProductSubCarousel
          products={card.products}
          cardId={card.id}
        />

        {/* Shop all link */}
        <Link
          href={`/shop/${card.category}`}
          className="inline-flex items-center gap-2 mt-6 text-[11px] tracking-[0.15em] uppercase text-[#3C3C3C] font-sans font-normal border-b border-[#E5DDD5] pb-1 hover:border-[#3C3C3C] transition-colors duration-300 self-start"
        >
          Shop all {card.category.replace("-", " ")}
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default function InstagramSection() {
  return (
    <section className="bg-[#F5F3F0] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section header */}
        <div className="text-center mb-14 sm:mb-20">
          <p className="text-[11px] tracking-[0.2em] uppercase text-[#A0978E] font-sans mb-3">
            As Seen On
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] text-[#3C3C3C] font-light">
            Instagram
          </h2>
          <p className="text-sm text-[#A0978E] font-sans font-light mt-3 max-w-lg mx-auto">
            Real spaces, real products. Shop directly from our favorite posts.
          </p>
        </div>

        {/* Instagram cards */}
        <div className="space-y-16 sm:space-y-24 lg:space-y-28">
          {INSTAGRAM_CARDS.map((card, i) => (
            <InstagramCardComponent
              key={card.id}
              card={card}
              reversed={i % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
