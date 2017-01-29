import React from 'react';
import Winner from './Winner';
import TallyResult from './TallyResult';

export default class Results extends React.PureComponent {
    render() {
        return this.props.winner ? 
            <Winner winner={this.props.winner}></Winner> :
            <TallyResult {...this.props} />;
    }
}