import React from "react";

import {NavLink} from "react-router-dom";
import {FaRegUserCircle} from "react-icons/fa";

import "./style.css";

import Logo from "../logo/components/logo";
import HamburgerButton from "../hamburger-button/hamburger-button";

const CustomNav = (props) => {
  return (
    <header className='custom_nav'>
      <nav className='custom_nav_bar'>
        <div>
          <HamburgerButton click={props.toggleHandler} />
        </div>
        <div className='custom_nav_logo'>
          <Logo />
        </div>
        <div className='spacer' />
        <div className='custom_nav_bar_items'>
          <NavLink className='custom_nav_bar_item' to='/app/my_profile'>
            <FaRegUserCircle size={36} />
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default CustomNav;
