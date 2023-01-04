const { urlencoded } = require("express");

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
    },
  },
  plugins: [],
  darkMode: "class",
};
