import * as R from 'ramda'

import { groupCouponsByWeek } from './date'

const combineCoupons = R.compose(
  R.flatten,
  R.props(['IslandPromocode', 'Coupon'])
)
const sortDesc = prop => R.sort(R.descend(R.prop(prop)))
const convert = props => R.compose(R.map(R.zipObj(props)), R.toPairs)

const transformations = [
  sortDesc('week'),
  R.map(R.evolve({ week: Number })),
  convert(['week', 'coupons']),
  R.groupBy(groupCouponsByWeek),
  sortDesc('date'),
  combineCoupons,
]

export const normalizeWeeklyDrawCodesResp = R.ifElse(
  R.compose(R.complement(R.isEmpty), combineCoupons),
  R.reduceRight(R.compose, R.identity, transformations),
  R.always([])
)
