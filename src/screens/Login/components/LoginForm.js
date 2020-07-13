import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { useHistory } from "react-router-dom";
import GoogleLogin from "react-google-login";

import { store } from "../../../base/store";
import CustomButton from "../../../shared_components/CustomButton/CustomButton";
import CustomInput from "../../../shared_components/CustomInput/CustomInput";
import formConstants from "../constants/formConstants";

import { login } from "../actions/loginActions";

import "../styles/style.css";

const required = (v) => {
  if (!v || v === "") {
    return "This field is required";
  }
  return undefined;
};

const LoginForm = (props) => {
  const { handleSubmit, valid, children } = props;
  console.log(children);
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  let history = useHistory();

  const googleRespose = (res) => {
    const googleResponseData = {
      name: res.profileObj.name,
      email: res.profileObj.email,
    };
    const user = res.tokenObj.access_token;
    loginHandler(user);
    // console.log(res);
    console.log(res.tokenObj.access_token);
    history.push("/dashboard");
  };

  const loginHandler = async (data) => {
    await dispatch(login(data));
  };

  return (
    <div className="form_center">
      <form onSubmit={handleSubmit} className="form_fields">
        <div>
          <img
            class="logo-badge"
            src="//ministryofprogramming.com/_assets/images/mop-logo-badge-cf9e20233d.svg"
            alt="Ministry of Programming"
          />
          <img
            id="logo-white"
            class="logo-text-white"
            src="//ministryofprogramming.com/_assets/images/mop-logo-text-white-b7f18a19d9.svg"
            alt="Ministry of Programming"
          />
        </div>
        <h1 className="form_title">{formConstants.formTitle}</h1>

        <Field
          name={formConstants.formFields.emailField}
          component={CustomInput}
          validate={required}
          label={formConstants.formLabels.emailLabel}
          placeholder={formConstants.placeholders.emailPlaceholder}
          errorText={formConstants.errorTexts.emailErrorText}
        />
        <Field
          name={formConstants.formFields.passwordField}
          component={CustomInput}
          validate={required}
          label={formConstants.formLabels.passwordLabel}
          placeholder={formConstants.placeholders.passwordPlaceholder}
          errorText={formConstants.errorTexts.passwordErrorText}
        />
        <CustomButton
          buttonText={formConstants.buttonText}
          buttonType="submit"
        />
        <a className="form_anchor">{formConstants.anchorText}</a>
        {user && <h1 className="form_title">{user}</h1>}
        <div style={{ borderRadius: "25px", overflow: "hidden" }}>
          {/*  {children}*/}

          <GoogleLogin
            style={{ background: "red" }}
            clientId="184114775759-9ovjrh0n1rcflc8f75q4gv2o0d9a8ms7.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={googleRespose}
            onFailure={googleRespose}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "Login",
})(LoginForm);
