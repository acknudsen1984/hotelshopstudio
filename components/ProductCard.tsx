import Image from "next/image";
import { getProductUrl, type Product } from "@/lib/products";

type ProductCardProps = {
  readonly product: Product;
};

function getAmazonImageUrl(asin: string): string {
  return `https://images-na.ssl-images-amazon.com/images/P/${asin}.01._SL500_.jpg`;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex flex-col">
      {/* Product image from Amazon */}
      <div className="aspect-square bg-warm-gray overflow-hidden relative">
        <Image
          src={getAmazonImageUrl(product.asin)}
          alt={product.name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
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
