import React from "react";

class Placeholder extends React.Component {
  render() {
    return (
      <React.Timeout ms={this.props.ms}>
        {isLoading => isLoading ? this.props.fallback : this.props.children}
      </React.Timeout>
    );
  }
};

export default Placeholder;
