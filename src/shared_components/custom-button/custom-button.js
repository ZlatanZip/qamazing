import React from "react";

import "./style.css";

const CustomButton = (props) => {
  const {buttonText, buttonType, disabled, click} = props;
  return (
    <button onClick={click} className='custom_button' type={buttonType}>
      {buttonText}
    </button>
  );
};

export default CustomButton;
