/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Matrix from "../matrix/Matrix";
import Rectangle from "../rectangle/Rectangle";
import Star from "../star/Star";

import "./additionsExercise.css";

function AdditionExercise({
  setCompletedExercises,
  completedExercises,
  number1 = 5,
  number2 = 3
}) {
  const [selectedCubes, setSelectedCubes] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);



  let sum = number1 + number2;
  useEffect(() => {
    // Track the completion status of the current exercise
    if (selectedCubes === sum) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  }, [selectedCubes, sum]);

  useEffect(() => {
    // Increment the completedExercise number by 1
    if (isCompleted) {
      let updateCompleted = completedExercises + 1;
      setCompletedExercises(updateCompleted);
    }
    // Decrement the completedExercise number by 1 if bigger than zero
    if (!isCompleted && completedExercises > 0) {
      let updateCompleted = completedExercises - 1;
      setCompletedExercises(updateCompleted);
    }
  }, [isCompleted]);

  return (
    <div className="row-line">
      <p className="num2find">{number1}</p>
      <Rectangle selectedNumber={number1} />
      <h2>+</h2>
      <p className="num2find">{number2}</p>
      <Rectangle selectedNumber={number2} />

      <Matrix
        selectedCubes={selectedCubes}
        setSelectedCubes={setSelectedCubes}
      />
      {isCompleted && (
        <div>
          <div className="star-position">
            <Star width={76} height={72} isHighlighted={true} />
          </div>

          <p className="star-number">{sum}</p>
          <p className="super">Super!</p>
        </div>
      )}
    </div>
  );
}

export default AdditionExercise;
