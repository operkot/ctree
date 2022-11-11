import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  weeklyDrawCodsFetch,
  weeklyDrawCodesRealize,
} from 'store/slices/weeklyDrawSlice'
import {
  selectWeeklyDrawData,
  selectWeeklyDrawLoading,
  selectWeeklyDrawError,
} from 'store/selectors/weeklyDrawSelectors'

export const useWeeklyDrawManager = () => {
  const weeklyDrawCodes = useSelector(selectWeeklyDrawData)
  const isLoading = useSelector(selectWeeklyDrawLoading)
  const error = useSelector(selectWeeklyDrawError)
  const dispatch = useDispatch()

  const fetchWeeklyCodes = () => dispatch(weeklyDrawCodsFetch())

  const realizeWeeklyCodes = () => dispatch(weeklyDrawCodesRealize())

  useEffect(() => {
    fetchWeeklyCodes()
  }, [])

  return {
    weeklyDrawCodes,
    isLoading,
    error,
    fetchWeeklyCodes,
    realizeWeeklyCodes,
  }
}
