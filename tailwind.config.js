/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./main.html'],
  safelist:['no-scrollbar'],
  theme: {
    extend: {
      colors:{
   'grey': '#454444' ,
   'coral': '#e5af73' ,
   'pinkish' : '#f35566',
   'primary' : '#6f6ebd' , 
   'primaryb' : '#001A6E' ,
   'light-brown': '#816c64'  ,
   'dark-brown' : '#440F50'
    },
      fontFamily: {
        'astyle': ['poppins','sans-serif']
      }
    },
  },
  plugins: [],
}

