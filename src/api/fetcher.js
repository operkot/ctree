import axios from 'axios'

const BASE_URL =
  process.env.REACT_APP_ENV === 'staging'
    ? 'https://api.staging.friendsclub.ru/api/island'
    : 'https://api.friendsclub.ru/api/island'

const axs = axios.create({ baseURL: BASE_URL })

export default ({
  url = '/',
  method = 'GET',
  params = {},
  data = {},
  headers = {},
}) => {
  return axs({ url, method, headers, params, data }).then(res => res.data)
}
