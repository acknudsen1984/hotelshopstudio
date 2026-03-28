'use client';

import { useState, useRef, useCallback, ReactNode } from 'react';

type CarouselProps = {
  readonly children: ReactNode;
  readonly showArrows?: boolean;
  readonly showDots?: boolean;
  readonly itemCount: number;
  readonly className?: string;
  readonly gap?: number;
};

export default function Carousel({
  children,
  showArrows = true,
  showDots = false,
  itemCount,
  className = '',
  gap = 16,
}: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollAmount = container.clientWidth * 0.8;
    const newScrollLeft = direction === 'left'
      ? container.scrollLeft - scrollAmount
      : container.scrollLeft + scrollAmount;

    container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
  }, []);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollPercentage = container.scrollLeft / (container.scrollWidth - container.clientWidth);
    const newIndex = Math.round(scrollPercentage * (itemCount - 1));
    setCurrentIndex(Math.max(0, Math.min(newIndex, itemCount - 1)));
  }, [itemCount]);

  const scrollToIndex = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollWidth = container.scrollWidth - container.clientWidth;
    const targetScroll = (index / (itemCount - 1)) * scrollWidth;
    container.scrollTo({ left: targetScroll, behavior: 'smooth' });
  }, [itemCount]);

  return (
    <div className={`relative ${className}`}>
      {/* Scrollable container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto scrollbar-hide scroll-smooth"
        style={{ gap: `${gap}px` }}
      >
        {children}
      </div>

      {/* Navigation arrows */}
      {showArrows && (
        <>
          <button
            onClick={() => scroll('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-md flex items-center justify-center transition-all z-10"
            aria-label="Previous"
          >
            <svg className="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-md flex items-center justify-center transition-all z-10"
            aria-label="Next"
          >
            <svg className="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dot navigation */}
      {showDots && itemCount > 0 && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: itemCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentIndex ? 'bg-taupe w-4' : 'bg-taupe/30'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
