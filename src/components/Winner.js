import React from 'react';

// not sure whether to use pure component or stateless component
export default function(props) {
    return <div className="winner">
        Winner is {props.winner}!
    </div>
}