/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#18181B",
        mid: "#A1A1AA",
        light: "#F8F8F8",
        brand: "#F59E0B",
      },
      fontFamily: {
        poppins: "poppins",
      },
    },
  },
  plugins: [],
};
