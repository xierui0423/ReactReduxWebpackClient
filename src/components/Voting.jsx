import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import Winner from './Winner.jsx';
import Vote from './Vote.jsx';
import * as actionCreators from '../action-creators/action-creator';

export const Voting = props =>
  (<div>
    {props.winner ?
      <Winner winner={props.winner} /> :
      <Vote {...props} />}
  </div>);


Voting.propTypes = {
  pair: ImmutablePropTypes.list,
  vote: React.PropTypes.func,
  hasVoted: React.PropTypes.string,
  winner: React.PropTypes.string,
};

Voting.defaultProps = {
  vote: (entry) => { console.log(`${entry} has been voted.`); },
};

/**
 * Mapping function
 */
function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    winner: state.get('winner'),
    hasVoted: state.get('hasVoted'),
  };
}

export const VotingContainer = connect(mapStateToProps, { vote: actionCreators.vote })(Voting);
