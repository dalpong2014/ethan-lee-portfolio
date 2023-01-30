// const { urlencoded } = require("express");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
      backgroundImage: {
        aplus: "url('../public/logoaplus.svg')",
        secplus: "url('../public/logosecurityplus.svg')",
      },
      screens: {
        sm: "320px",
        // => @media (min-width: 640px) { ... }

        md: "481px",
        // => @media (min-width: 768px) { ... }

        lg: "769px",
        // => @media (min-width: 1024px) { ... }

        xl: "1025px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1236px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
