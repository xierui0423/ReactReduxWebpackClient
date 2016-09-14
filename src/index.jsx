/**
 * Created by ray.xie on 9/12/2016.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App.jsx';
import Voting from './components/Voting.jsx';
import Results from './components/Results.jsx';

const routes = (<Route component={App}>
  <Route path="/" component={Voting} />
  <Route path="/results" component={Results} />
</Route>);

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
);
