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
<<<<<<< HEAD
<<<<<<< HEAD
    const {children, loader, url} = this.props;

=======
    const {loader} = this.props;
>>>>>>> Implemented the logic of global, public and private wrapper
=======
    const {children, loader, url} = this.props;

>>>>>>> Improved global route wrapper
    let backgroundOpacity;
    if (this.state.sideMenuOpen) {
      backgroundOpacity = (
        <BackgroundOpacity click={this.backgroundOpacityToggleHandler} />
      );
    }

    return (
      <div className='wrapper_private'>
<<<<<<< HEAD
<<<<<<< HEAD
        <CustomNav toggleHandler={this.sideMenuToggleHandler} url={url} />
        <SideMenu show={this.state.sideMenuOpen} url={url} />
        {backgroundOpacity}
        <div className='center'>
          {children}
          {loader && <Loader text='users' />}
        </div>
=======
        <CustomNav toggleHandler={this.sideMenuToggleHandler} />
        <SideMenu show={this.state.sideMenuOpen} />
        {backgroundOpacity}
        {this.props.children}
        <div className='center'>{loader && <Loader text='users' />}</div>
>>>>>>> Implemented the logic of global, public and private wrapper
=======
        <CustomNav toggleHandler={this.sideMenuToggleHandler} url={url} />
        <SideMenu show={this.state.sideMenuOpen} url={url} />
        {backgroundOpacity}
        <div className='center'>
          {children}
          {loader && <Loader text='users' />}
        </div>
>>>>>>> Improved global route wrapper
      </div>
    );
  }
}

export default WrapperPrivate;
