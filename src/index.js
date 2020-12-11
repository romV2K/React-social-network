import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import store from './redux/state'
import App from './App';


export let _callSubscriber = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

store.subscribe(_callSubscriber)


_callSubscriber(store.getState());

reportWebVitals();
