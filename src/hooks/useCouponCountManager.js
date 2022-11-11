import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { couponCountFetch } from 'store/slices/couponCountSlice'
import {
  selectCouponCountData,
  selectCouponCountLoading,
  selectCouponCountError,
} from 'store/selectors/couponCountSelectors'

export const useCouponCountManager = () => {
  const couponcount = useSelector(selectCouponCountData)
  const isLoading = useSelector(selectCouponCountLoading)
  const error = useSelector(selectCouponCountError)
  const dispatch = useDispatch()

  const coupons = couponcount.Count
  const chips = couponcount?.IslandManzanaCouponCount

  const fetchCouponCount = () => dispatch(couponCountFetch())

  useEffect(() => {
    fetchCouponCount()
  }, [])

  return { coupons, chips, couponcount, isLoading, error, fetchCouponCount }
}
