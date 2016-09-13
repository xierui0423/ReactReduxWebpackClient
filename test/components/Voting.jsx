/**
 * Created by ray.xie on 9/13/2016.
 */

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Voting from '../../src/components/Voting.jsx';


describe('Voting', () => {
  it('renders a pair of buttons', () => {
    const component = shallow(
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

    const component = shallow(
      <Voting pair={['Topic1', 'Topic2']} vote={vote} />
    );

    const buttons = component.find('button');

    buttons.at(0).simulate('click');
    expect(votedWith).to.equal('Topic1');
    buttons.at(1).simulate('click');
    expect(votedWith).to.equal('Topic2');
  });
});
