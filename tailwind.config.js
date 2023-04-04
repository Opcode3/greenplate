
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
        'r-black': '#2D333F',
      },
      backgroundImage: {
        'search-pattern': "url('/images/bgs.png')",
        'sign': "url('/images/bg_sign.jpg')",
      }
    },
    fontFamily: {
      'lato': ['Lato', 'sans-serif'],
      'play-fair': ['"Playfair Display"', 'serif'] 
    }
  },
  images: {
      domains: ["localhost:3000"],
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '3000',
          // pathname: '/account123/**',
        },
      ],
  },
  plugins: [],
}