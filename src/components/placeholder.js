import React, { Fragment } from "react";

const Placeholder = props => {
  return (
    <React.Timeout ms={props.ms}>
      {didTimeout => (
        <Fragment>
          <span hidden={didTimeout}>{props.children}</span>
          {didTimeout ? props.fallback : null}
        </Fragment>
      )}
    </React.Timeout>
  );
};

export default Placeholder;
