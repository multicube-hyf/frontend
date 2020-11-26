import React, { useState } from "react";
import "./interactivePyramid.css";

import Line from "../line/Line";
import { colors } from "../../helpers/colorMap";

function InteractivePyramid({ setSelectedNumber }) {
  const [isHighlighted, setIsHighlighted] = useState({ one: true });

  const toggleSelect = (e) => {
    // Find the div number to target
    let numstring = e.currentTarget.dataset.divnum;
    // Find selected number
    let numnum = parseInt(e.currentTarget.dataset.number);

    let updatedHighlight = {};

    // If the div is not highlighted, set it to true and the rest to false
    if (!isHighlighted[numstring]) {
      updatedHighlight = { [numstring]: true };
    } else {
      // If the div is already highlighted, don't update anything
      updatedHighlight = { ...isHighlighted };
    }

    setIsHighlighted(updatedHighlight);
    setSelectedNumber(numnum);
  };

  return (
    <div>
      <div
        data-number="1"
        data-divnum="one"
        onClick={toggleSelect}
        className="pyramid-line"
      >
        <p className="p-line">1</p>
        <Line
          number="1"
          highlightColor={colors[1]}
          isHighlighted={isHighlighted.one}
        />
      </div>
      <div
        data-number="2"
        data-divnum="two"
        onClick={toggleSelect}
        className="pyramid-line"
      >
        <p className="p-line">2</p>
        <Line
          number="2"
          highlightColor={colors[2]}
          isHighlighted={isHighlighted.two}
        />
      </div>
      <div
        data-number="3"
        data-divnum="three"
        onClick={toggleSelect}
        className="pyramid-line"
      >
        <p className="p-line">3</p>
        <Line
          number="3"
          highlightColor={colors[3]}
          isHighlighted={isHighlighted.three}
        />
      </div>
      <div
        data-number="4"
        data-divnum="four"
        onClick={toggleSelect}
        className="pyramid-line"
      >
        <p className="p-line">4</p>
        <Line
          number="4"
          highlightColor={colors[4]}
          isHighlighted={isHighlighted.four}
        />
      </div>
      <div
        data-number="5"
        data-divnum="five"
        onClick={toggleSelect}
        className="pyramid-line"
      >
        <p className="p-line">5</p>
        <Line
          number="5"
          highlightColor={colors[5]}
          isHighlighted={isHighlighted.five}
        />
      </div>
      <div
        data-number="6"
        data-divnum="six"
        onClick={toggleSelect}
        className="pyramid-line"
      >
        <p className="p-line">6</p>
        <Line
          number="6"
          highlightColor={colors[6]}
          isHighlighted={isHighlighted.six}
        />
      </div>
      <div
        data-number="7"
        data-divnum="seven"
        onClick={toggleSelect}
        className="pyramid-line"
      >
        <p className="p-line">7</p>
        <Line
          number="7"
          highlightColor={colors[7]}
          isHighlighted={isHighlighted.seven}
        />
      </div>
      <div
        data-number="8"
        data-divnum="eight"
        onClick={toggleSelect}
        className="pyramid-line"
      >
        <p className="p-line">8</p>
        <Line
          number="8"
          highlightColor={colors[8]}
          isHighlighted={isHighlighted.eight}
        />
      </div>
      <div
        data-number="9"
        data-divnum="nine"
        onClick={toggleSelect}
        className="pyramid-line"
      >
        <p className="p-line">9</p>
        <Line
          number="9"
          highlightColor={colors[9]}
          isHighlighted={isHighlighted.nine}
        />
      </div>
      <div
        data-number="10"
        data-divnum="ten"
        onClick={toggleSelect}
        className="pyramid-line"
      >
        <p className="p-line">10</p>
        <Line
          number="10"
          highlightColor={colors[10]}
          isHighlighted={isHighlighted.ten}
        />
      </div>
    </div>
  );
}

export default InteractivePyramid;
