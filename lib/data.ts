import type {
  SocialLink,
  HeroSlide,
  InstagramCard,
  Snapshot,
  ShopRoom,
  BlogPost,
  CuratedProduct,
  NavLink,
} from './types';

export const AFFILIATE_TAG = 'hotelshop-20';

// ─── Social Links ────────────────────────────────────────────────────────────

export const socialLinks: readonly SocialLink[] = [
  { platform: 'instagram', href: 'https://instagram.com/hotelshopstudio', label: 'Instagram' },
  { platform: 'tiktok', href: 'https://tiktok.com/@hotelshopstudio', label: 'TikTok' },
  { platform: 'pinterest', href: 'https://pinterest.com/hotelshopstudio', label: 'Pinterest' },
  { platform: 'shopltk', href: 'https://shopltk.com/hotelshopstudio', label: 'ShopLTK' },
  { platform: 'amazon', href: 'https://amazon.com/shop/hotelshop', label: 'Amazon' },
  { platform: 'shopmy', href: 'https://shopmy.us/hotelshop', label: 'ShopMy' },
] as const;

// ─── Navigation Links ────────────────────────────────────────────────────────

export const navLinks: readonly NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Categories', href: '/categories' },
  { label: 'About', href: '/about' },
  { label: 'Shop', href: '/shop', isExternal: true },
] as const;

// ─── Hero Carousel (9 items) ─────────────────────────────────────────────────

export const heroSlides: readonly HeroSlide[] = [
  {
    id: 'hero-1',
    number: '01',
    title: 'Luxury Waffle Robe',
    label: 'in my home!',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=800&fit=crop',
    amazonUrl: `https://www.amazon.com/s?k=luxury+waffle+robe&tag=${AFFILIATE_TAG}`,
  },
  {
    id: 'hero-2',
    number: '02',
    title: 'Marble Soap Dispenser',
    label: 'trending now!',
    image: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=600&h=800&fit=crop',
    amazonUrl: `https://www.amazon.com/s?k=marble+soap+dispenser&tag=${AFFILIATE_TAG}`,
  },
  {
    id: 'hero-3',
    number: '03',
    title: 'Egyptian Cotton Sheets',
    label: 'new find',
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600&h=800&fit=crop',
    amazonUrl: `https://www.amazon.com/s?k=egyptian+cotton+sheets&tag=${AFFILIATE_TAG}`,
  },
  {
    id: 'hero-4',
    number: '04',
    title: 'Brass Table Lamp',
    label: 'hotel favorite',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&h=800&fit=crop',
    amazonUrl: `https://www.amazon.com/s?k=brass+table+lamp&tag=${AFFILIATE_TAG}`,
  },
  {
    id: 'hero-5',
    number: '05',
    title: 'Ceramic Vase Set',
    label: 'in my home!',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=800&fit=crop',
    amazonUrl: `https://www.amazon.com/s?k=ceramic+vase+set&tag=${AFFILIATE_TAG}`,
  },
  {
    id: 'hero-6',
    number: '06',
    title: 'Linen Throw Blanket',
    label: 'trending now!',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=800&fit=crop',
    amazonUrl: `https://www.amazon.com/s?k=linen+throw+blanket&tag=${AFFILIATE_TAG}`,
  },
  {
    id: 'hero-7',
    number: '07',
    title: 'Wood Bath Stool',
    label: 'new find',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=800&fit=crop',
    amazonUrl: `https://www.amazon.com/s?k=wood+bath+stool&tag=${AFFILIATE_TAG}`,
  },
  {
    id: 'hero-8',
    number: '08',
    title: 'Velvet Accent Pillow',
    label: 'hotel favorite',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&h=800&fit=crop',
    amazonUrl: `https://www.amazon.com/s?k=velvet+accent+pillow&tag=${AFFILIATE_TAG}`,
  },
  {
    id: 'hero-9',
    number: '09',
    title: 'Travertine Tray',
    label: 'in my home!',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=600&h=800&fit=crop',
    amazonUrl: `https://www.amazon.com/s?k=travertine+tray&tag=${AFFILIATE_TAG}`,
  },
] as const;

