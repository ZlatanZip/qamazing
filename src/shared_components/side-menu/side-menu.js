import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const SideMenu = (props) => {
  const sideMenuClasses = props.show ? "side_menu open" : "side_menu";
  return (
    <nav className={sideMenuClasses}>
      <ul>
        <li>
          <Link to="/dashboard/users" className="link">
            Users
          </Link>
        </li>
        <li>
          <Link to="/dashboard/projects" className="link">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/dashboard/resources" className="link">
            Resources
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideMenu;
