"use client";

import EmailSignup from "./EmailSignup";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[400px] sm:min-h-[450px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-off-white to-warm-beige">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-rose/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-taupe/5 blur-3xl" />
      </div>

      {/* Content container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-8 py-16 sm:py-20 lg:py-24 text-center">
        {/* Eyebrow text */}
        <p className="text-xs text-rose tracking-widest uppercase font-sans font-light mb-3 sm:mb-4">
          Luxury Home Essentials
        </p>

        {/* Main headline */}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight sm:leading-[1.1] lg:leading-[1.08] text-charcoal font-light mb-4 sm:mb-6 max-w-3xl mx-auto">
          The boutique hotel experience,{" "}
          <span className="italic text-rose">curated for your home</span>
        </h1>

        {/* Subheadline */}
        <p className="text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 font-light">
          Every item chosen for quality, function, and longevity. Hotel-quality pieces that transform everyday spaces into sanctuaries.
        </p>

        {/* Email signup */}
        <div className="flex justify-center">
          <div className="w-full sm:max-w-md">
            <p className="text-xs text-muted tracking-widest uppercase font-sans mb-3 font-light">
              New curated finds weekly
            </p>
            <EmailSignup compact />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden sm:flex justify-center mt-8 sm:mt-12 animate-bounce opacity-40">
          <svg className="w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
