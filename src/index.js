import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';

const routes = (
  <BrowserRouter>
    <Route path="/" component={App}/>
  </BrowserRouter>
);

ReactDOM.render(
  routes,
  document.getElementById('root')
);

