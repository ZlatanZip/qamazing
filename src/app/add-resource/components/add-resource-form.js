import React, {useState} from "react";
import {reduxForm, Field} from "redux-form";

import CustomInput from "../../../shared_components/custom-input/custom-input";
import CustomButton from "../../../shared_components/custom-button/custom-button";

import CustomSelect from "../../../shared_components/custom-select/custom-select";

import addUserConstants from "../constants/add-resource-constants";
import RouteHelpers from "../../../helpers/route-helpers";

import validate from "../validation/add-resource-validation";

import "../styles/style.css";

const AddResourceForm = (props) => {
  const {handleSubmit, pristine, submitting} = props;

  return (

    <form className='add_user_form' onSubmit={handleSubmit}>

      <div className='add_user_credentials'>
        <div className='name_and_lastname_wrapper'>
          <Field
            type='email'
            name={addUserConstants.formFields.emailField}
            component={CustomInput}
            label={addUserConstants.formLabels.emailLabel}
            placeholder={addUserConstants.placeholders.emailPlaceholder}
          />
          <Field
            type='text'
            name={addUserConstants.formFields.roleField}
            component={CustomInput}
            label={addUserConstants.formLabels.roleLabel}
            placeholder={addUserConstants.placeholders.rolePlaceholder}

          />
          <Field
            name='sex'
            component={CustomSelect}
            label='SEX'
            data={["male", "female"]}
          />
        </div>

        <CustomButton
          buttonType={addUserConstants.buttons.type.inviteButtonType}
          disabled={pristine || submitting}
          buttonText={addUserConstants.buttons.text.inviteButton}
        />
        <CustomButton
          buttonText={addUserConstants.buttons.text.backButton}
          click={() => {
            RouteHelpers.goToRoute("back");
          }}
        />
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
  form: "AddResource",
  validate,
})(AddResourceForm);
