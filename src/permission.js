// import router from './router'
// import store from './store'
// import { Message } from 'element-ui'
// import NProgress from 'nprogress' // progress bar
// import 'nprogress/nprogress.css' // progress bar style
// // 获取token的方法
// import { getToken } from '@/utils/auth' // get token from cookie
// // 设置页面标题的方法
// import getPageTitle from '@/utils/get-page-title'

// // 进度条的默认配置
// NProgress.configure({ showSpinner: false }) // NProgress Configuration

// // 设置白名单列表
// const whiteList = ['/login', '/404'] // no redirect whitelist 这里定义的路由不需要访问权限

// // 设置了路由的前置守卫,当页面开始跳转之前会执行
// router.beforeEach(async(to, from, next) => {
//   // start progress bar
//   // 开启进度条效果
//   NProgress.start()

//   // 设置当前页面的标题
//   document.title = getPageTitle(to.meta.title)

//   // determine whether the user has logged in
//   // 获取token的方法执行,然后去用常量 hasToken 接受了一下, 然后拿着这个常量去判断,是否处于登录状态
//   const hasToken = getToken()
//   if (hasToken) {
//     // tiken有值的情况下判断
//     if (to.path === '/login') {
//       // if is logged in, redirect to the home page
//       // 如果处于登录状态,就不在进入登录页面,直接重定向到首页
//       next({ path: '/' })
//       // 结束进度条效果
//       NProgress.done()
//     } else {
//       // 判断处于登录页面,但是要去的地方不是登录页
//       const hasGetUserInfo = store.getters.name
//       // 一开始 hasGetUserInfo 为空字符串
//       if (hasGetUserInfo) {
//         next()
//       } else {
//         // 去 user 子模块里面name为空 走一下代码
//         try {
//           // get user info
//           // 获取用户信息,(给全局状态里面的name 和avatar更新)
//           await store.dispatch('user/getInfo')

//           next()
//         } catch (error) {
//           // 移出token,重新登陆
//           // remove token and go to login page to re-login
//           await store.dispatch('user/resetToken')
//           // 提示了一个错误消息
//           Message.error(error || 'Has Error')
//           // 重定向到 并且记录从哪里跳转到登录页的页面,登录成功之后恢复到之前的页面
//           next(`/login?redirect=${to.path}`)
//           NProgress.done()
//         }
//       }
//     }
//   } else {
//     /* has no token*/

//     if (whiteList.indexOf(to.path) !== -1) {
//       // 要去的地址如果是在白名单里面,直接方向
//       // in the free login whitelist, go directly
//       next()
//     } else {
//       // 如果走到这一步,去的地方是有权限的其他页面
//       // other pages that do not have permission to access are redirected to the login page.
//       next(`/login?redirect=${to.path}`)
//       NProgress.done()
//     }
//   }
// })
// // 后置守卫 页面跳转完成后执行
// router.afterEach(() => {
//   // finish progress bar
//   NProgress.done()
// })
