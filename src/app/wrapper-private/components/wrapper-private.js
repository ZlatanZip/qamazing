import React, {Component} from "react";

import "../styles/style.css";

import Loader from "../../../shared_components/loader/component/loader";
import SideMenu from "../../../shared_components/side-menu/components/side-menu";
import CustomNav from "../../../shared_components/custom-nav/custom-nav";
import BackgroundOpacity from "../../../shared_components/background-opacity/background-opacity";
import CustomDropDown from "../../../shared_components/custom-dropdown/components/custom-dropdown";
import {FaWeight} from "react-icons/fa";
import {withRouter} from "react-router-dom";

class WrapperPrivate extends Component {
  state = {
    sideMenuOpen: false,
    dropDownOpen: false,
  };
  componentDidMount() {
    console.log(this.props);
  }

  closeMenuWhenNotUsedHandler = () => {
    if (!this.state.sideMenuOpen) this.setState({sideMenuOpen: false});
  };

  closeDropDownWhenNotUsedHandler = () => {
    if (!this.state.dropDownOpen) this.setState({dropDownOpen: false});
  };

  sideMenuToggleHandler = () => {
    this.forceUpdate();
    if (this.state.sideMenuOpen === true)
      setTimeout(this.closeMenuWhenNotUsedHandler, 3000);
    this.setState((state) => {
      return {
        sideMenuOpen: !state.sideMenuOpen,
      };
    });
  };

  dropDownToggleHandler = () => {
    setTimeout(this.closeDropDownWhenNotUsedHandler, 3000);
    this.setState((state) => {
      return {
        dropDownOpen: !state.dropDownOpen,
      };
    });
  };

  backgroundOpacityToggleHandler = () => {
    this.setState({sideMenuOpen: false});
  };
  as = () => {
    return this.forceUpdate();
  };
  render() {
    const {children, loader, url, history} = this.props;
    const {sideMenuOpen, dropDownOpen} = this.state;
    /*   let urla = window.location.href;
    console.log(urla); forceUpdate() */
    let urls = window.location.href;
    /* 
    ["click", "popstate", "onload"].forEach((evt) =>
      window.addEventListener(
        evt,
        function (as) {
          requestAnimationFrame(() => {
            if (urls !== this.location.href) {
              console.log("hello from nested lolly");
            }
            urls = this.location.href;
          });
        },
        true
      )
    ); */
    let backgroundOpacity;
    if (sideMenuOpen) {
      backgroundOpacity = (
        <BackgroundOpacity click={this.backgroundOpacityToggleHandler} />
      );
    }

    return (
      <div className='wrapper_private wrapper_background'>
        <CustomNav
          sideMenuToggle={this.sideMenuToggleHandler}
          dropDownToggle={this.dropDownToggleHandler}
          url={url}
        />
        <SideMenu
          show={sideMenuOpen}
          sideMenuToggle={this.sideMenuToggleHandler}
        />
        {backgroundOpacity}
        <CustomDropDown
          show={dropDownOpen}
          name='Zlatan Salihagic'
          email='zlatan.salihagic@mop.ba'
          dropDownToggle={this.dropDownToggleHandler}
        />
        <div className='wrapper_private_content'>
          {children}
          {loader && <Loader text='users' />}
        </div>
      </div>
    );
  }
}

export default WrapperPrivate;
