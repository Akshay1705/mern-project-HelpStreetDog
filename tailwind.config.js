/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./main.html'],
  theme: {
    extend: {
      colors:{
   'grey': '#454444' ,
   'coral': '#e5af73' ,
   'pinkish' : '#f35566',
   'primary' : '#6f6ebd' ,
   'light-brown': '#816c64'  
    },
      fontFamily: {
        'astyle': ['poppins','sans-serif']
      }
    },
  },
  plugins: [],
}

