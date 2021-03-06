module.exports = {
  important: false,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cyan: '#9cdbff'
      }
    },
    textColor: theme => ({
      primary: '#032f63',
      white: '#fff',
      gray: theme('colors.gray.500'),
      black: theme('colors.gray.900')
    }),
    backgroundColor: () => ({
      primary: '#032f63',
      gray: '#f9f9f9',
      white: '#fff'
    }),
    borderColor: () => ({
      default: '#cecece',
      primary: '#032f63',
      white: '#fff'
    }),
    fill: theme => ({
      primary: '#032f63',
      white: theme('colors.white')
    })
  },
  variants: {
    textColor: ['hover', 'focus', 'visited'],
    fill: ['hover', 'focus', 'group-hover', 'group-focus']
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
}
