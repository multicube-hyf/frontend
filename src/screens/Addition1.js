import React, { useState } from "react";
import Progress from "../components/progress/Progress";
//import NumbersExercise from "../components/numbersExercise/NumbersExercise";
import AdditionsExercise from "../components/additionsExercises/AdditionsExercise";

const numberOfExercises = 3;

function Addition1({sum}) {
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
   <AdditionsExercise
   numToFind={sum}
   setCompletedExercises={setCompletedExercises}
   completedExercises={completedExercises}
   />
    
    </div>
  );
}

export default Addition1;
