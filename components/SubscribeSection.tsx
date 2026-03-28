import EmailSignup from "./EmailSignup";

type SubscribeSectionProps = {
  readonly dark?: boolean;
};

export default function SubscribeSection({ dark = false }: SubscribeSectionProps) {
  return (
    <section className={`${dark ? "bg-charcoal text-white" : "bg-off-white text-charcoal"} border-y border-warm-beige/40 py-16 sm:py-20 lg:py-24`}>
      <div className="mx-auto max-w-4xl px-5 text-center">
        {/* Eyebrow */}
        <p className={`text-xs tracking-widest uppercase font-sans font-light mb-4 ${dark ? "text-rose-light" : "text-rose"}`}>
          Weekly Curation
        </p>

        {/* Heading */}
        <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-light leading-snug mb-4 ${dark ? "text-white" : "text-charcoal"}`}>
          New finds, every week
        </h2>

        {/* Subheading */}
        <p className={`text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-light ${dark ? "text-warm-beige/80" : "text-muted"}`}>
          Hotel-quality pieces, carefully curated and linked directly to Amazon. Join our community of design-conscious home lovers.
        </p>

        {/* Signup form */}
        <div className="flex justify-center">
          <div className="w-full sm:max-w-xl">
            <EmailSignup dark={dark} />
          </div>
        </div>
      </div>
    </section>
  );
}
