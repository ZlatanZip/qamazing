import React from "react";
import {Field, reduxForm} from "redux-form";

import CustomInput from "../../../shared_components/custom-input/custom-input";
import CustomButton from "../../../shared_components/custom-button/custom-button";

const AddUser = () => {
  return (
    <div className='users_screen '>
      <div className='user_screen_header'>
        <div>
          <h1 className='user_screen_title'>Add User</h1>
          <div></div>
        </div>
      </div>
      <form>
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
        />
        <Field
          name='email'
          component={CustomInput}
          label='Email'
          placeholder='Enter users name'
          errorText='Name is required'
        />
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
          name='phone'
          component={CustomInput}
          label='User Name'
          placeholder='Enter users name'
          errorText='Name is required'
        />
        <Field
          name='address'
          component={CustomInput}
          label='User Name'
          placeholder='Enter users name'
          errorText='Name is required'
        />
        <Field
          name='contract_type'
          component={CustomInput}
          label='User Name'
          placeholder='Enter users name'
          errorText='Name is required'
        />
        <Field
          name='resource_tag'
          component={CustomInput}
          label='User Name'
          placeholder='Enter users name'
          errorText='Name is required'
        />
        <Field
          name='skills'
          component={CustomInput}
          label='User Name'
          placeholder='Enter users name'
          errorText='Name is required'
        />
        <Field
          name='active'
          component={CustomInput}
          label='User Name'
          placeholder='Enter users name'
          errorText='Name is required'
        />
        <Field
          name='deleted'
          component={CustomInput}
          label='User Name'
          placeholder='Enter users name'
          errorText='Name is required'
        />
        <Field
          name='contract_start'
          component={CustomInput}
          label='User Name'
          placeholder='Enter users name'
          errorText='Name is required'
        />
        <Field
          name='contract_end'
          component={CustomInput}
          label='User Name'
          placeholder='Enter users name'
          errorText='Name is required'
        />
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
