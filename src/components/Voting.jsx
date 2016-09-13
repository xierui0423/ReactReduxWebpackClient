/**
 * Created by ray.xie on 9/12/2016.
 */

import React from 'react';

const Voting = ({ pair, hasVoted, vote, winner }) => {
  const getPair = () => pair || [];

  const isDisabled = () => !!hasVoted;

  const hasVotedFor = entry => hasVoted === entry;

  return (<div className="voting">
    {winner ?
      <div ref={() => 'winner'} >Winner is {winner}!</div> : getPair().map(entry =>
        <button
          key={entry}
          disabled={isDisabled()}
          onClick={() => vote(entry)}
        >
          <h1>{entry}</h1>
          {hasVotedFor(entry) ?
            <div className="label">Voted</div> :
            null}
        </button>
    )}
  </div>);
}

Voting.propTypes = {
  pair: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  vote: React.PropTypes.func.isRequired,
  hasVoted: React.PropTypes.string,
  winner: React.PropTypes.string,
}

Voting.defaultProps = {
  vote: (entry) => { console.log(`${entry} has been voted.`); },
}

export default Voting;
