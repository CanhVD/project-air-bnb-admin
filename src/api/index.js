import axios from 'axios'
import configs from '../configs'
const axiosAPI = axios.create({
  baseURL: configs.baseUrl,
})

axiosAPI.interceptors.request.use(
  function (config) {
    // config.headers.tokenByClass = configs.tokenByClass
    config.headers.Authorization = `Bearer ${configs.tokenByClass}`
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

axiosAPI.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    return Promise.reject(error.response.data)
  }
)

export default axiosAPI
