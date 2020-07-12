import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

import Logo from "../Logo/components/Logo";
import HamburgerButton from "../HamburgerButton/HamburgerButton";

const CustomNav = (props) => {
  return (
    <header className="custom_nav">
      <nav className="custom_nav_bar">
        <div>
          <HamburgerButton click={props.toggleHandler} />
        </div>
        <div className="custom_nav_logo">
          <Logo />
        </div>
        <div className="spacer" />
        <div className="custom_nav_bar_items">
          <NavLink className="custom_nav_bar_item" to="/my_profile">
            Profile
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default CustomNav;
