import React from "react";
import "./Items.css";
import List from "./List";

const Items = (props) => {
  return (
    <div className="headers">
      <span> Row </span>
      <span> Expenses </span>
      <span> Expense date </span>
      <List getItems={props.list} />
    </div>
  );
};
export default Items;
