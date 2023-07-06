/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "lighter-gray": "#292d36",
        "darker-gray": "#272b33",
        "darkest-gray": "#22252d",
        "mint": "#26fad3",
        "brick": "#ea6565"
      },
    },
  },
  plugins: [],
}