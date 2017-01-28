import React from 'react';
import Winner from './Winner';
import Vote from './Vote';

export default class Voting extends React.PureComponent {
     constructor(props) {
        super(props);
     }
     
    render() {
        return <div>
            {
                this.props.winner ?
                <Winner winner={this.props.winner} /> :
                <Vote {...this.props} />
            }
        </div>
    }
}