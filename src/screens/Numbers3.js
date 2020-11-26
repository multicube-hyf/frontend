import React from "react";

import NumbersExercise from "../components/numbersExercise/NumbersExercise";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Exercise3({ history }) {
  return (
    <div className="exerciseScreen">
    <div className="pages-title">Select Cubes</div>
    <Header/>
     <NumbersExercise history={history} numToFind={1} />
      <Footer history={history} />
    </div>
  );
}

export default Exercise3;
