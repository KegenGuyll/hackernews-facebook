module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: {
          dark: '#18191A',
          default: '#252526',
          lighter: '#404041',
          light: '#3A3B3D',
        },
      },
      width: {
        200: '672px',
      },
      height: {
        128: '552px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
