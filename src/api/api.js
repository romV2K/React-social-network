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
                    .then(response => response.data))
     },

     authAPI = {
          getMe: (me) => (
               instance.get(`auth/${me}`)
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