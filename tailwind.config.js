module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    height: {
      245: '35rem',
    },
    extend: {
      colors: {
        gray: {
          850: '#2d323b',
          825: '#343A45',
        },
      },
    },
  },
  variants: {
    extend: {
      grayscale: ['hover, active, focus'],
      brightness: ['hover, active, focus'],
    },
  },
  plugins: [],
};
