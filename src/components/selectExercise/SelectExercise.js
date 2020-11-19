import React from "react";
import Matrix from "../matrix/Matrix";


import "./select.css";

function SelectExercise({ numToFind, selectedNumber }) {
  return (
    <div className="row-line">
      <p>{numToFind}</p>
      <Matrix selectedNumber={selectedNumber} />
    </div>
  );
}

export default SelectExercise;
