import React, {Component} from "react";
import {connect} from "react-redux";
import {FaLaptopMedical} from "react-icons/fa";

import CustomSearch from "../../../shared_components/custom-search/custom-search";

import RouteHelpers from "../../../helpers/route-helpers";
import routeConstants from "../../../base/router/routes-constants";

import {getUsers, searchAndSortUsers} from "../../users/actions/user-actions";

class Resources extends Component {
  componentDidMount() {
    const {getUsers} = this.props;

    /*     const component = this.componentToRenderHandler();
    this.setState((state) => {
      return {
        ...state,
        componentToRender: component,
      };
    }); */

    getUsers("helo");
  }
  render() {
    const {users, loader} = this.props;
    return (
      <div>
        <div className='dash_header'>
          <h1 style={{color: "white"}}>Resources</h1>{" "}
          <div>
            <FaLaptopMedical
              className='add_user_logo'
              size={36}
              color='white'
              onClick={() =>
                RouteHelpers.goToRoute(
                  routeConstants.privateRoutes.addResource.fullPath
                )
              }
            />
          </div>
          <CustomSearch
            placeholder='  Search resources'
            click={this.searchAndSortUserHandler}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    users: state.users.users,
    loader: state.loader.loader,
  };
};

const mapDispatchToProps = {
  getUsers,
  searchAndSortUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Resources);
