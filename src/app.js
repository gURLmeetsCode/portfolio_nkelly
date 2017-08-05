import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router'
require('../dist/styles/global.scss');


import Welcome from './components/Welcome';
import Home from './components/Home';
import NotFound from './components/NotFound';



const app = document.getElementById('app');
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Welcome} />
    <Route path="/home" component={Home} />
    <Route path="*" component={NotFound} />

  </Router>
);

ReactDOM.render(routes, app)
