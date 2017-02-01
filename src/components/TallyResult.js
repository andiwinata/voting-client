import React from 'react';

const defaultPair = [];
export default class TallyResult extends React.PureComponent {
    constructor(props) {
        super(props);

        // not sure if necessary, since it is not passed to any children
        this.getPair = this.getPair.bind(this);
        this.getVotes = this.getVotes.bind(this);
    }
    
    getPair() {
        return this.props.pair || defaultPair;
    }

    getVotes(entry) {
        if (this.props.tally && this.props.tally.has(entry)) {
            return this.props.tally.get(entry);
        }
        return 0;
    }

    render() {
        return <div className="tally-result">
            <div className="tally">
                {this.getPair().map(entry =>
                    <div key={entry} className="entry">
                        <h1>{entry}</h1>
                        <div className="voteCount">{this.getVotes(entry)}</div>
                    </div>
                )}
            </div>
            <div className="management">
                <button className="next" onClick={this.props.next}>
                    Next
                </button>
            </div>
        </div>
    };
}