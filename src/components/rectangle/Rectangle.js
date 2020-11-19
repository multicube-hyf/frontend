import React from "react";

import Cube from "../cube/Cube";

import "./rectangle.css";
import { colors } from "../../helpers/colorMap";

Rectangle.defaultProps = {
  number: 10,
};

function Rectangle({ number, selectedNumber }) {
  // Generate arrays with a list of numbers
  // Highlighted numbers
  let highlightedNumbers = [...Array(selectedNumber).keys()];

  // Regular numbers
  const remainingNumbers = number - selectedNumber;
  let regularNumbers = [...Array(remainingNumbers).keys()];

  return (
    <div className="rectangle">
      {highlightedNumbers.map((number) => (
        <Cube key={number} backgroundColor={colors[selectedNumber]} />
      ))}
      {regularNumbers.map((number) => (
        <Cube key={number} backgroundColor={"#858585"} />
      ))}
    </div>
  );
}

export default Rectangle;
