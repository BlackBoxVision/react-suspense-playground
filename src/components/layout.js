import "../styles/layout.css";

import React from "react";

const Layout = props => (
  <div className="layout">
    <header className="layout-header">
      <h3 className="layout-title">Home</h3>
    </header>
    <div className="layout-content">{props.children}</div>
    <footer className="layout-footer">
      <p className="layout-copyright">Copyright @ Kid 2018</p>
    </footer>
  </div>
);

export default Layout;
