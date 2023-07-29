/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        color1: "#EBEBFB",
        color2: "#84859C",
        color3: "#9B9FBAs",
        color4: "#162053",
        color5: "#747C94",
        color6: "#B4B4BC",
      },
      fontFamily: {
        poppins: "Poppins. sans-serif",
        merriweather: "Merriweather, serif",
      },
    },
  },
  plugins: [],
}
