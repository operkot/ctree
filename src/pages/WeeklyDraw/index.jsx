import useMatchMedia from 'react-use-match-media'

import { WeeklyDrawMobile } from './WeeklyDrawMobile'
import { WeeklyDrawDesktop } from './WeeklyDrawDesktop'

export const WeeklyDraw = () => {
  const isWideViewport = useMatchMedia('(min-width: 1200px)')

  return isWideViewport ? <WeeklyDrawDesktop /> : <WeeklyDrawMobile />
}
