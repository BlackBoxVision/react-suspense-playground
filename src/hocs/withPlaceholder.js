import React from "react";
import Placeholder from "../components/Placeholder";

const defaults = {
    ms: 250,
    fallback: <h1>Loading..</h1>
}

const withCache = (Component, options = defaults) => props => (
  <Placeholder ms={options.ms} fallback={options.fallback}>
    <Component {...props} />
  </Placeholder>
);

export default withCache;