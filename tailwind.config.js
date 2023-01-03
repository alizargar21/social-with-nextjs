/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    
    fontFamily:{
      "Oswald" : ['Oswald' , "Arial"] ,
      "Ubuntu": ["Ubuntu"],
      "Roboto": ["Roboto"]
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      'xl': { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      'lg': { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      'md': { max: "767px" },
      // => @media (max-width: 767px) { ... }

      'sm': { max: "479px" }
      // => @media (max-width: 639px) { ... }
      
    },
    extend: {},
  },
  plugins: [require('prettier-plugin-tailwindcss') ,     require('@tailwindcss/line-clamp'),],
  
};
