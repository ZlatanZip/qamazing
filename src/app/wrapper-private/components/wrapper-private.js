import React, {Component} from "react";

import "../styles/style.css";

import Loader from "../../../shared_components/loader/component/loader";
import SideMenu from "../../../shared_components/side-menu/side-menu";
import CustomNav from "../../../shared_components/custom-nav/custom-nav";
import BackgroundOpacity from "../../../shared_components/background-opacity/background-opacity";

class WrapperPrivate extends Component {
  state = {
    sideMenuOpen: false,
  };

  sideMenuToggleHandler = () => {
    this.setState((state) => {
      return {
        sideMenuOpen: !state.sideMenuOpen,
      };
    });
  };

  backgroundOpacityToggleHandler = () => {
    this.setState({sideMenuOpen: false});
  };

  render() {
    const {children, loader, url} = this.props;

    let backgroundOpacity;
    if (this.state.sideMenuOpen) {
      backgroundOpacity = (
        <BackgroundOpacity click={this.backgroundOpacityToggleHandler} />
      );
    }

    return (
      <div className='wrapper_private'>

        <CustomNav toggleHandler={this.sideMenuToggleHandler} url={url} />
        <SideMenu show={this.state.sideMenuOpen} url={url} />
        {backgroundOpacity}

        <div className='center'>
          {children}
          {loader && <Loader text='users' />}
        </div>

      </div>
    );
  }
}

export default WrapperPrivate;
