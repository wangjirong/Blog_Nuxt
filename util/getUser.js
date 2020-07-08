import jwtDecode from 'jwt-decode'
import isEmpty from './isEmpty'
import {
  getCookie
} from './cookie'
export const getUser = () => {
  const token = getCookie('token')
  const user = jwtDecode(token)
  return isEmpty(token) ? null : jwtDecode(token)._doc
}

export default token => {
  return isEmpty(token) ? null : jwtDecode(token)._doc
}
