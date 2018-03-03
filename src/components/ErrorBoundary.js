import React from 'react';

export default class ErrorBoundary extends React.Component {
    state = {
        error: null,
        info: null
    };

    componentDidCatch(error, info) {
        this.setState({
            error,
            info
        });
    }

    render() {
        if (this.state.error) {
            return this.props.render && this.props.render(this.state);
        }

        return this.props.children;
    }
}