import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette from spec
        'off-white': '#F5F3F0',
        taupe: {
          DEFAULT: '#A0978E',
          light: '#BCB2A6',
          dark: '#8A8179',
        },
        'dark-gray': '#3C3C3C',
        // Supporting colors
        cream: '#FAF7F2',
        ivory: '#F9F5ED',
        linen: '#F7F3F1',
        limestone: '#EFECE8',
        oat: '#EDE3D6',
        mink: '#BCB2A6',
        'warm-border': '#E5DDD5',
        // Accents
        rose: {
          DEFAULT: '#D4A5A5',
          light: '#E8D1D1',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'Garamond', 'serif'],
        sans: ['var(--font-poppins)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        'content': '1200px',
      },
      spacing: {
        'section': '100px',
        'section-sm': '60px',
        'gutter': '24px',
      },
    },
  },
  plugins: [],
};

export default config;
