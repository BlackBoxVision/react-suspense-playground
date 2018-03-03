import React from "react";

import News from "./containers/News";
import NewsById from "./containers/NewsById";

export default class BlogApp extends React.Component {
  render() {
    return (
      <React.Fragment>
        <News /> 
      </React.Fragment>
    );
  }
}
