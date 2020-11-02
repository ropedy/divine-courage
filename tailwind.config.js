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
      },
      spacing: {
        '120': '30rem'
      },
      maxWidth: {
        '120': '30rem'
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
    borderColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
    textColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
    cursor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
  },
  plugins: [],
}
