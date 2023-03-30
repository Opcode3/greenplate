
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'prazzle-yellow': '#F5BD20',
        'prazzle-gray': '#797575',
        'prazzle-gray-0': '#EEEEEE',
        'prazzle-black': '#121212',
      },
      backgroundImage: {
        'footer-pattern': "url('/images/footer_overlay.png')",
        'sign': "url('/images/bg_sign.jpg')",
      }
    },
    fontFamily: {
      'lato': ['Lato', 'sans-serif'],
      'play-fair': ['"Playfair Display"', 'serif'] 
    }
  },
  plugins: [],
}