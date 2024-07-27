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
        'sm': '320px',
        'md': '420px',
        'base': '500px',
        'lg-sm': '600px',
        'lg-md': '650px',
        'lg': '700px',
        'lg-xl': '750px',        
        'xl-sm': '800px',        
        'xl-md': '850px',        
        'xl': '900px',        
        'xl-lg': '950px',
        'xl-xl': '1000px',
        'xl-2xl': '1050px',
        'xl-3xl': '1100px',
        '2xl-sm': '1150px',
        '2xl-md': '1200px',
        '2xl-lg': '1250px',
        '2xl': '1300px',
        '2xl-xl': '1350px',
        '3xl-sm': '1400px',
        '3xl-md': '1450px',
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
        'custom-gradient-bg-cards': 'linear-gradient(135deg, rgba(6,147,227,1) 0%, rgb(155,81,224) 100%);'
      },

      gridTemplateColumns: {
        'card-service': '80px 1fr calc(var(--w-image) * var(--calculate))'
      }
    
      
    },
    plugins: [],
  }

}





