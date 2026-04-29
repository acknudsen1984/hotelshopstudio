# Hotel Shop — Complete Rebuild Plan

> **Functional Reference:** https://ourpnwhome.com/ (layout, sections, carousels — COPY THIS)
> **Brand Reference:** https://hotelshopstudio.com/ (colors, fonts, aesthetic — KEEP THIS)
> **Target Site:** https://hotelshopstudio.com/
> **Build Date:** 2026-03-27
> **Status:** PLAN ONLY — DO NOT IMPLEMENT UNTIL APPROVED

---

## ⚠️ CRITICAL CLARIFICATION (2026-03-27 23:15)

**Brand language is NOT changing.** The current hotelshopstudio.com brand is correct:
- Warm cream/taupe/rose palette — KEEP
- Serif headings (Cormorant Garamond) — KEEP
- Clean sans-serif body — KEEP
- Luxury hotel aesthetic and voice — KEEP

**What IS changing is the FUNCTIONAL LAYOUT:**
- Copy OurPNWHome's page structure section-by-section
- Copy their carousel mechanics and interaction patterns
- Copy their content strategy (editorial + products mixed)
- Copy their navigation, footer, grid layouts

**Simple rule:**
- Look → hotelshopstudio.com
- Structure → ourpnwhome.com

---

## Executive Summary

This plan details a complete rebuild of Hotel Shop, adapting the proven design patterns from OurPNWHome while preserving Hotel Shop's distinct brand identity: warm luxury, hotel-quality curation, and sophisticated but approachable aesthetics.

---

## 1. Component Inventory

### 1.1 Navigation Components

#### TopBar
- **Purpose:** Social links and utility actions above main nav
- **Props:** `socialLinks: SocialLink[]`, `announceText?: string`
- **Layout:**
  - Height: 48px (Hotel Shop) vs 55px (OurPNW)
  - Background: `#BCB2A6` (mink)
  - Social icons: 32×32px, centered row, white SVG icons
  - Text: 11px uppercase, tracking 0.1em
- **Responsive:**
  - 375px: Hide entirely
  - 768px: Show social icons only (no text)
  - 1024px+: Full display

#### Nav (Main Navigation)
- **Purpose:** Logo, nav links, search toggle, mobile hamburger
- **Props:** `links: NavLink[]`, `isScrolled: boolean`
- **Layout:**
  - Height: 72px (expanded), 64px (scrolled)
  - Background: `#F5F3F0` (off-white)
  - Border-bottom: 1px solid `#E5DDD5`
  - Max-width: 1200px centered
  - Logo: Left, 28px display font
  - Links: Center, 11px uppercase, tracking 0.15em
  - Search: Right, 44×44px button
- **Scroll Behavior:**
  - On scroll > 60px: Collapse TopBar, reduce nav height
  - Sticky positioning, z-index 50
- **Responsive:**
  - 375px: Logo centered, hamburger right, height 60px
  - 768px: Logo left, hamburger right
  - 1024px+: Full desktop nav with centered links

#### MobileMenu
- **Purpose:** Full-screen mobile navigation overlay
- **Props:** `isOpen: boolean`, `onClose: () => void`, `links: NavLink[]`
- **Layout:**
  - Full viewport below nav
  - Background: `#F5F3F0`
  - Links: Display font, 24px, border-bottom separators
  - Social links row at bottom
  - Padding: 32px horizontal, 40px vertical
- **Animation:** Slide down with 300ms ease-out

---

### 1.2 Hero Section

#### HeroCarousel
- **Purpose:** Full-width rotating hero with numbered slides
- **Props:** `slides: HeroSlide[]`, `autoPlayInterval?: number`
- **Layout:**
  - Aspect ratios: 4/3 (mobile), 16/8 (tablet), 16/7 (desktop)
  - Max content width: 1200px
  - Content positioning: Bottom-left overlay
  - Gradient: Linear from black/50 at bottom to transparent at top
- **Slide Content:**
  - Number: 60-80px, display font, white/30 opacity
  - Title: 32-52px display font, white, font-weight 300
  - Subtitle: 14-16px sans, white/70
  - CTA: 11px uppercase, underline, arrow icon
- **Controls:**
  - Arrows: 44×48px, white/90 background, centered vertically
  - Dots: 8px circles, 24px active width, bottom center margin-top 24px
  - Auto-play: 6000ms interval, pause on hover
- **Responsive:**
  - 375px: Number 48px, title 28px, subtitle 13px
  - 768px: Number 56px, title 36px, subtitle 14px
  - 1024px: Number 64px, title 44px, subtitle 15px
  - 1400px: Number 72px, title 52px, subtitle 16px

---

