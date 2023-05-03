import React from "react";
import "./List.css";

const List = (props) => {
  return (
    <p className="list">
      <span>{props.getItems[0].item1} </span>
      <span>{props.getItems[0].amount1} </span>
      <span>{props.getItems[0].date1} </span>
      <span>{props.getItems[1].item2} </span>
      <span>{props.getItems[1].amount2} </span>
      <span>{props.getItems[1].date2} </span>
      <span>{props.getItems[2].item3} </span>
      <span>{props.getItems[2].amount3} </span>
      <span>{props.getItems[2].date3} </span>
    </p>
  );
};
export default List;
