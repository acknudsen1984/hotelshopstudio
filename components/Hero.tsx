"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "./Carousel";
import { HERO_SLIDES } from "@/lib/hero-data";

export default function Hero() {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0, 1, 2]));

  const handleSlideChange = useCallback((index: number) => {
    // Pre-load adjacent slides
    setLoadedImages((prev) => {
      const next = new Set(prev);
      next.add(index);
      next.add((index + 1) % HERO_SLIDES.length);
      if (index > 0) next.add(index - 1);
      return next;
    });
  }, []);

  return (
    <section className="relative w-full bg-[#F5F3F0]">
      <Carousel
        showArrows
        showDots
        autoPlay
        autoPlayInterval={6000}
        loop
        onSlideChange={handleSlideChange}
        className="group"
      >
        {HERO_SLIDES.map((slide, i) => (
          <div key={slide.id} className="relative w-full">
            {/* Image container — large proportions */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/8] lg:aspect-[16/7] overflow-hidden">
              {(loadedImages.has(i) || i <= 1) && (
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={i === 0}
                  quality={85}
                />
              )}

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              {/* Slide content overlay */}
              <div className="absolute inset-0 flex items-end">
                <div className="w-full max-w-[1200px] mx-auto px-6 pb-12 sm:pb-16 lg:pb-20">
                  <div className="max-w-xl">
                    {/* Slide number */}
                    <span className="inline-block font-display text-5xl sm:text-6xl lg:text-7xl text-white/30 font-light mb-2 leading-none">
                      {slide.number}
                    </span>

                    {/* Title */}
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-light leading-[1.1] mb-3">
                      {slide.title}
                    </h2>

                    {/* Subtitle */}
                    <p className="text-sm sm:text-base text-white/70 font-sans font-light mb-6 max-w-md">
                      {slide.subtitle}
                    </p>

                    {/* CTA */}
                    <Link
                      href={`/shop/${slide.category}`}
                      className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-white font-sans font-normal border-b border-white/40 pb-1 hover:border-white transition-colors duration-300"
                    >
                      Shop {slide.category.replace("-", " ")}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
