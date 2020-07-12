import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import Logo from "../Logo/components/Logo";

const CustomNav = () => {
  return (
    <header className="custom_nav">
      <nav className="custom_nav_bar">
        <div>
          <h4>HamburgerButton</h4>
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
