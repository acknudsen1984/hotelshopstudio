"use client";

import {
  useState,
  useEffect,
  useCallback,
  useRef,
  type ReactNode,
  type KeyboardEvent,
} from "react";

type CarouselProps = {
  readonly children: readonly ReactNode[];
  readonly showArrows?: boolean;
  readonly showDots?: boolean;
  readonly autoPlay?: boolean;
  readonly autoPlayInterval?: number;
  readonly loop?: boolean;
  readonly className?: string;
  readonly arrowClassName?: string;
  readonly onSlideChange?: (index: number) => void;
};

export default function Carousel({
  children,
  showArrows = true,
  showDots = true,
  autoPlay = false,
  autoPlayInterval = 5000,
  loop = true,
  className = "",
  arrowClassName = "",
  onSlideChange,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const totalSlides = children.length;

  // Keep goNext in a ref so auto-play always calls the latest version
  const goNextRef = useRef<() => void>(() => {});

  const goToSlide = useCallback(
    (index: number) => {
      let nextIndex = index;
      if (loop) {
        nextIndex = ((index % totalSlides) + totalSlides) % totalSlides;
      } else {
        nextIndex = Math.max(0, Math.min(index, totalSlides - 1));
      }

      setCurrentIndex(nextIndex);
      onSlideChange?.(nextIndex);
    },
    [loop, totalSlides, onSlideChange]
  );

  const goNext = useCallback(() => {
    if (!loop && currentIndex >= totalSlides - 1) return;
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide, loop, totalSlides]);

  const goPrev = useCallback(() => {
    if (!loop && currentIndex <= 0) return;
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide, loop]);

  // Keep ref in sync
  useEffect(() => {
    goNextRef.current = goNext;
  }, [goNext]);

  // Auto-play with stable interval
  useEffect(() => {
    if (!autoPlay) return;

    const intervalId = setInterval(() => {
      if (!isPausedRef.current) {
        goNextRef.current();
      }
    }, autoPlayInterval);

    return () => clearInterval(intervalId);
  }, [autoPlay, autoPlayInterval]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    },
    [goNext, goPrev]
  );

  const canGoPrev = loop || currentIndex > 0;
  const canGoNext = loop || currentIndex < totalSlides - 1;

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      onMouseEnter={() => { isPausedRef.current = true; }}
      onMouseLeave={() => { isPausedRef.current = false; }}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Carousel"
      aria-roledescription="carousel"
    >
      {/* Slides */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {children.map((child, i) => (
            <div
              key={i}
              className="w-full flex-shrink-0"
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${i + 1} of ${totalSlides}`}
              aria-hidden={i !== currentIndex}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      {showArrows && totalSlides > 1 && (
        <>
          {canGoPrev && (
            <button
              onClick={goPrev}
              className={`absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/90 hover:bg-white transition-all duration-300 ${arrowClassName}`}
              aria-label="Previous slide"
            >
              <svg
                className="w-5 h-5 text-[#3C3C3C]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}
          {canGoNext && (
            <button
              onClick={goNext}
              className={`absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/90 hover:bg-white transition-all duration-300 ${arrowClassName}`}
              aria-label="Next slide"
            >
              <svg
                className="w-5 h-5 text-[#3C3C3C]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}
        </>
      )}

      {/* Dots */}
      {showDots && totalSlides > 1 && (
        <div
          className="flex items-center justify-center gap-2 mt-6"
          role="tablist"
          aria-label="Carousel navigation"
        >
          {children.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`carousel-dot ${i === currentIndex ? "active" : ""}`}
              role="tab"
              aria-selected={i === currentIndex}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
