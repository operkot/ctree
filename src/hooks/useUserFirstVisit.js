import { useEffect } from 'react'
import { useCookies } from 'react-cookie'

export const useUserFirstVisit = handler => {
  const [cookies, setCookie] = useCookies(['firstVisit'])

  useEffect(() => {
    if (!cookies.firstVisit) {
      handler()

      setCookie('firstVisit', true, {
        expires: new Date('31 Dec 9999 23:59:59 GMT'),
      })
    }
  }, [])

  return { isFirstVisit: !cookies.firstVisit }
}
