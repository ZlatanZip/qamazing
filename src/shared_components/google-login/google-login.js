import React from "react";

const GoogleLogin = ({ googleRespose }) => {
  console.log(googleRespose, " hello");
  return (
    <div>
      {/*  <GoogleLogin
        style={{ background: "red" }}
        clientId="184114775759-9ovjrh0n1rcflc8f75q4gv2o0d9a8ms7.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={googleRespose}
        onFailure={googleRespose}
        cookiePolicy={"single_host_origin"}
      /> */}
    </div>
  );
};

export default GoogleLogin;