### 1.3 Shop Sections

#### ShopRoom (NEW — Key Feature from OurPNW)
- **Purpose:** Room-based shopping with large image + scrollable product sidebar
- **Props:** `room: RoomConfig`, `products: Product[]`
- **Layout:**
  - Two-column: 60% image / 40% product list
  - Left: Large room image with "Shop the Look" button overlay
  - Right: Vertical product scroll area with 3-4 visible products
  - Room selector dots below: 64×48px buttons with room icons
  - Decorative "SHOP" text at 4% opacity behind
- **Product Cards in Sidebar:**
  - Height: 140px
  - Image: 100px × 100px left
  - Text: Right with name + price
  - Hover: Background shifts to oat `#EDE3D6`
- **Responsive:**
  - 375px: Stack vertically, image on top, products below
  - 768px: 55/45 split
  - 1024px+: 60/40 split

#### ShopMosaic (NEW — Grid from OurPNW)
- **Purpose:** Asymmetric grid of product highlights with staggered layout
- **Props:** `products: MosaicProduct[]` (7 items)
- **Layout:**
  - 7-item staggered grid with specific dimensions:
    - Item 1: 316×229px
    - Item 2: 291×343px
    - Item 3: Standard width × 283px
    - Item 4: 562×auto (spans 2 columns)
    - Item 5-7: Smaller squares with -60px margin offsets
  - White background cards with shadow
  - Product image centered, 100px max-height
  - Decorative script text overlays on select items
- **Responsive:**
  - 375px: Single column, full-width cards
  - 768px: 2-column simplified grid
  - 1024px+: Full 7-item mosaic

#### CollectionsGrid
- **Purpose:** 2×2 grid of category cards linking to shop pages
- **Props:** `collections: Collection[]`
- **Layout:**
  - Grid: 2 columns, 40px gap
  - Card: Image top (aspect 1:1), content below
  - Image: Full bleed with subtle border
  - Title: 24-28px display font
  - Description: 14-16px sans, 2 lines max
  - CTA: Arrow link, uppercase
- **Hover:**
  - Image scale 1.02
  - Title color shift to rose
  - Border color change
- **Responsive:**
  - 375px: Single column
  - 768px+: 2 columns

#### TopSellersCarousel
- **Purpose:** Horizontal scrolling product carousel with "top seller" badge
- **Props:** `products: Product[]`, `title: string`
- **Layout:**
  - Section padding: 80px top, 100px bottom
  - Carousel: Horizontal scroll with snap points
  - Product cards: 200px width, white background, shadow
  - Image: 140px height, object-contain
  - Rotating decorative element on side
- **Responsive:**
  - 375px: 160px card width, 2.5 visible
  - 768px: 180px card width, 3.5 visible
  - 1024px+: 200px card width, 4 visible

---

### 1.4 Content Sections

#### InstagramSection
- **Purpose:** Shoppable Instagram-style content cards
- **Props:** `cards: InstagramCard[]`
- **Layout:**
  - Alternating left/right split layouts
  - Left side: Video thumbnail with play button (aspect 3:4)
  - Right side: Content + product sub-carousel
  - Section header with "As Seen On" + "Instagram" title
  - Vertical spacing between cards: 80-120px
- **Product Sub-Carousel:**
  - Active product display (aspect 1:1)
  - Small arrow navigation
  - Product name + price + Amazon link
  - Dot indicators (1.5px, active 4px)
- **Responsive:**
  - 375px: Stack vertically, video on top
  - 768px+: Side-by-side, alternating

#### ReelsCarousel (NEW)
- **Purpose:** Instagram Reels-style video thumbnails linking to content
- **Props:** `reels: Reel[]`
- **Layout:**
  - Horizontal scroll carousel
  - Video containers: 240×428px (9:16 ratio)
  - Play button overlay centered
  - Adjacent product showcase 60% width on right
- **Responsive:**
  - 375px: 180×320px cards, 1.5 visible
  - 768px: 200×356px cards, 2.5 visible
  - 1024px+: 240×428px cards, 3 visible

#### AboutSection
- **Purpose:** Brand story with founder image composition
- **Props:** `content: AboutContent`
- **Layout:**
  - Two-column: 45% images / 55% content
  - Left: Stacked images with rotation (-7deg on secondary)
  - Right: White bordered box with heading + body + CTA
  - Primary image: 300×434px with 16px border
  - Secondary image: 164×230px, floating offset
- **Content:**
  - Heading: Script font, large decorative
  - Subhead: Display font, 32px
  - Body: Sans, 15px, line-height 2
  - CTA: Button or underlined link
