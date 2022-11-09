import { ENDPOINTS } from './endpoints'
import fetcher from './fetcher'

const api = {
  maps: {
    fetch: params => fetcher({ url: ENDPOINTS.MAPS, params }),
  },
  weeklyCodes: {
    fetch: params => fetcher({ url: ENDPOINTS.COUPONLIST, params }),
    realize: params => fetcher({ url: ENDPOINTS.COUPONREALIZE, params }),
  },
}

export default api
