export default function BrandStory() {
  return (
    <section className="bg-off-white border-y border-warm-beige/30 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-5">
        {/* Eyebrow */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-xs text-rose tracking-widest uppercase font-sans font-light">
            Our Story
          </p>
        </div>

        {/* Main quote */}
        <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-charcoal font-light leading-relaxed mb-8 text-center">
          &ldquo;We believe that luxury doesn&rsquo;t require excess. It lives in the quality of materials, 
          the thoughtfulness of design, and the longevity of everyday pieces.&rdquo;
        </p>

        {/* Body text */}
        <div className="space-y-6 text-sm sm:text-base text-muted font-light leading-relaxed max-w-3xl mx-auto">
          <p>
            Hotel Shop exists to bridge the gap between inspiration and accessibility. We&rsquo;ve stayed in 
            beautiful hotels around the world and wondered: why can&rsquo;t our homes feel this intentional? 
            Why should luxury comfort be reserved for a few nights a year?
          </p>

          <p>
            Every item in our collection is chosen through a single lens: Would we use this at home? 
            Does it justify its place in a well-edited life? We focus on pieces that are both 
            <em className="italic"> functional</em> and <em className="italic">considered</em>—objects you genuinely want to live with.
          </p>

          <p>
            From spa-quality towels to kitchen essentials that feel good to touch, from storage that 
            doubles as decor to lighting that transforms a room—we curate products that elevate ordinary moments 
            into small rituals. Because the home is where life happens. It deserves to be beautiful.
          </p>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-12 border-t border-warm-beige/40 text-center">
          <p className="text-xs text-muted/70 tracking-widest uppercase font-sans font-light mb-4">
            How We Shop
          </p>
          <div className="grid grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-2xl mb-2">✓</div>
              <p className="text-xs text-muted font-light">Quality first—always</p>
            </div>
            <div>
              <div className="text-2xl mb-2">✓</div>
              <p className="text-xs text-muted font-light">Longevity over trends</p>
            </div>
            <div>
              <div className="text-2xl mb-2">✓</div>
              <p className="text-xs text-muted font-light">Function with beauty</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
