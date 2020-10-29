module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        'dc-accent': '#f73859',
        'dc-fg': '#f3ecc8',
        'dc-bg': '#404b69',
        'dc-bg-dark': '#283149'
      },
      fontFamily: {
        'main' : ['Roboto', 'sans-serif']
      },
      transitionProperty: {
        'bg': 'background-color'
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    borderColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
}
