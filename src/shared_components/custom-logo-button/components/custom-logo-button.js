import React from "react";
import {withRouter} from "react-router-dom";

const CustomLogoButton = withRouter((props) => {
  const {history, children, path} = props;
  return (
    <div
      onClick={() => {
        history.push({path});
      }}
    >
      {children}
    </div>
  );
});

export default CustomLogoButton;
