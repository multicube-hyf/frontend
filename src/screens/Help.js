import React, { useState } from "react";

const defaultColors = {
  one: "#858585",
  two: "#858585",
  three: "#858585",
  four: "#858585",
  five: "#858585",
  six: "#858585",
  seven: "#858585",
  eight: "#858585",
  nine: "#858585",
  ten: "#858585",
};

function Help() {
  const [selectionColor, setSelectionColor] = useState({
    ...defaultColors,
    one: "#37ECAB",
  });
  const [currentNumber, setCurrentNumber] = useState("1");

  const handleOne = () => {
    if (selectionColor.one === "#858585") {
      let updatedSelection = { ...defaultColors, one: "#37ECAB" };
      setSelectionColor(updatedSelection);
      setCurrentNumber("1");
    }
  };

  const handleTwo = (e) => {
    if (selectionColor.two === "#858585") {
      let updatedSelection = { ...defaultColors, two: "#FCBFE3" };
      setSelectionColor(updatedSelection);
      setCurrentNumber("2");
    }
  };
  const handleThree = (e) => {
    if (selectionColor.three === "#858585") {
      let updatedSelection = { ...defaultColors, three: "#FFCF55" };
      setSelectionColor(updatedSelection);
      setCurrentNumber("3");
    }
  };
  const handleFour = (e) => {
    if (selectionColor.four === "#858585") {
      let updatedSelection = { ...defaultColors, four: "#61FF47" };
      setSelectionColor(updatedSelection);
      setCurrentNumber("4");
    }
  };
  const handleFive = (e) => {
    if (selectionColor.five === "#858585") {
      let updatedSelection = { ...defaultColors, five: "#3918FF" };
      setSelectionColor(updatedSelection);
      setCurrentNumber("5");
    }
  };
  const handleSix = (e) => {
    if (selectionColor.six === "#858585") {
      let updatedSelection = { ...defaultColors, six: "#F89705" };
      setSelectionColor(updatedSelection);
      setCurrentNumber("6");
    }
  };
  const handleSeven = (e) => {
    if (selectionColor.seven === "#858585") {
      let updatedSelection = { ...defaultColors, seven: "#849FE5" };
      setSelectionColor(updatedSelection);
      setCurrentNumber("7");
    }
  };
  const handleEight = (e) => {
    if (selectionColor.eight === "#858585") {
      let updatedSelection = { ...defaultColors, eight: "#F21212" };
      setSelectionColor(updatedSelection);
      setCurrentNumber("8");
    }
  };
  const handleNine = (e) => {
    if (selectionColor.nine === "#858585") {
      let updatedSelection = { ...defaultColors, nine: "#31E1D7" };
      setSelectionColor(updatedSelection);
      setCurrentNumber("9");
    }
  };
  const handleTen = (e) => {
    if (selectionColor.ten === "#858585") {
      let updatedSelection = { ...defaultColors, ten: "#DC2CB5" };
      setSelectionColor(updatedSelection);
      setCurrentNumber("10");
    }
  };


  return (
    <div>
      <h4 onClick={handleOne} className="one">
        1
        <div
          style={{ background: selectionColor.one }}
          className="squareOne"
        ></div>
      </h4>
      <h4 onClick={handleTwo} className="two">
        2
        <div
          style={{ background: selectionColor.two }}
          className="squareTwo"
        ></div>
        <div
          style={{ background: selectionColor.two }}
          className="squareTwo2"
        ></div>
      </h4>
      <h4 onClick={handleThree} className="three">
        3
        <div
          style={{ background: selectionColor.three }}
          className="squareThree"
        ></div>
        <div
          style={{ background: selectionColor.three }}
          className="squareThree2"
        ></div>
        <div
          style={{ background: selectionColor.three }}
          className="squareThree3"
        ></div>
      </h4>
      <h4 onClick={handleFour} className="four">
        4
        <div
          style={{ background: selectionColor.four }}
          className="squareFour"
        ></div>
        <div
          style={{ background: selectionColor.four }}
          className="squareFour2"
        ></div>
        <div
          style={{ background: selectionColor.four }}
          className="squareFour3"
        ></div>
        <div
          style={{ background: selectionColor.four }}
          className="squareFour4"
        ></div>
      </h4>
      <h4 onClick={handleFive} className="five">
        5
        <div
          style={{ background: selectionColor.five }}
          className="squareFive"
        ></div>
        <div
          style={{ background: selectionColor.five }}
          className="squareFive2"
        ></div>
        <div
          style={{ background: selectionColor.five }}
          className="squareFive3"
        ></div>
        <div
          style={{ background: selectionColor.five }}
          className="squareFive4"
        ></div>
        <div
          style={{ background: selectionColor.five }}
          className="squareFive5"
        ></div>
      </h4>
      <h4 onClick={handleSix} className="six">6
      <div style={{ background: selectionColor.six }} className="squareSix"></div>
      <div style={{ background: selectionColor.six }} className="squareSix2"> </div>
      <div style={{ background: selectionColor.six }} className="squareSix3"></div>
      <div style={{ background: selectionColor.six }} className="squareSix4"></div>
      <div style={{ background: selectionColor.six }} className="squareSix5"></div>
      <div style={{ background: selectionColor.six }} className="squareSix6"></div>
      </h4>
      <h4 onClick={handleSeven} className="seven">7
      <div  style={{ background: selectionColor.seven }} className="squareSeven"></div>
      <div style={{ background: selectionColor.seven }} className="squareSeven2"> </div>
      <div style={{ background: selectionColor.seven }} className="squareSeven3"></div>
      <div style={{ background: selectionColor.seven }} className="squareSeven4"></div>
      <div style={{ background: selectionColor.seven }} className="squareSeven5"></div>
      <div style={{ background: selectionColor.seven }} className="squareSeven6"></div>
      <div style={{ background: selectionColor.seven }} className="squareSeven7"></div>
      </h4>
      <h4 onClick={handleEight} className="eight">8
      <div style={{ background: selectionColor.eight }} className="squareEight"></div>
      <div style={{ background: selectionColor.eight }} className="squareEight2"> </div>
      <div style={{ background: selectionColor.eight }} className="squareEight3"></div>
      <div style={{ background: selectionColor.eight }} className="squareEight4"></div>
      <div style={{ background: selectionColor.eight }} className="squareEight5"></div>
      <div style={{ background: selectionColor.eight }} className="squareEight6"></div>
      <div style={{ background: selectionColor.eight }} className="squareEight7"></div>
      <div style={{ background: selectionColor.eight }} className="squareEight8"></div>
      </h4>
      <h4 onClick={handleNine} className="nine">9
      <div style={{ background: selectionColor.nine }} className="squareNine"></div>
      <div style={{ background: selectionColor.nine }} className="squareNine2"> </div>
      <div style={{ background: selectionColor.nine }} className="squareNine3"></div>
      <div style={{ background: selectionColor.nine }} className="squareNine4"></div>
      <div style={{ background: selectionColor.nine }} className="squareNine5"></div>
      <div style={{ background: selectionColor.nine }} className="squareNine6"></div>
      <div style={{ background: selectionColor.nine }} className="squareNine7"></div>
      <div style={{ background: selectionColor.nine }} className="squareNine8"></div>
      <div style={{ background: selectionColor.nine }} className="squareNine9"></div>
      </h4>
      <h4 onClick={handleTen} className="ten">10
      <div style={{ background: selectionColor.ten }} className="squareTen"></div>
      <div style={{ background: selectionColor.ten }} className="squareTen2"> </div>
      <div style={{ background: selectionColor.ten }} className="squareTen3"></div>
      <div style={{ background: selectionColor.ten }} className="squareTen4"></div>
      <div style={{ background: selectionColor.ten }} className="squareTen5"></div>
      <div style={{ background: selectionColor.ten }} className="squareTen6"></div>
      <div style={{ background: selectionColor.ten }} className="squareTen7"></div>
      <div style={{ background: selectionColor.ten }} className="squareTen8"></div>
      <div style={{ background: selectionColor.ten }} className="squareTen9"></div>
      <div style={{ background: selectionColor.ten }} className="squareTen10"></div>
      </h4>

  
      <div>
        <h2 className="Current">{currentNumber}</h2>
        <h4 onClick={handleTen}  className="tenAs1">
        <div className="squareTenAs1"></div>
        <div className="squareTen2As1"> </div>
        <div className="squareTen3As1"></div>
        <div className="squareTen4As1"></div>
        <div className="squareTen5As1"></div>
        <div className="squareTen6As1"></div>
        <div className="squareTen7As1"></div>
        <div className="squareTen8As1"></div>
        <div className="squareTen9As1"></div>
        <div className="squareTen10As1"></div>
        </h4>
      </div>
    </div>
  );
}

export default Help;
