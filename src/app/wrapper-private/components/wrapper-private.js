import React, {Component} from "react";

import "../styles/style.css";

import Loader from "../../../shared_components/loader/component/loader";
import SideMenu from "../../../shared_components/side-menu/components/side-menu";
import CustomNav from "../../../shared_components/custom-nav/custom-nav";
import BackgroundOpacity from "../../../shared_components/background-opacity/background-opacity";
import CustomDropDown from "../../../shared_components/custom-dropdown/components/custom-dropdown";

class WrapperPrivate extends Component {
  state = {
    sideMenuOpen: false,
    dropDownOpen: false,
  };

  sideMenuToggleHandler = () => {
    this.setState((state) => {
      return {
        sideMenuOpen: !state.sideMenuOpen,
      };
    });
  };

  dropDownToggleHandler = () => {
    this.setState((state) => {
      return {
        dropDownOpen: !state.dropDownOpen,
      };
    });
  };

  backgroundOpacityToggleHandler = () => {
    this.setState({sideMenuOpen: false});
  };

  render() {
    const {children, loader, url} = this.props;
    const {sideMenuOpen, dropDownOpen} = this.state;

    let backgroundOpacity;
    if (sideMenuOpen) {
      backgroundOpacity = (
        <BackgroundOpacity click={this.backgroundOpacityToggleHandler} />
      );
    }

    return (
      <div className='wrapper_private'>
        <CustomNav
          sideMenuToggle={this.sideMenuToggleHandler}
          dropDownToggle={this.dropDownToggleHandler}
          url={url}
        />
        <SideMenu show={sideMenuOpen} url={url} />
        {backgroundOpacity}
        <CustomDropDown
          show={dropDownOpen}
          name='Zlatan Salihagic'
          email='zlatan.salihagic@mop.ba'
          dropDownToggle={this.dropDownToggleHandler}
        />
        <div className='center'>
          {children}
          {loader && <Loader text='users' />}
        </div>
      </div>
    );
  }
}

export default WrapperPrivate;
