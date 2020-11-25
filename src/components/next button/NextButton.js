import React, { useContext, useState } from 'react';

import NumberContext from '../../numberContext/NumberContext';

import ArrowForwardSharpIcon from '@material-ui/icons/ArrowForwardSharp';
import { Fab } from '@material-ui/core';

const exerciseTypes = { 1: 'numbers', 2: 'addition' };

function NextButton({ history }) {
	const {
		completedExercises,
		setCompletedExercises,
		isCompleted,
		numberOfExercises,
		setNumberOfExercises,
	} = useContext(NumberContext);

	const [currentType, setCurrentType] = useState(1);

	const handleNext = () => {
		if (completedExercises < numberOfExercises) {
			// If the current series of exercise is not completed
			history.push(
				`/${exerciseTypes[currentType]}${completedExercises + 1}`,
			);
		} else if (completedExercises === numberOfExercises) {
			if (currentType === Object.keys(exerciseTypes).length) {
				history.push(`/`);
			} else {
				// If the current series of exercise is completed
				// Set the number of exercise for the next series
				setNumberOfExercises(3);
				setCompletedExercises(0)

				// Move to the next type of exercise
				setCurrentType(currentType + 1);
				history.push(`/${exerciseTypes[currentType + 1]}1`);
			}
		}
	};

	return (
		<>
			{isCompleted && (
				<div className='next-btn'>
					<Fab color='secondary' aria-label='edit'>
						<button className='btn btn-link' onClick={handleNext}>
							<ArrowForwardSharpIcon />
						</button>
					</Fab>
				</div>
			)}
		</>
	);
}

export default NextButton;
