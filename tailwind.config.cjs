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
        light: '#F4EEFF',
        E23E57: '#E23E57',
        L88304E: '#88304E',
        D522546: "#522546",
        DD311D3F: '#311D3F',
      },
    },
  },
  plugins: [],
}