- **Responsive:**
  - 375px: Stack, single image on top
  - 768px: Side-by-side with scaled images
  - 1024px+: Full dimensions

#### SnapshotsGallery (NEW)
- **Purpose:** Horizontal scrolling gallery of styled shots with dates
- **Props:** `snapshots: Snapshot[]`
- **Layout:**
  - Aspect ratio: 7.2/13 (portrait)
  - Date badge: Circular, 48px, positioned -21px top
  - Horizontal scroll with custom scrollbar
  - Image hover: Brightness filter 85%
- **Responsive:**
  - All breakpoints: Horizontal scroll, 200-280px card width

---

### 1.5 Forms & CTAs

#### EmailSignup
- **Purpose:** Newsletter subscription form
- **Props:** `variant: 'inline' | 'footer' | 'modal'`, `dark?: boolean`
- **Variants:**
  - **Inline:** Single row, first name + email side by side (49% each)
  - **Footer:** Single email input with submit button
  - **Modal:** Full form with heading and description
- **Layout:**
  - Input height: 48px
  - Background: White
  - Border: 1px solid `#E5DDD5`
  - Submit button: `#BCB2A6` background, arrow icon
  - Font: 13px sans, letter-spacing 0.04em
- **States:**
  - Focus: Border color `#A0978E`
  - Hover (button): Background `#EDE3D6`
  - Success: Checkmark + "Thank you" message
  - Error: Red border, error text below
- **Responsive:**
  - 375px: Stack inputs vertically
  - 768px+: Side-by-side

#### NewsletterSection (NEW — Full-width)
- **Purpose:** Large newsletter CTA section
- **Props:** `heading: string`, `description: string`
- **Layout:**
  - Full-width with background image
  - Dark overlay: rgba(0,0,0,0.47)
  - Content max-width: 662px centered
  - Padding: 140px vertical
  - Form: Two-column inputs (49% each)
- **Responsive:**
  - 375px: 60px padding, stacked inputs
  - 768px+: Full layout

---

### 1.6 Product Components

#### ProductCard
- **Purpose:** Individual product display for grids
- **Props:** `product: Product`, `variant: 'grid' | 'carousel' | 'compact'`
- **Variants:**
  - **Grid:** 200px min-width, full product info
  - **Carousel:** 160-200px fixed width
  - **Compact:** 140px, minimal info
- **Layout:**
  - Container: White background, border, shadow
  - Image: Centered, object-contain, 100-140px height
  - Padding: 16px
  - Name: 14px sans, truncate 2 lines
  - Price: 13px, muted color
- **Hover:**
  - Background: Shift to oat
  - Shadow increase
  - Image subtle scale
- **States:**
  - Loading: Skeleton placeholder
  - Error: Fallback gradient + text

#### ProductGridFull
- **Purpose:** Full page product listing with filters
- **Props:** `products: Product[]`, `category: string`
- **Layout:**
  - Grid: 4 columns at 1400px, 3 at 1024px, 2 at 768px, 1 at 375px
  - Gap: 24px
  - Category header with breadcrumb
  - Optional filter sidebar
- **Responsive:** Column count adjusts per breakpoint

#### ShopFavorites (NEW)
- **Purpose:** Curated favorites horizontal carousel
- **Props:** `products: Product[]`, `title: string`
- **Layout:**
  - 1-4 columns responsive
  - Card: 163×163px with 7px white border
  - Shadow: 0 1px 10px rgba(0,0,0,0.26)
  - Image: 100px height centered
  - Hover: Background rgba(188,178,166,0.35)
- **Responsive:**
  - 375px: 2 columns
  - 768px: 3 columns
  - 1024px+: 4 columns

---

### 1.7 Footer

#### Footer
- **Purpose:** Site footer with navigation, newsletter, social links
- **Props:** `columns: FooterColumn[]`, `socialLinks: SocialLink[]`
- **Layout:**
  - Background: `#3C3C3C` (dark-gray)
  - Pattern overlay optional (Hotel Shop: clean dark)
  - Padding: 80px top, 60px bottom
  - 4-column grid at desktop:
    - Col 1: Brand + description (250px)
    - Col 2: Shop links (200px)
    - Col 3: Company links (200px)
    - Col 4: Newsletter (400px)
  - Social row: Below columns, border-top separator
  - Copyright: 12px, muted
  - Affiliate disclosure: 10px, very muted
- **Responsive:**
  - 375px: Single column, stacked
  - 768px: 2×2 grid
  - 1024px+: 4 columns

#### SocialLinks
- **Purpose:** Row of social media icon buttons
- **Props:** `links: SocialLink[]`, `variant: 'header' | 'footer' | 'mobile'`
- **Layout:**
  - Circular buttons: 44×44px
  - Background: White (header), transparent (footer)
  - Shadow: 1px 2px 4px rgba(0,0,0,0.2)
  - SVG icons: 20×20px centered
