import React from "react";
import {Field, reduxForm} from "redux-form";

import CustomInput from "../../../shared_components/custom-input/custom-input";
import CustomButton from "../../../shared_components/custom-button/custom-button";

import "../styles/style.css";

const AddUser = () => {
  return (
    <div className='add_user_screen '>
      <div className='add_user_header'>
        <div>
          <h1 className='add_user_title'>Add User</h1>
          <div style={{color: "white"}}>{window.innerWidth}</div>
        </div>
      </div>
      <form className='add_user_form'>
        <div className='add_user_credentials'>
          <div className='name_and_lastname_wrapper'>
            <Field
              name='name'
              component={CustomInput}
              label='Name'
              placeholder='Enter users name'
              errorText='Name is required'
            />
            <Field
              name='lastname'
              component={CustomInput}
              label='Lastname'
              placeholder='Enter users name'
              errorText='Name is required'
            />{" "}
          </div>
          <div className='phone_and_address_wrapper'>
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
          </div>
        </div>
      </form>

      <div>
        <CustomButton buttonText='Add User' />
        <CustomButton buttonText='Cancel' />
      </div>
    </div>
  );
};

export default reduxForm({
  form: "Login",
})(AddUser);
