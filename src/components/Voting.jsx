import React from 'react';
import Winner from './Winner.jsx';
import Vote from './Vote.jsx';

const Voting = props =>
  (<div>
    {props.winner ?
      <Winner winner={props.winner} /> :
      <Vote {...props} />}
  </div>);


Voting.propTypes = {
  pair: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  vote: React.PropTypes.func.isRequired,
  hasVoted: React.PropTypes.string,
  winner: React.PropTypes.string,
};

Voting.defaultProps = {
  vote: (entry) => { console.log(`${entry} has been voted.`); },
};

export default Voting;
