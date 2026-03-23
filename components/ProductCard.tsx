import { getProductUrl, type Product } from "@/lib/products";

type ProductCardProps = {
  readonly product: Product;
};

// Amazon's Associates image embed URL — loads client-side in browser, bypasses bot protection
function getAmazonImageUrl(asin: string): string {
  return `https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=${asin}&Format=_SL500_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=hotelshop-20`;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex flex-col">
      {/* Product image — uses Amazon Associates embed URL, fetched client-side */}
      <div className="aspect-square bg-warm-gray overflow-hidden relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={getAmazonImageUrl(product.asin)}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col pt-4 pb-6">
        <p className="text-xs text-muted tracking-widest uppercase font-sans mb-1.5">
          {product.category.replace("-", " ")}
        </p>
        <h3 className="font-display text-xl text-charcoal leading-snug font-light">
          {product.name}
        </h3>
        <p className="mt-1.5 text-brass font-sans text-sm font-medium">{product.price}</p>
        <a
          href={getProductUrl(product.asin)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-xs font-sans font-medium tracking-widest uppercase text-charcoal hover:text-brass transition-colors duration-200"
        >
          <span>Shop on Amazon</span>
          <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
        </a>
      </div>
    </div>
  );
}
