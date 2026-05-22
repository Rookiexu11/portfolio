/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          50:  '#e6f4ff',
          100: '#b3dcff',
          200: '#80c4ff',
          300: '#4dacff',
          400: '#1a94ff',
          500: '#0078e7',
          600: '#005eb4',
          700: '#004481',
          800: '#002a4e',
          900: '#00101b',
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in':    'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
