/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        mainfont:["Lato" , "sans-serif"],
        hfont:["Italianno", "sans-serif"],
        aboutfont:["Lobster", "sans-serif"],
        nicefont:["Bricolage Grotesque", "sans-serif"]
      },
      scale: {
        '102': '1.07',
        '110': '1.10',
        '125': '1.25',
        '127':'1.35',
        '150': '1.50',
      },
      screens: {
        
        'sm': '350px',
  
        'md': '768px',
       
        'lg': '1024px',
      
        'xl': '1280px',
        
        '2xl': '1536px',
        
      }
     
    },
    
  },
  plugins: [
    require('daisyui'),
    require('tailwindcss-animated'),
    require('tailwind-scrollbar'),
  ],
}

