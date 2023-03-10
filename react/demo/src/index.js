import React from 'react';
import ReactDOM from 'react-dom/client';
import Books from './books/Books';
import './index.css';
//import reportWebVitals from './reportWebVitals';

// var courses = [
//    {title : 'React', fee : 3000, duration :12},
//    {title : 'Spring', fee : 3000, duration :16}
// ]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
         <Books />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
