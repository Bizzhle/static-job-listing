

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'spartan': '"Spartan"',
    },
    extend: {
      colors: {
        cyan: {
          light: '#effafa',
          filter: '#eef6f6',
          dark: '#7b8e8e',
          darkest: '#2c3a3a',
          },

        'dark-cyan': '#5ba4a4',

      },
      backgroundImage: theme => ({
        'mobile': "url('images/bg-header-mobile.svg')",
        'desktop': "url('images/bg-header-desktop.svg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
