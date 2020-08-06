import React, { Children } from "react";

import "./style.css";

const CustomButton = (props) => {
  const { buttonText, buttonType, disabled, click, children } = props;
  return (
    <button onClick={click} className="custom_button" type={buttonType}>
      {buttonText || children}
    </button>
  );
};

export default CustomButton;
