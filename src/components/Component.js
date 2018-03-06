import React from 'react';
import ReactDOM from 'react-dom';

export default class Component extends React.Component {
    deferSetState(state) {
        ReactDOM.unstable_deferredUpdates(() => this.setState(state));
    }
}