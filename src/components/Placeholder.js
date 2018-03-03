import React, { Timeout } from "react";

class Placeholder extends React.Component {
  state = {
    loading: false
  };

  componentDidCatch(error, info) {
    error.then(() => this.setState({
      loading: false
    }));

    this.setState({
      loading: true
    });
  }

  render() {
    return (
      <Timeout ms={this.props.ms}>
        {didTimeout => this.state.loading ? this.props.render(didTimeout) : this.props.children}
      </Timeout>
    );
  }
};

export default Placeholder;
