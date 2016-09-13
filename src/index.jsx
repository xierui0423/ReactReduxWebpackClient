/**
 * Created by ray.xie on 9/12/2016.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting.jsx';

const pair = ['Topic1', 'Topic2'];

ReactDOM.render(
  <Voting pair={pair} winner="Topic1" />,
  document.getElementById('app')
);
