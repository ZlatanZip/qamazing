import React, { useState } from "react";
import "./style.css";
import CustomButton from "../CustomButton/CustomButton";
import { BsSearch } from "react-icons/bs";

const CustomSearch = (props) => {
  return (
    <div>
      <input
        name="searchText"
        className="search"
        placeholder="  Search a MoP member"
        onChange={props.onChange}
      />{" "}
      <CustomButton buttonText="Find" click={props.click} />
    </div>
  );
};

export default CustomSearch;
