import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  finalDrawCodesFetch,
  finalDrawCodesRealize,
} from 'store/slices/finalDrawSlice'
import {
  selectFinalDrawData,
  selectFinalDrawLoading,
  selectFinalDrawError,
} from 'store/selectors/finalDrawSelectors'

export const useFinalDrawManager = () => {
  const finalDrawCodes = useSelector(selectFinalDrawData)
  const isLoading = useSelector(selectFinalDrawLoading)
  const error = useSelector(selectFinalDrawError)
  const dispatch = useDispatch()

  const fetchFinalCodes = () => dispatch(finalDrawCodesFetch())

  const realizeChip = () => dispatch(finalDrawCodesRealize())

  useEffect(() => {
    fetchFinalCodes()
  }, [])

  return { fetchFinalCodes, finalDrawCodes, isLoading, error, realizeChip }
}
