import React from "react";

import AdditionsExercise from "../components/additionsExercises/AdditionsExercise";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Addition1({ history }) {
  return (
    <div className="exerciseScreen">
    <Header/>
      <AdditionsExercise history={history} number1={2} number2={3} />
      <Footer history={history} />
    </div>
  );
}

export default Addition1;
