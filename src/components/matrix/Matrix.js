import React, { useState } from "react";
import Cube from "../cube/Cube";

import "./matrix.css";

Matrix.defaultProps = {
  number: 10,
  selectedCubes: 0,
};

function Matrix({ selectedCubes, setSelectedCubes }) {
  const [highlightedCubes, setHighlightedCubes] = useState({});

  // Generate arrays with a list of cube numbers
  let cubeNumbers = [...Array(10).keys()];

  let toggleSelect = (e) => {
    let cubeId = e.target.id;

    // Update the list of selected cubes
    let updateHighlighted = {
      ...highlightedCubes,
      [cubeId]: !highlightedCubes[cubeId],
    };
    setHighlightedCubes(updateHighlighted);

    // Update the selected cubes number
    let updatedNumber = selectedCubes;

    if (!highlightedCubes[cubeId]) {
      updatedNumber++;
    } else {
      updatedNumber--;
    }

    setSelectedCubes(updatedNumber);
  };

  return (
    <div className="matrix">
      {cubeNumbers.map((number) => (
        <Cube
          key={number}
          id={number}
          backgroundColor={"#C3C3C3"}
          toggleSelect={toggleSelect}
          selected={highlightedCubes[number]}
        />
      ))}
    </div>
  );
}

export default Matrix;
