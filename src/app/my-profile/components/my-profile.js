import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import userProfileConstants from "../constants/userProfileConstants";
//import { getUsersData } from "../../store/actions/users";

import Card from "../../../shared_components/Card/component";
import "../styles/style.css";
import Loader from "../../../shared_components/Loader/component/Loader";
import CustomButton from "../../../shared_components/CustomButton/CustomButton";
import Logo from "../../../shared_components/Logo/components/Logo";

const UserProfile = () => {
  const userInfo = useSelector((state) => state.users.userInfo);

  const [updatedFields, setUpdatedFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
 

  return (
    <div className="user_profile_wrapper">
      <Card header={<Logo />} biggerTitle="Profile" title="Senior Developer">
        <form onSubmit={() => {}} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="FormField__Input"
              placeholder={userInfo.firstName}
              name="firstName"
              value={userInfo.firstName}
              onChange={() => {}}
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="FormField__Input"
              placeholder="Enter your last name"
              name="lastName"
              value={lastName}
              onChange={() => {}}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={()=>{}}
            />
            <div className="FormField">
              <small className="danger-error"></small>
            </div>
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              E-Mail Adress
            </label>
            <input
              type="email"
              id="email"
              className="FormField__Input"
              placeholder="Enter your mail"
              name="email" 
              value={email}           
              onChange={() => {}}
            />
          </div>
          <div className="FormField">
            <CustomButton
              buttonText={userProfileConstants.formButtonText.saveButtonText}
              buttonType="submit"
              onClick={() => console.log('save'}
              className="navbar_buttons login_button_color"
            />
            <CustomButton
              buttonText={userProfileConstants.formButtonText.cancelButtonText}
              buttonType="submit"
              onClick={() => console.log("cancel")}
              className="navbar_buttons login_button_color"
            />
          </div>
        </form>
      </Card>
    </div>
  );
}

export default UserProfile
