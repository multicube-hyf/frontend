import React, { useContext, useEffect, useState } from 'react';
import Progress from '../components/progress/Progress';
import NumberContext from '../numberContex/NumberContext';
//import Rectangle from '../components/rectangle/Rectangle';
import NumbersExercise from '../components/numbersExercise/NumbersExercise';

// const numberOfExercises = 3;

function Exercise2({ history }) {
	// const [completedExercises, setCompletedExercises] = useState(0);
	const {
		completedExercises,
		setCompletedExercises,
		numberOfExercises,
	} = useContext(NumberContext);

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
				history={history}
				numToFind={5}
				setCompletedExercises={setCompletedExercises}
				completedExercises={completedExercises}
			/>
		</div>
	);
}

export default Exercise2;
