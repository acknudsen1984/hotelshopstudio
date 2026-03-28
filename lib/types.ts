// ─── Core Design Types ───────────────────────────────────

export type NavLink = {
  readonly label: string;
  readonly href: string;
};

export type SocialLink = {
  readonly platform: string;
  readonly href: string;
  readonly icon: 'instagram' | 'pinterest' | 'youtube' | 'tiktok';
};

// ─── Hero Carousel Types ─────────────────────────────────

export type HeroSlide = {
  readonly id: string;
  readonly number: string; // "01" through "09"
  readonly title: string;
  readonly subtitle: string;
  readonly image: string;
  readonly category: string;
};

// ─── Instagram Section Types ─────────────────────────────

export type InstagramProduct = {
  readonly name: string;
  readonly price: string;
  readonly asin: string;
  readonly image: string;
};

export type InstagramCard = {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly videoThumbnail: string;
  readonly category: string;
  readonly products: readonly InstagramProduct[];
};

// ─── Footer Types ────────────────────────────────────────

export type FooterColumn = {
  readonly title: string;
  readonly links: readonly NavLink[];
};

// ─── Carousel Types ──────────────────────────────────────

export type CarouselConfig = {
  readonly autoPlay?: boolean;
  readonly autoPlayInterval?: number;
  readonly showArrows?: boolean;
  readonly showDots?: boolean;
  readonly loop?: boolean;
};
