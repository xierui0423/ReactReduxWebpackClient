/**
 * Created by ray.xie on 9/13/2016.
 */

import React from 'react';
import { expect } from 'chai';
import { renderIntoDocument, scryRenderedDOMComponentsWithTag } from 'react-addons-test-utils';
import Voting from '../../src/components/Voting.jsx';


describe('Voting', () => {
  it('renders a pair of buttons', () => {
    const component = renderIntoDocument(
      <Voting pair={['Topic1', 'Topic2']} />
    );

    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

    expect(buttons.length).to.equal(2);
    expect(buttons[0].textContent).to.equal('Topic1');
    expect(buttons[1].textContent).to.equal('Topic2');
  });
});
