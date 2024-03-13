/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["lato"],
      },
      colors: {
        primary: "#00ACED",
        secondary: "#1dcaff",
        accent: "#15202b",
        grayprimary: " 	#c0deed",
        graysecondary:"#8899ac",
        darkprimary:"#192734",
        darkaccent:" 	#ffffff"
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
