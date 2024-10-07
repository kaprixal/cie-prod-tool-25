/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      built: ['BuiltTilting', 'sans-serif'],   // Custom font BuiltTilting
      integral: ['IntegralCF', 'sans-serif'], // Custom font IntegralCF
      sans: ['Arial', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}