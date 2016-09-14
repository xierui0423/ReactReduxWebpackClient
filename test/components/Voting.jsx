/**
 * Created by ray.xie on 9/13/2016.
 */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Voting from '../../src/components/Voting.jsx';


describe('Voting', () => {
  it('renders a pair of buttons', () => {
    const component = mount(
      <Voting pair={['Topic1', 'Topic2']} />
    );

    const buttons = component.find('button');

    expect(buttons.length).to.equal(2);
    expect(buttons.at(0).text()).to.equal('Topic1');
    expect(buttons.at(1).text()).to.equal('Topic2');
  });

  it('invokes callback upon button click', () => {
    let votedWith = '';
    const vote = (entry) => { votedWith = entry; };

    const component = mount(
      <Voting pair={['Topic1', 'Topic2']} vote={vote} />
    );

    const buttons = component.find('button');

    buttons.at(0).simulate('click');
    expect(votedWith).to.equal('Topic1');
    buttons.at(1).simulate('click');
    expect(votedWith).to.equal('Topic2');
  });

  it('disables buttons when user has voted', () => {
    const component = mount(
      <Voting
        pair={['Topic1', 'Topic2']}
        hasVoted="Topic1"
      />
    );

    const buttons = component.find('button');

    expect(buttons.length).to.equal(2);
    expect(buttons.at(0).prop('disabled')).to.equal(true);
    expect(buttons.at(0).prop('disabled')).to.equal(true);
  });

  it('adds label to the voted entry', () => {
    const component = mount(
      <Voting
        pair={['Topic1', 'Topic2']}
        hasVoted="Topic1"
      />
    );

    const buttons = component.find('button');

    expect(buttons.length).to.equal(2);
    expect(buttons.at(0).find('.label').text()).to.equal('Voted');
    expect(buttons.at(1).find('.label').length).to.equal(0);
  });

  it('renders the winner when there is one', () => {
    const component = mount(
      <Voting
        pair={['Topic1', 'Topic2']}
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
