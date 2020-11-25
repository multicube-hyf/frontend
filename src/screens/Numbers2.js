import React, { useContext } from 'react';
import Progress from '../components/progress/Progress';
import NumberContext from '../numberContext/NumberContext';
import NumbersExercise from '../components/numbersExercise/NumbersExercise';
import Footer from '../components/Footer';

function Exercise2({ history }) {
	const {
		completedExercises,
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

			<NumbersExercise
				history={history}
				numToFind={3}
			/>
			<Footer history={history} />
		</div>
	);
}

export default Exercise2;
