import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost,addMessage,onPostTextChange,onMessageTextChange} from './redux/state'

export let rerenderEntireTree = (state) => {

  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} addMessage={addMessage} onPostTextChange={onPostTextChange} onMessageTextChange={onMessageTextChange} />
    </React.StrictMode>,
    document.getElementById('root')
  );

}

reportWebVitals(); 
