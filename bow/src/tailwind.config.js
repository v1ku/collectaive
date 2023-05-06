// tailwind.config.js
const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // enable dark mode
  theme: {
    extend: {
      colors: {
        // define the colors using the values from your theme.js file
        primary: {
          light: colors.red[400],
          DEFAULT: colors.red[500],
          dark: colors.red[600],
        },
        secondary: {
          light: colors.blue[400],
          DEFAULT: colors.blue[500],
          dark: colors.blue[600],
        },
        background: {
          DEFAULT: colors.gray[100],
          dark: colors.gray[900],
        },
        text: {
          primary: colors.slate[900],
          secondary: colors.slate[700],
        },
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
