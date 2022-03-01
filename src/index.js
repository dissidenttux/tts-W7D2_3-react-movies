import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { MovieData } from './dataClasses';
import App from './components/App';
// import { collections } from './data/movies';

const collections = require('./data/movies.json')
    .map(movieList =>
        movieList.map(item => new MovieData(item)));

ReactDOM.render(
  <App collections={collections}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
