module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        gray: {
          850: '#24282F',
        },
      },
    },
  },
  variants: {
    extend: {
      grayscale: ['hover'],
      brightness: ['hover'],
    },
  },
  plugins: [],
};
