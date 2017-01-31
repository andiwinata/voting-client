import React from 'react';
// import { List, Map } from 'immutable';

// const pair = List.of('Trainspotting', '28 Days Later');
// // prevent unnecessary render using defaultPair
// // https://medium.com/@esamatti/react-js-pure-render-performance-anti-pattern-fb88c101332f#.42bx6667x
// const defaultPair = [];

// const tally = Map({'Trainspotting': 5, '28 Days Later': 4});

export default class App extends React.PureComponent {
    render() {
        return this.props.children;
    }
}

// export default React.createClass({
//     render: function () {
//         let finalPair = pair || defaultPair;

//         return React.cloneElement(
//             this.props.children, 
//             { pair: finalPair, tally }
//         );
//     }
// });