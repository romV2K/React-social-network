import React, { Component } from 'react'
import './App.css';
import Nav from "./components/Navbar/Nav";
import HeaderContainer from './components/Header/HeaderContainer';
import Home from './components/Home/Home';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Auth/Login/Login';
import { Route, BrowserRouter, Redirect } from 'react-router-dom'
import { initializeApp } from './redux/app-reducer'
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.initializeApp(this.props.profile)
  }

  render() {
    if (!this.props.initialized) return null

    return (
    <BrowserRouter>
      <HeaderContainer />
      <Nav />
      <Redirect from='/' to='/home' />
      <Redirect from='/logout' to='/login' />
      <Route path='/login' render={() => <Login />} />
      <Route path='/home' render={() => <Home />} />
      <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
      <Route path='/messages' render={() => <MessagesContainer />} />
      <Route path='/users' render={() => <UsersContainer />} />
      <Route path='/news' render={() => <News />} />
      <Route path='/music' render={() => <Music />} />
      <Route path='/settings' render={() => <Settings />} />
    </BrowserRouter>);
  }

}

let mapStateToProps = state => {
  return {
    profile: state.profilePage.profile,
    initialized: state.app.initialized
  }
}

export default connect(mapStateToProps, { initializeApp })(App);
