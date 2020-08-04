import React from "react";
import {withRouter} from "react-router-dom";
import RouteHelpers from "../../../helpers/route-helpers";

import sideMenuLinks from "../constants/sideMenuLinks";
import "../style/style.css";

const SideMenu = (props) => {
  const {show, url, sideMenuToggle, history} = props;

  const sideMenuClasses = show ? "side_menu open" : "side_menu";
  return (
    <nav className={sideMenuClasses}>
      <ul>
        {sideMenuLinks.map(({linkText, fullPath}) => {
          return (
            <li key={linkText} onClick={sideMenuToggle}>
              <div
                onClick={() => RouteHelpers.goToRoute(fullPath)}
                className='link'
              >
                {linkText}
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default withRouter(SideMenu);
