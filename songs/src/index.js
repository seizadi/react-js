import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from "redux";

import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';

// Added code from Redux Tool
// https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store
//
// const store = createStore(
//   reducer, /* preloadedState, */
//    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// Set back to:
//     <Provider store={createStore(reducers)}>

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(reducers, /* preloadedState, */
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
