import { createGlobalStyle } from '@xstyled/styled-components'

import { fonts } from './fonts'
import { preflight } from './preflight'

export const GlobalStyle = createGlobalStyle`
  ${fonts}
  ${preflight}

  body {
    min-height: 100vh;

    font-family: ${props => props.theme.fonts.cerapro};
    font-weight: 500;

    background-image: linear-gradient(180deg, #7BB7AC -2.35%, #7BB7AC 10.47%, #B9DBD5 43.71%, #C6E0DC 100%);
  }
`
