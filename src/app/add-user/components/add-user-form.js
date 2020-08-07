import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {reduxForm, Field} from "redux-form";
import GoogleLogin from "react-google-login";

import Logo from "../../../shared_components/logo/components/logo";

import CustomInput from "../../../shared_components/custom-input/custom-input";

import addUserConstants from "../constants/add-user-constants";

import LoginGoogle from "../../../shared_components/google-login/google-login";

import "../styles/style.css";

const required = (v) => {
  if (!v || v === "") {
    return "This field is required";
  }
  return undefined;
};

const AddUserForm = (props) => {
  const {children, handleSubmit} = props;

  return (
    <form className='add_user_form' onSubmit={handleSubmit}>
      <div className='add_user_credentials'>
        <div className='name_and_lastname_wrapper'>
          <Field
            id='email'
            type='email'
            name={addUserConstants.formLabels.emailLabel}
            component={CustomInput}
            validate={required}
            label={addUserConstants.formLabels.emailLabel}
            placeholder={addUserConstants.placeholders.emailPlaceholder}
            errorText={addUserConstants.errorTexts.emailErrorText}
          />
          <Field
            id='role'
            type='text'
            name={addUserConstants.formLabels.roleLabel}
            component={CustomInput}
            validate={required}
            label={addUserConstants.formLabels.roleLabel}
            placeholder={addUserConstants.placeholders.rolePlaceholder}
            errorText={addUserConstants.errorTexts.roleErrorText}
          />
        </div>
        {children}
        {/* <div className='phone_and_address_wrapper'>
            <Field
              name='phone'
              component={CustomInput}
              label='Phone'
              placeholder='Enter users name'
              errorText='Name is required'
            />
            <Field
              name='address'
              component={CustomInput}
              label='Adress'
              placeholder='Enter users name'
              errorText='Name is required'
            />
          </div>
          <Field
            name='email'
            component={CustomInput}
            label='Email'
            placeholder='Enter users name'
            errorText='Name is required'
          />

          <div className='active_and_deleted_wrapper'>
            <Field
              name='active'
              component={CustomInput}
              label='Active'
              placeholder='Enter users name'
              errorText='Name is required'
            />
            <Field
              name='deleted'
              component={CustomInput}
              label='Deleted'
              placeholder='Enter users name'
              errorText='Name is required'
            />
          </div>
        </div>
        <div className='add_user_job_description'>
          <Field
            name='job'
            component={CustomInput}
            label='Job'
            placeholder='Enter users name'
            errorText='Name is required'
          />
          <Field
            name='level'
            component={CustomInput}
            label='Level'
            placeholder='Enter users level'
            errorText='Name is required'
          />

          <Field
            name='contract_type'
            component={CustomInput}
            label='Contract Type'
            placeholder='Enter users name'
            errorText='Name is required'
          />
          <Field
            name='resource_tag'
            component={CustomInput}
            label='Resource Tag'
            placeholder='Enter resuorce tag number'
            errorText='Name is required'
          />
          <Field
            name='skills'
            component={CustomInput}
            label='Skills'
            placeholder='Enter users name'
            errorText='Name is required'
          />
          <div className='contract_start_and_end_wrapper'>
            <Field
              name='contract_start'
              component={CustomInput}
              label='Contract Starting Date'
              placeholder='Enter users name'
              errorText='Name is required'
            />
            <Field
              name='contract_end'
              component={CustomInput}
              label='Contract Ending Date'
              placeholder='Enter users name'
              errorText='Name is required'
            /> 
          </div>*/}
      </div>
    </form>
  );
};

export default reduxForm({
  form: "AddUser",
})(AddUserForm);
