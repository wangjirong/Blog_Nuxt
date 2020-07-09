import Vue from 'vue'
import {
  getCookie
} from '../util/cookie'
import jwtDecode from 'jwt-decode'
export const isEmpty = value => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
}

export const getUser = () => {
  const token = getCookie('token')
  return isEmpty(token) ? null : jwtDecode(token)._doc
}

const global = {
  install(Vue) {
    Vue.prototype.global = {
      isEmpty,
      getUser,
    }


  }
}
Vue.use(global)
