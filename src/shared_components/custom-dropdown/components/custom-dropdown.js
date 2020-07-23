import React from "react";
import {Link, useHistory} from "react-router-dom";

import LocalStorageHelper from "../../../helpers/local-storage-helper";

import "../styles/style.css";

const Dropdown = (props) => {
  const {show, name, email, dropDownToggle} = props;
  const dropDownClasses = show ? "dropdown open" : "dropdown";
  const history = useHistory();
  console.log(history);
  return (
    <div className={dropDownClasses}>
      <div className='dropdown_header'>
        <img
          className='dropdown_img'
          src={require("../../../assets/avatar.png")}
        />
        <h1>{name}</h1>
        <h4>{email}</h4>
      </div>
      <div className='dropdown_actions_wrapper'>
        {history.location.pathname === "/app/my_profile" ? (
          <Link to='/app/dashboard' onClick={dropDownToggle}>
            Dashboard
          </Link>
        ) : (
          <Link to='/app/my_profile' onClick={dropDownToggle}>
            Profile
          </Link>
        )}
        <Link to='/' onClick={LocalStorageHelper.clearUserData}>
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Dropdown;
