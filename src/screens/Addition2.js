import React from "react";

import AdditionsExercise from "../components/additionsExercises/AdditionsExercise";
import Footer from "../components/Footer";

function Addition2({ history }) {
  return (
    <div className="exerciseScreen">
      <AdditionsExercise history={history} number1={4} number2={2} />
      <Footer history={history} />
    </div>
  );
}

export default Addition2;
