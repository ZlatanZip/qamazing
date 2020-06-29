import React from "react";
import { reduxForm, Field } from "redux-form";

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
      </form>
    </div>
  );
};

export default reduxForm({
  form: "Login",
})(LoginForm);
