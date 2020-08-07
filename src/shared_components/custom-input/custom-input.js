import React, {useReducer} from "react";

import "./style.css";

const CustomInput = (props) => {
  const {
    input,
    label,
    placeholder,
    errorText,
    id,
    type,
    max,
    min,
    meta,
  } = props;

  return (
    <div className='input_wrapper'>
      {label && <label className='input_field_label'>{label}</label>}
      <div>
        <input className='input_field' {...input} placeholder={placeholder} />
        {meta.touched && meta.error && (
          <small className='input_field_errorText'>{errorText}</small>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
