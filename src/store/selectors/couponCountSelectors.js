import * as R from 'ramda'

export const selectCouponCountData = R.path(['couponcount', 'data'])

export const selectCouponCountLoading = R.path(['couponcount', 'loading'])

export const selectCouponCountError = R.path(['couponcount', 'error'])
