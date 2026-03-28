'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { heroSlides } from '@/lib/data';

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [goToNext]);

  // Calculate visible slides (show 5 at a time on desktop)
  const getVisibleSlides = () => {
    const slides = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + heroSlides.length) % heroSlides.length;
      slides.push({ ...heroSlides[index], offset: i });
    }
    return slides;
  };

  return (
    <section className="py-12 bg-cream">
      <div className="max-w-container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            This Week&apos;s Top Picks
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Arrow Left */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 rounded-full shadow-md flex items-center justify-center text-charcoal hover:bg-taupe hover:text-white transition-colors"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Slides Container */}
          <div className="overflow-hidden mx-12">
            <div className="flex gap-4 justify-center">
              {getVisibleSlides().map((slide, idx) => (
                <a
                  key={`${slide.id}-${idx}`}
                  href={slide.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-shrink-0 transition-all duration-300 ${
                    slide.offset === 0
                      ? 'w-[280px] opacity-100 scale-100'
                      : Math.abs(slide.offset) === 1
                      ? 'w-[240px] opacity-80 scale-95 hidden md:block'
                      : 'w-[200px] opacity-60 scale-90 hidden lg:block'
                  }`}
                >
                  <div className="relative h-[380px] rounded-lg overflow-hidden group">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 280px, 280px"
                      priority={slide.offset === 0}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Number Overlay */}
                    <span className="absolute top-4 left-4 font-serif text-6xl text-white/90 font-light">
                      {slide.number}
                    </span>

                    {/* Label */}
                    <span className="absolute bottom-16 left-4 font-sans text-xs text-white/90 italic">
                      {slide.label}
                    </span>

                    {/* Title */}
                    <h3 className="absolute bottom-4 left-4 right-4 font-serif text-lg text-white leading-tight">
                      {slide.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Arrow Right */}
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 rounded-full shadow-md flex items-center justify-center text-charcoal hover:bg-taupe hover:text-white transition-colors"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-6">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-taupe w-6'
                  : 'bg-warm-beige hover:bg-taupe-light'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Affiliate Disclaimer */}
        <p className="text-center text-xs text-muted mt-4 font-sans">
          This page contains affiliate links
        </p>
      </div>
    </section>
  );
}
