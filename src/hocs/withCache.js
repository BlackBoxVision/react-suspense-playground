import React from "react";
import { SimpleCache } from "simple-cache-provider";

const withCache = Component => props => (
  <SimpleCache.Consumer>
    {cache => <Component cache={cache} {...props} />}
  </SimpleCache.Consumer>
);

export default withCache;
