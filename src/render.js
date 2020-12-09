import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost,onTextChange} from './redux/state'

export let rerenderEntireTree = (state) => {

  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} onTextChange={onTextChange}/>
    </React.StrictMode>,
    document.getElementById('root')
  );

}

reportWebVitals(); 