- **Hover:**
  - Background: `#BCB2A6`
  - Icon fill: White
  - Transition: 0.3s ease
- **Responsive:**
  - 375px: 36×36px buttons, 8px gap
  - 768px+: 44×44px buttons, 12px gap

---

## 2. Design Token Specification

### 2.1 Colors

```typescript
// tailwind.config.ts - colors
colors: {
  // Primary palette (Hotel Shop brand)
  'off-white': '#F5F3F0',      // Main background
  'dark-gray': '#3C3C3C',      // Primary text

  // Supporting neutrals
  'cream': '#FAF7F2',          // Alternate background
  'ivory': '#F9F5ED',          // Card backgrounds
  'linen': '#F7F3F1',          // Subtle accents
  'limestone': '#EFECE8',      // Borders, dividers
  'oat': '#EDE3D6',            // Hover states

  // Brand accents
  'mink': '#BCB2A6',           // Primary accent (warm taupe)
  'taupe': {
    DEFAULT: '#A0978E',        // Secondary accent
    light: '#BCB2A6',          // Same as mink
    dark: '#8A8179',           // Darker variant
  },
  'warm-border': '#E5DDD5',    // Border color

  // Accent (use sparingly)
  'rose': {
    DEFAULT: '#D4A5A5',        // Warm rose
    light: '#E8D1D1',          // Light rose
  },
}
```

### 2.2 Typography

```typescript
// tailwind.config.ts - fonts
fontFamily: {
  display: ['var(--font-cormorant)', 'Georgia', 'Garamond', 'serif'],
  sans: ['var(--font-poppins)', 'system-ui', '-apple-system', 'sans-serif'],
  // Consider adding: script for decorative (Sebastian Bobby equivalent)
}

// Font sizes (custom)
fontSize: {
  'colossal': ['78px', { lineHeight: '1.1' }],   // Hero numbers
  'hero': ['52px', { lineHeight: '1.1' }],       // Hero titles
  'xl': ['38px', { lineHeight: '1.2' }],         // Section titles
  'lg': ['28px', { lineHeight: '1.25' }],        // Card titles
  'md': ['18px', { lineHeight: '1.5' }],         // Subheadings
  'base': ['15px', { lineHeight: '1.6' }],       // Body
  'sm': ['13px', { lineHeight: '1.5' }],         // Buttons, labels
  'xs': ['11px', { lineHeight: '1.4' }],         // Eyebrow text
  'xxs': ['10px', { lineHeight: '1.3' }],        // Fine print
}

// Letter spacing
letterSpacing: {
  'tight': '-0.02em',    // Display headings
  'normal': '0',         // Body text
  'wide': '0.04em',      // Buttons
  'wider': '0.1em',      // Labels
  'widest': '0.15em',    // Nav links
  'ultra': '0.2em',      // CTAs
}
```

### 2.3 Spacing

```typescript
// tailwind.config.ts - spacing
spacing: {
  'gutter': '24px',           // Standard padding
  'section': '100px',         // Section vertical padding
  'section-sm': '60px',       // Mobile section padding
  'section-lg': '140px',      // Large section padding
  'card-gap': '40px',         // Gap between cards
  'card-gap-sm': '24px',      // Mobile card gap
}

// Max widths
maxWidth: {
  'content': '1200px',        // Main content
  'narrow': '900px',          // Narrow content
  'form': '662px',            // Form widths
  'text': '580px',            // Text blocks
}
```

### 2.4 Shadows & Effects

```typescript
// Box shadows
boxShadow: {
  'card': '0 1px 10px rgba(0, 0, 0, 0.08)',
  'card-hover': '0 4px 20px rgba(0, 0, 0, 0.12)',
  'product': '0 1px 10px rgba(0, 0, 0, 0.26)',
  'social': '0 1px 4px rgba(178, 178, 178, 0.5)',
}

// Transitions
transitionDuration: {
  'fast': '150ms',
  'normal': '300ms',
  'slow': '500ms',
}
```

### 2.5 Breakpoints

```typescript
screens: {
  'xs': '375px',      // Mobile base
  'sm': '550px',      // Large mobile
  'md': '768px',      // Tablet
  'lg': '1024px',     // Desktop
  'xl': '1200px',     // Large desktop
  '2xl': '1400px',    // Extra large
}
```

---

## 3. Data Structure (TypeScript Interfaces)

