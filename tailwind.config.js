/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#A9472C',
          secondary: '#B69A6A',
          dark: '#202525',
          charcoal: '#354040',
          bg: '#F4F0E8',
          text: '#202525',
          muted: '#687070',
          light: '#E9E1D4',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['DM Serif Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
