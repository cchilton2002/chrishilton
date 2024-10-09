/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito'],
        dmserif: ['"DM Serif Display"'],
        librebask:['"Libre Baskerville"'],
        roboto:['Roboto']
      }
    },
  },
  plugins: [],
}

