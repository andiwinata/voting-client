import { List, Map, fromJS } from 'immutable';
import { expect } from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {

    it('handles SET_STATE', () => {
        const initialState = Map();
        const action = {
            type: 'SET_STATE',
            state: Map({
                vote: Map({
                    pair: List.of('Trainspotting', '28 Days Later'),
                    tally: Map({ Trainspotting: 1 })
                })
            })
        };
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            vote: {
                pair: ['Trainspotting', '28 Days Later'],
                tally: { Trainspotting: 1 }
            }
        }));
    });

    it('handles SET_STATE with plain JS payload', () => {
        const initialState = Map();
        const action = {
            type: 'SET_STATE',
            state: {
                vote: {
                    pair: ['Trainspotting', '28 Days Later'],
                    tally: { Trainspotting: 1 }
                }
            }
        };
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            vote: {
                pair: ['Trainspotting', '28 Days Later'],
                tally: { Trainspotting: 1 }
            }
        }));
    });

    it('handles SET_STATE without initial state', () => {
        const action = {
            type: 'SET_STATE',
            state: {
                vote: {
                    pair: ['Trainspotting', '28 Days Later'],
                    tally: { Trainspotting: 1 }
                }
            }
        };
        const nextState = reducer(undefined, action);

        expect(nextState).to.equal(fromJS({
            vote: {
                pair: ['Trainspotting', '28 Days Later'],
                tally: { Trainspotting: 1 }
            }
        }));
    });

    it('handles VOTE by setting myVote', () => {
        const state = fromJS({
            vote: {
                round: 1024,
                pair: ['Trainspotting', '28 Days Later'],
                tally: { Trainspotting: 1 }
            }
        });
        const action = { type: 'VOTE', entry: 'Trainspotting' };
        const nextState = reducer(state, action);

        expect(nextState).to.equal(fromJS({
            vote: {
                round: 1024,
                pair: ['Trainspotting', '28 Days Later'],
                tally: { Trainspotting: 1 }
            },
            myVote: {
                round: 1024,
                entry: 'Trainspotting'
            }
        }));
    });

    it('does not set myVote for VOTE on invalid entry', () => {
        const state = fromJS({
            vote: {
                round: 33,
                pair: ['Trainspotting', '28 Days Later'],
                tally: { Trainspotting: 1 }
            }
        });
        const action = { type: 'VOTE', entry: 'Sunshine' };
        const nextState = reducer(state, action);

        expect(nextState).to.equal(fromJS({
            vote: {
                round: 33,
                pair: ['Trainspotting', '28 Days Later'],
                tally: { Trainspotting: 1 }
            }
        }));
    });

    it('removes myVote on SET_STATE if round has changes', () => {
        const initialState = fromJS({
            vote: {
                round: 1024,
                pair: ['Trainspotting', '28 Days Later'],
                tally: { Trainspotting: 1 }
            },
            myVote: {
                round: 1024,
                entry: 'Trainspotting'
            }
        });
        const action = {
            type: 'SET_STATE',
            state: {
                vote: {
                    round: 1025,
                    pair: ['Sunshine', 'Slumdog Millionaire']
                }
            }
        };
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            vote: {
                round: 1025,
                pair: ['Sunshine', 'Slumdog Millionaire']
            }
        }));
    });

    it('handles SET_CLIENT_ID', () => {
        const initialState = fromJS({});
        const action = {
            type: 'SET_CLIENT_ID',
            clientId: 'CLIENT1234'
        };
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            clientId: 'CLIENT1234'
        }));
    });

});