// ─── Instagram Section (4 cards, 3 products each) ────────────────────────────

export const instagramCards: readonly InstagramCard[] = [
  {
    id: 'insta-1',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=640&h=800&fit=crop',
    products: [
      {
        id: 'insta-1-p1',
        name: 'Marble Tray',
        price: '$45',
        image: 'https://images.unsplash.com/photo-1584622614875-2f3ee969885a?w=160&h=160&fit=crop',
        amazonUrl: `https://www.amazon.com/s?k=marble+tray&tag=${AFFILIATE_TAG}`,
      },
      {
        id: 'insta-1-p2',
        name: 'Candle Set',
        price: '$38',
        image: 'https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=160&h=160&fit=crop',
        amazonUrl: `https://www.amazon.com/s?k=candle+set&tag=${AFFILIATE_TAG}`,
      },
      {
        id: 'insta-1-p3',
        name: 'Brass Accents',
        price: '$52',
        image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=160&h=160&fit=crop',
        amazonUrl: `https://www.amazon.com/s?k=brass+accents&tag=${AFFILIATE_TAG}`,
      },
    ],
  },
  {
    id: 'insta-2',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=640&h=800&fit=crop',
    products: [
      {
        id: 'insta-2-p1',
        name: 'Cotton Towels',
        price: '$65',
        image: 'https://images.unsplash.com/photo-1583845112239-97ef1341b271?w=160&h=160&fit=crop',
        amazonUrl: `https://www.amazon.com/s?k=cotton+towels&tag=${AFFILIATE_TAG}`,
      },
      {
        id: 'insta-2-p2',
        name: 'Wood Stool',
        price: '$105',
        image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=160&h=160&fit=crop',
        amazonUrl: `https://www.amazon.com/s?k=wood+stool&tag=${AFFILIATE_TAG}`,
      },
      {
        id: 'insta-2-p3',
        name: 'Bath Caddy',
        price: '$48',
        image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=160&h=160&fit=crop',
        amazonUrl: `https://www.amazon.com/s?k=bath+caddy&tag=${AFFILIATE_TAG}`,
      },
    ],
  },
  {
    id: 'insta-3',
    image: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=640&h=800&fit=crop',
    products: [
      {
        id: 'insta-3-p1',
        name: 'Ceramic Lamp',
        price: '$120',
        image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=160&h=160&fit=crop',
        amazonUrl: `https://www.amazon.com/s?k=ceramic+lamp&tag=${AFFILIATE_TAG}`,
      },
      {
        id: 'insta-3-p2',
        name: 'Linen Curtains',
        price: '$85',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=160&h=160&fit=crop',
        amazonUrl: `https://www.amazon.com/s?k=linen+curtains&tag=${AFFILIATE_TAG}`,
      },
      {
        id: 'insta-3-p3',
        name: 'Throw Pillow',
        price: '$35',
        image: 'https://images.unsplash.com/photo-1584622614875-2f3ee969885a?w=160&h=160&fit=crop',
        amazonUrl: `https://www.amazon.com/s?k=throw+pillow&tag=${AFFILIATE_TAG}`,
      },
    ],
  },
  {
    id: 'insta-4',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=640&h=800&fit=crop',
    products: [
      {
        id: 'insta-4-p1',
        name: 'Glass Vase',
        price: '$42',
        image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=160&h=160&fit=crop',
        amazonUrl: `https://www.amazon.com/s?k=glass+vase&tag=${AFFILIATE_TAG}`,
      },
      {
        id: 'insta-4-p2',
        name: 'Side Table',
        price: '$180',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=160&h=160&fit=crop',
        amazonUrl: `https://www.amazon.com/s?k=side+table&tag=${AFFILIATE_TAG}`,
      },
      {
        id: 'insta-4-p3',
        name: 'Floor Lamp',
        price: '$195',
        image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=160&h=160&fit=crop',
        amazonUrl: `https://www.amazon.com/s?k=floor+lamp&tag=${AFFILIATE_TAG}`,
      },
    ],
  },
] as const;

