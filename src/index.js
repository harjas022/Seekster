import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Business from './Business'
import Workers from './Workers';


const workers = () => (
  <div>
    For Workers
  </div>
)

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={App} exact={true}/>
      <Route path="/businesses" component={Business}/>
      <Route path="/workers" component={Workers}/>
    </div>
  </BrowserRouter>
);

ReactDOM.render(
  routes,
  document.getElementById('root')
);

