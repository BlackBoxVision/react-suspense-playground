import React, { Timeout } from "react";

class Placeholder extends React.Component {
  state = {
    loading: false
  };

  componentDidCatch(error, info) {
    if (typeof error === "Promise") {
      error.then(() => this.setState({
        loading: false
      }));
    }

    this.setState({
      loading: true
    });
  }

  render() {
    return (
      <Timeout ms={this.props.ms}>
        {didTimeout => this.state.loading ? this.props.fallback : this.props.children}
      </Timeout>
    );
  }
};

export default Placeholder;
