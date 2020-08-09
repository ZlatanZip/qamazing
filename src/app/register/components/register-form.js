import React from "react";
import {reduxForm, Field} from "redux-form";

import CustomButton from "../../../shared_components/custom-button/custom-button";
import CustomInput from "../../../shared_components/custom-input/custom-input";

import RouteHelpers from "../../../helpers/route-helpers";
import routeConstants from "../../../base/router/routes-constants";
import formConstants from "../constants/form-constants";

import LoginGoogle from "../../../shared_components/google-login/google-login";

import validate from "../validation/register-validation";

import "../styles/style.css";

const RegisterForm = (props) => {
  const {handleSubmit, pristine, submitting} = props;

  return (
    <div className='form_center'>
      <form onSubmit={handleSubmit} className='form_fields'>
        <h1 className='form_title'>{formConstants.formTitle}</h1>
        <Field
          type={formConstants.formFields.firstName}
          name={formConstants.formFields.firstName}
          component={CustomInput}
          label={formConstants.formLabels.firstNameLabel}
          placeholder={formConstants.placeholders.firstNamePlaceholder}
        />
        <Field
          type={formConstants.formFields.lastName}
          name={formConstants.formFields.lastName}
          component={CustomInput}
          label={formConstants.formLabels.lastNameLabel}
          placeholder={formConstants.placeholders.lastNamePlaceholder}
        />
        <Field
          type={formConstants.formFields.email}
          name={formConstants.formFields.email}
          label={formConstants.formLabels.emailLabel}
          component={CustomInput}
          placeholder={formConstants.placeholders.emailPlaceholder}
        />
        <Field
          type={formConstants.formFields.newPassword}
          name={formConstants.formFields.newPassword}
          label={formConstants.formLabels.newPasswordLabel}
          component={CustomInput}
          placeholder={formConstants.placeholders.newPasswordPlaceholder}
        />
        <Field
          type={formConstants.formFields.newPassword}
          name={formConstants.formFields.repeatPassword}
          label={formConstants.formLabels.repeatPasswordLabel}
          component={CustomInput}
          placeholder={formConstants.placeholders.repeatPasswordPlaceholder}
        />

        <CustomButton
          disabled={pristine || submitting}
          buttonText={formConstants.buttonText}
          buttonType='submit'
        />

        <div
          onClick={() =>
            RouteHelpers.goToRoute(routeConstants.publicRoutes.login.fullPath)
          }
          className='form_anchor'
        >
          {formConstants.anchorText}?
        </div>
        <LoginGoogle />
      </form>
    </div>
  );
};

export default reduxForm({
  form: "Register",
  validate,
})(RegisterForm);
