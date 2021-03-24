// const FOLLOW = 'FOLLOW'
// const UNFOLLOW = 'UNFOLLOW'
// const SET_USERS = 'SET_USERS'
// const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
// const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_USER_DATA = 'SET_USER_DATA'
const SET_PROFILE_PHOTO = 'SET_PROFILE_PHOTO'
const TOGGLE_IS_FETCHING = 'IS_FETCHING'

let intialStore = {
     id: null,
     login: null,
     email: null,
     userIcon : '',
     isFetching : false,
     isAuth: false
}

const authReducer = (state = intialStore, action) => {
     switch (action.type) {
          
          case SET_USER_DATA:
               return{
                    ...state, ...action.data, isAuth: true
               }
          case TOGGLE_IS_FETCHING:
               return{
                    ...state, isFetching: action.isFetching
               }
          case SET_PROFILE_PHOTO:
               return{
                    ...state, userIcon: action.userIcon
               }
          default:
               return state
     }

}

export const getMe = () => {
     return dispatch =>{
          
     }
}


export const setUserData = (id,login,email)=>({type: SET_USER_DATA, data:{id,login,email}})
export const setProfilePhoto = (userIcon)=>({type: SET_PROFILE_PHOTO, userIcon})
export const setIsFetching = (isFetching)=>({type: TOGGLE_IS_FETCHING, isFetching})

export default authReducer

