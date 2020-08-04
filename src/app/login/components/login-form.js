import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {reduxForm, Field} from "redux-form";
import GoogleLogin from "react-google-login";

import Logo from "../../../shared_components/logo/components/logo";
import CustomButton from "../../../shared_components/custom-button/custom-button";
import CustomInput from "../../../shared_components/custom-input/custom-input";

import RouteHelpers from "../../../helpers/route-helpers";
import routeConstants from "../../../base/router/routes-constants";
import formConstants from "../constants/form-constants";

import LoginGoogle from "../../../shared_components/google-login/google-login";
import {login} from "../actions/login-action";

import "../styles/style.css";

const required = (v) => {
  if (!v || v === "") {
    return "This field is required";
  }
  return undefined;
};

const LoginForm = (props) => {
  const {handleSubmit} = props;

  const dispatch = useDispatch();

  const loginHandler = async (data) => {
    await dispatch(login(data));
  };

  return (
    <form onSubmit={handleSubmit} className='form_fields'>
      <div>
        <Logo />
      </div>
      <h1 className='form_title'>{formConstants.formTitle}</h1>

      <Field
        id='email'
        type='email'
        name={formConstants.formFields.emailField}
        component={CustomInput}
        validate={required}
        label={formConstants.formLabels.emailLabel}
        placeholder={formConstants.placeholders.emailPlaceholder}
        errorText={formConstants.errorTexts.emailErrorText}
      />
      <Field
        id='password'
        type='password'
        name={formConstants.formFields.passwordField}
        component={CustomInput}
        validate={required}
        label={formConstants.formLabels.passwordLabel}
        placeholder={formConstants.placeholders.passwordPlaceholder}
        errorText={formConstants.errorTexts.passwordErrorText}
      />

      <CustomButton buttonText={formConstants.buttonText} buttonType='submit' />
      <a className='form_anchor'>{formConstants.anchorText}</a>

      <div style={{borderRadius: "25px", overflow: "hidden"}}>
        <LoginGoogle login={loginHandler} />
      </div>
    </form>
  );
};

export default reduxForm({
  form: "Login",
})(LoginForm);
