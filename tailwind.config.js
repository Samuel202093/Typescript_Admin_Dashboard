/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens:{
      sm: {'max': '639px'},         
      md: {'min': '640px', 'max': '768px'},    
      lg: {'min': '769px', 'max': '1024px'},   
      xl: {'min': '1025px', 'max': '1279px'}, 
      xxl: {'min': '1280px', 'max': '1535px'},
      xmd: {'min': '768px', 'max': '1023px'}, 
      'custom-lg': {'min': '1024px', 'max': '1279px'}
      // sm: '500px',
      // md: '768px',
      // lg: '1024px',
      // xl: '1280px'
    },
    extend: {
      
    },
  },
  plugins: [],
}

