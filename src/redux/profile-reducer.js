import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST',
     ON_POST_TEXT_CHANGE = 'ON-POST-TEXT-CHANGE',
     SET_USER_PROFILE = 'SET_USER_PROFILE',
     TOGGLE_IS_FETCHING = 'IS_FETCHING',
     SET_STATUS = 'SET_STATUS';


let intialStore = {
     posts: [],
     profile: null,
     status: '',
     newPostText: ''
}

const profileReducer = (state = intialStore, action) => {
     switch (action.type) {
          case ADD_POST:
               return {
                    ...state,
                    newPostText: '',
                    posts: [...state.posts,
                    {
                         id: 2,
                         loginName: '@romankonopelko',
                         likes: '26',
                         coments: '1',
                         reposts: "1",
                         userAvatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
                         postImg: "https://3dnews.ru/assets/external/illustrations/2020/01/20/1001842/01_result.jpg",
                         postText: state.newPostText
                    }
                    ]
               }

          case ON_POST_TEXT_CHANGE:
               return {
                    ...state,
                    newPostText: action.inputText
               };
          case SET_USER_PROFILE:
               return {
                    ...state,
                    profile: action.profile
               };
          case TOGGLE_IS_FETCHING:
               return {
                    ...state, isFetching: action.isFetching
               }
          case SET_STATUS:
               return {
                    ...state, status: action.status
               }
          default:
               return state
     }

}

export const getProfile = (userId) => {
     return dispatch => {
          dispatch(setIsFetching(true))
          profileAPI.getProfile(userId)
               .then(data => {
                    dispatch(setIsFetching(false))
                    dispatch(setUserProfile(data))
               })
     }
}
export const getStatus = (userId) => {
     return dispatch => {
          profileAPI.getStatus(userId)
               .then(data => {
                    dispatch(setStatus(data))
               })
     }
}
export const updateStatus = (status) => {
     return dispatch => {
          profileAPI.updateStatus(status)
               .then(data => {
                    if (data.resultCode === 0) {
                         dispatch(setStatus(status))
                    }
               })
     }
}

export const addPostAC = () => ({ type: ADD_POST })
export const updateAddPostAC = (text) => ({ type: ON_POST_TEXT_CHANGE, inputText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setStatus = (status) => ({ type: SET_STATUS, status })


export default profileReducer