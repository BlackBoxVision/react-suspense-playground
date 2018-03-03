import React from "react";

const Placeholder = props => {
  return (
    <React.Timeout ms={props.ms}>
      {didTimeout => (console.info("didTimeout", didTimeout),
        <React.Fragment>
          <span hidden={didTimeout}>{props.children}</span>
          {didTimeout ? props.render(didTimeout) : null}
        </React.Fragment>
      )}
    </React.Timeout>
  );
};

export default Placeholder;