```typescript
// lib/types.ts

// ─── Navigation ─────────────────────────────────────────
export interface NavLink {
  readonly label: string;
  readonly href: string;
  readonly isExternal?: boolean;
}

export interface SocialLink {
  readonly platform: 'instagram' | 'pinterest' | 'youtube' | 'tiktok';
  readonly href: string;
  readonly label: string;
}

// ─── Hero Carousel ──────────────────────────────────────
export interface HeroSlide {
  readonly id: string;
  readonly number: string;              // "01" through "09"
  readonly title: string;               // Max 30 chars
  readonly subtitle: string;            // Max 80 chars
  readonly image: string;               // Unsplash URL or optimized
  readonly category: string;            // Links to shop category
  readonly alt?: string;                // Accessibility
}

// ─── Products ───────────────────────────────────────────
export interface Product {
  readonly id: string;
  readonly name: string;
  readonly price: string;               // Formatted "$XX"
  readonly category: ProductCategory;
  readonly asin: string;                // Amazon ASIN
  readonly image: string;
  readonly featured?: boolean;
  readonly bestseller?: boolean;
}

export type ProductCategory =
  | 'bathroom'
  | 'kitchen'
  | 'bedroom'
  | 'home-essentials';

// ─── Instagram Section ──────────────────────────────────
export interface InstagramCard {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly videoThumbnail: string;
  readonly category: ProductCategory;
  readonly products: readonly InstagramProduct[];
}

export interface InstagramProduct {
  readonly name: string;
  readonly price: string;
  readonly asin: string;
  readonly image: string;
}

// ─── Shop Room Section ──────────────────────────────────
export interface ShopRoom {
  readonly id: string;
  readonly name: string;                // "Bathroom", "Kitchen", etc.
  readonly slug: ProductCategory;
  readonly heroImage: string;           // Large room photo
  readonly products: readonly Product[];
  readonly description?: string;
}

// ─── Reels/Video Content ────────────────────────────────
export interface Reel {
  readonly id: string;
  readonly thumbnail: string;
  readonly title: string;
  readonly instagramUrl?: string;
  readonly youtubeUrl?: string;
  readonly products: readonly Product[];
}

// ─── About Section ──────────────────────────────────────
export interface AboutContent {
  readonly heading: string;
  readonly subheading: string;
  readonly body: string;
  readonly primaryImage: string;
  readonly secondaryImage?: string;
  readonly ctaText: string;
  readonly ctaHref: string;
}

// ─── Collections ────────────────────────────────────────
export interface Collection {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly slug: ProductCategory;
  readonly image: string;
  readonly productCount?: number;
}

// ─── Footer ─────────────────────────────────────────────
export interface FooterColumn {
  readonly title: string;
  readonly links: readonly NavLink[];
}

// ─── Newsletter ─────────────────────────────────────────
export interface NewsletterConfig {
  readonly heading: string;
  readonly description: string;
  readonly successMessage: string;
  readonly errorMessage: string;
}

// ─── Carousel Configuration ─────────────────────────────
export interface CarouselConfig {
  readonly autoPlay?: boolean;
  readonly autoPlayInterval?: number;
  readonly showArrows?: boolean;
  readonly showDots?: boolean;
  readonly loop?: boolean;
  readonly pauseOnHover?: boolean;
}
```

---

## 4. Page Architecture

### Homepage Section Order (Top to Bottom)

| Order | Section | Height/Proportion | Background | Content Type | Data Source |
|-------|---------|-------------------|------------|--------------|-------------|
| 1 | TopBar | 48px fixed | `#BCB2A6` | Social links | Static config |
| 2 | Nav | 72px sticky | `#F5F3F0` | Logo + nav links | Static config |
| 3 | HeroCarousel | 45-55vh | Image dependent | 9 slides | `hero-data.ts` |
| 4 | CollectionsGrid | Auto (~600px) | `#FAF7F2` | 4 category cards | `collections.ts` |
| 5 | ShopRoom | 720px max | `#F5F3F0` | Room + products | `shop-rooms.ts` |
| 6 | InstagramSection | Auto | `#F5F3F0` | 4 cards | `instagram-data.ts` |
| 7 | TopSellersCarousel | ~400px | `#FAF7F2` | Product carousel | `products.ts` |
| 8 | NewsletterSection | ~350px | Image + overlay | Form | Static |
| 9 | AboutSection | ~500px | `#F5F3F0` | Images + text | `about.ts` |
| 10 | Footer | ~400px | `#3C3C3C` | Links + newsletter | Static config |

### Secondary Pages

| Page | Route | Key Sections |
|------|-------|--------------|
| Shop Category | `/shop/[category]` | CategoryHeader, FilterBar, ProductGridFull, Newsletter |
| About | `/about` | AboutSection (full), Team, Values, Newsletter |
| Links | `/links` | Social link tree |
| Privacy | `/privacy` | Legal content |

