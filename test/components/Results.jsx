/**
 * Created by ray.xie on 9/13/2016.
 */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Immutable from 'immutable';
import Results from '../../src/components/Results.jsx';


describe('Results', () => {
  it('renders entries with vote counts or zero', () => {
    const component = mount(
      <Results
        pair={Immutable.fromJS(['Topic1', 'Topic2'])}
        tally={Immutable.fromJS({ Topic1: 5 })}
      />
    );

    const entries = component.find('.entry');

    expect(entries.length).to.equal(2);
    expect(entries.at(0).find('h1').text()).to.contain('Topic1');
    expect(entries.at(1).find('h1').text()).to.contain('Topic2');
    expect(Number(entries.at(0).find('.voteNumber').text())).to.equal(5);
    expect(Number(entries.at(1).find('.voteNumber').text())).to.equal(0);
  });

  it('invokes the next callback when next button is clicked', () => {
    let nextInvoked = false;
    const next = () => { nextInvoked = true; };

    const pair = Immutable.List.of('Topic1', 'Topic2');
    const component = mount(
      <Results
        pair={pair}
        tally={Immutable.Map()}
        next={next}
      />
    );

    component.find('.nextBtn').simulate('click');

    expect(nextInvoked).to.equal(true);
  });

  it('renders the winner when there is one', () => {
    const component = mount(
      <Results
        pair={Immutable.fromJS(['Topic1', 'Topic2'])}
        winner="Topic2"
      />
    );

    const buttons = component.find('button');

    expect(buttons.length).to.equal(0);

    const winner = component.find('.winner');
    expect(winner.length).to.equal(1);
    expect(winner.at(0).text()).to.contain('Topic2');
  });
});
