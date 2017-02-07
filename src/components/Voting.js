import React from 'react';
import { connect } from 'react-redux';
import Winner from './Winner';
import Vote from './Vote';
import * as actionCreators from '../action_creators';

export class Voting extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            {this.props.winner ?
                <Winner winner={this.props.winner} resetVoting={this.props.resetVoting} /> :
                <Vote {...this.props} />}
        </div>
    }
}

function mapStateToProps(state) {
    return {
        pair: state.getIn(['vote', 'pair']),
        hasVoted: state.get('hasVoted'),
        winner: state.get('winner')
    };
}

export const VotingContainer = connect(
    mapStateToProps,
    actionCreators
)(Voting);