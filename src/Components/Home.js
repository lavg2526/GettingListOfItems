import React from "react";
import Items from "./Items";

const Home = () => {
  var listOfItems = [
    {
      item1: "Tooth Brush",
      amount1: 10,
      date1: "20230101"
    },
    {
      item2: "Washing Soap",
      amount2: 50,
      date2: "20230826"
    },
    {
      item3: "Laptop",
      amount3: 1000,
      date3: "20230525"
    }
  ];
  return (
    <>
      <h2> List of Items </h2>
      <Items list={listOfItems}></Items>
    </>
  );
};
export default Home;
