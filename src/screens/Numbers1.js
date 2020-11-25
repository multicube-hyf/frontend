import React from "react";

import NumbersExercise from "../components/numbersExercise/NumbersExercise";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Exercise1({ history }) {
  return (
    <div className="exerciseScreen">
    <Header/>
      <NumbersExercise history={history} numToFind={2} />
      <Footer history={history} />
    </div>
  );
}

export default Exercise1;
