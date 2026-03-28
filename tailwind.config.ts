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
          dark: '#9A8070',
        },
        rose: {
          DEFAULT: '#D4A5A5',
          light: '#E8D1D1',
        },
        charcoal: {
          DEFAULT: '#3D3D3D',
          dark: '#2B2B2B',
        },
        'warm-beige': '#E8DFD7',
        muted: '#9A8F87',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};

export default config;
