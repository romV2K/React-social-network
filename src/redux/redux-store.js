import { createStore, combineReducers } from 'redux'
import profileReducer from './profile-reducer'
import messagesReducer from './messages-reducer'
import usersReducer from './users-reducer'
import navbarReducer from './navbar-reducer'

let reducers = combineReducers({
     profilePage: profileReducer,
     messagesPage: messagesReducer,
     usersPage: usersReducer,
     navbar: navbarReducer
})


let store = createStore(reducers)

export default store
window.store = store;