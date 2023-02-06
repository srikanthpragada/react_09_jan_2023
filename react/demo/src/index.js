import React from 'react';
import ReactDOM from 'react-dom/client';
import Product from './basics/Product';
import './index.css';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Product name="Java Complete Reference" 
               price={600}
               features={["Upgraded to Java 19", "Lots of Examples"]} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
