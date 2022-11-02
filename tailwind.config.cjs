/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Dark: '#424874',
        miniDark: '#A6B1E1',
        minimini: '#DCD6F7',
        light: '#F4EEFF'
      },
    },
  },
  plugins: [],
}