---

## 5. Brand Adaptation Rules

### What Stays Identical (Structure/Layout)
- Grid systems and column proportions
- Section flow and hierarchy
- Carousel mechanics and controls
- Navigation structure and mobile menu
- Product card layouts
- Footer column organization
- Image aspect ratios

### What Changes (Brand Application)

| Element | OurPNWHome | Hotel Shop |
|---------|------------|------------|
| **Color Temperature** | Cool neutrals, greys | Warm creams, taupes, rose |
| **Primary Background** | Pure white `#FFFFFF` | Off-white `#F5F3F0` |
| **Accent Color** | Mink `#BCB2A6` | Mink `#BCB2A6` (keep) |
| **Secondary Accent** | Grey tones | Rose `#D4A5A5` (sparingly) |
| **Photography Style** | PNW outdoor, natural light | Hotel interiors, spa-like |
| **Brand Voice** | Personal, blogger-style | Editorial, curated luxury |
| **Logo** | "Our PNW Home" script | "Hotel Shop" display serif |
| **Social Handle** | @ourpnwhome | @hotelshopstudio |
| **Affiliate** | Amazon + LTK | Amazon only (hotelshop-20) |
| **CTA Copy** | "Shop My Looks" | "Shop the Edit" |
| **Section Headers** | Personal ("My Favorites") | Editorial ("Curated Finds") |

### Content Voice Adaptation

| OurPNWHome Style | Hotel Shop Style |
|------------------|------------------|
| "My go-to bathroom essentials" | "Spa-quality bathroom essentials" |
| "I love this for our home" | "A 5-star hotel essential" |
| "Shop my outfit" | "Shop the look" |
| "Life update + home finds" | "New arrivals, curated" |
| Casual, first-person | Sophisticated, editorial third-person |

### Image Sourcing Guidelines

| Category | OurPNWHome | Hotel Shop |
|----------|------------|------------|
| Hero | PNW landscapes, outdoor living | Hotel lobbies, luxury bedrooms, spa |
| Bathroom | Personal bathroom shots | Marble counters, white towels, orchids |
| Kitchen | Family kitchen moments | Restaurant-style plating, copper accents |
| Bedroom | Cozy, lived-in | Boutique hotel beds, crisp linens |
| Home | Pacific Northwest cabin vibes | Penthouse apartment, gallery walls |

---

## 6. Implementation Order

### Phase 1: Foundation & Navigation (Days 1-2)
**Goal:** Functional site shell with navigation and routing

**Tasks:**
1. Update `tailwind.config.ts` with complete design tokens
2. Update `globals.css` with base styles and utilities
3. Rebuild `TopBar.tsx` with social links
4. Rebuild `Nav.tsx` with scroll behavior
5. Create `MobileMenu.tsx` overlay
6. Rebuild `Footer.tsx` with 4-column layout
7. Update `EmailSignup.tsx` for footer variant

**Completion Criteria:**
- [ ] Site loads with navigation visible
- [ ] Scroll behavior works (TopBar hides)
- [ ] Mobile menu opens/closes
- [ ] Footer renders with all links
- [ ] No TypeScript errors
- [ ] Lighthouse accessibility > 90

### Phase 2: Hero Section (Days 3-4)
**Goal:** Full-featured hero carousel matching spec

**Tasks:**
1. Update `Carousel.tsx` with improved controls
2. Rebuild `Hero.tsx` with new layout
3. Update `hero-data.ts` with 9 slides
4. Implement lazy loading for images
5. Add keyboard navigation
6. Style dots and arrows per spec

**Completion Criteria:**
- [ ] 9 slides cycle with 6s interval
- [ ] Arrows and dots functional
- [ ] Content positioned bottom-left
- [ ] Responsive across all breakpoints
- [ ] Images lazy-load properly
- [ ] Pause on hover works

### Phase 3: Collections & Shop Room (Days 5-7)
**Goal:** Core shopping sections functional

**Tasks:**
1. Create `collections.ts` data file
2. Rebuild `CollectionsGrid.tsx` (2×2 grid)
3. Create `ShopRoom.tsx` component (NEW)
4. Create `shop-rooms.ts` data file
5. Create room selector dots
6. Implement product sidebar scroll

**Completion Criteria:**
- [ ] 4 collection cards display
- [ ] Cards link to category pages
- [ ] ShopRoom shows room image + products
- [ ] Room switcher works
- [ ] Product clicks open Amazon with affiliate tag
- [ ] Responsive stacking on mobile

### Phase 4: Instagram Section (Days 8-9)
**Goal:** Shoppable Instagram content section

