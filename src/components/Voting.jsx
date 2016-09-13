/**
 * Created by ray.xie on 9/12/2016.
 */

import React from 'react';

export default class Voting extends React.PureComponent {

  getPair() {
    return this.props.pair || [];
  }

  render() {
    return (<div className="voting">
      {this.getPair().map(entry =>
        <button key={entry}>
          <h1>{entry}</h1>
        </button>
      )}
    </div>);
  }
}

Voting.propTypes = {
  pair: React.PropTypes.arrayOf(React.PropTypes.string),
}

