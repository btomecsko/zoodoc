import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';

import './index.css';
import {createGlobalStyle} from "styled-components";

import  { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

const GlobalStyle = createGlobalStyle`
  *,
  *::before, 
  *::after {
    box-sizing: border-box;
    background-color: transparent;
  }
  html, body {
    margin: 0;
  }
  body {
    font-family: BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
  }
  @media (max-width: 768px) {
    /* Adjust styles for screens smaller than 768px */
    body {
      font-size: 16px;
    }
  }
  
  @media (min-width: 769px) and (max-width: 1024px) {
    /* Adjust styles for screens between 769px and 1024px */
    body {
      font-size: 18px;
    }
  }
  
  @media (min-width: 1025px) {
    /* Adjust styles for screens larger than 1025px */
    body {
      font-size: 20px;
    }
  }
`;


ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <Router>
        <GlobalStyle/>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


