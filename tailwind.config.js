/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily :{
      'hero-font' : 'Quicksand'
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'lg': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '2560px',
      // => @media (min-width: 1536px) { ... }
      
    }
  },
  plugins: [],
}

