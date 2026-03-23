import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getProductsByRoom, ROOMS } from "@/lib/products";
import Link from "next/link";

type ShopPageProps = {
  params: Promise<{ room: string }>;
};

export async function generateMetadata({ params }: ShopPageProps): Promise<Metadata> {
  const { room } = await params;
  const roomInfo = ROOMS.find((r) => r.slug === room);
  const label = roomInfo?.label ?? room;

  return {
    title: `${label} — Hotel Shop`,
    description: `Curated hotel-quality ${label.toLowerCase()} finds on Amazon.`,
  };
}

export function generateStaticParams() {
  return ROOMS.map((room) => ({ room: room.slug }));
}

export default async function ShopPage({ params }: ShopPageProps) {
  const { room } = await params;
  const roomInfo = ROOMS.find((r) => r.slug === room);
  const label = roomInfo?.label ?? room;
  const roomProducts = getProductsByRoom(room);

  return (
    <>
      <Nav />

      <main className="flex-1">
        {/* Room tabs */}
        <div className="border-b border-border bg-off-white">
          <div className="mx-auto max-w-6xl px-5 flex gap-6 overflow-x-auto py-4">
            {ROOMS.map((r) => (
              <Link
                key={r.slug}
                href={`/shop/${r.slug}`}
                className={`shrink-0 text-xs font-sans tracking-widest uppercase transition-colors pb-1 ${
                  r.slug === room
                    ? "text-charcoal border-b border-charcoal"
                    : "text-muted hover:text-charcoal"
                }`}
              >
                {r.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <div className="mb-12">
            <p className="text-xs text-brass tracking-widest uppercase font-sans mb-4">The Edit</p>
            <h1 className="font-display text-4xl sm:text-5xl text-charcoal font-light">
              {label}
            </h1>
          </div>

          {roomProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-16">
              {roomProducts.map((product, i) => (
                <ProductCard key={`${product.name}-${i}`} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-16">
              <p className="text-muted text-sm font-sans">
                Coming soon — curating the best finds for this room.
              </p>
              <Link
                href="/hotel-bathroom"
                className="mt-4 inline-block text-xs font-sans font-medium tracking-widest uppercase text-brass hover:text-charcoal transition-colors"
              >
                Browse Bathroom →
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