**Tasks:**
1. Update `InstagramSection.tsx` layout
2. Improve `ProductSubCarousel` navigation
3. Update `instagram-data.ts` with real content
4. Add play button overlay styling
5. Implement alternating layout logic

**Completion Criteria:**
- [ ] 4 cards render with alternating layout
- [ ] Product sub-carousels cycle
- [ ] Product links work with affiliate tag
- [ ] Play button suggests video content
- [ ] Mobile stack layout works

### Phase 5: Carousels & Top Sellers (Days 10-11)
**Goal:** Product carousels functional

**Tasks:**
1. Rebuild `TopSellersCarousel.tsx`
2. Create `ShopFavorites.tsx` (NEW)
3. Create horizontal scroll mechanics
4. Add "bestseller" badges
5. Implement responsive card counts

**Completion Criteria:**
- [ ] Horizontal scroll snaps to cards
- [ ] Touch/swipe works on mobile
- [ ] Cards link to Amazon correctly
- [ ] Responsive card sizing works
- [ ] Loading states implemented

### Phase 6: Newsletter & About (Days 12-13)
**Goal:** Content sections complete

**Tasks:**
1. Create `NewsletterSection.tsx` (full-width)
2. Update `EmailSignup.tsx` variants
3. Create `AboutSection.tsx` (NEW)
4. Create `about.ts` data file
5. Implement API route for newsletter

**Completion Criteria:**
- [ ] Newsletter form submits
- [ ] Success/error states display
- [ ] About section has image composition
- [ ] Responsive layout on all breakpoints

### Phase 7: Category Pages (Days 14-15)
**Goal:** Shop category pages functional

**Tasks:**
1. Update `/shop/[category]/page.tsx`
2. Add category headers
3. Implement product grid
4. Add filter UI (optional v1)
5. Ensure affiliate links work

**Completion Criteria:**
- [ ] All 4 category pages load
- [ ] Products display in grid
- [ ] Products link to Amazon correctly
- [ ] SEO metadata correct
- [ ] Mobile responsive

### Phase 8: Polish & QA (Days 16-18)
**Goal:** Production-ready quality

**Tasks:**
1. Cross-browser testing
2. Mobile device testing
3. Performance optimization
4. Accessibility audit
5. SEO verification
6. Analytics integration
7. Final design review with Kelly

**Completion Criteria:**
- [ ] Works on Chrome, Safari, Firefox, Edge
- [ ] Works on iOS Safari and Android Chrome
- [ ] Lighthouse performance > 80
- [ ] Lighthouse accessibility > 95
- [ ] All affiliate links have correct tag
- [ ] Kelly approves design

---

## 7. Content Strategy

### Per-Section Content Requirements

| Section | Placeholder Content | Real Content Needed | Image Source |
|---------|--------------------|--------------------|--------------|
| **Hero Slides** | Generic luxury interiors | 9 unique hotel/room shots | Unsplash (curated list below) |
| **Collections** | Category placeholder images | 4 styled category images | Unsplash or custom shoot |
| **ShopRoom** | Room composite image | 4 styled room photographs | High-quality stock or custom |
| **Instagram** | Video thumbnail placeholders | Real Instagram post screenshots or recreation | @hotelshopstudio content |
| **Products** | Amazon product images | Amazon product images (via API or manual) | Amazon URLs |
| **About** | Placeholder founder photo | Kelly & Alexander photo | Personal photos |
| **Newsletter** | Generic spa background | Hotel lobby or spa image | Unsplash |

### Recommended Unsplash Image Sources

**Hotel Interiors / Luxury:**
- `nathan-fertig` - Boutique hotel rooms
- `roberto-nickson` - Luxury bedroom setups
- `andrea-davis` - Spa and bathroom aesthetics
- `frames-for-your-heart` - Warm interior lighting
- `chastity-cortijo` - Hotel lobby vibes

**Product Styling:**
- `kara-eads` - Minimal product photography
- `samantha-gades` - Home goods styling
- `the-creative-exchange` - Neutral palette products

### Placeholder Copy

**Hero Slides:**
1. "Morning Ritual" — Spa-quality essentials for your daily routine
2. "The Perfect Table" — Elevated dining with thoughtfully curated pieces
3. "Restful Sanctuary" — Bedding and lighting designed for comfort
4. "Quiet Corners" — Accents that elevate every room
5. "Warm Textures" — Natural materials, timeless appeal
6. "Clean Lines" — Minimalist essentials for modern living
7. "Gathered & Set" — Kitchen pieces worth keeping out
8. "Natural Light" — Spaces that breathe and inspire
9. "Everyday Luxury" — Small upgrades, lasting impact

