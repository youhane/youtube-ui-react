module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '53': '13.8rem',
        '25': '6.8rem',
        '38': '9.5rem',
        '65': '17.9rem',
        '64-5': '16.9rem',
      }
    }
  },
  variants: {
    extend: { },
  },
  plugins: [],
}
