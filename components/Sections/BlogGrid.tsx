'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/data';
import type { BlogCategory } from '@/lib/types';
import DateBadge from '@/components/Common/DateBadge';

const categories: BlogCategory[] = ['All', 'Bedroom', 'Bathroom', 'Kitchen', 'Living Room'];

export default function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>('All');

  const filteredPosts =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <section className="py-16 bg-off-white">
      <div className="max-w-container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            Check Out The Latest
          </h2>

          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <span className="font-sans text-sm text-muted mr-2">Filter:</span>
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value as BlogCategory)}
              className="px-3 py-2 bg-cream border border-warm-beige rounded font-sans text-sm text-charcoal focus:outline-none focus:border-taupe"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              href={post.href}
              className="group block bg-cream rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="relative aspect-[4/2.8]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <DateBadge day={post.day} month={post.month} />
              </div>

              {/* Content */}
              <div className="p-4">
                <span className="font-sans text-xs text-taupe uppercase tracking-wide">
                  {post.category}
                </span>
                <h3 className="font-serif text-xl text-charcoal mt-1 mb-2 line-clamp-2 group-hover:text-taupe transition-colors">
                  {post.title}
                </h3>
                <span className="font-sans text-sm text-taupe group-hover:text-charcoal transition-colors">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="text-center text-muted font-sans py-12">
            No posts found in this category.
          </p>
        )}
      </div>
    </section>
  );
}
