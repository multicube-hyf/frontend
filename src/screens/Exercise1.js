import React, { useState } from 'react';
import Progress from '../components/progress/Progress';
//import Rectangle from '../components/rectangle/Rectangle';
import NumbersExercise from '../components/numbersExercise/NumbersExercise';

const numberOfExercises = 3;

function Exercise1() {
	const [completedExercises, setCompletedExercises] = useState(0);

	return (
		<div>
			<Progress
				stepsNumber={numberOfExercises}
				completedStepsCount={completedExercises}
			/>
      Completed: {completedExercises}
			<NumbersExercise numToFind={5} setCompletedExercises={setCompletedExercises} completedExercises={completedExercises} />
			<NumbersExercise numToFind={2} />
			<NumbersExercise numToFind={3} />
		</div>
	);
}

export default Exercise1;
