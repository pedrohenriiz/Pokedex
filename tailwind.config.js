const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lime: colors.lime,
        amber: colors.amber,
        rose: colors.rose,
        blueGray: colors.blueGray,
      },
    },
    fontFamily: {
      body: ['Kanit'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
