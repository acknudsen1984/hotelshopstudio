export type Product = {
  readonly name: string;
  readonly price: string;
  readonly category: string;
  readonly asin: string;
  readonly featured: boolean;
};

export const AFFILIATE_TAG = "hotelshop-20";

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
    name: "Vanity Organizer Set",
    price: "$33",
    category: "bathroom",
    asin: "PLACEHOLDER",
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
    name: "Waffle Bath Rug",
    price: "$20",
    category: "bathroom",
    asin: "PLACEHOLDER",
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
    price: "$47",
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
    name: "Calcite Spoon Rest",
    price: "$44",
    category: "kitchen",
    asin: "B0977L9VSZ",
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
    name: "Dish Towels",
    price: "$29",
    category: "kitchen",
    asin: "PLACEHOLDER",
    featured: false,
  },
  {
    name: "Trivets",
    price: "$15",
    category: "kitchen",
    asin: "B086HX2M8L",
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
    name: "Calacatta Dish",
    price: "$44",
    category: "bedroom",
    asin: "B0C17JMZ8Q",
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
    name: "Ceramic Candle",
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
    name: "Ceramic Candle",
    price: "$40",
    category: "home-essentials",
    asin: "B0DJG6RPWV",
    featured: true,
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
    name: "Footed Catchall",
    price: "$37",
    category: "home-essentials",
    asin: "B0DDWQNRBG",
    featured: false,
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
    asin: "PLACEHOLDER",
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
export const ROOMS = CATEGORIES.map(c => ({ slug: c.slug, label: c.label, emoji: "" }));
