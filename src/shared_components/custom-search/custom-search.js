import React from "react";
import "./style.css";
import CustomButton from "../custom-button/custom-button";
/* import { GoSearch } from "react-icons/go"; */

const CustomSearch = (props) => {
  const {click, buttonText} = props;
  return (
    <div className='custom_search_wrapper'>
      <input {...props} className='search_input' />
      {/*  <GoSearch size={32} color="white" />  */}
      <CustomButton buttonText={buttonText} click={props.click} />
    </div>
  );
};

export default CustomSearch;
