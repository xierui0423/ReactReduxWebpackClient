/**
 * Created by ray.xie on 9/12/2016.
 */

import React from 'react';

const Vote = ({ pair, hasVoted, vote }) => {
  const getPair = () => pair || [];

  const isDisabled = () => !!hasVoted;

  const hasVotedFor = entry => hasVoted === entry;

  return (<div className="voting">
    {getPair().map(entry =>
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
};

Vote.propTypes = {
  pair: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  vote: React.PropTypes.func.isRequired,
  hasVoted: React.PropTypes.string,
};

export default Vote;
