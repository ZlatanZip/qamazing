import React from "react";
import {reduxForm, Field} from "redux-form";

import CustomButton from "../../../shared_components/custom-button/custom-button";
import CustomInput from "../../../shared_components/custom-input/custom-input";
import formConstants from "../constants/form-constants";

import "../styles/style.css";

const required = (v) => {
  if (!v || v === "") {
    return "This field is required";
  }
  return undefined;
};

const LoginForm = (props) => {
  const {handleSubmit, valid} = props;

  return (
    <div className='form_center'>
      <form onSubmit={handleSubmit} className='form_fields'>
        <h1 className='form_title'>{formConstants.formTitle}</h1>

        <Field
          name={formConstants.formFields.newPassword}
          label={formConstants.formLabels.newPasswordLabel}
          component={CustomInput}
          placeholder={formConstants.placeholders.newPasswordPlaceholder}
          errorText={formConstants.errorTexts.newPasswordErrorText}
        />
        <Field
          name={formConstants.formFields.repeatPassword}
          label={formConstants.formLabels.repeatPasswordLabel}
          component={CustomInput}
          placeholder={formConstants.placeholders.repeatPasswordPlaceholder}
          errorText={formConstants.errorTexts.repeatPasswordErrorText}
        />

        <CustomButton
          buttonText={formConstants.buttonText}
          buttonType='submit'
          disabled={!valid}
        />

        <a className='form_anchor'>{formConstants.anchorText}?</a>
        {/*  <GoogleLogin
          style={{ background: "red" }}
          clientId="184114775759-9ovjrh0n1rcflc8f75q4gv2o0d9a8ms7.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={googleRespose}
          onFailure={googleRespose}
          cookiePolicy={"single_host_origin"}
        /> */}
      </form>
    </div>
  );
};

export default reduxForm({
  form: "Register",
})(LoginForm);
