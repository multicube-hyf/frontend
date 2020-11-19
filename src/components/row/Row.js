import React from "react";
import Digit from "../digit/Digit";
import "./row.css";

Row.defaultProps = {
  backgroundColor: "#858585",
};
function Row({ number }) {
    // Generate an array with a list of number from 1 to number
    const numbers = [...Array(number).keys()];
  
    return (
      <div id="row-numbers">
        {numbers.map((number) => (
          <Digit
            key={number}
        />))}
      </div>
    );
  }
  
  export default Row;