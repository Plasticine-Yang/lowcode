import axios from 'axios'
import qs from 'qs'
import { router } from '@/router'
import { JSONParse, JSONStringify } from '@/utils/resetSerialize'
type Api = {
  get?: (url: string, data: object, config?: object) => Promise<ApiResponse>
  post?: (url: string, data: object, config?: object) => Promise<ApiResponse>
  patch?: (url: string, data: object, config?: object) => Promise<ApiResponse>
}

const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'http://39.108.140.181:8023'
    : 'http://localhost:8023'

let instance = axios.create({
  timeout: 1000 * 60,
  baseURL,
})
//创建基本实例

instance.defaults.responseType = 'json' //响应类型
instance.defaults.withCredentials = false //是否需要携带凭证
instance.defaults.transformRequest = [
  //格式转换
  data => {
    return qs.stringify(data)
  },
]

instance.defaults.validateStatus = function () {
  return true
}

instance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    alert('请求错误')
    return Promise.reject(error)
  },
)

instance.interceptors.response.use(
  response => {
    // normalizeResponse(response.data)
    const data = response.data
    console.log('data', data)
    let status = response.status
    const errorToken = [40001, 40002, 40003]
    if (status == 200 || status == 304) {
      // 如果 token 不合法就重新登录
      if (errorToken.includes(data.code)) {
        alert('请重新登录')
        router.push('/sign_in')
      }
      return Promise.resolve(data)
    } else if (status == 301) {
      alert('请先登录')
      router.push('/sign_in')
      return
    } else {
      return Promise.reject(response) //返回处理过后的promise对象
    }
  },
  error => {
    console.log(error)
  },
)

type Method = 'get' | 'post' | 'patch'
let ajaxMethod: Method[] = ['get', 'post', 'patch']
let api: Api = {}
ajaxMethod.forEach(method => {
  api[method] = function (url: string, data: object, config?: object) {
    return new Promise((resolve, reject) => {
      instance[method](url, data, config) //向接口请求数据，返回promise
        .then(response => resolve(response)) //正确处理调用resolve(),之后在该api方法的then方法可以调用正确响应数据
        .catch(error => reject(error))
    })
  }
})

export default api //暴露两种api ， 只需通过.then方法就能访问成功数据
