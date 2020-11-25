import React from "react";

import NumbersExercise from "../components/numbersExercise/NumbersExercise";
import Footer from "../components/Footer";

function Exercise3({ history }) {
  return (
    <div className="exerciseScreen">
      <NumbersExercise history={history} numToFind={1} />
      <Footer history={history} />
    </div>
  );
}

export default Exercise3;
