/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'crimson': '#DC143C',
        'bright-red': '#FF1744',
        'soft-pink': '#FFE5E5',
        'dark-red': '#8B0000',
      },
      fontFamily: {
        'display': ['Playfair Display', 'Cormorant Garamond', 'serif'],
        'body': ['Quicksand', 'Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
