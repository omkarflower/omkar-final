/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: '#F8D7DA',
        cream: '#FFF8F0',
        sage: '#9CAF88',
        'floral-green': '#2F4F4F',
        gold: '#C6A75E',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
      }
    },
  },
  plugins: [],
}

