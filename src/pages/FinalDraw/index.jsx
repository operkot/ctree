import useMatchMedia from 'react-use-match-media'

import { FinalDrawMobile } from './FinalDrawMobile'
import { FinalDrawDesktop } from './FinalDrawDesktop'

export const FinalDraw = () => {
  const isWideViewport = useMatchMedia('(min-width: 1200px)')

  return isWideViewport ? <FinalDrawDesktop /> : <FinalDrawMobile />
}
