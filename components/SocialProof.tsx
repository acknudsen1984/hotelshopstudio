interface Testimonial {
  text: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Finally found a source for hotel-quality pieces at accessible prices. Every item feels intentional.",
    author: "Sarah M.",
    role: "Interior Designer",
  },
  {
    text: "The curation is impeccable. I trust that anything I buy from Hotel Shop will look beautiful and last.",
    author: "James T.",
    role: "Home Decor Enthusiast",
  },
  {
    text: "No affiliate overstuff, no trend-chasing. Just genuinely good products. That's rare.",
    author: "Emma R.",
    role: "Design Strategist",
  },
  {
    text: "My bathroom went from ordinary to spa-like. The quality speaks for itself.",
    author: "Michael C.",
    role: "Homeowner",
  },
];

export default function SocialProof() {
  return (
    <section className="bg-off-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs text-rose tracking-widest uppercase font-sans font-light mb-3">
            Words from Our Community
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal font-light">
            Loved by Thoughtful Designers
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-cream rounded-lg p-8 sm:p-10 border border-warm-beige/40 hover:border-rose/20 transition-colors duration-300"
            >
              {/* Star rating */}
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-rose">
                    ★
                  </span>
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-sm sm:text-base text-charcoal font-light mb-6 leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div>
                <p className="font-display text-sm text-charcoal font-light">
                  {testimonial.author}
                </p>
                <p className="text-xs text-muted font-sans">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 pt-12 border-t border-warm-beige/40">
          <div className="text-center mb-8">
            <p className="text-xs text-muted tracking-widest uppercase font-sans font-light mb-6">
              Why Hotel Shop
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
            <div>
              <div className="text-3xl mb-3">🔗</div>
              <p className="text-xs font-sans font-light text-charcoal">Direct Amazon Links—No Markup</p>
              <p className="text-xs text-muted mt-2">Simple affiliate links, zero hidden fees</p>
            </div>
            <div>
              <div className="text-3xl mb-3">✓</div>
              <p className="text-xs font-sans font-light text-charcoal">Vetted Quality</p>
              <p className="text-xs text-muted mt-2">Every item hand-selected and tested</p>
            </div>
            <div>
              <div className="text-3xl mb-3">🎯</div>
              <p className="text-xs font-sans font-light text-charcoal">Thoughtful Curation</p>
              <p className="text-xs text-muted mt-2">Function, durability, and design together</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
