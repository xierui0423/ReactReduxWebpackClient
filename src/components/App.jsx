/**
 * Created by ray.xie on 9/14/2016.
 */

import React from 'react';
import { List, Map } from 'immutable';

const pair = List.of('Topic1', 'Topic2');
const tally = Map({ Topic1: 5, Topic2: 4 });
const winner = 'Topic1';

const App = props => React.cloneElement(props.children, { pair, tally, winner });

export default App;
