/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        darkGold: '#AA8C2C',
        jewel: '#1a1a1a',
        lightBg: '#F5F5F5',
        accentGold: '#FFD700',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        gold: '0 4px 20px rgba(212, 175, 55, 0.3)',
        'gold-lg': '0 10px 30px rgba(212, 175, 55, 0.4)',
      },
    },
  },
  plugins: [],
}
