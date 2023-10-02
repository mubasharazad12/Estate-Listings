/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: {...colors.sky , DEFAULT:colors.sky[400]},
        secondary: {...colors.sky , DEFAULT:colors.sky[50]},
        border:{...colors.sky , DEFAULT:colors.sky[100]},
        shadow:{...colors.sky , DEFAULT:colors.sky[200]},
        gradient:{...colors.sky , DEFAULT:colors.sky[100]},
    
    },},
    fontFamily: {
      display: ["Onest", "sans-serif"],
    },
    
  },
  plugins: [],
}