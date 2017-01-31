import React from 'react';
import { connect } from 'react-redux';
import Winner from './Winner';
import Vote from './Vote';

export class Voting extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            {this.props.winner ?
                <Winner winner={this.props.winner} /> :
                <Vote {...this.props} />}
        </div>
    }
}

function mapStateToProps(state) {
    return {
        pair: state.getIn(['vote', 'pair']),
        winner: state.get('winner')
    };
}

export const VotingContainer = connect(mapStateToProps)(Voting);