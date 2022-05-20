import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


import 'antd-mobile/dist/antd-mobile.css';
import './assets/font/icon.css';
import './index.css';


ReactDOM.render(
  
    <BrowserRouter>
      <App />
    </BrowserRouter>
 ,
  document.getElementById('root')
);

