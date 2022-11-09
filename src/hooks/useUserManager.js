import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { userInfoSet } from 'store/slices/userSlice'

export const useUserManager = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search)
    const sessionID = urlSearchParams.get('session_id')
    const userID = urlSearchParams.get('user_id')

    if (userID && sessionID) {
      dispatch(userInfoSet({ userID, sessionID }))
    }
  })

  return null
}
