import Vue from 'vue'

// 在scss 预编译器里面引入别的样式文件的语法
// @import  '你要引入样式的地址'
// 重置样式文件
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
// 引入 ElementUI 组件库
import ElementUI from 'element-ui'
// 引入 ElementUI 组件库必备的样式文件
import 'element-ui/lib/theme-chalk/index.css'
// 引入的国际化文字种类(en/英文)
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
// 引入工程必备的样式文件
import '@/styles/index.scss' // global css
// 引入根组件
import App from './App'
// 引入vuex
import store from './store'
// 路由
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
// process.env 获取当前工程所有的环境(开发环境development 线上环境producttion)
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

// 设置为 false 以阻止vue 在启动时生成生产提示
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
