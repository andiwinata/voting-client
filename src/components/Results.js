import React from 'react';
import Winner from './Winner';
import { connect } from 'react-redux';
import TallyResult from './TallyResult';
import * as actionCreators from '../action_creators';

export class Results extends React.PureComponent {
    render() {
        return this.props.winner ?
            <Winner winner={this.props.winner} resetVoting={this.props.resetVoting} /> :
            <TallyResult {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        pair: state.getIn(['vote', 'pair']),
        tally: state.getIn(['vote', 'tally']),
        winner: state.get('winner')
    };
}

export const ResultsContainer = connect(
    mapStateToProps, actionCreators
)(Results);