import React from "react";
import {NavLink} from "react-router-dom";

import sideMenuLinks from "../constants/sideMenuLinks";
import "../style/style.css";

const SideMenu = (props) => {
  const {show, url} = props;
  console.log(url);
  const sideMenuClasses = show ? "side_menu open" : "side_menu";
  return (
    <nav className={sideMenuClasses}>
      <ul>
        {sideMenuLinks.map(({linkText, path}) => {
          return (
            <li>
              <NavLink to={`${url}${path}`} className='link'>
                {linkText}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SideMenu;
