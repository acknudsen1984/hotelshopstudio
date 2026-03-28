import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        'off-white': '#FBF9F6',
        taupe: {
          DEFAULT: '#B8A89A',
          light: '#D0BFB5',
        },
        'warm-gray': '#C5B8B0',
        rose: {
          DEFAULT: '#D4A5A5',
          light: '#E8D1D1',
        },
        mauve: '#C9B4BE',
        charcoal: {
          DEFAULT: '#3D3D3D',
          dark: '#2B2B2B',
        },
        'warm-beige': '#E8DFD7',
        'warm-border': '#E5D9D0',
        muted: {
          DEFAULT: '#9A8F87',
          light: '#C9B8B0',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins, var(--font-inter))', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      spacing: {
        '103': '6.5rem',
      },
      backgroundColor: {
        cream: '#FAF7F2',
        'off-white': '#FBF9F6',
      },
      textColor: {
        charcoal: '#3D3D3D',
        rose: '#D4A5A5',
        muted: '#9A8F87',
      },
      borderColor: {
        cream: '#FAF7F2',
        'warm-beige': '#E8DFD7',
        rose: '#D4A5A5',
      },
    },
  },
  plugins: [],
};

export default config;
