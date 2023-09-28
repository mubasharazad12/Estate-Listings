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
      primary: {...colors.sky , DEFAULT:colors.sky[400]},
      secondary: {...colors.blue , DEFAULT:colors.blue[50]},
      border:{...colors.blue , DEFAULT:colors.blue[100]},
      shadow:{...colors.blue , DEFAULT:colors.blue[200]},
      neutral:  colors ,
    },
  },
  plugins: [],
}