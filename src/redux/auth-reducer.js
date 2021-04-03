import { authAPI, profileAPI, securityAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'
const SET_PROFILE_PHOTO = 'SET_PROFILE_PHOTO'
const TOGGLE_IS_FETCHING = 'IS_FETCHING'
const SET_IS_AUTH_FALSE = 'SET_IS_AUTH_FALSE'
const SET_MESSAGES = 'SET_MESSAGES'
const SET_CAPTCHA = 'SET_CAPTCHA'

let intialStore = {
     id: null,
     login: null,
     email: null,
     messages: [],
     captcha: '',
     userIcon: '',
     isFetching: false,
     isAuth: false
}

const authReducer = (state = intialStore, action) => {
     switch (action.type) {
          case SET_USER_DATA:
               return {
                    ...state, ...action.data
               }
          case TOGGLE_IS_FETCHING:
               return {
                    ...state, isFetching: action.isFetching
               }
          case SET_PROFILE_PHOTO:
               return {
                    ...state, userIcon: action.userIcon
               }
          case SET_IS_AUTH_FALSE:
               return {
                    ...state, isAuth: false
               }
          case SET_MESSAGES:
               return {
                    ...state, messages: action.messages
               }
          case SET_CAPTCHA:
               return {
                    ...state, captcha: action.url
               }
          default:
               return state
     }

}

export const setUserData = (id, login, email, isAuth, captcha, messages) => ({ type: SET_USER_DATA, data: { id, login, email, isAuth, captcha, messages } })
export const setProfilePhoto = (userIcon) => ({ type: SET_PROFILE_PHOTO, userIcon })
export const setIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setIsAuthFalse = () => ({ type: SET_IS_AUTH_FALSE })
export const setMessages = (messages) => ({ type: SET_MESSAGES, messages })
export const setCaptcha = (url) => ({ type: SET_CAPTCHA, url })

export const getMe = (profile) => {
     return dispatch => {
          return authAPI.getMe()
               .then(data => {
                    let { id, login, email } = data.data
                    if (!id && !login && !email) {
                         dispatch(setIsAuthFalse())
                    } else {
                         dispatch(setUserData(id, login, email, true, ''))
                         if (!profile) {
                              profileAPI.getProfile(id)
                                   .then(data => {
                                        let userIcon = data.photos.small
                                        dispatch(setProfilePhoto(userIcon))
                                   })
                         }
                    }
               })
     }
}
export const login = (email, password, rememberMe, captcha) => {
     return dispatch => {
          authAPI.login(email, password, rememberMe, captcha)
               .then(data => {
                    if (data.resultCode === 0) {
                         dispatch(getMe())
                         console.log(data)
                    } else if (data.resultCode === 1) {
                         dispatch(setMessages([...data.messages]))
                    } else if (data.resultCode === 10) {
                         securityAPI.getCaptcha()
                              .then(data => {
                                   console.log(data)
                                   dispatch(setCaptcha(data.url))
                              })
                    }
               })
     }
}
export const logout = () => {
     return dispatch => {
          authAPI.logout()
               .then(data => {
                    if (data.resultCode === 0) {
                         dispatch(setUserData(null, null, null, false, '', []))
                    }
               })
     }
}

export default authReducer

