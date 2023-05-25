/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
  ],
  theme: {
    container:{
      center:true,
      padding:'32px',
    },
    extend: {
      colors:{
        primary:'#3A98B9',
        secondary:'#64748b',
        dark:'#0f172a',
      },
      screens :{
        '2xl':'1320px', 
      },
    },
  },
  plugins: [],
}

