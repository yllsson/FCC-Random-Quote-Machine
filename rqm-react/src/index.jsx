import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import './css/style.css';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

// create store here
// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
