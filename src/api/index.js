import { ENDPOINTS } from './endpoints'
import fetcher from './fetcher'

const api = {
  maps: {
    fetch: params => fetcher({ url: ENDPOINTS.MAPS, params }),
  },
  couponCount: {
    fetch: params => fetcher({ url: ENDPOINTS.COUPONCOUNT, params }),
  },
  finalDraw: {
    fetch: params => fetcher({ url: ENDPOINTS.FINALLIST, params }),
    realize: params => fetcher({ url: ENDPOINTS.COUPONREALIZE_FINAL, params }),
  },
  weeklyDraw: {
    fetch: params => fetcher({ url: ENDPOINTS.COUPONLIST, params }),
    realize: params => fetcher({ url: ENDPOINTS.COUPONREALIZE, params }),
  },
}

export default api
