import React from "react";
import { SimpleCache } from "simple-cache-provider";

const WithCache = props => (
  <SimpleCache.Consumer>{cache => props.render(cache)}</SimpleCache.Consumer>
);

export default WithCache;
