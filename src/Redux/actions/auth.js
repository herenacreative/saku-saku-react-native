import { axios } from 'Libraries';
import config from '../../Configs/index';

export const login = data => {
  return {
    type: "LOGIN",
    payload: axios({
      method: 'POST',
      url: `${config.baseURL}/auth/login`,
      data: {
        email: data.email,
        password: data.password,
      }
    })
  }
}

export const logout = () => {
  return {
    type: "LOGOUT",
  }
}

export const register = (data) => {
  return {
    type: "REGISTER",
    payload: axios({
      method: 'POST',
      url: `${config.baseURL}/sign-up`,
      data: {
        email: data.email,
        password: data.password,
      }
    })
  }
}