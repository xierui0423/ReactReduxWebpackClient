/**
 * Created by ray.xie on 9/14/2016.
 */

import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import Winner from './Winner.jsx';
import { next } from '../action-creators/action-creator.js';

export const Results = (props) => {
  const getPair = () => props.pair || [];

  const getVotes = entry => (props.tally && props.tally.get(entry)) || 0;

  return props.winner ? <Winner className="winner" winner={props.winner} /> : (<div>
    {getPair().map(entry => <div className="entry" key={entry}>
      <h1>{entry}</h1>
      <div className="voteCount">Vote: <span className="voteNumber">{getVotes(entry)}</span></div>
    </div>)}
    <div className="management">
      <button className="nextBtn" onClick={props.next}>Next</button>
    </div>
  </div>);
};

Results.propTypes = {
  pair: ImmutablePropTypes.list,
  tally: ImmutablePropTypes.map,
  next: React.PropTypes.func,
  winner: React.PropTypes.string,
};

/**
 * Mapping function
 */
function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    tally: state.getIn(['vote', 'tally']),
    winner: state.get('winner'),
  };
}

export const ResultsContainer = connect(mapStateToProps, { next })(Results);
