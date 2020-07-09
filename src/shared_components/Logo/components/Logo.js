import React from "react";

const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        class="logo-badge"
        src="//ministryofprogramming.com/_assets/images/mop-logo-badge-cf9e20233d.svg"
        alt="Ministry of Programming"
      />
      <img
        id="logo-white"
        class="logo-text-white"
        src="//ministryofprogramming.com/_assets/images/mop-logo-text-white-b7f18a19d9.svg"
        alt="Ministry of Programming"
      />
    </div>
  );
};

export default Logo;
