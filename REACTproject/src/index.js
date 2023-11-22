import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Web from './web';
//  import App from './App';
// import Sign from './Sign';
// import Blood from './Blood';
import Ap from './Ap';

import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Sign/> */}
    <Ap/>
    {/* <Blood/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
