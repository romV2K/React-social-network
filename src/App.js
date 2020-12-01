import './App.css';
import Nav from "./components/Navbar/Nav";
import Header from './components/Header/Header';
import Main from './components/Main/Main';

import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


import { Route, BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Nav/>
        <div className="">
          <Route path='/Profile' component={Main} />
          <Route path='/Messages' component={Messages} />
          <Route path='/News' component={News} />
          <Route path='/Music' component={Music} />
          <Route path='/Settings' component={Settings} />
        </div>
    </BrowserRouter>
  );
}

export default App;
