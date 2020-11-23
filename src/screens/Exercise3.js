import React, { useContext} from 'react';
import Progress from '../components/progress/Progress';
import NumberContext from '../numberContext/NumberContext';
import NumbersExercise from '../components/numbersExercise/NumbersExercise';


function Exercise3({ history }) {
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
				numToFind={7}
				setCompletedExercises={setCompletedExercises}
				completedExercises={completedExercises}
			/>
		</div>
	);
}

export default Exercise3;
