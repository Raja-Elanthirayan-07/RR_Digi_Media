/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#D92B2B',
          secondary: '#F47920',
          dark: '#1A1A1A',
          charcoal: '#2D2D2D',
          bg: '#F9F9F9',
          text: '#1E1E1E',
          muted: '#6B6B6B',
          light: '#FFF5F0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
