/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colori primari
        'verde-bosco': '#2D5016',
        'blu-lago': '#1E4D6B',
        'bianco-pietra': '#F5F2ED',
        'grigio-roccia': '#6B6B6B',
        // Colori accento
        'ambra': '#D4A855',
        'terracotta': '#A85C32',
        'celeste': '#87CEEB',
        'verde-muschio': '#4A7C23',
        // Colori neutri
        'antracite': '#2B2B2B',
        'grigio-caldo': '#9A9A8A',
        'crema': '#FDF8F2',
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Source Sans Pro', 'sans-serif'],
        'accent': ['Josefin Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
