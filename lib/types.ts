// ─── Navigation Types ────────────────────────────────────

export type NavLink = {
  readonly label: string;
  readonly href: string;
  readonly isExternal?: boolean;
};

export type SocialPlatform =
  | 'instagram'
  | 'tiktok'
  | 'pinterest'
  | 'shopltk'
  | 'amazon'
  | 'shopmy';

export type SocialLink = {
  readonly platform: SocialPlatform;
  readonly href: string;
  readonly label: string;
};

// ─── Hero Carousel Types ─────────────────────────────────

export type HeroSlide = {
  readonly id: string;
  readonly number: string; // "01" through "09"
  readonly title: string;
  readonly label: string; // "in my home!", "trending now!", etc.
  readonly image: string;
  readonly amazonUrl: string;
};

// ─── Instagram Section Types ─────────────────────────────

export type InstagramProduct = {
  readonly id: string;
  readonly name: string;
  readonly price: string;
  readonly image: string;
  readonly amazonUrl: string;
};

export type InstagramCard = {
  readonly id: string;
  readonly image: string;
  readonly products: readonly InstagramProduct[];
};

// ─── Recent Finds (Snapshots) Types ──────────────────────

export type Snapshot = {
  readonly id: string;
  readonly image: string;
  readonly day: number;
  readonly month: string;
  readonly amazonUrl: string;
};

// ─── Shop The Room Types ─────────────────────────────────

export type RoomProduct = {
  readonly id: string;
  readonly name: string;
  readonly image: string;
  readonly amazonUrl: string;
};

export type ShopRoom = {
  readonly id: string;
  readonly name: string;
  readonly number: string; // "01" through "05"
  readonly heroImage: string;
  readonly products: readonly RoomProduct[];
};

// ─── Blog Types ──────────────────────────────────────────

export type BlogCategory =
  | 'All'
  | 'Bedroom'
  | 'Bathroom'
  | 'Kitchen'
  | 'Living Room';

export type BlogPost = {
  readonly id: string;
  readonly title: string;
  readonly image: string;
  readonly day: number;
  readonly month: string;
  readonly category: BlogCategory;
  readonly href: string;
};

// ─── Curated Carousel Types ──────────────────────────────

export type CuratedProduct = {
  readonly id: string;
  readonly name: string;
  readonly price: string;
  readonly image: string;
  readonly amazonUrl: string;
};

// ─── Category Product Types ──────────────────────────────

export type CategoryProduct = {
  readonly id: string;
  readonly name: string;
  readonly price?: string;
  readonly image: string;
  readonly amazonUrl: string;
};

// ─── Footer Types ────────────────────────────────────────

export type FooterColumn = {
  readonly title: string;
  readonly links: readonly NavLink[];
};

// ─── Carousel Config ─────────────────────────────────────

export type CarouselConfig = {
  readonly autoPlay?: boolean;
  readonly autoPlayInterval?: number;
  readonly showArrows?: boolean;
  readonly showDots?: boolean;
  readonly loop?: boolean;
};
