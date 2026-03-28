export type Product = {
  readonly name: string;
  readonly price: string;
  readonly category: string;
  readonly asin: string;
  readonly featured: boolean;
  readonly image?: string;
};

export const AFFILIATE_TAG = "hotelshop-20";

// Diverse, high-quality Unsplash images for each category
const categoryImages: Record<string, string[]> = {
  bathroom: [
    "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1552919235-eb0df08b4053?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1572296422352-4da5c87f1baf?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1552321207-f7b1a1b8f2f0?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1541803520897-f4c6edf0bdbf?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1584622614875-2f3ee969885a?w=500&h=500&fit=crop",
  ],
  bedroom: [
    "https://images.unsplash.com/photo-1540932239986-310128078ceb?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1540554388-f5a4db1e29d5?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1542623530-d2c3201371e7?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1565182999555-4b6588b3124d?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=500&fit=crop",
  ],
  kitchen: [
    "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1556225286-c8f74a72d0d0?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1556227702-c4a46b8e7dff?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1556227702-c4a46b8e7dff?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1504674900967-a8f32de4490d?w=500&h=500&fit=crop",
  ],
  "home-essentials": [
    "https://images.unsplash.com/photo-1609022615485-e21b58d17d40?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1595909496a30-f6d0fe2e94e5?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1618005182384-a83a8e2d9b49?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1525909002519-a7bae20f8d68?w=500&h=500&fit=crop",
  ],
};

// Robust image URL generator with consistent, diverse selection
export function getProductImage(product: Product): string {
  if (product.image) return product.image;
  
  const imgs = categoryImages[product.category] || categoryImages["home-essentials"];
  
  // Use product name hash to pick a consistent image deterministically
  let hash = 0;
  for (let i = 0; i < product.name.length; i++) {
    hash = ((hash << 5) - hash) + product.name.charCodeAt(i);
    hash = hash & hash; // Convert to 32-bit integer
  }
  
  const index = Math.abs(hash) % imgs.length;
  const img = imgs[index];
  
  // Ensure URL is properly formatted and accessible
  return img && img.startsWith('https://') ? img : imgs[0];
}

