import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App';

import 'bootstrap/dist/css/bootstrap.css'; //estilos
import './assets/styles/global.css'; //estilos globales

const initialState = {
  'rickAndMortyState': {
    data: '',
  },
  'user': {},
  'users': [],
  'searchResult': [],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducer, initialState, composeEnhancers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
