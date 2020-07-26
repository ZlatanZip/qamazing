import React, {useState} from "react";

import "../styles/custom-table-cards-style.css";

const TableCards = (props) => {
  const {data} = props;
  const [showDetails, setShowDetails] = useState(false);
  const role = true;
  const tableCardClasses = showDetails
    ? "table_card_content_wrapper open"
    : "table_card_content_wrapper";
  const titles = Object.keys(data);
  const values = Object.values(data);
  const valueLength = values.length;

  console.log(titles);
  console.log(values);
  return (
    <div
      className='table_card_wrapper'
      onClick={() => {
        setShowDetails((prevState) => !prevState);
      }}
    >
      <div className='table_card_header'>
        <h4> {data.name + " " + data.lastName}</h4>
        <h4>{data.job}</h4>
      </div>

      <div className={tableCardClasses}>
        <div className='table_card_content_left'>
          {titles.slice(1).map((title, index) => {
            return <h4 style={{color: "black"}}>{title}</h4>;
          })}
        </div>
        <div>
          {values.slice(1).map((values) => {
            const value =
              typeof values !== "boolean"
                ? values
                : typeof values === "true"
                ? "true"
                : "false";

            return (
              <div>
                <h4 style={{color: "black"}}>{value}</h4>
              </div>
            );
          })}
        </div>
      </div>

      {/*    <button
          onClick={() => {
            setShowDetails((prevState) => !prevState);
          }}
        >
          show details
        </button> */}
    </div>
  );
};

export default TableCards;
