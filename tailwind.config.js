/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      display: ["Onest", "sans-serif"],
    },
    colors:{
      primary: {...colors.sky , DEFAULT:colors.sky[600]},
      secondary: {...colors.blue , DEFAULT:colors.blue[600]},
      neutral:  colors ,
    },
  },
  plugins: [],
}