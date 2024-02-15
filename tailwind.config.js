/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens:{
      // sm: {'max': '639px'},         
      // lg: {'min': '769px', 'max': '1024px'},   
      // xl: {'min': '1024px', 'max': '1279px'}, 
      // xxl: {'min': '1280px', 'max': '1535px'},
      // xmd: {'min': '768px', 'max': '1023px'}, 
      // xlg: {'min': '1024px', 'max': '1279px'},
      // md: {'min': '688px', 'max': '768px'},    
      sm: '500px',
      md: '768px',
      xmd: '688px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      
    },
  },
  plugins: [],
}

