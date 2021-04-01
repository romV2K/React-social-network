import * as axios from 'axios'


const instance = axios.create({
     baseURL: 'https://social-network.samuraijs.com/api/1.0/',
     headers: {
          'API-KEY': 'ceb868d5-e092-40d3-a57e-f46c94cb7815'
     },
     withCredentials: true
})

export const
     userAPI = {
          getUsers: (currentPage = 1, pageSize = 10) => (
               instance.get(`users?page=${currentPage}&count=${pageSize}`)
                    .then(response => response.data))
     },
     profileAPI = {
          getProfile: (userId) => (
               instance.get(`profile/${userId}`)
                    .then(response => response.data)),
          getStatus: (userId) => (
               instance.get(`/profile/status/${userId}`)
                    .then(response => response.data)),
          updateStatus: (status) => (
               instance.put(`/profile/status`, { status })
                    .then(response => response.data))
     },
     authAPI = {
          getMe: () => (
               instance.get(`auth/me`)
                    .then(response => response.data)),
          login: (email, password, rememberMe = false, captcha) => (
               instance.post(`auth/login`,{email, password, rememberMe, captcha})
                    .then(response => response.data)),
          logout: () => (
               instance.delete(`auth/login`)
                    .then(response => response.data))
     },
     securityAPI = {
          getCaptcha: () => (
               instance.get(`security/get-captcha-url`)
                    .then(response => response.data))
     },
     followAPI = {
          follow: (userId) => (
               instance.post(`follow/${userId}`)
                    .then(response => response.data)),
          unfollow: (userId) => (
               instance.delete(`follow/${userId}`)
                    .then(response => response.data))
     }