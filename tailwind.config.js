/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily:{
        lato:['lato']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

