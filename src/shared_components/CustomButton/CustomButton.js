import React from "react";

import "./style.css";

const CustomButton = (props) => {
  const { buttonText, buttonType } = props;
  return (
    <button className="form_field_button" type={buttonType}>
      {buttonText}
    </button>
  );
};

export default CustomButton;
