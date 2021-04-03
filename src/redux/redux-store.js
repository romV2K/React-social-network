import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import profileReducer from './profile-reducer'
import messagesReducer from './messages-reducer'
import usersReducer from './users-reducer'
import navbarReducer from './navbar-reducer'
import authReducer from './auth-reducer'
import appReducer from './app-reducer'

let reducers = combineReducers({
     app: appReducer,
     profilePage: profileReducer,
     messagesPage: messagesReducer,
     usersPage: usersReducer,
     navbar: navbarReducer,
     auth: authReducer,
     // form: formReducer
})

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store
window.store = store;