// ─── Recent Finds / Snapshots (24 items) ─────────────────────────────────────

const snapshotImages = [
  'photo-1560185007-c5ca9d2c014d',
  'photo-1484101403633-562f891dc89a',
  'photo-1578683010236-d716f9a3f461',
  'photo-1586023492125-27b2c045efd7',
  'photo-1616486338812-3dadae4b4ace',
  'photo-1631049307264-da0ec9d70304',
  'photo-1540518614846-7eded433c457',
  'photo-1505691938895-1758d7feb511',
  'photo-1556909114-f6e7ad7d3136',
  'photo-1522771739844-6a9f6d5f14af',
  'photo-1588854337236-6889d631faa8',
  'photo-1493809842364-78817add7ffb',
  'photo-1507089947368-19c1da9775ae',
  'photo-1524758631624-e2822e304c36',
  'photo-1555041469-a586c61ea9bc',
  'photo-1583845112239-97ef1341b271',
  'photo-1503602642458-232111445657',
  'photo-1552321554-5fefe8c9ef14',
  'photo-1513506003901-1e6a229e2d15',
  'photo-1602028915047-37269d1a73f7',
  'photo-1584622614875-2f3ee969885a',
  'photo-1578500494198-246f612d03b3',
  'photo-1556225286-c4a46b8e7dff',
  'photo-1504674900967-a8f32de4490d',
];

const months = ['Jan', 'Feb', 'Mar', 'Mar', 'Mar', 'Mar'];
const searchTerms = [
  'marble+soap+dish', 'velvet+pillow', 'brass+lamp', 'ceramic+vase',
  'linen+throw', 'wood+stool', 'cotton+towels', 'glass+decor',
  'candle+holder', 'woven+basket', 'bath+accessories', 'bedding+set',
  'accent+mirror', 'table+lamp', 'throw+blanket', 'decorative+tray',
  'plant+pot', 'wall+art', 'storage+basket', 'bath+mat',
  'incense+holder', 'jewelry+box', 'desk+organizer', 'floor+mirror',
];

export const snapshots: readonly Snapshot[] = Array.from({ length: 24 }, (_, i) => ({
  id: `snapshot-${i + 1}`,
  image: `https://images.unsplash.com/${snapshotImages[i]}?w=500&h=500&fit=crop`,
  day: ((i * 3 + 5) % 28) + 1,
  month: months[i % 6],
  amazonUrl: `https://www.amazon.com/s?k=${searchTerms[i]}&tag=${AFFILIATE_TAG}`,
})) as readonly Snapshot[];

// ─── Shop The Room (5 rooms) ─────────────────────────────────────────────────

