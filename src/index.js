import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import store from './redux/state'
import App from './App';


export let _callSubscriber = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={store.addPost.bind(store)} addMessage={store.addMessage.bind(store)} onPostTextChange={store.onPostTextChange.bind(store)} onMessageTextChange={store.onMessageTextChange.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

store.subscribe(_callSubscriber)


_callSubscriber(store.getState());

reportWebVitals();
