export type Product = {
  readonly name: string;
  readonly price: string;
  readonly category: string;
  readonly asin: string;
  readonly featured: boolean;
  readonly image?: string;
};

export const AFFILIATE_TAG = "hotelshop-20";

// Placeholder image generator using unsplash
const categoryImages: Record<string, string[]> = {
  bathroom: [
    "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1584622181054-ca0e8135cf17?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1595909952054-b51ef97b64f0?w=500&h=500&fit=crop",
  ],
  bedroom: [
    "https://images.unsplash.com/photo-1540932239986-310128078ceb?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1505693314967-2d71bcdd2724?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1631049307038-da0ec36d9c46?w=500&h=500&fit=crop",
  ],
  kitchen: [
    "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop",
  ],
  decor: [
    "https://images.unsplash.com/photo-1609022615485-e21b58d17d40?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop",
  ],
  "home-essentials": [
    "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1585399781437-d3023142da6b?w=500&h=500&fit=crop",
  ],
};

export function getProductImage(product: Product): string {
  if (product.image) return product.image;
  
  const imgs = categoryImages[product.category] || categoryImages.bathroom;
  // Use product name hash to pick consistent image
  const hash = product.name.charCodeAt(0) + product.name.charCodeAt(product.name.length - 1);
  return imgs[hash % imgs.length];
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
