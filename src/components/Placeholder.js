import React from "react";

class Placeholder extends React.Component {
  render() {
    return (
      <React.Loading>
        {isLoading => isLoading ? this.props.fallback : this.props.children}
      </React.Loading>
    );
  }
};

export default Placeholder;
