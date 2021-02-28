import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store'
import App from './App';
import {Provider} from './storeContext';


export let _callSubscriber = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

store.subscribe(_callSubscriber)

_callSubscriber(store.getState());

store.subscribe (() => {
  _callSubscriber(store.getState());
})

reportWebVitals();
