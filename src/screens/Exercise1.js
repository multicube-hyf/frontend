import React, { useState } from "react";
import Progress from "../components/progress/Progress";
//import Rectangle from '../components/rectangle/Rectangle';
import NumbersExercise from "../components/numbersExercise/NumbersExercise";

const numberOfExercises = 3;

function Exercise1() {
  const [completedExercises, setCompletedExercises] = useState(0);

  return (
    <div className="exerciseScreen">
      <div className="progressStars">
        <Progress
          stepsNumber={numberOfExercises}
          completedStepsCount={completedExercises}
        />
        Completed: {completedExercises}
      </div>

      <NumbersExercise
        numToFind={2}
        setCompletedExercises={setCompletedExercises}
        completedExercises={completedExercises}
      />
    </div>
  );
}

export default Exercise1;
