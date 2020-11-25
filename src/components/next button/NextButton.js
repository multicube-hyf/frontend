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
		setIsCompleted,
		numberOfExercises,
		setNumberOfExercises,
		currentType,
		setCurrentType,
	} = useContext(NumberContext);

	const handleNext = () => {
		if (completedExercises < numberOfExercises) {
			// If the current series of exercise is not completed
			// Go to next exercise in the series

			history.push(
				`/${exerciseTypes[currentType]}${completedExercises + 1}`,
			);
		} else if (completedExercises === numberOfExercises) {
			// If the current series of exercise is completed
			// Set the number of exercise for the next series

			if (currentType === Object.keys(exerciseTypes).length) {
				// If there is no more exercise type, reset to default values
				setNumberOfExercises(3);
				setCompletedExercises(0);
				setIsCompleted(false);
				setCurrentType(1);

				// Redirect to home
				history.push(`/`);
			} else {
				setNumberOfExercises(3);

				// Move to the next type of exercise
				let updatedType = currentType + 1;

				setCurrentType(updatedType);
				setCompletedExercises(0);
				setIsCompleted(false);

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
