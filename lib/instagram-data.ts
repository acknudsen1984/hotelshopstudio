import type { InstagramCard } from "./types";

export const INSTAGRAM_CARDS: readonly InstagramCard[] = [
  {
    id: "ig-morning-ritual",
    title: "Morning Ritual",
    subtitle: "Spa-quality pieces for your daily routine",
    videoThumbnail: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=800&fit=crop&q=80",
    category: "bathroom",
    products: [
      {
        name: "Luxury Waffle Robe",
        price: "$90",
        asin: "B0DX46HDNM",
        image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=300&h=300&fit=crop&q=80",
      },
      {
        name: "Wood Stool",
        price: "$105",
        asin: "B0CTD1S78R",
        image: "https://images.unsplash.com/photo-1552321207-f7b1a1b8f2f0?w=300&h=300&fit=crop&q=80",
      },
      {
        name: "Incense",
        price: "$50",
        asin: "B0CHSGQZZ5",
        image: "https://images.unsplash.com/photo-1541803520897-f4c6edf0bdbf?w=300&h=300&fit=crop&q=80",
      },
    ],
  },
  {
    id: "ig-dinner-setting",
    title: "Dinner Table Setting",
    subtitle: "Elevated dining for every occasion",
    videoThumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop&q=80",
    category: "kitchen",
    products: [
      {
        name: "Olive Oil Cruet",
        price: "$46",
        asin: "B00T4AOM06",
        image: "https://images.unsplash.com/photo-1556227702-c4a46b8e7dff?w=300&h=300&fit=crop&q=80",
      },
      {
        name: "Silver Tray",
        price: "$33",
        asin: "B09J6C4ZFM",
        image: "https://images.unsplash.com/photo-1504674900967-a8f32de4490d?w=300&h=300&fit=crop&q=80",
      },
      {
        name: "Marble Cutting Board",
        price: "$44",
        asin: "B07NC7BRG2",
        image: "https://images.unsplash.com/photo-1556225286-c8f74a72d0d0?w=300&h=300&fit=crop&q=80",
      },
    ],
  },
  {
    id: "ig-sleep-sanctuary",
    title: "Sleep Sanctuary",
    subtitle: "Comfort and calm for restful nights",
    videoThumbnail: "https://images.unsplash.com/photo-1540932239986-310128078ceb?w=600&h=800&fit=crop&q=80",
    category: "bedroom",
    products: [
      {
        name: "Table Lamp",
        price: "$187",
        asin: "B0CX95Y7YF",
        image: "https://images.unsplash.com/photo-1540554388-f5a4db1e29d5?w=300&h=300&fit=crop&q=80",
      },
      {
        name: "Waffle Weave Pillowcases",
        price: "$24",
        asin: "B0CFF562SK",
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop&q=80",
      },
      {
        name: "Linen Euro Shams",
        price: "$38",
        asin: "B0917SZRRN",
        image: "https://images.unsplash.com/photo-1565182999555-4b6588b3124d?w=300&h=300&fit=crop&q=80",
      },
    ],
  },
  {
    id: "ig-living-spaces",
    title: "Living Spaces",
    subtitle: "Thoughtful accents for every corner",
    videoThumbnail: "https://images.unsplash.com/photo-1609022615485-e21b58d17d40?w=600&h=800&fit=crop&q=80",
    category: "home-essentials",
    products: [
      {
        name: "Wavy Key Bowl",
        price: "$44",
        asin: "B0FZD3CJ1L",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop&q=80",
      },
      {
        name: "Stone Bookends",
        price: "$36",
        asin: "B0D9GNFGQC",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8e2d9b49?w=300&h=300&fit=crop&q=80",
      },
      {
        name: "Tortoises Vase",
        price: "$37",
        asin: "B0FHQ1T4PR",
        image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=300&h=300&fit=crop&q=80",
      },
    ],
  },
] as const;
