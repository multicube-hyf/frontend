import React, { useContext} from 'react';
import Progress from '../components/progress/Progress';
import NumberContext from '../numberContext/NumberContext';
import NumbersExercise from '../components/numbersExercise/NumbersExercise';
import Footer from '../components/Footer';




function Exercise1({ history }) {
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
				numToFind={2}
				setCompletedExercises={setCompletedExercises}
				completedExercises={completedExercises}
			/>
			<Footer/>
		</div>
	);
}

export default Exercise1;
