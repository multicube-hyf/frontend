import React from "react";

import AdditionsExercise from "../components/additionsExercises/AdditionsExercise";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Addition2({ history }) {
  return (
    <div className="exerciseScreen">
    <div className="pages-title">Select Cubes</div>
    <Header/>
      <AdditionsExercise history={history} number1={4} number2={2} />
      <Footer history={history} />
    </div>
  );
}

export default Addition2;
