import React, { useContext } from 'react';

import NumberContext from '../../numberContext/NumberContext';

import ArrowForwardSharpIcon from '@material-ui/icons/ArrowForwardSharp';
import { Fab } from '@material-ui/core';

function NextButton({ history }) {
	const { completedExercises, isCompleted, numberOfExercises } = useContext(
		NumberContext,
	);

	const handleNext = () => {
		if (completedExercises < numberOfExercises) {
			history.push(`/exercise${completedExercises + 1}`);
		} else {
			history.push(`/`);
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
