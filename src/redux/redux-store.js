import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import profileReducer from './profile-reducer'
import messagesReducer from './messages-reducer'
import usersReducer from './users-reducer'
import navbarReducer from './navbar-reducer'
import authReducer from './auth-reducer'

let reducers = combineReducers({
     profilePage: profileReducer,
     messagesPage: messagesReducer,
     usersPage: usersReducer,
     navbar: navbarReducer,
     auth: authReducer
})


let store = createStore(reducers,applyMiddleware(thunkMiddleware))

export default store
window.store = store;