import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const SideMenu = (props) => {
  const { show, url } = props;
  const sideMenuClasses = show ? "side_menu open" : "side_menu";
  return (
    <nav className={sideMenuClasses}>
      <ul>
        <li>
          <NavLink to={`${url}/users`} className="link">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/projects`} className="link">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/resources`} className="link">
            Resources
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideMenu;
