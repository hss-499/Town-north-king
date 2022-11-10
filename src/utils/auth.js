// 引入 操作 cookie 相关二点包
import Cookies from 'js-cookie'
// 唯一的字符串 ->key
const TokenKey = 'vue_admin_template_token'
// 获取token的方法
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
