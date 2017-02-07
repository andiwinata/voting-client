import { List, Map, fromJS } from 'immutable';

function setState(state, newState) {
    return state.merge(newState);
}

function vote(state, entry) {
    const currentPair = state.getIn(['vote', 'pair']);
    if (currentPair && currentPair.includes(entry)) {
        return state.set('hasVoted', entry);
    } else {
        return state;
    }
}

function resetVote(state) {
    const hasVoted = state.get('hasVoted');
    const currentPair = state.getIn(['vote', 'pair'], List());
    if (hasVoted && !currentPair.includes(hasVoted)) {
        return state.remove('hasVoted');
    } else {
        return state;
    }
}

export default function (state = Map(), action) {
    switch (action.type) {
        case 'SET_STATE':
            console.log('RECEIVE SET SET_STATE', action.state);
            return resetVote(setState(state, action.state));
        case 'VOTE':
            return vote(state, action.entry);
        case 'SET_CLIENT_ID':
            return state.set('clientId', action.clientId);
        case 'NEXT':
            return state.remove('hasVoted');
        case 'RESET_VOTING':
            return state.remove('winner')
                .remove('hasVoted');
    }
    return state;
}