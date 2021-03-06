import React from "react";
import GoogleLogin from "react-google-login";

import RouteHelpers from "../../helpers/route-helpers";
import routeConstants from "../../base/router/routes-constants";

const LoginGoogle = ({ login }) => {
  const googleRespose = (res) => {
    const tokenId = res.tokenObj.id_token;
    console.log(tokenId);
    if (tokenId) {
      RouteHelpers.goToRoute(routeConstants.privateRoutes.dashboard.fullPath);
    } else {
      RouteHelpers.goToRoute(routeConstants.privateRoutes.login.fullPath);
    }
  };
  return (
    <GoogleLogin
      style={{ background: "red" }}
      clientId="184114775759-9ovjrh0n1rcflc8f75q4gv2o0d9a8ms7.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={googleRespose}
      onFailure={googleRespose}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default LoginGoogle;
