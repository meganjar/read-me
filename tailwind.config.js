/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,html,css}"
  ],
  theme: {
    extend: {
      colors: {
        black: "#191A1F",
        white: "#CBD4D3",
        yellow: "#F6B774",
        green: "#3D6B1F",
        brown: "#A0683C"
      }
    },
  },
  plugins: [],
}

