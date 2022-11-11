import dayjs from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import 'dayjs/locale/ru'

dayjs.extend(weekOfYear)
dayjs.extend(customParseFormat)
dayjs.locale('ru')

export const groupCouponsByWeek = coupon => dayjs(coupon.date).week()

export const weekDatesRange = weekNum => {
  const firstDay = dayjs().week(weekNum).startOf('week')
  const lastDay = dayjs().week(weekNum).endOf('week')
  const isSameMonth = dayjs(firstDay).isSame(dayjs(lastDay), 'month')
  const firstDayFormat = isSameMonth ? 'D' : 'D MMM'

  return `${firstDay.format(firstDayFormat)} - ${lastDay.format('D MMMM')}`
}
