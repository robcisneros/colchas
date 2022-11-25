/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'rojo':'#c1121f',
        'naranja':'#fb8500',
        'verde':'#38b000',
        'rosaFuerte': '#b5838d',
        'rosaClaro': '#ffcdb2',
      },
    },
  },
  plugins: [],
}
