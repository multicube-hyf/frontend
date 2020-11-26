import React from "react";
import "../interactive pyramid/interactivePyramid.css";

import Line from "../line/Line";
import { colors } from "../../helpers/colorMap";

function Pyramid() {
  const isHighlighted = true;

  return (
    <div>
      <div data-number="1" data-divnum="one" className="pyramid-line">
        <h4 className="h4-line">1</h4>
        <Line
          number="1"
          highlightColor={colors[1]}
          isHighlighted={isHighlighted}
        />
      </div>
      <div data-number="2" data-divnum="two" className="pyramid-line">
        <h4 className="h4-line">2</h4>
        <Line
          number="2"
          highlightColor={colors[2]}
          isHighlighted={isHighlighted}
        />
      </div>
      <div data-number="3" data-divnum="three" className="pyramid-line">
        <h4 className="h4-line">3</h4>
        <Line
          number="3"
          highlightColor={colors[3]}
          isHighlighted={isHighlighted}
        />
      </div>
      <div data-number="4" data-divnum="four" className="pyramid-line">
        <h4 className="h4-line">4</h4>
        <Line
          number="4"
          highlightColor={colors[4]}
          isHighlighted={isHighlighted}
        />
      </div>
      <div data-number="5" data-divnum="five" className="pyramid-line">
        <h4 className="h4-line">5</h4>
        <Line
          number="5"
          highlightColor={colors[5]}
          isHighlighted={isHighlighted}
        />
      </div>
      <div data-number="6" data-divnum="six" className="pyramid-line">
        <h4 className="h4-line">6</h4>
        <Line
          number="6"
          highlightColor={colors[6]}
          isHighlighted={isHighlighted}
        />
      </div>
      <div data-number="7" data-divnum="seven" className="pyramid-line">
        <h4 className="h4-line">7</h4>
        <Line
          number="7"
          highlightColor={colors[7]}
          isHighlighted={isHighlighted}
        />
      </div>
      <div data-number="8" data-divnum="eight" className="pyramid-line">
        <h4 className="h4-line">8</h4>
        <Line
          number="8"
          highlightColor={colors[8]}
          isHighlighted={isHighlighted}
        />
      </div>
      <div data-number="9" data-divnum="nine" className="pyramid-line">
        <h4 className="h4-line">9</h4>
        <Line
          number="9"
          highlightColor={colors[9]}
          isHighlighted={isHighlighted}
        />
      </div>
      <div data-number="10" data-divnum="ten" className="pyramid-line">
        <h4 className="h4-line">10</h4>
        <Line
          number="10"
          highlightColor={colors[10]}
          isHighlighted={isHighlighted}
        />
      </div>
    </div>
  );
}

export default Pyramid;
