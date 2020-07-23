import React from "react";

import {NavLink} from "react-router-dom";
import {FaRegUserCircle} from "react-icons/fa";

import "./style.css";

import Logo from "../logo/components/logo";
import HamburgerButton from "../hamburger-button/hamburger-button";
import CustomDropDown from "../custom-dropdown/components/custom-dropdown";

const CustomNav = (props) => {
  const {sideMenuToggle, dropDownToggle} = props;
  return (
    <header className='custom_nav'>
      <nav className='custom_nav_bar'>
        <div>
          <HamburgerButton click={sideMenuToggle} />
        </div>
        <div className='custom_nav_logo'>
          <Logo />
        </div>
        <div className='spacer' />
        <div className='custom_nav_bar_items'>
          <div to='/app/my_profile'>
            <FaRegUserCircle
              size={36}
              className='custom_nav_bar_user_logo'
              onClick={dropDownToggle}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default CustomNav;
