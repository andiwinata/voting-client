import React from 'react';
import ReactDOM from 'react-dom';

import { Route, Router, hashHistory } from 'react-router';

import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import { setState, setClientId, setConnectionState } from './action_creators';

import getClientId from './client_id';

import remoteActionMiddleware from './remote_action_middleware';

import { Provider } from 'react-redux';

import io from 'socket.io-client';

import App from './components/App';
import { VotingContainer } from './components/Voting';
import { ResultsContainer } from './components/Results';

import css from './style.css';

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', (state) => {
    store.dispatch(setState(state));
});

// adding listener on each connection event for socket io
// to be dispatched to store
[
    'connect',
    'connect_error',
    'connect_timeout',
    'reconnect',
    'reconnecting',
    'reconnect_error',
    'reconnect_failed'
].forEach(ev =>
    socket.on(ev, () => store.dispatch(setConnectionState(ev, socket.connected)))
    );

const socketMiddleware = remoteActionMiddleware(socket);
const createStoreWithMiddleware = applyMiddleware(socketMiddleware)(createStore);
const store = createStoreWithMiddleware(reducer);

store.dispatch(setClientId(getClientId()));

const routes = <Route component={App}>
    <Route path="/results" component={ResultsContainer} />
    <Route path="/" component={VotingContainer} />
</Route>;

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('app')
);