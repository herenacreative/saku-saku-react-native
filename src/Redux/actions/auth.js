import { axios } from 'Libraries';
import config from '../../Configs/index';

export const login = data => {
   return {
      type: "LOGIN",
      payload: axios({
         method: 'POST',
         url: `${config.baseURL}/login`,
         data: {
            email: data.email,
            password: data.password,
         }
      })
   }
};

export const logout = () => {
   return {
      type: "LOGOUT",
   }
};

export const register = (data) => {
   return {
      type: "REGISTER",
      payload: axios({
         method: 'POST',
         url: `${config.baseURL}/sign-up`,
         data: {
            username: data.username,
            email: data.email,
            password: data.password,
         }
      })
   }
};

export const requestPassword = data => {
   return {
      type: "REQUEST_PASSWORD",
      payload: axios({
         method: 'POST',
         url: `${config.baseURL}/auth/request/otp`,
         data: {
            email: data,
            requestType: 'resetPassword',
         }
      })
   }
};

export const confirmPassword = data => {
   return {
      type: "CONFIRM_PASSWORD",
      payload: axios({
         method: 'POST',
         url: `${config.baseURL}/auth/confirm/otp`,
         data: {
            otp: data.otp,
         }
      })
   }
};

export const resetPassword = data => {
   return {
      type: "RESET_PASSWORD",
      payload: axios({
         method: 'POST',
         url: `${config.baseURL}/auth/reset-password`,
         data: {
            email: data.email,
            password: data.password,
         }
      })
   }
};