**Section Headers:**
- Collections: "Curated Collections" / "Shop by Room"
- Instagram: "As Seen On" / "Instagram"
- Top Sellers: "Best Sellers" / "Trending Now"
- Newsletter: "Stay Inspired" / "Join the Edit"
- About: "The Story" / "Meet Hotel Shop"

---

## 8. Quality Gates

### Before Each Phase Ships

#### Visual Checklist
- [ ] Typography matches spec (sizes, weights, tracking)
- [ ] Colors match design tokens exactly
- [ ] Spacing is consistent (use Tailwind classes)
- [ ] Images have correct aspect ratios
- [ ] Shadows and borders match spec
- [ ] Hover states work correctly
- [ ] Focus states are visible and accessible

#### Functional Checklist
- [ ] All links work (internal and external)
- [ ] Affiliate links have `?tag=hotelshop-20`
- [ ] Forms submit correctly
- [ ] Carousels navigate with arrows, dots, keyboard
- [ ] Mobile menu opens/closes
- [ ] Scroll behavior works

#### Mobile Checklist (Test at 375px)
- [ ] No horizontal overflow
- [ ] Touch targets >= 44px
- [ ] Text readable without zooming
- [ ] Images scale appropriately
- [ ] Navigation accessible
- [ ] Forms usable

#### Performance Checklist
- [ ] No layout shift (CLS < 0.1)
- [ ] Images lazy load below fold
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Bundle size < 500KB

#### Brand Checklist
- [ ] Color palette feels warm, not cool
- [ ] Photography evokes luxury hotel
- [ ] Copy is editorial, not personal-blogger
- [ ] Logo displays correctly
- [ ] Social links go to @hotelshopstudio
- [ ] No OurPNWHome references

---

## 9. Technical Notes

### Next.js 16 Considerations
- Read `node_modules/next/dist/docs/` for breaking changes
- App Router only (no pages directory)
- Server Components by default
- Use `"use client"` for interactive components

### Image Optimization
- Use Next.js `<Image>` component always
- Provide `sizes` prop for responsive images
- Use Unsplash `?w=X&h=Y&fit=crop` params
- Priority load above-fold images only

### Affiliate Link Structure
```typescript
const AFFILIATE_TAG = "hotelshop-20";
const getProductUrl = (asin: string) =>
  `https://amazon.com/dp/${asin}?tag=${AFFILIATE_TAG}`;
```

### Environment Variables
```bash
# .env.local (not committed)
NEXT_PUBLIC_AFFILIATE_TAG=hotelshop-20
NEWSLETTER_API_KEY=xxx
```

### Testing Requirements
- Vitest for unit tests
- Playwright for E2E (critical paths only)
- Lighthouse CI in deployment pipeline
- Manual QA on physical devices

---

## 10. Files to Create/Modify

### New Files
```
components/
  MobileMenu.tsx          # Mobile nav overlay
  ShopRoom.tsx            # Room-based shopping section
  ShopFavorites.tsx       # Product favorites carousel
  NewsletterSection.tsx   # Full-width newsletter CTA
  AboutSection.tsx        # Brand story section
  ReelsCarousel.tsx       # Optional: Video content
  SnapshotsGallery.tsx    # Optional: Photo gallery

lib/
  collections.ts          # Collection card data
  shop-rooms.ts           # Room shopping data
  about.ts                # About section content
  newsletter.ts           # Newsletter API helpers
```

### Modified Files
```
tailwind.config.ts        # Complete design token update
app/globals.css           # Base styles update
components/TopBar.tsx     # Redesign
components/Nav.tsx        # Redesign with scroll
components/Footer.tsx     # 4-column redesign
components/Hero.tsx       # Updated layout
components/Carousel.tsx   # Improved controls
components/InstagramSection.tsx  # Layout update
components/EmailSignup.tsx       # Multiple variants
components/CollectionsGrid.tsx   # Redesign
components/ProductCard.tsx       # Multiple variants
lib/types.ts              # Extended interfaces
lib/hero-data.ts          # Updated content
lib/instagram-data.ts     # Updated content
lib/products.ts           # Clean up
app/page.tsx              # New section order
app/layout.tsx            # Font updates if needed
```

---

## Approval Required

Before implementation begins:

1. **Kelly Knudsen** must approve:
   - Color palette warmth
   - Typography choices
   - Overall aesthetic direction
   - Brand voice in placeholder copy

2. **Technical review** must confirm:
   - Phase timeline is realistic
   - No missing dependencies
   - Hosting/deployment path clear

---

*This plan is comprehensive and ready for implementation handoff. No code should be written until this document is approved.*
