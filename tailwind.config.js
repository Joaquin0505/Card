/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#151515",
        cream: "#F5DB82",
        sky: "#83D9F5",
        color1: '#179957',
        color2: '#184D47'
      },
      container:{
        center: true,
        padding: "15px"
      },
 
    },
  },
  plugins: [],
}

