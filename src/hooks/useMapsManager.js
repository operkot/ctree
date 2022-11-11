import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { mapsFetch } from 'store/slices/mapsSlice'

export const useMapsManager = () => {
  const maps = useSelector(state => state.maps.data)
  const isLoading = useSelector(state => state.maps.loading)
  const error = useSelector(state => state.maps.error)
  const dispatch = useDispatch()

  const fetchMaps = () => dispatch(mapsFetch())

  useEffect(() => {
    fetchMaps()
  }, [])

  return { maps, isLoading, error, fetchMaps }
}
