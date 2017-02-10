import React from 'react';

// not sure whether to use pure component or stateless component
export default function (props) {
    return <div className="winner">
        Winner is <span className="winner-name">{props.winner}!</span>
        <button className="reset-vote" onClick={props.resetVoting}>Reset Vote</button>
    </div>
}