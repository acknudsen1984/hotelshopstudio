import { getProductUrl, type Product } from "@/lib/products";

type ProductCardProps = {
  readonly product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex flex-col">
      {/* Image placeholder — warm off-white */}
      <div className="aspect-square bg-warm-gray flex items-center justify-center overflow-hidden">
        <span className="text-muted/40 text-xs tracking-widest uppercase font-sans select-none">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col pt-4 pb-6">
        <p className="text-xs text-muted tracking-widest uppercase font-sans mb-1.5">
          {product.category}
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
