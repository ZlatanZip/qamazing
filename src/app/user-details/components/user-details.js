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
    <form onSubmit={handleSubmit} className='form_fields'>
      <h1 className='form_title'>{formConstants.formTitle}</h1>
      <Field
        name={formConstants.formFields.fullName}
        component={CustomInput}
        label={formConstants.formLabels.fullNameLabel}
        placeholder={formConstants.placeholders.fullNamePlaceholder}
        errorText={formConstants.errorTexts.fullNameErrorText}
      />
      <Field
        name={formConstants.formFields.email}
        label={formConstants.formLabels.emailLabel}
        component={CustomInput}
        placeholder={formConstants.placeholders.emailPlaceholder}
        errorText={formConstants.errorTexts.emailErrorText}
      />
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
        buttonText={formConstants.buttonText.saveButton}
        buttonType='submit'
        disabled={!valid}
      />
      <CustomButton
        buttonText={formConstants.buttonText.cancleButton}
        buttonType='submit'
        disabled={!valid}
      />
    </form>
  );
};

export default reduxForm({
  form: "Register",
})(LoginForm);
