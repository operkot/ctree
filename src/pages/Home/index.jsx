import useMatchMedia from 'react-use-match-media'

import { HomeDesktop } from './HomeDesktop'
import { HomeMobile } from './HomeMobile'

export const Home = () => {
  const isWideViewport = useMatchMedia('(min-width: 1200px)')

  return isWideViewport ? <HomeDesktop /> : <HomeMobile />
}
