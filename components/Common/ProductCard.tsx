'use client';

import Image from 'next/image';

type ProductCardProps = {
  readonly name: string;
  readonly price?: string;
  readonly image: string;
  readonly amazonUrl: string;
  readonly variant?: 'default' | 'small' | 'curated';
};

export default function ProductCard({
  name,
  price,
  image,
  amazonUrl,
  variant = 'default',
}: ProductCardProps) {
  const sizeClasses = {
    default: 'w-[100px] h-[100px]',
    small: 'w-[80px] h-[80px]',
    curated: 'w-full aspect-square',
  };

  return (
    <a
      href={amazonUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className={`relative ${sizeClasses[variant]} overflow-hidden rounded bg-warm-beige`}>
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes={variant === 'curated' ? '(max-width: 640px) 50vw, 200px' : '100px'}
        />
      </div>
      {(variant === 'curated' || variant === 'default') && (
        <div className="mt-2">
          <p className="font-sans text-sm text-charcoal truncate">{name}</p>
          {price && (
            <p className="font-sans text-sm text-taupe">{price}</p>
          )}
        </div>
      )}
    </a>
  );
}
