import React from "react";
import ReactDOM from "react-dom";

import BlogApp from "./app";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

const AsyncMode = React.unstable_AsyncMode;

ReactDOM.unstable_deferredUpdates(() =>
  root.render(
    <AsyncMode>
      <BlogApp />
    </AsyncMode>
  )
);
