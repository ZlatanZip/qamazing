import React from "react";
import { reduxForm, Field } from "redux-form";
import GoogleLogin from "react-google-login";

import { useHistory } from "react-router-dom";

import "../styles/style.css";

import CustomButton from "../../../shared_components/CustomButton/CustomButton";
import CustomInput from "../../../shared_components/CustomInput/CustomInput";
import formConstants from "../constants/formConstants";

const required = (v) => {
  if (!v || v === "") {
    return "This field is required";
  }
  return undefined;
};

const LoginForm = (props) => {
  const { handleSubmit, valid } = props;
  let history = useHistory();

  const googleRespose = (res) => {
    const googleResponseData = {
      name: res.profileObj.name,
      email: res.profileObj.email,
    };
    console.log(res);
    console.log(res.profileObj);
    history.push("/dashboard");
  };

  return (
    <div className="form_center">
      <form onSubmit={handleSubmit} className="form_fields">
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
          disabled={!valid}
        />

        <a className="form_anchor">{formConstants.anchorText}</a>
        <div style={{ borderRadius: "25px", overflow: "hidden" }}>
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
