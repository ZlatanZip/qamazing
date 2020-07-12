import React from "react";
import "./style.css";

const SideMenu = (props) => {
  const sideMenuClasses = props.show ? "side_menu open" : "side_menu";
  return (
    <nav className={sideMenuClasses}>
      <ul>
        <li>
          <a>Users</a>
        </li>
        <li>
          <a>Projects</a>
        </li>
        <li>
          <a>Resources</a>
        </li>
      </ul>
    </nav>
  );
};

export default SideMenu;
