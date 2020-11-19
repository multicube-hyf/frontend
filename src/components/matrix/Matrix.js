import React from "react";
import Cube from "../cube/Cube";

import "./matrix.css";
import { colors } from "../../helpers/colorMap";

Matrix.defaultProps = {
  number: 10,
  selectedNumber: 0
};

function Matrix({ number, selectedNumber }) {
  // Generate arrays with a list of numbers
  // Highlighted numbers
  let cubeNumbers = [...Array(10).keys()];

  
  
  return (
    <div className="matrix">
      {cubeNumbers.map((number) => (
        <Cube key={number} backgroundColor={'#c3c3c3'} />
      ))}
  
    </div>
  );
}

export default Matrix;
