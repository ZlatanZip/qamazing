import React from "react";

import "./style.css";

import CustomButton from "../CustomButton/CustomButton";

const CustomForm = (props) => {
  const { title, buttonText, buttonType, handleSubmit, children } = props;
  return (
    <div className="form_center">
      <form {...props} className="form_fields">
        <h1 className="form_title">{title}</h1>
        {children}
        <CustomButton buttonText={buttonText} buttonType={buttonType} />
      </form>
    </div>
  );
};

export default CustomForm;