export const shopRooms: readonly ShopRoom[] = [
  {
    id: 'room-bedroom',
    name: 'The Bedroom',
    number: '01',
    heroImage: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&h=800&fit=crop',
    products: [
      { id: 'br-1', name: 'Linen Sheets', image: 'https://images.unsplash.com/photo-1584622614875-2f3ee969885a?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=linen+sheets&tag=${AFFILIATE_TAG}` },
      { id: 'br-2', name: 'Velvet Pillow', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=velvet+pillow&tag=${AFFILIATE_TAG}` },
      { id: 'br-3', name: 'Table Lamp', image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=table+lamp&tag=${AFFILIATE_TAG}` },
      { id: 'br-4', name: 'Throw Blanket', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=throw+blanket&tag=${AFFILIATE_TAG}` },
      { id: 'br-5', name: 'Nightstand', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=nightstand&tag=${AFFILIATE_TAG}` },
      { id: 'br-6', name: 'Wall Mirror', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=wall+mirror&tag=${AFFILIATE_TAG}` },
      { id: 'br-7', name: 'Ceramic Vase', image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=ceramic+vase&tag=${AFFILIATE_TAG}` },
      { id: 'br-8', name: 'Bed Frame', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=bed+frame&tag=${AFFILIATE_TAG}` },
      { id: 'br-9', name: 'Area Rug', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=area+rug&tag=${AFFILIATE_TAG}` },
      { id: 'br-10', name: 'Scented Candle', image: 'https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=scented+candle&tag=${AFFILIATE_TAG}` },
    ],
  },
  {
    id: 'room-bathroom',
    name: 'The Bathroom',
    number: '02',
    heroImage: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=800&fit=crop',
    products: [
      { id: 'ba-1', name: 'Cotton Towels', image: 'https://images.unsplash.com/photo-1583845112239-97ef1341b271?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=cotton+towels&tag=${AFFILIATE_TAG}` },
      { id: 'ba-2', name: 'Wood Stool', image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=wood+stool&tag=${AFFILIATE_TAG}` },
      { id: 'ba-3', name: 'Soap Dispenser', image: 'https://images.unsplash.com/photo-1584622614875-2f3ee969885a?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=soap+dispenser&tag=${AFFILIATE_TAG}` },
      { id: 'ba-4', name: 'Bath Mat', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=bath+mat&tag=${AFFILIATE_TAG}` },
      { id: 'ba-5', name: 'Waffle Robe', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=waffle+robe&tag=${AFFILIATE_TAG}` },
      { id: 'ba-6', name: 'Marble Tray', image: 'https://images.unsplash.com/photo-1584622614875-2f3ee969885a?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=marble+tray&tag=${AFFILIATE_TAG}` },
      { id: 'ba-7', name: 'Toilet Brush', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=toilet+brush&tag=${AFFILIATE_TAG}` },
      { id: 'ba-8', name: 'Storage Basket', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=storage+basket&tag=${AFFILIATE_TAG}` },
      { id: 'ba-9', name: 'Tissue Box', image: 'https://images.unsplash.com/photo-1584622614875-2f3ee969885a?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=tissue+box&tag=${AFFILIATE_TAG}` },
      { id: 'ba-10', name: 'Candle Holder', image: 'https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=candle+holder&tag=${AFFILIATE_TAG}` },
    ],
  },
  {
    id: 'room-kitchen',
    name: 'The Kitchen',
    number: '03',
    heroImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop',
    products: [
      { id: 'ki-1', name: 'Olive Oil Cruet', image: 'https://images.unsplash.com/photo-1556225286-c4a46b8e7dff?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=olive+oil+cruet&tag=${AFFILIATE_TAG}` },
      { id: 'ki-2', name: 'Cutting Board', image: 'https://images.unsplash.com/photo-1504674900967-a8f32de4490d?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=cutting+board&tag=${AFFILIATE_TAG}` },
      { id: 'ki-3', name: 'Utensil Holder', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=utensil+holder&tag=${AFFILIATE_TAG}` },
      { id: 'ki-4', name: 'Fruit Bowl', image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=fruit+bowl&tag=${AFFILIATE_TAG}` },
      { id: 'ki-5', name: 'Dish Towels', image: 'https://images.unsplash.com/photo-1583845112239-97ef1341b271?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=dish+towels&tag=${AFFILIATE_TAG}` },
      { id: 'ki-6', name: 'Salt Cellar', image: 'https://images.unsplash.com/photo-1556225286-c4a46b8e7dff?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=salt+cellar&tag=${AFFILIATE_TAG}` },
      { id: 'ki-7', name: 'Canister Set', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=canister+set&tag=${AFFILIATE_TAG}` },
      { id: 'ki-8', name: 'Paper Towel Holder', image: 'https://images.unsplash.com/photo-1584622614875-2f3ee969885a?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=paper+towel+holder&tag=${AFFILIATE_TAG}` },
      { id: 'ki-9', name: 'Serving Tray', image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=serving+tray&tag=${AFFILIATE_TAG}` },
      { id: 'ki-10', name: 'Sponge Holder', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=sponge+holder&tag=${AFFILIATE_TAG}` },
      { id: 'ki-11', name: 'Spice Jars', image: 'https://images.unsplash.com/photo-1556225286-c4a46b8e7dff?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=spice+jars&tag=${AFFILIATE_TAG}` },
      { id: 'ki-12', name: 'Lazy Susan', image: 'https://images.unsplash.com/photo-1504674900967-a8f32de4490d?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=lazy+susan&tag=${AFFILIATE_TAG}` },
    ],
  },
  {
    id: 'room-living',
    name: 'The Living Room',
    number: '04',
    heroImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop',
    products: [
      { id: 'lr-1', name: 'Coffee Table', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=coffee+table&tag=${AFFILIATE_TAG}` },
      { id: 'lr-2', name: 'Floor Lamp', image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=floor+lamp&tag=${AFFILIATE_TAG}` },
      { id: 'lr-3', name: 'Throw Pillow', image: 'https://images.unsplash.com/photo-1584622614875-2f3ee969885a?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=throw+pillow&tag=${AFFILIATE_TAG}` },
      { id: 'lr-4', name: 'Area Rug', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=area+rug&tag=${AFFILIATE_TAG}` },
      { id: 'lr-5', name: 'Bookends', image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=bookends&tag=${AFFILIATE_TAG}` },
      { id: 'lr-6', name: 'Art Print', image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=art+print&tag=${AFFILIATE_TAG}` },
      { id: 'lr-7', name: 'Candle Set', image: 'https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=candle+set&tag=${AFFILIATE_TAG}` },
      { id: 'lr-8', name: 'Side Table', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=side+table&tag=${AFFILIATE_TAG}` },
      { id: 'lr-9', name: 'Blanket Ladder', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=blanket+ladder&tag=${AFFILIATE_TAG}` },
      { id: 'lr-10', name: 'Plant Pot', image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=plant+pot&tag=${AFFILIATE_TAG}` },
    ],
  },
  {
    id: 'room-entryway',
    name: 'The Entryway',
    number: '05',
    heroImage: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&h=800&fit=crop',
    products: [
      { id: 'en-1', name: 'Console Table', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=console+table&tag=${AFFILIATE_TAG}` },
      { id: 'en-2', name: 'Wall Mirror', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=wall+mirror&tag=${AFFILIATE_TAG}` },
      { id: 'en-3', name: 'Key Tray', image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=key+tray&tag=${AFFILIATE_TAG}` },
      { id: 'en-4', name: 'Coat Hooks', image: 'https://images.unsplash.com/photo-1584622614875-2f3ee969885a?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=coat+hooks&tag=${AFFILIATE_TAG}` },
      { id: 'en-5', name: 'Umbrella Stand', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=umbrella+stand&tag=${AFFILIATE_TAG}` },
      { id: 'en-6', name: 'Door Mat', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=door+mat&tag=${AFFILIATE_TAG}` },
      { id: 'en-7', name: 'Bench', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=entryway+bench&tag=${AFFILIATE_TAG}` },
      { id: 'en-8', name: 'Storage Basket', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=storage+basket&tag=${AFFILIATE_TAG}` },
      { id: 'en-9', name: 'Wall Art', image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=wall+art&tag=${AFFILIATE_TAG}` },
      { id: 'en-10', name: 'Table Lamp', image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=200&h=200&fit=crop', amazonUrl: `https://www.amazon.com/s?k=table+lamp&tag=${AFFILIATE_TAG}` },
    ],
  },
] as const;

// ─── Blog Posts (6 posts) ────────────────────────────────────────────────────

export const blogPosts: readonly BlogPost[] = [
  {
    id: 'blog-1',
    title: 'How to Create a Hotel-Quality Bedroom at Home',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&h=560&fit=crop',
    day: 15,
    month: 'Mar',
    category: 'Bedroom',
    href: '/blog/hotel-quality-bedroom',
  },
  {
    id: 'blog-2',
    title: 'The Essential Bathroom Accessories Every Home Needs',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=560&fit=crop',
    day: 12,
    month: 'Mar',
    category: 'Bathroom',
    href: '/blog/bathroom-accessories',
  },
  {
    id: 'blog-3',
    title: 'Kitchen Organization Tips from Boutique Hotels',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=560&fit=crop',
    day: 8,
    month: 'Mar',
    category: 'Kitchen',
    href: '/blog/kitchen-organization',
  },
  {
    id: 'blog-4',
    title: 'Creating a Cozy Living Room Retreat',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=560&fit=crop',
    day: 5,
    month: 'Mar',
    category: 'Living Room',
    href: '/blog/cozy-living-room',
  },
  {
    id: 'blog-5',
    title: 'Spring Bedroom Refresh: Linen Edition',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=560&fit=crop',
    day: 1,
    month: 'Mar',
    category: 'Bedroom',
    href: '/blog/spring-bedroom-refresh',
  },
  {
    id: 'blog-6',
    title: 'Spa Bathroom Essentials for Daily Luxury',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=560&fit=crop',
    day: 26,
    month: 'Feb',
    category: 'Bathroom',
    href: '/blog/spa-bathroom-essentials',
  },
] as const;

// ─── Curated Products (8 items) ──────────────────────────────────────────────

export const curatedProducts: readonly CuratedProduct[] = [
  {
    id: 'curated-1',
    name: 'Marble Soap Dispenser',
    price: '$38',
    image: 'https://images.unsplash.com/photo-1584622614875-2f3ee969885a?w=400&h=400&fit=crop',
    amazonUrl: `https://www.amazon.com/s?k=marble+soap+dispenser&tag=${AFFILIATE_TAG}`,
  },
  {
    id: 'curated-2',
    name: 'Linen Throw Blanket',
    price: '$85',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=400&fit=crop',
    amazonUrl: `https://www.amazon.com/s?k=linen+throw+blanket&tag=${AFFILIATE_TAG}`,
  },
  {
    id: 'curated-3',
    name: 'Brass Table Lamp',
    price: '$120',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=400&fit=crop',
    amazonUrl: `https://www.amazon.com/s?k=brass+table+lamp&tag=${AFFILIATE_TAG}`,
  },
  {
    id: 'curated-4',
    name: 'Ceramic Vase Set',
    price: '$65',
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=400&fit=crop',
    amazonUrl: `https://www.amazon.com/s?k=ceramic+vase+set&tag=${AFFILIATE_TAG}`,
  },
  {
    id: 'curated-5',
    name: 'Cotton Waffle Towels',
    price: '$48',
    image: 'https://images.unsplash.com/photo-1583845112239-97ef1341b271?w=400&h=400&fit=crop',
    amazonUrl: `https://www.amazon.com/s?k=cotton+waffle+towels&tag=${AFFILIATE_TAG}`,
  },
  {
    id: 'curated-6',
    name: 'Wood Bath Stool',
    price: '$105',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=400&h=400&fit=crop',
    amazonUrl: `https://www.amazon.com/s?k=wood+bath+stool&tag=${AFFILIATE_TAG}`,
  },
  {
    id: 'curated-7',
    name: 'Velvet Accent Pillow',
    price: '$42',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop',
    amazonUrl: `https://www.amazon.com/s?k=velvet+accent+pillow&tag=${AFFILIATE_TAG}`,
  },
  {
    id: 'curated-8',
    name: 'Scented Candle Trio',
    price: '$55',
    image: 'https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=400&h=400&fit=crop',
    amazonUrl: `https://www.amazon.com/s?k=scented+candle+trio&tag=${AFFILIATE_TAG}`,
  },
] as const;

// ─── Footer Links ────────────────────────────────────────────────────────────

export const footerExploreLinks: readonly NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'Categories', href: '/categories' },
  { label: 'About', href: '/about' },
] as const;

export const footerConnectLinks: readonly NavLink[] = [
  { label: 'Instagram', href: 'https://instagram.com/hotelshopstudio', isExternal: true },
  { label: 'Pinterest', href: 'https://pinterest.com/hotelshopstudio', isExternal: true },
  { label: 'TikTok', href: 'https://tiktok.com/@hotelshopstudio', isExternal: true },
  { label: 'Amazon', href: 'https://amazon.com/shop/hotelshop', isExternal: true },
] as const;
