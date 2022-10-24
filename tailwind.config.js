module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    boxShadow:{
      'up':'0 -3px 15px lightgray',
      'down':'0 3px 15px lightgray'
    },
  },
  variants: {
    extend: {
      backgroundColor:['checked'],
      boxShadow: ['active'],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}