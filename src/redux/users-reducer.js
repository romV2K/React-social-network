import { userAPI, followAPI } from '../api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let intialStore = {
     users: [],
     pageSize: 10,
     totalUsersCount: 0,
     currentPage: 1,
     isFetching: false,
     followingInProgress: []
}

const usersReducer = (state = intialStore, action) => {
     switch (action.type) {
          case FOLLOW:
               return {
                    ...state,
                    users: state.users.map(user =>
                         user.id === action.userId ? { ...user, followed: true } : user)
               }
          case UNFOLLOW:
               return {
                    ...state,
                    users: state.users.map(user =>
                         user.id === action.userId ? { ...user, followed: false } : user)
               }
          case SET_USERS:
               return {
                    ...state,
                    users: [...action.users]
               }
          case SET_CURRENT_PAGE:
               return {
                    ...state, currentPage: action.currentPage
               }
          case SET_TOTAL_USERS_COUNT:
               return {
                    ...state, totalUsersCount: action.totalUsersCount
               }
          case TOGGLE_IS_FETCHING:
               return {
                    ...state, isFetching: action.isFetching
               }
          case TOGGLE_IS_FOLLOWING_PROGRESS:
               return {
                    ...state,
                    followingInProgress: action.isFetching
                         ? [...state.followingInProgress, action.userId]
                         : state.followingInProgress.filter(id => !id === action.userId)
               }

          default:
               return state
     }

}


export const followSucces = (userId) => ({ type: FOLLOW, userId })
export const unfollowSucces = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const setIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setIsFollowing = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })


export const getUsers = (currentPage, pageSize) => {
     return dispatch => {
          dispatch(setIsFetching(true))
          userAPI.getUsers(currentPage, pageSize)
               .then(data => {
                    dispatch(setIsFetching(false))
                    dispatch(setUsers(data.items))
                    dispatch(setTotalUsersCount(data.totalCount))
               })

     };
}

export const follow = (userId) => {
     return dispatch => {
          dispatch(setIsFollowing(true, userId))
          followAPI.follow(userId)
               .then(data => {
                    if (data.resultCode === 0)
                         dispatch(followSucces(userId))
                    dispatch(setIsFollowing(false, userId))
               })
     };
}

export const unfollow = (userId) => {
     return dispatch => {
          dispatch(setIsFollowing(true, userId))
          followAPI.unfollow(userId)
               .then(data => {
                    if (data.resultCode === 0)
                         dispatch(unfollowSucces(userId))
                    dispatch(setIsFollowing(false, userId))
               })
     }
}

export default usersReducer

