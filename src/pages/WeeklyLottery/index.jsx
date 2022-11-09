import useMatchMedia from 'react-use-match-media'

import { WeeklyLotteryMobile } from './WeeklyLotteryMobile'
import { WeeklyLotteryDesktop } from './WeeklyLotteryDesktop'

export const WeeklyLottery = () => {
  const isWideViewport = useMatchMedia('(min-width: 1200px)')

  return isWideViewport ? <WeeklyLotteryDesktop /> : <WeeklyLotteryMobile />
}
