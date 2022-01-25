module.exports = {
  mode: 'jit',

  dark: 'class',

  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        secondary: '#611f69',
        light: "#5d3d5e",
        darken: "#350d36"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('@tailwindcss/line-clamp'), require('tailwind-scrollbar')],
};
