import React from "react";
import {reduxForm, Field} from "redux-form";

import Logo from "../../../shared_components/logo/components/logo";
import CustomButton from "../../../shared_components/custom-button/custom-button";
import CustomInput from "../../../shared_components/custom-input/custom-input";

import RouteHelpers from "../../../helpers/route-helpers";
import routeConstants from "../../../base/router/routes-constants";
import formConstants from "../constants/form-constants";

import LoginGoogle from "../../../shared_components/google-login/google-login";
import {login} from "../actions/login-action";

import validate from "../validation/login-validation";

import "../styles/style.css";

const LoginForm = (props) => {
  const {handleSubmit, pristine, reset, submitting} = props;

  const dispatch = useDispatch();

  const loginHandler = async (data) => {
    console.log(data);
    await dispatch(login(data));
  };

  return (
    <form onSubmit={handleSubmit} className='form_fields'>
      <div>
        <Logo />
      </div>
      <h1 className='form_title'>{formConstants.formTitle}</h1>

      <Field
        type={formConstants.formFields.emailField}
        name={formConstants.formFields.emailField}
        component={CustomInput}
        label={formConstants.formLabels.emailLabel}
        placeholder={formConstants.placeholders.emailPlaceholder}
        max={8}
      />
      <Field
        type={formConstants.formFields.passwordField}
        name={formConstants.formFields.passwordField}
        component={CustomInput}
        label={formConstants.formLabels.passwordLabel}
        placeholder={formConstants.placeholders.passwordPlaceholder}
      />

      <CustomButton
        disabled={pristine || submitting}
        buttonText={formConstants.button.text}
        buttonType={formConstants.button.type}
        reset={reset}
      />
      <div
        onClick={() =>
          RouteHelpers.goToRoute(
            routeConstants.publicRoutes.forgotPassword.fullPath
          )
        }
        className='form_anchor'
      >
        {formConstants.anchorText}
      </div>

      <div style={{borderRadius: "25px", overflow: "hidden"}}>
        <LoginGoogle login={loginHandler} />
      </div>
    </form>
  );
};

export default reduxForm({
  form: "Login",
  validate,
})(LoginForm);
