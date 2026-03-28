import Image from 'next/image';
import Link from 'next/link';

export default function MeetTheTeam() {
  return (
    <section className="py-16 bg-cream">
      <div className="max-w-container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: Stacked Images */}
          <div className="lg:w-[45%] relative">
            <div className="relative w-full max-w-[400px] mx-auto">
              {/* Main Image */}
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop"
                  alt="Hotel Shop founders"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>

              {/* Overlapping Secondary Image */}
              <div className="absolute -bottom-6 -right-6 w-[160px] h-[200px] rounded-lg overflow-hidden shadow-lg rotate-3 border-4 border-cream hidden md:block">
                <Image
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=320&h=400&fit=crop"
                  alt="Hotel Shop detail"
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>

              {/* Third Overlapping Image */}
              <div className="absolute -top-4 -left-4 w-[120px] h-[150px] rounded-lg overflow-hidden shadow-lg -rotate-6 border-4 border-cream hidden md:block">
                <Image
                  src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=240&h=300&fit=crop"
                  alt="Hotel Shop product"
                  fill
                  className="object-cover"
                  sizes="120px"
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:w-[55%]">
            <p className="font-serif text-xl text-taupe italic mb-2">
              Hi, we&apos;re Hotel Shop
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">
              MEET THE TEAM
            </h2>

            <div className="space-y-4 font-sans text-base text-charcoal leading-relaxed mb-8">
              <p>
                We believe everyone deserves the luxury of a five-star hotel experience
                in their own home. That&apos;s why we created Hotel Shop — to curate the
                finest home essentials that bring comfort, elegance, and tranquility
                to your everyday life.
              </p>
              <p>
                Every item we feature is hand-selected for its quality, design, and
                ability to transform a space. From plush Turkish towels to artisanal
                ceramics, we source products that hotels trust to delight their guests —
                now available for your home.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="px-6 py-2.5 bg-taupe text-white font-sans text-sm rounded hover:bg-taupe-dark transition-colors"
              >
                Our Story
              </Link>
              <Link
                href="/contact"
                className="px-6 py-2.5 bg-transparent border border-taupe text-taupe font-sans text-sm rounded hover:bg-taupe hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
