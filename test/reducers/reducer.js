/**
 * Created by ray.xie on 9/20/2016.
 */
import Immutable from 'immutable';
import { expect } from 'chai';

import reducer from '../../src/reducers/reducer';


describe('reducer', () => {
    it('handles SET_STATE', () => {
        const initialState = Immutable.Map();
        const action = {
            type: 'SET_STATE',
            state: Immutable.fromJS({
                vote: {pair: ['Topic1', 'Topic2'], tally: {Topic1: 1, Topic2: 2}},
            }),
        };

        expect(reducer(initialState, action)).to.equal(Immutable.fromJS({
            vote: {pair: ['Topic1', 'Topic2'], tally: {Topic1: 1, Topic2: 2}},
        }));
    });

    it('handles SET_STATE with plain JS payload', () => {
        const initialState = Immutable.Map();
        const action = {
            type: 'SET_STATE',
            state: {
                vote: {pair: ['Topic1', 'Topic2'], tally: {Topic1: 1, Topic2: 2}},
            },
        };

        expect(reducer(initialState, action)).to.equal(Immutable.fromJS({
            vote: {pair: ['Topic1', 'Topic2'], tally: {Topic1: 1, Topic2: 2}},
        }));
    });

    it('handles VOTE by setting hasVoted', () => {
        const state = Immutable.fromJS({
            vote: {
                pair: ['Topic1', 'Topic2'],
                tally: {Topic1: 1},
            },
        });

        // Without getting data from server, the tally should remain the same
        expect(reducer(state, {type: 'VOTE', entry: 'Topic2'})).to.equal(Immutable.fromJS({
            vote: {
                pair: ['Topic1', 'Topic2'],
                tally: {Topic1: 1},
            },
            hasVoted: 'Topic2',
        }));
    });

    it('removes hasVoted on SET_STATE if pair changes', () => {
        const initialState = Immutable.fromJS({
            vote: {
                pair: ['Trainspotting', '28 Days Later'],
                tally: {Trainspotting: 1},
            },
            hasVoted: 'Trainspotting',
        });
        const action = {
            type: 'SET_STATE',
            state: {
                vote: {
                    pair: ['Sunshine', 'Slumdog Millionaire'],
                },
            },
        };
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(Immutable.fromJS({
            vote: {
                pair: ['Sunshine', 'Slumdog Millionaire'],
            },
        }));
    });
});
