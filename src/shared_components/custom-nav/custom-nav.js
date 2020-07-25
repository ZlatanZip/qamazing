import React from "react";
import {FaRegUserCircle} from "react-icons/fa";

import "./style.css";

import Logo from "../logo/components/logo";
import HamburgerButton from "../hamburger-button/hamburger-button";

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
          <div>
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
