import { } from "../api/api"
import { getMe } from "./auth-reducer"

const SET_INITIALIZED = 'SET_INITIALIZED'


let intialStore = {
     initialized: false
}

const appReducer = (state = intialStore, action) => {
     switch (action.type) {
          case SET_INITIALIZED:
               return {
                    ...state, initialized: true
               }
          default:
               return state
     }

}

export const setInitialized = () => ({ type: SET_INITIALIZED })


export const initializeApp = (profile) => dispatch => {
     let promise = dispatch(getMe(profile))
     debugger
     Promise.all([promise]).then(()=>{
          dispatch(setInitialized())
     })

}    


export default appReducer

