import React, { useContext } from 'react';
import Progress from '../components/progress/Progress';
import NumberContext from '../numberContext/NumberContext';

import AdditionsExercise from '../components/additionsExercises/AdditionsExercise';
import Footer from '../components/Footer';

function Addition1({ sum, history }) {
	const {
		completedExercises,
		setCompletedExercises,
		numberOfExercises,
	} = useContext(NumberContext);

	return (
		<div className='exerciseScreen'>
			<div className='progressStars'>
				<Progress
					stepsNumber={numberOfExercises}
					completedStepsCount={completedExercises}
				/>
			</div>
			<AdditionsExercise
				numToFind={sum}
				setCompletedExercises={setCompletedExercises}
				completedExercises={completedExercises}
			/>
			<Footer />
		</div>
	);
}

export default Addition1;
