/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        black: '#000000',
        midnight: '#07224A',
        navyBlue: '#2d3e5e',
        spaceCadet: '#1D345D', // Petroleum blue
        customGrey: '#2B2F32',
        azure: '#0084FF', // vibrant blue
        spanishBlue: '#53B4DE', // jade blue
        oceanBlue: '#DCEAFF',
        greyBlue: '#7AACFA',
        whiteBlue: '#E3EDFC', // white blueish
        fairBlue: '#CDDFFA',
        lightBlue: '#6B8ECD', // light blue
        niceBlue: '#F0F6FF',
        white: '#F2F2F2',
        white2: '#F2F6FC',
        white3: '#E3EDFC',
        transparent: 'transparent',
        gold: '#F5E105',
        tan: '#F2DABB',
        bronze: '#cca674',
        sand: '#A89269',
        moon: '#2D3F59'
  
      },

      screens: {
        'xs': '320px',
        'sm': '380px',
        'md': '420px',
        'base': '500px',
        'lg': '650px',
        'xl': '1100px',
        '2xl': '1300px',
        '3xl': '1500px',
        
      },
  
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
        bai: ['Bai Jamjuree' , 'sans-serif'],
        cursive: ['WindSong', 'cursive'],
        anybody: ['Anybody', 'sans-serif'],
        inter: ["Inter", 'sans-serif']
      },
      
      backgroundImage: {
        'custom-gradient-btn': 'linear-gradient(135deg, rgba(6,147,227,1) 0%, rgb(155,81,224) 100%)',
      }
    
      
    },
    plugins: [],
  }

}





