import React, {Component} from "react";
import {connect} from "react-redux";
import {RiUserAddLine} from "react-icons/ri";

import CustomSearch from "../../../shared_components/custom-search/custom-search";
import Table from "../../../shared_components/custom-table/components/custom-table";
import CustomButton from "../../../shared_components/custom-button/custom-button";
import Loader from "../../../shared_components/loader/component/loader";

import UserConstants from "../constants/user-constants";
import RouteHelpers from "../../../helpers/route-helpers";

import routeConstants from "../../../base/router/routes-constants";

import {getUsers, searchAndSortUsers} from "../../users/actions/user-actions";

import "../styles/style.css";

class Users extends Component {
  state = {
    sortBy: {
      SortByColumn: "Firstname",
      SortDirection: "ASC",
      LastSeen: 0,
      SearchText: "",
    },
  };
  componentDidMount() {
    const {getUsers} = this.props;
    const {sortBy} = this.state;
    getUsers(sortBy);
  }
  render() {
    const {users, loader} = this.props;
    console.log(users);
    return (
      <div className='users_screen '>
        <div className='user_screen_header'>
          <div>
            <h1 className='user_screen_title'>{UserConstants.userPageTitle}</h1>
            <div>
              <RiUserAddLine
                className='add_user_logo'
                size={36}
                color='white'
                onClick={() =>
                  RouteHelpers.goToRoute(
                    routeConstants.privateRoutes.addUser.fullPath
                  )
                }
              />
            </div>
          </div>

          <CustomSearch
            buttonText={UserConstants.customSearch.buttonText}
            placeholder={UserConstants.customSearch.placeholder}
            click={this.searchAndSortUserHandler}
            onChange={this.onChange}
          />
        </div>

        {loader ? (
          <Loader text={UserConstants.loaderText} />
        ) : (
          <Table tableData={users} />
        )}
        <div>
          <CustomButton buttonText={UserConstants.loadUsersButtonText} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Users);
