// 这里的请求自己维护
import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
// 添加请求拦截器
service.interceptors.request.use(config => {
  return config
})
// 添加响应拦截器
service.interceptors.response.use(res => {
  const { data } = res
  return data
})

// 导出
export default service

// // 这里是封装请求模块
// import axios from 'axios'
// import { MessageBox, Message } from 'element-ui'
// import store from '@/store'
// import { getToken } from '@/utils/auth'

// // create an axios instance
// // 创建一个 axios 实例的形式
// const service = axios.create({

//   baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
//   // withCredentials: true, // send cookies when cross-domain requests
//   timeout: 5000 // request timeout 设置请求超时时长
// })

// // request interceptor 请求拦截器
// service.interceptors.request.use(
//   config => {
//     // do something before request is sent 在请求之前可以统一的所有请求干一些事件

//     if (store.getters.token) {
//       // 如果当前有 token值的情况，统一的给所有请求添加自定义请求头
//       // let each request carry token 让每个请求携带令牌
//       // ['X-Token'] is a custom headers key
//       // please modify it according to the actual situation
//       config.headers['Authorization'] = getToken()
//     }
//     return config
//   },
//   error => {
//     // do something with request error
//     console.log(error) // for debug
//     return Promise.reject(error) // 请求期间如果发生错误，会返回失败状态下的promise实例
//   }
// )

// // response interceptor 响应拦截器
// service.interceptors.response.use(
//   /**
//    * If you want to get http information such as headers or status
//    * Please return  response => response
//   */

//   /**
//    * Determine the request status by custom code
//    * Here is just an example
//    * You can also judge the status by HTTP Status Code
//    */

//   response => {
//     // axios 会包装一层数据 {data}
//     const res = response.data

//     // if the custom code is not 20000, it is judged as an error.
//     // 20000 状态码 是自行约定的
//     if (res.code !== 20000) {
//       Message({
//         message: res.message || 'Error',
//         type: 'error',
//         // 弹窗持续时长
//         duration: 5 * 1000
//       })

//       // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
//       // 5008->不合法token； 50012->其他客户端登陆；  50014->token过期
//       // 如果有以上三种情况，提示重新登录
//       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
//         // to re-login
//         MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
//           confirmButtonText: 'Re-Login',
//           cancelButtonText: 'Cancel',
//           type: 'warning'
//         }).then(() => {
//           store.dispatch('user/resetToken').then(() => {
//             // 1，移出token  2，返回登录页重新登录  3，让页面重新刷新
//             location.reload()
//           })
//         })
//       }
//       return Promise.reject(new Error(res.message || 'Error'))
//     } else {
//       return res
//     }
//   },
//   error => {
//     console.log('err' + error) // for debug
//     Message({
//       message: error.message,
//       type: 'error',
//       duration: 5 * 1000
//     })
//     return Promise.reject(error)
//   }
// )

// export default service
