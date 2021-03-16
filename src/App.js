import './App.css';
import Nav from "./components/Navbar/Nav";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile'
// import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import MessagesContainer from './components/Messages/MessagesContainer';



import { Route, BrowserRouter, Redirect } from 'react-router-dom'

const App = props => {
  return (
    <BrowserRouter>
        <Header/>
        <Nav/>
          <Redirect from='/' to='/Home'/>
          <Route path='/Home' render={() => <Home/>} />
          <Route path='/Profile' render={() => <Profile/> }/>
          <Route path='/Messages' render={() => <MessagesContainer/>}/>
          <Route path='/Users' render={() => <UsersContainer/> } />
          <Route path='/News' render={() =><News/> }/>
          <Route path='/Music' render={() =><Music/> }/>
          <Route path='/Settings' render={() =><Settings/> } />
    </BrowserRouter>
  );
}

export default App;
