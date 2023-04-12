import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import  { Provider } from 'react-redux';
import { createStore } from 'redux';
import {createGlobalStyle} from "styled-components";
import App from './components/App';

const reducer = () => {
  return [];
}

const store = createStore(reducer)

const GlobalStyle = createGlobalStyle`
  *,
  *::before, 
  *::after {
    box-sizing: border-box;
    background-image: url("./platform934.jpg")
    background-color: transparent;
  }
  html, body {
    margin: 0;
  }
  body {
    font-family: BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
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


