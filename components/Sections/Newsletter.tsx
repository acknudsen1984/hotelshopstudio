'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });

      if (response.ok) {
        setStatus('success');
        setName('');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="py-16 bg-warm-beige">
      <div className="max-w-container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-3">
            Get New Finds Weekly
          </h2>
          <p className="font-sans text-base text-charcoal/80 mb-8">
            The best hotel-quality home finds, delivered to your inbox
          </p>

          {status === 'success' ? (
            <div className="p-4 bg-cream rounded-lg">
              <p className="font-sans text-charcoal">
                Thank you for subscribing! Check your inbox soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="First Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 px-4 py-3 bg-white border border-taupe-light rounded font-sans text-sm text-charcoal placeholder:text-muted focus:outline-none focus:border-taupe"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 bg-white border border-taupe-light rounded font-sans text-sm text-charcoal placeholder:text-muted focus:outline-none focus:border-taupe"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-8 py-3 bg-taupe text-white font-sans text-sm rounded hover:bg-taupe-dark transition-colors disabled:opacity-50"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}

          {status === 'error' && (
            <p className="mt-4 font-sans text-sm text-rose">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
