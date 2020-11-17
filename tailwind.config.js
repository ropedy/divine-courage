module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    mode: 'layers',
    layers: ['components', 'utilities'],
    content: [
      './index.html',
      './src/**/*.js'
    ],
  },
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
        'bg': 'background-color',
        'm-h': 'max-height'
      },
      spacing: {
        '120': '30rem'
      },
      maxWidth: {
        '120': '30rem',
        '160': '40rem',
        '200': '50rem',
        '240': '60rem'
      },
      height: {
        'content': 'fit-content'
      },
      margin: {
        '-2px': '-2px'
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
