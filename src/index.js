import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import postReducer from './reducers/postReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
  // Specify custom devTools options
});

const store = createStore(postReducer, composeEnhancers(
  // applyMiddleware(...middleware),
));

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>
  , document.getElementById('root'));