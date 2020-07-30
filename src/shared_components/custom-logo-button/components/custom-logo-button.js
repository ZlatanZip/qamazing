import React from "react";
import {withRouter} from "react-router-dom";
import RouteHelpers from "../../../helpers/route-helpers";

const CustomLogoButton = withRouter((props) => {
  const {children, path} = props;
  return (
    <div
      onClick={() => {
        RouteHelpers.goToRoute(path);
      }}
    >
      {children}
    </div>
  );
});

export default CustomLogoButton;
