import React from "react";

import RouteHelpers from "../../../helpers/route-helpers";

import "../style.css";

const Logo = ({path}) => {
  return (
    <div className='logo_wrapper' onClick={() => RouteHelpers.goToRoute(path)}>
      <img
        className='logo-badge logo'
        src='//ministryofprogramming.com/_assets/images/mop-logo-badge-cf9e20233d.svg'
        alt='Ministry of Programming'
      />
      <img
        id='logo-white logo'
        className='logo-text-white'
        src='//ministryofprogramming.com/_assets/images/mop-logo-text-white-b7f18a19d9.svg'
        alt='Ministry of Programming'
      />
    </div>
  );
};

export default Logo;
