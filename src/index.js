import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// var user = {
//   id : "4009",
// name : "lakshmi"
// }
// console.log("user",user);
// user.name = "gowri"
// let user1=user;
// console.log("user1",user1);
// console.log("Suman",sumanReport)
// console.log("Akash",akashReport)
