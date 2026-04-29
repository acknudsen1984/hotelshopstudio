'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { snapshots } from '@/lib/data';
import DateBadge from '@/components/Common/DateBadge';

const ITEMS_PER_LOAD = 12;

export default function RecentFinds() {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

  const visibleSnapshots = snapshots.slice(0, visibleCount);
  const hasMore = visibleCount < snapshots.length;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + ITEMS_PER_LOAD, snapshots.length));
  };

  return (
    <section className="py-16 bg-cream">
      <div className="max-w-container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            Recent Finds
          </h2>
          <Link
            href="/finds"
            className="font-sans text-sm text-taupe hover:text-charcoal transition-colors"
          >
            See All →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {visibleSnapshots.map((snapshot) => (
            <a
              key={snapshot.id}
              href={snapshot.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-lg overflow-hidden"
            >
              <Image
                src={snapshot.image}
                alt={`Find from ${snapshot.month} ${snapshot.day}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                loading="lazy"
              />
              <DateBadge day={snapshot.day} month={snapshot.month} />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300" />
            </a>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className="px-8 py-3 bg-taupe text-white font-sans text-sm rounded hover:bg-taupe-dark transition-colors"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
