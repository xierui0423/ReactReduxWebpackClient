import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Winner from './Winner.jsx';
import Vote from './Vote.jsx';


const Voting = props =>
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

export default Voting;
