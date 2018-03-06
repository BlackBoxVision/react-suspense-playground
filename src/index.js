import React from "react";
import ReactDOM from "react-dom";

import BlogApp from "./app";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <React.unstable_AsyncMode>
    <BlogApp />
  </React.unstable_AsyncMode>
)