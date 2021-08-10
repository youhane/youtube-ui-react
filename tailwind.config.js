module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '53': '13.6rem',
        '25': '6.8rem',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
