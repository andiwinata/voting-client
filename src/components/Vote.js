import React from 'react';

const defaultPair = [];
export default class Vote extends React.PureComponent {
    constructor(props) {
        super(props);

        this.getPair = this.getPair.bind(this);
        this.hasVotedFor = this.hasVotedFor.bind(this);
    }

    getPair() {
        return this.props.pair || defaultPair;
    }

    hasVotedFor(entry) {
        const myVote = this.props.myVote
        if (myVote) {
            return myVote.get('entry', null) === entry;
        } else {
            return false;
        }
    }

    render() {
        let view = <div className="vote-wrap">
            {this.getPair().map(entry =>
                <button key={entry}
                    onClick={() => this.props.vote(entry)}
                    className={this.hasVotedFor(entry) ? "voted" : ""}>
                    <h1>{entry}</h1>
                    <div className="label">
                        {this.hasVotedFor(entry) ? "Voted" : ""}
                    </div>
                </button>
            )}
        </div>

        return view;
    }
}