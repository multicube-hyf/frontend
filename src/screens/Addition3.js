import React, { useContext } from 'react';
import Progress from '../components/progress/Progress';
import NumberContext from '../numberContext/NumberContext';

import AdditionsExercise from '../components/additionsExercises/AdditionsExercise';
import Footer from '../components/Footer';

function Addition2({ history }) {
	const { completedExercises, numberOfExercises } = useContext(NumberContext);

	return (
		<div className='exerciseScreen'>
			<div className='progressStars'>
				<Progress
					stepsNumber={numberOfExercises}
					completedStepsCount={completedExercises}
				/>
			</div>

			<AdditionsExercise history={history} number1={1} number2={3} />
			<Footer history={history} />
		</div>
	);
}

export default Addition2;
