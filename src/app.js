import React from "react";

import Nws from "./containers/news";
import NwsById from "./containers/newsById";

export default class BlogApp extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nws /> 
      </React.Fragment>
    );
  }
}
