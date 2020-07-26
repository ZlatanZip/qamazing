import React from "react";

import TableCards from "../components/custom-table-cards";

import tableConstants from "../constants/table-constants";
import RouteHelpers from "../../../helpers/route-helpers";

import "../styles/style.css";

const myTable = (props) => {
  const {tableData} = props;

  const tableHeaderText = () => {
    const item = tableData.map((data) => {
      return Object.keys(data);
    });
    return item[0];
  };

  const divSelectData = (data) => {
    return RouteHelpers.goToRoute(data);
  };

  const RenderTableHeader = ({data}) => {
    return (
      <tr>
        {data &&
          data.map((title, index) => {
            return <th key={index}>{title.toUpperCase().replace("_", " ")}</th>;
          })}
      </tr>
    );
  };

  const RenderTableData = ({data}) => {
    const keys = Object.keys(data);
    console.log(keys);
    return keys.map((key, index) => {
      return (
        <td
          key={index}
          onClick={() =>
            divSelectData(`${tableConstants.tablePaths.userPath}${data.id}`)
          }
        >
          {data[key]}
        </td>
      );
    });
  };

  const RenderTableRow = (data) => {
    return data.map((dataItem, index) => {
      return (
        <tr className='table_row' key={index}>
          <RenderTableData key={index} data={dataItem} />
        </tr>
      );
    });
  };

  return window.innerWidth > 768 ? (
    <table className='table_wrapper'>
      <thead>
        <RenderTableHeader data={tableHeaderText()} />
      </thead>
      <tbody>{RenderTableRow(tableData)}</tbody>
    </table>
  ) : (
    tableData.map((dataItem, index) => {
      return <TableCards key={index} data={dataItem} />;
    })
  );
};

export default myTable;