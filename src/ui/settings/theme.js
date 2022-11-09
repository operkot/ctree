import { defaultTheme } from '@xstyled/styled-components'

const breakpoints = ['375px', '768px', '992px', '1200px', '1536px']

const theme = {
  ...defaultTheme,
  screens: {
    _: 0,
    xs: breakpoints[0],
    sm: breakpoints[1],
    md: breakpoints[2],
    lg: breakpoints[3],
    xl: breakpoints[4],
  },
  mq: {
    xs: `(min-width: ${breakpoints[0]})`,
    sm: `(min-width: ${breakpoints[1]})`,
    md: `(min-width: ${breakpoints[2]})`,
    lg: `(min-width: ${breakpoints[3]})`,
    xl: `(min-width: ${breakpoints[4]})`,
  },
  fonts: {
    cerapro: 'Cera Pro, sans-serif',
    earthsmightiest: 'Earths Mightiest, sans-serif',
  },
  colors: {
    white: '#fff',
    red: {
      0: '#E42032',
    },
  },
}

export default theme
