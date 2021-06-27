import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

let store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