export const products: readonly Product[] = [
  {
    name: "Wood Stool",
    price: "$105",
    category: "bathroom",
    asin: "B0CTD1S78R",
    featured: true,
  },
  {
    name: "Luxury Waffle Robe",
    price: "$90",
    category: "bathroom",
    asin: "B0DX46HDNM",
    featured: true,
  },
  {
    name: "Incense",
    price: "$50",
    category: "bathroom",
    asin: "B0CHSGQZZ5",
    featured: true,
  },
  {
    name: "Under Sink Organizer",
    price: "$50",
    category: "bathroom",
    asin: "B0F43YC7TV",
    featured: true,
  },
  {
    name: "Woven Trash Bin",
    price: "$47",
    category: "bathroom",
    asin: "B0CMZF9RTT",
    featured: true,
  },
  {
    name: "Calacatta Dish",
    price: "$44",
    category: "bathroom",
    asin: "B0C17JMZ8Q",
    featured: true,
  },
  {
    name: "Soap Dispensers",
    price: "$44",
    category: "bathroom",
    asin: "B08T1H82VR",
    featured: false,
  },
  {
    name: "Luxury Towel Set",
    price: "$44",
    category: "bathroom",
    asin: "B0FJ2RMWCM",
    featured: false,
  },
  {
    name: "Roller Hamper",
    price: "$38",
    category: "bathroom",
    asin: "B0CQ4N8334",
    featured: false,
  },
  {
    name: "Bathroom Accessories",
    price: "$37",
    category: "bathroom",
    asin: "B0CZ93QW1S",
    featured: false,
  },
  {
    name: "Brush Holder",
    price: "$36",
    category: "bathroom",
    asin: "B0DPZRQGKS",
    featured: false,
  },
  {
    name: "Organizational Drawers",
    price: "$36",
    category: "bathroom",
    asin: "B0DB5MH7YQ",
    featured: false,
  },
  {
    name: "Hooks Set of 5",
    price: "$30",
    category: "bathroom",
    asin: "B0CQ7X2GF2",
    featured: false,
  },
  {
    name: "Night Light",
    price: "$26",
    category: "bathroom",
    asin: "B0D4QV9QT1",
    featured: false,
  },
  {
    name: "Toilet Brush",
    price: "$23",
    category: "bathroom",
    asin: "B07HSJ2RL2",
    featured: false,
  },
  {
    name: "Wood Tissue Cover",
    price: "$20",
    category: "bathroom",
    asin: "B0CPDSLC84",
    featured: false,
  },
  {
    name: "Metal Toothbrush Holder",
    price: "$16",
    category: "bathroom",
    asin: "B003VRNS08",
    featured: false,
  },
  {
    name: "Olive Oil Cruet",
    price: "$46",
    category: "kitchen",
    asin: "B00T4AOM06",
    featured: true,
  },
  {
    name: "Dish Drying Mat",
    price: "$44",
    category: "kitchen",
    asin: "B0FHJXZ1WG",
    featured: true,
  },

  {
    name: "Fruit Bowl",
    price: "$40",
    category: "kitchen",
    asin: "B0D382TXK1",
    featured: false,
  },

  {
    name: "Clean Dirty Sign",
    price: "$37",
    category: "kitchen",
    asin: "B0D2MQ26YF",
    featured: false,
  },
  {
    name: "Bag Storage Organizer",
    price: "$23",
    category: "kitchen",
    asin: "B09F9LHD91",
    featured: false,
  },
  {
    name: "Stainless Steel Crock",
    price: "$24",
    category: "kitchen",
    asin: "B0DMTLF5Z3",
    featured: false,
  },
  {
    name: "Lazy Susan",
    price: "$16",
    category: "kitchen",
    asin: "B001G9CN9A",
    featured: false,
  },
  {
    name: "Soap Dispensers (Kitchen)",
    price: "$33",
    category: "kitchen",
    asin: "B0CTMPBFLS",
    featured: false,
  },
  {
    name: "Salt Cellar",
    price: "$160",
    category: "kitchen",
    asin: "B0BJTBMF7D",
    featured: false,
  },
  {
    name: "Cast Iron Candelabra",
    price: "$98",
    category: "kitchen",
    asin: "B0DK3G7N5Z",
    featured: false,
  },
  {
    name: "Silver Tray",
    price: "$33",
    category: "kitchen",
    asin: "B09J6C4ZFM",
    featured: false,
  },
  {
    name: "Marble Cutting Board",
    price: "$44",
    category: "kitchen",
    asin: "B07NC7BRG2",
    featured: false,
  },
  {
    name: "Paper Towel Holder",
    price: "$37",
    category: "kitchen",
    asin: "B0FDS3VTD3",
    featured: false,
  },
  {
    name: "Potholders",
    price: "$98",
    category: "kitchen",
    asin: "B08J8GZXKZ",
    featured: false,
  },
  {
    name: "Sponge Holder",
    price: "$27",
    category: "kitchen",
    asin: "B0F13PJC47",
    featured: false,
  },
  {
    name: "Utensil Organizer",
    price: "$47",
    category: "kitchen",
    asin: "B09Y54QX2Z",
    featured: false,
  },
  {
    name: "Waffle Weave Pillowcases",
    price: "$24",
    category: "bedroom",
    asin: "B0CFF562SK",
    featured: true,
  },
  {
    name: "Table Lamp",
    price: "$187",
    category: "bedroom",
    asin: "B0CX95Y7YF",
    featured: true,
  },
  {
    name: "Magnetic Cord Holder",
    price: "$20",
    category: "bedroom",
    asin: "B07BB4YXHW",
    featured: false,
  },
  {
    name: "Stackable Flat Jewelry Tray",
    price: "$40",
    category: "bedroom",
    asin: "B07ZCMRRFP",
    featured: false,
  },
  {
    name: "Fig Leaf & Lemon Ceramic Candle",
    price: "$40",
    category: "bedroom",
    asin: "B0DJG6RPWV",
    featured: false,
  },
  {
    name: "Boucle Lumbar Pillow Case",
    price: "$20",
    category: "bedroom",
    asin: "B0FKGMPP84",
    featured: false,
  },
  {
    name: "Incense Cone Diffuser",
    price: "$27",
    category: "bedroom",
    asin: "B0DH7G6PTC",
    featured: false,
  },
  {
    name: "Leather Boxes",
    price: "$75",
    category: "bedroom",
    asin: "B0C5F576K6",
    featured: false,
  },
  {
    name: "Footed Catchall",
    price: "$68",
    category: "bedroom",
    asin: "B0DDWQNRBG",
    featured: false,
  },
  {
    name: "Bedside Lamp",
    price: "$70",
    category: "bedroom",
    asin: "B0DNKJVVQ1",
    featured: false,
  },
  {
    name: "Floor Full Length Mirror",
    price: "$117",
    category: "bedroom",
    asin: "B0F2HPCPL4",
    featured: false,
  },
  {
    name: "Throw Pillowcase",
    price: "$16",
    category: "bedroom",
    asin: "B0F37VWZ8C",
    featured: false,
  },
  {
    name: "Linen Euro Shams",
    price: "$38",
    category: "bedroom",
    asin: "B0917SZRRN",
    featured: false,
  },
  {
    name: "Organizational Box",
    price: "$34",
    category: "bedroom",
    asin: "B0FKCXB1QH",
    featured: false,
  },
  {
    name: "Side Table",
    price: "$272",
    category: "bedroom",
    asin: "B0F2GYHPDX",
    featured: false,
  },
  {
    name: "Velvet Bench",
    price: "$180",
    category: "bedroom",
    asin: "B0G2X3NQGX",
    featured: false,
  },
  {
    name: "6ft Artificial Sumac Tree",
    price: "$126",
    category: "bedroom",
    asin: "B0FGXPHVVC",
    featured: false,
  },
  {
    name: "Concrete Coffee Table",
    price: "$407",
    category: "bedroom",
    asin: "B0DPLBX5P5",
    featured: false,
  },
  {
    name: "Wavy Key Bowl",
    price: "$44",
    category: "home-essentials",
    asin: "B0FZD3CJ1L",
    featured: true,
  },
  {
    name: "Tortoises Vase",
    price: "$37",
    category: "home-essentials",
    asin: "B0FHQ1T4PR",
    featured: true,
  },
  {
    name: "Silver Tray",
    price: "$33",
    category: "home-essentials",
    asin: "B09J6C4ZFM",
    featured: false,
  },
  {
    name: "Throw Pillows",
    price: "$20",
    category: "home-essentials",
    asin: "B0D14RSYDD",
    featured: false,
  },
  {
    name: "Stone Bookends",
    price: "$36",
    category: "home-essentials",
    asin: "B0D9GNFGQC",
    featured: false,
  },
  {
    name: "Self Watering Pots",
    price: "$16",
    category: "home-essentials",
    asin: "B09KP7ZJJC",
    featured: false,
  },
  {
    name: "Resin Hooks Set of 4",
    price: "$23",
    category: "home-essentials",
    asin: "B0FQ9M7G52",
    featured: false,
  },
  {
    name: "Stone Bowl",
    price: "$30",
    category: "home-essentials",
    asin: "B0BYJN6MHF",
    featured: false,
  },
  {
    name: "Wall Mounted Shelf",
    price: "$36",
    category: "home-essentials",
    asin: "B0C5S23CX1",
    featured: false,
  },
  {
    name: "Travertine Tissue Box",
    price: "$30",
    category: "home-essentials",
    asin: "B0D86V6KTX",
    featured: false,
  },
  {
    name: "Basket Storage",
    price: "$32",
    category: "home-essentials",
    asin: "B0D14LCYC2",
    featured: false,
  },
  {
    name: "Wood Catchall Box",
    price: "$24",
    category: "home-essentials",
    asin: "B0CQN12G6Q",
    featured: false,
  },
  {
    name: "Woven Storage Boxes",
    price: "$33",
    category: "home-essentials",
    asin: "B088R37XWZ",
    featured: false,
  },
  {
    name: "Basket Set of 4",
    price: "$44",
    category: "home-essentials",
    asin: "B0DGL38TXK",
    featured: false,
  },
  {
    name: "Under Sink Storage",
    price: "$37",
    category: "home-essentials",
    asin: "B0DTJVK5Z2",
    featured: false,
  },

  {
    name: "Throw Pillows",
    price: "$20",
    category: "home-essentials",
    asin: "B0G4GBS1RB",
    featured: false,
  },
  {
    name: "Leather Throw Pillow",
    price: "$60",
    category: "home-essentials",
    asin: "B0D5YMCVMM",
    featured: false,
  },
  {
    name: "Ceramic Candle Set",
    price: "$40",
    category: "home-essentials",
    asin: "B0DJG7PPJ4",
    featured: false,
  },
  {
    name: "Down Alternative Bed Pillows (Queen)",
    price: "$39",
    category: "bedroom",
    asin: "B01LYNW421",
    featured: false,
  },
] as const;

export function getProductUrl(asin: string): string {
  if (asin === "PLACEHOLDER") return "https://www.amazon.com/?tag=" + AFFILIATE_TAG;
  return `https://amazon.com/dp/${asin}?tag=${AFFILIATE_TAG}`;
}

export function getProductsByCategory(category: string): readonly Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): readonly Product[] {
  return products.filter((p) => p.featured);
}

export const CATEGORIES = [
  { slug: "bathroom", label: "Hotel Bathroom", href: "/hotel-bathroom" },
  { slug: "kitchen", label: "Hotel Kitchen", href: "/hotel-kitchen" },
  { slug: "bedroom", label: "Hotel Bedroom", href: "/hotel-bedroom" },
  { slug: "home-essentials", label: "Home Essentials", href: "/home-essentials" },
] as const;

// Compatibility aliases
export const getProductsByRoom = getProductsByCategory;
export const ROOMS = CATEGORIES.map(c => ({ slug: c.slug, label: c.label, emoji: "" as string }));
