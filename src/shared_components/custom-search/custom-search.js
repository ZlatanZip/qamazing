import React from "react";
import "./style.css";
import CustomButton from "../custom-button/custom-button";
/* import { GoSearch } from "react-icons/go"; */

const CustomSearch = (props) => {
  return (
    <div>
      <input
        name="searchText"
        className="search"
        placeholder="  Search a MoP member"
        onChange={props.onChange}
      />
      {/*    <GoSearch size={32} color="white" /> */}
      <CustomButton buttonText="Find" click={props.click} />
    </div>
  );
};

export default CustomSearch;
